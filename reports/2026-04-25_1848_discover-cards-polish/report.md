# Lane report — Discover cards Dialog-first polish

**Timestamp:** 2026-04-25 18:48
**Lane:** Discover card components (REQ-016 sub-screen forge)
**Branch:** `redesign/editorial-longevity` (app submodule)
**Voice register:** Dialog-first
**Precedent:** DiscoverView `f0b7d01` · EventDetailView `b1e1aeb`

---

## Audit table (pre-edit)

| File | sysFonts | colors | fakeMono | stars | Capsule | pastel | clinical | hype | DigitalTwin | Drift signals | Verdict |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|---|:-:|
| `ContentCardView.swift` | 0 | 0 | 0 | 0 | **1** | 0 | 0 | 0 | 0 | gradient hero + AlcheTag pill + clock icon-row + Capsule tag chips + lock-icon row + non-italic title **(6)** | **FULL POLISH** |
| `EventCardView.swift` | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | pastel date badge + AlcheTag pill + non-italic title + mappin icon-row + checkmark.fill RSVP **(5)** | **FULL POLISH** |

Grep noise was low — most drift was structural (pills, icon rows, gradient hero, non-italic title) and only visible on read.

---

## Edits applied

### `ContentCardView.swift`
- Dropped pastel `LinearGradient` hero with SF Symbol overlay
- Replaced `AlcheTag` pill (type) → mono overline `"TYPE · N MIN"`
- Replaced clock icon-row reading time → folded into overline
- Replaced `Capsule()` tag chips → mono single-line `"TAG · TAG · TAG"`
- Replaced lock-icon tier row → hairline + mono `"LONGEVITY+ · MEMBERS ONLY"`
- Replaced bookmark glyph button → text toggle `SAVE` / `SAVED`
- Title now italic Newsreader 22pt (was `.alcheSubheading`)
- Wrapped in `AlcheCard(variant: .flat)` — 2px border, no shadow

### `EventCardView.swift`
- Dropped pastel rounded date badge (`Color.alcheWarmGray.opacity(0.5)` block)
- Replaced `AlcheTag` pill (event type) → mono overline `"ALCHE EVENING · WORKSHOP"`
- Replaced `mappin` icon-row location → mono `"AT · LOCATION"`
- Replaced `checkmark.circle.fill` + sage text → italic `"You're going."`
- Title now italic Newsreader 22pt (was `.alcheSubheading`)
- Cadence as mono `"FRI 25 APR · 19:00"`
- Seats as mono `"N SEATS"` / `"ONLY N LEFT"` / `"FULL"`
- Wrapped in `AlcheCard(variant: .flat)` — 2px border, no shadow

---

## Post-edit verification

**Audit greps (all 9 patterns, both files):** **0 hits**

```
=== ContentCardView.swift ===
total grep hits: 0
=== EventCardView.swift ===
total grep hits: 0
```

**Build:** `** BUILD SUCCEEDED **`
```
xcodebuild -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```

---

## Commit

```
d3a24db REQ-016: Discover cards Dialog-first polish — ContentCardView + EventCardView
```

- 2 files changed
- 130 insertions, 176 deletions
- Co-author trailer applied
- **Not pushed** (per orchestrator rules — orchestrator pushes after sprint clears)

---

## Flags / follow-ups

1. **Both card components are orphaned.** No callers in the codebase. `DiscoverView` (commit `f0b7d01`) ships its own inline `itemRow` view against the `DiscoverItem` mock model, not `Content` / `Event`. Polished prophylactically per the lane brief. Worth a follow-up decision in the next Discover sweep: wire them in (e.g., for content/event surfacing on Home or in a future filter) or delete alongside `Content` / `Event` mock card paths.
2. No walled-off files were touched. `DiscoverView.swift`, `DiscoverViewModel.swift`, `EventDetailView.swift`, `project.yml`, and other feature folders untouched.
3. No version bump (TestFlight build 4 still the current ship).
