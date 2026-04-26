---
screen: DigitalTwin
slug: digital-twin
group: vision
primary-swift-file: app/Alche/Features/DigitalTwin/DigitalTwinView.swift
status: audited
audit-date: 2026-04-24
---

# DigitalTwin — Audit

**Purpose:** A holistic body-map visualization where regions of the body are color-coded by wellness status, with optional future-projection toggle and thriving/attention region summaries.

**Current structure (top to bottom):**
- `DataSourceIndicator` sample-data badge (line 10)
- Centered header: `alcheDisplayL` "Digital Twin" + 1-line `alcheBody` subtitle (lines 13-22)
- 360pt-tall `BodyMapVisualization` with interactive regions, future-projection toggle state (lines 35-42)
- "Show future projection" toggle row (sage tint) (lines 45-57)
- "THRIVING" section: overline + `RegionSummaryRow`s with score circle + region name + linked categories (lines 62-75)
- "NEEDS ATTENTION" section: same structure with amber overline (lines 78-91)
- Optional `FutureProjectionView` block (lines 96-99)
- Empty state `AlcheEmptyStateView` if no twin data (lines 101-109)
- Inline `DataSourceIndicator` at bottom (line 112)
- `RegionDetailSheet` when region selected (lines 120-127)

**3 problems:**
1. **"Digital Twin" is tech-bro language on a wellness app** — The screen title (lines 14, 118), the header copy "holistic view of your wellness across all dimensions" (line 19), and the whole framing borrow Silicon Valley longevity rhetoric. CLAUDE.md explicitly forbids "tech-bro" voice. The feature could be called something editorial — "The Map," "Your Body, as I Read It" — without losing function.
2. **Body map with mock region states risks overclaim** — Lines 35-42 render an interactive map with region scores (line 148's "\(region.score)") from mock data. The circle + score + categories pattern implies Alche has measured each body region. With `isUsingMockData` true, this is presenting fiction as insight. Double data-source indicators (lines 10 and 112) signal the team already knows.
3. **Two stacked region lists duplicate the map** — "THRIVING" and "NEEDS ATTENTION" (lines 62-91) are list representations of data the body map already shows. Three ways to see the same state (map, green list, amber list) without narrative transition. `RegionSummaryRow` chrome (circle+score+name+categories+chevron, lines 140-170) is the same pattern Biomarkers uses — generic card row.

**Dialog-first transformation:**
The map survives as a visual artifact, but the voice leads: "Across your body, / three regions thriving, / two asking for attention." Then the map with only its color states, no labels. Below the map, two italic lines pick out the attention regions by name — no stacked lists, just voice. Toggle for future-projection becomes mono "See the projection →" escape hatch. Rename the feature. Drop "Digital Twin."

**Available data to feed the dialog:**
- `viewModel.twinState.regionStates` (region + score + status + linkedCategories)
- `viewModel.thrivingRegions`, `viewModel.attentionRegions`
- `viewModel.futureProjections` (optional)
- `viewModel.showFutureToggle`
- `viewModel.isUsingMockData`
- `viewModel.selectedRegion` (active sheet target)
- Linked biomarker categories per region
- Member's overall bio-age context (relates map to age)

**Tone direction for this screen:**
Cartographic, observational — "I've mapped what I hear. Here's the terrain today." Never clinical, never sci-fi.

---
