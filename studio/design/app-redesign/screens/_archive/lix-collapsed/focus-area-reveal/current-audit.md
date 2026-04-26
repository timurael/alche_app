---
screen: FocusAreaReveal
slug: focus-area-reveal
group: onboarding
primary-swift-file: app/Alche/Features/Onboarding/FocusAreaRevealView.swift
status: audited
audit-date: 2026-04-24
---

# FocusAreaReveal — Audit

**Purpose:** After QuickScan completes, reveal the 3 computed focus areas back to the member as validation of what Alche heard.

**Current structure (top to bottom):**
- "YOUR FOCUS AREAS" mono overline + stacked italic "Your Alchemy, / Revealed" headline (lines 23-32)
- Scroll with 3 `AlcheCard` goal cards staggered in sequentially (600ms + 300ms per card, lines 39-51, 127-147)
- Each card: index overline, SF Symbol icon, `alcheDisplayS` italic goal name, `|"user feeling"` blockquote with 2px left bar (lines 82-123), mono codeTag footer
- Sticky bottom `AlcheButton` "Continue" appearing after reveal (lines 56-72)

**3 problems:**
1. **"Revealed" is theater, not dialog** — The word "Revealed" (line 30) and the staggered animation (lines 127-147) dramatize the moment as a game-show reveal. It treats goal computation like a magic trick. A companion would simply *say* what it heard.
2. **Card chrome dominates the actual insight** — Each `AlcheCard` wraps icon + index + title + quote + code tag (lines 82-123). The card's rounded border and the 2px accent bar compete with the real payload: three goal names. Dialog-first would deliver the names as three italic lines of voice, not three UI cards.
3. **No connection to the QuickScan answers that produced this** — The recommendation engine runs at line 13-17 off `quickScanAnswers` but the screen never shows *why* these goals. The "user feeling" quote (line 109) is a static library string, not a reflection of what the user actually said. The moment of validation is wasted.

**Dialog-first transformation:**
Become a single editorial read in italic Newsreader: "You told me about your sleep, / your stress, / and the mirror you're tired of checking. / So this is where we'll start." Then three quiet list lines naming the goals, each with a tiny mono code-tag suffix — not cards, just voice. The staggered entrance becomes a 300ms fade for the whole block. One primary action: "Continue with these" as mono underlined. Secondary "Adjust" escape hatch below.

**Available data to feed the dialog:**
- `appState.userWellnessProfile.quickScanAnswers` (the raw answers)
- `recommendedGoals` computed from `MockQuestionnaireService.computeGoalRecommendations(...)`
- Each `WellnessGoal`: `displayName`, `index`, `userFeeling`, `codeTag`, iconForGoal mapping (lines 151-158)
- Up to 3 goals, capped by `.prefix(3)` (line 16)
- Time since onboarding started

**Tone direction for this screen:**
Reflective, quietly confirming — "here's what I heard in what you said." Validation, not reveal.

---
