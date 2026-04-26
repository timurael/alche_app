# Root Chaos Inventory + Consolidation Plan · 2026-04-25

**Scope:** `/Users/timoel/Desktop/Projects/brands/alche/`
**Method:** Read every top-level dir, every loose file, checked git tracking, mod times, cross-references, and content where ambiguous.

---

## Part 1: Full inventory

### Top-level directories

| Name | Purpose | Last touched | In use? | Size | Files | Class | Notes |
|---|---|---|---|---|---|---|---|
| `app/` | iOS Xcode project (Alche.xcodeproj, Swift sources, agents, plans, motherdoc) | 2026-04-25 | **YES** — active branch `redesign/editorial-longevity`, latest commit `18edacb` minutes ago | 38M | ~hundreds | **ACTIVE** | Canonical iOS app. Has its own `.git`, `.claude`, `CLAUDE.md`, `motherdoc.md`. Tracked from parent as plain dir (` M app` in parent status — not a real submodule despite earlier "submodule" commit messages; `.gitmodules` does not exist). |
| `alche app/` | Web-based React/JSX prototype of redesign (8 .jsx + `Alche Redesign.html` + `uploads/` screenshots) | 2026-04-24 | Maybe — recent, untracked, but a self-contained design prototype | 2.2M | 16 | **ARCHIVE-CANDIDATE** | NOT a duplicate of `app/`. Different artifact entirely: HTML+JSX prototype that loads `home.jsx`, `glowscan.jsx`, `protocol.jsx`, etc. — likely Stitch/AI-tool export. Folder name with space is hostile. |
| `app-redesign/` | Active Dialog-first redesign workspace — PROGRESS.md tracks SwiftUI ship status, screen mockups, shared CSS tokens | 2026-04-25 | **YES** — modified literally minutes ago, drives current sprint | 19M | 112 | **ACTIVE** | Imports `home-redesign/direction-c-mockup.html` via iframe → home-redesign is a dependency, not superseded. |
| `home-redesign/` | Three home-screen direction mockups (a/b/c) + shared figma tokens. Direction C was locked as Dialog-first parent | 2026-04-24 | **YES** — referenced by `app-redesign/alche-app-redesign.html` | 88K | 5 | **ACTIVE** | Small but load-bearing for `app-redesign/`. |
| `mascot-lab/` | Four mascot alternatives (A-lix, B-havan, C-filiz, D-alo) with index.html gallery | 2026-04-24 | YES — recent, has implementation worker (`lix-impl/worker/worker.js`) | 296K | 22 | **ACTIVE** | Self-contained design exploration. |
| `pitchbook/` | v1 monolithic pitchbook — INDEX.md says "Last updated 2026-02-24" — has _archive, deliverables, financials, sections, science, build, node_modules | 2026-03-03 | NO — superseded by v6 | 148M | 6909 | **ARCHIVE-CANDIDATE** | Massive (largest dir). Includes the OLD `alche_pitch_book.pdf`. Has `node_modules/` — bulk of size. |
| `pitchbook-final/` | Mid-stage transcription/editing workspace (raw text, transcript, decisions, proposals, converted HTML) | 2026-04-14 | NO — superseded by v6, but contains the canonical "final" PDF byte-identical to root `alche_pitch_book.pdf` | 7.1M | 19 | **ARCHIVE-CANDIDATE** | The PDF here matches root copy (MD5 `a5189f12...`). Decision/proposal MD files document the v5→v6 pivot reasoning. |
| `pitchbook-v6/` | **Current** retail-first pitchbook rebuild — DELIVERABLES.md, decisions-locked.md, build/, pdf/, deck, financials, research | 2026-04-25 | **YES** — newest pitchbook | 16M | 65 | **ACTIVE** | The live pitchbook. Newer PDF (`00-alche-pitchbook.pdf`, 1.7M) replaces older 3.9M. |
| `pdf-html-system/` | Standalone tool: PDF→editable HTML converter (PyMuPDF + Playwright export) | 2026-04-07 | UNCLEAR — was used to seed `pitchbook-final/pitchbook-converted.html`; no recent activity | 136M | 3297 | **ARCHIVE-CANDIDATE** | Mostly `node_modules/` + `__pycache__/`. Tool, not deliverable. Likely served its purpose (extracting v5 PDF for editing). |
| `research/` | Pre-customer-interview positioning research (00 overview → 06 questionnaire) | 2026-03-19 | UNCLEAR — referenced as foundation, not actively edited | 116K | 7 | **ARCHIVE-CANDIDATE** | "EXPLORATORY -- Pre-Customer-Interview" header. Files 01-06 unique to this dir. |
| `research-reference/` | Sourced market data tables — twin of `research/` with different filenames (01-07 different topics: market data, scores, insights, sources, competitor profiles, design systems, supplement mapping) | 2026-03-19 | UNCLEAR — disjoint from `research/`, not a copy | 76K | 7 | **ARCHIVE-CANDIDATE** | Despite name, NOT redundant with `research/` — different content. Both feed deck. |
| `insights/` | 10 numbered investor-facing insight memos (market numbers, tailwinds, competitor graveyard, Zoe analysis, EU landscape, objections cheatsheet) | 2026-02-22 | UNCLEAR — old, but content cited in pitchbook | 52K | 10 | **ARCHIVE-CANDIDATE** | Disjoint again — third research silo with non-overlapping content. |
| `website/` | Three landing-page directions (a/b/c) + assets/img + assets/video + Veo prompts + Claude build prompt | 2026-04-25 | YES — recent (assets img/stills generation log dated 2026-04-25) | 4.0M | 12 | **ACTIVE** | Three direction comparison, parallel to home-redesign. |
| `stitch-screens/` | Onboarding HTML + PNG export from Stitch tool | 2026-04-02 | NO recent activity, single welcome-onboarding artifact | 532K | 18 | **ARCHIVE-CANDIDATE** | Old Stitch outputs; superseded by mascot-lab + app-redesign work. |
| `claude-talk-to-figma-mcp/` | Third-party MCP server for Figma integration. Has its own `.git` (was sub-repo). Status shows ` m` modifier — dirty submodule-ish state | 2026-04-14 | YES — used by tooling | 135M | 10259 | **ARCHIVE-CANDIDATE** | Should NOT live in project root. Belongs in `~/.tools/` or as a git submodule reference, not vendored. Bulk = `node_modules/`. |
| `--help/claude-talk-to-figma-mcp` | Accidental duplicate gitlink to the Figma MCP server | n/a | NO | n/a | n/a | **DELETE-CANDIDATE** | Tracked gitlink target was `d336452b408f4a20ee0803b609e7e743738bb76c`. Do not restore to root; usable workspace is preserved at `studio/tools/claude-talk-to-figma-mcp/`. |
| `startup-skill-output/` | Output of running the startup-skill (competitors/design/positioning subdirs) | 2026-03-12 | NO — old skill output | 592K | 67 | **ARCHIVE-CANDIDATE** | Orphan artifact from skill run. |
| `.startup-skill-repo/` | Cloned repo of the startup-skill itself (README points to `ferdinandobons/startup-skill`) | 2026-03-13 | NO | (in du list) | 68 | **DELETE-CANDIDATE** | External repo cloned-in. Replace with submodule or remove; nothing project-specific. |
| `assets/` | `in-use/` (empty), `variations/` (one screenshot from 2026-02-26) | 2026-04-02 | NO — empty/stale | 344K | 3 (incl .DS_Store) | **DELETE-CANDIDATE** | Both subfolders effectively empty. |
| `fonts/` | Cormorant Garamond + Newsreader + Noto Sans + Space Mono font files (.ttf + .woff2) | 2026-03-13 | YES (consumed by HTML decks/sites) | 4.5M | 29 | **ACTIVE** | Brand typography assets. |
| `admin/` | `session-log.md` only (one file) | 2026-04-25 | YES — written today by forge process | 4.0K | 1 | **ACTIVE** | Working session log. |
| `bin/` | `forge-status` shell script for sprint state report | 2026-04-25 | YES — recent | 8.0K | 1 | **ACTIVE** | Tooling. |
| `docs/` | `privacy-policy.html` only | 2026-04-02 | YES — App Store submission requirement | 12K | 1 | **ACTIVE** | Keep — published artifact. |
| `reports/` | Three forge audit reports from 2026-04-25 18:48 | 2026-04-25 | YES — fresh | 20K | 3 | **ACTIVE** | Today's audit outputs. |
| `.claude/` | Session memory (SOUL.md, last-session.txt, scheduled_tasks.json, session-log.md) | 2026-04-25 | YES | n/a | 4 | **ACTIVE** | Required infrastructure. |
| `.git/` | Repo metadata | 2026-04-25 | YES | n/a | n/a | **ACTIVE** | Required. |
| `.startup-skill-repo/` | (see above row) | | | | | | |

### Loose root files

| Name | Type | Purpose | Last touched | Class | Notes |
|---|---|---|---|---|---|
| `alche_pitch_book.pdf` | PDF | The "final" v1 pitchbook PDF | 2026-04-07 | **ARCHIVE-CANDIDATE** | MD5 byte-identical to `pitchbook-final/alche_pitch_book.pdf`. Duplicate. |
| `alche-onepager (1).pdf` | PDF | One-pager | 2026-02-18 | ARCHIVE-CANDIDATE | Old; filename has `(1)` indicating duplicate-on-download. |
| `alche_investor_book_the_team.pdf` | PDF | Team section investor book | 2026-02-20 | ARCHIVE-CANDIDATE | Old slice, superseded by v6. |
| `Alche Competitive Intelligence Deep Dive _ Part 2 of 3.pdf` | PDF | Competitive intel research input | 2026-02-12 | ARCHIVE-CANDIDATE | Source material. |
| `alche_logo_lowres.png` | PNG | Brand logo | 2026-04-02 | ACTIVE | Used by HTML decks. |
| `build_apothecary_deck.py` | PY | Old apothecary positioning deck builder | n/a | ARCHIVE-CANDIDATE | Tracked root script discovered during restructure verification. Preserved under `studio/archive/root-build-scripts/`. |
| `build_funding_sheet.py` | PY | Funding-opportunities workbook builder | n/a | ARCHIVE-CANDIDATE | Tracked root script discovered during restructure verification. Preserved under `studio/archive/root-build-scripts/`. |
| `build_positioning_deck.py` | PY | Old positioning deck builder | n/a | ARCHIVE-CANDIDATE | Tracked root script discovered during restructure verification. Preserved under `studio/archive/root-build-scripts/`. |
| `Alche_Funding_Opportunities_March2026.xlsx` | XLSX | Funding research output | 2026-03-11 | ARCHIVE-CANDIDATE | Stale (March). |
| `FUNDING-OPPORTUNITIES-RESEARCH.md` | MD | Funding research source doc | 2026-03-11 | ARCHIVE-CANDIDATE | Pairs with above xlsx. |
| `accelerator-research-march-2026.md` | MD | Accelerator research | 2026-03-11 | ARCHIVE-CANDIDATE | Same vintage. |
| `alche-24mo-roadmap.xlsx` | XLSX | 24-month roadmap | 2026-02-26 | ARCHIVE-CANDIDATE | Old. |
| `alche-pnl-24mo.xlsx` | XLSX | P&L model | 2026-02-26 | ARCHIVE-CANDIDATE | Superseded by `pitchbook-v6/financials/`. |
| `alche-apothecary-positioning.pptx` | PPTX | Apothecary positioning deck | 2026-02-19 | ARCHIVE-CANDIDATE | Old positioning experiment. |
| `alche-brand-positioning.html` | HTML | Brand positioning HTML deck | 2026-02-19 | ARCHIVE-CANDIDATE | Old. |
| `alche-competitive-positioning.pptx` | PPTX | Competitive positioning deck | 2026-02-19 | ARCHIVE-CANDIDATE | Old. |
| `alche-imperfect-longevity-positioning.pptx` | PPTX | "Imperfect longevity" positioning deck | 2026-02-19 | ARCHIVE-CANDIDATE | Old positioning experiment. |
| `positioning-map.png` | PNG | Positioning map render | 2026-02-19 | ARCHIVE-CANDIDATE | Old. |
| `positioning-map-apothecary.png` | PNG | Apothecary variant positioning render | 2026-02-19 | ARCHIVE-CANDIDATE | Old. |
| `motherdoc-template copy.md` | MD | Generic agentic-SDLC mother-doc template (NOT Alche-filled — that's `app/motherdoc.md`) | 2026-03-13 | **DELETE-CANDIDATE** | Filename has " copy" — accidental Finder duplicate. App's filled motherdoc lives in `app/motherdoc.md`. |
| `pitchbook-edits.md` | MD | Pitchbook editing notes | 2026-04-14 | ARCHIVE-CANDIDATE | Belongs inside pitchbook workspace. Note: identical name lives in `pitchbook-final/`. |
| `.gitignore` | Config | Repo gitignore | 2026-04-02 | **ACTIVE** | Keep. |
| `.DS_Store` | macOS | Finder metadata | 2026-04-19 | DELETE-CANDIDATE | Already gitignored, but loose. |

### Critical pair investigations

**`app/` vs `alche app/`:** **NOT duplicates.** `app/` is the canonical iOS Xcode project (Swift, Alche.xcodeproj, on branch `redesign/editorial-longevity`, latest commit 18edacb pushing today). `alche app/` is a separate self-contained web prototype: 8 .jsx files + an `Alche Redesign.html` shell that loads them as React/Babel-in-browser, plus `uploads/` (6 screen PNG screenshots). Likely a Stitch or AI-tool export representing a redesign mockup. Resolution: **keep `app/`, fold `alche app/` into the redesign archive** — it is a frozen mockup, not running code, and the active redesign work happens in `app-redesign/`.

**`pitchbook/` vs `pitchbook-final/` vs `pitchbook-v6/`:** Linear succession. `pitchbook/` (Mar 3) was the v1–v5 monolithic workspace (148M, 6909 files, mostly node_modules + many deck variations — "subscription-model" era). `pitchbook-final/` (Apr 14) was the editing/transcription bridge that captured the v5 PDF as text + HTML + edits + decisions during the v5→v6 pivot. `pitchbook-v6/` (Apr 25) is the **current** rebuild with retail-first model, locked decisions, 1.7M PDF in `pdf/00-alche-pitchbook.pdf`. The root `alche_pitch_book.pdf` is byte-identical to `pitchbook-final/alche_pitch_book.pdf` (MD5 confirmed) — duplicate of the OLD v5 PDF. **Live: pitchbook-v6. Archive: pitchbook + pitchbook-final + root PDF copy.**

**`home-redesign/` vs `app-redesign/`:** **Sibling, not superseded.** `home-redesign/` is the locked Direction-C study (3 directions a/b/c + shared figma tokens, 5 files). `app-redesign/` extends Direction C across the entire app (112 files, includes shared CSS tokens duplicated for portability AND an iframe pulling `../home-redesign/direction-c-mockup.html`). Hard dependency: deleting home-redesign breaks app-redesign's HTML mockup. **Both stay active.**

**`research/` vs `research-reference/` vs `insights/`:** All three have **non-overlapping** content despite confusable names. `research/` = positioning thesis + competitive landscape + market intelligence + decision framework (7 files, exploratory pre-interview). `research-reference/` = sourced market data tables, brand scores, source index, competitor profiles, design systems, goal-supplement mapping (7 different files). `insights/` = 10 investor-facing memos (market numbers, Zoe threat, EU landscape, objection cheatsheet). All three feed the deck. Frozen mid-March (research/research-reference) and late-Feb (insights). **Consolidate into one `research/` umbrella with subfolders.**

**`pdf-html-system/` vs `pitchbook-v6/`:** `pdf-html-system/` is the *tool* used to extract a PDF into editable HTML (PyMuPDF + Playwright). It seeded `pitchbook-final/pitchbook-converted.html`. `pitchbook-v6/` is the rebuilt deck product. No content overlap. The tool has likely served its purpose; archive it (or extract to `~/tools/` if reused).

### Sensitive content flags

- **No `.env` files at root surface.** `find` for `.env*`, `*.p12`, `credentials*`, `*.cer`, `*token*` (depth 2) returned only `.css` files matching token (Figma design tokens, not auth).
- `.gitignore` already excludes `*.p12`, `*.mobileprovision`, `*.cer`, `GoogleService-Info.plist`. Good hygiene.
- `app/Alche/` (iOS app source) not deeply scanned — assume standard iOS secrets covered by app-level .gitignore.

---

## Part 2: Consolidation proposal

### Proposed root structure

```
alche/
├── .git/
├── .gitignore
├── .claude/
├── CLAUDE.md                  ← (currently missing at root — recommend creating one stub pointing to studio/ + app/)
├── README.md                  ← (optional — minimal pointer)
├── app/                       ← single iOS app home (canonical Xcode project)
├── studio/                    ← everything else (recommended wrapper, see naming below)
│   ├── pitchbook/             ← pitchbook-v6/ contents promoted (the live one)
│   ├── design/
│   │   ├── app-redesign/
│   │   ├── home-redesign/     ← kept (app-redesign iframe-imports it)
│   │   ├── mascot-lab/
│   │   └── website/
│   ├── research/
│   │   ├── positioning/       ← was research/
│   │   ├── reference/         ← was research-reference/
│   │   └── insights/          ← was insights/
│   ├── brand/
│   │   ├── fonts/             ← was fonts/
│   │   └── logo/              ← alche_logo_lowres.png + future brand assets
│   ├── tools/
│   │   ├── pdf-html-system/   ← (or delete if confirmed one-shot)
│   │   ├── claude-talk-to-figma-mcp/  ← (or extract to ~/tools/)
│   │   └── bin/               ← forge-status
│   ├── ops/
│   │   ├── admin/             ← session logs
│   │   └── docs/              ← privacy-policy.html
│   └── archive/
│       ├── pitchbook-v1/      ← was pitchbook/ (148M)
│       ├── pitchbook-bridge/  ← was pitchbook-final/
│       ├── alche-app-prototype/ ← was "alche app/" (renamed, no space)
│       ├── stitch-screens/
│       ├── startup-skill-output/
│       ├── root-build-scripts/
│       ├── positioning-decks-feb/ ← all the .pptx and .html positioning files
│       ├── early-pdfs/        ← onepager, investor_book_the_team, comp-intel pt2
│       ├── funding-research-march/ ← FUNDING md + xlsx + accelerator md
│       └── financials-feb/    ← alche-24mo-roadmap.xlsx, alche-pnl-24mo.xlsx
├── reports/                   ← stays at root (today's outputs, ephemeral, easy to scan)
└── audit/                     ← stays at root (this file lives here)
```

### Wrapper naming candidates

| Name | Pros | Cons | Vibe match |
|---|---|---|---|
| `studio/` | Editorial, terse, matches Alche's brand voice (apothecary/atelier register). Implies craft + work-in-progress. Not corporate. | Slight art-school connotation. | **Strong** — pairs naturally with "lab", "ritual", "alchemy". |
| `workshop/` | Tactile, craft-oriented, matches mascot-lab vocabulary, implies things-in-progress. | A touch longer, slightly more makerspace than editorial. | Good. |
| `forge/` | Already in Timu's vocabulary (`bin/forge-status`, `#forge` command, FORGE-PROCESS.md). Earns the metaphor. Active, hot, productive. | Mild overload with the `#forge` skill — could confuse "the forge folder" with "the forge command". | Strong but ambiguous. |

**Recommended: `studio/`.** It reads as the home of all craft outputs (decks, designs, research, brand) without colliding with the `#forge` command's identity. `forge` is the *verb* (the way work happens); `studio` is the *place* the artifacts live. `workshop` is fine but less editorial than `studio`.

### app/ resolution

**Decision: Keep `app/` as the single iOS home. Move `alche app/` to `studio/archive/alche-app-prototype/`.**

**Evidence:**
- `app/` has its own `.git`, is on active branch `redesign/editorial-longevity`, latest commit minutes ago, contains Xcode project, Swift sources, agents, motherdoc, plans — it IS the iOS app.
- `alche app/` contains zero Swift, zero Xcode files; it is HTML + JSX + screenshot uploads — a frozen web prototype, not running code.
- The folder name with a space (`alche app`) is a quality-of-life liability for shell, git, build tools.
- The active redesign workspace is `app-redesign/` — `alche app/` does not appear referenced from anywhere recent.

### Move plan

| From | To | Action | Risk |
|---|---|---|---|
| `app/` | `app/` | **stay** | none |
| `alche app/` | `studio/archive/alche-app-prototype/` | mv (rename, drop space) | low |
| `app-redesign/` | `studio/design/app-redesign/` | mv | **medium** — has iframe to `../home-redesign/...`; relative path holds if both move under `studio/design/` |
| `home-redesign/` | `studio/design/home-redesign/` | mv | medium — same iframe link, move together |
| `mascot-lab/` | `studio/design/mascot-lab/` | mv | low |
| `website/` | `studio/design/website/` | mv | low |
| `pitchbook-v6/` | `studio/pitchbook/` | mv (promote to clean name) | low |
| `pitchbook/` | `studio/archive/pitchbook-v1/` | mv | low (148M but superseded) |
| `pitchbook-final/` | `studio/archive/pitchbook-bridge/` | mv | low |
| `pitchbook-edits.md` | `studio/archive/pitchbook-bridge/pitchbook-edits-root.md` | mv (rename to avoid collision with internal one) | low |
| `research/` | `studio/research/positioning/` | mv | low |
| `research-reference/` | `studio/research/reference/` | mv | low |
| `insights/` | `studio/research/insights/` | mv | low |
| `pdf-html-system/` | `studio/tools/pdf-html-system/` (or delete) | mv | low — not in active use |
| `claude-talk-to-figma-mcp/` | `studio/tools/claude-talk-to-figma-mcp/` (better: extract to `~/tools/` and reference) | mv | medium — has its own `.git`, dirty state; verify nothing pinned |
| `--help/claude-talk-to-figma-mcp` | DELETE | rm gitlink | low — accidental duplicate gitlink; SHA preserved in `studio/archive/root-build-scripts/README.md` |
| `stitch-screens/` | `studio/archive/stitch-screens/` | mv | low |
| `startup-skill-output/` | `studio/archive/startup-skill-output/` | mv | low |
| `.startup-skill-repo/` | DELETE | rm -rf | low — external repo, re-clone if needed |
| `assets/` | DELETE (empty/stale) | rm -rf | low |
| `fonts/` | `studio/brand/fonts/` | mv | medium — HTML decks reference `fonts/` via relative paths; update CSS or keep symlink |
| `bin/` | `studio/tools/bin/` | mv | low — solo script |
| `admin/` | `studio/ops/admin/` | mv | low |
| `docs/` | `studio/ops/docs/` | mv | low — privacy-policy URL may need re-publishing if hosted |
| `alche_pitch_book.pdf` (root) | DELETE | rm | low — byte-identical to `pitchbook-final/alche_pitch_book.pdf` |
| `alche_logo_lowres.png` | `studio/brand/logo/alche_logo_lowres.png` | mv | low |
| `alche-onepager (1).pdf` | `studio/archive/early-pdfs/alche-onepager.pdf` | mv (rename, drop `(1)`) | low |
| `alche_investor_book_the_team.pdf` | `studio/archive/early-pdfs/` | mv | low |
| `Alche Competitive Intelligence Deep Dive _ Part 2 of 3.pdf` | `studio/archive/early-pdfs/` | mv | low |
| `alche-apothecary-positioning.pptx`, `alche-brand-positioning.html`, `alche-competitive-positioning.pptx`, `alche-imperfect-longevity-positioning.pptx`, `positioning-map.png`, `positioning-map-apothecary.png` | `studio/archive/positioning-decks-feb/` | mv | low |
| `Alche_Funding_Opportunities_March2026.xlsx`, `FUNDING-OPPORTUNITIES-RESEARCH.md`, `accelerator-research-march-2026.md` | `studio/archive/funding-research-march/` | mv | low |
| `alche-24mo-roadmap.xlsx`, `alche-pnl-24mo.xlsx` | `studio/archive/financials-feb/` | mv | low |
| `motherdoc-template copy.md` | DELETE | rm | low — `app/motherdoc.md` is the filled, real one |
| `build_apothecary_deck.py`, `build_funding_sheet.py`, `build_positioning_deck.py` | `studio/archive/root-build-scripts/` | mv | low — old generation scripts; preserved rather than deleted |
| `reports/` | stay at root | none | none |
| `audit/` | stay at root | none | none |
| `.DS_Store` (root) | DELETE | rm | none |

### Archive vs delete

**Archive (keep, but out of the way under `studio/archive/`):**
- `pitchbook/` (v1 monolith, 148M — historical record of the subscription-era thinking)
- `pitchbook-final/` (the v5→v6 bridge, captures the pivot reasoning)
- `alche app/` (frozen web prototype — keep as design history)
- `stitch-screens/` (early Stitch outputs)
- `startup-skill-output/` (one-shot skill output, may want to re-read)
- `root-build-scripts/` (tracked root scripts discovered during verification)
- All Feb positioning .pptx + .html + .png files
- All Feb–Mar funding/financial docs
- `alche-onepager`, `investor_book_the_team`, `comp-intel pt2` PDFs

**Delete (high confidence):**
- `alche_pitch_book.pdf` at root — byte-identical duplicate of `pitchbook-final/alche_pitch_book.pdf` (MD5 verified)
- `motherdoc-template copy.md` — generic template; `app/motherdoc.md` is the real, filled one for Alche
- `assets/` — both subfolders effectively empty (one stray screenshot + .DS_Stores)
- `.startup-skill-repo/` — external GitHub repo cloned-in; re-clone if needed
- `.DS_Store` files (root + assets/)

**Keep at root (genuinely top-level):**
- `app/` — the iOS app
- `studio/` — the consolidated workspace
- `audit/` — this audit
- `reports/` — today's forge outputs (ephemeral, fine at root for visibility)
- `.git/`, `.gitignore`, `.claude/`
- (Recommend creating) `CLAUDE.md` at root pointing to `app/` and `studio/`
- (Recommend creating) `README.md` one-pager pointing to `studio/pitchbook/pdf/00-alche-pitchbook.pdf` for outsiders

### Open risks / things to verify before moving

1. **`fonts/` references.** HTML decks (`alche-brand-positioning.html`, etc.) likely reference `fonts/` relative paths. Either update CSS or symlink `fonts -> studio/brand/fonts` post-move.
2. **`claude-talk-to-figma-mcp/`** has its own `.git` and dirty state. Confirm nothing is pinned/in-progress before moving. Better outcome: extract to `~/tools/` and remove from this repo entirely.
3. **`app-redesign/alche-app-redesign.html`** iframe-imports `../home-redesign/direction-c-mockup.html`. Both must move into the same parent (`studio/design/`) to preserve `../` relative path.
4. **`docs/privacy-policy.html`** — if this is publicly served, moving it changes the URL. Confirm hosting before relocating.
5. **`pitchbook-v6/` internal references** — promote-to-`studio/pitchbook/` will break any absolute path inside. Quick grep before move.

---

**End of audit.**
