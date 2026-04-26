---
screen: Biomarkers
slug: biomarkers
group: wellness
primary-swift-file: app/Alche/Features/Biomarkers/BiomarkerDashboardView.swift
status: audited
audit-date: 2026-04-24
---

# Biomarkers — Audit

**Purpose:** Dashboard showing bio-age, out-of-range biomarkers, category summaries, and a CTA to connect real blood panel data.

**Current structure (top to bottom):**
- `DataSourceIndicator` sample-data badge (line 9)
- `BiologicalAgeCard` at top (hero bio-age visual, line 13)
- "NEEDS ATTENTION" overline + `AttentionMarkerRow` list, each with warning triangle + marker name + value with reference range + chevron (lines 18-34, 90-126)
- "CATEGORIES" overline + `CategoryRow` list per category — icon + name + marker count + dominant-status text + score number + chevron, color-coded by status (lines 37-54, 130-172)
- Connect CTA `AlcheCard`: "See your real results" + blood-panel connect link secondary button (lines 57-71)
- Inline `DataSourceIndicator` at bottom (line 74)

**3 problems:**
1. **Numeric precision of mock data crosses compliance line** — `AttentionMarkerRow` at lines 105-115 renders "\(marker.value, specifier: "%.1f") \(marker.unit)" with reference ranges like "ref: 0-100". For a feature flagged as `isUsingMockData`, showing a member "your Vitamin D is 18.3 ng/mL (ref: 30-100)" looks like a lab report. CLAUDE.md: "NEVER present mock results as real analysis."
2. **Two data-source indicators is a tell, not a fix** — Lines 9 and 74 both display `DataSourceIndicator`. Double-labeling it as "Sample Data" twice signals the team's own unease with the mock. The screen should either not ship data, or wrap the data in narrative context so the mock status is legible from the voice itself.
3. **Two parallel hierarchies with no narrative bridge** — "NEEDS ATTENTION" markers (lines 18-34) and "CATEGORIES" (lines 37-54) are both lists of biomarker groupings, but one shows individual attention markers and one shows rollup scores. Same chevron, same card chrome, no editorial transition between them.

**Dialog-first transformation:**
This screen becomes dialog-dependent: if no real panel is connected, suppress all numbers. The screen reads: "We haven't read your blood yet. / This is what your dashboard will look like, / once we have. / → Connect a panel." Show a desaturated preview below, clearly labeled "preview." Once real data exists, the dialog becomes: "Your Vitamin D is lower than last spring. / Iron and thyroid held. / Two to look at; four quietly fine." Categories become quiet mono footer chips, not cards. Bio-age hero survives but as a single italic number read with context.

**Available data to feed the dialog:**
- `viewModel.profile` (biological age, chronological age, delta)
- `viewModel.attentionMarkers` (out-of-range biomarkers)
- `viewModel.categorySummaries` (per-category marker count + dominant status + score)
- `viewModel.biomarkers` (full list with values, units, reference ranges)
- `viewModel.isUsingMockData`
- Last panel date, next recommended panel
- Trend vs last panel (if multiple panels exist)

**Tone direction for this screen:**
Observational, never diagnostic — "here's what changed, here's what held." Numbers only when they carry weight.

---
