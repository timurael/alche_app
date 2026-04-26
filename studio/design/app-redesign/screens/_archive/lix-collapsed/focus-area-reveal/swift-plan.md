---
screen: FocusAreaReveal
slug: focus-area-reveal
status: designed
design-date: 2026-04-24
---

# FocusAreaReveal — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Onboarding/FocusAreaRevealView.swift`

## What changes vs current

**Remove:**
- "YOUR FOCUS AREAS" mono overline + "Your Alchemy, / Revealed" stacked italic headline (lines 23-32)
- Staggered 600ms + 300ms-per-card reveal animation (lines 127-147)
- Rounded `AlcheCard` wrappers around each focus area (lines 82-123)
- SF Symbol icon per card (line 82's `iconForGoal`)
- Static library-string `userFeeling` blockquote (line 109)
- Sticky-bottom `AlcheButton` that appears after animation (lines 56-72)

**Add:**
- `AlchePrevEcho` "PREV · YOU CHOSE · Sleep. Stress. The mirror."
- `AlcheStampMark` + "ALCHE · WHAT I HEARD" stamp
- `AlcheReadBlock` four-line italic read paraphrasing QuickScan in 2nd person — the 4th line dimmed ("So this is where we'll start.")
- Three flat `FocusAreaRow`s — mono index / italic goal name / user's *actual* QuickScan quote as italic blockquote / mono code tag + evidence tier
- `AlcheInterstitial` — "Three is enough. I can always *listen for more* later."
- Primary mono CTA "CONTINUE WITH THESE →"
- Secondary mono underlined "Adjust what I heard" (routes back to GoalSelection)

**Keep:**
- `recommendedGoals = MockQuestionnaireService.computeGoalRecommendations(...)` call
- 3-goal cap via `.prefix(3)`
- Navigation forward to `SupplementRecommendation`

## View structure (top to bottom)

1. **QSTopBar** — "← Back" + "STEP 05 · OF · 08" crumb
2. **AlchePrevEcho** — QuickScan answers as echo
3. **Stamp row** — 4-cell mark + "ALCHE · WHAT I HEARD"
4. **AlcheReadBlock** — 4 italic lines, last line dimmed
5. **FocusAreaList** — 3 `FocusAreaRow`s
6. **AlcheInterstitial** — cap-is-a-promise line
7. **AlchePrimaryActionButton** — continue
8. **AlcheSecondaryLink** — "Adjust what I heard" → GoalSelection
9. **Footnote** — mono "DRAFT · YOUR FIRST READ" + "HEARD · 3 OF 3"

No tab bar.

## ViewModel changes

- Add `quotedUserFeeling(for goal: WellnessGoal) -> String?` — returns the member's own QuickScan answer text if captured, else nil. View falls back to the library string only if nil.
- Remove staggered-reveal state (`@State private var revealedIndices: Set<Int>`); content is static on appear.
- Add `heardLines: [String]` — computed paraphrase of QuickScan for the read block (e.g. "You told me about your sleep," "your stress," "and the mirror you're tired of checking."). Three lines derived from the three selected goals.

## New components needed

- `FocusAreaRow(index:goal:quote:evidenceTier:)` — flat, 3-column grid. Lives in `Design/Components/FocusAreaRow.swift`.
- Reuses `AlchePrevEcho`, `AlcheStampMark`, `AlcheReadBlock`, `AlcheInterstitial`, `AlchePrimaryActionButton`, `AlcheSecondaryLink`

## Data dependencies

- `appState.userWellnessProfile.quickScanAnswers`
- `appState.userWellnessProfile.selectedGoals` (up to 3)
- `WellnessGoal.displayName`, `codeTag`, evidence tier (new field, e.g. `A1..A5`)
- `MockQuestionnaireService.computeGoalRecommendations(...)` retained for regeneration after adjust

## Accessibility / localization notes

- **VoiceOver:** the read block is one accessible element: "Alche, what I heard. You told me about your sleep, your stress, and the mirror you're tired of checking. So this is where we'll start." Each row: "Focus 1 of 3, Restorative Sleep. Your words: I wake up wired or wake up tired. Evidence tier A4."
- **Dynamic Type:** quotes wrap to max 2 lines at AX3.
- **Reduce motion:** no entrance animation (none required in the new design; parity with current a11y only).
- **Localization (EN/DE):**
  - `focus.prev.echo.template` — built from dynamic QuickScan selection names, joined with localized periods
  - `focus.stamp` = "ALCHE · WHAT I HEARD"
  - `focus.read.line.template` — paraphrase generator, 3-4 lines from selected goals
  - `focus.interstitial` = "Three is enough. I can always listen for more later."
  - `focus.primary.cta` = "Continue with these"
  - `focus.secondary.cta` = "Adjust what I heard"
- **Honest mock:** if `quotedUserFeeling(for:)` returns nil, display library string *without* quotation marks (a quoted library string would be dishonest).

## Estimated effort

**S** — 2 hours. Heavy lifting is the paraphrase generator, which is a simple concatenation of per-goal phrases.
