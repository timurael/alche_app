# Parallelization · Lane Assignments + Walled-off Scopes

**Mode:** 4 lanes. 3 can run parallel. 1 sequential.

---

## Lane topology

```
            ┌─────────────────────┐
            │  Lane 4 · Housekeeping (Roy)  │
            │  /app/Alche/ orphan cleanup    │
            └──────────────┬──────┘
                           │
┌──────────────────┐       │       ┌─────────────────────┐
│  Lane 1 · Lix    │       │       │  Lane 2 · Welcome   │
│  Worker deploy   │       │       │  Video pipeline     │
│  (User+Roy)      │       │       │  (Jen+image/video)  │
└────────┬─────────┘       │       └─────────┬───────────┘
         │                 │                 │
         └─────────────────┼─────────────────┘
                           │ ALL THREE COMPLETE
                           ▼
                ┌──────────────────────┐
                │  Lane 3 · Build 5    │
                │  cut + TestFlight    │
                │  (Release Manager)   │
                └──────────────────────┘
```

---

## Walled-off scope per lane

### Lane 1 · Lix worker
**Owner:** User (wrangler) · Roy (Swift patch)
**Walled-off TO touch:**
- `studio/design/mascot-lab/lix-impl/worker/` (wrangler config + worker.js)
- `app/Alche/Features/Onboarding/Lix/LixAPIClient.swift`

**Walled-off NOT to touch:**
- `LixChatView.swift`, `LixChatViewModel.swift`, `LixTurns.swift` (chat flow stays)
- Any other Lix file unless API surface changes

---

### Lane 2 · Welcome video
**Owner:** Jen (Swift integration) · image/video pipeline
**Walled-off TO touch:**
- `studio/design/app-redesign/screens/welcome/research-refs/` (consume)
- `app/Alche/Resources/welcome-loop.mp4` (new)
- `app/Alche/Resources/welcome-still.jpg` (new)
- `app/Alche/Features/Onboarding/Lix/LixChatView.swift` (one block — first-launch state) OR new wrapper view

**Walled-off NOT to touch:**
- Any other LixChatView block beyond first-launch state
- Other onboarding files
- Any non-Onboarding feature

---

### Lane 3 · Build 5 cut
**Owner:** Release Manager
**Walled-off TO touch:**
- `app/Alche.xcodeproj/project.pbxproj` (CFBundleVersion, CFBundleShortVersionString)
- Tag/release artifacts
- Parent repo: submodule pin + `studio/design/app-redesign/PROGRESS.md` update + new devlog

**Walled-off NOT to touch:**
- ANY code change that hasn't gone through Lanes 1/2/4 first

**Hard rule:** Lane 3 fires ONLY after the other three have merged.

---

### Lane 4 · Polish housekeeping
**Owner:** Roy
**Walled-off TO touch (per plans/roadmap.md Lane 4 table):**
- `app/Alche/Core/Models/Practitioner.swift` (rating + reviewCount fields)
- `app/Alche/Features/Biomarkers/BiologicalAgeCard.swift` + `BiomarkerCategoryView.swift` + `BiomarkerDetailView.swift`
- `app/Alche/Features/Biomarkers/BiomarkerDashboardView.swift` (routing change if rendering)
- `app/Alche/Features/Booking/SmoothieMenuViewModel.swift` (favorite methods)
- `app/Alche/Features/Discover/ContentCardView.swift` + `EventCardView.swift`
- `app/Alche/Features/Discover/DiscoverView.swift` (routing if rendering)
- `app/Alche/Features/DoctorSessions/PractitionerDetailView.swift` (member tier wire)

**Walled-off NOT to touch:**
- Any screen marked SHIPPED-FINAL outside the listed orphans
- Any token / shared component
- Any test file unless adding a new test for an orphan

---

## Coordination protocol

1. **Project Manager** opens lanes. Each agent reads their character sheet + this file + the relevant lane in `plans/roadmap.md`.
2. **Per-lane work:**
   - Pull latest `redesign/editorial-longevity`
   - Apply changes within walled scope
   - xcodebuild + tests + grep audits
   - Commit with `LANE-N: <change>`
   - Devlog entry in `devlogs/`
3. **Lane completion:** agent reports to Project Manager. Project Manager confirms scope held.
4. **Lane 3 trigger:** Project Manager confirms Lanes 1, 2, 4 all green → fires Lane 3 (Release Manager).
5. **Out-of-scope drift:** agent flags, does NOT fix. Drift handled in separate post-ship pass.

---

## Status board

Live state lives in `plans/status-board.md`. Agents update on lane start + completion.

🤍
