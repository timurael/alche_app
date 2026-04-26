# Alche Pitch Book — Project Index
**Last updated:** 2026-02-24 (restructured) | **Status:** Active

---

## Quick Navigation

| Category | Path |
|---|---|
| Final deliverables (PDFs, complete HTML) | [deliverables/](#deliverables) |
| Individual pitch book sections | [sections/current/](#sectionscurrent) |
| Deloitte consultant review | [sections/deloitte/](#sectionsdeloitte) |
| Standalone branded tools | [sections/standalone/](#sectionsstandalone) |
| Financial models & P&L | [financials/](#financials) |
| Master strategy docs | [strategy/](#strategy) |
| Research & insights | [research/](#research) |
| Design system | [design-system/](#design-system) |
| App screens & assets | [assets/](#assets) |
| Scientific content | [science/](#science) |
| Build scripts | [build/](#build) |
| Version history | [_archive/](#_archive) |

---

## Root (do not move)

| File | Description |
|---|---|
| `CLAUDE.md` | Project config & brand identity — **read first** |
| `INDEX.md` | This file |
| `package.json` | NPM dependencies (playwright, pdf-lib) |
| `package-lock.json` | Lockfile |
| `node_modules/` | Node dependencies — **do not touch** |

---

## deliverables/

Final outputs only. **Start here.**

| File | Description |
|---|---|
| `alche-pitchbook-final.pdf` | **PRIMARY PDF — latest complete pitch book** |
| `alche-pitchbook-final.html` | **PRIMARY HTML — single-file complete version** |
| `alche-pitchbook-complete.html` | Earlier single-file HTML |
| `alche-pitch-book.pdf` | Earlier PDF (superseded) |
| `alche-pitch-book.pptx` | PPTX version |
| `Alche_MIS_Presentation_v3_final.pdf` | MIS presentation (parallel deliverable) |
| `alche_the_ask_german_investorstructure.pdf` | German investor structure doc |
| `alche_the_ask_US_investorstructure.pdf` | US investor structure doc |

---

## sections/current/

Canonical 14-section pitch book. **These are the live, authoritative section files.**

| File | Description |
|---|---|
| `section-00-cover.html` | Cover page |
| `section-01-insight.html` | The insight / market problem |
| `section-02-who-we-serve.html` | Target customer segments |
| `section-03-market.html` | Market sizing |
| `section-04-competitive.html` | Competitive landscape |
| `section-05-solution.html` | alche solution |
| `section-06-product.html` | Product detail |
| `section-07-business-model.html` | Business model |
| `section-08-go-to-market.html` | GTM strategy |
| `section-09-traction.html` | Traction & validation |
| `section-10-moat.html` | Defensibility / moat |
| `section-11-team.html` | Team |
| `section-12-ask.html` | The ask (funding) |
| `section-13-closing.html` | Closing vision |

---

## sections/deloitte/

Consultant-reviewed parallel version. 18 files total.

| File | Description |
|---|---|
| `deloitte-combined.html` | All sections combined |
| `deloitte-review-tool.html` | Annotation/review tool |
| `deloitte-section-00-cover.html` | Cover |
| `deloitte-section-00b-toc.html` | Table of contents |
| `deloitte-section-00c-executive-summary.html` | Executive summary |
| `deloitte-section-01-insight.html` through `deloitte-section-13-closing.html` | Individual sections |

---

## sections/standalone/

Supplementary investor-facing tools and branded views.

| File | Description |
|---|---|
| `alche-decision-matrix.html` | Comprehensive decision matrix |
| `alche-graveyard-lessons.html` | Failed competitor analysis |
| `alche-gtm-strategy.html` | Go-to-market strategy view |
| `alche-market-investor.html` | Market analysis (investor version) |
| `alche-math-lab.html` | Financial modeling calculator |
| `alche-roadmap-final.html` | Product roadmap |
| `alche-slide-03-who-we-serve-investor.html` | Investor segment view |
| `alche-team-section.html` | Team section standalone |
| `alche-potions-presentation.html` | Potion formulas presentation |
| `alche-research-hub.html` | Research aggregation hub |
| `screens-renderer.html` | App screens viewer |

---

## financials/

All P&L and financial work.

### financials/models/ — Live spreadsheets + JSON

| File | Description |
|---|---|
| `alche-pnl-24mo-v3.xlsx` | **Latest 24-month P&L model** |
| `Budget_PnL.xlsx` | Budget P&L spreadsheet |
| `model_data.json` | Financial model data |

### financials/tools/ — HTML P&L tools

| File | Description |
|---|---|
| `alche-pnl-workbench.html` | Interactive P&L workbench |
| `alche-pnl-excel-filler.html` | Excel P&L filler tool |
| `alche-pnl-guide.html` | P&L explanation guide |
| `alche-pnl-annotations.html` | P&L with annotations |

### financials/docs/ — P&L markdown documentation

| File | Description |
|---|---|
| `PNL_DECISIONS_RECAP.md` | **Latest decisions summary** |
| `ALCHE_BUSINESS_LOGIC_COMPLETE.md` | Complete business logic |
| `PNL_EXPLANATION_GUIDE.md` | Guide to reading the P&L |
| `PNL_INVESTOR_BRIEF.md` | Investor-facing P&L brief |
| `pnl_content_map.md` | P&L content mapping |
| `pnl_ux_spec.md` | P&L UX specification |

### financials/decisions/ — Decision logs

| File | Description |
|---|---|
| `decisions_feb_23.md` | Decision log (Feb 23, most recent) |

### financials/research/ — P&L research swarm output

| File | Description |
|---|---|
| `_ALCHE_MASTER_CONTEXT.md` | Master context for P&L research |
| `_FINAL_PNL_ASSUMPTIONS.md` | **Locked final assumptions** |
| `_COMPETITOR_BENCHMARK.md` | Competitor benchmarks |
| `_RESEARCH_ADMIN.md` | Admin cost research |
| `_RESEARCH_DIGITAL.md` | Digital channel research |
| `_RESEARCH_GROWTH.md` | Growth research |
| `_RESEARCH_PHYSICAL.md` | Physical space research |
| `_RESEARCH_SERVICES.md` | Services research |
| `pnl_agents_prompt.md` | Agent prompt for P&L research |
| `swarm_presentation.html` | Swarm output presentation |

### financials/source-docs/ — Raw source files

| File | Description |
|---|---|
| `Alche_Cost_Analysis.pages` | Apple Pages cost analysis |
| `Alche_Cost_Analysis.pdf` | PDF version of cost analysis |
| `Alche_CGM_Full_Analysis.pdf` | CGM analysis |
| `convert-to-pdf.js` | PDF conversion script (pnl/) |
| `build_excel_pnl_v3.py` | Excel P&L builder v3 |

### financials/archive_pnl/ — Older P&L versions

Previous P&L iterations (v1, v2 Excel, older scripts, session log).

---

## strategy/

Master strategy and content documents — **authoritative source of truth**.

| File | Description |
|---|---|
| `agents_prompt.md` | Full orchestrator prompt & build sequence |
| `_CONTENT_BLUEPRINT.md` | Complete content architecture |
| `_FACT_CHECK.md` | All fact-checked data & sources |
| `_FUNDRAISER_BRIEF.md` | Fundraising strategy brief |
| `_INVESTOR_CRITIQUE.md` | Investor critique & objections |
| `_INVESTOR_EMPATHY_MAP.md` | Investor psychology map |
| `_STORYTELLER_BRIEF.md` | Narrative guidelines |
| `_TEAM_STRUCTURE_ANALYSIS.md` | Team composition analysis |
| `_TRACTION_CRITIQUE.md` | Traction analysis |
| `_TRANSFORMATION_LOGIC.md` | Design transformation decisions |

---

## research/

Consolidated research. Six thematic subdirectories.

| Directory | Contents |
|---|---|
| `research/business/` | Business model, competitive, GTM, key assumptions (from `alche-business-insights/`) |
| `research/design/` | Glassmorphism, typography, CSS, 2026 design trends (from `research-insights/`) |
| `research/strategy/` | Investor psychology, consulting language, anti-patterns (from `session-insights/`) |
| `research/technical/` | Build pipeline, Playwright PDF, font rendering (from `insights/`) |
| `research/subscription/` | Subscription model architecture, behavioral triggers (from `subscription-model-architecture/`) |
| `research/market/` | AI API comparison, retail/wholesale, CGM churn, competitor overviews (from `research/` + `check-later/`) |

**Key locked-data file:** `research/business/03-locked-data.md`

---

## design-system/

CSS tokens and base template.

| File | Description |
|---|---|
| `_design-system.css` | Complete CSS design system (tokens, glass, typography) |
| `_page-template.html` | Base HTML page template |

### design-system/fonts/

All locally cached font files: Cormorant Garamond, Outfit, Space Mono in TTF and WOFF2 formats, plus CSS configuration files.

---

## assets/

Visual assets and React component.

| Path | Description |
|---|---|
| `assets/screens/` | App screen mockups (S01–S15 PNGs + grid views) |
| `assets/alche-screens.jsx` | React component for screen mockups |

---

## science/

Potion formulas and scientific longevity research.

| File | Description |
|---|---|
| `00_master_index.md` | Index of all scientific content |
| `01_cognitive_longevity.md` | Cognitive science research |
| `02_systemic_inflammation.md` | Inflammation research |
| `03_cellular_repair.md` | Cellular biology |
| `_POTION_FORMULAS.md` | **Complete potion formulas** |
| `_AGENT_PERSONA_BRIEF.md` | Agent persona guidelines |
| `generate_potions.py` | Potion content generator |

---

## build/

Build and generation scripts.

### build/node/ — Node.js scripts

| File | Description |
|---|---|
| `build-combined.mjs` | **Combines section HTMLs → single file + PDF** |
| `render-pdf.mjs` | Renders HTML to PDF via Playwright |
| `capture-screens.mjs` | Screenshots app screens |
| `convert-to-pdf.js` | PDF conversion utility |
| `convert-complete.js` | Complete conversion script |

**Run the build:** `node build/node/build-combined.mjs` (from project root)
Output goes to `deliverables/`.

### build/python/ — Python scripts

| File | Description |
|---|---|
| `build_pptx_main.py` | PPTX builder entry point |
| `pptx_helpers.py` | PPTX utility functions |
| `pptx_section_00_01.py` through `pptx_section_12_13.py` | Per-section PPTX builders |
| `generate_data.py` | Generates model data |
| `fill_excel.py` | Fills Excel P&L from data |
| `fix_js.py` | Patches JS issues |
| `map_excel.py` | Maps Excel structure |
| `update_buildrows.py` | Updates P&L build rows |
| `update_js.py` | Updates JS in files |
| `update_opex.py` | Updates OpEx figures |
| `update_pnl.py` | Updates P&L figures |

---

## _archive/

Historical versions, not active.

| Directory | Contents |
|---|---|
| `_archive/version-a/` | Version A HTML + PDF |
| `_archive/version-b/` | Version B HTML + PDF |
| `_archive/version-c/` | Version C HTML + PDF |
| `_archive/version-d/` | Version D HTML + PDF |
| `_archive/version-e/` | Version E (most complete archived build) |
| `_archive/insight-v1/` | First insight section iteration |
| `_archive/insight-v2/` | Second insight section iteration |
| `_archive/numbered-sections/` | Old `01-alche-*` / `07-alche-*` HTML series |

---

## Authoritative Sources (do not override)

| What | File |
|---|---|
| All locked numbers & stats | `research/business/03-locked-data.md` |
| Brand identity & design rules | `CLAUDE.md` |
| Full content structure | `strategy/_CONTENT_BLUEPRINT.md` |
| Fact-checked claims | `strategy/_FACT_CHECK.md` |
| Latest P&L assumptions | `financials/research/_FINAL_PNL_ASSUMPTIONS.md` |
| Latest P&L model | `financials/models/alche-pnl-24mo-v3.xlsx` |
| Potion formulas | `science/_POTION_FORMULAS.md` |
| Build sequence | `strategy/agents_prompt.md` |
