---
screen: SupplementRecommendation
slug: supplement-recommendation
group: onboarding
primary-swift-file: app/Alche/Features/Onboarding/SupplementRecommendationView.swift
status: audited
audit-date: 2026-04-24
---

# SupplementRecommendation — Audit

**Purpose:** Show the personalized supplement stack (Foundation + Goal-Specific) derived from selected goals, with stacking warnings, timing conflicts, and legal disclaimer.

**Current structure (top to bottom):**
- `DataSourceIndicator` sample data badge (lines 14-19)
- Title "Your Supplement Stack" in `alcheDisplayL` + horizontal scrollable `AlcheTag` row of selected goals (lines 22-42)
- Foundation section: uppercase overline + subtitle + `SupplementCard` list (lines 85-91, 119-143)
- Goal-Specific section: same structure (lines 94-100)
- Dose-Stacking Notes section: warning icon + supplement name + "Max daily" mono + note per rule (lines 147-187)
- Timing Guidance section: pairing + caution text (lines 191-231)
- Legal disclaimer paragraph (lines 235-247)
- Each `SupplementCard`: name + evidence badge + EU legal badge + mono dosage + 2-line mechanism (lines 252-337)

**3 problems:**
1. **Four densely-formatted sections compete for attention** — Foundation, Goal-Specific, Stacking Notes, Timing Guidance (lines 85-230) each have their own overline + list of cards. There's no narrative arc connecting them — it reads as a clinical printout rather than a companion's briefing.
2. **Badge chrome saturates every card** — `SupplementCard` at lines 252-337 stacks: name (subheading), evidence badge (lines 291-305, 4 colored variants), EU legal badge (lines 322-336), mono dosage (primary blue), 2-line muted mechanism. That's 5 typographic weights per card, repeated 8-12 times per screen.
3. **No voice, maximum compliance** — The disclaimer (lines 242-244) is the only honest writing on the screen. Everything else is structured data. There's no "here's why I'm recommending magnesium" — only labels. A longevity companion without voice on its most intimate recommendation.

**Dialog-first transformation:**
Open with an editorial read: "For what you're asking of your body, / these four are where I'd begin." Then a compressed list — one supplement per line, italic name, one-line mechanism in muted Noto Sans, dosage as tiny mono suffix. Stacking warnings and timing conflicts fold into inline italic notes on the relevant supplement ("— don't take this with the calcium"). Evidence becomes a faint dot (filled = strong, half = moderate, empty = emerging) rather than a colored pill. The disclaimer survives, demoted to quiet footnote.

**Available data to feed the dialog:**
- `viewModel.selectedGoals` (user's WellnessGoals)
- `foundationSupplements`, `goalSpecificSupplements`
- Each `Supplement`: name, typicalDosage, mechanism, evidence (strong/moderate/emerging), isEULegal
- `applicableStackingRules` (max daily dose, note)
- `applicableTimingConflicts` (pair + caution note)
- `isLoading` / error state
- Entry path: onboarding vs profile

**Tone direction for this screen:**
Authoritative but intimate — a trusted practitioner explaining a small list, not a pharmacist handing over a printout.

---
