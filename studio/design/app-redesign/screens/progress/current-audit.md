---
screen: Progress
slug: progress
group: wellness
primary-swift-file: app/Alche/Features/Progress/ProgressView.swift
status: audited
audit-date: 2026-04-24
caveat: File defines `WellnessProgressView` (renamed to avoid collision with SwiftUI's `ProgressView`).
---

# Progress — Audit

**Purpose:** Show wellness trend charts across energy, sleep, mood, and overall — with averages, trend direction, streak count, and a list of recent check-ins.

**Current structure (top to bottom):**
- Header: `alcheDisplayL` "Progress" + 1-line `alcheBody` subtitle (lines 10-19)
- 3-column `SummaryCard` row: Average / Trend (icon+label) / Streak (days) (lines 22-44, 134-172)
- Segmented `Picker` for Metric selection: Energy/Sleep/Mood/Overall (lines 47-52)
- Chart `AlcheCard` with metric overline + inline segmented range Picker (7D/30D/etc) + `TrendChart` line/area chart with 5 grid lines, dots, date labels (lines 55-86, 176-286)
- "RECENT CHECK-INS" overline + `LazyVStack` of `CheckinRow`s: date + optional note + 3 colored metric dots (E/S/M) with values (lines 88-101, 290-344)

**3 problems:**
1. **Two segmented pickers on one screen** — Line 52's metric picker and line 72's range picker both use `.pickerStyle(.segmented)`. They're iOS-native rounded pills with system-blue accents, stacked directly on top of each other. Two forms of the same control doing different things in the same eye zone.
2. **Summary cards present numbers without meaning** — Lines 22-44 show three `SummaryCard` values (average as float, trend label, streak as integer) with only a small uppercase label. "Average 3.8" on a 1-5 scale is mathematically honest but narratively empty. No "you're trending up on sleep this week" — just a number and a chevron.
3. **Chart card consumes the most pixels, speaks the least** — Lines 55-85's chart area is ~200pt tall with grid lines, dots, area fill, date labels — it's the page hero visually but says only "values over time." No callouts on interesting points, no annotations for events (when the member started a new protocol, skipped a week), no editorial commentary on what the trend means.

**Dialog-first transformation:**
Open with a one-line italic observation: "Your mood holds. / Your energy is the one worth watching." Below, a single slim chart for the metric Alche chose to speak about (not a picker — Alche picks). Mono sub-line carries the raw metrics ("14D AVG 3.4 · UP 0.3 · STREAK 12"). Metric and range pickers drop to a mono footer row: "Sleep · Mood · Overall · 30D" underlined selectable. Recent check-ins collapse to a tiny mono continuity strip: "12 checkins in 14 days →" linking to full history.

**Available data to feed the dialog:**
- `viewModel.currentAverage`, `viewModel.trend` (up/down/neutral), `viewModel.streakDays`
- `viewModel.selectedMetric` (Energy/Sleep/Mood/Overall)
- `viewModel.selectedRange` (7D/30D/etc)
- `viewModel.chartData` ([(date, value)])
- `viewModel.filteredCheckins` (recent daily checkins with notes)
- Protocol start/stop events
- GlowScan dates (overlay on chart)
- Member's goals (drives which metric Alche foregrounds)

**Tone direction for this screen:**
Observational, comparative — "this is the curve you've drawn. Here's what's inside it." Never congratulatory.

---
