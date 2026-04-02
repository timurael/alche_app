# alche Business Logic -- Complete Reference

**Version:** v3.3 | **Model file:** `alche-pnl-24mo-v3.xlsx` | **Generator:** `build_excel_pnl_v3.py`
**Model period:** Month 1 through Month 24 | **Funding basis:** EUR 500K pre-seed at EUR 2.5M valuation cap
**All amounts:** EUR, net of VAT unless stated otherwise
**Document produced:** 2026-02-24 (cross-validated against Python source code)

---

## How to Read This Document

This document is the definitive reference for every business assumption, strategic decision, and financial choice embedded in the alche 24-month P&L model. It serves three audiences:

1. **Founders (Timu & Daria):** Use Parts 1-2 to explain any number to an investor. Use Part 4 to trace dependencies.
2. **Investors:** Use Part 2 to understand strategic choices, Part 3 for growth logic, Part 6 for risk assessment.
3. **Technical team (future CTO):** Use Parts 1 and 4 to understand how changing one parameter cascades through the model.

**Notation conventions:**
- `B##` = cell reference on the Assumptions sheet (e.g., B8 = monthly churn rate)
- `D#` = strategic decision (D1 through D11) documented on the Decisions sheet
- `P#` = persona audit finding (P1 through P7) from seven expert reviews
- `R#` = research document (R1 through R10) that validated specific assumptions
- `GC row ##` = row on the Growth Curves sheet
- Sensitivity ratings: **CRITICAL** > HIGH > Medium > Low > Very Low

---

## Part 1: Assumptions Register

The Assumptions sheet contains 125 editable parameters organized into 10 categories. Every formula in the P&L, Growth Curves, Cash Flow, Unit Economics, and Scenarios sheets references these cells. Change a value here and the entire model recalculates.

### 1.1 Subscription Model (B5-B11)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A1 | B5 | Core tier price | 19 | EUR/mo | Low | Locked data | Entry tier, high volume |
| A2 | B6 | Pro tier price | 49 | EUR/mo | Medium | Locked data | "Sweet spot" tier, highest revenue contribution |
| A3 | B7 | Premium tier price | 99 | EUR/mo | Low | Locked data | Small subscriber share (10%), highest per-user value |
| A4 | B8 | Monthly churn rate | 8% | % | **CRITICAL** | Locked data | Single most sensitive assumption. 1/0.08 = 12.5-month avg lifetime. Every 1pp change shifts LTV by ~12-15%. Industry: 77% of health app users churn by Day 3; 44% cancel within 90 days |
| A5 | B9 | Core tier share | 52% | % | Medium | Model design | Affects blended ARPU. Higher Core = lower ARPU |
| A6 | B10 | Pro tier share | 38% | % | Medium | Model design | |
| A7 | B11 | Premium tier share | 10% | % | Low | Model design | Calculated as remainder on Growth Curves sheet to avoid rounding errors |

**Blended subscription ARPU:** (0.52 x 19) + (0.38 x 49) + (0.10 x 99) = 9.88 + 18.62 + 9.90 = EUR 38.40/subscriber/month (P5 flagged this -- actual ARPU is ~EUR 38.44, not the EUR 49 headline Pro price).

### 1.2 Subscriber Growth (B14-B19)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A8 | B14 | New subs M1-M3 | 0 | subs/mo | N/A | v3.1 correction | **Gated to M4+.** App does not launch until space opens (v3.1 Timu review) |
| A9 | B15 | New subs M4-M6 | 15 | subs/mo | Medium | Model design | Product + space launch |
| A10 | B16 | New subs M7-M9 | 22 | subs/mo | Medium | Model design | Growth acceleration |
| A11 | B17 | New subs M10-M12 | 28 | subs/mo | Medium | Model design | Marketing ramp |
| A12 | B18 | New subs M13-M18 | 32 | subs/mo | Medium | Model design | Scaling phase |
| A13 | B19 | New subs M19-M24 | 38 | subs/mo | Medium | Model design | Scaling phase (v3.1: note changed from "Growth marketer effect" to "Scaling phase") |

**Growth mechanics:** Subscriber model uses nested IF formulas referencing these rates. Churn is applied to previous month's total. Total subscribers at M24: ~339. Formula: `=MAX(0, PrevTotal - CurrentChurn + NewSubs)`.

### 1.3 Product Pricing (B22-B33)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A14 | B22 | Retail product price | 49 | EUR | **HIGH** | R10 validated | Largest revenue line. Weighted average across BRAINEFFECT, Ancient+Brave, Hifas da Terra, Avea. EUR 45-55 range |
| A15 | B23 | Retail product COGS | 23.50 | EUR/unit | **HIGH** | R10 corrected | Was EUR 11.50 (76% margin), corrected to EUR 23.50 (52% margin). Standard wholesale 40-60% of retail. D11 decision |
| A16 | B24 | LED session price | 0 | EUR | N/A | v3.2 change | **FREE with smoothie purchase.** Was EUR 45. No longer a revenue stream. Dwell-time and foot traffic play |
| A17 | B25 | LED practitioner cost | 0 | EUR | N/A | v3.2 change | **Self-service -- no practitioner.** Was EUR 25. Customers self-serve with MITO LIGHT panels |
| A18 | B26 | Smoothie avg price | 9.67 | EUR | Medium | R2 validated | Cost analysis break-even: ~45 drinks/day at this price |
| A19 | B27 | Smoothie COGS rate | 35% | % | Medium | R2 validated | 65% gross margin. Ingredients + packaging |
| A20 | B28 | Event ticket price | 35 | EUR | Low | Model design | Community events |
| A21 | B29 | Event fixed cost | 250 | EUR/event | Low | Model design | Venue cost per event |
| A22 | B30 | Ticketing platform fee | 7% | % | Low | Model design | Luma/Eventbrite |
| A23 | B31 | Doctor SaaS fee | 99 | EUR/mo | Low | D1/R3 | StGB 299a safe. Doctolib precedent: EUR 139-475/mo |
| A24 | B32 | Doctor verification cost | 25 | EUR | Very Low | Model design | One-time per new doctor |
| A25 | B33 | Doctor max clinics | 20 | cap | Very Low | Model design | Cap for M1-24 |

### 1.4 Cost Rates (B36-B41)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A26 | B36 | Waste blended rate | 5.5% | % | Low | D7/R7 | Capsules 4%, powders 7%, blended 5.5% |
| A27 | B37 | 3PL fulfillment | 2.50 | EUR/unit | Medium | Model design | Scales with retail volume. Only from M4+ |
| A28 | B38 | Stripe fee rate | 2.9% | % | Medium | Industry standard | Applied to ALL revenue. ~EUR 8K/mo at M24 |
| A29 | B39 | AI API per user | 0.35 | EUR/mo | Low | D6/R9 | Hybrid Claude Sonnet 4.5 (blood panels, 54% accuracy) + Gemini Flash 2.0 (daily insights, 10x cheaper). Includes 20% buffer |
| A30 | B40 | Refund/returns reserve | 1.5% | % | Low | Model design | Applied to physical product + event revenue only |
| A31 | B41 | Bad debt provision | 0.5% | % | Low | P5 | Applied to total revenue |

### 1.5 Payroll (B44-B52)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A32 | B44 | Founder gross salary (each) | 4,166 | EUR/mo | Medium | P7 | EUR 50K/yr. P7: viable at pre-seed |
| A33 | B45 | Employer multiplier | 1.25 | x | **HIGH** | P2/P7 | Applied to EVERY salary. Covers AG health, pension, unemployment, U1/U2/U3 Umlagen. Was 1.22x, corrected to 1.25x |
| A34 | B46 | Space staff gross | 1,230 | EUR/mo | Low | Model design | Midijob ~25 hrs/wk. From M4 |
| A35 | B47 | Partner Manager gross | 2,000 | EUR/mo | Low | Model design | From M6 |
| A36 | B48 | CTO gross | 6,500 | EUR/mo | **HIGH** | P7 flagged | EUR 78K/yr. P7: below 25th percentile (Glassdoor EUR 80-187K). From M18 |
| A37 | B49 | BG insurance rate | 0.5% | % | Very Low | P7 corrected | Berufsgenossenschaft. Was 1.5%, corrected to 0.5% for office work |
| A38 | B50 | KSK levy rate | 4.9% | % | Low | P2 | Kuenstlersozialkasse on creative freelancer payments. Mandatory |
| A39 | B51 | Recruitment CTO (M17) | 18,000 | EUR | Low (one-off) | P7 | Headhunter fee 20-30% of salary. Was EUR 5K, corrected to EUR 18K |
| A40 | B52 | CTO onboarding (M18) | 3,500 | EUR | Very Low | P7 | Equipment + setup costs |

**REMOVED (v3.1):** Growth Marketer hire (EUR 4,500/mo from M12). Timu IS the growth marketer. Saves EUR 73,125 (EUR 5,625/mo fully loaded x 13 months M12-M24). Marketing ad spend budget in Growth Curves row 10 is unchanged -- that is media budget, not a person.

### 1.6 Fixed Operating Costs (B56-B82)

#### Technology & R&D

| # | Cell | Parameter | Value | Unit | Start | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------|-------------|--------|-------|
| A41 | B56 | App maintenance retainer | 1,500 | EUR/mo | M1 | Medium | Model design | External agency. EUR 36K over 24mo |
| A42 | B57 | Claude Max (internal AI) | 210 | EUR/mo | M1 | Low | D6 | Team budget. Separate from user-facing AI API (in COGS) |
| A43 | B58 | SaaS Stack M1-6 | 338 | EUR/mo | M1 | Low | D9/R8 | Google Workspace, Figma, Notion, Crisp |
| A44 | B59 | SaaS Stack M7-12 | 500 | EUR/mo | M7 | Low | D9 | + additional tools |
| A45 | B60 | SaaS Stack M13+ | 750 | EUR/mo | M13 | Low | D9 | Full stack. PostHog free (replaces Mixpanel), Terra deferred (D8) |

**REMOVED (v3.1):** UX/UI design retainer (EUR 800/mo). Moved to CapEx as one-time EUR 15,000 "App Design & Development" in M1. Saves EUR 19,200 OpEx over 24 months, adds EUR 15K CapEx.

#### Rent & Space Operations

| # | Cell | Parameter | Value | Unit | Start | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------|-------------|--------|-------|
| A46 | B61 | Rent M1-3 (co-working) | 750 | EUR/mo | M1-M3 | Medium | Model design | Before space opens |
| A47 | B62 | Rent M4+ (physical space) | 2,500 | EUR/mo | M4 | **HIGH** | Model design | Kaltmiete. 21 months = EUR 52,500 |
| A48 | B63 | Nebenkosten M4+ | 325 | EUR/mo | M4 | Medium | P3 | EUR 4-5/sqm commercial. Heating, water, building insurance, property tax |
| A49 | B70 | Utilities M4+ (Strom/Gas/Wasser) | 500 | EUR/mo | M4 | Low | P3 | Was EUR 400, increased for commercial food-service |
| A50 | B71 | Cleaning/maintenance M4+ | 300 | EUR/mo | M4 | Low | P3 | Daily cleaning required for food-service space |
| A51 | B72 | Maintenance reserve M4+ | 200 | EUR/mo | M4 | Low | P3 | Equipment repairs |
| A52 | B73 | Waste disposal M4+ | 120 | EUR/mo | M4 | Low | P3 | BSR commercial waste |
| A53 | B74 | WiFi/Internet M4+ | 50 | EUR/mo | M4 | Very Low | P3 | Business fiber |
| A54 | B75 | POS system M4+ | 50 | EUR/mo | M4 | Very Low | P3 | Cash register + TSE (mandatory in Germany) |

#### Professional Services

| # | Cell | Parameter | Value | Unit | Start | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------|-------------|--------|-------|
| A55 | B64 | Steuerberater | 400 | EUR/mo | M1 | Low | Model design | Tax advisor monthly |
| A94 | B94 | Bank fees | 35 | EUR/mo | M1 | Very Low | P5 | Geschaeftskonto monthly fee |

#### Insurance (P6 -- expanded from single EUR 200 line to 5 categories)

| # | Cell | Parameter | Value | Unit | Start | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------|-------------|--------|-------|
| A56 | B65 | General liability insurance | 200 | EUR/mo | M1 | Low | Model design | Betriebshaftpflicht |
| A57 | B66 | D&O insurance | 100 | EUR/mo | M1 | Low | P6 | Mandatory with angel investors on cap table |
| A58 | B67 | Cyber insurance | 150 | EUR/mo | M1 | Low | P6 | Health data = Art. 9 GDPR, significant data breach liability |
| A59 | B68 | Product liability insurance | 100 | EUR/mo | M1 | Low | P6 | Selling dietary supplements |
| A60 | B69 | Product recall insurance M4+ | 100 | EUR/mo | M4 | Low | P4 | NEM retail. Only needed when products on shelves |

**Total insurance: EUR 650/mo** (was EUR 200/mo). EUR 550/mo from M1 (all except recall), EUR 650/mo from M4+.

#### Regulatory & Compliance (P2/P4/P6)

| # | Cell | Parameter | Value | Unit | Start | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------|-------------|--------|-------|
| A61 | B76 | DSB (ext. DPO) monthly | 400 | EUR/mo | M1 | Medium | P6 | **MANDATORY** Art. 37 GDPR. External data protection officer for health data |
| A62 | B77 | CMP tool (cookie consent) | 25 | EUR/mo | M1 | Very Low | P6 | TDDDG required |
| A63 | B78 | Food safety compliance M4+ | 80 | EUR/mo | M4 | Low | P4 | HACCP monitoring and documentation |
| A64 | B79 | IHK Berlin (annual / 12) | 10 | EUR/mo | M1 | Very Low | P2 | EUR 120/yr. P2 corrected from EUR 300/yr |
| A65 | B80 | GEMA M4+ (annual / 12) | 31 | EUR/mo | M4 | Very Low | P2 | EUR 370/yr for music in physical space |
| A66 | B81 | Rundfunkbeitrag | 6 | EUR/mo | M1 | Very Low | P2 | EUR 6.12/mo for 0-8 employees |
| A67 | B82 | Verpackungsgesetz (annual / 12) | 6 | EUR/mo | M1 | Very Low | P2 | LUCID registration + dual system. EUR ~72/yr |

### 1.7 Sales & Marketing (B86-B90)

| # | Cell | Parameter | Value | Unit | Start | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------|-------------|--------|-------|
| A68 | B86 | Content creation tools | 150 | EUR/mo | M1 | Low | Model design | Canva, stock imagery |
| A69 | B87 | Influencer seeding M7+ | 200 | EUR/mo | M7 | Low | Model design | Product seeding |
| A70 | B88 | Investor travel | 150 | EUR/mo | M1 | Low | Model design | Monthly |
| A71 | B89 | Conferences M7+ | 100 | EUR/mo | M7 | Low | Model design | Industry events |
| A72 | B90 | Local transport | 50 | EUR/mo | M1 | Very Low | Model design | BVG tickets |

**Note:** Primary marketing spend is Paid Ads in Growth Curves row 10 (EUR 50/mo M1 ramping to EUR 3,000/mo M24), not these fixed costs.

### 1.8 Buffers (B93-B94)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A73 | B93 | Contingency buffer rate | 10% | % | **HIGH** | Model design | Applied to ALL pre-contingency OpEx. Standard pre-seed practice. Could total EUR 40-60K over 24 months |
| A74 | B94 | Bank fees | 35 | EUR/mo | Very Low | P5 | Geschaeftskonto |

### 1.9 Tax -- Berlin GmbH (B97-B99)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A75 | B97 | Gewerbesteuer rate (Berlin) | 14.35% | % | Medium | P2 | 3.5% Steuermesszahl x 410% Hebesatz. GmbH has NO Gewerbesteuer Freibetrag (unlike Einzelunternehmen) |
| A76 | B98 | KSt + Soli rate | 15.825% | % | Medium | P2 | 15% Koerperschaftsteuer + 5.5% Solidaritaetszuschlag |
| A77 | B99 | Combined tax rate (simplified) | 30% | % | Medium | P2 | ~30.175% rounded down. Used in tax provision formula |

**Tax activation logic:** Tax is charged ONLY when BOTH conditions are true: (1) Monthly pre-tax P&L is positive, AND (2) Cumulative pre-tax P&L is positive. This approximates German Verlustvortrag (loss carryforward).

### 1.10 Capital Expenditures (B102-B119)

#### M1 Items (Company Formation & Legal/Regulatory Setup)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A78 | B102 | GmbH Formation | 2,500 | EUR | Low | Model design | Notary + Handelsregister |
| A79 | B103 | Legal Opinion HWG | 3,500 | EUR | Low | D3/R3 | Heilmittelwerbegesetz compliance |
| A80 | B104 | R&D Stability Testing | 5,000 | EUR | Low | Model design | Supplement formulation shelf stability |
| A81 | B105 | DPIA | 7,500 | EUR | Medium | P6 | **MANDATORY** Art. 35 GDPR. Data Protection Impact Assessment for health data |
| A82 | B106 | MDR Classification Opinion | 7,500 | EUR | Medium | P6 | **MANDATORY** pre-launch. Confirms app does not fall under Medical Device Regulation |
| A83 | B107 | Privacy Policy + ToS | 5,000 | EUR | Low | P6 | Art. 13/14 GDPR compliant |
| A84 | B108 | App Design & Development | 15,000 | EUR | Medium | v3.1 | UX/UI capitalized from monthly OpEx (was EUR 800/mo R&D) |

**M1 Total: EUR 46,000**

#### M3 Items (Physical Space Buildout)

| # | Cell | Parameter | Value | Unit | Sensitivity | Source | Notes |
|---|------|-----------|-------|------|-------------|--------|-------|
| A85 | B109 | Space Buildout | 25,000 | EUR | **HIGH** | P3 | Was EUR 15K. Construction, plumbing, electrical, interior fit-out |
| A86 | B110 | Kitchen Equipment | 20,000 | EUR | HIGH | Model design | Commercial-grade smoothie bar: blenders, refrigeration, prep surfaces, sinks |
| A87 | B111 | LED Therapy Devices | 5,000 | EUR | Low | Model design | MITO LIGHT panels for self-service red light therapy |
| A88 | B112 | Fire Safety Equipment | 300 | EUR | Very Low | P3 | Extinguishers + signage |
| A89 | B113 | Signage & Branding | 500 | EUR | Very Low | P3 | Window + exterior |
| A90 | B114 | HACCP Plan Setup | 1,000 | EUR | Low | P4 | Food safety consultant |
| A91 | B115 | Hygiene Training | 60 | EUR | Very Low | P4 | IfSG section 43 x 4 persons (EUR 15/person) |
| A92 | B116 | Food Safety Equipment | 500 | EUR | Very Low | P4 | Thermometers + sensors |
| A93 | B117 | Ablöse — Key Money | 50,000 | EUR | **HIGH** | v3.3 | Commercial lease takeover (hava parası). Capitalized intangible asset per §5 Abs. 2 EStG, amortized over lease term (§7 Abs. 1 EStG). In model: amortized in 36-month pool |

**M3 Total: EUR 102,360**

| # | Cell | Parameter | Value | Unit | Notes |
|---|------|-----------|-------|------|-------|
| A94 | B118 | Kaution — Security Deposit | 7,500 | EUR | 3 months Kaltmiete. **NOT P&L** — refundable balance sheet asset. Cash Flow sheet only |
| A95 | B119 | Depreciation period | 36 | months | Linear 3-year. M1-2: only M1 items depreciate. M3+: all items incl. Ablöse |

**Total CapEx: ~EUR 148,360** (M1: EUR 46,000 + M3: EUR 102,360)

**Note on Kaution:** EUR 7,500 appears as a cash outflow on the Cash Flow sheet in M3 but is NOT included in CapEx or P&L totals. It is a sonstiger Vermögensgegenstand (other asset) refundable at lease end. Commercial leases have no statutory cap on Kaution (unlike residential 3-month max). 3 months Kaltmiete is the conservative assumption.

### 1.11 Scenario Multipliers (B121-B125)

| # | Cell | Parameter | Value | Unit | Sensitivity | Notes |
|---|------|-----------|-------|------|-------------|-------|
| A96 | B121 | Bull revenue multiplier | 1.3 | x | Medium | 30% higher revenue |
| A97 | B122 | Bull churn multiplier | 0.75 | x | Medium | 25% lower churn (6% instead of 8%) |
| A98 | B123 | Bear revenue multiplier | 0.6 | x | Medium | 40% lower revenue |
| A99 | B124 | Bear churn multiplier | 1.5 | x | Medium | 50% higher churn (12% instead of 8%) |
| A100 | B125 | Bear CAC multiplier | 2.0 | x | Medium | Double customer acquisition cost |

### 1.12 Growth Curves (Hardcoded Unit Forecasts)

These are on the Growth Curves sheet (not the Assumptions sheet) but function as assumptions:

| # | GC Row | Metric | M1-3 | M4 | M12 | M24 | Notes |
|---|--------|--------|------|----|-----|-----|-------|
| A100 | 4 | Retail Units | 0 | 50 | 900 | 4,600 | P1/P5 flagged M24 as "extremely aggressive" |
| A101 | 5 | LED Sessions | 0 | 10 | 140 | 300 | Free with smoothie. Caps at 300/mo from M20 |
| A102 | 6 | Smoothie Units | 0 | 100 | 850 | 2,000 | Break-even ~45/day (R2) |
| A103 | 7 | Event Count | 0 | 1 | 3 | 5 | Per month |
| A104 | 8 | Event Avg Attendees | 0 | 12 | 20 | 25 | Per event |
| A105 | 9 | Doctor Clinics | 0 | 0 | 17 | 20 | Starts M6, caps at 20 (B33) |
| A106 | 10 | Marketing Spend (EUR) | 50 | 200 | 1,400 | 3,000 | Paid ads budget. Drives CAC |
| A107 | 11 | KSK-Eligible Freelancer Spend | 500 | 500 | 800 | 800 | Basis for KSK levy (4.9%) |
| A108 | 12 | New Doctors (delta) | 0 | 0 | formula | formula | `=MAX(0, Current - Previous)` month-over-month change |

### 1.13 Implicit Assumptions (Not on Assumptions Sheet but Hardcoded in Code)

| # | Location | Parameter | Value | Notes |
|---|----------|-----------|-------|-------|
| A109 | P&L code | Pre-seed funding | EUR 500,000 | Cumulative cash starts here |
| A110 | P&L code | Permits & Licenses (M3) | 500 | EUR one-off, hardcoded `IF(M=3, 500, 0)` |
| A111 | CF sheet | Working capital pipeline | 2 months | Inventory = 2 months of expected sales x COGS |
| A112 | Tax logic | Cumulative loss offset | Yes | Tax only when cumulative P&L is positive |
| A113 | Scenario sheet | OpEx unchanged in scenarios | Yes | Bull/Bear only adjust revenue and COGS, not fixed costs |
| A114 | Model design | CGM revenue | EUR 0 | Greyed out row for investor transparency (D3) |
| A115 | Model design | Restaurant revenue | EUR 0 | Phase 2 only (D2) |
| A116 | Model design | LED revenue | EUR 0 | Free with smoothie (v3.2) |
| A117 | Growth formula | Churn applied to prev month | Yes | Avoids circular reference |
| A118 | Growth formula | Premium = Total - Core - Pro | Yes | Remainder to avoid rounding errors |
| A119 | Hiring timeline | Space Staff starts | M4 | |
| A120 | Hiring timeline | Partner Manager starts | M6 | |
| A121 | Hiring timeline | CTO starts | M18 | |
| A122 | P&L code | 3PL starts | M4 | Only when physical space opens |
| A123 | P&L code | M4+ costs trigger | M>=4 | Nebenkosten, utilities, cleaning, maintenance, waste, WiFi, POS, product recall, food safety, GEMA |

**Total assumption count: 125** (101 on Assumptions sheet + 24 implicit/Growth Curves)

---

## Part 2: Decision Log

### D1: Doctor Revenue Model -- SaaS EUR 99/mo

| Field | Detail |
|-------|--------|
| **Decision** | Switch from commission-based referral fees to flat SaaS platform fee |
| **Choice Made** | EUR 99/mo per clinic, capped at 20 clinics |
| **Previous Model** | EUR 150/mo per doctor with commission on referrals |
| **Why Changed** | Commission-based referral fees are **illegal** in Germany under StGB sections 299a/299b (anti-corruption in healthcare). BGH ruling February 2025 confirmed. |
| **Precedent** | Doctolib charges EUR 139-475/mo for similar SaaS listing. EUR 99/mo is below the floor of comparable services. |
| **P&L Impact** | Revenue line changed from EUR 150 to EUR 99/doctor/mo. Revenue -34% on this line but model is now legally sound. |
| **Assumptions Affected** | B31 (EUR 99), B32 (EUR 25 verification), B33 (20 clinic cap) |
| **Risk if Changed** | Criminal prosecution under StGB 299a/299b. Non-negotiable. |
| **Source** | R3 (HWG Legal), StGB 299a/299b |
| **Alternatives Considered** | (A) Commission model -- illegal; (B) Referral fee -- illegal; (C) SaaS listing fee -- chosen |

### D2: Restaurant Revenue -- Phase 2, EUR 0

| Field | Detail |
|-------|--------|
| **Decision** | No restaurant revenue in M1-24 |
| **Choice Made** | Feature-only for retention; zero revenue line |
| **Previous Model** | EUR 1.50/cover from M6+ |
| **Why Changed** | No health app has successfully charged restaurants commission. Feature kept for user retention but monetized at EUR 0. |
| **P&L Impact** | EUR 0 across all 24 months. Visible as a named row for investor transparency. |
| **Assumptions Affected** | None (hardcoded EUR 0) |
| **Risk** | None -- this is conservative. Revenue may appear post-500 users in Phase 2. |
| **Source** | R4 (Restaurant Feature research) |

### D3: CGM Hardware -- Software-Only BYOD

| Field | Detail |
|-------|--------|
| **Decision** | Remove all CGM hardware from the model. Software-only via BYOD (Bring Your Own Device). |
| **Choice Made** | Dexcom OAuth 2.0 API + Apple Health / Google Health Connect |
| **Previous Model** | EUR 130 per CGM unit hardware-as-a-service |
| **Why Changed** | ZOE dropped CGM hardware September 2025. Supersapiens shut down February 2024. Hardware-as-a-service model abandoned industry-wide. |
| **P&L Impact** | Removed hardware revenue and COGS lines. Software interpretation yields 80-90% margins. CGM row kept as **greyed-out EUR 0** row with italic grey text so investors see this was deliberate, not an oversight. |
| **Assumptions Affected** | CGM rows zeroed; R&D stability testing remains for supplements |
| **Why Visible** | Investor asks "where is CGM?" -- the greyed row communicates the decision |
| **CapEx Impact** | Regulatory costs (DPIA EUR 7.5K, MDR Classification EUR 7.5K) still included for the software app |
| **Source** | R1 (CGM Software-Only Model), D3 decision |

### D4: Physical Space -- Smoothie Bar + LED + Retail + Events

| Field | Detail |
|-------|--------|
| **Decision** | Add physical space as core business pillar alongside digital app |
| **Choice Made** | "Digital AND physical first" positioning. Smoothie bar, LED therapy (free), retail products, community events. |
| **Previous Model** | Digital-only (EUR 0 physical) |
| **Why Changed** | Core positioning of alche as a longevity *lifestyle* platform. Physical space creates the experiential touchpoint that digital alone cannot provide. |
| **P&L Impact** | New revenue streams (smoothie, events, retail). Significant cost: rent EUR 2,500/mo + Nebenkosten EUR 325/mo + utilities/cleaning/maintenance/waste/WiFi. CapEx: EUR 102,360 (M3 buildout incl. EUR 50K Ablöse) + EUR 7.5K Kaution (cash only). |
| **Assumptions Affected** | B61/B62 (rent), B63 (Nebenkosten), B70-B75 (space ops), B109-B117 (CapEx incl. Ablöse), B118 (Kaution) |
| **Revenue Upside** | Retail products become dominant revenue stream (~85% of total by M24) |
| **Source** | Founding vision, D4 decision |

### D5: CapEx Section -- Added

| Field | Detail |
|-------|--------|
| **Decision** | Separate capital expenditures from operating expenses |
| **Choice Made** | 16 individual CapEx items with linear 36-month depreciation (v3.3: +Ablöse) |
| **Previous Model** | All costs in OpEx |
| **Why Changed** | Standard financial modeling practice. CapEx is one-time investment; OpEx is ongoing. Separating them gives investors a clearer picture of initial setup cost vs. recurring operations. |
| **P&L Impact** | Total CapEx ~EUR 148K (v3.3: +EUR 50K Ablöse; up from EUR 98K pre-Ablöse). Depreciation shown as non-cash charge. |
| **Source** | D5 decision, P3/P4/P6 additions |

### D6: AI Strategy -- Hybrid Claude + Gemini

| Field | Detail |
|-------|--------|
| **Decision** | Use hybrid AI model for cost optimization and accuracy |
| **Choice Made** | Claude Sonnet 4.5 for blood panel interpretation (high accuracy needed) + Gemini Flash 2.0/2.5 for daily insights/Q&A (volume, low cost) |
| **Internal AI** | Claude Max at EUR 210/mo for the founding team |
| **User-Facing Cost** | EUR 0.35/subscriber/month blended |
| **Why Hybrid** | Claude Sonnet 4.5 achieves 54% diagnostic accuracy vs Gemini's 34% on blood panels. But Gemini Flash is 10x cheaper for routine queries (meal recommendations, behavior nudges, daily insights). |
| **Cost Breakdown** | Blood panels: ~EUR 0.036/interaction (1x/month). Daily insights: EUR 0.0001-0.006/interaction (9-14x/month). 20% buffer included. |
| **GDPR Path** | Vertex AI Frankfurt (europe-west12) + Google Cloud for data residency |
| **P&L Impact** | User-facing: COGS line, ~EUR 119/mo at M24 (339 subs). Internal: OpEx fixed EUR 210/mo. |
| **Source** | R5 (Claude AI Costs), R9 (AI API Comparison), D6 decision |

### D7: Product Waste Rates -- Category-Weighted

| Field | Detail |
|-------|--------|
| **Decision** | Use blended waste rate instead of flat rate |
| **Choice Made** | Capsules 4%, powders 7%, blended 5.5% |
| **Previous Model** | Flat 5% across all products |
| **Why Changed** | Different supplement forms have different expiry profiles. Powders degrade faster. |
| **P&L Impact** | Minor -- EUR 50-200/mo in early months. Grows with retail volume. |
| **Assumptions Affected** | B36 = 5.5% |
| **Source** | R7 (Product Waste Rates), D7 decision |

### D8: Terra CGM API -- Deferred

| Field | Detail |
|-------|--------|
| **Decision** | Do not use Terra API for wearable data integration |
| **Choice Made** | Use free HealthKit (Apple) / Health Connect (Google) instead |
| **Previous Model** | Terra API at EUR 499/mo from M6+ |
| **Why Changed** | Free native APIs provide sufficient data access for core features. Terra adds cross-platform convenience but not enough value at this stage to justify EUR 499/mo. |
| **P&L Impact** | Saves EUR 9,481 over 24 months (EUR 499 x 19 months M6-M24) |
| **Assumptions Affected** | SaaS Stack (B58-B60) does not include Terra |
| **Source** | R8 (Software License Stack), D8 decision |

### D9: SaaS Stack -- Itemized

| Field | Detail |
|-------|--------|
| **Decision** | Replace vague lump-sum SaaS budget with itemized stack |
| **Choice Made** | Three phases: EUR 338/mo (M1-6), EUR 500/mo (M7-12), EUR 750/mo (M13+) |
| **Previous Model** | EUR 350 ramping to EUR 1,800/mo |
| **Key Components** | Google Workspace, Figma, Notion, Crisp ($95/mo from M6+), PostHog (free, replaces Mixpanel) |
| **P&L Impact** | Lower than previous model in every phase. Significant savings from PostHog free tier and Terra deferral. |
| **Assumptions Affected** | B58/B59/B60 |
| **Source** | R8 (Software License Stack), D9 decision |

### D10: Menu Analysis -- EUR 0

| Field | Detail |
|-------|--------|
| **Decision** | Founders do restaurant menu analysis themselves using AI tools |
| **Choice Made** | EUR 0 -- no external service |
| **Previous Model** | EUR 500/mo for menu analysis service |
| **P&L Impact** | Saves EUR 12,000 over 24 months |
| **Source** | D10 decision |

### D11: Retail Products -- COGS Corrected

| Field | Detail |
|-------|--------|
| **Decision** | Correct retail product COGS based on actual wholesale pricing research |
| **Choice Made** | EUR 49 retail price VALIDATED. COGS corrected from EUR 11.50 to EUR 23.50. |
| **Previous Model** | EUR 11.50 COGS (76.5% margin -- unrealistic) |
| **Why Changed** | R10 research across 20+ wellness brands showed standard wholesale is 40-60% of retail. EUR 23.50 is midpoint of EUR 22-25 range. |
| **Margin Impact** | 76.5% gross margin --> 52% gross margin. More honest but still healthy. |
| **Validated Brands** | BRAINEFFECT, Ancient+Brave, Hifas da Terra, Avea, Your Super |
| **Wholesale Platforms** | Ankorstore (Net 60, 20% commission first order), Faire (Net 60) |
| **NMN Warning** | NMN is NOT approved as EU Novel Food. Must avoid NMN in retail products. |
| **Assumptions Affected** | B22 = EUR 49, B23 = EUR 23.50 |
| **Source** | R10 (Retail Brands Wholesale), D11 decision |

### Implicit Decisions (Not Numbered but Present in Model)

| Decision | Choice | Rationale | Location |
|----------|--------|-----------|----------|
| Subscribers gated to M4+ | B14 = 0 (no subs M1-M3) | App doesn't launch until space opens | v3.1 correction |
| LED therapy free | B24 = 0, B25 = 0 | Dwell-time and foot traffic play, not revenue | v3.2 correction |
| Growth Marketer removed | Not in payroll | Timu IS the growth marketer | v3.1 correction |
| UX/UI capitalized | B108 = EUR 15K CapEx, not monthly OpEx | App build cost, not ongoing ops | v3.1 correction |
| "Potions" renamed "Retail Products" | Throughout model | More professional investor-facing language | v3.1 correction |
| Pre-seed = EUR 500K | Cumulative cash start | Locked data | Founding decision |
| Valuation cap EUR 2.5M | Not modeled directly | Locked data | Founding decision |
| VAT excluded | "Net of VAT" throughout | Standard practice for pre-seed models | Model design |

---

## Part 2.5: Persona Audit Findings (P1-P7)

Seven expert personas reviewed the model. Their combined impact was to add EUR 113-236K in previously missing costs.

### P1: Angel Investor

| Field | Detail |
|-------|--------|
| **Focus** | Overall model credibility, CAC realism, funding sufficiency |
| **Key Finding** | EUR 113-236K in total missing costs over 24 months |
| **CAC Flag** | EUR 40 blended CAC is aggressive vs industry EUR 70-120 for health/wellness apps |
| **LTV:CAC Flag** | 14.7x ratio unrealistic. Show only conservative 5.1x to investors |
| **Funding Flag** | Recommended raise EUR 600-650K or reduced scope |
| **Volume Flag** | 4,600 retail units/mo at M24 "extremely aggressive" for single-location startup |
| **v3 Action** | All cost gaps closed |

### P2: Steuerberater (Tax Advisor)

| Field | Detail |
|-------|--------|
| **Focus** | German tax obligations, regulatory fees, employer costs |
| **Key Finding** | GmbH pays Gewerbesteuer from first euro (no Freibetrag). Combined ~30% tax rate |
| **Tax Breakdown** | GewSt 14.35% (3.5% x 410% Berlin Hebesatz) + KSt+Soli 15.825% |
| **Added Lines** | IHK EUR 120/yr, GEMA EUR 370/yr, Rundfunkbeitrag EUR 6.12/mo, KSK 4.9%, Verpackungsgesetz EUR 72/yr |
| **Multiplier** | Employer multiplier should be ~1.25x (was 1.22x) |
| **v3 Action** | Tax provision added; all regulatory fees added |

### P3: Operations Manager

| Field | Detail |
|-------|--------|
| **Focus** | Physical space operations, buildout costs, utilities |
| **Key Finding** | Rent EUR 2,500 is Kaltmiete only -- must add Nebenkosten |
| **Cost Additions** | Nebenkosten EUR 325/mo, utilities EUR 400->500, waste EUR 120/mo, WiFi EUR 50/mo, maintenance reserve EUR 200/mo, cleaning EUR 300/mo |
| **Buildout** | EUR 15K -> EUR 25K (construction, plumbing, electrical) |
| **One-Offs** | Fire safety EUR 300, signage EUR 500 |
| **v3 Action** | All items added to G&A and CapEx |

### P4: Food Safety Inspector

| Field | Detail |
|-------|--------|
| **Focus** | HACCP compliance, food safety, regulatory requirements |
| **Key Finding** | No Gaststaettenerlaubnis needed for alcohol-free smoothie bar |
| **NMN Warning** | NMN is **NOT** approved as EU Novel Food. DO NOT STOCK. |
| **Cost Additions** | HACCP plan setup EUR 1,000, hygiene training EUR 60, food safety equipment EUR 500, ongoing compliance EUR 80/mo |
| **v3 Action** | All items added |

### P5: Growth CFO

| Field | Detail |
|-------|--------|
| **Focus** | Cash flow accuracy, unit economics, revenue mix analysis |
| **CRITICAL Finding** | EUR 218K gap between P&L profit and actual cash at M24 (working capital for inventory) |
| **ARPU Correction** | Actual subscription ARPU is EUR 38.44, not EUR 49 |
| **Revenue Mix** | Only ~4.7% of M24 revenue from subscriptions. "This is a product commerce business, not a subscription business." |
| **Valuation Impact** | Product commerce: 2-4x revenue. Subscription: 8-15x ARR. Framing matters. |
| **Added** | Bad debt provision 0.5%, bank fees EUR 35/mo |
| **v3 Action** | Cash Flow sheet created; Unit Economics dashboard created |

### P6: Compliance Legal

| Field | Detail |
|-------|--------|
| **Focus** | GDPR compliance, insurance adequacy, regulatory setup costs |
| **Key Finding** | Insurance EUR 200/mo critically insufficient. Need EUR 650/mo. |
| **Mandatory Costs** | DSB EUR 400/mo (Art. 37 GDPR), DPIA EUR 7.5K (Art. 35), MDR EUR 7.5K, Privacy Policy EUR 5K |
| **Insurance Split** | General liability + D&O + Cyber + Product liability + Product recall |
| **Year 1 Gap** | EUR 42,760-74,900 in previously missing compliance costs |
| **v3 Action** | All items added |

### P7: HR Manager

| Field | Detail |
|-------|--------|
| **Focus** | Hiring costs, salary benchmarking, employer obligations |
| **Employer Multiplier** | 1.22x slightly low. Use 1.25x (incl. U1/U2/U3 Umlagen) |
| **CTO Salary** | EUR 78K below 25th percentile (Glassdoor EUR 80-187K range) |
| **Recruitment** | EUR 5K unrealistic. Need EUR 15-23K headhunter fee. Set at EUR 18K |
| **BG Insurance** | Was 1.5%, corrected to 0.5% for office work |
| **Onboarding** | EUR 3.5K per hire (equipment + setup) |
| **v3 Action** | Multiplier updated, recruitment corrected, onboarding added |

---

## Part 3: Growth Model

### 3.1 Revenue Streams

The model has **5 active revenue streams** + **1 free amenity** + **2 deliberately zeroed lines**:

| Stream | Type | Start | M24 Monthly Revenue | % of Total |
|--------|------|-------|---------------------|------------|
| Retail Products | Physical | M4 | ~EUR 225K | ~85% |
| Smoothie Bar | Physical | M4 | ~EUR 19K | ~7% |
| Subscriptions | Digital | M4 | ~EUR 13K | ~5% |
| Community Events | Physical | M4 | ~EUR 4.4K | ~2% |
| Doctor SaaS | Digital | M6 | ~EUR 2K | ~1% |
| LED Therapy | Free amenity | M4 | EUR 0 | 0% |
| CGM Hardware | Removed (D3) | -- | EUR 0 | 0% |
| Restaurant | Phase 2 (D2) | -- | EUR 0 | 0% |

### 3.2 Subscriber Growth Curves

```
Phase       Months    New/mo    Cumulative Subs (approx end of phase)
Pre-launch  M1-M3     0         0
Launch      M4-M6     15        ~42
Growth      M7-M9     22        ~95
Ramp        M10-M12   28        ~155
Scale 1     M13-M18   32        ~265
Scale 2     M19-M24   38        ~339
```

**Churn mechanics:** 8% monthly churn applied to previous month's total. Average subscriber lifetime: 1/0.08 = 12.5 months. Churn is the single most sensitive lever in the subscriber model.

**Tier breakdown at M24:** ~176 Core (52%), ~129 Pro (38%), ~34 Premium (10%)

### 3.3 Revenue Ramp Narrative

**Months 1-3 (Pre-Launch):**
- Zero revenue from all streams
- EUR 500K in bank, burning ~EUR 16-18K/mo on payroll, rent (co-working), insurance, compliance, app maintenance
- M1: EUR 46K CapEx deploys (GmbH, legal, DPIA, MDR, privacy, app design)
- M3: EUR 102K CapEx deploys (space buildout, kitchen, LED devices, fire safety, HACCP, EUR 50K Ablöse) + EUR 7.5K Kaution (cash outflow only)
- Cash drops to ~EUR 300-320K by end of M3 (v3.3: EUR 50K Ablöse + EUR 7.5K Kaution added)

**Month 4 (Inflection Point):**
- Space opens. App launches. Five revenue streams activate simultaneously.
- 50 retail units (EUR 2,450), 100 smoothies (EUR 967), 1 event (EUR 420), 10 free LED sessions
- Monthly costs jump: +EUR 2,500 rent, +EUR 325 Nebenkosten, +EUR 500 utilities, +EUR 300 cleaning, +EUR 120 waste, etc.
- Revenue ~EUR 4,500 vs costs ~EUR 25-30K. Still burning, but traction begins.

**Months 5-6 (Early Traction):**
- Retail: 100-150 units/mo. Smoothies: 150-250/mo.
- Partner Manager joins M6 (EUR 2,000 gross)
- Doctor SaaS starts M6 (2 clinics x EUR 99)
- Monthly revenue ~EUR 10-15K

**Months 7-12 (Growth Acceleration):**
- Retail surges: 250 -> 900 units/mo
- Free LED sessions: 50 -> 140/mo (drives smoothie attachment and retail discovery)
- Subscriber growth: 22/mo -> 28/mo
- Marketing spend: EUR 800 -> EUR 1,400/mo
- Influencer seeding begins (EUR 200/mo)
- Revenue approaches EUR 50-70K/mo by M10-11
- **Break-even approaches around M10-12** (~145 paying subscribers + EUR 10K/mo space revenue)

**Months 13-18 (Scaling & CTO Hire):**
- Retail: 1,100 -> 2,400 units/mo
- Revenue: EUR 80-150K/mo range
- Doctor clinics approach 20-cap
- SaaS stack upgrades to EUR 750/mo
- M17: EUR 18K CTO recruitment fee
- M18: CTO joins (EUR 6,500 gross = EUR 8,125 loaded) + EUR 3,500 onboarding
- Tax provision activates when cumulative P&L turns positive

**Months 19-24 (Full Team, Mature Growth):**
- Retail: 2,700 -> 4,600 units/mo (flagged as aggressive)
- Free LED sessions: 300/mo (capacity constrained)
- Smoothies: 1,550 -> 2,000/mo
- 5 events/mo x 25 attendees
- 339 subscribers, ~EUR 13K/mo subscription MRR
- Monthly revenue: ~EUR 264K
- Cumulative cash (P&L basis): ~EUR 595K
- **Actual cash (after working capital): ~EUR 377K** (EUR 218K gap)

### 3.4 Unit Economics at Maturity (M24)

| Metric | Value | Source |
|--------|-------|--------|
| Subscription ARPU | ~EUR 38.44/mo | 52/38/10 at 19/49/99 |
| Subscription LTV | ~EUR 480 | ARPU / 8% churn |
| CAC (paid ads / new subs) | ~EUR 79 | EUR 3,000 / 38 new subs |
| LTV:CAC | ~6.1x | EUR 480 / EUR 79 |
| CAC Payback | ~2.1 months | EUR 79 / EUR 38.44 |
| Retail Contribution Margin | ~42-45% | After COGS + waste + 3PL |
| Smoothie Contribution Margin | ~65% | 35% COGS rate |
| Subscription Contribution Margin | ~99% | Only EUR 0.35/user AI API |
| Subscription % of Revenue | ~4.7% | P5 critical finding |

---

## Part 4: Cross-References

### 4.1 Assumption-to-Decision Map

| Decision | Primary Assumptions Affected | Secondary Impact |
|----------|------------------------------|------------------|
| D1 (Doctor SaaS) | B31 (EUR 99), B32 (EUR 25), B33 (20 cap) | GC row 9 (clinic count), GC row 12 (new doctors delta) |
| D2 (Restaurant EUR 0) | None (hardcoded EUR 0) | Visible row only |
| D3 (CGM removed) | CGM row zeroed | B105 (DPIA), B106 (MDR) still needed for app software |
| D4 (Physical space) | B61/B62, B63, B70-B75, B109-B117 (incl. Ablöse), B118 (Kaution) | All M4+ cost triggers + M3 deposits |
| D5 (CapEx section) | B102-B119 | Depreciation formula |
| D6 (AI hybrid) | B39 (EUR 0.35), B57 (EUR 210) | COGS AI line + Management OpEx |
| D7 (Waste rates) | B36 (5.5%) | COGS waste line |
| D8 (Terra deferred) | B58-B60 (SaaS stack reduced) | -- |
| D9 (SaaS itemized) | B58 (338), B59 (500), B60 (750) | -- |
| D10 (Menu EUR 0) | None (removed line) | -- |
| D11 (COGS correction) | B22 (EUR 49), B23 (EUR 23.50) | Gross margin %, working capital, contribution margin |

### 4.2 Persona-to-Assumption Map

| Persona | Assumptions Added or Changed |
|---------|------------------------------|
| P1 | Flagged B123 (bear CAC 2x), challenged retail volume (GC row 4) |
| P2 | B45 (1.25x), B50 (KSK 4.9%), B79 (IHK), B80 (GEMA), B81 (Rundfunkbeitrag), B82 (Verpackungsgesetz), B97-B99 (tax rates) |
| P3 | B63 (Nebenkosten), B70 (utilities EUR 500), B71 (cleaning), B72 (maintenance), B73 (waste), B74 (WiFi), B109 (buildout EUR 25K), B112 (fire safety), B113 (signage) |
| P4 | B69 (product recall insurance), B78 (food safety), B114 (HACCP), B115 (hygiene training), B116 (food safety equip) |
| P5 | B41 (bad debt 0.5%), B94 (bank fees EUR 35), Cash Flow sheet (working capital model) |
| P6 | B66 (D&O), B67 (cyber), B68 (product liability), B76 (DSB EUR 400), B77 (CMP EUR 25), B105 (DPIA EUR 7.5K), B106 (MDR EUR 7.5K), B107 (Privacy Policy EUR 5K) |
| P7 | B45 (1.25x), B48 (CTO EUR 6.5K), B49 (BG 0.5%), B51 (recruitment EUR 18K), B52 (onboarding EUR 3.5K) |

### 4.3 Dependency Chains

**Chain 1: Retail Revenue -> Cash Position**
```
B22 (price) x GC row 4 (units) = Retail Revenue
  -> B23 (COGS) x units = Product Cost
  -> B36 (waste) x revenue = Waste Cost
  -> B37 (3PL) x units = Fulfillment Cost
  -> B38 (Stripe) x revenue = Payment Processing
  -> Net contribution flows to Gross Profit -> EBITDA -> Net P&L -> Cumulative Cash
  -> ALSO: Working capital = delta units x B23 x 2 months (Cash Flow sheet)
```

**Chain 2: Subscriber Model -> Multiple Lines**
```
B14-B19 (growth rates) + B8 (churn) = Total Subscribers (GC row 17)
  -> B9/B10/B11 (tier splits) = Tier breakdown (GC rows 18-20)
  -> Tier subs x B5/B6/B7 (prices) = Subscription MRR
  -> Total subs x B39 (AI API) = AI COGS
  -> Drives: ARPU, LTV, LTV:CAC, subscription % of revenue
```

**Chain 3: Physical Space -> Cost Step Function**
```
M4 trigger activates simultaneously:
  B62 (rent) + B63 (Nebenkosten) + B70 (utilities) + B71 (cleaning) +
  B72 (maintenance) + B73 (waste) + B74 (WiFi) + B75 (POS) +
  B69 (recall insurance) + B78 (food safety) + B80 (GEMA) +
  B46 x B45 (space staff)
  = ~EUR 4,600-5,000/mo cost step up at M4
```

**Chain 4: Payroll -> Total Employer Cost**
```
Each salary x B45 (1.25x multiplier) = Loaded cost
  -> Sum of all loaded costs x B49 (0.5% BG) = BG insurance
  -> GC row 11 (freelancer spend) x B50 (4.9% KSK) = KSK levy
  -> All payroll + BG + KSK = Payroll Total
  -> Part of OpEx pre-contingency -> x B93 (10%) = Contingency
```

**Chain 5: Tax Activation**
```
Net P&L (before tax) each month -> Cumulative sum
  -> IF(monthly > 0 AND cumulative > 0): Tax = monthly x B99 (30%)
  -> ELSE: Tax = 0
  -> Means: No tax until all prior losses recovered (Verlustvortrag)
```

### 4.4 Excel Sheet Reference Map

| Sheet | Rows | Color | Purpose | References |
|-------|------|-------|---------|------------|
| 1. P&L | ~183 | Amber | Master financial statement | Assumptions + Growth Curves |
| 2. Assumptions | ~123 | Sage | Control panel -- all editable parameters | -- (source of truth) |
| 3. Growth Curves | ~20 | Sage | Unit forecasts + subscriber model | Assumptions (churn, growth rates, tier splits) |
| 4. Cash Flow | ~25 | Terra | Operating/investing/financing activities | P&L (EBITDA, CapEx, tax) + Growth Curves (retail units) + Assumptions (COGS) |
| 5. Unit Economics | ~25 | Rose | LTV, CAC, contribution margins, revenue mix | P&L (revenue, COGS rows) + Growth Curves (subs, marketing) + Assumptions (churn) |
| 6. Scenarios | ~15 | Stone | Base/Bull/Bear comparison | P&L totals + Assumptions (multipliers) |
| 7. Decisions | ~30 | Terra | D1-D11 log + P1-P7 audit results | Reference only (no formulas) |

---

## Part 5: Validation Notes

This section documents the cross-validation performed against the Python source code (`build_excel_pnl_v3.py`), the Explanation Guide, and the Decisions Recap.

### 5.1 Assumptions Verification

**Total count:** 125 parameters confirmed (v3.3: +Ablöse B117, +Kaution B118).
- 99 explicitly on the Assumptions sheet (B5-B123)
- 24 implicit (Growth Curves hardcoded data, model logic constants)

**Value verification (spot-checked against Python code):**

| Cell | Expected | Code Value | Status |
|------|----------|------------|--------|
| B5 | 19 | 19 | CONFIRMED |
| B8 | 0.08 | 0.08 | CONFIRMED |
| B14 | 0 | 0 | CONFIRMED (v3.1: subs gated to M4+) |
| B22 | 49 | 49 | CONFIRMED |
| B23 | 23.50 | 23.50 | CONFIRMED (D11 correction) |
| B24 | 0 | 0 | CONFIRMED (v3.2: LED free) |
| B25 | 0 | 0 | CONFIRMED (v3.2: no practitioner) |
| B26 | 9.67 | 9.67 | CONFIRMED |
| B45 | 1.25 | 1.25 | CONFIRMED (P2/P7 correction from 1.22) |
| B48 | 6500 | 6500 | CONFIRMED |
| B49 | 0.005 | 0.005 | CONFIRMED (P7 correction from 1.5%) |
| B51 | 18000 | 18000 | CONFIRMED (P7 correction from 5K) |
| B62 | 2500 | 2500 | CONFIRMED |
| B63 | 325 | 325 | CONFIRMED (P3 addition) |
| B76 | 400 | 400 | CONFIRMED (P6 DSB mandatory) |
| B93 | 0.10 | 0.10 | CONFIRMED |
| B97 | 0.1435 | 0.1435 | CONFIRMED (P2) |
| B99 | 0.30 | 0.30 | CONFIRMED |
| B102 | 2500 | 2500 | CONFIRMED |
| B105 | 7500 | 7500 | CONFIRMED (P6 DPIA) |
| B108 | 15000 | 15000 | CONFIRMED (v3.1: UX/UI capitalized) |
| B109 | 25000 | 25000 | CONFIRMED (P3: was 15K) |
| B117 | 50000 | 50000 | CONFIRMED (v3.3: Ablöse — key money) |
| B118 | 7500 | 7500 | CONFIRMED (v3.3: Kaution — Cash Flow only) |
| B119 | 36 | 36 | CONFIRMED (was B117, shifted +2 for Ablöse/Kaution) |

All values match the Python source code exactly.

### 5.2 Decision Verification

| Decision | Captured | Correct | Notes |
|----------|----------|---------|-------|
| D1 Doctor SaaS | Yes | Yes | StGB 299a/299b, EUR 99/mo, Doctolib precedent |
| D2 Restaurant EUR 0 | Yes | Yes | Phase 2 only |
| D3 CGM Removed | Yes | Yes | Greyed-out row confirmed in code (CGM_GREY style) |
| D4 Physical Space | Yes | Yes | Multi-stream activation at M4 |
| D5 CapEx Added | Yes | Yes | 16 items confirmed (v3.3: +Ablöse) |
| D6 AI Hybrid | Yes | Yes | EUR 0.35 user-facing + EUR 210 internal |
| D7 Waste Rates | Yes | Yes | 5.5% blended |
| D8 Terra Deferred | Yes | Yes | Not in SaaS stack |
| D9 SaaS Itemized | Yes | Yes | 338/500/750 three phases |
| D10 Menu EUR 0 | Yes | Yes | Removed entirely |
| D11 COGS Correction | Yes | Yes | EUR 23.50 from EUR 11.50 |

### 5.3 v3.1 and v3.2 Corrections Verified

| Correction | Status | Evidence in Code |
|------------|--------|------------------|
| Growth Marketer removed | CONFIRMED | No Growth Marketer row in payroll section. Payroll has: Timu, Daria, Space Staff, Partner Mgr, CTO, BG Insurance, KSK Levy |
| Subscribers gated to M4+ | CONFIRMED | B14 = 0 with note "Pre-launch -- no app yet" |
| UX/UI moved to CapEx | CONFIRMED | B108 = EUR 15,000 "CapEx: UX/UI capitalized". No UX/UI in R&D OpEx (only App Maintenance EUR 1,500/mo) |
| B19 note updated | CONFIRMED | "Scaling phase" (not "Growth marketer effect") |
| LED price = 0 | CONFIRMED | B24 = 0 "Free with smoothie purchase" |
| LED practitioner = 0 | CONFIRMED | B25 = 0 "Self-service -- no practitioner" |
| LED COGS label updated | CONFIRMED | "LED COGS (free -- no practitioner)" |

### 5.4 Structural Verification

| Check | Expected | Actual | Status |
|-------|----------|--------|--------|
| Sheets in workbook | 7 | 7 (P&L, Assumptions, Growth Curves, Cash Flow, Unit Economics, Scenarios, Decisions) | CONFIRMED |
| P&L rows | 183 | ROW variable ends at 183 (Break-Even Indicators section). Includes Profitability Bridge (~9 rows), EBIT + EBIT Margin (2 rows), Break-Even Indicators (6 rows) added in v3.3. | CONFIRMED (v3.3) |
| CapEx items | 16 | 16 confirmed in code (GmbH through Ablöse) | CONFIRMED (v3.3) |
| Total CapEx | ~EUR 148K | 46,000 (M1) + 102,360 (M3 incl. EUR 50K Ablöse) = 148,360 | CONFIRMED (v3.3) |
| COGS lines | 11 | Product cost, Waste, 3PL, LED COGS, Smoothie ingredients, Events, Doctor verification, AI API, Refund reserve, Bad debt, Stripe | CONFIRMED (11 lines) |
| G&A lines | 23 | Rent, Nebenkosten, Steuerberater, 5x Insurance, Utilities, Cleaning, Maintenance reserve, Waste disposal, WiFi, POS, DSB, CMP, Food safety, IHK, GEMA, Rundfunkbeitrag, Verpackungsgesetz, Bank fees, Permits | CONFIRMED (23 lines) |
| Payroll lines | 7 | Timu, Daria, Space Staff, Partner Mgr, CTO, BG Insurance, KSK Levy | CONFIRMED (7 lines) |
| Tax provision formula | Correct | `IF(AND(monthly>0, cumulative>0), ROUND(monthly*30%, 0), 0)` | CONFIRMED |
| Depreciation formula | Correct | M1-2: M1 items only / 36. M3+: (M1 + M3 items) / 36 | CONFIRMED |
| Working capital formula | Correct | `-ROUND(MAX(0, (current units - prev units) x COGS x 2), 0)` | CONFIRMED |

### 5.5 Discrepancies Found and Resolved

| # | Issue | Resolution |
|---|-------|------------|
| 1 | CapEx total updated in v3.3 | v3.3 Decisions sheet row D5 now shows "EUR ~148K total". All docs aligned. Previous inconsistency (EUR 83K vs 98K) resolved. |
| 2 | D4 in Decisions sheet says "EUR 2,825/mo (rent+Nebenkosten)" but actual rent+Nebenkosten = EUR 2,500 + EUR 325 = EUR 2,825 | Consistent. CONFIRMED. |
| 3 | D9 in the recap shows "Phase 1 EUR 50/mo, Phase 3 EUR 550/mo" but Assumptions show EUR 338/EUR 500/EUR 750 | The recap R8 summary uses the early research figures. The final Assumptions sheet has the corrected values. **Use Assumptions sheet values (EUR 338/500/750) as definitive.** |
| 4 | Explanation Guide says "M24 revenue ~EUR 264K" (post-LED-free). Recap v3.2 section says "M24 monthly revenue drops from ~EUR 277K to ~EUR 264K". | Consistent across sources. CONFIRMED. |
| 5 | v3.1 note says "Cell map renumbered: 2 assumption rows removed (B48 Growth Marketer, B57 UX/UI), 1 added (B108 App Design)." | Verified: current code shows CTO at B48 (was B49 before Growth Marketer removal), Claude Max at B57 (was B58 before UX/UI removal). All references correctly shifted. CONFIRMED. |

### 5.6 Gaps Identified and Filled

| # | Gap | Status | Notes |
|---|-----|--------|-------|
| 1 | Implicit assumptions not listed anywhere | FILLED | Added A109-A123 in Part 1 covering funding amount, permits, working capital pipeline, tax logic, scenario constraints, hiring triggers |
| 2 | Growth Curves data not counted as assumptions | FILLED | Added A100-A108 covering all 8 hardcoded unit forecast rows |
| 3 | v3.1/v3.2 implicit decisions not formally documented | FILLED | Added implicit decisions table in Part 2 |
| 4 | Cross-reference map missing | FILLED | Part 4 provides assumption-decision, persona-assumption, and dependency chain maps |
| 5 | No single source for total CapEx breakdown | FILLED | Part 1.10 provides M1 total (EUR 46K) and M3 total (EUR 102.36K incl. Ablöse) with grand total EUR 148.36K |

---

## Part 6: Risk Register

### 6.1 Critical Risks (Immediate Investor Concern)

| # | Risk | Severity | Source | Mitigation | Assumptions Affected |
|---|------|----------|--------|------------|---------------------|
| R1 | **Retail volume at M24 (4,600 units/mo) is extremely aggressive** for a single-location startup with 339 subscribers. Implies 92.6% of retail sales from non-subscribers (walk-in, e-commerce, B2B). | **CRITICAL** | P1, P5 | Need clear channel breakdown justification. Consider e-commerce launch timeline, B2B wholesale partnerships, walk-in traffic projections based on Berlin foot traffic data. | GC row 4 |
| R2 | **EUR 500K may be insufficient.** Bear case (0.6x revenue) + working capital (~EUR 218K) could push actual cash toward zero. | **CRITICAL** | P1, P5 | P1 recommended EUR 600-650K raise. Model still uses EUR 500K. Cash Flow sheet shows true position. | A109 (funding), B121 (bear multiplier) |
| R3 | **Working capital gap of ~EUR 218K.** P&L profit does not equal cash in bank. Inventory pipeline of 2 months of expected sales ties up significant capital as retail volume grows. | **CRITICAL** | P5 | Cash Flow sheet models this explicitly. Investors must understand P&L cash != actual cash. Could negotiate Net 30-60 supplier terms to reduce pipeline. | A111 (2-month pipeline), B23 (COGS) |
| R4 | **Subscription revenue is only ~4.7% of total.** Business is economically product commerce, not subscription. Valuation methodology should be 2-4x revenue, not 8-15x ARR. | **HIGH** | P5 | Frame subscription as retention and data engine powering product recommendations. Do not pitch as subscription business to investors expecting SaaS multiples. | B5-B11 (subscription model) |

### 6.2 High Risks (Model Sensitivity)

| # | Risk | Severity | Source | Mitigation | Assumptions Affected |
|---|------|----------|--------|------------|---------------------|
| R5 | **Churn rate sensitivity.** 8% monthly churn is locked but highly sensitive. Drop to 6% = LTV increases 33%. Rise to 10% = LTV drops 20%. | HIGH | Locked data | Monitor closely post-launch. Consider quarterly cohort analysis. | B8 |
| R6 | **CTO salary below market.** EUR 78K is below 25th percentile (Glassdoor EUR 80-187K). May not attract qualified candidates. | HIGH | P7 | May need to raise to EUR 80K+ or offer significant equity. Budget impact: +EUR 200+/mo from M18. | B48 |
| R7 | **CAC underestimated.** EUR 40 blended CAC vs industry EUR 70-120 for health/wellness apps. | HIGH | P1 | LTV:CAC ratio should be presented conservatively (5.1x, not 14.7x). Bear case uses 2x CAC multiplier. | GC row 10, B123 |
| R8 | **Retail COGS at EUR 23.50 assumes 52% margin.** If wholesale terms worsen or premium brands demand higher minimums, margin could compress to 45%. | HIGH | R10, D11 | Diversify supplier base. Negotiate volume discounts as scale increases. | B23 |

### 6.3 Medium Risks (Operational)

| # | Risk | Severity | Source | Mitigation | Assumptions Affected |
|---|------|----------|--------|------------|---------------------|
| R9 | **NMN regulatory risk.** NMN is NOT approved as EU Novel Food. If stocked, could trigger product recall and regulatory action. | Medium | P4, R10 | DO NOT include NMN products in retail inventory. Clear product selection guidelines. | Product curation (not modeled) |
| R10 | **Physical space buildout cost overrun.** EUR 25K may be insufficient for Berlin commercial renovation (P3 suggested EUR 25-35K). | Medium | P3 | B109 can be increased. Current value is conservative end of P3's range. 10% contingency buffer partially covers this. | B109 |
| R11 | **Employer cost multiplier sensitivity.** 1.25x applied to every salary. If actual costs are 1.28x (possible with higher Umlagen), total payroll increases by ~EUR 500/mo at M18+. | Medium | P2, P7 | Monitor actual AG costs after first payroll run. Adjust B45 accordingly. | B45 |
| R12 | **LED therapy as free amenity may not drive sufficient foot traffic.** Model assumes free LED increases smoothie and retail sales, but this is untested. | Medium | v3.2 | Track LED usage -> smoothie conversion rate. If attachment rate is low, consider nominal fee (EUR 5-10/session) as a revenue line. | B24, B25 |

### 6.4 Low Risks (Manageable)

| # | Risk | Severity | Source | Mitigation |
|---|------|----------|--------|------------|
| R13 | Insurance costs may increase as claims history develops | Low | P6 | Budget includes 10% contingency |
| R14 | GEMA/IHK/Rundfunkbeitrag rates may change | Low | P2 | Trivial impact (EUR 6-31/mo each) |
| R15 | SaaS stack costs may increase with feature needs | Low | D9 | Three-phase approach accommodates growth |
| R16 | AI API costs may shift with model pricing changes | Low | D6/R9 | EUR 0.35/user includes 20% buffer. Total is ~EUR 119/mo at M24 -- negligible |
| R17 | Smoothie COGS may exceed 35% | Low | R2 | Seasonality of ingredient costs. Monitor monthly. |

---

## Appendix: Source Map

### Research Documents

| Code | Title | Key Assumption Validated | File Location |
|------|-------|--------------------------|---------------|
| R1 | CGM Software-Only Model | BYOD via Dexcom OAuth 2.0; EUR 30K regulatory cost | Internal research |
| R2 | Cost Analysis -- Smoothie Bar | EUR 9.67 avg price, 65% margin, break-even 45/day | Internal research |
| R3 | HWG Legal -- Doctor Revenue | Commission illegal (StGB 299a/299b), SaaS EUR 99/mo safe | Internal research |
| R4 | Restaurant Feature | Feature-only Phase 1, zero revenue | Internal research |
| R5 | Claude AI Costs | EUR 0.40-0.70/user/mo internal; EUR 210/mo team | Internal research |
| R6 | UX Design Budget | EUR 5K-3K/mo range; capitalized at EUR 15K in v3.1 | Internal research |
| R7 | Product Waste Rates | Capsules 4%, powders 7%, blended 5.5% | Internal research |
| R8 | Software License Stack | PostHog free, Crisp $95/mo, Terra deferred | Internal research |
| R9 | AI API Comparison | Hybrid Claude+Gemini at EUR 0.35/user/mo; GDPR via Vertex AI Frankfurt | `/pitchbook/research/R9-ai-api-comparison.md` |
| R10 | Retail Brands Wholesale | EUR 49 price validated, COGS EUR 23.50; NMN not EU approved | `/pitchbook/research/R10-retail-brands-wholesale.md` |

### Persona Audits

| Code | Persona | Focus Area | v3 Impact |
|------|---------|------------|-----------|
| P1 | Angel Investor | Model credibility, CAC, funding | Identified EUR 113-236K missing costs; flagged retail volume |
| P2 | Steuerberater | German tax, regulatory fees | Added tax provision, IHK, GEMA, Rundfunkbeitrag, Verpackungsgesetz, KSK |
| P3 | Operations Manager | Space ops, buildout, utilities | Nebenkosten, utilities, waste, WiFi, maintenance, buildout EUR 25K |
| P4 | Food Safety Inspector | HACCP, food regulations | HACCP plan, hygiene training, food safety equipment, NMN warning |
| P5 | Growth CFO | Cash flow, unit economics | Cash Flow sheet, working capital model, bad debt, bank fees |
| P6 | Compliance Legal | GDPR, insurance, regulatory setup | DSB, DPIA, MDR, insurance split 5-way, CMP, Privacy Policy |
| P7 | HR Manager | Hiring, salary benchmarks | Employer multiplier 1.25x, CTO recruitment EUR 18K, BG 0.5%, onboarding |

### Locked Data Sources

| Claim | Value | Source |
|-------|-------|--------|
| Global wellness market | $6.3 trillion | GWI 2024 |
| German wellness market growth | 3.3% CAGR | Industry data |
| Germany prevention spending | 4.8% of health expenditure | Government data |
| Berlin purchasing power index | 92.4 | GfK |
| Berlin tech worker median salary | EUR 75,000 gross | Market data |
| Germans willing to pay OOP for apps | 27% | SpringerMedizin |
| EU consumers share health data | 8% | BEUC |
| Competitive window | 12-18 months | Market analysis |
| Health app Day 3 churn | 77% | Industry benchmark |
| Health app 90-day cancellation | 44% | Industry benchmark |
| Oura valuation | $11B, 5.5M rings sold | Public data |
| Hims revenue | $2.3B, 2.5M subscribers | Public data |
| ZOE | ~$100M revenue, 300K microbiome profiles | Public data |
| AG1 | $600M revenue, profitable | Public data |
| Failed health/nutrition startups | $1.4B+ total | Graveyard analysis |

### Model Version History

| Version | Date | Key Changes |
|---------|------|-------------|
| v1 | 2026-02-22 | Initial hardcoded Python-computed model. COGS corrected to EUR 23.50 |
| v2 | 2026-02-23 | Formula-based Excel. Assumptions sheet + Growth Curves. 4 sheets. 11 new lines from persona brainstorm |
| v3 | 2026-02-23 | All 7 persona audits incorporated. 7 sheets. 165 P&L rows. ~30 new/updated line items |
| v3.1 | 2026-02-24 | Timu corrections: Growth Marketer removed, subs gated M4+, UX/UI -> CapEx EUR 15K, "Potions" -> "Retail Products" |
| v3.2 | 2026-02-24 | LED therapy -> free with smoothie (B24=0, B25=0). No longer a revenue stream. Self-service, no practitioner |
| v3.3 | 2026-02-24 | Ablöse EUR 50K (B117, M3 CapEx) + Kaution EUR 7.5K (B118, Cash Flow only). CapEx EUR 98K -> EUR 148K. Cell shifts: depreciation B117->B119, scenarios B119-B123->B121-B125. Profitability Bridge section (Income -> COGS -> GP -> EBITDA with margins). EBIT + EBIT Margin rows after depreciation. Break-Even Indicators section (EBITDA/Net P&L/Cash flags + break-even months). P&L rows 165 -> 183 |

---

*This document was cross-validated against the Python source code (`build_excel_pnl_v3.py`), the P&L Explanation Guide (`PNL_EXPLANATION_GUIDE.md`), and the Decisions Recap (`PNL_DECISIONS_RECAP.md`). All v3.3 corrections (Ablöse + Kaution) confirmed.*
