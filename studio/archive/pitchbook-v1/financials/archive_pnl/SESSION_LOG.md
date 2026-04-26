# SESSION LOG -- alche P&L Project

**Last updated:** 2026-02-23
**Session purpose:** P&L model refinement for EUR 500K pre-seed pitch book
**Status:** Active -- multiple research tasks completed, P&L changes queued but NOT yet applied

---

## PROJECT STATE

- **Project:** alche P&L financial model for EUR 500K pre-seed fundraise
- **Company:** alche (lowercase) -- "The Art of Curated Longevity"
- **Category:** Longevity Lifestyle Platform, Berlin-based
- **Stage:** Pre-seed, pre-revenue
- **Valuation cap:** EUR 2.5M
- **Funding target:** EUR 500K
- **Key concept:** "Digital AND physical first" -- physical space in Berlin featuring red light therapy, smoothie bar, curated potions retail, and community events
- **Key people:**
  - **Timu** -- Co-founder & CEO. Marketing, brand strategy, design, community.
  - **Daria** -- Co-founder & COO. Media/PR background. Established figure in longevity/wellness. Market analysis, operations, competitive intelligence.
  - **Doctor (via Daria)** -- CGM expert physician. Medical advisor only. NOT investor, NOT co-founder.
  - **CTO** -- Gap. "Funding unlocks this hire." Planned M18+.
  - **Shai** -- Serial entrepreneur. Potential angel investor. Interested but NOT committed. Do NOT present as confirmed.
- **Investor template:** Budget P&L.xlsx in /pitchbook/source-docs/ -- 24-month model, rows must match investor's Excel format
- **Pricing tiers:** EUR 19 (Core) / EUR 49 (Pro) / EUR 99 (Premium) per month
- **Break-even target:** Month 12, ~145 paying subscribers + EUR 10K/month from physical space

---

## COMPLETED RESEARCH (R1-R10)

### R1: CGM -- Software-Only Model
- **Recommendation:** Software-Only / BYOD (Bring Your Own Device). Do NOT bundle or resell sensors.
- **Margin:** 80-90% gross margin on software interpretation layer (zero hardware COGS)
- **Sensor strategy:** Dexcom-first via their FDA-cleared OAuth 2.0 API. Also support Apple Health/Google Health Connect as backup data pipes.
- **Regulatory cost:** EUR 30K estimated for regulatory/compliance work
- **Key precedent:** ZOE dropped CGM hardware in Sept 2025 (ZOE 2.0) because unit economics were brutal -- sensor bundling destroyed margins and created supplier dependency. Supersapiens shut down Feb 2024 for same reasons. January AI (TIME Best Invention 2025) proved software-only glucose interpretation works.
- **alche differentiator:** Ongoing coaching layer vs. ZOE's one-time 14-day calibration. Sensor-agnostic. Pure software subscription.

### R2: Cost Analysis -- Smoothie Bar & Physical Space
- **Smoothie bar base cost:** EUR 9,022/mo (rent, staff, ingredients, equipment amortization)
- **Smoothie bar gross margin:** 65% per drink
- **Average smoothie price:** EUR 9.67 (Berlin premium positioning)
- **Break-even volume:** ~45 drinks/day
- **Retail product (Potions) assumptions:** EUR 49 price / EUR 11.50 COGS = ~77% gross margin -- BUT these unit economics are UNVALIDATED. No supplier quotes obtained yet.
- **Physical space concept:** Dual-use -- red light therapy room + smoothie bar + retail potions shelf + community event space

### R3: HWG Legal -- Doctor Revenue Model
- **Critical finding:** Doctor commissions are ILLEGAL in Germany under StGB 299a/299b (anti-corruption in healthcare, enacted 2016)
- **Safe model:** SaaS fee to doctors (monthly subscription for premium listing/tools). BGH ruling Feb 2025 confirmed SaaS model is legal.
- **Precedent:** Doctolib charges doctors EUR 139-475/mo for SaaS platform access. No commission on patient bookings.
- **Decision impact:** Doctor revenue must be structured as EUR 99/mo SaaS, NOT per-booking commission.

### R4: Restaurant Feature
- **Recommendation:** Feature-only in Phase 1. No restaurant commissions M1-12. Zero revenue line.
- **Cost:** EUR 175-350/mo for 5 restaurants (founders do menu analysis with AI tools, spot-check restaurants)
- **Key insight:** No health app has successfully charged restaurants commission. Restaurant-tech startup graveyard is massive. Position as retention/engagement feature, not revenue line.
- **Phase 2 trigger:** Only explore monetization after proving core subscription metrics.

### R5: Claude AI Costs
- **User-facing AI cost:** EUR 0.40/user/mo actual, EUR 0.70/mo conservative estimate
- **Cost split:** 70% COGS (user-facing inference) / 30% OpEx (internal team tools)
- **Internal team budget:** EUR 210/mo for Claude Max (team subscription)
- **Scaling formula in model:** `d.mgAnthropic = m < 3 ? 150 : 150 + Math.round(totalSubs * 0.05)`
- **Recommendation:** Use cheapest option between Anthropic and Google for user-facing inference (pending R9 comparison)

### R6: UX Design Budget
- **Total 24-month budget:** EUR 99K
- **Phase 1 (M1-6):** EUR 5,000/mo (brand system, core UX, design system)
- **Phase 2 (M7-12):** EUR 3,500/mo (iteration, testing)
- **Phase 3 (M13-24):** EUR 3,000/mo (maintenance, new features)
- **Source:** Mid-level Berlin freelancer via Malt.de
- **Current model value:** EUR 800/mo -- NEEDS UPDATE to EUR 3,000-5,000/mo
- **Classification:** 100% OpEx / R&D line item

### R7: Product Waste Rates
- **Recommendation:** Category-weighted waste rates, not flat 5%
- **Capsules/tablets:** 4% (shelf-stable, predictable)
- **Powders/adaptogens:** 7% (hygroscopic, shorter shelf life)
- **Current model value:** 5% flat -- NEEDS UPDATE to category-weighted
- **Impact:** Minor -- difference is ~EUR 50-200/mo at projected volumes

### R8: Software License Stack
- **PostHog:** Free tier (replaces Mixpanel -- saves EUR 100-200/mo)
- **Crisp:** $95/mo (customer support chat)
- **Terra API:** $399/mo -- DEFER. Use free HealthKit/Health Connect instead. Save EUR 499/mo.
- **Phase 1 total:** EUR 50/mo (bare minimum -- Google Workspace, Notion, PostHog free)
- **Phase 3 total:** EUR 550/mo (full stack with Crisp, analytics upgrades)
- **Claude Code:** Confirmed as development tool
- **Current model:** SaaS stack shows as `350 -> 850 -> 1800` phased -- NEEDS itemized update

### R9: AI API Comparison (Anthropic vs Google)
- **Status:** PENDING -- research agent was running at session end
- **Purpose:** Compare Anthropic Claude API vs Google Gemini API for user-facing inference cost
- **Expected output:** Cost per 1K tokens, latency, quality comparison for longevity coaching use case
- **Impact:** Determines COGS line for user-facing AI (EUR 0.40-0.70/subscriber/mo)

### R10: Retail Brands Wholesale
- **Status:** PENDING -- research agent was running at session end
- **Purpose:** Identify specific longevity/wellness brands for retail (Potions line), validate wholesale pricing
- **Expected output:** Brand names, MOQ, wholesale cost, recommended retail price, margin validation
- **Impact:** Validates or invalidates the EUR 49 price / EUR 11.50 COGS assumption currently in model

---

## ALL DECISIONS (D1-D11)

### D1: Doctor Revenue Model
- **Status:** DECIDED
- **Chosen:** C. SaaS EUR 99/mo x 20 doctors
- **Date:** 2026-02-23
- **Rationale:** Commission model is illegal under StGB 299a/299b; SaaS model follows Doctolib precedent and BGH Feb 2025 ruling.
- **P&L lines affected:** Revenue (Doctor SaaS), COGS (Doctor Verification)
- **Change needed:** Update `a-doc-rev` from EUR 150 to EUR 99

### D2: Restaurant Revenue
- **Status:** DECIDED
- **Chosen:** B. Phase 2 trigger. EUR 0 revenue M1-12.
- **Date:** 2026-02-23
- **Rationale:** No health app charges restaurants commission successfully; restaurant-tech graveyard is massive. Feature-only for retention.
- **P&L lines affected:** Revenue (Restaurant Commission -- remove), OpEx (Menu Analysis -- remove)
- **Change needed:** Remove Restaurant Commission revenue line entirely for M1-12; remove or zero-out Menu Dietitian line

### D3: CGM Model
- **Status:** DECIDED
- **Chosen:** A. Software-Only / BYOD. Remove hardware lines.
- **Date:** 2026-02-23
- **Rationale:** ZOE, Supersapiens, Levels all proved hardware bundling destroys margins. Software-only = 80-90% margin, zero supplier dependency.
- **P&L lines affected:** Revenue (remove CGM Hardware), COGS (remove CGM Hardware Cost, remove CGM RMA Reserve)
- **Change needed:** Remove CGM revenue line, remove `cogsCGM`, remove `cogsRMA`, update `cogs3PL` to exclude CGM units, update `cogsWaste` to exclude CGM revenue

### D4: Physical Space Concept
- **Status:** DECIDED
- **Chosen:** A. Add smoothie bar + integrate with red light + potions retail. "Digital and physical first."
- **Date:** 2026-02-23
- **Rationale:** Differentiation from pure-digital competitors. Physical space creates community anchor, retail revenue, and brand tangibility for investors.
- **P&L lines affected:** Revenue (add Smoothie Bar line M6+), COGS (add Smoothie Bar COGS ~35%), CapEx (kitchen buildout)
- **Change needed:** Add smoothie bar revenue line (~EUR 5-9K/mo at 45 drinks/day), add smoothie COGS, add CapEx section

### D5: CapEx Section
- **Status:** DECIDED
- **Chosen:** Yes, add CapEx section to P&L.
- **Date:** 2026-02-23
- **Rationale:** Physical space buildout, kitchen equipment, and legal costs are capital expenditures that don't belong in OpEx.
- **P&L lines affected:** New section: CapEx
- **Change needed:** Create new CapEx section in model with line items (see P&L Changes section below)

### D6: AI Strategy
- **Status:** DECIDED
- **Chosen:** Both internal (EUR 210/mo Claude Max) + user-facing (cheapest of Anthropic/Google, pending R9)
- **Date:** 2026-02-23
- **Rationale:** Internal AI tools are proven 10x productivity multiplier; user-facing AI is core product differentiator for personalized longevity coaching.
- **P&L lines affected:** OpEx (Claude internal -- keep EUR 210/mo), COGS or OpEx (user-facing AI API -- pending R9)
- **Change needed:** Finalize user-facing AI cost after R9 completes; update Anthropic inference line

### D7: Waste Rates
- **Status:** DECIDED
- **Chosen:** A. Category-weighted: capsules 4%, powders 7%
- **Date:** 2026-02-23
- **Rationale:** More defensible than flat 5%; reflects actual product characteristics (capsules shelf-stable vs. powders hygroscopic).
- **P&L lines affected:** COGS (Waste / Defect Reserve)
- **Change needed:** Update waste calculation from flat 5% to category-weighted formula

### D8: Terra API
- **Status:** DECIDED
- **Chosen:** Defer. Use free HealthKit / Health Connect. Save EUR 499/mo.
- **Date:** 2026-02-23
- **Rationale:** Free alternatives (Apple HealthKit, Google Health Connect) provide sufficient wearable data integration for Phase 1. Terra adds value but not EUR 499/mo of value at pre-seed.
- **P&L lines affected:** OpEx (remove Terra CGM API EUR 499/mo)
- **Change needed:** Set `mgTerra` to 0 for all months; remove Terra from assumptions panel

### D9: SaaS Stack
- **Status:** DECIDED
- **Chosen:** Itemize per R8 findings. Claude Code confirmed as dev tool. PostHog replaces Mixpanel.
- **Date:** 2026-02-23
- **Rationale:** Transparency in investor-facing model; shows cost discipline and awareness of free-tier options.
- **P&L lines affected:** OpEx (Base SaaS Stack)
- **Change needed:** Itemize SaaS stack: PostHog free, Crisp $95/mo M6+, Google Workspace, Notion, Figma. Update phased values.

### D10: Menu Analysis
- **Status:** DECIDED
- **Chosen:** EUR 0. Founders do it themselves with AI tools. Spot-check restaurants manually.
- **Date:** 2026-02-23
- **Rationale:** Eliminates EUR 500/mo OpEx line. AI tools (Claude, GPT) can analyze menus. Founders validate in person.
- **P&L lines affected:** OpEx (Menu Database/Dietitians -- remove)
- **Change needed:** Set `smMenuAnalysis` to 0; remove menu analysis assumption input

### D11: Retail Products (Potions)
- **Status:** OPEN -- research pending R10
- **Chosen:** Pending
- **Date:** 2026-02-23
- **Rationale:** Need specific brand names and validated wholesale margins before committing to EUR 49/EUR 11.50 unit economics.
- **P&L lines affected:** Revenue (Potions), COGS (Potions COGS)
- **Change needed:** TBD after R10 research completes

---

## P&L CHANGES TO APPLY

These changes are QUEUED -- they have NOT been applied to alche-pnl-excel-filler.html yet.

### REVENUE LINES

| Action | Line | Current State | Target State | Decision |
|--------|------|--------------|-------------|----------|
| **REMOVE** | CGM Hardware (Line 3) | EUR 130/unit, scaled growth array | EUR 0, remove line entirely | D3 |
| **REMOVE** | Restaurant Commission (Line 5) | EUR 1.50/cover, TBD values | EUR 0, remove line entirely (M1-12) | D2 |
| **CHANGE** | Doctor SaaS (Line 6) | EUR 150/mo per doctor | EUR 99/mo per doctor | D1 |
| **ADD** | Smoothie Bar | Does not exist | ~EUR 5-9K/mo from M6+, 65% margin, ~45 drinks/day at EUR 9.67 avg | D4 |
| **KEEP** | Potions (Line 1) | EUR 49 price, EUR 11.50 COGS | Keep but flag as UNVALIDATED pending R10 | D11 |
| **KEEP** | LED Therapy (Line 2) | EUR 45/session, EUR 25 practitioner cost | No change | -- |
| **KEEP** | Events & Workshops (Line 4) | EUR 35/ticket, EUR 250 event cost | No change | -- |
| **KEEP** | Subscriptions (Core/Pro/Premium) | EUR 19/49/99, 52%/38%/10% split | No change | -- |

### COGS LINES

| Action | Line | Current State | Target State | Decision |
|--------|------|--------------|-------------|----------|
| **REMOVE** | CGM Hardware Cost | `cgmUnits x EUR 70` | Remove entirely | D3 |
| **REMOVE** | CGM RMA Reserve | `cgmRevenue x 4%` | Remove entirely | D3 |
| **CHANGE** | Waste / Defect Reserve | 5% flat on `potRevenue + cgmRevenue` | Category-weighted: capsules 4%, powders 7% on potRevenue only | D7 |
| **CHANGE** | 3PL Fulfillment | `(potUnits + cgmUnits) x EUR 2.50` | `potUnits x EUR 2.50` (remove CGM units) | D3 |
| **ADD** | Smoothie Bar COGS | Does not exist | ~35% of smoothie revenue | D4 |
| **KEEP** | Potions COGS | `potUnits x EUR 11.50` | No change (pending R10 validation) | D11 |
| **KEEP** | LED Practitioner | `ledUnits x EUR 25` | No change | -- |
| **KEEP** | Events & Ticketing | `eventCount x EUR 250 + eventRevenue x 7%` | No change | -- |
| **KEEP** | Doctor Verification | `newDoctors x EUR 25` | No change | -- |
| **KEEP** | Stripe Processing | `totalIncome x 2.9%` | No change | -- |

### OPEX LINES

| Action | Line | Current State | Target State | Decision |
|--------|------|--------------|-------------|----------|
| **REMOVE** | Terra CGM API | EUR 499/mo from M6+ | EUR 0, remove line | D8 |
| **REMOVE** | Menu Database (Dietitians) | EUR 500/mo | EUR 0, remove line | D10 |
| **CHANGE** | UX/UI Iteration | EUR 800/mo flat | EUR 5,000/mo (M1-6), EUR 3,500/mo (M7-12), EUR 3,000/mo (M13-24) | R6 |
| **CHANGE** | Base SaaS Stack | `350 -> 850 -> 1800` phased | Itemize: PostHog free, Crisp $95/mo M6+, etc. Phase 1 EUR 50, Phase 3 EUR 550 | D9 |
| **ADD** | User-facing AI API | Currently in `mgAnthropic` as rough estimate | Refine to EUR 0.40-0.70/subscriber/mo as separate COGS line (pending R9) | D6 |
| **KEEP** | Payroll (Timu, Daria) | EUR 4,166 gross x 1.22 = EUR 5,082 each | No change | -- |
| **KEEP** | Partner Mgr (M6+) | EUR 2,000 gross x 1.22 = EUR 2,440 | No change | -- |
| **KEEP** | Growth Marketer (M12+) | EUR 4,500 gross x 1.22 = EUR 5,490 | No change | -- |
| **KEEP** | Tech/Ops Lead (M18+) | EUR 6,500 gross x 1.22 = EUR 7,930 | No change | -- |
| **KEEP** | App Maintenance | EUR 1,500/mo retainer | No change | -- |
| **KEEP** | Paid Ads | Ramps up slowly per marketing array | No change | -- |
| **KEEP** | Content Creation | EUR 150/mo | No change | -- |
| **KEEP** | Influencer Seeding | EUR 200/mo from M6+ | No change | -- |
| **KEEP** | Rent & Co-Working | EUR 750/mo | No change | -- |
| **KEEP** | Accounting/Steuerberater | EUR 400/mo | No change | -- |
| **KEEP** | Claude Pro (Team AI) | EUR 210/mo | No change | D6 |
| **KEEP** | Travel (all sub-lines) | EUR 150 investor + EUR 100 conferences M6+ + EUR 50 local | No change | -- |

### NEW CAPEX SECTION (D5)

This section does NOT currently exist in the model. Must be added.

| Line Item | Estimated Cost | Timing | Notes |
|-----------|---------------|--------|-------|
| Physical space deposit/buildout | TBD | M5-M6 | Need Berlin commercial rent estimate |
| Kitchen equipment (smoothie bar) | EUR 15,000-25,000 | M5 | Blenders, refrigeration, prep surfaces |
| Red light therapy equipment | TBD | M5 | Check if already modeled elsewhere |
| Legal opinion (HWG/healthcare) | EUR 2,000-5,000 | M1-M2 | Must happen before launch |
| GmbH formation | TBD | M1 | Notary, registration, Handelsregister |
| R&D formulation testing | EUR 5,000 | M1 | Currently in OpEx as `rdCapEx` -- MOVE to CapEx |

---

## CURRENT P&L MODEL STRUCTURE (as-built in alche-pnl-excel-filler.html)

### Revenue Lines (Income)
```
Products:
  L1: Potions (units x EUR 49)
  L2: LED Therapy (sessions x EUR 45)
  L3: CGM Hardware (units x EUR 130)         <-- TO BE REMOVED (D3)
  L4: Events & Workshops (attendees x EUR 35)
  L5: Restaurant Commission (covers x EUR 1.50) <-- TO BE REMOVED (D2)
  L6: Doctor SaaS (doctors x EUR 150)        <-- CHANGE to EUR 99 (D1)

Subscriptions:
  Core: subscribers x EUR 19
  Pro: subscribers x EUR 49
  Premium: subscribers x EUR 99

Total Income = Products + Subscriptions
```

### COGS Lines
```
  Potions COGS (units x EUR 11.50)
  3PL Fulfillment ((potUnits + cgmUnits) x EUR 2.50)  <-- CHANGE: remove cgmUnits (D3)
  Waste / Defect Reserve ((potRev + cgmRev) x 5%)     <-- CHANGE: category-weighted, remove cgmRev (D3/D7)
  LED Practitioner (sessions x EUR 25)
  CGM Hardware Cost (units x EUR 70)                    <-- TO BE REMOVED (D3)
  CGM RMA Reserve (cgmRev x 4%)                        <-- TO BE REMOVED (D3)
  Events & Ticketing (events x EUR 250 + revenue x 7%)
  Doctor Verification (new doctors x EUR 25)
  Stripe Processing (totalIncome x 2.9%)

Total COGS = sum of above
Gross Profit = Total Income - Total COGS
```

### Operations (OpEx) Lines
```
Payroll:
  Timu (CEO) -- EUR 5,082/mo loaded
  Daria (COO) -- EUR 5,082/mo loaded
  Partner Mgr -- EUR 2,440/mo from M6
  Growth Marketer -- EUR 5,490/mo from M12
  Tech/Ops Lead -- EUR 7,930/mo from M18

R&D:
  App Maintenance -- EUR 1,500/mo
  UX/UI Iteration -- EUR 800/mo                <-- CHANGE to EUR 3,000-5,000/mo (R6)
  R&D CapEx (M1) -- EUR 5,000 one-off          <-- MOVE to CapEx section (D5)

S&M (Sales & Marketing):
  Paid Ads -- ramping array
  Content Creation -- EUR 150/mo
  Influencer Seeding -- EUR 200/mo from M6
  Menu Database (Dietitians) -- EUR 500/mo      <-- TO BE REMOVED (D10)

G&A:
  Rent & Co-Working -- EUR 750/mo
  Accounting/Steuerberater -- EUR 400/mo

Management & APIs:
  Base SaaS Stack -- 350 -> 850 -> 1800         <-- CHANGE: itemize per D9
  Claude Pro (Team AI) -- EUR 210/mo
  Terra CGM API -- EUR 499/mo from M6           <-- TO BE REMOVED (D8)
  Anthropic Inference -- scales with users       <-- REFINE per D6/R9

Travel:
  Investor & Travel -- EUR 150/mo
  Conferences -- EUR 100/mo from M6
  Local transport -- EUR 50/mo

Total Expenses = Payroll + R&D + S&M + G&A + Management + Travel
Total P&L = Gross Profit - Total Expenses
```

### Key Growth Arrays (hardcoded in JS)
```javascript
// Potion units by month
potUnits = [0,0,0,5,10,20,35,45,55,65,80,95,114,125,135,145,155,165,175,185,195,210,225,240];

// LED sessions by month
ledSessions = [0,0,0,0,0,5,10,15,20,25,30,35,40,42,44,46,48,50,50,50,50,50,50,50];

// CGM units by month  <-- TO BE REMOVED
cgmUnits = [0,0,0,0,0,10,25,40,60,85,115,150,190,235,285,340,400,465,535,610,690,775,865,960];

// Restaurant covers by month  <-- TO BE REMOVED
restCovers = [0,0,0,0,0,20,30,40,50,60,75,90,...];

// Doctor SaaS subscribers by month
docSaaS = [0,0,0,0,0,5,15,25,40,60,85,115,...];

// Subscriber growth: 3/mo M1-3, 15/mo M4-6, 22/mo M7-9, 28/mo M10-12, 32/mo M13-18, 38/mo M19-24
// With 8% monthly churn applied
```

---

## OPEN ITEMS / RISKS

### Critical (blocks investor-ready P&L)

1. **Retail product unit economics UNVALIDATED.** EUR 49 price / EUR 11.50 COGS assumes ~77% margin. No supplier quotes. No MOQ data. No brand partnerships confirmed. Pending R10.

2. **Physical space lease cost NOT in P&L.** "Digital and physical first" is a core pitch but lease/buildout costs are excluded from the 24-month model. Need Berlin commercial rent estimate for ~40-60 sqm in Mitte/Prenzlauer Berg/Kreuzberg. Likely EUR 2,000-4,000/mo including Nebenkosten.

3. **Break-even needs full recalculation** after all changes applied. Current model says M12 with ~145 subs + EUR 10K/month space. Adding smoothie bar revenue helps, but higher UX costs (EUR 800 -> EUR 5,000) and physical space lease will push break-even later.

4. **R9 (AI API Comparison) and R10 (Retail Brands) still PENDING.** These affect COGS calculations.

### Important (affects investor credibility)

5. **Smoothie bar 45 drinks/day assumption may be optimistic** for a niche longevity space. Need comparable data from Berlin specialty beverage bars. If volume is 20-30/day, revenue drops to EUR 3-5K/mo.

6. **20 longevity doctors = 33-67% of Berlin's addressable market.** If Berlin has 30-60 doctors who would qualify, acquiring 20 at EUR 99/mo is ambitious. Need TAM validation.

7. **UX budget increase from EUR 800 to EUR 3,000-5,000/mo significantly increases burn.** Over 24 months, this adds ~EUR 50-100K to total spend. Offsets some of the savings from removing Terra and menu analysis.

8. **EUR 2-5K healthcare compliance legal opinion MUST happen before launch.** This is a binary risk -- if HWG compliance blocks the Doctor SaaS model, that revenue line disappears.

### Nice-to-Have (investor preparation)

9. **ZOE investor question counter-argument prepared** in `/pitchbook/check-later/zoe-cgm-dropout-research.md`. Key rebuttal: "We're doing the opposite of what ZOE did. We never touch hardware."

10. **Healthy Anywhere competitive reference** in `/pitchbook/check-later/healthyanywhere-overview.md`. Relevant as a "curation as differentiation" case study. USD $29.99/year subscription for curated restaurant discovery.

11. **Doctor SaaS subscriber growth curve needs sanity check.** Current array ramps aggressively: 5 doctors M6, 15 M7, 25 M8... This implies acquiring 10 new doctors/month. At EUR 99/mo, the value prop must be crystal clear to doctors.

---

## FILE LOCATIONS

### P&L Model Files
| File | Location | Description |
|------|----------|-------------|
| Main P&L calculator | `/pitchbook/alche-pnl-excel-filler.html` | Interactive 24-month P&L with copy-to-Excel |
| P&L workbench | `/pitchbook/alche-pnl-workbench.html` | Line-by-line annotation workbench |
| P&L annotations | `/pitchbook/alche-pnl-annotations.html` | Annotation reference doc |
| P&L guide | `/pitchbook/alche-pnl-guide.html` | How-to guide for P&L model |
| Decision matrix | `/pitchbook/alche-decision-matrix.html` | Interactive decision tracker |
| Research hub | `/pitchbook/alche-research-hub.html` | Central research tracking dashboard |

### P&L Mirror (in /pnl/ subdirectory)
| File | Location |
|------|----------|
| P&L calculator copy | `/pitchbook/pnl/alche-pnl-excel-filler.html` |
| Workbench copy | `/pitchbook/pnl/alche-pnl-workbench.html` |
| Annotations copy | `/pitchbook/pnl/alche-pnl-annotations.html` |
| Guide copy | `/pitchbook/pnl/alche-pnl-guide.html` |
| Decision matrix copy | `/pitchbook/pnl/alche-decision-matrix.html` |
| Research hub copy | `/pitchbook/pnl/alche-research-hub.html` |
| Session log | `/pitchbook/pnl/SESSION_LOG.md` |

### Competitor & Research References
| File | Location |
|------|----------|
| ZOE CGM dropout research | `/pitchbook/check-later/zoe-cgm-dropout-research.md` |
| Healthy Anywhere overview | `/pitchbook/check-later/healthyanywhere-overview.md` |

### Source Documents
| File | Location |
|------|----------|
| CGM analysis PDF | `/pitchbook/source-docs/Alche_CGM_Full_Analysis.pdf` |
| Cost analysis PDF | `/pitchbook/source-docs/Alche_Cost_Analysis_pdf.pdf` |
| Investor Excel template | `/pitchbook/source-docs/Budget P&L.xlsx` |

### Pitch Book Files (HTML sections)
| File | Location |
|------|----------|
| Cover | `/pitchbook/01-alche-cover (1).html` |
| Insight | `/pitchbook/02-alche-insight (1).html` |
| Moat | `/pitchbook/04-alche-the-moat.html` |
| Competitive landscape | `/pitchbook/05-alche-competitive-landscape.html` |
| Solution | `/pitchbook/05-alche-solution.html` |
| Product | `/pitchbook/07-alche-product (3).html` |
| Business model | `/pitchbook/08-alche-business-model-pitchbook.html` |
| Closing vision | `/pitchbook/15-alche-closing-vision.html` |

### Project Config
| File | Location |
|------|----------|
| Project instructions | `/pitchbook/CLAUDE.md` |
| Agent prompt | `/pitchbook/agents_prompt.md` |
| Content blueprint | `/pitchbook/_CONTENT_BLUEPRINT.md` |
| Design system CSS | `/pitchbook/_design-system.css` |
| Fact check | `/pitchbook/_FACT_CHECK.md` |
| Investor critique | `/pitchbook/_INVESTOR_CRITIQUE.md` |
| Investor empathy map | `/pitchbook/_INVESTOR_EMPATHY_MAP.md` |
| Team structure analysis | `/pitchbook/_TEAM_STRUCTURE_ANALYSIS.md` |
| Transformation logic | `/pitchbook/_TRANSFORMATION_LOGIC.md` |

---

## LOCKED DATA (DO NOT CHANGE)

These numbers are fact-checked across 35+ research sessions. Use ONLY these values.

```
Global wellness market:              $6.3 trillion (GWI 2024)
German wellness market growth:       3.3% CAGR (NOT 3.4%)
Germany prevention spending:         4.8% of health expenditure (NOT 3.1%)
Berlin purchasing power index:       92.4 (GfK)
Berlin tech worker median salary:    EUR 75,000 gross
Germans willing to pay OOP for apps: 27% (SpringerMedizin)
EU consumers share health data:      8% (BEUC)
Competitive window:                  12-18 months (NOT 18-24)
Funding target:                      EUR 500K pre-seed
Valuation cap:                       EUR 2.5M
Pricing tiers:                       EUR 19 / 49 / 99 per month
Break-even:                          Month 12, ~145 paying subscribers + EUR 10K/month space
Oura valuation:                      $11B, 5.5M rings sold
Hims revenue:                        $2.3B, 2.5M subscribers
ZOE:                                 ~$100M revenue, 300K microbiome profiles
AG1:                                 $600M revenue, profitable
Graveyard total:                     $1.4B+ in failed health/nutrition startups
Retention: 77% of health app users churn by Day 3
Retention: 44% cancel within first 90 days
```

---

## BRAND IDENTITY REFERENCE

```
Name:           alche (lowercase in running text, "Alche" at sentence start)
Pronunciation:  AL-keh
Tagline:        "The Art of Curated Longevity"
Category:       Longevity Lifestyle Platform
One-liner:      The longevity lifestyle platform that translates the science
                of living longer into daily rituals you actually enjoy.
```

---

## TEAM COMPOSITION

```
Timu    -- Co-founder & CEO. Marketer. Brand strategy, design, community.
Daria   -- Co-founder & COO. Media/PR. Established figure in longevity/wellness.
            Market analysis, operations, competitive intelligence.
Doctor  -- CGM expert physician. Medical advisor via Daria. NOT investor, NOT co-founder.
CTO     -- Gap. "Funding unlocks this hire." Planned M18+.
Shai    -- Serial entrepreneur. Potential angel. Interested but NOT committed.
```

---

## NEXT STEPS (for next session)

1. **Wait for R9 and R10 to complete** (or re-run if they timed out). These block final COGS numbers.
2. **Apply all queued P&L changes** to `alche-pnl-excel-filler.html` per the tables above.
3. **Add Smoothie Bar** as new revenue + COGS line with EUR 9.67 avg price, 65% margin, growth array starting M6.
4. **Create CapEx section** in the model with physical space, kitchen, legal, and GmbH formation costs.
5. **Update UX budget** from EUR 800/mo to phased EUR 5,000/3,500/3,000.
6. **Recalculate break-even** after all changes are applied.
7. **Validate 20-doctor TAM** in Berlin for Doctor SaaS at EUR 99/mo.
8. **Get Berlin commercial rent estimate** for physical space (~40-60 sqm).
9. **Update workbench** (`alche-pnl-workbench.html`) to reflect all decisions and remove TBD status.
10. **Final investor review** -- check that all numbers in pitch book HTML sections match updated P&L.

---

## SESSION CONTINUITY NOTES

- The P&L calculator (`alche-pnl-excel-filler.html`) is a self-contained HTML file with embedded JavaScript. All model logic, growth arrays, and rendering are in a single `<script>` block starting around line 1468.
- The model uses hardcoded growth arrays (not formulas) for unit volumes. To change growth curves, edit the arrays directly in JS (e.g., `potUnits`, `ledSessions`, `cgmUnits`, etc.).
- Assumptions are driven by HTML input fields with IDs like `a-core-price`, `a-pot-cogs`, etc. Defaults are set in the HTML `value` attributes and also in a `resetDefaults()` function around line 2260.
- The workbench (`alche-pnl-workbench.html`) is a separate file with its own card-based UI. It has data-values attributes containing TSV values for each line. These are NOT dynamically calculated -- they are static snapshots that need manual updating when the model changes.
- All files use the alche design system: Cormorant Garamond for headlines, Outfit for body, Space Mono for data. Color palette defined in `:root` CSS variables.
- The investor's Excel template expects data in a specific row order. The "Copy All Numbers for Excel" feature copies TSV that maps to the Budget P&L.xlsx format.
- Physical space disclaimer in model: "Physical space (Phase 2) is excluded -- EUR 0 in this model." This needs updating given D4 decision.
