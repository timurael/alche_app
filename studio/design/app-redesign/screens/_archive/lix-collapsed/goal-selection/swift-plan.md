---
screen: GoalSelection
slug: goal-selection
status: designed
design-date: 2026-04-24
---

# GoalSelection — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Onboarding/GoalSelectionView.swift`

## What changes vs current

**Remove:**
- `DataSourceIndicator` sample-data badge at top (line 17) — redundant now
- Stacked italic 52pt "Select / Your / Alchemy" hero (lines 32-74)
- ">_" mono configuration box with "Configuration Required" overline and "N/3" counter (lines 52-67)
- "ACTIVE" dot + bold mono pill (lines 33-50)
- Full black-fill selection state on rows (line 110's `bg: isSelected ? .alcheEditorialBlack : .clear`)
- Blank-slate "pick 3 from 5" flow — it duplicated QuickScan

**Add:**
- `.alche-prev-echo` continuity line pulling QuickScan answers forward ("You named sleep, stress, and the mirror.")
- `AlcheReadBlock` 2-line voice: "From what you told me, / I would *focus here*." with primary emphasis
- `GoalRow` subview — italic Newsreader name, muted 1-line reason referencing the user's own QuickScan language, mono 3-letter code tag
- Pre-selected state by default — the 3 rows are already `.picked` (left primary bar + emphasis), user can toggle off to swap
- `AlcheInterstitial` between list and swap affordance ("These are mine. If one is wrong, swap it — you know yourself in ways I can't yet.")
- Dashed-border "Swap a focus · Choose from 9 others" section opening a sheet
- Primary mono CTA "THESE FEEL RIGHT · CONTINUE →"
- Secondary mono underlined "Start over · Ask me again" (routes back to QuickScan q1)

**Keep:**
- `@Binding selectedWellnessGoals: Set<WellnessGoal>` (max 3 cap)
- `WellnessGoal.allCases` as the underlying data
- Navigation to `FocusAreaReveal` on continue
- Continue validation that at least 1 goal remains selected

## View structure (top to bottom)

1. **QSTopBar** — "← Back" mono + "3 · OF · 3 FOCUS" counter
2. **AlchePrevEcho** — "PREV · QUICKSCAN" + italic echo of last screen's answers
3. **AlcheReadBlock** — 2-line italic voice
4. **GoalList** — 3 pre-selected `GoalRow`s, each tappable to deselect
5. **AlcheInterstitial** — swap invitation
6. **SwapSection** — dashed divider label + "Swap a focus" dashed row (tap = present `GoalSwapSheet`)
7. **AlchePrimaryActionButton** — continue
8. **AlcheSecondaryLink** — start over
9. **Footnote** — mono "DRAFT · YOUR FIRST READ" / "CAP · 3"

No tab bar.

## ViewModel changes

- Rename `SelectGoalsViewModel` methods:
  - `recommendedGoals: [WellnessGoal]` — now the default source (computed from QuickScan answers)
  - `swappedGoals: Set<WellnessGoal>` — tracks any user overrides
  - `currentGoals` — merges recommended minus removed plus swapped-in, capped at 3
- Add `reasonFor(goal: WellnessGoal, from answers: [QuickScanAnswer]) -> String` — picks the user's own subjective phrasing from QuickScan answers if available, else falls back to the library `userFeeling`.
- Remove the blank-slate "tap to select up to 3" flow entirely — rewrite as swap sheet.

## New components needed

- `GoalRow(goal:reason:isPicked:onTap:)` — 3-column grid row: idx / (name + reason) / tag
- `GoalSwapSheet` — presented modal listing the other 7-9 goals, tap replaces the currently removed one
- Reuses `AlchePrevEcho`, `AlcheReadBlock`, `AlcheInterstitial`, `AlchePrimaryActionButton`, `AlcheSecondaryLink`

## Data dependencies

- `QuickScanViewModel` final answers
- `MockQuestionnaireService.computeGoalRecommendations(from:)`
- `WellnessGoal.allCases` for the swap sheet universe
- `WellnessGoal.codeTag` — keep as-is
- `WellnessGoal.reasonTemplate(for:QuickScanAnswerSet)` — new mapper on the goal enum

## Accessibility / localization notes

- **VoiceOver:** each `GoalRow` announces "Focus 1 of 3, Restorative Sleep. Because you said you wake wired or wake tired. Selected. Double-tap to remove."
- **Dynamic Type:** reason lines wrap to max 2; test AX3.
- **Localization (EN/DE):**
  - `goal.prev.echo` = "You named sleep, stress, and the mirror." (dynamic — built from selected answers)
  - `goal.read.line1/2` — static voice copy
  - `goal.interstitial` = "These are mine. If one is wrong, swap it — you know yourself in ways I can't yet."
  - `goal.swap.cta` = "Swap a focus · Choose from 9 others"
  - `goal.primary.cta` = "These feel right · Continue"
  - Per-goal: `displayName`, `reasonTemplate` (accepts `{quickScanQuote}`), `codeTag`

## Estimated effort

**M** — half day. Most of the work is the `reasonFor(goal:from:)` mapping and the `GoalSwapSheet` fallback.
