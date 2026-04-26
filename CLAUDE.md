# Alche · Project Root Context

You are working in the Alche project root. **Read `motherdoc.md` first.** It is the spine.

## Critical orientation

- **`app/`** — iOS Xcode project (canonical). Has its own `CLAUDE.md` for app-level conventions. Branch: `redesign/editorial-longevity`.
- **`studio/`** — all workspace artifacts (design, pitchbook, research, brand, tools, ops, archive). Not the app.
- **`audit/`** — ground-truth audits from 2026-04-25 (screen state, root inventory, deck coverage). Source of truth for "what's actually built."
- **`plans/`** — framework spine (roadmap, lanes, prompt cookbook, senior dev checklist).
- **`agents/`** — character sheets + memory + behavior tests for the 11 agents.
- **`tasks/queue.json`** — priority queue of active work.
- **`devlogs/`** — per-task work summaries.

## Mode: ship phase

Sprints 0–5 are done. **19 shipped SwiftUI artifacts are final** (Lix chat #26 + Auth + 17 post-auth app screens). In the original 25-row deck, 5 onboarding screens are collapsed, SupplementRecommendation is relocated to Shop, and GlowScanInvitation is relocated to GlowScan first-run. What's left is build 5 → TestFlight → App Store, plus 4 lanes (Lix worker, Welcome video, build cut, polish housekeeping). Do not start new features.

## Walled-off scopes

- Don't touch `studio/archive/*` — frozen historical state.
- Don't refactor `app/Alche/` outside the 4 housekeeping orphans documented in `plans/roadmap.md`.
- Don't re-litigate Strategy 1 design decisions. Voice family is locked.
- Don't bump version until Release Manager runs the build 5 cut.

## Conventions

- **`bin/forge-status`** for sprint state.
- **9 grep audit patterns** in `studio/design/app-redesign/FORGE-PROCESS.md` are the per-file gate.
- **Parallel agents** = Project Manager spawns lanes per `plans/parallelization.md`. Each lane has walled-off file scope.
- **Devlog after every shipped commit.** Format in `devlogs/README.md`.

## Quality gates (non-negotiable)

- xcodebuild SUCCEEDED before commit.
- 21/21 tests pass before commit.
- 4 defeat tests are spec'd but not written yet; do not claim they run until `app/AlcheTests/DefeatTests/` exists.
- 9 grep audits clean for changed files.
- Senior Dev Checklist (`plans/senior-dev-checklist.md`) reviewed for changed files.

## When unsure

`motherdoc.md` is the spine. `audit/screen-truth.md` is what's actually built. `studio/design/app-redesign/PROGRESS.md` is the live screen tracker.
