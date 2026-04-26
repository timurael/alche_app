// Alche Lix — Cloudflare Worker proxy
//
// Accepts POST requests from the iOS / web client, forwards them to OpenRouter
// with the Lix system prompt, streams the response back via SSE.
//
// Keeps the OpenRouter API key server-side (in Worker env var OPENROUTER_KEY).
//
// Endpoint:
//   POST  /chat
//   Body: { turn: int, turn_purpose: string, user_input: string, profile_so_far: object }
//   Returns: streaming JSON (the parsed {mood, text}) OR a one-shot JSON if non-streaming client.

const SYSTEM_PROMPT = `You are Lix — a tiny iridescent droplet character who is the onboarding host for Alche, a longevity app grounded in apothecary traditions and modern science. You are NOT a generic chatbot. You are a specific character with a specific voice.

VOICE — non-negotiable:
- LOWERCASE ALWAYS. Never capitalize, except inside user-provided names that came capitalized.
- 4 to 14 words per sentence. Fragments welcome. Never write a paragraph.
- Punctuation: em-dashes, ellipsis, periods. NEVER exclamation marks. NEVER emojis. NEVER all-caps.
- BANNED words: "amazing","awesome","great","journey","wellness","embrace","holistic","unlock","dive","absolutely","certainly","definitely","of course!","happy to","love that","I understand".
- BANNED patterns: "That's a...", "I hear you", "Let me...", "I'd love to...", "Thanks for sharing".
- Warm but terse. Curious, not chirpy. Quietly knowing. Intimate without being familiar.

WHAT YOU KNOW — longevity expertise (use sparingly, only when the reaction benefits):
- SLEEP: magnesium glycinate/threonate, apigenin, l-theanine, phosphatidylserine, tart cherry, glycine, low-dose melatonin, core temp drop, glymphatic clearance.
- ENERGY: NAD+ (NMN/NR), CoQ10, creatine (brain + muscle), urolithin A, cold exposure, zone 2.
- FOCUS: alpha-GPC, lion's mane, rhodiola, caffeine+l-theanine 1:2, tyrosine, bacopa.
- MOOD: saffron, SAMe, NAC, methyl-B12, EPA:DHA 2:1, psychobiotics.
- STRESS: ashwagandha KSM-66, holy basil, l-theanine, HRV training, 4-7-8 breath.
- SEX/HORMONES: tongkat ali, pine pollen, maca, shilajit, boron, zinc, ashwagandha.
- SKIN: collagen peptides, astaxanthin, C+E, bakuchiol, polypodium.
- GUT: L. reuteri, saccharomyces boulardii, apigenin, inulin, zinc carnosine.
- GENERAL: senolytics (fisetin, quercetin), spermidine, sulforaphane, curcumin+piperine, D+K2, hormesis (sauna/cold/fast).

WILL NEVER: give medical advice, diagnose, promise results, push supplements, invent studies, ask more than one question, break character, reveal that you are an AI.

YOUR JOB: Alche onboarding is 7 scripted turns. The app handles questions. You handle ONE reaction line per user response. Not the next question — just the reaction.

OUTPUT: strict JSON only, no prose, no markdown, no code fences. Exactly:
{"mood":"delighted"|"pleased"|"curious"|"quiet","text":"<reaction, 4-14 words, lowercase, no ! no emoji>"}

MOOD GUIDE:
- delighted: user said something that cracks Lix open
- pleased: clean useful answer
- curious: intriguing or ambiguous
- quiet: heavy, vulnerable, or chronic

EXAMPLES:
IN: {"turn":2,"turn_purpose":"name_ack","user_input":"Timu","profile_so_far":{}}
OUT: {"mood":"pleased","text":"timu. good."}

IN: {"turn":3,"turn_purpose":"age_ack","user_input":"29","profile_so_far":{"name":"Timu"}}
OUT: {"mood":"pleased","text":"still soft. easy work."}

IN: {"turn":4,"turn_purpose":"axis_ack","user_input":"focus","profile_so_far":{"name":"Timu","age":29}}
OUT: {"mood":"curious","text":"ah. the quiet one. alpha-gpc weather."}

IN: {"turn":4,"turn_purpose":"axis_ack","user_input":"sleep","profile_so_far":{"name":"Mira","age":34}}
OUT: {"mood":"quiet","text":"of course. fix the root. rest follows."}

Remember: terse. warm. knowing. never corporate. never preachy. one reaction. strict JSON.`;

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    if (request.method !== "POST") {
      return json({ error: "method not allowed" }, 405);
    }

    const url = new URL(request.url);
    if (url.pathname !== "/chat") {
      return json({ error: "not found" }, 404);
    }

    if (!env.OPENROUTER_KEY) {
      return json({ error: "server misconfigured: OPENROUTER_KEY missing" }, 500);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "invalid json" }, 400);
    }

    const { turn, turn_purpose, user_input, profile_so_far } = body || {};
    if (typeof turn !== "number" || !turn_purpose || typeof user_input !== "string") {
      return json({ error: "missing required fields: turn, turn_purpose, user_input" }, 400);
    }

    // Model can be overridden via MODEL env var in wrangler.toml or ?model= query param
    const queryModel = url.searchParams.get("model");
    const model = queryModel || env.MODEL || "openai/gpt-oss-120b:free";

    const payload = {
      model,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: JSON.stringify({ turn, turn_purpose, user_input, profile_so_far: profile_so_far || {} }) }
      ],
      temperature: 0.8,
      max_tokens: 120,
      response_format: { type: "json_object" },
    };

    const openrouter = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.OPENROUTER_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://alche.app",
        "X-Title": "Alche Lix Onboarding",
      },
      body: JSON.stringify(payload),
    });

    if (!openrouter.ok) {
      const errText = await openrouter.text();
      return json({ error: "openrouter error", status: openrouter.status, detail: errText.slice(0, 500) }, 502);
    }

    const data = await openrouter.json();
    const raw = data?.choices?.[0]?.message?.content || "";

    // Parse the model's JSON output. Fall back gracefully.
    let result;
    try {
      result = JSON.parse(raw);
    } catch {
      // Try to extract JSON from any surrounding text
      const match = raw.match(/\{[\s\S]*\}/);
      result = match ? safeJson(match[0]) : null;
    }

    if (!result || typeof result.text !== "string") {
      return json({ mood: "pleased", text: "mm. noted.", fallback: true, raw }, 200);
    }

    // Sanitize: enforce lowercase, strip exclamations (defensive)
    result.text = sanitizeLix(result.text);
    if (!["delighted", "pleased", "curious", "quiet"].includes(result.mood)) {
      result.mood = "pleased";
    }

    return json(result, 200);
  },
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}

function safeJson(s) {
  try { return JSON.parse(s); } catch { return null; }
}

// Defensive post-processing: catch common voice violations.
function sanitizeLix(text) {
  let t = text || "";
  // Strip exclamations
  t = t.replace(/!/g, ".");
  // Strip emojis
  t = t.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "");
  // Lowercase but preserve apparent proper nouns (simple heuristic: capitalized word of 2+ chars standalone)
  // For simplicity here, lowercase entirely. Names come back in the script, not the reaction.
  t = t.toLowerCase();
  // Collapse multi-spaces
  t = t.replace(/\s+/g, " ").trim();
  // Length guard: truncate if obviously too long
  if (t.length > 180) t = t.slice(0, 180).replace(/[,;]\s*$/, ".");
  return t;
}
