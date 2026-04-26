# Forge Process · Sprint Walk

How the multi-agent sprint-by-sprint sub-screen sweep works, and how to check
status at any moment.

---

## The forge in one paragraph

We ship a parent screen first (list view, dashboard, etc.) under one of three
**registers** per **Strategy 1** — Dialog (speaks first), Signal (a single
pattern carries the page), Ritual (the next moment is the page). Then a
forge wave audits the sub-views (detail, picker, banner, sheet, card) and
brings them to the same register. Audit-first: classify each file
**GREEN / NUDGE / FULL POLISH** before fixing. Spawn agents for the polish
work, gate every commit on `xcodebuild` + grep audits, batch-push when the
sprint clears.

---

## The three registers

| Register | Means | Voice precedent |
|---|---|---|
| **Dialog-first** | Italic Newsreader narrator opens, asks second, lists last | Home `e00054e` · Profile `70437f5` · Discover `f0b7d01` · Restaurants `2ef9831` |
| **Signal-first** | One editorial pattern (curve, silhouette, grid) IS the page | Hormonal balance `f9d6372` · The map `3ed579e` · Nutrition `3fe87fa` |
| **Ritual-first** | The slot / step / threshold IS the page; one mono primary | Booking `3b4074d` · In-store `5033b3f` · Rituals `6c9f7b7` |

Voice family is shared across registers via the narrator kit: Newsreader
italic, Space Mono overlines, hard 2px corners, no rating stars, no pastel
rings, no fake mono metadata, no capsule pills, no emoji icons in metadata.

---

## Audit-first protocol (per file)

```
Step 1 — Grep the file (5–6 patterns below)
Step 2 — Read the file (look for structural drift)
Step 3 — Classify:
   GREEN          zero drift, voice on-spec → no edits
   NUDGE          1–3 surface fixes (one capsule, one icon row) → targeted edits
   FULL POLISH    4+ drift signals or structural redesign → rewrite to match
```

### Audit grep cheatsheet

```bash
# Token drift (system fonts where alche tokens belong)
grep -nE "\.font\(\.body|\.font\(\.caption|\.font\(\.subheadline|\.font\(\.headline|\.font\(\.title" <file>

# Hardcoded colors (use Color.alcheBackground / alcheSurface)
grep -nE "Color\.cream|Color\.linen" <file>

# Fake mono costume metadata
grep -nE "VER [0-9]|LAT [0-9]|GRID REF|SEQ-[0-9]|VAR\. [0-9]" <file>

# Star / rating chrome
grep -nE "star\.fill|StarRating|★" <file>

# Capsule pills (status badges, filter chips, type tags)
grep -nE "Capsule\(\)" <file>

# Pastel filled rings / rounded opacity rectangles
grep -nE "RoundedRectangle.*opacity\(0\.[0-9]+\)|Circle\(\).*\.fill\(.*opacity" <file>

# Clinical language (Glow Scan especially)
grep -nE "Health Score|hydration levels|indicates|demonstrates|diagnoses|treats|cures|heals" <file>

# Sci-fi / AI hype (Vision screens)
grep -nE "AI[- ]powered|machine learning|neural|[0-9]+%[- ]confidence" <file>

# Naming guard (DigitalTwin)
grep -nE "Digital Twin|digital twin" <file>
```

---

## Forge phases

| Phase | What happens |
|---|---|
| **1 · Read & Assess** | Show the plan: capabilities activated, agent topology, scope, walled-off list. Wait for "go". |
| **2 · Build** | Launch agents (parallel for independent files, sequential per sprint when ordered). Each commit gates on arrival — `xcodebuild` + grep audits. 3 strikes on same issue → stop, don't spin. |
| **3 · Seal** | Final integration `xcodebuild` + tests across the full app. Push the wave. Update PROGRESS.md. Surface flags that were walled off. |

---

## Per-sprint agent prompt template

Every agent gets a self-contained brief:

1. **Project context** — repo path, branch, CLAUDE.md reference, version freeze
2. **Strategy 1 brief** — three registers, voice family
3. **Voice precedent** — the parent commit hash to read for the register
4. **Scope** — files owned + walled-off list (don't touch)
5. **Audit-first protocol** — grep patterns + classification
6. **What "shipped" looks like** — concrete fix patterns
7. **Gate criteria** — `xcodebuild SUCCEEDED` + grep audits clean
8. **Commit format** — `REQ-xxx: [scope]` + co-author trailer
9. **DO NOT push** — orchestrator pushes after sprint completes
10. **Output format** — audit table, commit SHAs, flags

---

## How to check current process

### Recent commits in the app branch
```bash
cd /Users/timoel/Desktop/Projects/brands/alche/app
git log --oneline -15
git status --short
git log origin/redesign/editorial-longevity..HEAD --oneline   # local-only ahead
```

### Recent commits in the parent repo
```bash
cd /Users/timoel/Desktop/Projects/brands/alche
git log --oneline -10
```

### Verify build is green
```bash
cd /Users/timoel/Desktop/Projects/brands/alche/app
xcodebuild -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build 2>&1 | tail -3
```

### Run tests
```bash
cd /Users/timoel/Desktop/Projects/brands/alche/app
xcodebuild -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro' test 2>&1 | grep -E "Executed|TEST" | tail -5
```

### Run a quick audit on a feature folder
```bash
cd /Users/timoel/Desktop/Projects/brands/alche/app
FEATURE="DoctorSessions"   # change as needed

# All audit greps in one pass
grep -rnE "\.font\(\.body|\.font\(\.caption|\.font\(\.subheadline|Color\.cream|Color\.linen|VER [0-9]|LAT [0-9]|GRID REF|star\.fill|Capsule\(\)" Alche/Features/$FEATURE/
```

### Bird's-eye sprint-walk status
Run the helper script (see below):
```bash
/Users/timoel/Desktop/Projects/brands/alche/bin/forge-status
```

### TestFlight build state
- App Store Connect → My Apps → Alche → TestFlight tab
- Current build at top of `project.yml` (`MARKETING_VERSION` + `CURRENT_PROJECT_VERSION`)

---

## Strategy 1 ship state — as of 2026-04-25

**42 surfaces under Strategy 1:**
- 25 list views / dashboards / parent screens shipped (Sprints 0–5)
- 17 sub-views polished or cleared (audit-first sweep)

**Coverage by sprint:**

| Sprint | Parent screens shipped | Sub-views audited | Sub-views polished | Sub-views GREEN |
|---|:---:|:---:|:---:|:---:|
| 0 · Pilot | 1 (Home) | 0 | — | — |
| 1 · Voice | 4 (Lix · Auth · Profile · Discover) | 9 | 3 | 6 |
| 2 · Body | 4 (Glow scan · Biomarkers · Protocols · Progress) | 10 | 10 | 0 |
| 3 · Flow | 1 (Auth rewrite) + 2 relocations | 0 | — | — |
| 4 · Utility | 7 (Booking · Shop · In-store · Rituals · Nutrition · Restaurants · Doctor sessions) | 9 | 9 | 0 |
| 5 · Vision | 3 (The map · Hormonal balance · Roadmap) | 3 | 2 | 1 |

**Lix subsystem** (the chat + 7-turn state + handoff) is its own beast —
shipped at `d3884f1`, not part of the audit-first sweep.

**TestFlight build 4** is processing on Apple's side. No version bump
during the polish waves; next bump batches all the post-build-4 commits.

---

## Open follow-up flags (not blockers)

1. `BiologicalAgeCard` orphaned — only #Preview references it. Wire or delete.
2. `BiomarkerCategoryView` + `BiomarkerDetailView` flagged "Legacy state" — parent dashboard no longer routes to them. Polished prophylactically.
3. `Color.alcheBeautyBg/Text/Muted/Divider/FooterBg` tokens unused after ProtocolDetail polish. Safe deletion.
4. `GlowRecommendation` model lacks `Identifiable`/`Hashable` id. `GlowScanResultView` uses `\.offset` workaround.
5. `PractitionerDetailView` hard-codes `.longevityPlus` member tier. Wire to `AppState.member.tier` once that exists.
