# Prompt Cookbook · 4 launch prompts (sharpened via `#pro`)

Each prompt is **copy-paste-ready** for a fresh Claude Code terminal. Each is self-contained — the agent has zero context from this conversation, so the prompt provides everything: file paths, scope walls, gate criteria, output format.

**Sharpening process per prompt:**
1. **Diagnose** failure modes the naive version would produce
2. **Restructure** with role + XML + constraints + format + paths
3. **Reasoning** added where decisions matter
4. **Examples** added where edge cases hide

---

## Lane 1 · Lix worker deploy + Swift patch

**Owner:** User on wrangler · Roy applies Swift patch
**Estimated time:** 1–2 hr
**Pre-req:** wrangler CLI installed, Cloudflare account access

### Failure modes if naive prompt used

- Agent deploys without checking existing worker config → may overwrite user's existing Cloudflare workers
- Agent patches `LixAPIClient.swift` without preserving fallback path → app breaks offline
- Agent forgets to update UserDefaults key + setup flow → URL never reaches the client
- Agent commits to `app` submodule before `xcodebuild` + tests pass → broken tip

### Sharpened prompt (paste in fresh terminal)

```
You are Roy — Swift Dev for Alche. You are picking up Lane 1 (Lix Cloudflare Worker integration) mid-stream. Read these files in order BEFORE doing anything:

1. /Users/timoel/Desktop/Projects/brands/alche/agents/swift-dev-roy.md  (your character sheet)
2. /Users/timoel/Desktop/Projects/brands/alche/plans/parallelization.md  (Lane 1 walled-off scope)
3. /Users/timoel/Desktop/Projects/brands/alche/plans/roadmap.md  (Lane 1 step table)
4. /Users/timoel/Desktop/Projects/brands/alche/plans/senior-dev-checklist.md  (31-item gate)
5. /Users/timoel/Desktop/Projects/brands/alche/CLAUDE.md  (root context)
6. /Users/timoel/Desktop/Projects/brands/alche/app/CLAUDE.md  (app conventions)
7. /Users/timoel/Desktop/Projects/brands/alche/studio/design/mascot-lab/lix-impl/worker/  (worker code + wrangler config)
8. /Users/timoel/Desktop/Projects/brands/alche/app/Alche/Features/Onboarding/Lix/LixAPIClient.swift  (patch target)

<task>
Wire the deployed Cloudflare Worker into LixAPIClient so Lix turns 1–7 hit the real LLM. Preserve the fallback reaction path for network failure / no URL configured.
</task>

<scope>
TO touch:
- app/Alche/Features/Onboarding/Lix/LixAPIClient.swift  (add real network call path, keep fallback)

NOT to touch:
- LixChatView.swift, LixChatViewModel.swift, LixTurns.swift, LixSystemPrompt.swift, LixProfile.swift, LixMoodState.swift, LixMascot.swift  — chat flow stays
- Any non-Lix file unless API surface genuinely requires it (escalate first)
- The wrangler config / worker.js — that's the user's lane (Step 1 below)
</scope>

<input>
WORKER_URL: [User will paste the deployed worker URL here, e.g. https://lix-worker.<sub>.workers.dev]
</input>

<workflow>
Step 1 (USER ACTION — they paste output): User runs `cd studio/design/mascot-lab/lix-impl/worker && wrangler login && wrangler deploy`. They paste the deploy URL into this thread.

Step 2 (YOUR ACTION — patch): Read LixAPIClient.swift. Add a configurable URL via UserDefaults key "alche.lix.workerURL". Default to nil. When nil → fallback path (current behavior). When set → POST to {URL}/lix-turn with the existing payload shape. Preserve all error handling. Treat 5xx + network errors as "use fallback for this turn", not "crash".

Step 3 (YOUR ACTION — verify): Run `cd app && xcodebuild -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build` then test. Run all 9 grep audits on LixAPIClient.swift (or use `bin/forge-status audit Onboarding`).

Step 4 (YOUR ACTION — commit): Two commits in app submodule:
  a) `LANE-1: LixAPIClient — UserDefaults-driven worker URL with fallback`
  b) (only if Step 5 needed) `LANE-1: <follow-up>` — never bundle unrelated changes

Step 5 (YOUR ACTION — devlog): Write devlog at `devlogs/<YYYY-MM-DD>-LANE-1-lix-worker.md` per format in `devlogs/README.md`. Include the WORKER_URL used (so future agents know what was tested against).

Step 6 (HANDOFF): Report back to Project Manager: lane status, commits, devlog path, any drift flagged.
</workflow>

<gate_criteria>
- xcodebuild SUCCEEDED
- 21/21 tests pass (or current count)
- 9 grep audits clean on LixAPIClient.swift
- Senior Dev Checklist items 1, 6, 7, 13, 18 verified (no force unwrap, @MainActor where needed, no backend types in View, error path explicit, fallback present)
- Devlog written
- DO NOT bump version
- DO NOT commit to parent repo (Release Manager pins parent in Lane 3)
- DO NOT push to remote (orchestrator pushes when lane wave completes)
</gate_criteria>

<output_format>
After each step, report in this exact structure:

**Step N · [name]** — [✅ done / 🟡 in progress / ❌ blocked]
- What changed: [1 line]
- Files: [list]
- Test result: [xcodebuild + test count + audit result]
- Next: [next step or handoff]
</output_format>

<edge_cases>
- WORKER_URL is malformed → ask user to re-deploy and confirm URL pattern
- Existing UserDefaults code already exists with different key → don't migrate, use the same key the team chose; flag the prior decision
- xcodebuild fails on patch → fix YOUR change first; if it's pre-existing breakage, report and STOP (do not patch unrelated breakage)
- If LixSystemPrompt/Turns format has changed since the worker was written → flag mismatch, do NOT silently translate; surface to user
</edge_cases>

Begin with Step 1 confirmation: ask user for the WORKER_URL. Once provided, proceed through Steps 2–6 autonomously.
```

---

## Lane 2 · Welcome video production

**Owner:** image/video pipeline + Jen (Swift integration at end)
**Estimated time:** 4–6 hr
**Pre-req:** Nano Banana Pro (Gemini API) access · Veo 3.1 Fast access · DaVinci Resolve installed · ~$18 budget

### Failure modes if naive prompt used

- Generating clips text-to-video without a still as first frame (violates `~/.claude/image-to-video-guide.md`)
- Skipping reference photographer briefs in `studio/design/app-redesign/screens/welcome/research-refs/`
- Files not bundled at correct path → app can't load asset
- Video too large (no compression) → app bundle bloat
- Wiring touches LixChatView blocks beyond first-launch state

### Sharpened prompt (paste in fresh terminal)

```
You are running Lane 2 of the Alche app ship — Welcome video production. Read these in order:

1. /Users/timoel/.claude/image-to-video-guide.md  (image-first protocol — non-negotiable)
2. /Users/timoel/.claude/nano-banana-pro-prompting-guide.md  (still generation)
3. /Users/timoel/Desktop/Projects/brands/alche/agents/ui-dev-jen.md  (Jen for the Swift step)
4. /Users/timoel/Desktop/Projects/brands/alche/plans/parallelization.md  (Lane 2 walls)
5. /Users/timoel/Desktop/Projects/brands/alche/studio/design/app-redesign/screens/welcome/welcome-video-brief-v2.md
6. /Users/timoel/Desktop/Projects/brands/alche/studio/design/app-redesign/screens/welcome/welcome-video-prompts-v2.md
7. /Users/timoel/Desktop/Projects/brands/alche/studio/design/app-redesign/screens/welcome/research-refs/  (29 photographer references)

<task>
Produce a Welcome loop (~10s, 1080×1920, MP4) that plays before Lix Turn 01 on first app launch. Soft fade to mascot at end. Bundle into app/Alche/Resources/. Wire into LixChatView's first-launch state without touching any other LixChatView block.
</task>

<workflow>
Stage A · Stills (image pipeline)
1. Generate 10 stills via Nano Banana Pro using prompts from welcome-video-prompts-v2.md verbatim
2. Apply video-ready-still rules from image-to-video-guide.md §4 (composition leaves headroom for camera moves, clear subject hierarchy, motion-anchored details)
3. Save to studio/design/app-redesign/screens/welcome/stills/ with names matching prompt IDs (still-01.jpg through still-10.jpg)
4. Reference 29 photographer briefs for style anchoring — each still must cite which reference informed it (in a co-located stills/CITATIONS.md)
5. Budget: ~$10 max for stills

Stage B · Hero clips (video pipeline)
1. Pick the 3 hero stills (per welcome-video-brief-v2.md — Light chassis, Lix in shot 02 only, ritual moments)
2. For each: feed the still as first frame to Veo 3.1 Fast with the motion prompt
3. Save 3 clips to studio/design/app-redesign/screens/welcome/clips/ as clip-01.mp4, clip-02.mp4, clip-03.mp4
4. Budget: ~$8 max for clips

Stage C · Composite (user — DaVinci Resolve)
1. Import 3 clips
2. Cross-fade transitions, ~3.3s per shot, total ~10s
3. Soft fade to black on last 0.5s (handoff to Lix mascot reveal)
4. Export: MP4, H.264, 1080×1920, < 2 MB if possible (target 1.2 MB)
5. Save as studio/design/app-redesign/screens/welcome/welcome-loop.mp4
6. Also export a still poster at frame 0: welcome-still.jpg

Stage D · Bundle + wire (Jen)
1. Copy welcome-loop.mp4 + welcome-still.jpg → app/Alche/Resources/
2. Add to Xcode project (target: Alche, copy bundle resources phase)
3. Wire into LixChatView FIRST-LAUNCH state ONLY:
   - UserDefaults key "alche.welcome.played" — bool, default false
   - On first launch, present a thin LixWelcomeView wrapper showing AVPlayer(url:) with the bundled mp4
   - On player end → set the flag → fade transition (0.3s opacity 0) → reveal LixMascot turn 01
   - If flag already true → skip welcome, render Turn 01 directly (zero behavior change for repeat launches)
4. SwiftUI Preview that shows the welcome state
5. Performance check: simulator (iPhone 17 Pro) + physical device — no jank, < 80 MB peak memory
6. Snapshot test added by Test Engineer (request via Project Manager)

Stage E · Devlog
1. Write devlog at devlogs/<YYYY-MM-DD>-LANE-2-welcome-video.md
2. Include: which photographer refs were used, total budget spent, file size, perf numbers
</workflow>

<scope>
TO touch:
- studio/design/app-redesign/screens/welcome/stills/ (new)
- studio/design/app-redesign/screens/welcome/clips/ (new)
- studio/design/app-redesign/screens/welcome/welcome-loop.mp4 + welcome-still.jpg (new)
- app/Alche/Resources/welcome-loop.mp4 + welcome-still.jpg (new bundled assets)
- app/Alche/Features/Onboarding/Lix/LixChatView.swift  (first-launch state ONLY) OR new app/Alche/Features/Onboarding/Lix/LixWelcomeView.swift wrapper (preferred — less intrusive)

NOT to touch:
- Any LixChatView block beyond first-launch presentation logic
- LixChatViewModel, LixTurns, LixSystemPrompt, LixMoodState — turn flow stays
- Any other onboarding file
- Any non-Onboarding feature
</scope>

<gate_criteria>
- xcodebuild SUCCEEDED
- 21/21 tests pass (+ snapshot for welcome state if Test Engineer added one)
- 9 grep audits clean on touched files
- File size < 2 MB for welcome-loop.mp4 (target 1.2 MB)
- Memory clean on device + simulator
- Voice family check: video matches Strategy 1 — no clinical voice-over, no hype, slow ritual cadence
- Devlog written
- DO NOT bump version
- DO NOT push
</gate_criteria>

<output_format>
After each Stage, report:

**Stage [A/B/C/D/E]** — [✅ / 🟡 / ❌]
- What shipped: [files]
- Cost: [$ this stage / running total]
- Issues: [any drift, retries, blockers]
- Next: [next stage]
</output_format>

<edge_cases>
- Veo 3.1 Fast first frame matching is poor on a still → re-run with motion prompt that anchors specific elements (per image-to-video-guide.md §6)
- A still costs > $1.50 — pause, escalate, do NOT keep iterating blindly
- Total spend approaching $25 — stop, report, ask for go-ahead
- LixChatView already has a first-launch state — DO NOT replace; nest your video state inside it OR bail to LixWelcomeView wrapper
- Asset doesn't load in simulator (path issue) — verify Xcode bundle resources phase before declaring done
</edge_cases>

Begin with Stage A. Confirm pricing budget understood before generating any stills.
```

---

## Lane 3 · TestFlight build 5 cut

**Owner:** Release Manager
**Estimated time:** 30 min
**Pre-req:** Lanes 1, 2, 4 ✅ complete · build 4 processed in App Store Connect · App Store Connect login (user)

### Failure modes if naive prompt used

- Bumps version before lanes converge → premature build, missing fixes
- Skips senior dev checklist → drift ships
- Forgets parent repo pin → next session has stale submodule state
- Forgets devlog → context lost
- Pushes to wrong branch / force pushes

### Sharpened prompt (paste in fresh terminal)

```
You are Release Manager for Alche. Lane 3 — TestFlight build 5 cut. Read in order:

1. /Users/timoel/Desktop/Projects/brands/alche/agents/release-manager.md  (your character sheet — full)
2. /Users/timoel/Desktop/Projects/brands/alche/plans/roadmap.md  (Lane 3 table)
3. /Users/timoel/Desktop/Projects/brands/alche/plans/senior-dev-checklist.md  (31-item gate)
4. /Users/timoel/Desktop/Projects/brands/alche/plans/status-board.md  (verify Lanes 1, 2, 4 ✅)
5. /Users/timoel/Desktop/Projects/brands/alche/app/PUBLISHING.md  (TestFlight playbook)
6. /Users/timoel/Desktop/Projects/brands/alche/devlogs/  (read recent lane devlogs)

<task>
Cut TestFlight build 5. Pre-flight all gates. Bump version. Archive. Upload via altool. Confirm in App Store Connect. Pin parent repo. Write devlog.
</task>

<pre_flight>
Stop and verify ALL of these before any version bump. If ANY is red, halt and report:

[ ] App Store Connect TestFlight tab shows build 4 as "Ready to Submit" or "Internal Testing" (not "Processing")
[ ] plans/status-board.md shows Lane 1, Lane 2, Lane 4 all ✅ complete
[ ] git status --short on app submodule is clean (no uncommitted)
[ ] cd app && xcodebuild -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro' build  → SUCCEEDED
[ ] cd app && xcodebuild -scheme Alche -destination 'platform=iOS Simulator,name=iPhone 17 Pro' test  → 21/21 (or current count) PASS
[ ] If `app/AlcheTests/DefeatTests/` exists, all defeat tests pass. If it does not exist, record that DT-1 through DT-4 are still SPEC'D but not WRITTEN.
[ ] Senior Dev Checklist (`plans/senior-dev-checklist.md`) reviewed for files changed since `1500d35`. Run: `cd app && git diff --name-only 1500d35..HEAD | head -40` to find them.
[ ] 9 grep audits clean across changed feature folders
[ ] App icon present at 1024×1024 in Assets
[ ] Privacy policy URL valid (currently studio/ops/docs/privacy-policy.html — check if hosted)
</pre_flight>

<workflow>
Step 1 — Pre-flight (above). If green, proceed. If red, halt + report.

Step 2 — Version bump. Edit app/Alche.xcodeproj/project.pbxproj:
  - CFBundleVersion: bump to 5
  - CFBundleShortVersionString: bump if minor/major change (else keep)
  Commit in app submodule: `LANE-3: bump CFBundleVersion 4 → 5`

Step 3 — Archive. Run:
  cd app
  xcodebuild -scheme Alche -configuration Release -destination 'generic/platform=iOS' archive -archivePath ./build/Alche.xcarchive
  
  Verify build/Alche.xcarchive exists.

Step 4 — Export IPA. Use ExportOptions.plist (must already exist in app/) or generate per app/PUBLISHING.md. Export to build/Alche.ipa.

Step 5 — Upload. Run:
  xcrun altool --upload-app -f build/Alche.ipa -t ios -u <APPLE_ID> -p <APP_SPECIFIC_PASSWORD>
  (User provides credentials — request them; do NOT hardcode.)

Step 6 — Confirm. User checks App Store Connect → Apps → Alche → TestFlight tab. Build 5 should appear "Processing." User pastes confirmation back.

Step 7 — Parent repo pin. Outside app submodule:
  cd /Users/timoel/Desktop/Projects/brands/alche
  git add app
  git add studio/design/app-redesign/PROGRESS.md  (Documentarian updated this)
  git add devlogs/  (new entries from this lane wave)
  git add plans/status-board.md
  git commit -m "PROGRESS: TestFlight build 5 cut · Lanes 1+2+4 shipped"
  
  DO NOT push. User pushes manually after sanity check.

Step 8 — Devlog. Write devlogs/<YYYY-MM-DD>-LANE-3-build-5-cut.md per format. Include: build number, version, commit SHA, IPA size, upload time, App Store Connect confirmation timestamp.

Step 9 — Update status-board: Lane 3 ✅ complete. All lanes complete. TestFlight build 5 in processing.
</workflow>

<scope>
TO touch:
- app/Alche.xcodeproj/project.pbxproj (version bump only)
- app/build/ (archive + IPA — gitignored)
- parent repo: app submodule pin + PROGRESS.md + devlog + status-board

NOT to touch:
- ANY source code (Lanes 1, 2, 4 already merged that)
- ANY test code
- Tokens, components, voice family
- Other lanes' devlogs
</scope>

<gate_criteria>
- All pre_flight checks ✅ before version bump
- Defeat-test status recorded: either all present tests pass, or DT-1 through DT-4 are explicitly still spec-only
- xcodebuild archive SUCCEEDED
- altool upload returns success
- App Store Connect confirms build received
- Parent commit made (not pushed)
- Devlog written
- Status board updated
</gate_criteria>

<output_format>
For each step:

**Step N · [name]** — [✅ / 🟡 / ❌]
- Outcome: [1 line]
- Verify: [what was checked]
- Next: [next step]
</output_format>

<edge_cases>
- Pre-flight RED on any item → STOP. Report which gate failed + raw output. Do NOT bump version on a red gate.
- altool returns "missing signing identity" → fix in Xcode signing config first; do NOT skip signing
- App Store Connect shows duplicate build number → bump again (build 6) and re-upload
- User says "skip the senior dev checklist this once" → REFUSE. The checklist runs every release. No exceptions.
- 5xx from altool 3+ retries → escalate, don't loop infinitely (per Release Manager hard rules: 3 retries → diagnose)
</edge_cases>

Begin with Step 1 (pre-flight). Halt and report on ANY red gate.
```

---

## Lane 4 · Polish housekeeping (orphan cleanup)

**Owner:** Roy
**Estimated time:** 1 hr
**Pre-req:** none — runs in parallel with Lanes 1 + 2

### Failure modes if naive prompt used

- Deletes orphan that's actually consumed by a hidden call site
- Wires orphan into prod when it should be deleted (over-engineering)
- Touches files outside the 5 listed orphans
- Bundles fixes — fails atomic commit hygiene
- Skips xcodebuild on each fix → drift accumulates

### Sharpened prompt (paste in fresh terminal)

```
You are Roy — Swift Dev for Alche. Lane 4 — orphan cleanup. Read:

1. /Users/timoel/Desktop/Projects/brands/alche/agents/swift-dev-roy.md
2. /Users/timoel/Desktop/Projects/brands/alche/plans/parallelization.md  (Lane 4 walls)
3. /Users/timoel/Desktop/Projects/brands/alche/plans/roadmap.md  (Lane 4 table)
4. /Users/timoel/Desktop/Projects/brands/alche/tasks/queue.json  (T-040 through T-045)
5. /Users/timoel/Desktop/Projects/brands/alche/plans/senior-dev-checklist.md
6. /Users/timoel/Desktop/Projects/brands/alche/audit/screen-truth.md  (orphan flags context)

<task>
Resolve 6 housekeeping orphans. For each: confirm orphan via grep, then either DELETE or WIRE (never both). One commit per orphan. xcodebuild + tests + grep audits between commits.
</task>

<workflow>
For each task in queue.json (T-040 through T-045), execute this loop:

LOOP_PER_ORPHAN:
1. Read the file
2. Grep entire app/ source for any consumer of the symbol/type
3. Decide: DELETE (no consumers) or WIRE (consumer planned, e.g. dashboard routing)
4. Execute decision
5. cd app && xcodebuild build → must SUCCEED
6. cd app && xcodebuild test → must PASS 21/21
7. Run 9 grep audits on changed files
8. Commit: `LANE-4: <orphan name> — <DELETE | WIRE TO X>`
9. Move to next orphan
END_LOOP

After all 6 orphans processed:
- Write devlog devlogs/<YYYY-MM-DD>-LANE-4-housekeeping.md  (per format)
- Update status-board: Lane 4 ✅ complete
- Report to Project Manager
</workflow>

<orphan_decisions>
T-040 · Practitioner.rating + Practitioner.reviewCount fields:
  → DELETE (audit confirms zero UI consumers; rating chrome stripped from PractitionerDetailView in 605dbfc)

T-041 · BiologicalAgeCard:
  → WIRE if BiomarkerDashboardView is ready to render it as a top card; OTHERWISE DELETE
  → Decision criteria: read BiomarkerDashboardView. If it has a clear top section that BiologicalAge fits → WIRE. If not → DELETE.

T-042 · BiomarkerCategoryView + BiomarkerDetailView:
  → DELETE (parent dashboard does NOT route to them per 8a05fa2; "Legacy state" flag in VM)
  → Confirm: grep for any NavigationLink or sheet presenting these. If found, escalate. If not, delete.

T-043 · SmoothieMenuViewModel.toggleFavorite + isFavorite + favoriteSmoothies:
  → DELETE (audit confirms favorite heart removed from view; sweep all call sites first)
  → Confirm: grep for these method names + `favoriteSmoothies` array. Zero match = safe delete.

T-044 · ContentCardView + EventCardView (Discover):
  → DELETE (DiscoverView ships inline itemRow, audit confirms orphan)
  → Confirm: grep for `ContentCardView(` and `EventCardView(` constructors. Zero call site = delete.

T-045 · PractitionerDetailView .longevityPlus hard-code:
  → DEFER if AppState.member.tier doesn't exist yet. SKIP this task; flag in devlog.
  → If AppState.member.tier exists → WIRE.
</orphan_decisions>

<scope>
TO touch (per orphan, one at a time):
- app/Alche/Core/Models/Practitioner.swift
- app/Alche/Features/Biomarkers/BiologicalAgeCard.swift
- app/Alche/Features/Biomarkers/BiomarkerDashboardView.swift  (if wiring)
- app/Alche/Features/Biomarkers/BiomarkerCategoryView.swift
- app/Alche/Features/Biomarkers/BiomarkerDetailView.swift
- app/Alche/Features/Booking/SmoothieMenuViewModel.swift
- app/Alche/Features/Discover/ContentCardView.swift
- app/Alche/Features/Discover/EventCardView.swift
- app/Alche/Features/Discover/DiscoverView.swift  (if wiring)
- app/Alche/Features/DoctorSessions/PractitionerDetailView.swift  (only if AppState exists)

NOT to touch:
- Any other Swift file
- Tokens, components, tests (unless updating tests for a deleted type — only if the test references a deleted symbol)
- Voice family — no design changes
</scope>

<gate_criteria>
- xcodebuild SUCCEEDED on changed files
- 21/21 tests pass
- 9 grep audits clean
- One orphan per commit (no bundling)
- Commit message format: `LANE-4: <orphan> — <DELETE | WIRE TO X>`
</gate_criteria>

<output_format>
After each orphan resolved:

**T-XXX · [orphan name]** — [✅ DELETED / ✅ WIRED / ⏭️ DEFERRED]
- Decision rationale: [1 line]
- Files touched: [list]
- Build + tests: [✅ / failure detail]
- Commit: `<sha>` `<msg>`
</output_format>

<edge_cases>
- Orphan grep finds 1+ consumer you didn't expect → STOP. Do NOT delete. Report finding to user. The orphan flag was wrong.
- xcodebuild fails on delete → restore, investigate, fix the consumer first OR escalate
- Wiring would touch >1 Feature folder → escalate to iOS Architect (don't approve in-lane)
- AppState.member.tier doesn't exist → SKIP T-045, flag in devlog. Don't fabricate AppState.
- Any drift outside the 6 orphans → flag in devlog, do NOT fix in this lane (separate cleanup pass)
</edge_cases>

Begin with T-040 (lowest risk, clearest decision). Proceed sequentially.
```

---

## How to use this cookbook

1. **Open 3 fresh Claude Code terminals** (parallel for Lanes 1, 2, 4).
2. **Paste the corresponding prompt verbatim** — do not edit, do not summarize.
3. **Lane 1** waits for user wrangler step → resumes autonomously.
4. **Lane 2** runs end-to-end with cost checkpoints.
5. **Lane 4** runs autonomously through 6 orphans.
6. **When all 3 lanes report ✅ in status-board**, open a **4th terminal** for Lane 3 (Release Manager).
7. **Lane 3 fires only after** Lanes 1, 2, 4 all green. Pre-flight gates non-negotiable.

---

## Future re-sharpening

If a lane prompt produces poor output (drift, missed steps, scope creep), re-run the `#pro` framework on that prompt:

1. Diagnose what failed
2. Add a constraint or example that closes the gap
3. Update this cookbook
4. Re-run

🤍
