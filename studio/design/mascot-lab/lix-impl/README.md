# Lix · Implementation

The live, runnable onboarding chat. **Lix** (the droplet) + **gpt-oss-120b** via OpenRouter + **Cloudflare Worker** proxy + scripted-shell architecture.

---

## Run the demo locally (tonight)

1. Open `demo.html` in your browser directly:
   ```
   open /Users/timoel/Desktop/Projects/brands/alche/mascot-lab/lix-impl/demo.html
   ```
2. A modal asks for your OpenRouter API key. Paste it.
3. Key goes into `sessionStorage` only — evaporates when you close the tab. Not written to disk.
4. Lix greets you. Play through the 7 turns.
5. The right panel shows profile capture + LLM log in real-time.

**Warning:** browser-mode calls OpenRouter directly. Only use on trusted machines. For production, deploy the Worker (below) and the key never leaves Cloudflare.

---

## Deploy the Worker (production)

Prereqs: Node 18+, Cloudflare account (free), `wrangler` CLI.

```bash
# 1. install wrangler once
npm install -g wrangler

# 2. log in to Cloudflare
wrangler login

# 3. from this folder
cd mascot-lab/lix-impl/worker

# 4. store the OpenRouter key as a Worker secret (never committed)
wrangler secret put OPENROUTER_KEY
# paste the key at the prompt

# 5. deploy
wrangler deploy

# 6. wrangler prints a URL like:
#    https://alche-lix-proxy.<your-subdomain>.workers.dev
# 7. use it with the demo:
#    open "demo.html?worker=https://alche-lix-proxy.<your-subdomain>.workers.dev/chat"
```

After deployment the demo switches to production mode (green banner) and calls the Worker instead of OpenRouter directly. The key is now server-side only.

---

## What's in this folder

```
lix-impl/
├── README.md                 ← this file
├── demo.html                 ← standalone runnable chat (open in browser)
├── .env.example              ← placeholder (real .env is gitignored)
├── .gitignore
│
├── lix/
│   ├── system-prompt.md      ← the full system prompt (source of truth)
│   └── turns.js              ← 7-turn script (JS module, inlined in demo.html)
│
└── worker/
    ├── worker.js             ← Cloudflare Worker (streaming-ready, CORS, sanitizer)
    └── wrangler.toml         ← deployment config
```

---

## Architecture

```
┌─────────────────────────────────────────┐
│  demo.html (browser)                     │
│  ├─ Lix SVG (5 mood states)              │
│  ├─ Turn script (scripted shell)         │
│  ├─ Chat bubbles + choice chips          │
│  └─ Profile capture panel                │
└────────────┬────────────────────────────┘
             │ POST /chat  { turn, purpose, user_input, profile }
             ▼
┌─────────────────────────────────────────┐
│  Cloudflare Worker (worker.js)           │
│  ├─ Reads OPENROUTER_KEY from env        │
│  ├─ Loads SYSTEM_PROMPT (Lix voice)      │
│  ├─ CORS + input validation              │
│  └─ Sanitizes output (no "!", lowercase) │
└────────────┬────────────────────────────┘
             │ POST openrouter.ai/api/v1/chat/completions
             ▼
┌─────────────────────────────────────────┐
│  OpenRouter → openai/gpt-oss-120b        │
│  Returns: {"mood":"...","text":"..."}    │
└─────────────────────────────────────────┘
```

---

## How the flow works (scripted shell + LLM reactions)

Each of the 7 turns has a fixed purpose. The client drives the questions. The LLM only shapes the 1-line reaction between turns.

| Turn | Purpose | Awaits | Captures | LLM reacts |
|------|---------|--------|----------|------------|
| 1 | intro + name ask | free text | `name` | no (next turn reacts) |
| 2 | name ack + age ask | free text (13–110) | `age` | yes |
| 3 | age ack + axis pick | choice (sleep/energy/focus/sex/mood) | `chief_complaint` | yes |
| 4 | axis ack + brand promise | auto-advance | — | yes |
| 5 | consent check | choice (okay / tell me more) | `consent` | yes |
| 6 | personalized preview | auto-advance | — | no (hard-coded per axis) |
| 7 | handoff | choice (let's go) | — | no |

This guarantees: every user gets asked for name + age + axis + consent. Lix never goes off-rails. The LLM's job is limited to *being charming* in the pre-defined reaction slots.

---

## Lix's longevity knowledge

Lix isn't a generic chatbot — she's a character with actual domain expertise. The system prompt loads her with current longevity science across:

- **Sleep** (magnesium, apigenin, l-theanine, phosphatidylserine, glycine, tart cherry)
- **Energy** (NAD+, CoQ10, creatine, urolithin A, cold exposure, zone 2)
- **Focus** (alpha-GPC, lion's mane, rhodiola, caffeine+theanine, tyrosine)
- **Mood** (saffron, SAMe, NAC, methyl-B, EPA:DHA, psychobiotics)
- **Stress** (ashwagandha, tulsi, breath protocols, HRV)
- **Sex / hormones** (tongkat ali, maca, shilajit, boron, zinc)
- **Skin** (collagen peptides, astaxanthin, bakuchiol)
- **Gut** (L. reuteri, apigenin, zinc carnosine)
- **General** (fisetin, quercetin, spermidine, sulforaphane, D+K2, hormesis)

She uses these sparingly, only when the reaction benefits. She *never* prescribes, diagnoses, or promises results. She offers.

Full knowledge base lives in `lix/system-prompt.md`.

---

## Customizing

### Change the model
In `worker/worker.js` or the inlined browser prompt, swap the `model` field:
- `openai/gpt-oss-120b` (current — open-weight, cheap)
- `anthropic/claude-sonnet-4.6` (best voice adherence, ~10× cost)
- `anthropic/claude-haiku-4.5` (fast, decent voice, mid cost)
- `google/gemini-2.5-flash` (cheapest, uneven lowercase)

### Change the voice
Edit `lix/system-prompt.md`. The demo inlines a version — if you edit, update both or refactor to fetch the prompt from a shared file.

### Add a turn
Edit `lix/turns.js` (or the inlined `LIX_TURNS` in `demo.html`). Pattern is:
```js
{
  id: 8,
  purpose: "some_new_step",
  prompts: ["lix bubble 1", "lix bubble 2"],
  awaits: "free_text" | "choice" | null,
  choices: [...],              // if choice
  capture: "field_name",        // if you want to save the input
  expect_reaction: true,        // if the LLM should react next turn
  mood_default: "pleased"
}
```

### Port to Swift / iOS
The scripted shell pattern is straightforward to translate:
- Port `turns.js` → a Swift enum + struct
- Port the `callLix()` function → `URLSession` call to your deployed Worker
- Render the Lix SVG via `SwiftUIShapes` or embed as asset
- State machine identical

---

## Known gotchas

- **Browser CORS:** OpenRouter allows direct browser calls, but it's against best practice for production. Always use the Worker for shipping.
- **gpt-oss-120b output discipline:** occasionally it slips into Title Case or uses an exclamation mark. The Worker's `sanitizeLix()` catches both (lowercases, strips `!`). If you see voice drift, tighten the system prompt's banned-words list.
- **Key exposure:** the key you pasted earlier is in this chat's history. Rotate it on OpenRouter once you're done testing.
- **Rate limits:** OpenRouter's default is generous but real. The Worker should eventually add per-IP rate limiting if Alche goes viral.

---

## Next after you test

1. Play through the demo a dozen times — corner cases, short names, weird ages.
2. Note any voice drift or fallback hits in the session log panel.
3. If Lix sounds off → tighten the system prompt (banned words, more few-shots).
4. Deploy Worker.
5. Port to the Swift iOS app in `app/`.
6. Wire the SVG mascot states to match the mood output.
7. Persist the profile to your backend + start the daily-ritual flow.

Happy mixing. 🤍
