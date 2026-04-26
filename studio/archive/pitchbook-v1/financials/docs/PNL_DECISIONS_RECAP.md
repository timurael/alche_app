# P&L DECISIONS RECAP — alche Pre-Seed Financial Model

**Created:** 2026-02-23 | **Updated:** 2026-02-24
**Purpose:** Complete session state for continuity. Resume next session from this file.
**Status:** All 7 persona audits COMPLETE. v3.3 Excel regenerated with Ablöse + Kaution added, Timu's 5 corrections applied (incl. LED therapy → free).

---

## EXECUTIVE SUMMARY

The alche 24-month P&L has been rebuilt from HTML → Excel (openpyxl) with two versions:

| Version | File | Type | Key Feature |
|---------|------|------|-------------|
| v1 | `alche-pnl-24mo.xlsx` | Hardcoded values | Python-computed, COGS corrected to EUR 23.50 |
| v2 | `alche-pnl-24mo-v2.xlsx` | **Formula-based** | Excel formulas referencing Assumptions sheet |
| v3 | `alche-pnl-24mo-v3.xlsx` | **Formula + all persona** | 7 sheets, 183 P&L rows, all 7 persona findings |
| v3.1 | `alche-pnl-24mo-v3.xlsx` | **v3 + Timu corrections** | Growth Marketer removed, subs gated M4+, UX/UI→CapEx |
| v3.2 | `alche-pnl-24mo-v3.xlsx` | **v3.1 + LED free** | LED therapy free with smoothie, no practitioner (B24=0, B25=0) |
| v3.3 | `alche-pnl-24mo-v3.xlsx` | **v3.2 + Ablöse/Kaution** | EUR 50K Ablöse (M3 CapEx), EUR 7.5K Kaution (Cash Flow only) |

### v1 Final Numbers (with COGS correction)
- Y1 Revenue: EUR 294K | Y1 P&L: EUR -144,654
- Y2 Revenue: EUR 2.06M | Y2 P&L: EUR +527,681
- Break-even: M10 | Cash M24: EUR 883K

### v2 Architecture
- Sheet 1: **Assumptions** — all params at known cell locations (B5-B81)
- Sheet 2: **Growth Curves** — subscriber model with churn formulas
- Sheet 3: **P&L** — Excel formulas referencing Assumptions + Growth Curves
- Sheet 4: **Decisions** — D1-D11 log + persona audit table (P1-P11)
- Each product section: units → price/unit → revenue (stacked with thick amber separators)
- 11 new lines from initial persona brainstorm added

---

## ALL DECISIONS (D1-D11) — FINAL STATE

### D1: Doctor Revenue Model → SaaS EUR 99/mo
- Commission model ILLEGAL under StGB 299a/299b
- SaaS follows Doctolib precedent (EUR 139-475/mo) and BGH Feb 2025 ruling
- Impact: Revenue line changed from EUR 150 to EUR 99/doctor/mo

### D2: Restaurant Revenue → Phase 2, EUR 0
- No health app charges restaurants commission successfully
- Feature-only for retention M1-12; zero revenue line

### D3: CGM Model → Software-Only / BYOD
- ZOE dropped CGM hardware Sept 2025; Supersapiens shut down Feb 2024
- Remove hardware lines → 80-90% margin on software interpretation
- **NOTE:** CGM must appear as greyed-out EUR 0 row (transparency for investors)

### D4: Physical Space → Smoothie Bar + LED + Potions + Events
- "Digital AND physical first" is core positioning
- Smoothie bar added: EUR 9.67 avg price, 65% margin, growth from M6

### D5: CapEx Section → Added
- Physical buildout, kitchen equipment, LED devices, legal, GmbH formation, Ablöse
- EUR 51,000 total CapEx in v2; EUR ~148K in v3.3 (includes EUR 50K Ablöse)

### D6: AI Strategy → Hybrid Claude + Gemini
- Internal: EUR 210/mo Claude Max for team
- User-facing: EUR 0.35/user/mo hybrid (Claude Sonnet 4.5 for blood panels + Gemini Flash for routine)
- Source: R9 research validated this approach

### D7: Waste Rates → Category-weighted
- Capsules 4%, powders 7% (not flat 5%)
- Blended rate: 5.5% applied in model

### D8: Terra API → Deferred
- Use free HealthKit / Health Connect. Save EUR 499/mo.

### D9: SaaS Stack → Itemized
- PostHog free (replaces Mixpanel), Crisp $95/mo M6+, Google Workspace
- Phase 1: EUR 50/mo → Phase 3: EUR 550/mo

### D10: Menu Analysis → EUR 0
- Founders do it themselves with AI tools

### D11: Retail Products → COGS Corrected
- **EUR 49 retail price: VALIDATED** by R10 (blended EUR 45-49)
- **EUR 11.50 COGS: NOT VALIDATED** → corrected to **EUR 23.50** (midpoint of EUR 22-25)
- Margin drops from 76% to 52%
- **NMN NOT approved as EU Novel Food** — regulatory risk for physical retail

---

## COMPLETED RESEARCH (R1-R10) — KEY FINDINGS

### R1: CGM Software-Only Model
- BYOD via Dexcom OAuth 2.0 API; also Apple Health/Google Health Connect
- EUR 30K regulatory/compliance cost

### R2: Cost Analysis — Smoothie Bar
- Base cost: EUR 9,022/mo; 65% gross margin per drink
- Break-even: ~45 drinks/day at EUR 9.67 avg

### R3: HWG Legal — Doctor Revenue
- Commissions illegal (StGB 299a/299b); SaaS EUR 99/mo is safe

### R4: Restaurant Feature
- Feature-only Phase 1; zero revenue; EUR 175-350/mo for 5 restaurants

### R5: Claude AI Costs
- EUR 0.40-0.70/user/mo; internal EUR 210/mo

### R6: UX Design Budget
- EUR 5,000/mo (M1-6), EUR 3,500/mo (M7-12), EUR 3,000/mo (M13-24)
- Total 24-month: EUR 99K

### R7: Product Waste Rates
- Capsules 4%, powders 7%; minor EUR 50-200/mo impact

### R8: Software License Stack
- PostHog free, Crisp $95/mo, Terra deferred
- Phase 1 EUR 50/mo, Phase 3 EUR 550/mo

### R9: AI API Comparison (Anthropic vs Google)
- **Hybrid model wins:** Claude Sonnet 4.5 for blood panels (54% diagnostic accuracy vs Gemini 34%), Gemini Flash 2.0 for daily insights (10x cheaper)
- Blended cost: EUR 0.35/user/mo
- GDPR path: Vertex AI Frankfurt (europe-west12) + Google Cloud
- File: `/pitchbook/research/R9-ai-api-comparison.md`

### R10: Retail Brands Wholesale
- EUR 49 price validated; COGS corrected 11.50 → 23.50
- Top brands: BRAINEFFECT, Ancient+Brave, Hifas da Terra, Avea, Your Super
- Wholesale platforms: Ankorstore (Net 60, 20% commission first order), Faire (Net 60)
- **NMN is NOT EU Novel Food approved** — must avoid NMN in retail potions
- File: `/pitchbook/research/R10-retail-brands-wholesale.md`

---

## PERSONA RESEARCH AGENTS (P1-P7) — ALL COMPLETE ✓

All 7 completed with web-searched, source-cited findings. All incorporated into v3 Excel.

| # | Persona | Status | Key EUR Impact | v3 Action Taken |
|---|---------|--------|----------------|-----------------|
| P1 | Angel Investor | DONE | EUR 113-236K missing over 24mo | All cost gaps closed in v3 |
| P2 | Steuerberater | DONE | ~EUR 3K/mo tax when profitable + EUR 220-460/mo pre-profit | Tax provision + IHK/GEMA/Rundfunk/Verpack added |
| P3 | Operations Manager | DONE | EUR 665-1,600/mo + EUR 3.1-7.5K one-off | Nebenkosten, utilities, buildout, waste, WiFi added |
| P4 | Food Safety Inspector | DONE | EUR 2.6-5.8K one-off + EUR 40-90/mo | HACCP, hygiene, food safety, NMN warning added |
| P5 | Growth CFO | DONE | EUR 218K P&L vs cash gap | Cash Flow sheet created; working capital modeled |
| P6 | Compliance Legal | DONE | EUR 29.5-53K one-off + EUR 1.1-1.8K/mo | DSB, DPIA, MDR, insurance split, CMP added |
| P7 | HR Manager | DONE | EUR 16-27K one-off + EUR 1.7-4.7K/mo | Recruitment, onboarding, multiplier 1.25x, KSK added |

### Completed Persona Key Findings

**P1 (Angel Investor):** EUR 113-236K total missing costs over 24 months. CAC EUR 40 is aggressive (benchmark EUR 70-120). LTV:CAC of 14.7x unrealistic — show only conservative 5.1x. Recommended raise EUR 600-650K or reduced scope. 4,600 potion units/mo at M24 "extremely aggressive" for single-location startup.

**P2 (Steuerberater):** GmbH pays Gewerbesteuer from first euro (no Freibetrag). Berlin: 14.35%. KSt+Soli: 15.825%. Combined ~30%. IHK EUR 120/yr (not EUR 300). GEMA EUR 240-500/yr. Rundfunkbeitrag EUR 6.12/mo. KSK 4.9% on creative freelancers. Employer multiplier should be ~1.25x. Verpackungsgesetz LUCID EUR 50-100/yr.

**P3 (Operations Manager):** Rent EUR 2,500 is Kaltmiete only — add EUR 250-400 Nebenkosten. Utilities EUR 400 too low → EUR 500. Buildout EUR 15,000 very low → EUR 25-35K. Missing: waste disposal EUR 120/mo, WiFi EUR 50/mo, maintenance reserve EUR 200/mo, fire safety EUR 300 one-off, signage EUR 500 one-off.

**P4 (Food Safety Inspector):** No Gaststättenerlaubnis needed for alcohol-free smoothie bar. NMN is NOT approved as EU Novel Food — DO NOT STOCK. HACCP plan required but no formal certification needed. One-off setup EUR 2,615-5,841, monthly EUR 40-90, annual EUR 950-3,820.

**P5 (Growth CFO):** CRITICAL — EUR 218K gap between P&L profit and actual cash at M24 (working capital for inventory not modeled). Actual subscription ARPU is EUR 38.44 not EUR 49. Only 4.7% of revenue from subscriptions at M24 — this is a product commerce business. Cash flow statement desperately needed. Working capital at M24: EUR 108-216K tied up in potion inventory.

**P6 (Compliance Legal):** DSB mandatory (health data, Art. 37 GDPR) EUR 400/mo. DPIA mandatory (Art. 35) EUR 5-10K one-off. MDR classification opinion EUR 5-10K one-off. Insurance EUR 200/mo critically insufficient → EUR 650/mo (add D&O, cyber, product liability, recall). Privacy Policy + ToS EUR 5K one-off. Year 1 gap: EUR 42,760-74,900.

**P7 (HR Manager):** Employer multiplier 1.22x approximately correct but slightly low — use 1.25x. Founder EUR 50K viable at pre-seed. CTO EUR 78K below 25th percentile (Glassdoor EUR 80-187K range). Recruitment EUR 5K unrealistic — need EUR 15-23K for headhunter. Missing: hardware EUR 6-12K for 4 hires, onboarding EUR 3.5K per hire, D&O EUR 500-2K/yr.

---

## APPROVED IMPROVEMENTS (8 items — ALL approved by user)

### 1. Scenario Tabs (Base / Bull / Bear)
- Base: current assumptions
- Bull: 1.3x revenue, 0.8x costs
- Bear: 0.5x revenue, 2x CAC, higher churn
- Show: what happens if break-even doesn't hit M12

### 2. Cash Flow Statement
- Separate from P&L
- Include: CapEx timing, working capital, VAT cash timing, deposits
- Key gap: working capital for potion inventory not modeled

### 3. Unit Economics Dashboard
- CAC (blended), LTV, LTV:CAC ratio, payback period
- Per-stream: potions, LED, smoothie, subscriptions
- Monthly tracking M1-M24

### 4. Sensitivity Analysis
- Variables: churn rate, CAC, potion COGS, subscription mix, smoothie volume
- Show impact on: break-even month, M24 cash, M24 EBITDA

### 5. Potion Volume Validation
- 4,600 units/mo at M24 with only 339 subscribers = 13.6 units/subscriber
- Implies 93% of sales are non-subscriber retail — needs justification
- Compare: early D2C supplement brands sell 2,000-8,000 units/mo at seed

### 6. VAT Handling
- Subscriptions (digital): 19% USt
- Smoothies to-go: potentially 7%
- Supplements (retail): 7% (food category) or 19% (depends on classification)
- LED services: 19%
- Model currently has no VAT treatment

### 7. Investor-Ready Formatting
- Currency format EUR with thousands separator
- Row grouping with subtotals
- Named ranges for key metrics
- Print-ready with headers/footers

### 8. Formula-Based Final Rebuild (v3)
- Incorporate ALL persona agent findings
- Add greyed-out CGM row (D3 transparency)
- Connect every line to a decision reference
- German-specific regulatory costs as researched line items

---

## CGM VISIBILITY FIX (User Request)

CGM was removed per D3 (Software-Only BYOD), but user asked "where is CGM?" — it should appear as a **visible greyed-out EUR 0 row** in the P&L so investors see the decision was deliberate, not an oversight. Format: light grey text, italic, EUR 0 across all months, with a note "Removed: Software-only model (D3)".

---

## REMAINING OPEN ISSUES (post-v3)

### 1. Potion COGS — RESOLVED in v3
- All formulas now use EUR 23.50 from Assumptions!B23

### 2. Working Capital Gap — RESOLVED in v3
- Cash Flow sheet models inventory build (2-month pipeline × COGS per unit)
- P&L vs Cash gap shown explicitly on Cash Flow sheet

### 3. Tax Provision — RESOLVED in v3
- ~30% tax applied when cumulative pre-tax P&L turns positive
- Activates only when both monthly and cumulative are positive

### 4. CTO Recruitment — RESOLVED in v3
- EUR 18,000 (M17) + EUR 3,500 onboarding (M18)

### 5. NMN Regulatory Risk — FLAGGED (not a P&L issue)
- NMN is NOT approved as EU Novel Food — DO NOT STOCK
- Noted on Decisions sheet. Product selection decision, not financial modeling.

### 6. RESOLVED: Cash Runway Validation
- v3.1 regenerated and validated. Cash stays positive in all scenarios.
- Minimum cash tighter around M12 (v3.3: EUR 57.5K additional M3 outflow from Ablöse + Kaution). Verify exact trough in Excel.
- With Growth Marketer removed, monthly costs are lower, improving cash position.

### 7. OPEN: Retail Product Volume at M24
- P1/P5 both flagged 4,600 units/mo as "extremely aggressive"
- Only 339 subscribers → 92.6% of retail product revenue from non-subscribers
- Needs channel breakdown justification (walk-in, e-commerce, B2B wholesale)

### 8. OPEN: Subscription vs Product Commerce Narrative
- P5: only ~5% of M24 revenue from subscriptions
- "This is a product commerce business, not subscription business"
- Affects valuation methodology (2-4x revenue vs 8-15x ARR)

---

## FILE MAP

### P&L Files (in /pitchbook/pnl/)
| File | Description |
|------|-------------|
| `build_excel_pnl_v3.py` | **CURRENT** — Full persona-audited Excel generator (~1600 lines, v3.3 corrections applied) |
| `alche-pnl-24mo-v3.xlsx` | **CURRENT** — 7 sheets, 183 P&L rows, v3.3 (Ablöse + Kaution), all persona findings + Timu corrections |
| `PNL_INVESTOR_BRIEF.md` | **NEW** — 2-page executive brief for Daria (investor walkthrough) |
| `PNL_EXPLANATION_GUIDE.md` | Updated with v3.2 corrections (incl. LED free) |
| `build_excel_pnl_v2.py` | v2 — Formula-based, 11 new lines (superseded by v3) |
| `alche-pnl-24mo-v2.xlsx` | v2 — Formula-based Excel output (superseded by v3) |
| `build_excel_pnl.py` | v1 — Hardcoded values (superseded) |
| `alche-pnl-24mo.xlsx` | v1 — Hardcoded Excel output (superseded) |
| `alche-pnl-excel-filler.html` | Original HTML P&L calculator (reference for formulas/arrays) |
| `SESSION_LOG.md` | Comprehensive session state (from earlier in session) |
| `PNL_DECISIONS_RECAP.md` | **THIS FILE** |

### Research Files (in /pitchbook/research/)
| File | Description |
|------|-------------|
| `R9-ai-api-comparison.md` | Hybrid Claude+Gemini recommendation |
| `R10-retail-brands-wholesale.md` | Potion brands, COGS validation |

### Reference Files
| File | Description |
|------|-------------|
| `/pitchbook/check-later/zoe-cgm-dropout-research.md` | ZOE CGM exit rebuttal |
| `/pitchbook/check-later/healthyanywhere-overview.md` | Curation competitive reference |
| `/pitchbook/source-docs/Budget P&L.xlsx` | Investor Excel template |
| `/pitchbook/source-docs/Alche_CGM_Full_Analysis.pdf` | CGM analysis source |
| `/pitchbook/source-docs/Alche_Cost_Analysis_pdf.pdf` | Cost analysis source |

---

## v3 EXCEL ARCHITECTURE

### Assumptions Sheet Cell Map (v3.3 — 125 parameters)
```
SUBSCRIPTION: B5-B11 (prices, churn, tier splits)
GROWTH: B14-B19 (new subs per phase; B14=0 for M1-M3, subs gated to M4+)
PRICING: B22-B33 (retail products, LED, smoothie, events, doctor)
COST RATES: B36-B41 (waste, 3PL, Stripe, AI, refund, bad debt)
PAYROLL: B44-B52 (founder, multiplier 1.25x, staff, BG 0.5%, KSK 4.9%, recruitment EUR 18K)
  ⚠ Growth Marketer REMOVED — Timu handles marketing. Saves EUR 73K.
  ⚠ CTO now B48 (was B49), all payroll refs shifted -1
FIXED COSTS: B56-B82 (app maintenance, SaaS, rent, Nebenkosten, insurance×5, utilities, DSB, compliance)
  ⚠ UX/UI design REMOVED — moved to CapEx as App Design EUR 15K
  ⚠ All fixed cost refs shifted -1 (Claude Max now B57, etc.)
MARKETING: B86-B90 (content, influencer, travel)
BUFFERS: B93-B94 (contingency 10%, bank fees)
TAX: B97-B99 (GewSt 14.35%, KSt+Soli 15.825%, combined ~30%)
CAPEX: B102-B118 (16 items incl. App Design B108, Ablöse B117, DPIA, MDR, fire safety, HACCP)
  ⚠ App Design & Development B108 = EUR 15K
  ⚠ Ablöse — Key Money B117 = EUR 50K (NEW v3.3)
  ⚠ Kaution — Security Deposit B118 = EUR 7.5K (NOT P&L — cash flow only, refundable)
  ⚠ Depreciation period now B119 (was B117)
SCENARIOS: B121-B125 (bull/bear multipliers — shifted +2 for Ablöse/Kaution)
```

### Growth Curves Sheet
- Rows 4-11: Unit forecasts (potions, LED, smoothies, events, doctors, marketing, KSK-eligible spend)
- Row 12: New doctors (delta)
- Rows 15-20: Subscriber model with churn

### P&L Sheet (183 rows, v3.3)
- Subscriber metrics (rows 5-12) — M1-M3 now zero (subs gated to M4+)
- Income: Retail Products, LED, Smoothie, Events, Doctor SaaS, CGM (greyed EUR 0), Restaurant (EUR 0), Subscriptions
- COGS: 11 lines including bad debt provision
- Gross Profit + margin %
- OpEx: Payroll (7 lines — Growth Marketer removed), R&D (1 line — UX/UI removed), S&M, G&A (23 lines), Management, Travel, Recruitment, Onboarding
- Contingency 10%
- Profitability Bridge (Income → COGS → Gross Profit → Gross Margin % → OpEx → EBITDA → EBITDA Margin %)
- CapEx: 16 items + depreciation (App Design EUR 15K, Ablöse EUR 50K added)
- EBIT (EBITDA − D&A) + EBIT Margin %
- Tax provision (~30% when profitable)
- Net P&L (after tax)
- Cumulative cash
- Key metrics: burn, ARPU, sub ARPU, MRR, sub % of revenue, gross margin, runway months
- Break-even indicators: EBITDA positive flag, Net P&L positive flag, Cash > EUR 500K flag, break-even months

---

## COMPLETED: v3 BUILD

### What was built:
1. All 7 persona findings incorporated into Assumptions sheet
2. CGM greyed-out EUR 0 row added (D3 transparency)
3. ~30 new/updated line items from persona research
4. Cash Flow Statement sheet (P5 working capital gap)
5. Unit Economics Dashboard (LTV:CAC, contribution margins, revenue mix)
6. Scenario Summary sheet (Base/Bull/Bear multipliers)
7. Tax provision ~30% when cumulative P&L positive (P2)
8. Decisions sheet expanded with persona audit results table

### v3 Excel Sheets (7 total):
1. P&L (183 rows — income, COGS, OpEx, CapEx incl. Ablöse, Profitability Bridge, EBIT, break-even indicators, tax, cumulative cash, key metrics)
2. Assumptions (125 cells — all changeable, P&L auto-recalculates)
3. Growth Curves (subscriber model + unit forecasts)
4. Cash Flow (operating, investing, financing + P&L vs cash gap analysis)
5. Unit Economics (ARPU, LTV, CAC, LTV:CAC, contribution margins, revenue mix)
6. Scenarios (Base/Bull/Bear summary with key metrics)
7. Decisions (D1-D11 + P1-P7 persona audit results)

### Key number changes in v3 vs v2:
- Employer multiplier: 1.22x → 1.25x
- Insurance: EUR 200/mo → EUR 650/mo (5 categories)
- Buildout: EUR 15K → EUR 25K
- Recruitment: EUR 5K → EUR 18K + EUR 3.5K onboarding
- CapEx total: EUR 51K → ~EUR 148K (v3.3: includes EUR 50K Ablöse)
- NEW monthly costs: DSB EUR 400, Nebenkosten EUR 325, +EUR 100 utilities, waste EUR 120, WiFi EUR 50, maintenance reserve EUR 200, GEMA EUR 31, food safety EUR 80, CMP EUR 25, bank EUR 35
- Tax provision: ~30% when profitable

### v3.1 corrections (Timu review, 2026-02-24):
- **REMOVED:** Growth Marketer hire (EUR 4,500/mo from M12). Timu IS the growth marketer. Saves EUR 73,125 (EUR 5,625/mo × 13 months M12-M24).
- **CHANGED:** Subscribers gated to M4+ (B14 = 0). App doesn't launch until M4 with the space.
- **MOVED:** UX/UI design retainer (EUR 800/mo) from monthly R&D OpEx → one-time EUR 15,000 CapEx "App Design & Development" in M1. Saves EUR 19,200 OpEx, adds EUR 15K CapEx.
- **UPDATED:** B19 note from "Growth marketer effect" → "Scaling phase"
- **NET IMPACT:** CapEx total ~EUR 98K (before v3.3 Ablöse; now EUR 148K). Lower monthly OpEx. "Potions" → "Retail Products" naming throughout.
- **Cell map renumbered:** 2 assumption rows removed (B48 Growth Marketer, B57 UX/UI), 1 added (B108 App Design). All downstream references updated.

### v3.2 corrections (Timu review, 2026-02-24):
- **CHANGED:** LED therapy → free with smoothie purchase. B24 (price) = EUR 0 (was EUR 45). No longer a revenue stream.
- **CHANGED:** LED practitioner removed. B25 (cost) = EUR 0 (was EUR 25). Self-service — customers put panels on their faces and hang out.
- **RATIONALE:** LED is a dwell-time and foot traffic play, not a revenue line. Free LED with smoothie purchase increases average visit duration and drives retail product discovery.
- **IMPACT:** M24 monthly revenue drops from ~EUR 277K to ~EUR 264K (LED was ~EUR 13.5K/mo at M24). LED COGS eliminated (was ~EUR 7.5K/mo at M24). Net gross profit impact: ~-EUR 6K/mo. 24-mo cumulative LED revenue forgone: ~EUR 151K. 24-mo LED COGS saved: ~EUR 84K. Revenue streams: 6 → 5 + 1 free amenity.
- **P&L label:** "LED Practitioner (EUR 25/session)" → "LED COGS (free — no practitioner)"

### v3.3 corrections (Ablöse + Kaution, 2026-02-24):
- **ADDED:** Ablöse (key money / hava parası) EUR 50,000 as M3 CapEx item (B117). Capitalized intangible asset, amortized over 36 months in the depreciation pool.
- **ADDED:** Kaution (security deposit) EUR 7,500 as M3 cash outflow on Cash Flow sheet only (B118). NOT a P&L expense — it's a refundable balance sheet asset.
- **CELL MAP SHIFTS:** Depreciation period B117 → B119. Scenario Multipliers B119-B123 → B121-B125. All a_ref() shifts applied.
- **IMPACT:** Total CapEx EUR 98K → EUR 148K. Monthly depreciation increases from ~EUR 2,732 to ~EUR 4,121 (M3+). Combined EUR 57.5K additional cash outflow in M3 (EUR 50K Ablöse + EUR 7.5K Kaution). Tightens runway but cash stays positive in all scenarios.
- **TAX TREATMENT:** Ablöse = acquired intangible asset per §5 Abs. 2 EStG, must be capitalized and depreciated (§7 Abs. 1 EStG). Kaution = sonstiger Vermögensgegenstand (other asset), refundable at lease end, no P&L impact.

### NEXT SESSION: What remains
1. Open v3 in Excel and validate formulas / check break-even month
2. Check if cash goes negative (P1 flagged EUR 500K may be insufficient)
3. Consider sensitivity analysis sheet (improvement #4 — partially covered by Scenarios)
4. Consider VAT split by category (improvement #6 — noted as "net of VAT" in v3 header)
5. Consider named ranges for investor navigation (improvement #7)
6. Review potion volume assumptions (P1/P5 flagged as aggressive)

---

## LOCKED DATA (unchanged — DO NOT MODIFY)

```
Global wellness market:              $6.3 trillion (GWI 2024)
German wellness market growth:       3.3% CAGR
Germany prevention spending:         4.8% of health expenditure
Berlin purchasing power index:       92.4 (GfK)
Berlin tech worker median salary:    EUR 75,000 gross
Germans willing to pay OOP for apps: 27% (SpringerMedizin)
EU consumers share health data:      8% (BEUC)
Competitive window:                  12-18 months
Funding target:                      EUR 500K pre-seed
Valuation cap:                       EUR 2.5M
Pricing tiers:                       EUR 19 / 49 / 99 per month
Break-even:                          Month 12, ~145 subs + EUR 10K/mo space
Oura valuation:                      $11B, 5.5M rings sold
Hims revenue:                        $2.3B, 2.5M subscribers
ZOE:                                 ~$100M revenue, 300K microbiome profiles
AG1:                                 $600M revenue, profitable
Graveyard total:                     $1.4B+ in failed health/nutrition startups
Retention: 77% of health app users churn by Day 3
Retention: 44% cancel within first 90 days
```

---

*This recap file supersedes SESSION_LOG.md for session continuity. SESSION_LOG.md contains earlier-session state that is partially outdated (e.g., R9/R10 listed as pending — they are now complete).*
