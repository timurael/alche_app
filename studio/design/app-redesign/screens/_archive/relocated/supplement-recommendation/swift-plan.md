---
screen: SupplementRecommendation
slug: supplement-recommendation
status: designed
design-date: 2026-04-24
---

# SupplementRecommendation — Swift Implementation Plan

**Target SwiftUI view:** `app/Alche/Features/Onboarding/SupplementRecommendationView.swift`

## What changes vs current

**Remove:**
- `DataSourceIndicator` sample-data badge (lines 14-19) — onboarding mock state is a parent-level concern
- "Your Supplement Stack" `alcheDisplayL` title + horizontal scrollable `AlcheTag` goal pills (lines 22-42)
- Four independent sections: Foundation, Goal-Specific, Stacking Notes, Timing Guidance (lines 85-231)
- `SupplementCard` full chrome: name + 4-variant colored evidence badge + EU legal pill + primary-blue mono dosage + 2-line muted mechanism (lines 252-337)
- Dedicated stacking + timing sections in favour of inline notes

**Add:**
- `AlchePrevEcho` "PREV · FOCUS · Sleep. Stress. Skin — we heard them."
- `AlcheStampMark` + "ALCHE · WHERE I WOULD BEGIN"
- `AlcheReadBlock` 3-line italic voice opening
- `SRSectionHead` — mono overline ("FOUNDATION · EVERYONE") + item count
- `SupplementRow` — flat grid: idx / (italic name + 1-line mechanism + optional inline blue-bar note) / (dose + evidence dots + EU tag)
- `AlcheInterstitial` between Foundation and Goal-Specific sections ("Those are the quiet ones. Here are the two that *speak to your asks*.")
- Evidence dot scale — 3 dots, full/half/empty based on tier
- Disclaimer footer demoted to typographic "FOOTNOTE · NOT MEDICAL ADVICE" block
- Inline stacking/timing note on the affected row only

**Keep:**
- `foundationSupplements` / `goalSpecificSupplements` split logic
- `applicableStackingRules` + `applicableTimingConflicts` computation (now rendered inline per supplement)
- EU legal flag (demoted to tiny mono tag)
- Evidence tier enum (remapped to 3-dot scale)
- Loading / error states (visual treatment updated to match editorial style)
- Forward navigation to `GlowScanInvitation`

## View structure (top to bottom)

1. **QSTopBar** — "← Back" + "STEP 06 · OF · 08"
2. **AlchePrevEcho** — carries focus areas forward
3. **StampRow** — mark + "ALCHE · WHERE I WOULD BEGIN"
4. **AlcheReadBlock** — 3 italic lines
5. **SRSectionHead** — "FOUNDATION · EVERYONE" / count
6. **FoundationList** — `SupplementRow`s
7. **AlcheInterstitial** — voice transition
8. **SRSectionHead** — "FOR YOUR FOCUS · Sleep + Stress + Skin" / count
9. **GoalSpecificList** — `SupplementRow`s with inline notes
10. **AlchePrimaryActionButton** — "ADD TO MY STACK · 4 ITEMS →"
11. **AlcheSecondaryLink** — "Skip supplements for now"
12. **DisclaimerFooter** — editorial footnote

No tab bar.

## ViewModel changes

- Add `mechanism(for: Supplement, in userVoice: UserWellnessProfile) -> String` — produces the one-sentence mechanism *in the member's register* (e.g. "helps your shoulders come down" rather than "modulates HPA axis"). Library string is the fallback.
- Add `inlineNote(for: Supplement) -> String?` — concatenates applicable stacking rule + timing conflict into a single italic sentence; nil if none.
- Add `evidenceDots(for: Supplement) -> EvidenceDotScale` — enum `.strong = 3 filled`, `.moderate = 2 filled + 1 half`, `.emerging = 1 filled + 1 half`, `.weak = 1 half`.
- `primaryCTALabel` — computed "ADD TO MY STACK · \(count) ITEMS" (localized plural).
- Remove the stacking-rules section + timing-conflicts section ViewModel subtrees; their data flows into `inlineNote(for:)` now.

## New components needed

- `SupplementRow(index:supplement:mechanism:inlineNote:evidence:dose:)` — the flat row. Lives in `Design/Components/SupplementRow.swift`.
- `AlcheEvidenceDots(scale:)` — 3-dot mono-geometric component. Lives in `Design/Components/AlcheEvidenceDots.swift`.
- `AlcheSectionHead(label:trailing:)` — already exists per shared-components.css (`.alche-section-head`), confirm Swift parity.
- `DisclaimerFooter(label:body:)` — 2-part footer used here + potentially in Biomarkers.
- Reuses `AlchePrevEcho`, `AlcheStampMark`, `AlcheReadBlock`, `AlcheInterstitial`, `AlchePrimaryActionButton`, `AlcheSecondaryLink`.

## Data dependencies

- `viewModel.selectedGoals: Set<WellnessGoal>`
- `viewModel.foundationSupplements: [Supplement]`
- `viewModel.goalSpecificSupplements: [Supplement]`
- `Supplement`: `name`, `typicalDosage`, `timingWindow` (AM/PM/Both — new property), `mechanismEditorial` (new string), `evidence: EvidenceTier`, `isEULegal: Bool`
- `viewModel.applicableStackingRules` — piped into `inlineNote(for:)`
- `viewModel.applicableTimingConflicts` — piped into `inlineNote(for:)`
- `viewModel.isLoading` / `errorMessage`
- Entry path flag (`onboarding` vs `profile`) for CTA copy swap

## Accessibility / localization notes

- **VoiceOver:** each row announces "Supplement 1 of 4. Magnesium Threonate. Calms the nervous system and supports deep sleep architecture. Dose: 200 milligrams, evening. Evidence: strong. EU legal."
- **Dynamic Type:** mechanism line wraps to 2 at AX3; inline note wraps to 3.
- **Localization (EN/DE):**
  - Per supplement: `name`, `mechanismEditorial` (EN + DE), `inlineNoteTemplate`
  - `section.foundation` = "Foundation · Everyone" / "Fundament · Für alle"
  - `section.focus` = "For your focus · {goals}" / "Für deinen Fokus · {goals}"
  - `interstitial.text` = "Those are the quiet ones. Here are the two that speak to your asks."
  - `primary.cta` = "Add to my stack · {count} items"
  - `secondary.cta` = "Skip supplements for now"
  - `disclaimer.label` + `disclaimer.body` — verbatim editorial footnote
- **EU compliance:** EU legal tag + disclaimer preserved. Legal team approves new wording.

## Estimated effort

**M** — half day. The content expansion (editorial mechanism string + inline-note templates per supplement × 2 locales) is the primary investment; the view itself is straightforward.
