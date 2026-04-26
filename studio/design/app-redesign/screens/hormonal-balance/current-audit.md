---
screen: HormonalBalance
slug: hormonal-balance
group: vision
primary-swift-file: app/Alche/Features/HormonalBalance/HormonalBalanceView.swift
status: audited
audit-date: 2026-04-24
caveat: All data is hard-coded constants (lines 11-16). No ViewModel, no service — purely a visual mockup.
---

# HormonalBalance — Audit

**Purpose:** Cycle-tracker / hormonal dashboard for menstruating members — phase label, cycle day, hormone curves, 2×2 metric grid, Oura sync footer.

**Current structure (top to bottom):**
- Header bar: back arrow + "HORMONAL BALANCE" small mono overline (lines 49-78)
- Phase header row: "CURRENT PHASE" overline + "Late Follicular" in 30pt Newsreader italic; right side "CYCLE DAY" overline + "12/28" in 24pt mono (lines 82-123)
- 240pt chart card: bordered rectangle with grid background, estrogen curve (rose, prominent), cortisol curve (indigo, faded), dashed ovulation line, peak dot, "Estrogen Peak" callout, "DAY 1 / OVULATION / DAY 28" x-axis labels (lines 127-220)
- 2×2 metrics grid: Cortisol Stable / Estrogen Surging / Temp BBT / Readiness High — each with label, value (italic or mono), subtitle, optional trailing icon; with one variant holding a progress bar (lines 321-483)
- Daily Insight quote: rose 2px left bar + italic 18pt quote + "DAILY INSIGHT" overline (lines 487-514)
- Sync Footer: "OURA SYNC Connected" + "LAST UPDATE 14:02 PM" (lines 518-562)

**3 problems:**
1. **Hard-coded mock data with no indicator** — Lines 11-16 are static `let` constants, and there is no `DataSourceIndicator`, no `isMock` flag, no service protocol. Per CLAUDE.md every mock-data screen must carry a "Sample Data" badge. This violates the project rule silently.
2. **AMAB/queer exclusion, un-framed** — The screen assumes a menstruating body with a cycle. The direction-c mockup explicitly calls out "menstrual cycle band (AMAB/queer exclusion)" as a problem to remove on Home. This feature screen has no opt-in toggle, no alternative framing for non-cycling bodies, and the entry path appears to expose it broadly. Inclusion needs a Profile preference gate.
3. **Six distinct typographic treatments in the metrics grid** — `hormonalMetricCell` (lines 379-442) toggles between Newsreader italic and SpaceMono value styles, between `.standard` and `.insight` subtitle styles, plus a separate `hormonalMetricCellWithBar` variant. Across 4 cells the result is 4 different compositions. The grid loses rhythm.

**Dialog-first transformation:**
First, gate the whole feature behind an explicit Profile preference ("Would you like me to track your cycle?"). Then: open with an italic read connecting phase to action — "Day 12. Estrogen climbing. / This is the week your body gives you back." The chart survives as the single visual anchor, simplified to one curve (the relevant hormone) with one callout. The 2×2 grid collapses to a mono data strip. Daily Insight becomes the read itself, not a quoted pull-out. Rename from "Hormonal Balance" to something softer — "The Month's Reading" or similar.

**Available data to feed the dialog:**
- Currently hard-coded: `currentPhase`, `cycleDay` (12), `cycleTotalDays` (28), `dailyInsight`, `lastUpdate`, `isOuraSynced`
- Target data: cycle phase (menstrual/follicular/ovulation/luteal), day number, cortisol/estrogen/progesterone trends, BBT, readiness score
- Oura sync status + last-sync timestamp
- Profile toggle: "track cycle" on/off
- Daily insight text (should be dynamic, not static)
- Prior cycle length (to personalize "28")

**Tone direction for this screen:**
Observational, rhythm-aware — speaking to a body in motion, not diagnosing a system. Honoring that cycles are one way a body speaks, not a medical event.

---
