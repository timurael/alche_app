// Lix · 7-turn onboarding script
//
// Scripted shell (architecture 2A): the app controls the questions,
// the LLM only generates the 1-line reaction between turns.
//
// Each turn has:
//   - id: integer
//   - purpose: short label passed to the LLM
//   - prompts: array of pre-scripted Lix bubbles to display BEFORE user input
//   - awaits: one of {"free_text" | "choice" | null}
//   - choices?: array of chip options for "choice" awaits
//   - capture?: name of the profile field to save the user's raw input under
//   - expect_reaction: whether to call the LLM after user responds (false for first/last turns)

export const LIX_TURNS = [

  // ─────────────────────────────────────────────────────────────
  // TURN 1 · Hello. Introduce self. Ask for name.
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    purpose: "intro",
    prompts: [
      "hi. i'm lix.",
      "i mix things. small doses. long timelines.",
      "what should i call you?"
    ],
    awaits: "free_text",
    capture: "name",
    expect_reaction: false,   // turn 2 does the reaction
    mood_default: "curious"
  },

  // ─────────────────────────────────────────────────────────────
  // TURN 2 · React to name. Ask for age.
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    purpose: "name_ack",
    prompts: [
      // LLM reaction goes here, then scripted bridge:
      "quick — how old is this body?"
    ],
    awaits: "free_text",
    capture: "age",
    expect_reaction: true,
    mood_default: "pleased",
    validate: (v) => {
      const n = parseInt(v, 10);
      return Number.isInteger(n) && n >= 13 && n <= 110;
    }
  },

  // ─────────────────────────────────────────────────────────────
  // TURN 3 · React to age. Ask for chief complaint / axis.
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    purpose: "age_ack",
    prompts: [
      // LLM reaction, then:
      "one more — pick the one that's loudest:"
    ],
    awaits: "choice",
    choices: ["sleep", "energy", "focus", "sex", "mood"],
    capture: "chief_complaint",
    expect_reaction: true,
    mood_default: "pleased"
  },

  // ─────────────────────────────────────────────────────────────
  // TURN 4 · React to chief complaint. Offer the shape of Alche.
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    purpose: "axis_ack",
    prompts: [
      // LLM reaction, then:
      "here's my promise —",
      "one small thing, every morning.",
      "no pills-that-look-like-clinical. no rituals-that-feel-like-work.",
      "just us."
    ],
    awaits: null,             // no input needed, auto-advance
    expect_reaction: true,
    auto_advance_delay: 2400, // ms before advancing to turn 5
    mood_default: "curious"
  },

  // ─────────────────────────────────────────────────────────────
  // TURN 5 · Gentle permission check before committing.
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    purpose: "consent",
    prompts: [
      "one thing before we start.",
      "i'll ask, i'll offer. you'll always choose.",
      "nothing prescribed. nothing pushy.",
      "okay with you?"
    ],
    awaits: "choice",
    choices: ["okay with me", "tell me more"],
    capture: "consent",
    expect_reaction: true,
    mood_default: "quiet"
  },

  // ─────────────────────────────────────────────────────────────
  // TURN 6 · Tiny reveal — show we're personalized already.
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    purpose: "personalize_preview",
    prompts: [
      // dynamic prompt built from profile:
      // filled in by the client before rendering
      "[[DYNAMIC]]"
    ],
    awaits: null,
    expect_reaction: false,
    auto_advance_delay: 2600,
    mood_default: "pleased",

    // The client will build this string from captured fields.
    // Uses profile.chief_complaint to pick a direction.
    build_prompt: (profile) => {
      const name = profile.name || "friend";
      const axis = (profile.chief_complaint || "").toLowerCase();
      const hooks = {
        sleep:  `for you, ${name}: start with magnesium glycinate, 8pm. one less phone, 30 min before bed. that's it.`,
        energy: `for you, ${name}: creatine 5g, morning. a cold rinse at the end of your shower. that's it.`,
        focus:  `for you, ${name}: caffeine with l-theanine, 2:1. one 90-minute block, no slack. that's it.`,
        sex:    `for you, ${name}: ashwagandha in the evening. zinc at dinner. see how two weeks feel.`,
        mood:   `for you, ${name}: saffron capsule, morning. omega-3 at lunch. little sun before 10am.`,
      };
      return hooks[axis] || `for you, ${name}: one small thing, every morning. we'll shape it together.`;
    }
  },

  // ─────────────────────────────────────────────────────────────
  // TURN 7 · Handoff into the app.
  // ─────────────────────────────────────────────────────────────
  {
    id: 7,
    purpose: "handoff",
    prompts: [
      "ready when you are.",
      "→"
    ],
    awaits: "choice",
    choices: ["let's go"],
    capture: null,
    expect_reaction: false,
    is_terminal: true,
    mood_default: "delighted"
  },

];

// ─────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────

export function getTurn(id) {
  return LIX_TURNS.find(t => t.id === id);
}

export function nextTurnId(currentId) {
  const cur = getTurn(currentId);
  if (!cur || cur.is_terminal) return null;
  return currentId + 1;
}

// Build the LLM input for a given turn + user response.
export function buildLLMRequest(turnId, userInput, profile) {
  const turn = getTurn(turnId);
  return {
    turn: turnId,
    turn_purpose: turn.purpose,
    user_input: userInput,
    profile_so_far: profile
  };
}

// Fallback reaction if the LLM fails or returns invalid JSON.
// Keeps the chat moving without breaking Lix's voice.
export function fallbackReaction(turnId, userInput, profile) {
  const turn = getTurn(turnId);
  const mood = turn?.mood_default || "pleased";
  const fallbacks = {
    name_ack: [`${(userInput || "").toLowerCase()}. good.`, `okay.`, `noted.`],
    age_ack: [`mm. noted.`, `okay.`, `good.`],
    axis_ack: [`ah. okay.`, `noted. we'll work with that.`, `mm. got it.`],
    consent: [`okay.`, `good.`],
  };
  const options = fallbacks[turn.purpose] || [`mm.`, `okay.`];
  const text = options[Math.floor(Math.random() * options.length)];
  return { mood, text };
}
