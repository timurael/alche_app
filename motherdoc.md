# Alche · Mother Document

> **Single source of truth for the iOS app build.** Every agent reads this. Every phase references this. You come back here when you're lost.
>
> **Mode:** Mid-stream. Sprints 0–5 shipped. Currently driving build 5 → TestFlight → App Store.

---

## 1. Project Identity

```
APP NAME:        Alche
ONE-LINER:       Longevity companion that speaks. Kinfolk meets science, never clinical.
TARGET USER:     Berlin-first wellness audience — women & queer first, longevity-curious, 25-45.
PLATFORM:        iOS 17+ (SwiftUI)
LANGUAGE:        Swift 6
FRAMEWORK:       SwiftUI
BACKEND:         Cloudflare Worker (Lix LLM proxy) + local data
MONETIZATION:    Free → Longevity+ subscription tier (post-launch)
APP STORE GOAL:  TestFlight build 5 → external beta → App Store submission (target: late April / early May 2026)
DESIGN VIBE:     Strategy 1 · three peer registers (Dialog · Signal · Ritual) · italic Newsreader narrator + Space Mono overlines · hard 2px corners · no rating stars · no pastel rings · no fake mono metadata · no capsule pills
```

---

## 2. Where things stand · 2026-04-25

**State:** 19 shipped SwiftUI artifacts are final: Lix chat (#26), Auth, and the 17 post-auth app screens. In the original 25-row deck, 5 onboarding screens are deliberately collapsed into Lix chat, SupplementRecommendation is relocated into Shop, and GlowScanInvitation is relocated into the GlowScan first-run banner. Strategy 1 voice family verified across all shipped surfaces. TestFlight build 4 processing on Apple. **Build 5 not cut yet.**

**Source of truth:**
- Code reality: `audit/screen-truth.md`
- Root inventory: `audit/root-truth.md`
- Master deck coverage: `audit/coverage.md`
- Live screen status: `studio/design/app-redesign/PROGRESS.md`
- Strategy 1 process: `studio/design/app-redesign/FORGE-PROCESS.md`
- Master visual deck: `studio/design/app-redesign/alche-app-redesign.html`

**What's left to ship:**
1. **Lix Cloudflare Worker deploy** — replace fallback reactions with real LLM (`mascot-lab/lix-impl/worker/`)
2. **Welcome video** — 10 stills (Nano Banana Pro) + 3 hero clips (Veo 3.1 Fast) → `app/Alche/Resources/welcome-loop.mp4`
3. **TestFlight build 5 cut** — version bump → archive → altool upload → parent repo pin
4. **Polish housekeeping** — orphans (Practitioner.rating fields, BiologicalAgeCard, BiomarkerLegacy views, SmoothieMenuVM favorites, ContentCardView, EventCardView)

> **Full lane definitions:** `plans/parallelization.md`
> **Active task queue:** `tasks/queue.json`

---

## 3. Directory Layout

```
alche/
├── .claude/                    ← Claude Code session memory
├── .git/
├── .gitignore
├── CLAUDE.md                   ← root-level Claude Code context
├── motherdoc.md                ← this file
│
├── app/                        ← iOS Xcode project (canonical)
│   ├── Alche.xcodeproj/
│   ├── Alche/
│   │   ├── App/                ← entry point
│   │   ├── Features/           ← per-feature SwiftUI modules
│   │   ├── Core/               ← models, services, networking
│   │   ├── Design/             ← tokens + reusable components (AlcheReadCard, AlcheDataStrip, AlcheTabBar)
│   ├── AlcheTests/             ← unit tests (defeat tests are spec'd, not written yet)
│   ├── CLAUDE.md               ← app-level conventions
│   ├── motherdoc.md            ← app-internal motherdoc (duplicate of this, scoped to app)
│   └── PUBLISHING.md           ← TestFlight + App Store playbook
│
├── audit/                      ← Phase A audit outputs
│   ├── screen-truth.md
│   ├── root-truth.md
│   └── coverage.md
│
├── bin/
│   └── forge-status            ← sprint status checker
│
├── plans/                      ← framework spine
│   ├── roadmap.md              ← what's left + per-lane status
│   ├── parallelization.md      ← agent lane assignments + walled-off scopes
│   ├── prompt-cookbook.md      ← sharpened launch prompts (via #pro)
│   ├── senior-dev-checklist.md ← 31-item quality gate
│   └── status-board.md         ← live agent state
│
├── agents/                     ← agent character sheets + memory
│   ├── release-manager.md      (full)
│   ├── test-engineer.md        (full)
│   ├── documentarian.md        (full)
│   ├── ios-architect.md        (lean)
│   ├── design-translator.md    (lean)
│   ├── swift-dev-roy.md        (lean)
│   ├── ui-dev-jen.md           (lean)
│   ├── requirements-engineer.md (lean)
│   ├── business-analyst.md     (lean)
│   ├── project-manager.md      (lean)
│   ├── memory/                 ← per-agent 5-layer memory (recent / medium / long / compost)
│   └── tests/                  ← behavior tests per agent
│
├── tasks/
│   └── queue.json              ← priority queue
│
├── devlogs/                    ← per-task work summaries
│
├── reports/                    ← forge-status outputs
│
└── studio/                     ← all workspace artifacts
    ├── pitchbook/              ← live v6 (was pitchbook-v6/)
    ├── design/
    │   ├── app-redesign/       ← active redesign workspace + master deck
    │   ├── home-redesign/      ← Direction C study (load-bearing for app-redesign iframes)
    │   ├── mascot-lab/         ← Lix mascot + worker prototype
    │   ├── website/            ← landing page directions a/b/c
    │   └── fonts/              ← brand typography
    ├── research/
    │   ├── positioning/        ← was research/
    │   ├── reference/          ← was research-reference/
    │   └── insights/           ← was insights/
    ├── brand/
    │   └── logo/
    ├── tools/
    │   ├── pdf-html-system/
    │   └── claude-talk-to-figma-mcp/
    ├── ops/
    │   ├── admin/              ← session log
    │   └── docs/               ← privacy-policy.html
    └── archive/
        ├── pitchbook-v1/        ← v1 monolith
        ├── pitchbook-bridge/    ← v5→v6 transition workspace
        ├── alche-app-prototype/ ← frozen JSX redesign mockup
        ├── stitch-screens/
        ├── startup-skill-output/
        ├── startup-skill-repo/
        ├── assets-stale/
        ├── root-build-scripts/  ← archived root scripts preserved during restructure
        ├── positioning-decks-feb/
        ├── early-pdfs/
        ├── funding-research-march/
        └── financials-feb/
```

---

## 4. The Process · Where We Are in 8 Phases

```
PHASE 0       PHASE 1        PHASE 2        PHASE 3
--------      ---------      ---------      ---------
Brain Dump    Requirements   Architecture   Design System
& Vision      & Roadmap      & Scaffold     & Tokens

   ✅              ✅              ✅              ✅
(implicit)    (PROGRESS.md)  (Xcode proj)   (tokens.css + components.css)

PHASE 4       PHASE 5        PHASE 6        PHASE 7
---------     ---------      ---------      ---------
MVP Build  → Polish &     → TestFlight   → App Store
(core flows)  Secondary      & Beta         Submission
              Features

   ✅             ◐              ◐              ⬜
(Sprints 0-5) (housekeeping)  (build 4 in    (after build 5
              + Welcome       processing)     external beta)
              video + Lix
              worker)
```

**Active phase:** 5 → 6 transition. Build 5 cut is the gate.

> **Full process detail:** `studio/design/app-redesign/FORGE-PROCESS.md` (audit-first protocol, GREEN/NUDGE/POLISH classification, 9-grep audit cheatsheet, three registers).

---

## 5. Strategy 1 in 3 lines

Each screen picks a register: **Dialog-first** (the screen speaks first) · **Signal-first** (a single pattern carries the page) · **Ritual-first** (the next moment is the page).

Voice family shared across registers via narrator kit: italic Newsreader, Space Mono overlines, hard 2px corners. **No** rating stars, pastel rings, fake mono metadata, capsule pills, emoji icons in metadata.

> **Register distribution per master deck:** Dialog 11 · Signal 3 · Ritual 3 · Lix-merged 5 · Relocated 2 · Home spotlight 1 = 25 + Lix chat #26.

---

## 6. Quality Gates

- **Senior Dev Checklist** — `plans/senior-dev-checklist.md` · 31 items (motherdoc 22 + FORGE 9 grep audit patterns)
- **Defeat tests** — 4 starter tests are **SPEC'D but not WRITTEN** yet (force unwrap, hardcoded color, business logic in View, @MainActor omission). Target path when added: `app/AlcheTests/DefeatTests/`.
- **OpenSpec** — minimal scaffold exists at `app/openspec/`; no active proposals/spec workflow adopted yet. Per-screen `swift-plan.md` files remain the working screen specs.
- **xcodebuild gate** — every commit must build clean (`xcodebuild -scheme Alche build`)
- **Test gate** — 21/21 currently passing
- **9 grep audits** per FORGE-PROCESS.md — token drift, hardcoded colors, fake mono metadata, system fonts, capsule pills, rating stars, etc.

---

## 7. Active agent roster

| Agent | Status | Sheet |
|---|---|---|
| Release Manager | **active** (drives build 5 cut) | `agents/release-manager.md` |
| Test Engineer | **active** (defeat tests + 21-test suite) | `agents/test-engineer.md` |
| Documentarian | **active** (PROGRESS + devlogs + roadmap reconciliation) | `agents/documentarian.md` |
| Roy (Swift Dev) | reserved (housekeeping orphans) | `agents/swift-dev-roy.md` |
| Jen (UI Dev) | reserved (Welcome video integration) | `agents/ui-dev-jen.md` |
| iOS Architect | reserved | `agents/ios-architect.md` |
| Design Translator | reserved | `agents/design-translator.md` |
| Requirements Engineer | dormant (Phase 1 complete) | `agents/requirements-engineer.md` |
| Business Analyst | dormant | `agents/business-analyst.md` |
| Project Manager | active (lane orchestration) | `agents/project-manager.md` |

---

## 8. The 4 active lanes

> **Full prompts (sharpened via `#pro`):** `plans/prompt-cookbook.md`

| # | Lane | Owner | Estimated effort | Blocked by |
|---|---|---|---|---|
| 1 | **Lix worker deploy + Swift patch** | User on wrangler · Roy applies Swift | 1–2 hr | wrangler login |
| 2 | **Welcome video** (stills + clips + composite) | image/video pipeline + Jen for Swift integration | 4–6 hr | Nano Banana Pro generation |
| 3 | **TestFlight build 5 cut** | Release Manager | 30 min | build 4 done processing · post-build-4 commits captured · housekeeping + new media in tree |
| 4 | **Polish housekeeping** (orphans cleanup) | Roy | 1 hr | none |

Lanes 1, 2, 4 can run in **parallel**. Lane 3 (build 5 cut) is **sequential after** the others land.

---

## 9. Anti-Patterns Already Defeated

- ✅ Capsule pills — retired across all 25 screens
- ✅ Rating stars / pastel rings — stripped from DoctorSessions
- ✅ Fake mono metadata (`VER 5.0`, `LAT 34.05`, `GRID REF`) — removed; grep guard in test suite
- ✅ Generic SF Symbol icon scaffolding in metadata — replaced by mono `LABEL · VALUE` rows
- ✅ Pastel gradient hero blocks — gone from EventDetail, ContentCardView, EventCardView
- ✅ Hardcoded `Color.cream` / `Color.linen` / `alcheBeauty*` tokens — purged
- ✅ Segmented pickers (`.pickerStyle(.segmented)`) — replaced by mono text rows
- ✅ Onboarding ceremony (8 screens) — collapsed to 1 Lix chat + Auth handoff

---

## 10. Diarrhea Protocol — what NOT to do now

Quoting the framework: *"When you feel the pull to add 'just one more feature' or start a second app or code at 3am — capture the idea, do NOT execute it now."*

Active prohibition during ship phase:
- No new screens
- No new features
- No design re-litigation (Strategy 1 is locked)
- No refactoring outside the 4 housekeeping orphans
- No version bump until build 5 is cut
- No commits to `app/` from main thread without going through Release Manager gate

---

## 11. Ship checklist (Phase 7)

When Lane 3 fires, Release Manager runs:

- [ ] All Lane 1, 2, 4 commits merged on `redesign/editorial-longevity`
- [ ] xcodebuild clean
- [ ] 21/21 tests pass; if defeat tests have landed by then, all defeat tests pass too
- [ ] Senior Dev Checklist run on changed files
- [ ] Version bump in `app/Alche.xcodeproj/project.pbxproj` (CFBundleVersion + CFBundleShortVersionString)
- [ ] Archive: `xcodebuild -scheme Alche archive`
- [ ] Upload: `xcrun altool --upload-app -f Alche.ipa -t ios -u <APPLE_ID> -p <APP_PASSWORD>`
- [ ] Confirm in App Store Connect → TestFlight tab
- [ ] Parent repo pin: commit submodule reference + PROGRESS.md update
- [ ] Devlog entry in `devlogs/`

---

**This document is the spine. Every other doc points back to this. When in doubt, return here.**

🤍
