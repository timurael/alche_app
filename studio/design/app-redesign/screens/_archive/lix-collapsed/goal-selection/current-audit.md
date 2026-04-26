---
screen: GoalSelection
slug: goal-selection
group: onboarding
primary-swift-file: app/Alche/Features/Onboarding/GoalSelectionView.swift
status: audited
audit-date: 2026-04-24
---

# GoalSelection — Audit

**Purpose:** Let the member manually pick up to 3 wellness goals that drive their protocol stack.

**Current structure (top to bottom):**
- `DataSourceIndicator` sample-data badge (line 17)
- Hero: stacked italic "Select / Your / Alchemy" headline (52pt Newsreader Light/Medium Italic) + "ACTIVE" pill (lines 32-74)
- ">_" mono configuration block with "Configuration Required" label + "N/3" counter (lines 52-67)
- Vertical goal list — 5 rows of `WellnessGoal.allCases`, each with italic display name, `[CODE_TAG]` mono label, index number, arrow on select; selected row flips to full black background with white text (lines 91-161)

**3 problems:**
1. **Three typographic languages collide** — The hero stacks Newsreader italic (52pt), mono ">_" with bordered box, mono "CONFIGURATION REQUIRED" overline, and large Newsreader goal rows. Add the active pill (dot + bold mono) and the `[CODE_TAG]` and there are five distinct typographic voices in the viewport. It's a lookbook, not a dialog.
2. **Black-fill selection overwhelms list legibility** — Line 110's `bg: isSelected ? .alcheEditorialBlack : .clear` turns the selected row into an ink slab. With up to 3 selections, the screen becomes a checkerboard of black and white — reads as UI trick rather than soft editorial preference.
3. **Contradicts QuickScan / FocusAreaReveal** — This screen's *manual* goal selection duplicates what the QuickScan → FocusAreaReveal pipeline already does automatically. There are effectively two goal-assignment flows with different visual grammars. No narrative reconciles them.

**Dialog-first transformation:**
This screen either disappears (goals come entirely from the QuickScan reading) or becomes a gentle confirmation: Alche speaks — "From what you told me, I would focus here —" — and the three recommended goals appear as italic reads with subtle mono code-tag annotations. The member can tap to add/remove, but the screen's voice is collaborative, not a catalog. Ditch the ">_" box, the ACTIVE pill, the black-fill selection. Selection = thin left-margin blue bar + italic emphasis, nothing more.

**Available data to feed the dialog:**
- `selectedGoals` binding (ProtocolGoal set)
- `selectedWellnessGoals` (new WellnessGoal set, max 3)
- `WellnessGoal.allCases` for display names, code tags, legacy mapping
- QuickScan answers (if coming from that flow)
- Mock `GoalServiceProtocol` data
- Current selection count vs cap (3)

**Tone direction for this screen:**
Collaborative, suggestive, never catalog — "here is what I heard, does this feel right?"

---
