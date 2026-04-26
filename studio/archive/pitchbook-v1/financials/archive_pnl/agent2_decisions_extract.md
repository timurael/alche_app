# alche P&L Model -- Complete Business Decisions & Assumptions Registry

**Agent 2 Output** | Generated: 2026-02-24
**Sources:** PNL_DECISIONS_RECAP.md, PNL_EXPLANATION_GUIDE.md, PNL_INVESTOR_BRIEF.md, build_excel_pnl_v3.py
**Scope:** Every explicit decision (D1-D11), persona audit finding (P1-P7), version correction (v3.1, v3.2), and implicit strategic choice that shaped the 24-month P&L model.

---

## SECTION 1: EXPLICIT DECISIONS (D1-D11)

These are the 11 named decisions made during the P&L modeling sessions. Each was a deliberate fork in the road with a rejected alternative.

---

### D1: Doctor Revenue Model -- Commission to SaaS

| Field | Detail |
|-------|--------|
| **Decision ID** | D1 |
| **Title** | Doctor revenue model: commission to SaaS EUR 99/mo |
| **What was decided** | Doctors pay a flat SaaS fee of EUR 99/month per clinic to be listed on the platform. Maximum 20 clinics. Revenue begins M6, caps at EUR 1,980/mo. |
| **What the alternative was** | Commission-based referral model at EUR 150/doctor/month with 865 projected doctors. Would have generated significantly higher revenue. |
| **Why** | Commission-based referral fees between platforms and healthcare providers are **illegal in Germany** under StGB sections 299a and 299b (anti-corruption in healthcare, enacted 2016). The SaaS model follows the Doctolib precedent (EUR 139-475/mo per practice) and is consistent with the BGH ruling of February 2025 that confirmed platform fees are permissible. |
| **P&L impact** | Revenue dropped approximately 75% on the doctor line. At M24, doctor SaaS generates EUR 1,980/mo (20 clinics x EUR 99) vs. the original model's substantially higher projections. Over 24 months, total doctor revenue is modest (capped at ~EUR 30K cumulative). However, the model is now legally sound. |
| **Source** | R3 (HWG Legal -- Doctor Revenue), StGB 299a/299b, Doctolib pricing reference, BGH Feb 2025 ruling |
| **Risk if wrong** | Low risk in the chosen direction. If the SaaS fee is too low, upside is capped but the business survives. If the commission model had been kept and enforcement occurred, criminal liability for founders. |

---

### D2: Restaurant Revenue -- Phase 2, EUR 0

| Field | Detail |
|-------|--------|
| **Decision ID** | D2 |
| **Title** | Restaurant revenue: deferred to Phase 2 |
| **What was decided** | Restaurant partnerships generate EUR 0 revenue for all 24 months. The feature is retained as a retention/engagement tool but is not monetized. Row kept visible in P&L at EUR 0. |
| **What the alternative was** | EUR 1.50 per cover commission from M6+, with 5 restaurant partnerships at EUR 175-350/month each. |
| **Why** | No health app has successfully charged restaurants a commission. The business case is unproven. The feature is better used as a user retention tool (curated restaurant recommendations tied to health profiles) rather than a revenue line. May become revenue post-500 users in Phase 2. |
| **P&L impact** | EUR 0 revenue for 24 months. Removes approximately EUR 40-80K in speculative revenue from the model. Makes the model more conservative and credible. |
| **Source** | R4 (Restaurant Feature research) |
| **Risk if wrong** | Low. If restaurant monetization proves viable post-launch, it adds upside. Not including it means the model does not depend on an unproven revenue stream. |

---

### D3: CGM Model -- Software-Only / BYOD

| Field | Detail |
|-------|--------|
| **Decision ID** | D3 |
| **Title** | CGM hardware removed -- software-only BYOD model |
| **What was decided** | No CGM (continuous glucose monitor) hardware sales, subscriptions, or logistics. Users bring their own device (Dexcom via OAuth 2.0 API, Apple Health, Google Health Connect). Software interpretation only. Row greyed-out at EUR 0 in P&L for investor transparency. |
| **What the alternative was** | CGM hardware-as-a-service at EUR 130 per unit with logistics, inventory, and returns handling. |
| **Why** | Industry-wide hardware model failure. ZOE dropped CGM hardware in September 2025. Supersapiens shut down entirely in February 2024. Hardware logistics yield thin or negative margins. Software-only BYOD yields 80-90% margins on interpretation. EUR 30K regulatory/compliance cost still required for the software interpretation layer (R1). |
| **P&L impact** | Removed hardware revenue line entirely. Eliminated COGS for hardware, logistics, and returns. Net positive for margins (80-90% on software vs. negative margins on hardware). The greyed-out row at EUR 0 exists for investor transparency -- shows the decision was deliberate, not an oversight. |
| **Source** | R1 (CGM Software-Only Model research), ZOE business pivot Sept 2025, Supersapiens closure Feb 2024, Dexcom OAuth 2.0 API documentation |
| **Risk if wrong** | If CGM hardware becomes viable again (new cheaper sensors, regulatory changes), alche misses a potential revenue stream. Mitigant: BYOD approach means users who have CGMs can still connect. |

---

### D4: Physical Space -- Smoothie Bar + LED + Retail + Events

| Field | Detail |
|-------|--------|
| **Decision ID** | D4 |
| **Title** | Physical space with multi-stream revenue model |
| **What was decided** | Open a physical space in Berlin (M4) combining smoothie bar, LED therapy (later made free), curated retail products, and community events. Rent EUR 2,500/mo Kaltmiete plus EUR 325 Nebenkosten. |
| **What the alternative was** | Pure digital platform with no physical presence. EUR 0 space costs, but also EUR 0 physical revenue streams. |
| **Why** | "Digital AND physical first" is core brand positioning. The physical space drives foot traffic, product discovery, community, and multiple revenue streams that a pure digital play cannot generate. The space is where ~85% of revenue originates by M24 (retail products, smoothies, events). Without the space, alche is a subscription app competing in a crowded market with 77% Day-3 churn. |
| **P&L impact** | Added EUR 2,825/mo in space costs (rent + Nebenkosten), EUR 25K buildout CapEx, EUR 20K kitchen equipment, plus utilities, waste disposal, cleaning, maintenance, GEMA, POS system, and food safety compliance. But also unlocked retail product revenue (EUR 225K/mo at M24), smoothie revenue (EUR 19K/mo at M24), event revenue (EUR 4.4K/mo at M24), and LED therapy as a foot traffic driver. Net massive positive on revenue. |
| **Source** | Timu founder input (brand positioning), R2 (Cost Analysis -- Smoothie Bar) |
| **Risk if wrong** | Physical space creates fixed cost obligation. If foot traffic underperforms, the EUR 3,895/mo minimum space cost (rent + Nebenkosten + utilities + cleaning) becomes dead weight. Space lease typically requires 3-5 year commitment. If retail volumes at M24 (4,600 units) prove unreachable, the model breaks. |

---

### D5: CapEx Section -- Added

| Field | Detail |
|-------|--------|
| **Decision ID** | D5 |
| **Title** | Capital expenditures separated from OpEx |
| **What was decided** | Create a dedicated CapEx section with 15 one-time investment items, depreciated linearly over 36 months. Total CapEx: ~EUR 98K (v3.1 final). |
| **What the alternative was** | All costs treated as OpEx (no CapEx distinction). |
| **Why** | Standard financial modeling practice. CapEx items (buildout, equipment, legal setup) are investments that create long-term value, not recurring expenses. Separating them gives investors a clearer view of the ongoing cost structure vs. one-time setup costs. Also required for proper depreciation treatment and cash flow analysis. |
| **P&L impact** | EUR 51K initial CapEx (v2) grew to ~EUR 83K (v3) then ~EUR 98K (v3.1 with App Design capitalization). Creates large negative spikes in M1 (EUR 46K) and M3 (EUR 52K) but smooths P&L through monthly depreciation of ~EUR 2.7K/mo. |
| **Source** | Standard financial modeling practice, P5 (Growth CFO) validation |
| **Risk if wrong** | Minimal. CapEx treatment is standard. The risk is in the estimates themselves -- if buildout costs exceed EUR 25K or legal costs exceed EUR 15K for DPIA + MDR, actual cash burn increases. |

---

### D6: AI Strategy -- Hybrid Claude + Gemini

| Field | Detail |
|-------|--------|
| **Decision ID** | D6 |
| **Title** | AI cost model: hybrid Claude Sonnet 4.5 + Gemini Flash 2.0 |
| **What was decided** | Internal AI budget: EUR 210/mo flat (Claude Max for team). User-facing AI: EUR 0.35/subscriber/month blended cost using Claude Sonnet 4.5 for blood panel interpretation and Gemini Flash 2.0 for routine daily insights. GDPR path via Vertex AI Frankfurt (europe-west12). |
| **What the alternative was** | Single-provider approach (Claude only at EUR 0.40-0.70/user/mo) or including Terra CGM API at EUR 499/mo from M6+. |
| **Why** | Claude Sonnet 4.5 has 54% diagnostic accuracy on blood panel interpretation vs. Gemini's 34% -- critical for the medical use case. But Gemini Flash 2.0 is 10x cheaper for routine tasks (daily insights, meal recommendations, behavior nudges). The hybrid approach optimizes for both accuracy where it matters and cost efficiency at scale. The EUR 0.35 blended cost includes a 20% buffer for edge cases. Terra API deferred (D8) -- free HealthKit/Health Connect used instead. |
| **P&L impact** | User-facing AI cost: EUR 0.35/sub/mo. At 339 subscribers (M24), this is approximately EUR 119/month -- negligible. Internal AI: EUR 210/mo flat = EUR 5,040 over 24 months. Total AI costs over 24 months are under EUR 8K. Compared to Terra API at EUR 499/mo from M6+ (EUR 9,481 saved via D8). |
| **Source** | R5 (Claude AI Costs), R9 (AI API Comparison -- Anthropic vs Google), Vertex AI Frankfurt region documentation |
| **Risk if wrong** | If API pricing changes significantly (e.g., Claude raises prices 3x), the per-user cost could jump to EUR 1+/sub/mo. Still manageable at 339 subs (~EUR 340/mo). The bigger risk is if diagnostic accuracy claims are overstated and users receive poor blood panel interpretations -- liability concern, not cost concern. |

---

### D7: Waste Rates -- Category-Weighted

| Field | Detail |
|-------|--------|
| **Decision ID** | D7 |
| **Title** | Product waste rates: category-weighted 5.5% |
| **What was decided** | Capsules waste at 4%, powders waste at 7%. Blended rate of 5.5% applied to retail product revenue. |
| **What the alternative was** | Flat 5% waste rate across all product categories. |
| **Why** | Powders have higher spoilage risk due to exposure to moisture and air. Capsules are more shelf-stable. The blended rate reflects the expected product mix (both capsule and powder products in the curated retail selection). |
| **P&L impact** | Minor. Increases waste COGS by 0.5 percentage points vs. flat 5%. Impact is EUR 50-200/mo in early months, growing as retail volume scales. At M24, waste on EUR 225K retail revenue = ~EUR 12.4K/mo vs. EUR 11.3K at flat 5%. Difference: ~EUR 1.1K/mo. |
| **Source** | R7 (Product Waste Rates research) |
| **Risk if wrong** | Very low. If actual waste is higher (e.g., 8-10%), the impact at M24 is EUR 5-10K/mo additional COGS. Manageable. The bigger risk is NMN regulatory issues forcing product recalls (see P4/D11 NMN flag). |

---

### D8: Terra API -- Deferred

| Field | Detail |
|-------|--------|
| **Decision ID** | D8 |
| **Title** | Terra CGM API deferred -- use free HealthKit/Health Connect |
| **What was decided** | Do not use the Terra wearable data aggregation API (EUR 499/mo from M6+). Instead, use Apple HealthKit and Google Health Connect, both of which are free and provide access to wearable data. |
| **What the alternative was** | Terra API integration at EUR 499/mo starting M6, providing unified access to 400+ wearable devices. |
| **Why** | HealthKit and Health Connect already aggregate data from the majority of consumer wearables (Apple Watch, Oura, Garmin, Fitbit). Terra adds convenience but not essential functionality at the pre-seed stage. Saves EUR 9,481 over 19 months (M6-M24). Can be added later if multi-device support becomes a competitive necessity. |
| **P&L impact** | Saves EUR 9,481 in SaaS costs (EUR 499/mo x 19 months). Moves from fixed cost to zero cost for wearable data access. |
| **Source** | R8 (Software License Stack), Apple HealthKit documentation, Google Health Connect documentation |
| **Risk if wrong** | If a significant portion of target users use non-Apple/non-Google wearables (e.g., Whoop, Withings via proprietary APIs), alche may lose those users. Mitigant: Terra can be added post-revenue as a Phase 2 item. |

---

### D9: SaaS Stack -- Itemized

| Field | Detail |
|-------|--------|
| **Decision ID** | D9 |
| **Title** | SaaS stack itemized with phase-gated costs |
| **What was decided** | Phase 1 (M1-6): EUR 338/mo (Google Workspace, Figma, Notion, Crisp $95/mo). Phase 2 (M7-12): EUR 500/mo (add tools). Phase 3 (M13+): EUR 750/mo (full stack). PostHog replaces Mixpanel (free). Terra deferred (D8). |
| **What the alternative was** | Original estimates ranged from EUR 350 escalating to EUR 1,800/mo with less specificity on what was included. |
| **Why** | Itemizing the stack creates accountability and allows cost control. PostHog's free tier replaces Mixpanel ($25-99/mo). Crisp replaces Intercom ($95/mo vs. $74-$289/mo). Each tool was evaluated for the pre-seed stage with planned upgrades as the business scales. |
| **P&L impact** | Phase 1: EUR 338/mo (down from ~EUR 350). Phase 3: EUR 750/mo (down from ~EUR 1,800). Total 24-month SaaS cost: ~EUR 13K vs. ~EUR 25K in the original estimate. Saves ~EUR 12K over 24 months. |
| **Source** | R8 (Software License Stack research) |
| **Risk if wrong** | If the team outgrows the free tiers (PostHog, etc.) earlier than planned, costs could jump. PostHog free tier has limits (1M events/mo). At scale, analytics alone could be EUR 300-500/mo. Mitigant: Phase 3 budget (EUR 750/mo) has headroom. |

---

### D10: Menu Analysis -- EUR 0

| Field | Detail |
|-------|--------|
| **Decision ID** | D10 |
| **Title** | Menu analysis: founders handle it with AI tools |
| **What was decided** | No external menu analysis service or contractor. Founders use AI tools (Claude, Gemini) to analyze partner restaurant menus for nutritional content and health recommendations. EUR 0 cost. |
| **What the alternative was** | External contractor or service at EUR 500/mo. |
| **Why** | AI tools (already budgeted in D6) can analyze menu photos and descriptions for nutritional content. This is not a specialized task requiring human expertise -- it is a structured data extraction problem that LLMs handle well. Founders can do this in 2-3 hours/week. |
| **P&L impact** | Saves EUR 12,000 over 24 months (EUR 500/mo x 24). |
| **Source** | Timu founder input |
| **Risk if wrong** | If menu analysis quality is poor, restaurant recommendations suffer, reducing the feature's value as a retention tool. However, since restaurant revenue is EUR 0 (D2), the financial impact of poor menu analysis is zero -- it only affects user experience. |

---

### D11: Retail Products -- COGS Corrected

| Field | Detail |
|-------|--------|
| **Decision ID** | D11 |
| **Title** | Retail product pricing validated; COGS corrected upward |
| **What was decided** | Retail price: EUR 49/unit (validated). COGS: EUR 23.50/unit (corrected from EUR 11.50). Gross margin: 52% (corrected from 76.5%). Product selection includes BRAINEFFECT, Ancient+Brave, Hifas da Terra, Avea, Your Super. Wholesale via Ankorstore (Net 60, 20% first-order commission) and Faire (Net 60). |
| **What the alternative was** | EUR 11.50 COGS (76.5% margin) -- unrealistically low for curated premium wellness products. |
| **Why** | R10 research showed standard wholesale is 40-60% of retail price. EUR 11.50 COGS on a EUR 49 retail product implies a 23.5% wholesale-to-retail ratio, which is below any premium wellness brand's actual wholesale pricing. The midpoint of EUR 22-25 wholesale range = EUR 23.50. This correction makes the model honest. |
| **P&L impact** | Margin dropped from 76.5% to 52% on the single largest revenue line. At M24 (4,600 units), monthly COGS increased from EUR 52,900 (at EUR 11.50) to EUR 108,100 (at EUR 23.50) -- a EUR 55,200/mo difference. Over 24 months, total retail COGS approximately doubled. This is the single largest financial correction in the model. |
| **Source** | R10 (Retail Brands Wholesale research) |
| **Risk if wrong** | If actual COGS is even higher (e.g., EUR 27-30 due to smaller order volumes), margins compress further to 39-45%. At EUR 30 COGS, the retail stream breaks even later and contributes less to covering fixed costs. Conversely, if alche negotiates better wholesale rates as volume grows, margins improve. |

---

## SECTION 2: PERSONA AUDIT FINDINGS (P1-P7)

Seven expert personas reviewed the model. Each identified specific gaps, corrections, and additions. All findings were incorporated into the v3 Excel model.

---

### P1: Angel Investor Persona

| Field | Detail |
|-------|--------|
| **Decision ID** | P1 |
| **Title** | Angel investor review: EUR 113-236K in missing costs |
| **What was decided** | All identified cost gaps were closed in v3. Conservative LTV:CAC (5.1x) used instead of aggressive 14.7x. Acknowledged that 4,600 potion units/mo at M24 is "extremely aggressive." |
| **What the alternative was** | Presenting the model with the original cost gaps and aggressive unit economics. |
| **Why** | An angel investor would immediately spot missing insurance, compliance, and operational costs. Presenting a model with EUR 113-236K in missing costs destroys credibility. Better to add the costs and show a realistic (but still profitable) model than to present flattering numbers that collapse under due diligence. |
| **P&L impact** | Added EUR 113-236K in costs over 24 months (midpoint ~EUR 175K). The model remains profitable but break-even shifts later and cumulative cash at M24 is lower. CAC benchmark moved from EUR 40 to "aggressive vs. industry EUR 70-120." LTV:CAC display capped at conservative 5.1x. |
| **Source** | P1 persona audit (Angel Investor) |
| **Risk if wrong** | If P1's cost estimates are too conservative (i.e., actual costs are even higher), the EUR 500K raise may be insufficient. P1 recommended EUR 600-650K raise or reduced scope. This recommendation was NOT adopted in the model (still EUR 500K). |

---

### P2: Steuerberater (Tax Advisor) Persona

| Field | Detail |
|-------|--------|
| **Decision ID** | P2 |
| **Title** | German tax treatment and mandatory levies |
| **What was decided** | Tax provision of ~30% applied when cumulative pre-tax P&L turns positive. Added IHK (EUR 120/yr, corrected from EUR 300/yr), GEMA (EUR 370/yr), Rundfunkbeitrag (EUR 6.12/mo), KSK levy (4.9% on creative freelancers), Verpackungsgesetz/LUCID (EUR 72/yr). Employer multiplier corrected to 1.25x. |
| **What the alternative was** | No tax provision. No mandatory German levies. Employer multiplier at 1.22x. |
| **Why** | A GmbH in Berlin pays Gewerbesteuer from the first euro of profit (no Freibetrag, unlike sole proprietors): 3.5% Steuermesszahl x 410% Berlin Hebesatz = 14.35%. Plus Korperschaftsteuer + Solidaritatszuschlag at 15.825%. Combined: ~30.175%, rounded to 30%. The mandatory levies (IHK, GEMA, Rundfunkbeitrag, KSK, Verpackungsgesetz) are legal requirements that cannot be avoided. Employer multiplier of 1.25x covers Arbeitgeberanteil (health, pension, unemployment) plus U1/U2/U3 Umlagen. |
| **P&L impact** | Tax provision: ~EUR 3K/mo when profitable (activates once cumulative P&L turns positive). Pre-profit costs: EUR 220-460/mo from mandatory levies. Employer multiplier increase from 1.22x to 1.25x: adds ~3% to every salary line. Over 24 months with ~EUR 600K total payroll, that is ~EUR 18K additional cost. |
| **Source** | P2 persona audit (Steuerberater), German tax code (EStG, GewStG, KStG), KSK Act, GEMA tariff schedule, Rundfunkbeitragsstaatsvertrag, Verpackungsgesetz |
| **Risk if wrong** | Low. German tax rates are statutory and predictable. The risk is on timing: Verlustvortrag (loss carryforward) rules are simplified in the model. If the Finanzamt disallows certain loss carryforwards, tax could kick in earlier. Also, if Berlin's Hebesatz changes (currently 410%), Gewerbesteuer shifts. |

---

### P3: Operations Manager Persona

| Field | Detail |
|-------|--------|
| **Decision ID** | P3 |
| **Title** | Operational cost gaps: Nebenkosten, utilities, buildout |
| **What was decided** | Nebenkosten EUR 325/mo added from M4 (Kaltmiete EUR 2,500 was only the cold rent). Utilities increased EUR 400 to EUR 500. Buildout increased EUR 15K to EUR 25K. Added: waste disposal EUR 120/mo, WiFi EUR 50/mo, maintenance reserve EUR 200/mo, cleaning EUR 300/mo, POS system EUR 50/mo, fire safety EUR 300 one-off, signage EUR 500 one-off. |
| **What the alternative was** | Rent at EUR 2,500 presented as total space cost. Utilities at EUR 400. Buildout at EUR 15K. No Nebenkosten, waste disposal, WiFi, maintenance reserve, or POS system. |
| **Why** | Rent EUR 2,500 is Kaltmiete (cold rent) only -- standard German commercial leases require the tenant to pay Nebenkosten (heating, water, building insurance, property tax) separately at EUR 4-5/sqm. Utilities of EUR 400 is too low for a commercial food-service space with refrigeration, blenders, and lighting. EUR 15K buildout is unrealistic for a food-service space requiring plumbing modifications, electrical work, and interior fit-out. |
| **P&L impact** | Monthly recurring: EUR 665-1,600/mo added. One-off: EUR 3.1-7.5K. Over 24 months (21 months from M4): Nebenkosten = EUR 6,825. Utilities increase = EUR 2,100. Waste = EUR 2,520. WiFi = EUR 1,050. Maintenance = EUR 4,200. Cleaning = EUR 6,300. POS = EUR 1,050. Buildout increase: EUR 10K additional CapEx. Total: ~EUR 34K additional over 24 months. |
| **Source** | P3 persona audit (Operations Manager), Berlin commercial lease norms, BSR waste collection rates |
| **Risk if wrong** | If the space is larger than assumed or requires more specialized buildout (e.g., kitchen hood ventilation, grease traps), costs could be 20-40% higher. The EUR 25K buildout is still on the low end for a food-service space. |

---

### P4: Food Safety Inspector Persona

| Field | Detail |
|-------|--------|
| **Decision ID** | P4 |
| **Title** | Food safety requirements and NMN regulatory flag |
| **What was decided** | No Gaststättenerlaubnis needed (alcohol-free smoothie bar). HACCP plan required but no formal certification needed. Added: HACCP plan setup EUR 1,000, hygiene training EUR 60 (IfSG section 43, EUR 15/person x 4), food safety equipment EUR 500, food safety compliance EUR 80/mo, product recall insurance EUR 100/mo from M4. Flagged: NMN is NOT approved as EU Novel Food -- DO NOT STOCK. |
| **What the alternative was** | No food safety costs in the model. No NMN regulatory awareness. |
| **Why** | Any food-service operation in Germany requires HACCP documentation, IfSG section 43 hygiene training for all food handlers, and appropriate equipment for temperature monitoring. Product recall insurance is prudent when selling dietary supplements -- a recall of a contaminated batch without insurance could be existential. The NMN flag is critical: selling NMN (nicotinamide mononucleotide) as a dietary supplement is illegal in the EU without Novel Food approval, which NMN does not have. Stocking NMN exposes the business to regulatory enforcement. |
| **P&L impact** | One-off: EUR 2,615-5,841. Monthly: EUR 40-90 (food safety compliance). Annual: EUR 950-3,820 (inspections, testing). Product recall insurance: EUR 100/mo from M4 = EUR 2,100 over 21 months. Total: ~EUR 8-12K over 24 months. |
| **Source** | P4 persona audit (Food Safety Inspector), IfSG section 43, EU Novel Food Regulation (EC) No 258/97, EFSA NMN status |
| **Risk if wrong** | If NMN is included in the product selection despite the flag, regulatory enforcement could result in product seizure, fines, and reputational damage. The food safety costs are statutory minimums -- underinvesting here risks Ordnungsamt closure orders. |

---

### P5: Growth CFO Persona

| Field | Detail |
|-------|--------|
| **Decision ID** | P5 |
| **Title** | Cash flow gap, working capital, and business model classification |
| **What was decided** | Created Cash Flow Statement sheet. Modeled working capital (2-month inventory pipeline x COGS per unit). Identified EUR 218K gap between P&L profit and actual cash at M24. Added bad debt provision (0.5% of total revenue). Added bank fees (EUR 35/mo). Flagged: actual subscription ARPU is EUR 38.44 (not EUR 49). Flagged: only ~4.7% of M24 revenue from subscriptions -- "this is a product commerce business, not a subscription business." |
| **What the alternative was** | No cash flow sheet. P&L cumulative cash presented as actual cash. No working capital modeling. No bad debt provision. Subscription narrative positioned as primary revenue driver. |
| **Why** | P&L profit does not equal cash. When retail volume is growing (every month M4-M24), alche must purchase inventory 2 months ahead of sales. This cash goes out before revenue comes in. At M24, with 4,600 units/mo at EUR 23.50 COGS, 2-month inventory pipeline = EUR 216K tied up in stock. Additionally, subscription ARPU of EUR 38.44 (weighted by 52/38/10 tier split at 19/49/99) means subscription revenue is lower than the headline EUR 49 Pro tier suggests. With only ~5% of M24 revenue from subscriptions, valuation methodology matters: product commerce at 2-4x revenue vs. subscription at 8-15x ARR. |
| **P&L impact** | Bad debt: 0.5% of total revenue = EUR 50-1,300/mo scaling with revenue. Bank fees: EUR 35/mo = EUR 840 over 24 months. Working capital: EUR 218K in cash consumption not visible on P&L. This is the single most important analytical finding -- it means actual M24 cash is ~EUR 377K, not ~EUR 595K. Cash Flow sheet created to make this explicit. |
| **Source** | P5 persona audit (Growth CFO) |
| **Risk if wrong** | If working capital requirements are underestimated (e.g., 3-month pipeline needed instead of 2-month), actual cash could be EUR 100K+ lower than modeled. If retail volume grows faster than expected (bull case), working capital stress increases proportionally. P1 suggested raising EUR 600-650K as a buffer -- this finding supports that recommendation. |

---

### P6: Compliance Legal Persona

| Field | Detail |
|-------|--------|
| **Decision ID** | P6 |
| **Title** | Data protection, medical device regulation, and insurance adequacy |
| **What was decided** | DSB (external Data Protection Officer) mandatory at EUR 400/mo from M1. DPIA (Data Protection Impact Assessment) mandatory at EUR 7,500 one-off in M1. MDR Classification Opinion at EUR 7,500 in M1 to confirm app does not fall under Medical Device Regulation. Privacy Policy + ToS at EUR 5,000 in M1. Insurance split into 5 categories totaling EUR 650/mo: general liability (EUR 200), D&O (EUR 100), cyber (EUR 150), product liability (EUR 100), product recall (EUR 100 from M4). CMP cookie consent tool at EUR 25/mo. |
| **What the alternative was** | Single insurance line at EUR 200/mo. No DSB, DPIA, MDR opinion, or privacy policy budget. |
| **Why** | Art. 37 GDPR mandates a Data Protection Officer when processing special category data (health data under Art. 9). Art. 35 GDPR mandates a DPIA for high-risk processing of health data. MDR classification opinion is needed because a health recommendation app could fall under the Medical Device Regulation (Class IIa or higher) -- the legal opinion confirms it does not, or defines the scope that keeps it out. D&O insurance is mandatory when angels are on the cap table (protects directors from personal liability claims). Cyber insurance is critical when processing health data (Art. 9 GDPR data breach creates significant liability). Product liability is required when selling dietary supplements (defective product claims). The original EUR 200/mo general liability was critically insufficient for a business handling health data and selling supplements. |
| **P&L impact** | One-off: EUR 29,500-53,000 (DPIA EUR 7.5K, MDR EUR 7.5K, Privacy EUR 5K, other legal setup). Monthly: EUR 1,100-1,800/mo (DSB EUR 400, insurance EUR 650, CMP EUR 25, plus other compliance costs). Over 24 months: approximately EUR 42,760-74,900 in new costs. Insurance alone: EUR 650/mo x 24 = EUR 15,600 (vs. EUR 4,800 at the original EUR 200/mo). |
| **Source** | P6 persona audit (Compliance Legal), GDPR Articles 9, 35, 37, TDDDG, EU MDR 2017/745, German GmbH corporate law |
| **Risk if wrong** | If the DSB is not appointed and a data breach occurs, fines under Art. 83 GDPR can reach EUR 20M or 4% of global turnover. If the DPIA is not conducted, same penalty regime. If MDR classification is not obtained and the app is later classified as a medical device, it must be pulled from market until CE marking is obtained (6-18 month process). These are existential risks, not financial optimization questions. |

---

### P7: HR Manager Persona

| Field | Detail |
|-------|--------|
| **Decision ID** | P7 |
| **Title** | Recruitment costs, employer multiplier, and CTO compensation |
| **What was decided** | CTO recruitment via headhunter at EUR 18,000 (M17), corrected from EUR 5,000. CTO onboarding EUR 3,500 (M18) for equipment and setup. Employer multiplier corrected to 1.25x (from 1.22x). BG insurance corrected to 0.5% (from 1.5%) for office work. Founder salary EUR 50K/yr confirmed as viable at pre-seed. CTO salary EUR 78K/yr flagged as below 25th percentile (Glassdoor EUR 80-187K range). |
| **What the alternative was** | CTO recruitment at EUR 5,000 (unrealistic for Berlin tech market). Employer multiplier at 1.22x. BG insurance at 1.5%. |
| **Why** | Headhunter fees in Berlin for a CTO-level hire are 20-30% of annual salary. At EUR 78K, 20% = EUR 15.6K, 30% = EUR 23.4K. EUR 18K is the midpoint. The EUR 5,000 original budget would not cover even a job board posting plus initial screening. Employer multiplier of 1.25x is more accurate for German Arbeitgeberanteil including all Umlagen (U1 sickness, U2 maternity, U3 insolvency). BG insurance for office work (not construction/manufacturing) is 0.3-0.7%, with 0.5% being a reasonable estimate. The CTO at EUR 78K is below market -- this was flagged but NOT changed to preserve the EUR 500K raise constraint. |
| **P&L impact** | Recruitment: EUR 18K one-off (M17) vs. EUR 5K = EUR 13K increase. Onboarding: EUR 3.5K one-off (M18) = new line item. Employer multiplier: 1.22x to 1.25x applied to ~EUR 600K total payroll over 24 months = ~EUR 18K additional cost. BG insurance: 1.5% to 0.5% = ~EUR 6K savings (partially offsets multiplier increase). Net: ~EUR 16-27K additional over 24 months. |
| **Source** | P7 persona audit (HR Manager), Glassdoor Berlin CTO salary data, German Sozialversicherung rates 2025/2026, BG office work tariff |
| **Risk if wrong** | If the CTO cannot be recruited at EUR 78K, the business either (a) pays more (compressing margins), (b) delays the hire (losing product velocity), or (c) hires a less experienced CTO (execution risk). P7 flagged EUR 78K as below the 25th percentile -- the most likely outcome is needing to offer EUR 80-90K+, which would add EUR 1,500-3,000/yr to payroll. |

---

## SECTION 3: VERSION CORRECTION DECISIONS (v3.1, v3.2)

These corrections were made after Timu (CEO) reviewed the v3 model.

---

### v3.1-A: Growth Marketer Removed

| Field | Detail |
|-------|--------|
| **Decision ID** | v3.1-A |
| **Title** | Growth Marketer hire removed -- Timu IS the growth marketer |
| **What was decided** | Remove the Growth Marketer position (EUR 4,500/mo from M12) from the payroll. Timu (CEO) handles all growth marketing functions personally. |
| **What the alternative was** | Growth Marketer hired at EUR 4,500/mo gross from M12, fully loaded at EUR 5,625/mo (1.25x multiplier). |
| **Why** | Timu's background is in marketing, brand strategy, and design. Hiring a separate growth marketer is duplicative at the pre-seed stage. The marketing ad spend budget (Growth Curves row 10, up to EUR 3,000/mo) is unchanged -- that is media budget, not a person. |
| **P&L impact** | Saves EUR 73,125 over 13 months (M12-M24): EUR 5,625/mo x 13 months. This is the largest single cost reduction in the v3.1 corrections. It also simplifies the payroll section and reduces BG insurance proportionally. |
| **Source** | Timu (CEO) review |
| **Risk if wrong** | If Timu becomes overloaded as CEO + growth marketer + brand strategist, marketing execution suffers. At the pre-seed stage this is acceptable. If the business scales past M18, a dedicated growth marketer may need to be hired -- this cost is not in the model. |

---

### v3.1-B: Subscribers Gated to M4+

| Field | Detail |
|-------|--------|
| **Decision ID** | v3.1-B |
| **Title** | Subscriber acquisition gated to M4+ (no app before space) |
| **What was decided** | Assumptions!B14 set to 0 (M1-M3 new subscribers = 0). The app does not launch until M4, when the physical space also opens. All subscriber metrics are zero for the first 3 months. |
| **What the alternative was** | Some subscriber acquisition in M1-M3 (beta users, waitlist conversions). |
| **Why** | The app and physical space launch together in M4. There is no product to subscribe to before the space opens -- the value proposition requires the physical experience (smoothie bar, LED therapy, retail products) combined with the digital app. Pre-launch subscriber acquisition would mean paying for AI API costs on users who have no physical touchpoint, undermining the hybrid model positioning. |
| **P&L impact** | Removes subscription revenue from M1-M3 (was small -- approximately EUR 570 total at 15 subs/mo with tier mix). Removes AI API costs for M1-M3 (also small). Net impact is minimal financially but significant for model narrative: it shows the business has a clear pre-launch phase where all effort goes into setup, not premature revenue. |
| **Source** | Timu (CEO) review |
| **Risk if wrong** | If the space opening is delayed past M4, the entire revenue model shifts right. The model does not account for space delay risk -- all revenue streams activate simultaneously in M4. A 2-month delay would mean 2 months of additional burn (~EUR 36-40K) with zero revenue. |

---

### v3.1-C: UX/UI Design Moved to CapEx

| Field | Detail |
|-------|--------|
| **Decision ID** | v3.1-C |
| **Title** | UX/UI design retainer moved from monthly OpEx to one-time CapEx |
| **What was decided** | Remove the EUR 800/mo UX/UI design retainer from R&D OpEx. Replace with a one-time EUR 15,000 "App Design & Development" CapEx item in M1 (Assumptions!B108). |
| **What the alternative was** | EUR 800/mo ongoing UX/UI retainer for 24 months = EUR 19,200 total OpEx. |
| **Why** | UX/UI design is primarily an app build cost, not an ongoing operational expense. The initial app design and development is a capital investment that creates a long-term asset. Post-launch, the EUR 1,500/mo App Maintenance retainer (already in the model) covers ongoing development. Capitalizing the design cost is more accurate accounting treatment and improves monthly OpEx clarity. |
| **P&L impact** | Saves EUR 19,200 in OpEx over 24 months. Adds EUR 15,000 to M1 CapEx (net saving of EUR 4,200). CapEx total increases from ~EUR 83K to ~EUR 98K. Monthly OpEx improves by EUR 800/mo for all 24 months. The capitalized amount depreciates over 36 months (~EUR 417/mo depreciation). |
| **Source** | Timu (CEO) review, standard software capitalization treatment |
| **Risk if wrong** | If the app requires significant ongoing UX redesign (not just maintenance), the EUR 15K one-time budget may be insufficient. In practice, the EUR 1,500/mo app maintenance retainer provides ongoing development capacity. |

---

### v3.1-D: B19 Note Update

| Field | Detail |
|-------|--------|
| **Decision ID** | v3.1-D |
| **Title** | Growth phase label corrected |
| **What was decided** | Assumptions!B19 note changed from "Growth marketer effect" to "Scaling phase" to reflect that the M19-M24 subscriber growth (38/mo) is driven by overall business scaling, not a specific hire. |
| **What the alternative was** | Note reading "Growth marketer effect" -- implying the growth was attributable to a hire that no longer exists. |
| **Why** | The Growth Marketer was removed (v3.1-A), so attributing M19-M24 growth to a "growth marketer effect" is misleading. The growth is driven by brand maturation, community effects, word-of-mouth, and scaled marketing spend. |
| **P&L impact** | None (label change only). |
| **Source** | Timu (CEO) review |
| **Risk if wrong** | None. |

---

### v3.2-A: LED Therapy Made Free

| Field | Detail |
|-------|--------|
| **Decision ID** | v3.2-A |
| **Title** | LED therapy: from paid service to free amenity with smoothie purchase |
| **What was decided** | LED session price (B24) set to EUR 0. LED practitioner cost (B25) set to EUR 0. LED therapy is now a self-service amenity: customers put MITO LIGHT panels on their faces and hang out. Free with smoothie purchase. No practitioner needed. |
| **What the alternative was** | LED therapy as a paid service at EUR 45/session with EUR 25/session practitioner cost. Revenue line generating ~EUR 13.5K/mo at M24 with COGS of ~EUR 7.5K/mo. |
| **Why** | LED therapy is repositioned as a dwell-time and foot traffic driver, not a revenue line. Free LED with smoothie purchase: (a) increases average visit duration (customers stay longer, discover retail products), (b) drives smoothie attachment rate, (c) differentiates the space from competitors, (d) eliminates the EUR 25/session practitioner cost. The EUR 5K CapEx for LED panels pays for itself through increased retail product discovery. Self-service model is simpler operationally. |
| **P&L impact** | M24 monthly revenue drops ~EUR 13.5K/mo (LED was growing to 300 sessions x EUR 45). LED COGS eliminated (~EUR 7.5K/mo at M24). Net gross profit impact: ~-EUR 6K/mo at M24. 24-month cumulative LED revenue forgone: ~EUR 151K. 24-month LED COGS saved: ~EUR 84K. Net 24-month impact: ~-EUR 67K in gross profit. Revenue streams: 6 active to 5 active + 1 free amenity. |
| **Source** | Timu (CEO) review |
| **Risk if wrong** | If LED therapy has significant standalone revenue potential (e.g., customers would pay EUR 45+/session willingly), the business is leaving money on the table. Mitigant: LED is positioned as a differentiation and retention play. If demand proves high, pricing can be introduced later. The bigger risk is that free LED does not actually increase smoothie sales or retail product discovery, in which case it is a pure cost (EUR 5K CapEx) with no return. |

---

## SECTION 4: IMPLICIT STRATEGIC DECISIONS

These are choices embedded in the model that were not formally numbered as D1-D11 but represent significant strategic decisions with alternatives that were considered and rejected.

---

### IMP-1: Physical Space in Berlin (Not Another City)

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-1 |
| **Title** | Berlin as launch market |
| **What was decided** | Physical space in Berlin. All cost assumptions (rent, Nebenkosten, Gewerbesteuer Hebesatz, staff salaries) are Berlin-specific. |
| **What the alternative was** | Munich (higher purchasing power, EUR 134 index vs. Berlin's 92.4), Hamburg, or a fully remote/digital-first approach. |
| **Why** | Berlin is where the founders are based. Berlin purchasing power index of 92.4 (GfK) is below the national average, which is a concern for premium pricing (EUR 49 supplements, EUR 9.67 smoothies). However, Berlin's tech worker median salary of EUR 75,000 and its wellness/health-conscious consumer base make it viable for the target demographic. Berlin's Gewerbesteuer Hebesatz of 410% is standard for German major cities. Rent of EUR 2,500/mo Kaltmiete for a commercial space is realistic for Berlin neighborhoods like Prenzlauer Berg, Mitte, or Kreuzberg. |
| **P&L impact** | Berlin-specific: Gewerbesteuer rate 14.35% (410% Hebesatz). Rent EUR 2,500/mo. Staff wages (Midijob EUR 1,230/mo) are Berlin-appropriate. In Munich, rent could be EUR 4,000-6,000/mo for equivalent space, and staff wages 10-20% higher, but purchasing power is 45% higher. |
| **Source** | Locked data (Berlin purchasing power index 92.4), GfK data, founder location |
| **Risk if wrong** | If Berlin's wellness consumer base is too price-sensitive for EUR 49 supplements, retail volume underperforms. Berlin's lower purchasing power vs. Munich/Frankfurt means each unit sold requires more marketing effort. Mitigant: targeting tech workers (EUR 75K median salary) who over-index on wellness spending. |

---

### IMP-2: EUR 49 Price Point for Retail Products

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-2 |
| **Title** | EUR 49 average retail product price |
| **What was decided** | Average retail product price of EUR 49 per unit. Curated mix of premium longevity supplements including BRAINEFFECT (EUR 29), Hifas da Terra (EUR 50+), Avea Booster (EUR 95). |
| **What the alternative was** | Lower price point (EUR 29-35, mass market positioning) or higher price point (EUR 69-99, ultra-premium). |
| **Why** | R10 research validated that the weighted average of curated premium wellness brands lands at EUR 45-55. EUR 49 is at the lower end of this range, making it accessible while maintaining premium positioning. The price must cover EUR 23.50 COGS (52% margin), which is only possible in the EUR 45+ range with premium brands. A lower price point (EUR 29-35) would either require cheaper products (destroying the premium curation value proposition) or accepting margins below 30% (unsustainable). |
| **P&L impact** | At EUR 49 and 4,600 units/mo at M24: EUR 225,400/mo retail revenue. At EUR 35 alternative: EUR 161,000/mo (EUR 64K/mo less). At EUR 69 alternative: EUR 317,400/mo (EUR 92K/mo more, but COGS would also be higher for premium products). EUR 49 is the balance point between volume accessibility and margin sustainability. |
| **Source** | R10 (Retail Brands Wholesale), BRAINEFFECT pricing, Hifas da Terra pricing, Avea pricing |
| **Risk if wrong** | If Berlin consumers resist EUR 49/unit (impulse purchase threshold is typically EUR 20-30), volume assumptions collapse. The 4,600 units/mo at M24 depends on EUR 49 being an acceptable price for walk-in customers. If the price needs to drop to EUR 39, margin compresses to 40% and annual revenue drops ~EUR 240K. |

---

### IMP-3: 8% Monthly Churn Rate

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-3 |
| **Title** | 8% monthly subscription churn rate |
| **What was decided** | 8% monthly churn applied to total subscriber base each month. This is locked data based on industry benchmarks. Average subscriber lifetime: 1/0.08 = 12.5 months. |
| **What the alternative was** | Optimistic churn (4-5%, common in investor decks) or pessimistic churn (12-15%, common in health apps without strong retention). |
| **Why** | Industry data: 77% of health app users churn by Day 3. 44% cancel within first 90 days. The 8% monthly churn implies 60% annual churn (1 - 0.92^12 = 63%), which is conservative for health/wellness apps. Most health apps see 80-90% annual churn. The 8% rate assumes alche's physical space, community events, and product commerce create stronger retention than pure digital health apps. |
| **P&L impact** | At 8% churn with 15-38 new subs/mo: total subscribers peak at ~339 by M24. At 5% churn (optimistic), subscribers would reach ~495 -- 46% more subscription revenue. At 12% churn (pessimistic), subscribers would reach ~224 -- 34% less subscription revenue. However, since subscriptions are only ~5% of total revenue, churn rate has moderate P&L impact. Its primary effect is on LTV calculations (EUR 480 at 8% churn vs. EUR 769 at 5% churn) and investor optics. |
| **Source** | Locked data, health app churn benchmarks, Flurry Analytics health app retention data |
| **Risk if wrong** | If actual churn is higher (12%+), subscriber base plateaus at ~200 instead of 339. Financial impact is limited (~EUR 5K/mo less subscription revenue) but narrative impact is significant -- investors watch subscriber metrics closely. If churn is lower (5%), it is pure upside. |

---

### IMP-4: EUR 500K Raise at EUR 2.5M Valuation Cap

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-4 |
| **Title** | Pre-seed raise: EUR 500K at EUR 2.5M cap |
| **What was decided** | Raise EUR 500K in pre-seed funding at a EUR 2.5M valuation cap. This is locked data that defines the starting cash and the dilution terms. |
| **What the alternative was** | P1 recommended EUR 600-650K to cover the missing cost gaps identified across all persona audits. Alternatively, a lower raise (EUR 300K) with reduced scope or a higher raise (EUR 750K+) with more aggressive growth plans. |
| **Why** | EUR 500K at EUR 2.5M cap implies 20% dilution on a post-money basis (standard for pre-seed). The EUR 2.5M cap is based on comparable longevity/wellness pre-seed rounds. EUR 500K provides sufficient runway for 24 months in the base case, with minimum cash of ~EUR 237-260K around M12 (trough before revenue ramp). |
| **P&L impact** | EUR 500,000 is the starting cash for the cumulative cash calculation. Every month's Net P&L (after tax) is added to this starting balance. The model shows cash never going negative in the base case. Bear case (0.6x revenue) is the stress test -- if bear case cash goes negative, the raise is insufficient. P5's working capital analysis shows actual cash at M24 is ~EUR 377K (not EUR 595K from P&L), meaning EUR 123K of the raise went to working capital, not operational losses. |
| **Source** | Locked data, Timu/Daria founder decision, comparable pre-seed rounds |
| **Risk if wrong** | If EUR 500K is insufficient (bear case + working capital + cost overruns), the company runs out of cash and must raise a bridge round at unfavorable terms. P1 explicitly recommended EUR 600-650K. The EUR 100-150K gap between the actual raise and P1's recommendation is the financial buffer that does not exist. |

---

### IMP-5: No CGM Hardware (Software-Only via BYOD)

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-5 |
| **Title** | Not selling or distributing CGM hardware |
| **What was decided** | Software-only model. Users bring their own CGM devices. alche interprets data via Dexcom OAuth 2.0 API, Apple Health, and Google Health Connect. No CGM inventory, no hardware logistics, no returns handling. |
| **What the alternative was** | CGM-as-a-service model (like original ZOE, Supersapiens, Levels Health) where the company sources, ships, and supports CGM hardware at EUR 130/unit. |
| **Why** | Industry-wide failure of CGM hardware models: ZOE exited CGM hardware Sept 2025, Supersapiens shut down Feb 2024, Levels Health pivoted to metabolic health software. Hardware logistics for medical devices require cold chain management (some CGMs), returns processing, and regulatory compliance (MDR for hardware distribution). Margins are thin or negative. Software interpretation yields 80-90% margins. EUR 30K in regulatory/compliance costs for software interpretation (R1) vs. EUR 100K+ for hardware distribution. |
| **P&L impact** | Eliminates: hardware revenue (would have been significant at EUR 130/unit), hardware COGS (EUR 80-100/unit estimated), logistics costs, returns processing, and working capital tied up in CGM inventory. Net effect: lower revenue but dramatically higher margins and simpler operations. The CGM revenue opportunity forgone could be EUR 100-500K over 24 months, but the COGS and operational complexity would have consumed most of it. |
| **Source** | D3, R1 (CGM Software-Only Model), ZOE business model pivot, Supersapiens closure, Dexcom API documentation |
| **Risk if wrong** | If a competitor launches a successful CGM hardware model in Berlin (e.g., partnerships with German pharmacies), alche lacks a physical CGM offering to compete. Mitigant: BYOD approach means any user with a CGM can connect. The addressable market for CGM users is currently small (estimated 50-100K consumer CGM users in Germany). |

---

### IMP-6: Hybrid Claude + Gemini AI Stack (Not Single Provider)

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-6 |
| **Title** | Dual AI provider strategy instead of single vendor |
| **What was decided** | Claude Sonnet 4.5 for high-stakes medical interpretation (blood panels). Gemini Flash 2.0/2.5 for high-volume routine tasks (daily insights, meal recommendations, behavior nudges). Blended cost EUR 0.35/user/mo. GDPR compliance via Vertex AI Frankfurt (europe-west12) + Google Cloud. |
| **What the alternative was** | Single Claude provider (EUR 0.40-0.70/user/mo, simpler but more expensive for routine tasks) or single Gemini provider (cheaper but 34% diagnostic accuracy vs. Claude's 54% for blood panels). |
| **Why** | The two use cases have fundamentally different requirements. Blood panel interpretation is a high-stakes, low-frequency task (1x/month per user) requiring maximum accuracy -- Claude Sonnet 4.5 at 54% diagnostic accuracy is significantly better than Gemini's 34%. Daily insights and meal recommendations are low-stakes, high-frequency tasks (9-14x/month) where Gemini Flash 2.0 is 10x cheaper than Claude and sufficient quality. The hybrid approach is 40-50% cheaper than all-Claude and significantly more accurate than all-Gemini for the critical medical use case. |
| **P&L impact** | EUR 0.35/user/mo vs. EUR 0.55/user/mo (all-Claude mid-range) = 36% savings. At 339 subs (M24): EUR 119/mo vs. EUR 187/mo. Over 24 months cumulative: ~EUR 1,600 vs. ~EUR 2,500. The absolute savings are small (EUR 900 over 24 months) but the per-user cost matters for scaling economics. At 10,000 subscribers, the difference would be EUR 2,000/mo. |
| **Source** | D6, R5 (Claude AI Costs), R9 (AI API Comparison), Vertex AI Frankfurt region |
| **Risk if wrong** | Dual-provider complexity: two API integrations to maintain, two sets of prompts to optimize, two billing relationships to manage. If one provider changes pricing dramatically, the cost structure shifts. If Claude's diagnostic accuracy advantage narrows, the justification for the more expensive provider weakens. |

---

### IMP-7: 52/38/10 Subscription Tier Split

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-7 |
| **Title** | Subscription tier split: 52% Core, 38% Pro, 10% Premium |
| **What was decided** | Fixed tier allocation: 52% of subscribers at EUR 19/mo (Core), 38% at EUR 49/mo (Pro), 10% at EUR 99/mo (Premium). Applied uniformly across all 24 months. |
| **What the alternative was** | Different splits (e.g., 40/40/20 would yield ARPU of EUR 47.00 instead of EUR 38.44) or evolving splits (more Core early, more Pro later as users upgrade). |
| **Why** | The split reflects typical freemium-to-premium conversion patterns. Core at EUR 19 captures price-sensitive users who want basic features. Pro at EUR 49 is the "sweet spot" -- the primary revenue tier. Premium at EUR 99 captures power users. The 52/38/10 split results in a weighted ARPU of EUR 38.44, which is below the headline EUR 49 Pro price. P5 flagged this as important for honest investor communication -- do not present EUR 49 as the ARPU. |
| **P&L impact** | Subscription ARPU at EUR 38.44 means 339 subscribers generate ~EUR 13K/mo in subscription MRR, not ~EUR 16.6K (if all were Pro). The tier split reduces subscription revenue by ~22% vs. an all-Pro assumption. Over 24 months, total subscription revenue is lower by ~EUR 20-30K. |
| **Source** | Standard SaaS tier distribution assumptions, P5 ARPU analysis |
| **Risk if wrong** | If actual tier split skews more toward Core (e.g., 70/20/10), ARPU drops to EUR 30.10 and subscription revenue is 22% lower than modeled. If the Pro tier is more attractive (e.g., 35/50/15), ARPU increases to EUR 46.35. The model does not account for tier migration (users upgrading from Core to Pro over time), which is common in SaaS. |

---

### IMP-8: 10% Contingency Buffer on All OpEx

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-8 |
| **Title** | 10% contingency buffer applied to all operating expenses |
| **What was decided** | A 10% buffer (Assumptions!B93) is applied to total OpEx (pre-contingency) every month. This adds EUR 1.5-3K/mo to costs as the business scales. |
| **What the alternative was** | No contingency (presents a tighter model to investors) or higher contingency (15-20%, more conservative). |
| **Why** | Standard practice for pre-seed financial models. Unexpected costs always arise -- regulatory changes, equipment failures, staff turnover, supplier price increases. 10% is a moderate buffer that demonstrates financial prudence without making the model look overly conservative. |
| **P&L impact** | At M24 with ~EUR 30K monthly OpEx, contingency adds ~EUR 3K/mo. Over 24 months, total contingency is approximately EUR 40-60K. This reduces cumulative cash by EUR 40-60K but provides a realistic cushion. |
| **Source** | Standard financial modeling practice |
| **Risk if wrong** | If actual unexpected costs exceed 10% of OpEx (e.g., a major regulatory change or equipment failure), the buffer is insufficient. If costs come in under budget, the contingency is an unnecessary drag on projected profitability. Most investors prefer seeing a contingency -- its absence would be a red flag. |

---

### IMP-9: 2-Month Inventory Pipeline for Working Capital

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-9 |
| **Title** | Working capital modeled as 2-month inventory pipeline |
| **What was decided** | The Cash Flow sheet assumes alche must carry 2 months of expected retail inventory at COGS cost. When retail volume grows, the delta in inventory value is a cash outflow that does not appear on the P&L. |
| **What the alternative was** | No working capital modeling (P&L = cash, as in most pre-seed models), 1-month pipeline (tighter but riskier for stockouts), or 3-month pipeline (more conservative, ties up more cash). |
| **Why** | Wholesale ordering with Net 60 payment terms (Ankorstore, Faire) means inventory must be ordered approximately 2 months before it is sold. You cannot order today and sell tomorrow. A 2-month pipeline is standard for retail businesses with wholesale supply chains. P5 flagged that the P&L without working capital overstates cash by approximately EUR 218K at M24. |
| **P&L impact** | EUR 218K in cash is consumed by inventory over 24 months. This is not visible on the P&L -- it only appears on the Cash Flow sheet. Actual M24 cash is ~EUR 377K, not ~EUR 595K. The 2-month pipeline is the primary driver of the P&L-vs-cash gap. |
| **Source** | P5 (Growth CFO), Ankorstore Net 60 terms, Faire Net 60 terms, R10 wholesale platform research |
| **Risk if wrong** | If 2 months is insufficient (supplier lead times are longer, or product diversity requires broader inventory), actual working capital needs could be 3-4 months. At 4,600 units/mo x EUR 23.50 x 4 months = EUR 432K tied up in inventory. This would push actual cash dangerously low and could require a larger raise. |

---

### IMP-10: Founder Salaries at EUR 50K/yr

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-10 |
| **Title** | Both founders at EUR 50,000/year gross salary |
| **What was decided** | Timu (CEO) and Daria (COO) each receive EUR 4,166/mo gross (EUR 50K/yr). Fully loaded at 1.25x: EUR 5,208/mo each, EUR 10,416/mo combined. |
| **What the alternative was** | Zero salary (founders live on savings), minimum salary (EUR 30K/yr), or market-rate salary (EUR 70-90K/yr for Berlin CEO/COO). |
| **Why** | EUR 50K/yr is P7-validated as viable for pre-seed. It is below Berlin tech market rates but sustainable for founders committed to the business. Zero salary creates personal financial stress that degrades decision-making. Market-rate salary (EUR 70-90K) would consume EUR 175-225K/yr in payroll for founders alone, straining the EUR 500K raise. EUR 50K strikes a balance between founder sustainability and capital conservation. |
| **P&L impact** | Combined founder payroll: EUR 10,416/mo fully loaded = EUR 249,984 over 24 months. This is the single largest payroll expense. If founders took EUR 70K each, payroll would increase by EUR 50K/yr = EUR 100K over 24 months (20% of the total raise). |
| **Source** | P7 (HR Manager), standard pre-seed founder compensation |
| **Risk if wrong** | If founders cannot sustain EUR 50K/yr (high Berlin cost of living), they may need to supplement with savings or consulting work, reducing focus on alche. If the business is successful and the founders do not increase their salary post-M12 (when the business is profitable), there is a tax optimization question about retained earnings vs. salary. |

---

### IMP-11: CTO Hired at M18 (Not Earlier)

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-11 |
| **Title** | CTO hired at M18, recruited at M17 |
| **What was decided** | The CTO joins at M18 (EUR 6,500/mo gross, EUR 78K/yr) with recruitment at M17 (EUR 18K headhunter fee) and onboarding at M18 (EUR 3.5K equipment). No CTO for the first 17 months. |
| **What the alternative was** | CTO from M1 (co-founder level), CTO from M6 (post-launch), or no CTO in the 24-month model. |
| **Why** | The CTO is described as a "funding unlocks this hire" position. The EUR 500K raise is insufficient to fund a CTO from M1 at EUR 78K/yr (EUR 8.1K/mo fully loaded). Delaying to M18 means the CTO arrives when the business is already profitable and generating revenue, reducing the cash strain. The EUR 1,500/mo app maintenance retainer covers development needs in M1-M17. The CTO hire requires demonstrated traction to recruit a quality candidate -- the M18 timing gives 14 months of revenue data as a recruiting tool. |
| **P&L impact** | CTO payroll (M18-M24): EUR 8,125/mo x 7 months = EUR 56,875. Plus recruitment (EUR 18K) and onboarding (EUR 3.5K) = EUR 78,375 total CTO-related cost. If hired at M6, this would be EUR 8,125 x 19 months + EUR 18K + EUR 3.5K = EUR 175,875 -- EUR 97K more. |
| **Source** | Model architecture, P7 (HR Manager), founder decision |
| **Risk if wrong** | 17 months without a CTO means: (a) technical debt accumulates from agency-built code, (b) no senior technical leadership for architecture decisions, (c) app development limited to agency retainer capacity (EUR 1,500/mo). If the app requires significant iteration in M4-M17, the agency model may be insufficient. This is the most commonly flagged gap by investors in the model. |

---

### IMP-12: Retail Volume at M24 (4,600 Units/Month)

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-12 |
| **Title** | 4,600 retail product units/month by M24 |
| **What was decided** | Retail product volume follows a growth curve from 0 (M1-M3) to 50 (M4) to 4,600 (M24). This is the single largest revenue assumption in the model. |
| **What the alternative was** | Lower volume (2,000-3,000 units, more conservative), higher volume (6,000+, more aggressive), or volume tied to subscriber count (e.g., 5 units/subscriber/month). |
| **Why** | The volume assumes multiple sales channels: walk-in retail at the physical space, potential e-commerce (not explicitly modeled), and potential B2B wholesale. With only 339 subscribers, ~92.6% of sales must come from non-subscribers. This was flagged as "extremely aggressive" by both P1 (Angel Investor) and P5 (Growth CFO). For comparison, early D2C supplement brands sell 2,000-8,000 units/month at seed stage. |
| **P&L impact** | At EUR 49/unit, 4,600 units/mo = EUR 225,400/mo in retail revenue. This represents ~85% of total M24 revenue. Retail is THE revenue engine of the business. If volume is 50% lower (2,300 units), retail revenue drops to EUR 112,700/mo -- the business is still profitable but significantly less so. If volume is 30% lower (3,220 units), retail revenue is EUR 157,780/mo -- still the dominant stream. |
| **Source** | Growth Curves row 4 (hardcoded), P1/P5 volume validation flags, D2C supplement brand benchmarks |
| **Risk if wrong** | This is the highest-risk assumption in the entire model. 4,600 units/mo from a single Berlin location with 339 subscribers requires ~153 units/day sold to non-subscribers. At 8 hours/day, that is ~19 units/hour to walk-in customers. If the space attracts 50-100 walk-in customers/day, each must buy 1.5-3 units. This is plausible for a high-traffic wellness space but aggressive for a new brand. The channel breakdown (walk-in vs. e-commerce vs. B2B) is not modeled, which P1/P5 flagged as a credibility gap. |

---

### IMP-13: "Product Commerce with Subscription Wrapper" Positioning

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-13 |
| **Title** | Business model: product commerce with subscription wrapper |
| **What was decided** | Subscriptions are the retention and data engine, not the revenue engine. Retail products drive ~85% of revenue by M24. The subscription provides personalization, community access, and AI-powered health recommendations that keep users coming back to buy products. |
| **What the alternative was** | Positioning as a subscription-first business (like ZOE, Noom, or Headspace) where subscription MRR is the primary revenue metric. |
| **Why** | P5 identified that only ~4.7% of M24 revenue comes from subscriptions. Presenting alche as a subscription business invites 8-15x ARR valuation multiples -- but the subscription revenue does not support it. Product commerce businesses are valued at 2-4x revenue. The honest positioning is "Aesop with a membership layer, not Netflix with a store." The subscription creates the data moat that makes product recommendations defensible and retail sales sticky. |
| **P&L impact** | No direct P&L change -- this is a narrative and valuation decision. However, it affects investor expectations. At 2-4x revenue valuation, EUR 2.65M trailing 12-month revenue (Y2) = EUR 5.3-10.6M valuation. At 8-15x ARR on EUR 156K subscription ARR (339 subs x EUR 38.44 ARPU x 12) = EUR 1.2-2.3M -- below the EUR 2.5M valuation cap. The product commerce valuation supports the cap; the subscription valuation does not. |
| **Source** | P5 (Growth CFO), revenue mix analysis |
| **Risk if wrong** | If investors expect subscription metrics (MRR growth, net revenue retention, NDR), alche's 8% monthly churn and low subscription ARPU will underperform expectations. Conversely, if investors understand the product commerce model, the strong retail margins (52%) and growing volume are compelling. The risk is in mismatched investor expectations, not in the business model itself. |

---

### IMP-14: Break-Even at Month 11-13

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-14 |
| **Title** | EBITDA break-even targeted at M11-13 |
| **What was decided** | The model shows EBITDA turning positive around M10-M12, with operational break-even (revenue consistently exceeding costs) achieved by M11-M13. Cash break-even (cumulative cash exceeding EUR 500K starting point) around M23-24. |
| **What the alternative was** | Faster break-even (M6-8, by cutting costs aggressively) or later break-even (M18-20, by investing more in growth). |
| **Why** | M11-M13 break-even reflects the natural ramp of a multi-stream physical+digital business. The physical space opens at M4, revenue streams need 6-8 months to scale, and the growing retail volume eventually overwhelms the fixed cost base. Earlier break-even would require either lower fixed costs (cutting compliance, insurance, or staff -- all of which were persona-validated as necessary) or higher early revenue (which the market timing does not support). |
| **P&L impact** | Total cash consumed before break-even: approximately EUR 130-180K (EUR 500K starting cash minus EUR 320-370K at the trough around M12). This means the business uses ~26-36% of the raise before becoming self-sustaining. |
| **Source** | P&L model output, locked data ("Break-even: Month 12, ~145 paying subscribers + EUR 10K/month space") |
| **Risk if wrong** | If break-even is delayed to M18+ (due to lower revenue, higher costs, or delayed space opening), cumulative cash consumed could reach EUR 250-300K, leaving minimal buffer for working capital. In the bear case (0.6x revenue), break-even may not occur within the 24-month window, requiring bridge financing. |

---

### IMP-15: No VAT Modeling (Net of VAT Assumption)

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-15 |
| **Title** | All amounts modeled net of VAT |
| **What was decided** | The entire P&L is presented "net of VAT" as stated in the model header. No VAT collection, remittance, or cash timing is modeled. |
| **What the alternative was** | Modeling VAT explicitly by category: subscriptions (digital) at 19%, smoothies to-go potentially at 7%, supplements at 7% (food) or 19% (depending on classification), LED services at 19%. |
| **Why** | VAT is a pass-through -- the company collects it from customers and remits it to the Finanzamt. In theory, it does not affect profitability. In practice, VAT creates cash timing differences (you collect monthly, remit monthly or quarterly) and the classification of supplements (7% food vs. 19% general) affects consumer-facing pricing. The decision to model net of VAT simplifies the P&L at the cost of losing cash timing detail. |
| **P&L impact** | No direct P&L impact (VAT is a pass-through). However, the cash timing effect of collecting 19% VAT on EUR 264K/mo revenue (EUR 50K in VAT) and remitting it monthly creates a ~EUR 50K float that is not reflected in the Cash Flow sheet. This could modestly improve or worsen actual cash depending on the timing of Umsatzsteuer-Voranmeldung submissions. |
| **Source** | Improvement #6 (approved but not implemented), standard pre-seed model simplification |
| **Risk if wrong** | Low risk for the P&L itself. The risk is in cash timing: if VAT classification disputes arise (e.g., are supplements 7% or 19%?), there could be back-taxes. More relevant is that consumers see VAT-inclusive prices, so the actual shelf price for a EUR 49 supplement is EUR 49 inclusive of VAT (EUR 41.18 net at 19% or EUR 45.79 net at 7%). The model assumes EUR 49 is net, which means the consumer-facing price would be EUR 52.43-58.31 inclusive of VAT. |

---

### IMP-16: Linear 36-Month Depreciation

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-16 |
| **Title** | All CapEx depreciated linearly over 36 months |
| **What was decided** | All 15 CapEx items share a single depreciation period of 36 months (Assumptions!B117). Monthly depreciation = (M1 CapEx + M3 CapEx) / 36 from M3 onward. |
| **What the alternative was** | Category-specific depreciation (legal costs written off immediately as expenses, equipment over 5-7 years, building improvements over lease term). |
| **Why** | Simplification for a pre-seed model. In practice, German tax depreciation (AfA -- Absetzung fur Abnutzung) uses asset-specific useful life tables. Kitchen equipment is typically 5-10 years, IT equipment 3-5 years, building improvements over lease term. The 36-month blanket rate is a reasonable approximation for the mix of assets in this model. |
| **P&L impact** | Monthly depreciation: ~EUR 2,732/mo from M3 onward ((EUR 46,000 + EUR 52,360) / 36). Depreciation is a non-cash charge that reduces accounting profit. For the Cash Flow sheet, depreciation is irrelevant (CapEx is treated as cash outflow when spent). |
| **Source** | Standard modeling simplification, German AfA tables |
| **Risk if wrong** | For tax purposes, the actual AfA may differ from 36 months, which could change the timing of tax deductions. This would not affect cash flow but could affect when tax provisions activate. If equipment needs replacement before 36 months (e.g., blenders fail at 24 months), there is an additional CapEx not in the model. |

---

### IMP-17: Doctor Clinic Cap at 20

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-17 |
| **Title** | Doctor SaaS capped at 20 clinics |
| **What was decided** | Maximum 20 doctor clinics on the platform, reached by M15 and held constant through M24. Revenue caps at EUR 1,980/mo (20 x EUR 99). |
| **What the alternative was** | Uncapped growth (100+ clinics over 24 months) or lower cap (5-10 clinics for a hyper-local model). |
| **Why** | 20 clinics is a realistic target for a single-city pre-seed operation. Each clinic requires manual onboarding, verification (EUR 25/new doctor), and relationship management. With no dedicated sales team (Partner Manager handles this from M6), 20 is an achievable but ambitious target. The doctor SaaS is ~1% of M24 revenue -- it is a credibility feature, not a revenue driver. |
| **P&L impact** | Doctor revenue caps at EUR 1,980/mo = EUR 23,760/yr. Total doctor revenue over 24 months is ~EUR 30K. COGS is minimal (20 x EUR 25 verification = EUR 500 total). Contribution margin on doctor SaaS is ~98%. Small but clean. |
| **Source** | Assumptions!B33, Growth Curves row 9 |
| **Risk if wrong** | If doctor adoption is slower (e.g., only 5-10 clinics by M24), revenue impact is EUR 990-1,485/mo less. Given that doctor SaaS is ~1% of total revenue, the financial risk is negligible. The reputational risk is larger: if the doctor SaaS feature fails to gain traction, it undermines the "medically credible" positioning. |

---

### IMP-18: Smoothie Bar at EUR 9.67 Average Price

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-18 |
| **Title** | Smoothie average price at EUR 9.67 with 65% gross margin |
| **What was decided** | Average smoothie price EUR 9.67 (Assumptions!B26). COGS rate 35% of revenue (Assumptions!B27). Volume grows from 100/mo (M4) to 2,000/mo (M24). Break-even is ~45 drinks/day at this price. Base cost EUR 9,022/mo for the bar operation (R2). |
| **What the alternative was** | Lower price point (EUR 6-7, cafe-style pricing) or higher price point (EUR 12-15, juice bar premium). |
| **Why** | EUR 9.67 is validated by R2 (Cost Analysis -- Smoothie Bar) as the average price for a premium functional smoothie in Berlin. This is higher than a basic cafe smoothie (EUR 5-7) but below ultra-premium juice bars (EUR 12-15). The 65% gross margin reflects premium ingredients (adaptogens, superfoods) with controlled portion sizes. Break-even at 45 drinks/day (~2 per hour over 8 hours) is achievable for a well-located Berlin wellness space. |
| **P&L impact** | At M24: 2,000 smoothies x EUR 9.67 = EUR 19,340/mo (7% of total revenue). COGS: 35% x EUR 19,340 = EUR 6,769/mo. Gross profit: EUR 12,571/mo. The smoothie bar is not a major profit driver but it drives foot traffic that enables the much larger retail product sales. |
| **Source** | R2 (Cost Analysis -- Smoothie Bar) |
| **Risk if wrong** | If smoothie volume is lower than 45/day average, the smoothie bar operates at a loss (base cost EUR 9,022/mo). At 30 drinks/day average, smoothie revenue is ~EUR 8,700/mo vs. EUR 9,022/mo base cost -- breakeven is tight. The smoothie bar's value is not in its own P&L contribution but in driving foot traffic for retail product sales. |

---

### IMP-19: Naming Convention -- "Retail Products" not "Potions"

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-19 |
| **Title** | Product line renamed from "Potions" to "Retail Products" |
| **What was decided** | All references in the v3.1 model changed from "Potions" to "Retail Products" throughout the P&L, Assumptions, Growth Curves, and all documentation. |
| **What the alternative was** | Keeping "Potions" as the internal/model name for the curated supplement line. |
| **Why** | "Retail Products" is more investor-friendly and self-explanatory. "Potions" is brand language (aligned with the "neo-apothecary" aesthetic) but could confuse investors reviewing the Excel who might not understand what a "potion" is in a financial context. |
| **P&L impact** | None (naming only). |
| **Source** | v3.1 Timu correction |
| **Risk if wrong** | None. |

---

### IMP-20: No E-Commerce Revenue Modeled

| Field | Detail |
|-------|--------|
| **Decision ID** | IMP-20 |
| **Title** | No online/e-commerce revenue in the 24-month model |
| **What was decided** | All retail product sales are assumed to be in-person at the physical space. No e-commerce platform, no Shopify, no online sales channel. |
| **What the alternative was** | E-commerce starting M6-M12, contributing 20-40% of retail volume by M24. |
| **Why** | Implied by the model structure -- no e-commerce COGS (shipping, packaging, returns), no e-commerce marketing budget, no e-commerce platform costs. The 4,600 units/mo at M24 all flow through the physical space. This is a deliberate simplification, but it creates the credibility gap flagged by P1/P5: how do 4,600 units sell to non-subscribers through a single physical location? |
| **P&L impact** | No direct P&L impact (e-commerce is not modeled). However, the absence of e-commerce makes the 4,600 units/mo volume harder to justify. If e-commerce were added, it would introduce shipping COGS (~EUR 5-8/order), platform costs (Shopify EUR 79-299/mo), and marketing costs, but would make the volume assumptions more credible by providing a second sales channel. |
| **Source** | Model architecture (absence of e-commerce lines), P1/P5 volume flags |
| **Risk if wrong** | If the physical space alone cannot support 4,600 units/mo, e-commerce is the natural escape valve. Not having it modeled means investors cannot evaluate the multi-channel potential. This is more of a presentation gap than a financial risk -- e-commerce could be added as a Phase 2 revenue line. |

---

## SECTION 5: RESEARCH DOCUMENT INDEX

The following research documents (R1-R10) informed the decisions above. Each is cited as a source for one or more decisions.

| Ref | Topic | Key Output | Decisions Informed |
|-----|-------|------------|-------------------|
| R1 | CGM Software-Only Model | BYOD via Dexcom OAuth 2.0; EUR 30K regulatory cost | D3, IMP-5 |
| R2 | Cost Analysis -- Smoothie Bar | EUR 9,022/mo base cost; 65% margin; EUR 9.67 avg price | D4, IMP-18 |
| R3 | HWG Legal -- Doctor Revenue | StGB 299a/299b; commissions illegal; SaaS safe | D1 |
| R4 | Restaurant Feature | Feature-only Phase 1; zero revenue | D2 |
| R5 | Claude AI Costs | EUR 0.40-0.70/user/mo; internal EUR 210/mo | D6, IMP-6 |
| R6 | UX Design Budget | EUR 5,000/mo (M1-6), EUR 3,500/mo (M7-12), EUR 3,000/mo (M13-24) | v3.1-C |
| R7 | Product Waste Rates | Capsules 4%, powders 7%; EUR 50-200/mo | D7 |
| R8 | Software License Stack | PostHog free, Crisp $95/mo, Terra deferred | D8, D9 |
| R9 | AI API Comparison (Claude vs Gemini) | Hybrid wins; EUR 0.35 blended; Claude 54% vs Gemini 34% diagnostic accuracy | D6, IMP-6 |
| R10 | Retail Brands Wholesale | EUR 49 validated; COGS EUR 22-25; NMN not approved; Ankorstore/Faire | D11, IMP-2, IMP-9 |

---

## SECTION 6: DECISION DEPENDENCY MAP

Some decisions depend on or interact with others. Key dependencies:

| Decision | Depends On | Relationship |
|----------|-----------|-------------|
| D1 (Doctor SaaS) | R3 (HWG Legal) | Legal research drove the model change |
| D3 (CGM BYOD) | R1, D8 (Terra deferred) | Software-only requires API access; Terra deferred means HealthKit/Health Connect only |
| D4 (Physical space) | D5 (CapEx), IMP-1 (Berlin) | Space creates CapEx requirement and is Berlin-specific |
| D6 (AI hybrid) | R5, R9 | Two research documents validated the hybrid approach |
| D8 (Terra deferred) | D6, D3 | Terra unnecessary if using free HealthKit + BYOD model |
| D11 (COGS corrected) | R10 | Research drove the correction from EUR 11.50 to EUR 23.50 |
| v3.1-A (Growth Marketer removed) | IMP-10 (founder salary) | Timu handles marketing; his salary is already in the model |
| v3.1-B (Subs gated M4+) | D4 (physical space) | App launches with space; no subscribers before physical presence |
| v3.1-C (UX to CapEx) | D5 (CapEx section) | CapEx section must exist for this reclassification |
| v3.2-A (LED free) | D4 (physical space) | LED is a space amenity, not standalone service |
| P5 (Cash Flow gap) | D11 (COGS corrected), IMP-9 (working capital) | Higher COGS = more working capital needed = larger cash gap |
| IMP-12 (4,600 units) | IMP-2 (EUR 49 price), D11 (COGS) | Volume x price = revenue; volume x COGS = working capital |
| IMP-13 (product commerce) | IMP-12, IMP-7 (tier split) | Revenue mix analysis depends on retail volume vs. subscription revenue |

---

## SECTION 7: OPEN RISKS AND UNRESOLVED FLAGS

The following items were flagged during the decision process but NOT resolved in the model:

| # | Issue | Flagged By | Status | Impact If Unresolved |
|---|-------|-----------|--------|---------------------|
| 1 | Retail volume at M24 (4,600 units) needs channel breakdown | P1, P5 | OPEN | Investor credibility gap. No justification for how 92.6% of sales come from non-subscribers. |
| 2 | EUR 500K may be insufficient (P1 recommended EUR 600-650K) | P1 | OPEN | If bear case + working capital push cash to zero, bridge round needed at unfavorable terms. |
| 3 | Subscription vs. product commerce narrative unresolved | P5 | OPEN | Affects valuation methodology. Product commerce: 2-4x revenue. Subscription: 8-15x ARR. Model supports product commerce valuation. |
| 4 | CTO salary below market (EUR 78K vs. EUR 80-187K range) | P7 | OPEN | May need to offer more to attract quality candidate. EUR 10-20K/yr increase not modeled. |
| 5 | NMN not approved as EU Novel Food | P4 | FLAGGED | Product selection decision. Cannot stock NMN supplements. Not a financial modeling issue but a business constraint. |
| 6 | No e-commerce channel modeled | Implicit | OPEN | 4,600 units/mo from single physical location is the credibility gap. E-commerce would help justify volume. |
| 7 | Space opening delay risk | Implicit | OPEN | If M4 space opening delays by 2 months, all revenue shifts right. EUR 36-40K additional burn. |
| 8 | VAT classification for supplements (7% vs. 19%) | P2, Improvement #6 | OPEN | Affects consumer-facing pricing and cash timing. Not modeled. |

---

*This document captures every business decision -- explicit, implicit, and corrective -- that shaped the alche 24-month P&L model from v1 through v3.2. Total decisions documented: 11 explicit (D1-D11), 7 persona audits (P1-P7), 5 version corrections (v3.1-A through v3.1-D, v3.2-A), 20 implicit strategic decisions (IMP-1 through IMP-20), and 8 open risk flags.*
