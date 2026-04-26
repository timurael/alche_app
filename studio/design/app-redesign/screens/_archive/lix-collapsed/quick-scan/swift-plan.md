---
screen: QuickScan
slug: quick-scan
status: designed
design-date: 2026-04-24
---

# QuickScan — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Onboarding/QuickScanView.swift`

## What changes vs current

**Remove:**
- Hero progress bar + loud "N OF N" counter at top (lines 45-69)
- RoundedRectangle(AlcheRadii.md) answer cards (line 220)
- Blue checkmark + `alchePrimary` border-glow selection state (lines 213, 224)
- Sparkles-icon micro-insight banner (lines 240-268) — its job moves into the interstitial
- Old multi-select header "SELECT UP TO N (count/max)" capsule styling (lines 114-122)

**Add:**
- `QSTopBar` — mono "Back" link left, small "03 · OF · 05" counter right; 2px hairline 5-segment progress below
- `QSVoice` subview — a 2-sentence italic Newsreader paragraph that reflects the previous answer (pulled from `viewModel.allAnswers.last`)
- `QSQuestion` italic read with optional `em`-style span for the key verb ("feel it", "lose it", "notice it")
- `QSAnswerRow` — flat, no card chrome, 1px hairline divider, selected state = 2px left accent bar in `Color.alchePrimary` + italic Newsreader label weight swap + filled-black square mark with white checkmark
- `AlcheInterstitial` component — italic Newsreader between answers and CTA, voicing what Alche just heard ("I'm hearing sleep and stress. Tell me one more — or keep going.")
- `QSFooter` — "DRAFT · YOUR FIRST READ" + elapsed-time mono readout

**Keep:**
- Multi-select cap logic (max 3)
- `viewModel.allAnswers` answer storage
- `QuickScanQuestion` data model
- Question-to-question navigation via `QuickScanViewModel`

## View structure (top to bottom)

1. **QSTopBar** — back link + "NN · OF · NN" mono counter
2. **QSProgressHairline** — 5 segments, filled by `currentIndex`
3. **QSVoice** — italic kicker ("● ALCHE · LISTENING") + 2-line reflective paragraph
4. **QSQuestion** — italic Newsreader 26pt, with inline primary-tinted emphasis span
5. **QSSelectMeta** — "Choose up to three" + live count readout (if multi-select)
6. **QSAnswerList** — rows: mono index / label / 3-letter mono code tag / square mark
7. **AlcheInterstitial** — shown only when at least one selection exists; italic echo reflecting current picks
8. **AlchePrimaryActionButton** — "CONTINUE · QUESTION N+1 →" (or "COMPLETE YOUR READ →" on final)
9. **AlcheSecondaryLink** — "Skip this one" (only if question is not required)
10. **QSFooter** — "DRAFT · YOUR FIRST READ" + elapsed time

No tab bar.

## ViewModel changes

- Add `var previousAnswerEcho: String` — produces the italic reflective copy shown in `QSVoice` (reflects last answer selected).
- Add `var currentEcho: String?` — powers the `AlcheInterstitial`; nil when no selections.
- Add `var elapsedSeconds: Int` — drives footer readout, updates via timer.
- Refactor `continueAction()` → auto-advances on single-select; requires tap on multi-select.
- Copy library: `WellnessGoal.allCases` gains a `subjectivePrompt` string per goal (the "I wake up wired" phrasing) — source from QuickScan questions JSON, not hard-coded.

## New components needed

- `AlcheAnswerRow` — flat list row with the selected/unselected states described above. Lives in `Design/Components/AlcheAnswerRow.swift`.
- `AlcheProgressHairline(segments:filled:)` — 2px hairline 5-segment bar (also usable in other wizards).
- `AlcheInterstitial(line:emphasisRange:)` — reusable italic-between-blocks component referenced by other screens in the onboarding group.
- Reuses `AlchePrimaryActionButton`, `AlcheSecondaryLink`, `AlcheReadBlock`.

## Data dependencies

- `QuickScanViewModel.currentQuestion` (existing)
- `viewModel.allAnswers` (existing, extended to carry subjective phrasing)
- `MockQuestionnaireService.questions` JSON needs a `subjectivePrompt`, `echoTemplate`, and optional `threeLetterCode` per answer option
- `Date()` for the elapsed timer

## Accessibility / localization notes

- **Dynamic Type:** `QSQuestion` uses `.font(.custom("Newsreader-LightItalic", size: 26, relativeTo: .title))`. Row labels scale up to AX3 — reserve 2-line wrap budget.
- **VoiceOver:**
  - Voice block reads as "Alche listening. So — your mornings feel heavier than they used to. I want to understand what's pulling on you most."
  - Each answer row announces "Option 1 of 5. Sleep — I wake up wired or wake up tired. Double-tap to select."
  - Interstitial reads as a live region when selections change.
- **Reduce motion:** disable any `.transition(.opacity)` on interstitial appearance — snap in.
- **Localization keys:** every question has `voice.opener`, `question.line`, `question.emphasisWord`, per-option `subjectivePrompt` and `code`, and `interstitial.echoTemplate`. Template accepts `{selections}` placeholder filled with localized goal names joined with "and".
- **Honest mock:** echoTemplate generation must never fabricate sentiment — stick to "I'm hearing X and Y" never "That must be hard."

## Estimated effort

**M** — half day. The per-question JSON expansion (echo + subjective prompts for every option) is the long tail; the view itself is 3-4 hours.
