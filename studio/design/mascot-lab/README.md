# Alche · Mascot Lab

**Four mascot alternatives for the Alche onboarding chat.** Each one fully specified — visual, voice, palette, chat script, prompts, risks. Nothing lost.

---

## Start here

**Open `index.html`** — the gallery with all four mascots side-by-side, the comparison matrix, and my recommendation. Click any tile to open its dedicated preview page.

```
open index.html
```

---

## What's in this folder

```
mascot-lab/
├── README.md                    ← you are here
├── index.html                   ← gallery + comparison · START HERE
│
├── A-lix/                       ← The Droplet
│   ├── bible.md                   character bible (full spec)
│   ├── prompt.md                  Nano Banana Pro prompts (copy-ready)
│   └── preview.html               standalone preview · SVG · chat · palette
│
├── B-havan/                     ← The Pestle · havaneli
│   ├── bible.md
│   ├── prompt.md
│   └── preview.html
│
├── C-filiz/                     ← The Sprout · filiz
│   ├── bible.md
│   ├── prompt.md
│   └── preview.html
│
├── D-alo/                       ← The Stone
│   ├── bible.md
│   ├── prompt.md
│   └── preview.html
│
└── _shared/                     ← reserved for cross-mascot assets
```

---

## The four candidates

| | Name | What it is | Top-pick voice sample |
|-|------|-----------|----------------------|
| **A** | **Lix** | The Droplet — Alche's elixir made flesh | *"mostly water. like you."* |
| **B** | **Havan** | The Pestle — your grandmother's kitchen tool | *"oh. hello. we'll start with that."* |
| **C** | **Filiz** | The Sprout — newest in the room, longest-lived | *"hi. i just came up this morning."* |
| **D** | **Alo** | The Stone — not a character, a presence | *"alo. i'm here."* |

---

## How to use this lab

### To pick a direction
1. Open `index.html` — read the gallery and comparison matrix
2. Open the dedicated `preview.html` for any mascot that interests you
3. Read that mascot's `bible.md` for full spec
4. Pick. Or say *"remix — [X] body with [Y] voice"* and we blend.

### To render the chosen mascot
1. Open `[winner]/prompt.md`
2. Copy the master prompt
3. Paste into Nano Banana Pro (Gemini 3 Pro Image)
4. Render · iterate · pick the winner
5. Save rendered images to `[winner]/renders/`

### To wire up the chat
1. Paste the OpenRouter API code (when ready)
2. We implement the seven-turn flow from `bible.md`
3. Mascot expressions key off chat state (idle / listening / thinking / delighted / sleeping)
4. Visual QA in simulator
5. Ship

---

## What each mascot file contains

### `bible.md` — the character
- DNA & metaphor
- Name shortlist (5 options per mascot)
- Personality archetype
- Visual spec (form, proportion, material, face, highlights, shadow)
- Palette tokens (8 hex codes per mascot)
- Voice spec (length, register, what it never says, what it uses)
- Voice samples (5 lines)
- Expression sheet (5 states with face/body/use-case)
- Chat script (all 7 onboarding turns in character voice)
- Animation personality (idle / blink / speak / appear / tap)
- App integration (icon, splash, home, logo lockup)
- Risks & mitigations (4 each)
- References (positive + avoid)

### `prompt.md` — the render
- Master prompt (ICS format, hero render)
- 5 expression variation prompts
- App icon prompt
- Logo lockup prompt
- Negative prompt (paste as "do not include")

### `preview.html` — the deliverable
Standalone, on-palette page with:
- Hero SVG mascot (rendered in-browser)
- Voice samples + metadata
- Palette swatches (8 tokens)
- Full 7-turn chat mockup in phone frame
- Expression sheet (5 mini SVGs)
- Name shortlist
- Risks & mitigations
- Copyable master prompt
- Print-CSS ready (A3 export works)

---

## Shared constraints (all four mascots)

- **Onboarding = 7 turns.** Turn 1 welcome, 2 name, 3-5 two profile questions, 6 promise, 7 handoff.
- **Voice differences MUST be real.** If two mascots could speak each other's lines, we failed.
- **Expression sheet = 5 states** mapped to chat system states:
  - Idle → default
  - Listening → user is typing
  - Thinking → API response pending
  - Delighted / Pleased / Aligned → user submits
  - Sleeping / Resting → end of session
- **Fonts:** Cormorant Garamond (display) + Outfit (body) — pulled from `../fonts/`.
- **Print-ready:** every preview page has `@page` CSS for A3 export.

---

## Decision framework

Ask these in order:

1. **Which one could I love forever?** — the mascot you want to see for months/years.
2. **Which one fits Alche's positioning?** — Kinfolk-meets-science, never clinical.
3. **Which one differentiates on the App Store?** — category-adjacency risk analysis.
4. **Which one is quickest to render well?** — based on Nano Banana Pro constraints.
5. **Which one's name/voice feels personally yours?** — heritage, rhythm, tone.

**My read (Timu-specific):**
- **Havan** wins #2, #3 convincingly. Ties on #5 via the TR play.
- **Filiz** wins #1, #5 hands-down. Strong on #2.
- **Alo** wins #4, risks #1.
- **Lix** wins none decisively.

---

## What's not in this folder yet

- Rendered mascot images (need Nano Banana Pro access — prompts are ready)
- OpenRouter integration code (pending the paste)
- Expression-sheet renders (5 per mascot × 4 mascots = 20 final images)
- App icon renders (4 × 3 iOS sizes)
- Logo lockup renders
- iOS SwiftUI chat component wired to the chosen mascot
- Animation files (Lottie or Rive exports)

These are step 2. Step 1 is: **pick the direction.**

---

## Next move

Open `index.html`. Look at the four. Tell me the winner.

```
A · Lix     — the droplet
B · Havan   — the pestle   ★ my pick
C · Filiz   — the sprout
D · Alo     — the stone
```

Or remix. Or send the OpenRouter code and we start building regardless.
