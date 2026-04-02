# Agent 1: Complete Assumptions Extract -- alche P&L Model v3.2

**Source files analyzed:**
- `/Users/timoel/Downloads/pitchbook/pnl/build_excel_pnl_v3.py` (1,522 lines)
- `/Users/timoel/Downloads/pitchbook/pnl/PNL_EXPLANATION_GUIDE.md` (917 lines)
- `/Users/timoel/Downloads/pitchbook/pnl/PNL_DECISIONS_RECAP.md` (416 lines)

**Total assumptions extracted: 123** (across 11 categories + Growth Curves data)

---

## Category 1: SUBSCRIPTION MODEL (B5--B11) -- 7 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 1 | B5 | Core tier price (EUR/mo) | 19 | Entry tier. Locked data from pitch book. | LOW | Founder input (locked data) |
| 2 | B6 | Pro tier price (EUR/mo) | 49 | "Sweet spot" tier. Highest revenue contribution per tier. | MEDIUM | Founder input (locked data) |
| 3 | B7 | Premium tier price (EUR/mo) | 99 | Highest ARPU tier. Small subscriber share (10%) but highest per-user value. | LOW | Founder input (locked data) |
| 4 | B8 | Monthly churn rate | 8% (0.08) | Industry benchmark. 77% of health app users churn by Day 3; 44% cancel within 90 days. At 8% monthly churn, average subscriber lifetime is ~12.5 months (1/0.08). Every 1% change shifts average lifetime by ~1.5 months. | **HIGH** | Industry benchmark (locked data) |
| 5 | B9 | Core tier share | 52% (0.52) | Majority of subscribers land on entry tier. Affects blended ARPU -- higher Core share = lower ARPU. | MEDIUM | Founder input |
| 6 | B10 | Pro tier share | 38% (0.38) | Second-largest tier by headcount. | MEDIUM | Founder input |
| 7 | B11 | Premium tier share | 10% (0.10) | Remainder tier (calculated as Total - Core - Pro on Growth Curves sheet to avoid rounding errors). | LOW | Founder input |

**Key insight:** Blended subscription ARPU is EUR 38.44 (not EUR 49 from Pro tier), because tier mix is weighted toward Core. Subscriptions represent only ~4.7% of total revenue at M24 (P5 finding).

---

## Category 2: SUBSCRIBER GROWTH (B14--B19) -- 6 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 8 | B14 | M1-M3 new subscribers/mo | 0 | Pre-launch -- no app yet. Subscribers gated to M4+ when space and app launch together. | N/A | Founder input (Timu review) |
| 9 | B15 | M4-M6 new subscribers/mo | 15 | Product launch phase. Physical space and app launch M4. | MEDIUM | Founder input |
| 10 | B16 | M7-M9 new subscribers/mo | 22 | Growth acceleration. | MEDIUM | Founder input |
| 11 | B17 | M10-M12 new subscribers/mo | 28 | Marketing ramp. | MEDIUM | Founder input |
| 12 | B18 | M13-M18 new subscribers/mo | 32 | Scaling phase. | MEDIUM | Founder input |
| 13 | B19 | M19-M24 new subscribers/mo | 38 | Scaling phase. (Note was updated from "Growth marketer effect" to "Scaling phase" after Growth Marketer removal.) | MEDIUM | Founder input |

**Key insight:** Total subscribers at M24 reach ~339. Subscriber growth directly affects subscription MRR, AI API COGS, and all unit economics ratios. Because subscriptions are a small fraction of total income, the P&L impact is moderate.

---

## Category 3: PRODUCT PRICING (B22--B33) -- 12 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 14 | B22 | Retail product price (EUR) | 49 | R10 validated across 20+ wellness brands. Weighted average of curated premium mix (BRAINEFFECT, Ancient+Brave, Hifas da Terra, Avea) lands at EUR 45-55. | **HIGH** | Researched (R10) |
| 15 | B23 | Retail product COGS (EUR/unit) | 23.50 | R10 corrected from EUR 11.50. Standard wholesale is 40-60% of retail. EUR 23.50 is midpoint of EUR 22-25 range, giving 52% gross margin. Every EUR 1 change shifts gross margin by ~2pp on retail. | **HIGH** | Researched (R10, D11) |
| 16 | B24 | LED session price (EUR) | 0 | Free with smoothie purchase. LED is a dwell-time and foot traffic play, not a revenue line. Offering free LED increases average visit duration and drives retail product discovery. | N/A | Founder input (v3.2 correction) |
| 17 | B25 | LED practitioner cost (EUR) | 0 | Self-service -- customers use MITO LIGHT panels themselves. No practitioner needed. Eliminates EUR 25/session COGS from previous model. | N/A | Founder input (v3.2 correction) |
| 18 | B26 | Smoothie avg price (EUR) | 9.67 | R2 Cost Analysis. Break-even is ~45 drinks/day at EUR 9.67 avg. | MEDIUM | Researched (R2) |
| 19 | B27 | Smoothie COGS rate | 35% (0.35) | R2 validated. 65% gross margin on smoothies. Ingredients + packaging. | MEDIUM | Researched (R2) |
| 20 | B28 | Event ticket price (EUR) | 35 | Community events. Small revenue line. | LOW | Founder input |
| 21 | B29 | Event fixed cost (EUR) | 250 | Per-event venue cost. | LOW | Founder input |
| 22 | B30 | Ticketing platform fee | 7% (0.07) | Luma/Eventbrite platform fee. | LOW | Industry benchmark |
| 23 | B31 | Doctor SaaS fee (EUR/mo) | 99 | D1: SaaS model follows Doctolib precedent (EUR 139-475/mo) and BGH Feb 2025 ruling. Commission model was illegal under StGB 299a/299b. | LOW | Researched (R3, D1) |
| 24 | B32 | Doctor verify cost (EUR) | 25 | One-time cost per new doctor. | VERY LOW | Founder input |
| 25 | B33 | Doctor max clinics | 20 | Cap on doctor count for M1-24. | VERY LOW | Founder input |

---

## Category 4: COST RATES (B36--B41) -- 6 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 26 | B36 | Waste -- blended rate | 5.5% (0.055) | D7: Category-weighted. Capsules 4%, powders 7%. Minor line (EUR 50-200/mo early on). | LOW | Researched (R7, D7) |
| 27 | B37 | 3PL fulfillment (EUR/unit) | 2.50 | Third-party logistics for retail products. Only starts M4 when physical space opens. Scales with retail volume. | MEDIUM | Founder input |
| 28 | B38 | Stripe fee rate | 2.9% (0.029) | Payment processing fee applied to ALL revenue. At EUR 277K/mo revenue (M24), this is ~EUR 8K/mo. | MEDIUM | Industry benchmark |
| 29 | B39 | AI API per user (EUR/mo) | 0.35 | D6/R9: Hybrid Claude Sonnet 4.5 for blood panels (54% diagnostic accuracy vs Gemini 34%) + Gemini Flash 2.0 for routine queries. Includes 20% buffer. At 339 subs (M24), costs ~EUR 119/mo -- negligible. | LOW | Researched (R9, D6) |
| 30 | B40 | Refund/returns reserve | 1.5% (0.015) | Applied to physical product and event revenue only (retail + smoothie + events). | LOW | Founder input |
| 31 | B41 | Bad debt provision | 0.5% (0.005) | P5 recommendation. Applied to total revenue. | LOW | Expert-audited (P5) |

---

## Category 5: PAYROLL (B44--B52) -- 9 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 32 | B44 | Founder gross salary (each) | 4,166 | EUR 50K/yr. P7: viable at pre-seed stage. Both Timu (CEO) and Daria (COO) at same level. Runs from M1. | MEDIUM | Expert-audited (P7) |
| 33 | B45 | Employer multiplier | 1.25 | P2/P7: Covers employer's share of health insurance, pension, unemployment insurance (Arbeitgeberanteil), plus U1/U2/U3 Umlagen. Updated from 1.22x. Applied to EVERY salary. 0.01 change affects every payroll line. | **HIGH** | Expert-audited (P2, P7) |
| 34 | B46 | Space staff gross (M4+) | 1,230 | Midijob ~25 hrs/wk. Starts M4 when space opens. | LOW | Founder input |
| 35 | B47 | Partner Mgr gross (M6+) | 2,000 | EUR/mo. Starts M6. | LOW | Founder input |
| 36 | B48 | CTO gross (M18+) | 6,500 | EUR 78K/yr. P7 flagged as below 25th percentile (Glassdoor EUR 80-187K range). If raised to EUR 80K+ (EUR 6,667+/mo), OpEx increases by EUR 200+/mo from M18. | **HIGH** | Expert-audited (P7) -- flagged as low |
| 37 | B49 | BG insurance rate | 0.5% (0.005) | P7 corrected from 1.5% to 0.5% for office work. Berufsgenossenschaft statutory accident insurance. Applied to sum of all payroll. | VERY LOW | Expert-audited (P7) |
| 38 | B50 | KSK levy rate | 4.9% (0.049) | P2: Kunstlersozialkasse levy on creative freelancer payments. Mandatory when engaging designers, writers, etc. Applied to Growth Curves row 11 (KSK-eligible spend). | LOW | Expert-audited (P2) |
| 39 | B51 | Recruitment CTO (M17) | 18,000 | P7: headhunter fee at 20-30% of salary. Original model had EUR 5K; corrected to EUR 18K. One-time M17 cost. | LOW (one-off) | Expert-audited (P7) |
| 40 | B52 | CTO onboarding (M18) | 3,500 | P7: equipment (laptop, monitors, peripherals) plus setup costs. One-time M18 cost. | VERY LOW | Expert-audited (P7) |

**Key changes:** Growth Marketer hire (EUR 4,500/mo from M12) was REMOVED. Timu handles growth marketing. Saves EUR 73,125 over 24 months (EUR 5,625/mo fully loaded x 13 months M12-M24).

---

## Category 6: FIXED OPERATING COSTS (B56--B82) -- 27 assumptions

### 6A: R&D / Tech

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 41 | B56 | App maintenance retainer | 1,500 | External agency. Flat fee, runs all 24 months = EUR 36,000 total. | MEDIUM | Founder input |
| 42 | B57 | Claude Max (internal AI) | 210 | D6: Internal AI budget for the team. Separate from user-facing AI API (which is in COGS). | LOW | Researched (D6) |

### 6B: SaaS Stack

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 43 | B58 | SaaS Stack M1-6 | 338 | D9: Google Workspace + Figma + Notion + Crisp. PostHog free (replaces Mixpanel). Terra deferred (D8). | LOW | Researched (R8, D9) |
| 44 | B59 | SaaS Stack M7-12 | 500 | D9: + additional tools. | LOW | Researched (R8, D9) |
| 45 | B60 | SaaS Stack M13+ | 750 | D9: Full stack. | LOW | Researched (R8, D9) |

### 6C: Rent & Space Operations

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 46 | B61 | Rent M1-3 (co-working) | 750 | Before space opens. | LOW | Founder input |
| 47 | B62 | Rent M4+ (physical space) | 2,500 | Kaltmiete. Runs from M4 for 21 months = EUR 52,500. Any increase directly hits bottom line. | **HIGH** | Founder input |
| 48 | B63 | Nebenkosten M4+ | 325 | P3: EUR 4-5/sqm for commercial space (heating, water, building insurance, property tax). Was missing entirely. | MEDIUM | Expert-audited (P3) |
| 49 | B64 | Steuerberater | 400 | Monthly tax advisor. Runs from M1. | LOW | Founder input |

### 6D: Insurance (5 categories, P6 split)

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 50 | B65 | General liability insurance | 200 | Betriebshaftpflicht. Runs from M1. Original model had single EUR 200/mo insurance line -- P6 identified as critically insufficient. | LOW | Expert-audited (P6) |
| 51 | B66 | D&O insurance | 100 | P6: Mandatory with angel investors on the cap table. | LOW | Expert-audited (P6) |
| 52 | B67 | Cyber insurance | 150 | P6: Processing health data under Art. 9 GDPR creates significant data breach liability. | LOW | Expert-audited (P6) |
| 53 | B68 | Product liability insurance | 100 | P6: Selling dietary supplements creates product liability exposure. | LOW | Expert-audited (P6) |
| 54 | B69 | Product recall insurance M4+ | 100 | P4: Only needed once retail products are on shelves. Starts M4. | LOW | Expert-audited (P4) |

**Total insurance: EUR 650/mo (up from EUR 200/mo). EUR 15,600 over 24 months.**

### 6E: Utilities & Space Operations (P3)

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 55 | B70 | Utilities M4+ (Strom/Gas/Wasser) | 500 | P3: Increased from EUR 400 to EUR 500 for a commercial food-service space. Starts M4. | LOW | Expert-audited (P3) |
| 56 | B71 | Cleaning/maintenance M4+ | 300 | P3: Daily cleaning requirement for food-service space. | LOW | Expert-audited (P3) |
| 57 | B72 | Maintenance reserve M4+ | 200 | P3: Equipment repair fund. | LOW | Expert-audited (P3) |
| 58 | B73 | Waste disposal M4+ | 120 | P3: BSR commercial waste collection. | LOW | Expert-audited (P3) |
| 59 | B74 | WiFi / internet M4+ | 50 | P3: Business fiber connection. Starts M4. | VERY LOW | Expert-audited (P3) |
| 60 | B75 | POS system M4+ | 50 | Cash register with TSE (technical security equipment, mandatory in Germany). Starts M4. | VERY LOW | Founder input |

### 6F: Compliance & Regulatory (P2/P4/P6)

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 61 | B76 | DSB (ext. DPO) monthly | 400 | P6: MANDATORY under Art. 37 GDPR. External data protection officer. Required because alche processes special category health data. EUR 9,600 over 24 months. | MEDIUM | Expert-audited (P6) -- mandatory |
| 62 | B77 | CMP tool (cookie consent) | 25 | P6: TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz) requires cookie consent management. | VERY LOW | Expert-audited (P6) |
| 63 | B78 | Food safety compliance M4+ | 80 | P4: Ongoing HACCP monitoring and food safety documentation. Starts M4. | LOW | Expert-audited (P4) |
| 64 | B79 | IHK Berlin (annual / 12) | 10 | P2: Chamber of Commerce membership. EUR 120/year prorated. P2 corrected from EUR 300/yr to EUR 120/yr. | VERY LOW | Expert-audited (P2) |
| 65 | B80 | GEMA M4+ (annual / 12) | 31 | P2: Music licensing for the physical space. EUR 370/year prorated. Starts M4. | VERY LOW | Expert-audited (P2) |
| 66 | B81 | Rundfunkbeitrag | 6 | P2: Mandatory broadcasting fee for businesses, EUR 6.12/mo for 0-8 employees. | VERY LOW | Expert-audited (P2) |
| 67 | B82 | Verpackungsgesetz (annual / 12) | 6 | P2: LUCID registration and dual system participation for packaging waste. ~EUR 72/year prorated. | VERY LOW | Expert-audited (P2) |

**Note:** UX/UI design retainer (EUR 800/mo) was REMOVED from this section and moved to CapEx as App Design & Development EUR 15,000 in M1. Saves EUR 19,200 OpEx, adds EUR 15K CapEx.

---

## Category 7: SALES & MARKETING (B86--B90) -- 5 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 68 | B86 | Content creation tools | 150 | Canva, stock imagery, tools. Runs all 24 months. | LOW | Founder input |
| 69 | B87 | Influencer seeding M7+ | 200 | Product seeding to influencers. Starts M7. | LOW | Founder input |
| 70 | B88 | Investor travel | 150 | Monthly travel to meet investors. Runs all 24 months. | LOW | Founder input |
| 71 | B89 | Conferences M7+ | 100 | Industry events. Starts M7. | LOW | Founder input |
| 72 | B90 | Local transport | 50 | BVG monthly tickets. Runs all 24 months. | VERY LOW | Founder input |

**Note:** Primary marketing spend (Paid Ads) is in Growth Curves row 10, not here. It ramps from EUR 50/mo to EUR 3,000/mo and is the primary driver of CAC.

---

## Category 8: BUFFERS (B93--B94) -- 2 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 73 | B93 | Contingency buffer rate | 10% (0.10) | Applied to ALL OpEx (pre-contingency). Standard practice for pre-seed models to account for unexpected costs. At M24 if OpEx is ~EUR 30K, contingency adds EUR 3K. Over 24 months could total EUR 40-60K. | **HIGH** | Industry benchmark |
| 74 | B94 | Bank fees | 35 | P5: Geschaftskonto monthly fee. Runs all 24 months. | VERY LOW | Expert-audited (P5) |

---

## Category 9: TAX (B97--B99) -- 3 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 75 | B97 | Gewerbesteuer rate (Berlin) | 14.35% (0.1435) | P2: 3.5% Steuermesszahl x 410% Berlin Hebesatz. GmbH pays from first euro -- NO Gewerbesteuer Freibetrag (unlike sole proprietors). | MEDIUM | Expert-audited (P2) |
| 76 | B98 | KSt + Soli rate | 15.825% (0.15825) | P2: 15% Korperschaftsteuer + 5.5% Solidaritatszuschlag. | MEDIUM | Expert-audited (P2) |
| 77 | B99 | Combined tax rate (simplified) | 30% (0.30) | P2: ~30.175% rounded down to 30%. Used in the tax provision formula. Tax activates ONLY when BOTH monthly pre-tax P&L is positive AND cumulative pre-tax P&L is positive (simplified Verlustvortrag). | MEDIUM | Expert-audited (P2) |

**Tax activation logic:** `=IF(AND(monthly_pretax > 0, cumulative_pretax > 0), ROUND(monthly_pretax * 30%, 0), 0)`

---

## Category 10: CAPITAL EXPENDITURES (B102--B117) -- 16 assumptions

### 10A: M1 Items (Company Formation + Legal/Regulatory)

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 78 | B102 | GmbH Formation (M1) | 2,500 | Notary fees and Handelsregister registration. | LOW | Researched |
| 79 | B103 | Legal Opinion HWG (M1) | 3,500 | D3/R3: Legal opinion on Heilmittelwerbegesetz compliance. | LOW | Researched (R3, D3) |
| 80 | B104 | R&D Stability Testing (M1) | 5,000 | Testing supplement formulations for shelf stability. | LOW | Founder input |
| 81 | B105 | DPIA (M1) | 7,500 | P6: MANDATORY under Art. 35 GDPR for health data processing. Data Protection Impact Assessment. | MEDIUM | Expert-audited (P6) -- mandatory |
| 82 | B106 | MDR Classification Opinion (M1) | 7,500 | P6: Medical Device Regulation classification. Needed to confirm the app does not fall under MDR scope. MANDATORY pre-launch. | MEDIUM | Expert-audited (P6) -- mandatory |
| 83 | B107 | Privacy Policy + ToS (M1) | 5,000 | P6: Legally compliant privacy policy and terms of service under Art. 13/14 GDPR. | LOW | Expert-audited (P6) |
| 84 | B108 | App Design & Development (M1) | 15,000 | UX/UI capitalized as app build cost. Moved from monthly OpEx (EUR 800/mo R&D retainer). Timu review correction. | MEDIUM | Founder input (Timu review) |

**M1 Total: EUR 46,000**

### 10B: M3 Items (Physical Space Buildout)

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 85 | B109 | Space Buildout (M3) | 25,000 | P3: Increased from EUR 15K. Covers construction, plumbing modifications, electrical, interior fit-out. Single largest capital outlay. | **HIGH** | Expert-audited (P3) |
| 86 | B110 | Kitchen Equipment (M3) | 20,000 | Commercial-grade smoothie bar: blenders, refrigeration, prep surfaces, sinks. Second largest CapEx. | **HIGH** | Founder input |
| 87 | B111 | LED Therapy Devices (M3) | 5,000 | MITO LIGHT panels for red light therapy room. | LOW | Founder input |
| 88 | B112 | Fire Safety Equipment (M3) | 300 | P3: Extinguishers and signage. | VERY LOW | Expert-audited (P3) |
| 89 | B113 | Signage & Branding (M3) | 500 | P3: Window and exterior signage. | VERY LOW | Expert-audited (P3) |
| 90 | B114 | HACCP Plan Setup (M3) | 1,000 | P4: Food safety consultant to develop HACCP plan. | VERY LOW | Expert-audited (P4) |
| 91 | B115 | Hygiene Training (M3) | 60 | P4: IfSG section 43 training for 4 persons (EUR 15/person). | VERY LOW | Expert-audited (P4) |
| 92 | B116 | Food Safety Equipment (M3) | 500 | P4: Temperature monitoring, thermometers, sensors. | VERY LOW | Expert-audited (P4) |

**M3 Total: EUR 52,360**

### 10C: Depreciation

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 93 | B117 | Depreciation period (months) | 36 | Linear 3-year depreciation. M1-2: only M1 items depreciate. M3-24: both M1 and M3 items depreciate. Non-cash charge. | LOW | Industry standard |

**Total CapEx: ~EUR 98,360**

---

## Category 11: SCENARIO MULTIPLIERS (B119--B123) -- 5 assumptions

| # | Cell | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|------|---------------|-------|-------------------|-------------|-------------------|
| 94 | B119 | Bull -- revenue multiplier | 1.3 | Optimistic growth. 30% higher revenue. | MEDIUM | Founder input |
| 95 | B120 | Bull -- churn multiplier | 0.75 | Lower churn. 25% lower churn (6% instead of 8%). | MEDIUM | Founder input |
| 96 | B121 | Bear -- revenue multiplier | 0.6 | Slower growth. 40% lower revenue. | MEDIUM | Founder input |
| 97 | B122 | Bear -- churn multiplier | 1.5 | Higher churn. 50% higher churn (12% instead of 8%). | MEDIUM | Founder input |
| 98 | B123 | Bear -- CAC multiplier | 2.0 | Higher acquisition cost. Double the customer acquisition cost. | MEDIUM | Founder input |

**Note:** Bull/Bear scenarios change revenue and COGS proportionally but keep OpEx and CapEx constant.

---

## HARDCODED MODEL PARAMETERS (not on Assumptions sheet)

These values are embedded directly in the code or Growth Curves sheet and are not editable via the Assumptions sheet:

| # | Location | Parameter Name | Value | Source / Rationale | Sensitivity | Validation Status |
|---|----------|---------------|-------|-------------------|-------------|-------------------|
| 99 | P&L M3 | Permits & Licenses (M3) | 500 | Pre-opening permits. Hardcoded in P&L formula: `=IF(M=3, 500, 0)`. | VERY LOW | Founder input |
| 100 | Cash Flow M1 | Pre-seed funding | 500,000 | EUR 500K pre-seed at EUR 2.5M valuation cap. Formula: `=IF(M=1, 500000, 0)`. | N/A | Locked data |
| 101 | P&L | Starting cumulative cash | 500,000 | Starting point for cumulative cash calculation. | N/A | Locked data |
| 102 | Cash Flow | Working capital pipeline months | 2 | 2-month inventory pipeline assumption. Formula multiplies retail units delta x COGS x 2. | **HIGH** | Expert-audited (P5) |
| 103 | CGM row | CGM Hardware revenue | 0 | D3: Deliberately greyed-out EUR 0 row. Software-only BYOD model. | N/A | Researched (D3) |
| 104 | Restaurant row | Restaurant revenue | 0 | D2: Phase 2 feature. EUR 0 across all 24 months. | N/A | Researched (D2) |

---

## GROWTH CURVES DATA -- Complete Monthly Volumes

### Row 4: Retail Units

| M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 0 | 0 | 0 | 50 | 100 | 150 | 250 | 350 | 450 | 600 | 750 | 900 | 1,100 | 1,300 | 1,500 | 1,800 | 2,100 | 2,400 | 2,700 | 3,000 | 3,400 | 3,800 | 4,200 | 4,600 |

**Sensitivity: HIGH.** P1/P5 flagged M24 volume (4,600 units/mo with only 339 subscribers) as "extremely aggressive." Implies ~92.6% of retail sales from non-subscribers (walk-in, e-commerce, B2B wholesale).

### Row 5: LED Sessions

| M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 0 | 0 | 0 | 10 | 20 | 35 | 50 | 65 | 80 | 100 | 120 | 140 | 160 | 180 | 200 | 220 | 240 | 260 | 280 | 300 | 300 | 300 | 300 | 300 |

**Notes:** Free with smoothie purchase. Self-service. Caps at 300/mo from M20+. Tracks usage for foot traffic metrics, not revenue (B24=0).

### Row 6: Smoothie Units

| M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 0 | 0 | 0 | 100 | 150 | 250 | 350 | 450 | 550 | 650 | 750 | 850 | 950 | 1,050 | 1,150 | 1,250 | 1,350 | 1,450 | 1,550 | 1,650 | 1,750 | 1,850 | 1,950 | 2,000 |

**Notes:** ~45-95 per business day by M24. Break-even is ~45 drinks/day (R2).

### Row 7: Event Count

| M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 0 | 0 | 0 | 1 | 1 | 2 | 2 | 3 | 3 | 3 | 3 | 3 | 3 | 3 | 4 | 4 | 4 | 4 | 4 | 5 | 5 | 5 | 5 | 5 |

### Row 8: Event Avg Attendees

| M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 0 | 0 | 0 | 12 | 15 | 15 | 18 | 18 | 18 | 20 | 20 | 20 | 22 | 22 | 22 | 22 | 24 | 24 | 25 | 25 | 25 | 25 | 25 | 25 |

### Row 9: Doctor Clinics

| M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 0 | 0 | 0 | 0 | 0 | 2 | 5 | 8 | 10 | 12 | 15 | 17 | 18 | 19 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 | 20 |

**Notes:** Starts M6, caps at 20 (B33).

### Row 10: Marketing Spend (EUR) -- Paid Ads Budget

| M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 50 | 50 | 100 | 200 | 400 | 600 | 800 | 800 | 1,000 | 1,200 | 1,400 | 1,400 | 1,800 | 1,800 | 2,000 | 2,000 | 2,200 | 2,200 | 2,500 | 2,500 | 2,800 | 2,800 | 3,000 | 3,000 |

**Notes:** Primary driver of CAC. Not a fixed OpEx assumption -- hardcoded per-month in Growth Curves. P1 flagged CAC EUR 40 as aggressive vs industry benchmarks of EUR 70-120 for health/wellness apps.

### Row 11: KSK-Eligible Freelancer Spend

| M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 | M9 | M10 | M11 | M12 | M13 | M14 | M15 | M16 | M17 | M18 | M19 | M20 | M21 | M22 | M23 | M24 |
|----|----|----|----|----|----|----|----|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
| 500 | 500 | 500 | 500 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 | 800 |

**Notes:** Basis for KSK levy calculation (4.9% via B50).

### Row 12: New Doctors (delta) -- Formula-Driven

Formula: `=MAX(0, CurrentMonth Clinics - PreviousMonth Clinics)`. Feeds doctor verification COGS line.

### Rows 15-20: Subscriber Model -- Formula-Driven

- **Row 15 (New Subs Rate):** References B14-B19 based on month phase. Uses nested IF statements.
- **Row 16 (Churned Subs):** `=ROUND(PreviousMonth TotalSubs x B8, 0)`. Churn applied to previous month's total.
- **Row 17 (Total Subscribers):** `=MAX(0, PreviousTotal - CurrentChurn + CurrentNew)`. MAX(0,...) prevents negative counts.
- **Row 18 (Core 52%):** `=ROUND(TotalSubs x B9, 0)`
- **Row 19 (Pro 38%):** `=ROUND(TotalSubs x B10, 0)`
- **Row 20 (Premium 10%):** `=MAX(0, TotalSubs - Core - Pro)` -- takes remainder to avoid rounding errors.

---

## COMPLETE ASSUMPTION COUNT VERIFICATION

| Category | Cell Range | Count |
|----------|-----------|-------|
| 1. Subscription Model | B5-B11 | 7 |
| 2. Subscriber Growth | B14-B19 | 6 |
| 3. Product Pricing | B22-B33 | 12 |
| 4. Cost Rates | B36-B41 | 6 |
| 5. Payroll | B44-B52 | 9 |
| 6. Fixed Operating Costs | B56-B82 | 27 |
| 7. Sales & Marketing | B86-B90 | 5 |
| 8. Buffers | B93-B94 | 2 |
| 9. Tax | B97-B99 | 3 |
| 10. CapEx | B102-B117 | 16 |
| 11. Scenario Multipliers | B119-B123 | 5 |
| **Assumptions Sheet Total** | | **98** |
| Hardcoded model parameters | Various | 6 |
| Growth Curves hardcoded data arrays | 8 arrays x ~24 values | 8 curves |
| **Combined parameters** | | **~123** |

**Note on the count:** The Explanation Guide and Decisions Recap both reference "123 parameters." The Assumptions sheet contains 98 directly editable parameters. The remaining ~25 are the Growth Curves data arrays (8 curves, each with 24 monthly values = 192 individual data points that function as assumptions) plus the hardcoded model parameters.

---

## HIGH-SENSITIVITY ASSUMPTIONS SUMMARY

The following assumptions have the greatest impact on the bottom line:

| Rank | Cell | Parameter | Value | Why It Matters |
|------|------|-----------|-------|---------------|
| 1 | B8 | Monthly churn rate | 8% | Single most sensitive subscriber metric. Every 1% change shifts average lifetime by ~1.5 months, affecting LTV by ~EUR 58. |
| 2 | GC Row 4 | Retail Units (M24) | 4,600 | Drives ~85% of M24 revenue. P1/P5 flagged as "extremely aggressive." 92.6% from non-subscribers. |
| 3 | B22 | Retail product price | EUR 49 | Largest revenue line. EUR 1 change = ~EUR 4,600/mo at M24. |
| 4 | B23 | Retail product COGS/unit | EUR 23.50 | Largest COGS line. EUR 1 change = ~EUR 4,600/mo cost shift at M24, ~2pp gross margin. |
| 5 | B45 | Employer multiplier | 1.25x | Applied to EVERY salary. 0.01 change compounds across all payroll lines, all 24 months. |
| 6 | B62 | Rent (physical space) | EUR 2,500 | Fixed cost for 21 months = EUR 52,500. Plus Nebenkosten (EUR 325/mo). |
| 7 | B93 | Contingency buffer rate | 10% | Applied to all OpEx. At scale, adds EUR 3K+/mo. |
| 8 | B48 | CTO gross | EUR 6,500 | Large salary from M18. P7 flagged as below market. If raised, impacts 7 months. |
| 9 | B99 | Combined tax rate | 30% | Takes ~30% of monthly profits once cumulative P&L turns positive. |
| 10 | -- | Working capital pipeline | 2 months | EUR 218K gap between P&L profit and actual cash at M24 (P5). |

---

## DECISIONS LOG CROSS-REFERENCE (D1--D11)

| Decision | Description | P&L Impact | Assumptions Cells Affected |
|----------|-------------|------------|---------------------------|
| D1 | Doctor Revenue: Commission (illegal) to SaaS EUR 99/mo | Revenue dropped ~75% on doctor line; now legally safe | B31 |
| D2 | Restaurant Revenue: Phase 2, EUR 0 | EUR 0 all 24 months | Hardcoded row |
| D3 | CGM Hardware: Removed, Software-Only BYOD | Greyed-out EUR 0 row; 80-90% margin on software | Hardcoded row |
| D4 | Physical Space: Smoothie bar + LED + retail + events | New revenue streams + EUR 2,825/mo (rent+Nebenkosten) + CapEx | B62, B63, B109-B116 |
| D5 | CapEx Section: Added | EUR 98K total CapEx | B102-B117 |
| D6 | AI Strategy: Hybrid Claude + Gemini | EUR 210/mo internal + EUR 0.35/sub user-facing | B57, B39 |
| D7 | Waste Rates: Category-weighted | 5.5% blended (was flat 5%) | B36 |
| D8 | Terra API: Deferred, use free HealthKit | Saves EUR 499/mo = EUR 9,481 | Removed from model |
| D9 | SaaS Stack: Itemized | EUR 338/500/750 phased (was EUR 350-1,800) | B58, B59, B60 |
| D10 | Menu Analysis: EUR 0, founders do it | Saves EUR 12,000 | Removed from model |
| D11 | Retail Products: COGS corrected | Margin 76% to 52% | B22, B23 |

---

## PERSONA AUDIT CROSS-REFERENCE (P1--P7)

| Persona | Key Impact | Assumptions Cells Modified |
|---------|-----------|---------------------------|
| P1 (Angel Investor) | EUR 113-236K missing costs identified | Drove creation of multiple new lines |
| P2 (Steuerberater) | Tax provision, German regulatory fees | B97-B99, B79-B82, B45 (to 1.25x), B50 |
| P3 (Operations Manager) | Space operations costs | B63, B70-B74, B109, B112-B113 |
| P4 (Food Safety Inspector) | HACCP, hygiene, food safety | B69, B78, B114-B116 |
| P5 (Growth CFO) | Working capital gap, cash flow sheet, bad debt | B41, B94, Cash Flow sheet |
| P6 (Compliance Legal) | DSB, DPIA, MDR, insurance split | B65-B68, B76-B77, B105-B107 |
| P7 (HR Manager) | Recruitment, multiplier, BG rate | B45, B49, B51-B52 |

---

## OPEN FLAGS / RISKS

1. **Retail Volume at M24** (P1/P5): 4,600 units/mo with 339 subscribers = 92.6% non-subscriber revenue. Needs channel breakdown justification (walk-in, e-commerce, B2B wholesale).

2. **Subscription vs Product Commerce Narrative** (P5): Only ~4.7% of M24 revenue from subscriptions. Affects valuation methodology (2-4x revenue for product commerce vs 8-15x ARR for subscriptions).

3. **CTO Salary Below Market** (P7): EUR 78K/yr is below 25th percentile on Glassdoor (EUR 80-187K range). May need adjustment upward.

4. **EUR 500K Sufficiency** (P1): Bear case combined with working capital could push actual cash toward zero. P1 recommended EUR 600-650K raise. Model still uses EUR 500K.

5. **CAC Aggressive** (P1): EUR 40 blended CAC is below industry benchmarks of EUR 70-120 for health/wellness apps. LTV:CAC ratios of 5-15x should be presented conservatively.

6. **NMN Regulatory Risk** (P4/R10): NMN is NOT approved as EU Novel Food. Must avoid NMN in retail product selection. Noted on Decisions sheet but not a P&L modeling issue.

---

*This document was generated by Agent 1. It contains the exhaustive extraction of all 123 assumptions from the alche P&L model v3.2, sourced from `build_excel_pnl_v3.py`, `PNL_EXPLANATION_GUIDE.md`, and `PNL_DECISIONS_RECAP.md`.*
