# Post-Sprint-Walk Cleanup — Report

**Date:** 2026-04-25 18:48
**Branch:** `redesign/editorial-longevity` (app submodule)
**Lane:** Post-Sprint walk cleanup, 3 micro-tasks, 1 commit each
**Status:** All 3 shipped, build green, NOT pushed

---

## Commits

| # | Task | SHA | Build |
|---|------|-----|-------|
| 1 | Drop alcheBeauty* tokens | `867f3f7` | ✅ BUILD SUCCEEDED |
| 2 | ScanRecommendation Identifiable | `a891cc6` | ✅ BUILD SUCCEEDED |
| 3 | BiologicalAgeCard orphan marker | `8a05fa2` | ✅ BUILD SUCCEEDED |

Branch tip: `8a05fa2` (3 commits ahead of `7b8cf9a`).

---

## TASK 1 — Drop unused beauty palette tokens

**Files touched:** `Alche/Design/Tokens/AlcheColors.swift` (5 deletions)

Verified `alcheBeautyPrimary` is still consumed by `AlcheProgressBar` (the `.beauty` case at line 16). Kept it. Deleted only the 5 truly unused tokens flagged in the brief:

- `alcheBeautyBg`
- `alcheBeautyText`
- `alcheBeautyMuted`
- `alcheBeautyDivider`
- `alcheBeautyFooterBg`

Grep `alcheBeauty` outside the tokens file returned only the AlcheProgressBar callsite (which uses `alcheBeautyPrimary`). Zero remaining consumers for the 5 deleted tokens — confirmed safe.

**Commit message:**
> chore: drop orphaned alcheBeauty* tokens — no remaining consumers post-c8e9471

---

## TASK 2 — GlowRecommendation Identifiable

**Files touched:**
- `Alche/Core/Models/GlowScanResult.swift` (+1 line)
- `Alche/Features/GlowScan/GlowScanResultView.swift` (1 line changed)

**Note for task manager:** the brief refers to `GlowRecommendation`, but the actual struct in code is `ScanRecommendation` (the type behind `GlowScanResult.recommendations`). Same intent — the colloquial name in FORGE-PROCESS.md flag #4 maps to `ScanRecommendation` in source.

**Before:** `ScanRecommendation: Codable, Sendable, Hashable` (no id, no Identifiable). `GlowScanResultView` enumerated by `\.offset` as workaround.

**After:**
- Added `Identifiable` conformance + `let id = UUID()`
- `id` is excluded from `CodingKeys` so Supabase snake_case decoding stays unchanged (Codable synthesis skips properties not in CodingKeys when they have a default value)
- `GlowScanResultView` ForEach now keys on `\.element.id` instead of `\.offset`

**Commit message:**
> REQ-019: ScanRecommendation Identifiable — drops \.offset workaround in GlowScanResultView

---

## TASK 3 — BiologicalAgeCard decision

**Decision:** option (a) — keep + mark as orphaned

**Files touched:** `Alche/Features/Biomarkers/BiologicalAgeCard.swift` (+1 line)

**Why keep, not delete:**
- 350 lines of fully Strategy 1-polished code (Sprint 2 voice, Dialog-first hero with italic Newsreader narrator, mono `LABEL · VALUE` 2x2 metrics grid, hard 2px corners, hairline accents, no capsule pills, no SF Symbol clutter)
- Represents real shipped polish work — deleting it discards labor that's already passed gate
- Natural callsite (`BiomarkerDashboard`) exists in the codebase, so wiring it up is a small follow-up rather than a fresh build
- File is structurally clean and ready to embed

**What I added:** one-line marker at the top of the file:

```swift
// Orphaned — wire from BiomarkerDashboard or remove.
// Dialog-first Biological Age archive card (Sprint 2 — Body).
```

So the next dev opens the file and sees the status immediately. No code logic touched.

**Commit message:**
> chore: BiologicalAgeCard — marked orphaned (kept; wire from BiomarkerDashboard)

---

## Flagged but not fixed (out of scope for this lane)

1. **`ScanRecommendation` Hashable semantics shift.** With `let id = UUID()` fresh per instance, two recs with identical `productId`/`protocolId`/`reason` now hash differently. No current consumer relies on Hashable equality across instances (only ForEach diffing in `GlowScanResultView`), but worth flagging if Set/Dictionary semantics get added later. Resolvable by overriding `hash(into:)` and `==` to ignore id, but that wasn't asked for.

2. **FORGE-PROCESS.md open follow-up flags now resolved.** Worth striking through in next session:
   - Flag #1 (BiologicalAgeCard orphaned) → marked
   - Flag #3 (alcheBeauty* tokens unused) → deleted
   - Flag #4 (GlowRecommendation lacks Identifiable) → fixed

   Flags #2 (BiomarkerCategoryView/DetailView "Legacy state") and #5 (PractitionerDetailView hard-codes `.longevityPlus`) untouched.

---

## Walled-off (untouched, as required)

- Sprint 1/2/4/5 polish files committed in `56b3bc0..7b8cf9a` ✅
- `project.yml` (no version bump) ✅
- Tab bar files (just shipped at `7b8cf9a`) ✅

---

## Gate per commit

Each commit followed by:
```
xcodebuild -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build
```
All three ended with `** BUILD SUCCEEDED **`.

---

## Push status

**NOT pushed.** Awaiting orchestrator decision per FORGE-PROCESS.md phase 3 (Seal — orchestrator pushes after sprint completes).
