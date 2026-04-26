# Alche Pitch Book — Session Handover
**Last updated:** 2026-03-03 | **Prepared for:** next Claude session

---

## Repo Move

This project is being moved from:
- **Old path:** `/Users/timoel/Downloads/pitchbook`
- **New path:** `/Users/timoel/Desktop/alche/pitchbook`

Claude Code history has been pre-copied to `~/.claude/projects/-Users-timoel-Desktop-alche-pitchbook/` so continuity is preserved after the move.

---

## What This Project Is

A pitch book (NOT a pitch deck) for **alche** — a longevity lifestyle platform based in Berlin raising **EUR 500K pre-seed** at **EUR 2.5M valuation cap**.

Founders: **Timu** (CEO, brand/marketing) + **Daria** (COO, media/PR). CTO gap flagged — hiring unlocked by funding.

Final output: 14 HTML section files → combined into single high-fidelity PDF.

---

## Session History (Chronological)

### Feb 24 — Pitch Book Foundation
- Built the 14-section pitch book (section-00 through section-13)
- Established design system: Cormorant Garamond + Outfit + Space Mono, glassmorphic cream/amber palette
- Set up `build/node/build-combined.mjs` → Playwright PDF pipeline
- Created early deliverables (versions A–E in `_archive/`)

### Feb 25 — P&L Research + Model Expansion
- Ran 3-agent parallel research sweep covering revenue gaps, app build options, and physical space costs
- Research saved to `financials/research/` (`_RESEARCH_REVENUE_EXPANSION.md`, `_RESEARCH_APP_BUILD.md`, `_RESEARCH_SPACE_OPEX_GAPS.md`)
- Opus synthesis produced `financials/decisions/EXPANDED_DECISION_REGISTER.md`
- User flagged EUR 490 annual pricing concern → clarified it was math from locked EUR 49/mo tier (no locked data was changed)
- Investor Q&A session: handled live investor questions on tax on investment, INVEST program eligibility, and why EUR 500K runway = 12 months

### Feb 26 (morning) — P&L v4 Build
- Built `alche-pnl-24mo-v4.xlsx` from scratch (8 sheets: Roadmap, P&L, Assumptions, Growth Curves, Cash Flow, Unit Economics, Scenarios, Decisions)
- **Key changes from v3:**
  - Added 8 revenue streams: Monthly subs (3 tiers), Annual subs, Retail products, CGM, Space revenue, Gift Cards, B2B Corporate Wellness
  - Removed space subletting revenue (user decision)
  - Removed R&D app contractor row (EUR 12K/mo EX-06) — user decision
  - MVP CapEx: EUR 500 (was EUR 20K)
  - Founder salaries: EUR 2,000/mo (was higher)
  - Fixed all cross-sheet formula connectivity (CGM + B2B now formula-driven, not hardcoded)
  - EUR 500K funding amount unified to `Assumptions!B142` (now B141 after row removal)
  - Annual subscription mix references `Assumptions!B141`
  - Added Roadmap sheet as first tab — formula-linked financial snapshot

- Also built **`alche-pnl-24mo-v4-300k.xlsx`** — identical model but EUR 300K raise variant

### Feb 26 (afternoon) — P&L Guide + Mobile PDF
- Created `financials/docs/PNL_SECTION_GUIDE.md` — investor-facing guide to every P&L section
- Built `financials/docs/PNL_SECTION_GUIDE_MOBILE.pdf` — white background, bold, mobile-optimized
- Covers all 8 revenue streams, all COGS lines, all 7 OpEx groups, all 4 supporting sheets
- Updated `financials/research/_FINAL_PNL_ASSUMPTIONS.md` with corrected figures (retail margin, 3PL timing, LED costs)

### Feb 26 (evening) — Funding Map + Operational Roadmap
- Ran 3-agent parallel research: Berlin/German funding, EU grants, and Accelerators/VC/Angels
- Produced **`ALCHE_FUNDING_MAP.md`** (project root) — 50+ funding opportunities across 9 categories
- Built **`strategy/alche-24mo-operational-roadmap.md`** — full 24-month operational roadmap with OKRs
- Built **`strategy/alche-24mo-roadmap.xlsx`** — Excel Gantt chart (6 color-coded workstreams, Pantone colors, multi-sheet)

---

## Current File Status

### Primary Deliverables
| File | Status | Notes |
|---|---|---|
| `deliverables/alche-pitchbook-final.pdf` | Last good build (Feb 24) | May need rebuild after any section edits |
| `deliverables/alche-pitchbook-final.html` | Last good build | Single-file version |
| `sections/current/` | 14 sections, canonical | See INDEX.md for full list |

### Financial Model
| File | Status | Notes |
|---|---|---|
| `financials/models/alche-pnl-24mo-v4.xlsx` | **LATEST — use this** | 8 sheets, fully connected formulas |
| `financials/models/alche-pnl-24mo-v4-300k.xlsx` | EUR 300K variant | Same as v4 but lower raise |
| `financials/docs/PNL_SECTION_GUIDE.md` | Final | Investor P&L explainer |
| `financials/docs/PNL_SECTION_GUIDE_MOBILE.pdf` | Final | Mobile PDF version |

### Strategy & Research
| File | Status | Notes |
|---|---|---|
| `ALCHE_FUNDING_MAP.md` | Complete | 50+ funding opportunities, Berlin/DE/EU |
| `strategy/alche-24mo-operational-roadmap.md` | Complete | 24-month OKR roadmap |
| `strategy/alche-24mo-roadmap.xlsx` | Complete | Excel Gantt chart |
| `strategy/agents_prompt.md` | Authoritative | Full build sequence — read before agent work |
| `research/business/03-locked-data.md` | Authoritative | All locked numbers |

---

## Open Items / What Was Not Done

1. **Pitch book section rebuild** — sections haven't been updated to reflect the P&L v4 numbers (especially section-07-business-model and section-12-ask). Consider a section refresh pass.
2. **PDF rebuild** — `deliverables/alche-pitchbook-final.pdf` predates the v4 financial changes. Run `node build/node/build-combined.mjs` to get a fresh build.
3. **Section-09-traction** — flagged as weak (little real traction). Was critiqued in `strategy/_TRACTION_CRITIQUE.md`. Consider strengthening.
4. **Deloitte version** — `sections/deloitte/` parallel version exists but may not be current with v4 financials.
5. **Roadmap section** — `strategy/alche-24mo-roadmap.xlsx` was built but hasn't been rendered as an HTML pitch book section.

---

## Critical Rules — Do Not Override

### Locked Numbers (never change these)
```
Global wellness market:        $6.3T (GWI 2024)
German wellness market CAGR:   3.3% (NOT 3.4%)
Germany prevention spending:   4.8% of health expenditure
Competitive window:            12–18 months (NOT 18–24)
Funding target:                EUR 500K pre-seed
Valuation cap:                 EUR 2.5M
Pricing tiers:                 EUR 19 / 49 / 99 per month
Break-even:                    Month 12, ~145 subscribers + EUR 10K/mo space
Oura valuation:                $11B, 5.5M rings sold
```
Full list: `research/business/03-locked-data.md`

### Brand
- Name in body text: **alche** (lowercase). At sentence start: **Alche**
- Tagline: "The Art of Curated Longevity"

### Design (never change fonts or palette)
- Headlines: Cormorant Garamond | Body: Outfit | Data: Space Mono
- Primary text color: `var(--deep)` = `#2C2418` — NEVER use pure black
- Glass cards on cream radial gradient background

---

## Build Commands

```bash
# Rebuild PDF from sections
node build/node/build-combined.mjs

# Install Playwright (first time)
npx playwright install chromium
```

---

## Agent Model Assignment (from CLAUDE.md)
- Planning, architecture, orchestration → **model="opus"**
- Research, writing, data gathering → **model="sonnet"**
