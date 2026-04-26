---
blend-date: 2026-04-24
blend-author: Agent B (blend)
status: active
supersedes: Group 01 onboarding screens (partial)
---

# Lix × App-Redesign — The Blend

## The reconciliation in one paragraph

**Lix wins the onboarding.** The eight editorial onboarding screens were written *before* Lix shipped as a working chat demo — now that Lix exists, runs, and is voiced to a higher fidelity than the editorial cards could ever reach, the pre-auth surface becomes **one screen: a Lix chat flow.** The editorial dialog-first voice does not die; it becomes the voice of the app *after* Lix hands off. Lix is onboarding's host; the narrator-as-Alche is the app's resident. They are the same sensibility at two registers: Lix speaks; Alche reads. Of the eight onboarding cards, **six collapse into Lix's 7 turns**, **Auth survives as a post-chat handoff**, and **GlowScanInvitation is relocated** out of onboarding entirely (Sprint 2, post-auth, where it belongs).

## Scope comparison

| Group 01 — Onboarding screens (app-redesign) | Lix 7-turn chat (lix-impl) | Blend decision |
|---|---|---|
| **01 Welcome** | Turn 1 (intro + name ask) | **REPLACE** — Welcome becomes Lix's turn 1. The editorial "Some apps count steps / this one will listen" three-liner is reborn as Lix's opening bubbles: "hi. i'm lix." / "i mix things. small doses. long timelines." / "what should i call you?" |
| **02 BrandMoment** | Turn 4 (brand promise) | **MERGE** — the black-curtain "I'll be reading you every morning. Let's start by listening." becomes Lix's turn 4 brand promise: "here's my promise — one small thing, every morning." The black curtain stays as a *post-chat interstitial* (0.8s, between turn 7 and Auth) carrying the "— Alche" signature. That is the single visual handshake from Lix → Alche. |
| **03 QuickScan** | Turn 2 (age) + Turn 3 (axis) | **REPLACE** — QuickScan's multi-question form (age, gender, complaint, etc.) compresses into Lix's two scripted questions (age, axis). The extra data QuickScan used to capture (weight, height, sleep habits) is deferred to post-auth Profile editing. Onboarding's job is commitment, not completion. |
| **04 GoalSelection** | Turn 3 (axis pick) | **REPLACE** — the italic goal list becomes Lix's choice chips (sleep · energy · focus · sex · mood). Same taxonomy, different surface. |
| **05 FocusAreaReveal** | Turn 6 (personalized preview) | **REPLACE** — the "your focus areas" reveal moment is reborn as Lix's hard-coded turn-6 personalized hook ("for you, timu: start with magnesium glycinate, 8pm..."). One protocol hook, not three focus-area cards. |
| **06 SupplementRecommendation** | Turn 6 (personalized preview, hard-coded per axis) | **REPLACE (partial)** — the onboarding version is absorbed into Lix turn 6 (she names one or two supplements in-voice, not a stack list). A *real* supplement-recommendation screen survives post-auth in the Shop / Protocols flow, populated by the live stack, not by onboarding. |
| **07 GlowScanInvitation** | (not in Lix flow) | **RELOCATE** — this was never really onboarding; it's a feature invitation. Moves to *post-auth Home* as a first-run ritual prompt. Cut from Group 01 entirely. |
| **08 Auth** | (after chat, handoff to Apple Sign In) | **KEEP (repositioned)** — survives as the screen after Lix's turn 7 ("ready when you are. →"). Apple Sign In happens here. Editorial voice resumes here: *"Your read begins. Sign in to save it."* This is the voice baton-pass. |

## What Lix replaces (cut from app-redesign Onboarding group)

- **Welcome** — replaced by Lix turn 1 (intro). The editorial masthead and "Alche · Your Read" signature are harvested for the post-chat black-curtain interstitial.
- **BrandMoment** — replaced by Lix turn 4. The black curtain survives as a 0.8s bridge between turn 7 and Auth.
- **QuickScan** — replaced by Lix turns 2+3. The deferred data (weight, gender, sleep habits) is a post-auth Profile concern.
- **GoalSelection** — replaced by Lix turn 3 choices. Exact same axis taxonomy.
- **FocusAreaReveal** — replaced by Lix turn 6 ("for you, name: start with X").
- **SupplementRecommendation** (onboarding version only) — replaced by Lix turn 6 prose. A separate post-auth Shop/Protocol recommendation surface is untouched.
- **GlowScanInvitation** — relocated to post-auth Home first-run, not onboarding.

## What remains as separate screens after Lix chat

- **Auth** — survives. Post-chat. The italic editorial voice returns here to carry Lix's handoff into the app proper. One screen: Apple Sign In + italic read + "your read begins."
- **Post-chat interstitial** (new, ~0.8s) — black curtain, single italic line "— Alche", serves as the visual baton-pass Lix → Alche.

## Voice reconciliation

The redesign's editorial dialog-first voice (proper casing, Newsreader italic, declarative 28pt lines like "You slept 6h 42m.") is **not** the same as Lix's chat voice (lowercase, 4–14 words, banned "!", warm-terse). These coexist as **one sensibility at two registers**:

- **Pre-auth (Lix chat, 7 turns, ~2 minutes).** Lix voice — lowercase, terse, embodied in the droplet mascot. Scripted prompts + LLM reactions. This is onboarding, not app use. The user is meeting a character.
- **Post-auth (17 screens).** Editorial dialog-first voice — proper casing, Newsreader italic 28pt, declarative reads like *"You slept 6h 42m."* The narrator is Alche — present, observational, not personified. This is app use, not onboarding.
- **The bridge.** The black-curtain interstitial between Lix's turn 7 and Auth holds exactly one line: *"— Alche"* in italic Newsreader. This is where Lix's lowercase hands the pen to Alche's italic. It is the only screen where both voices touch.
- **The throughline.** The `AlcheReadCard` mock-read generator (`HomeViewModel.generateMockReads()`) carries a family resemblance to Lix — terse, observational, non-cheerleading — without adopting Lix's full lowercase/fragment style. Editorial dialog-first *is Lix's voice translated for adult editorial formatting.* Same DNA. Different register.

The user never experiences whiplash because the sensibility — quiet, warm, terse, knowing, never corporate — holds across both voices. Only the casing and the speaker identity change.

## Mascot presence after onboarding

**Option (a): Lix disappears after handoff. Voice remains. Mascot never seen again.**

**Recommended.** This matches Alche's editorial restraint. Lix is the *onboarding host* — a character who greets you, asks who you are, promises one thing, and then dissolves. After Auth, the app is not a character-driven experience; it is a narrator-driven editorial surface. A persistent droplet in the status bar would read Duolingo, not Aesop. Lix's droplet form becoming the app-icon and splash screen is *enough* persistence — it's the memory of her, not her presence.

**What Lix leaves behind:**
- App icon is the Lix droplet (already specified in `A-lix/bible.md`).
- Splash screen is the droplet, 600ms drop-and-settle, then wordmark.
- First post-auth Home greeting keeps a whisper of Lix's register in the very first AlcheRead of the user's life ("first morning. we'll go slowly.") — rendered in editorial italic, not lowercase, but authored in Lix's cadence.
- Nowhere else. No avatar in Profile. No droplet in a status strip. No chatbot button. She was the host. The host leaves when dinner starts.

Considered and rejected: option (b) "cameo in Profile greeting." Adds surface-area without adding meaning. The Profile greeting works better as a pure editorial read. Rejected: option (c) "persistent presence" — violates Alche's restraint principle and pulls the product toward mascot-app category risk flagged in the bible ("Duolingo-adjacent kawaii," "AI-slop 3D mascot").

## Technical architecture (summary for Sprint 1 Swift agents)

The Lix chat ships as a new SwiftUI subsystem at `app/Alche/Features/Onboarding/Lix/`:

```
app/Alche/Features/Onboarding/Lix/
├── LixChatView.swift           — full-screen chat UI: mascot area + bubbles + input/chips
├── LixChatViewModel.swift      — @Observable state machine for 7-turn script
├── LixMascot.swift             — SwiftUI view with 5 mood states (delighted/pleased/curious/quiet/sleeping), SVG-to-Shape port
├── LixTurns.swift              — static array of LixTurn structs (port of turns.js)
├── LixSystemPrompt.swift       — multi-line Swift constant = the full system prompt string
├── LixAPIClient.swift          — actor calling Worker endpoint (URL from UserDefaults during dev, hard-coded in prod), local fallback reactions on network failure
├── LixProfile.swift            — captures name, age, chief_complaint, consent
└── LixMoodState.swift          — enum for the 5 moods
```

**Old views disposition:**
- `WelcomeView.swift` — **DELETE.** Replaced by `LixChatView`.
- `BrandMomentView.swift` — **DELETE.** Its black-curtain becomes a 0.8s interstitial inside the onboarding coordinator, not its own screen.
- `QuickScanView.swift` — **DELETE.** Its data-capture responsibilities are absorbed by `LixProfile` + post-auth Profile editing.
- `GoalSelectionView.swift` — **DELETE.** Absorbed into turn 3 chips.
- `FocusAreaRevealView.swift` — **DELETE.** Absorbed into turn 6 prose.
- `SupplementRecommendationView.swift` — **KEEP**, but repoint. The onboarding instance is cut; the file is retargeted to serve the post-auth Shop/Protocols surface. Rename recommended: `ProtocolRecommendationView.swift`.
- `GlowScanInvitationView.swift` — **KEEP**, but relocate. Moves out of `Features/Onboarding/` into `Features/Home/` or `Features/GlowScan/` as a first-run prompt card. Rename recommended: `GlowScanFirstRunCard.swift`.
- `AuthView.swift` — **KEEP** in `Features/Onboarding/`. Repurposed as the post-chat handoff. Add an `italic baton-pass read` above the Apple Sign In container.

**Onboarding coordinator flow (Swift):**
```
1. LixChatView (modally full-screen, no nav bar)
   ├─ 7 turns run via LixChatViewModel
   └─ on terminal "let's go" → publishes LixHandoff(profile)
2. BrandCurtainInterstitial (0.8s, auto-advance, reduce-motion = instant)
   └─ italic "— Alche"
3. AuthView (Apple Sign In + italic read "your read begins")
   └─ on auth success → HomeView
```

## Mockup addendum

Single new mockup: `app-redesign/screens/lix-chat/dialog-mockup.html`.

Figma-style frame (375×812) showing Lix mid-conversation at turn 3 (age → axis pick). Includes: mascot area at top (droplet SVG, pleased mood), chat history (exchanges 1–2 rendered in Lix's voice), current prompt "one more — pick the one that's loudest:" as a Lix bubble, choice chips (sleep · energy · focus · sex · mood), home indicator. No tab bar (pre-auth). Shared-tokens.css + shared-components.css. The `.direction-caption` documents the 7-turn compression.

## Master deck patch (propose only — do not implement)

Patches to apply to `app-redesign/alche-app-redesign.html`:

1. **Group 01 intro (line ~767–783):**
   - Retitle: `Onboarding — meet Lix first.`
   - Replace the existing Group 01 description with: *"Onboarding is a two-minute conversation with Lix, a droplet mascot. She asks for your name, your age, and the one thing that's loudest. Then she hands you to Alche — the narrator who lives in the app. Eight editorial onboarding cards collapsed into one scripted chat plus a handoff screen."*
   - Replace the 8-item "Welcome / BrandMoment / QuickScan / ..." pill strip (around line 789) with a 3-item strip: `Lix chat · Handoff · Auth`.

2. **Screen cards 01–07 in Group 01 (lines ~803–944):**
   - Remove the seven individual `<iframe>` cards for Welcome, BrandMoment, QuickScan, GoalSelection, FocusAreaReveal, SupplementRecommendation, GlowScanInvitation.
   - Replace with **one** card: `Screen 01 · Onboarding — Lix chat`, iframe pointing to `screens/lix-chat/dialog-mockup.html`, Swift line `app/Alche/Features/Onboarding/Lix/LixChatView.swift`, caption noting "eight editorial cards compress into one scripted conversation."
   - Add one more card: `Screen 02 · Onboarding — Auth (handoff)` that keeps the existing Auth iframe but re-captions it as "the baton-pass from Lix (lowercase) to Alche (italic)."
   - GlowScanInvitation card: **move** out of Group 01 and into Group 03 (or add to Home's post-auth first-run section).

3. **Add a new spotlight section between Home and Group 01 (~line 760):**
   - Title: `Lix — the droplet who hosts the first two minutes.`
   - Body: short paragraph describing the mascot subsystem, the voice register difference (lowercase chat vs italic editorial), the handoff. One small illustration or the Lix SVG centered. One note: *"After onboarding, Lix disappears. Her droplet form persists only as the app icon."*

4. **Roadmap table (around line 1445–1460):**
   - Sprint 1 row `Welcome` → rename to `Lix chat (subsystem)`, effort `L` (chat UI + mascot SVG port + API client), Swift file `app/Alche/Features/Onboarding/Lix/*`.
   - Sprint 3 rows for BrandMoment, QuickScan, GoalSelection, FocusAreaReveal, SupplementRecommendation → **DELETE.** Merged into the Lix subsystem.
   - Sprint 3 row `GlowScanInvitation` → move to Sprint 2 under Group 03 as `First-run prompt`, effort `S`.
   - Sprint 3 row `Auth` → move to Sprint 1 alongside Lix chat (they ship together), effort `M`.

5. **Preface / narrator kit section:**
   - Add a two-sentence note: *"Onboarding speaks lowercase through Lix. The app speaks italic through Alche. They are the same voice at two registers — one for welcome, one for resident."*

## PROGRESS.md patch (propose only — do not implement)

Status changes to propose in `app-redesign/PROGRESS.md`:

- **Group 01 row 01 Welcome:** Swift file column → `LixChatView.swift`. Status → note "merged into Lix subsystem."
- **Group 01 rows 02–06 (BrandMoment, QuickScan, GoalSelection, FocusAreaReveal, SupplementRecommendation onboarding instance):** Mark the entire row with a strikethrough or `DROPPED — merged into Lix subsystem`. Keep the row for audit-history traceability.
- **Group 01 row 07 GlowScanInvitation:** Move the row into Group 03 with a note "was Group 01 · 07 — relocated to post-auth first-run."
- **Group 01 row 08 Auth:** No status change, but update caption to "now handles Lix → Alche handoff."
- **New row** at top of Group 01: `00 Lix chat (subsystem) — LixChatView.swift + 7 supporting files — Mockup ✅ — Swift plan pending (Sprint 1)`.
- **Deliverables table:** add two rows:
  - `Lix chat mockup — app-redesign/screens/lix-chat/dialog-mockup.html — ✅`
  - `Lix blend doc — app-redesign/LIX-BLEND.md — ✅`

## Next Sprint 1 briefing

For the parallel Swift agents about to ship Welcome + Profile + Discover:

- **Welcome agent → becomes Lix chat agent.** The scope explodes. You are no longer porting a three-line italic hero. You are shipping a 7-turn chat subsystem: `LixChatView` + `LixChatViewModel` + `LixMascot` (5 mood states, SVG port from `mascot-lab/A-lix/preview.html`) + `LixTurns` (static array port of `turns.js`) + `LixSystemPrompt` (constant string from `lix/system-prompt.md`) + `LixAPIClient` (actor hitting the deployed Worker URL) + `LixProfile` + `LixMoodState`. Deploy the Worker first (instructions in `mascot-lab/lix-impl/README.md`). **Do not** re-author Lix's voice in Swift copy — every bubble Lix says is already specified in `turns.js`. Your job is plumbing, state machine, mascot rendering, network fallback. Effort jumps S → L. Also ship the 0.8s `BrandCurtainInterstitial` and the updated `AuthView` as the handoff. Walled off: no editorial Welcome/BrandMoment/QuickScan/GoalSelection/FocusAreaReveal/SupplementRecommendation views exist anymore — do not port their mockups; they are deleted.

- **Profile agent.** Profile does **not** show Lix. Option (a) is locked: mascot disappears after handoff. Build Profile per its dialog-mockup unchanged. Note: you inherit data that used to be captured in QuickScan (weight, height, sleep habits) — surface these as *editable profile fields* rather than onboarding questions. They should be empty by default; the user fills them over time, not upfront. Pre-fill only `name`, `age`, `chief_complaint` from `LixProfile` on first launch.

- **Discover agent.** No blend impact. Build Discover per its dialog-mockup unchanged. The Lix → Alche voice handoff is complete before Discover is ever rendered. Voice here is pure editorial italic.

One cross-cutting note for all three: the `AlcheReadCard` mock-read generator should **author its first post-auth read** in Lix's cadence but in italic register — e.g., *"First morning. We'll go slowly."* This is the only lingering echo of Lix after handoff. After the first read, the cadence stays editorial but can broaden.
