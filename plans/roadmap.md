# Roadmap · Alche · ship phase

**Last updated:** 2026-04-25
**Source of truth:** `audit/screen-truth.md` · `studio/design/app-redesign/PROGRESS.md`
**Current branch:** `redesign/editorial-longevity` (app submodule)
**Last shipped commit:** `18edacb` (MySessionsView Dialog-first nudge)
**TestFlight build:** 4 (processing on Apple) → build 5 not cut

---

## What's done · don't redo

- ✅ **Phase 0** Brain dump (implicit, in `studio/design/app-redesign/`)
- ✅ **Phase 1** Requirements & roadmap (PROGRESS.md is the artifact)
- ✅ **Phase 2** Architecture (Xcode project, MVVM, NavigationStack per tab, AlcheTabBar)
- ✅ **Phase 3** Design system (`shared-tokens.css` + `shared-components.css` + `Alche/Design/Components/`)
- ✅ **Phase 4** MVP build (Sprints 0–5: 19 shipped SwiftUI artifacts final · Strategy 1 voice family verified)
- ⊘ **Onboarding 8 screens** deliberately collapsed into Lix chat (`d3884f1`)

---

## What's left · 4 lanes (Phase 5 → 6 → 7)

### Lane 1 · Lix Cloudflare Worker deploy

**Owner:** User on wrangler · Roy applies Swift patch
**Effort:** 1–2 hr
**Blocked by:** wrangler login (user)

| Step | Who | Action |
|------|-----|--------|
| 1 | User | `cd studio/design/mascot-lab/lix-impl/worker && wrangler login` |
| 2 | User | `wrangler deploy` |
| 3 | User | Confirm worker URL (e.g. `https://lix-worker.<sub>.workers.dev`) |
| 4 | Roy | Patch `LixAPIClient.swift` to use real worker URL (UserDefaults `alche.lix.workerURL`) |
| 5 | Roy | xcodebuild + 21/21 + grep audits |
| 6 | Release Manager | Commit `app` + parent repo pin |

**Acceptance:** Lix turns 1–7 hit real LLM, fallback reactions only fire on network failure.

---

### Lane 2 · Welcome video production

**Owner:** image/video pipeline + Jen (Swift integration)
**Effort:** 4–6 hr
**Blocked by:** Nano Banana Pro generation budget (~$18 all-in)

| Step | Action | Per `~/.claude/image-to-video-guide.md` |
|------|--------|------------------------------------------|
| 1 | Generate 10 stills via Nano Banana Pro from `studio/design/app-redesign/screens/welcome/welcome-video-prompts-v2.md` | Image-first |
| 2 | Generate 3 hero clips via Veo 3.1 Fast (still as first frame) | Two-prompt: still → motion |
| 3 | Composite in DaVinci Resolve → `welcome-loop.mp4` | 1080×1920, ~10s loop |
| 4 | Drop into `app/Alche/Resources/welcome-loop.mp4` + `welcome-still.jpg` | Bundle |
| 5 | Wire into `LixChatView` first-launch state (Jen) | SwiftUI |
| 6 | Performance check on simulator + device | |

**Acceptance:** Welcome video plays before Lix Turn 01, soft fade to mascot.

**Refs:**
- Brief: `studio/design/app-redesign/screens/welcome/welcome-video-brief-v2.md`
- Prompts: `studio/design/app-redesign/screens/welcome/welcome-video-prompts-v2.md`
- 29 photographer references: `studio/design/app-redesign/screens/welcome/research-refs/`

---

### Lane 3 · TestFlight build 5 cut

**Owner:** Release Manager
**Effort:** 30 min
**Blocked by:** Lanes 1, 2, 4 commits + build 4 done processing

| Step | Action |
|------|--------|
| 1 | Confirm build 4 processed in App Store Connect |
| 2 | Confirm Lanes 1, 2, 4 commits all merged on `redesign/editorial-longevity` |
| 3 | xcodebuild clean + 21/21 tests + defeat-test status recorded + senior dev checklist |
| 4 | Bump CFBundleVersion (4 → 5) + CFBundleShortVersionString if needed |
| 5 | `xcodebuild -scheme Alche archive` |
| 6 | `xcrun altool --upload-app -f Alche.ipa -t ios -u <APPLE_ID> -p <APP_PASSWORD>` |
| 7 | Confirm in App Store Connect → TestFlight |
| 8 | Parent repo pin: commit submodule ref + PROGRESS.md update + devlog |

**Acceptance:** Build 5 visible in TestFlight tab. Internal testers can install. External beta group invited.

---

### Lane 4 · Polish housekeeping (orphan cleanup)

**Owner:** Roy
**Effort:** 1 hr
**Blocked by:** none

| Item | Action | Risk |
|------|--------|------|
| `Practitioner.rating` / `reviewCount` model fields | Delete (no UI consumers) | low |
| `BiologicalAgeCard` | Wire into `BiomarkerDashboardView` OR delete (currently only `#Preview` references) | low |
| `BiomarkerCategoryView` + `BiomarkerDetailView` | Wire into routing OR delete (parent dashboard doesn't route to them) | low |
| `SmoothieMenuViewModel.toggleFavorite` / `isFavorite` / `favoriteSmoothies` | Confirm orphan (sweep call sites) → delete | low |
| `ContentCardView` + `EventCardView` (Discover) | Wire into Discover OR delete (DiscoverView ships inline `itemRow`) | low |
| `PractitionerDetailView` hard-coded `.longevityPlus` | Wire to `AppState.member.tier` (when AppState exists) | medium |

**Acceptance:** No orphan code in shipped tree. `BiologicalAgeCard` either rendered or removed.

---

## Phase 7 · App Store Submission (after Lane 3)

| Step | Status |
|------|:------:|
| External beta (5–10 testers, 3–5 days feedback) | ⬜ |
| Bug triage from beta | ⬜ |
| Final pass: privacy policy URL, screenshots (6.7" + 6.5" + 6.1"), description, keywords | ⬜ |
| App icon 1024×1024 | ⬜ |
| Review notes for Apple | ⬜ |
| Push notification entitlements | (not in MVP) |
| In-app purchase (Longevity+) | (post-launch) |
| Submit | ⬜ |

---

## Constraints locked

- No new features.
- No design re-litigation (Strategy 1 is locked).
- No version bump outside Release Manager (Lane 3).
- No commits to `app/` from main thread without Release Manager gate.
- TestFlight build 4 commit pin: `1500d35` (parent repo).

🤍
