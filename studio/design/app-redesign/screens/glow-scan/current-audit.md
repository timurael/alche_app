---
screen: GlowScan
slug: glow-scan
group: wellness
primary-swift-file: app/Alche/Features/GlowScan/GlowScanView.swift
status: audited
audit-date: 2026-04-24
---

# GlowScan — Audit

**Purpose:** Live skin-analysis camera interface — centered viewfinder with floating measurement callouts, mode tabs, and capture button. Mock analysis only.

**Current structure (top to bottom):**
- Full-bleed black background + navy gradient + faint grid overlay (lines 76-98)
- Header: close X + "● LIVE ANALYSIS" red-dot breathing + "S: 1/200 ISO 120" camera-metadata overline (lines 102-135)
- 280×280 center viewfinder with corner brackets + 24pt crosshair + 180pt rotating dashed circle + animated horizontal scan-line (lines 215-255)
- Two floating callouts: "HYDRATION 64%" (right, blue) and "COLLAGEN INDEX 0.8" (left, white), each with small marker line (lines 139-211)
- "SCANNING EPIDERMIS..." mono overline + 120×2pt progress bar (lines 259-282)
- Mode tabs: "TEXTURE / STRUCTURAL / THERMAL" with underline on active (lines 286-320)
- Bottom row: "LOCKED" left + capture circle + "FACE ID" right (lines 324-365)

**3 problems:**
1. **Cinematic UI overpowers the purpose** — The rotating dashed circle, scanning line, breathing dot, pulsing callouts, and grid overlay (lines 369-393 animations) make this feel like a sci-fi prop. This is a 60-second MOCK skin scan. The theatrics set expectations the feature cannot honor, and the clinical overlines ("S: 1/200 ISO 120", "SCANNING EPIDERMIS...") risk crossing the "appearance-based not clinical" rule from CLAUDE.md.
2. **Numeric readouts for mock data** — Lines 157 and 196 show "64%" and "0.8" as hard mono values during a simulated scan. Per CLAUDE.md Glow Scan rules: "Glow Score, not Health Score" and "Your skin looks well-hydrated" — not numeric percentages during live scan. The interface is promising precision it cannot deliver.
3. **Three irrelevant mode tabs ship with no difference between them** — "TEXTURE / STRUCTURAL / THERMAL" at line 22 and 286-320 render as interactive chrome but `selectedMode` (line 19) has no effect on the scan. Pure visual fiction, pretending capability that doesn't exist.

**Dialog-first transformation:**
Camera interfaces can't be italic reads, but they *can* be quiet. Reduce to: a soft viewfinder (corner brackets only, no rotating circle), a single italic line above the frame — "Hold it steady. / I'll look for 30 seconds." Remove the numeric callouts during scan (they arrive post-capture). Remove the 3 mode tabs entirely (they're fiction). Bottom row: mono "TAP TO CAPTURE" as the only primary. Post-capture, transition to a results screen that speaks: "Your skin looks tired around the eyes. / It also looks more hydrated than last month." Appearance-based, never clinical.

**Available data to feed the dialog:**
- `viewModel.history` (prior scans, dates, trend direction)
- Selected mode (collapses to one in redesign)
- Device camera capabilities (light level, front camera only)
- Time of day (skin appearance varies)
- Last scan delta (for comparative read)
- Member's skin-related goals (radiantDefense, cellularVitality)
- Mock scan output (hydration, collagen, texture)

**Tone direction for this screen:**
Observational, never clinical — Alche watching quietly, speaking only after the scan completes.

---
