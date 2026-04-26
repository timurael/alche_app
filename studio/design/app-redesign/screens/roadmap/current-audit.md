---
screen: Roadmap
slug: roadmap
group: vision
primary-swift-file: app/Alche/Features/Roadmap/RoadmapView.swift
status: audited
audit-date: 2026-04-24
---

# Roadmap — Audit

**Purpose:** Blueprint-styled longevity phase timeline — a visual "project plan" of the member's journey across multiple phases, with metadata and sync indicators.

**Current structure (top to bottom):**
- Full-screen blueprint background: `alcheBlueprintBg` off-white + 24pt `BlueprintGridBackground` Canvas grid (lines 5-39, 75-82)
- Top nav: back arrow + "alche" wordmark centered + bell icon (lines 92-115)
- Project header: "PROJECT: LONGEVITY / ROADMAP" small mono overline + `alcheDisplayL` "Roadmap" heading + "VER 5.0" mono bordered badge pill (lines 121-140)
- 1px bottom border separator under header (lines 142-144)
- Timeline: vertical column of `TimelineNodeView` (left, 21pt wide, node+connector) + `PhaseCardView` (right) pairs, spaced by `AlcheSpacing.xxl` (lines 165-185)
- Metadata bar: "GRID REF A-142 / LAT 34.05 / SYNC AUTO ●" with sync dot (lines 189-224)
- `DataSourceIndicator` at bottom (line 70)
- Error state with retry `AlcheButton` (lines 228-242)

**3 problems:**
1. **Blueprint aesthetic is pure costume** — The grid background (lines 5-39), "VER 5.0" badge (lines 149-161), "PROJECT: LONGEVITY" kicker, "GRID REF A-142 / LAT 34.05 / SYNC AUTO" metadata bar (lines 189-204) — none of these carry real information. "Lat 34.05" is LA's latitude (Berlin is 52.52); "Grid Ref A-142" is fiction. It's architectural cosplay.
2. **Timeline is generic, not personal** — Phases render through `PhaseCardView` with status variants (done/active/locked) but there's no "you are here" read, no time since you started, no expected duration to the next phase. The roadmap ships as a company roadmap, not the member's.
3. **Bell icon with no implementation** — Line 108-114's bell button is a no-op `{ // Notifications }` stub. Shipping a visible interactive control with no behavior undermines trust in every other button on the screen.

**Dialog-first transformation:**
Open with an italic read that names the member's current position: "You are here — / Phase 2, Week 3 of 12. / The next page opens in a month." The blueprint grid survives as quiet background texture (aesthetic allowed, if muted). `PhaseCardView`s simplify to single mono-labeled rows down a hairline vertical rule. Status (done/active/locked) = filled/open/dashed node marker. No "VER 5.0," no fake metadata, no bell. One escape hatch: "See the whole arc →".

**Available data to feed the dialog:**
- `viewModel.phases` (array of phases with status, name, description, timeline)
- Each phase's `status` (done/active/locked/upcoming)
- Current phase index + total phases
- Time spent in current phase
- Expected duration to next phase
- Member's start date (anchor for "you are here")
- `viewModel.isUsingMockData`
- Completed milestones per phase

**Tone direction for this screen:**
Narrative, longitudinal — "here is the arc. You're three chapters in." Never project-management, never sci-fi blueprint.

---
