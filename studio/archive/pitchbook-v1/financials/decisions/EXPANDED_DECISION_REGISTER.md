# EXPANDED DECISION REGISTER: alche Financial Model v3.3+
**Date:** 2026-02-25
**Status:** Phase 1 Research Synthesis Complete
**Source Files:** `_RESEARCH_REVENUE_EXPANSION.md`, `_RESEARCH_APP_BUILD.md`, `_RESEARCH_SPACE_OPEX_GAPS.md`, `_FINAL_PNL_ASSUMPTIONS.md`, `PNL_INVESTOR_BRIEF.md`
**Model Reference:** `build_excel_pnl_v3.py` (v3.3, 16 CapEx items, EUR 148K total)
**Hard Ceiling:** EUR 500K pre-seed

---

## REVENUE DECISIONS (EX-01 through EX-05)

---

### EX-01: Annual Subscription Option

**Priority:** CRITICAL
**Category:** Revenue
**Source research:** Agent A (Revenue Expansion)

**Options:**
- Option A: Offer annual plans from M1 at "2 months free" (16.7% discount) with 30% annual mix target by M12 -- +EUR 20,000-35,000 cumulative LTV uplift by M12, plus upfront cash flow acceleration
- Option B: Launch monthly-only, add annual in M6 -- forfeits 5 months of cash flow benefit and early cohort annual lock-in
- Option C: Offer annual plans with a steeper 25% discount -- higher conversion but trains users to expect discounts; cannibalization risk

**Recommended:** Option A -- Launch annual subscriptions at M1 with "2 months free" pricing.

**Rationale:** Zero implementation cost (just a pricing toggle at checkout). Annual subscribers have 92% retention vs. 68% monthly (Baremetrics). The 30% annual mix delivers +EUR 13,230 in upfront cash in the first month alone (at 100 Protocol subscribers). This is the single highest-impact, lowest-effort change available.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Add three new assumption rows for annual pricing; add annual mix % assumption; modify subscription revenue formula to calculate blended monthly revenue (annual subscribers recognized monthly at discounted rate)
- Variable names: `annual_essential_price = 190`, `annual_protocol_price = 490`, `annual_concierge_price = 990`, `annual_mix_pct = 0.30`
- Values: EUR 190/yr, EUR 490/yr, EUR 990/yr; 30% of subscribers on annual by M12 (ramp: 10% M1, 20% M6, 30% M12)
- Starting month: M1
- Revenue (not CapEx or OpEx)
- Note: Annual pre-payments create deferred revenue liability on the balance sheet. Cash is received upfront but recognized over 12 months at EUR 15.83/40.83/82.50 per month respectively.

**Investor communication note:** Annual option strengthens the retention narrative -- 92% annual retention vs. 68% monthly -- and demonstrates pricing discipline from Day 1.

---

### EX-02: B2B Corporate Wellness Channel (BGM Tax Angle)

**Priority:** HIGH
**Category:** Revenue
**Source research:** Agent A (Revenue Expansion)

**Options:**
- Option A: Model B2B revenue starting M6 at mid scenario (2 clients x 25 employees x EUR 39/mo = EUR 1,950/mo by M12) -- EUR 15,000-23,000/year
- Option B: Model conservative (1 client x 15 employees x EUR 39/mo = EUR 585/mo by M12) -- EUR 5,000-7,000/year
- Option C: Exclude entirely from base model; present as upside only -- EUR 0 revenue but cleaner base case

**Recommended:** Option B -- Model 1 client by M12 at EUR 585/mo. Show Option A as bull case upside.

**Rationale:** B2B sales cycles are 6-12 months. For a pre-seed startup with no enterprise sales team, one client in 6 months via Daria's warm network is credible. Two clients is aspirational. The BGM EUR 600 tax-free angle is powerful (alche Protocol tier at EUR 49/mo = EUR 588/yr, just under the EUR 600 limit) but unproven at this stage. Model conservatively, pitch ambitiously.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Add new revenue line "B2B Corporate Wellness" in Growth Curves sheet; add B2B ARPU assumption (EUR 39 PEPM); add client ramp (0 M1-M5, 1 client M6, 1-2 clients M9-M12)
- Variable names: `b2b_pepm = 39`, `b2b_avg_employees = 15`, `b2b_clients_m6 = 1`, `b2b_clients_m12 = 1`
- Value: EUR 585/mo from M6 (base case)
- Starting month: M6
- Revenue

**Investor communication note:** The EUR 600 BGM tax-free hook is an investor-grade differentiator -- "Every German employer can give our Protocol tier to employees completely tax-free." Lead with the mechanism; let the revenue follow.

---

### EX-03: Gift Cards (Breakage + Customer Acquisition)

**Priority:** MEDIUM
**Category:** Revenue
**Source research:** Agent A (Revenue Expansion)

**Options:**
- Option A: Model gift cards from M4 at mid scenario (30 cards/mo x EUR 49 = EUR 1,470/mo gross, EUR 147/mo breakage at 10%) -- EUR 17,640/yr gross
- Option B: Model conservatively at low scenario (10 cards/mo x EUR 49 = EUR 490/mo gross) -- EUR 5,880/yr gross
- Option C: Defer to M6; include only as a footnote in the model

**Recommended:** Option B -- Model 10 cards/month from M4. Ramp to 20/month by M10 (Christmas seasonality).

**Rationale:** Gift cards are low-complexity (Gift Up! integration, <1 week setup, 3.49% + Stripe 1.5% = ~5% platform cost). At 10 cards/month, this is EUR 490/mo gross revenue -- modest but real cash arriving on Day 1 of the physical space. The breakage (10%, ~EUR 49/mo) is pure margin. The real value is customer acquisition: 25% of gift card redeemers are first-time customers, and 72% spend more than the card value.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Add new revenue line "Gift Card Sales" in Growth Curves; add Gift Up! platform fee as COGS (5.5% of gross); add breakage recognition note
- Variable names: `gift_card_avg_value = 49`, `gift_cards_per_month_m4 = 10`, `gift_cards_per_month_m10 = 20`, `gift_card_platform_fee = 0.055`, `gift_card_breakage_rate = 0.10`
- Value: EUR 490/mo gross from M4, ramping to EUR 980/mo from M10
- Starting month: M4
- Revenue (cash received immediately; 90% recognized on redemption, 10% recognized as breakage over time per IFRS 15)

**Investor communication note:** Gift cards serve as a customer acquisition channel first, revenue line second. The 25% new-customer-acquisition stat is the investor hook.

---

### EX-04: Space Subletting Revenue

**Priority:** HIGH
**Category:** Revenue
**Source research:** Agent A (Revenue Expansion)

**Options:**
- Option A: Model at mid scenario (9 hrs/week x EUR 30/hr x 4.3 weeks = EUR 1,161/mo) -- EUR 9,300/yr from M4
- Option B: Model conservatively with ramp (5 hrs/week M4-M6, 8 hrs/week M7-M9, 12 hrs/week M10-M12 at EUR 25/hr) -- ~EUR 540 ramping to EUR 1,290/mo
- Option C: Model at EUR 10K/mo as stated in the CLAUDE.md break-even target (EUR 10K/month space revenue already referenced)

**Recommended:** Option B -- Model a conservative ramp starting at EUR 540/mo in M4, reaching EUR 1,290/mo by M10.

**Rationale:** Utilization starts low (40% in M4) and ramps as alche's practitioner network is established. EUR 30/hr is the premium rate justified by the space quality, but first months will have lower occupancy. The CLAUDE.md reference to "EUR 10K/month space revenue" appears to be total space revenue (retail + smoothies + subletting + events), not subletting alone. Model subletting as one component.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Add new revenue line "Space Subletting" in Growth Curves; step function for utilization ramp
- Variable names: `sublet_rate_per_hour = 25`, `sublet_hours_m4_m6 = 5`, `sublet_hours_m7_m9 = 8`, `sublet_hours_m10_m12 = 12`, `weeks_per_month = 4.3`
- Value: EUR 538/mo (M4-M6), EUR 860/mo (M7-M9), EUR 1,290/mo (M10-M12)
- Starting month: M4
- Revenue

**Investor communication note:** Subletting to aligned practitioners (naturopaths, CGM consultants, breathwork coaches) creates an ecosystem effect -- practitioners become referral sources and their clients become alche members. This is community-building revenue, not generic real estate income.

---

### EX-05: Newsletter Sponsorship

**Priority:** LOW
**Category:** Revenue
**Source research:** Agent A (Revenue Expansion)

**Options:**
- Option A: Model a thin line starting M6 at EUR 150/mo, growing to EUR 400/mo by M12 (3,000 subscribers, EUR 75-150/placement x 2/month)
- Option B: Exclude from model entirely; mention as Phase 2 upside in the narrative
- Option C: Model aggressively at EUR 700/mo by M12 (6,000 subscribers)

**Recommended:** Option B -- Exclude from the base P&L model. Mention in narrative only.

**Rationale:** At 3,000 subscribers (realistic M12 target), newsletter sponsorship generates EUR 100-300/month -- immaterial relative to other revenue lines. Adding it to the model creates a false impression of revenue diversification while the actual amounts are negligible. Newsletter monetization becomes material (>EUR 1K/mo) only at 8,000+ subscribers, which is an M18+ milestone. Keep the model clean.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: No change to the spreadsheet model
- Variable name: N/A
- Value: EUR 0 in base model
- Starting month: N/A

**Investor communication note:** "We're building a 3,000+ subscriber newsletter as a community asset and brand channel. Monetization via sponsorship is a Phase 2 lever once we cross 8,000 subscribers." This is a better story than showing EUR 150/mo on a P&L.

---

## APP BUILD DECISION (EX-06)

---

### EX-06: App Build Approach (Budget Allocation)

**Priority:** CRITICAL
**Category:** Build Decision / CapEx
**Source research:** Agent B (App Build)

**Options:**
- Option A: Phase 1 FlutterFlow MVP via Xmethod Berlin (EUR 15,000-20,000, 3-4 months) + Phase 2 senior Flutter contractor via Arc.dev (EUR 10,000-14,000/mo for 12 months = EUR 120,000-168,000). Total M1-M16: EUR 160,000-214,000 -- EUR 271K-325K remaining for operations.
- Option B: Full agency build via Hybrid Heroes Berlin (EUR 58,000-133,000 build + EUR 5,000-12,000/mo retainer). Total M1-M16: EUR 118,000-277,000 -- more variable, timeline risk.
- Option C: Single senior Flutter contractor from Day 1 (EUR 36,000-66,000 build + EUR 3,000-6,300/mo retainer). Total M1-M16: EUR 78,000-142,000 -- single point of failure.
- Option D: FlutterFlow MVP only, no Phase 2 contractor (EUR 15,000-20,000 build + EUR 250-700/mo infrastructure). Total M1-M16: EUR 19,000-45,400 -- maximum budget preservation but accumulates technical debt.

**Recommended:** Option A -- Phase 1 FlutterFlow + Phase 2 Flutter contractor hybrid.

**Rationale:** The 4-month MVP deadline eliminates the full agency path (timeline confidence 2/5). FlutterFlow via Xmethod is the only realistic path to M4 launch. The Phase 2 contractor (M5-M16) progressively migrates from FlutterFlow to clean Flutter code, preparing for CTO handoff at M17-M18. This approach costs EUR 160K-214K total but preserves EUR 271K-325K for operations -- healthy for an 18-month runway.

**Current model gap:** The model allocates only EUR 15,000 for "App Design & Development (M1)" at B108. This is the UX/UI design budget only. The actual app BUILD cost (Phase 1 + Phase 2) is unmodeled and represents EUR 145,000-199,000 in additional CapEx/OpEx that the EUR 500K must absorb.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Split current EUR 15,000 "App Design & Development" into two lines: (1) "UX/UI Design" EUR 15,000 M1 CapEx (retain as-is), (2) NEW "App MVP Build -- FlutterFlow" EUR 20,000 M1-M4 CapEx (EUR 5,000/mo x 4). Add third line: "App Maintenance -- Flutter Contractor" EUR 10,000-12,000/mo OpEx from M5 onward (replaces existing EUR 1,500/mo "App maintenance retainer" at B56).
- Variable names: `ux_ui_design_capex = 15000`, `app_mvp_build_capex = 20000`, `flutter_contractor_monthly = 12000` (M5+, replaces `app_maintenance = 1500`)
- Values: EUR 15,000 (UX/UI, M1), EUR 20,000 (MVP build, M1-M4), EUR 12,000/mo (contractor, M5+)
- Starting month: M1 (build), M5 (contractor)
- CapEx (build) + OpEx (contractor retainer)
- CRITICAL: This changes the EUR 1,500/mo app maintenance assumption at B56 to EUR 12,000/mo from M5, adding EUR 10,500/mo in OpEx. This is the single largest model change in this register.

**Investor communication note:** "We build the MVP in 4 months using low-code for speed, then invest in proper Flutter engineering for scale. The CTO at M17-18 inherits a functional product with real users, not a blank slate."

---

## COST GAP DECISIONS (EX-07 through EX-14)

---

### EX-07: Physical Space Monthly Rent (M4 Transition)

**Priority:** CRITICAL
**Category:** Cost
**Source research:** Agent C (Space OpEx Gaps)

**Options:**
- Option A: Keep current model at EUR 2,500/mo Kaltmiete + EUR 325/mo Nebenkosten = EUR 2,825/mo -- conservative (covers A-location or larger space)
- Option B: Reduce to research-recommended EUR 1,200/mo Kaltmiete + EUR 240/mo Nebenkosten = EUR 1,440/mo for 50 sqm B-location in Prenzlauer Berg -- EUR 1,385/mo savings
- Option C: Use research mid-case with buffer: EUR 1,500/mo all-in (Kaltmiete + Nebenkosten) -- EUR 1,325/mo savings vs. current model

**Recommended:** Option C -- EUR 1,500/mo all-in, with EUR 200/mo utilities budgeted separately.

**Rationale:** The current model overstates rent by EUR 1,325/mo relative to verified Berlin market data for the target space (50 sqm, B-location, Prenzlauer Berg/Schoneberg). EUR 2,500 Kaltmiete implies an A-location or 80+ sqm space, neither of which is needed or justified at pre-seed. Correcting this releases EUR 1,325/mo (EUR 15,900/year) back into the budget. The co-working at EUR 750/mo (M1-M3) is already modeled and correctly ends at M3. One month of overlap (EUR 750 in M3) should be budgeted as a transition cost.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Update B62 ("Rent M4+ (physical space)") from EUR 2,500 to EUR 1,250 (Kaltmiete only, 50 sqm at ~EUR 25/sqm). Update B63 ("Nebenkosten M4+") from EUR 325 to EUR 250. Reduce B70 ("Utilities M4+") from EUR 500 to EUR 200. Add one-time EUR 750 transition cost in M3.
- Variable names: `rent_m4_kaltmiete = 1250`, `nebenkosten_m4 = 250`, `utilities_m4 = 200`
- Values: EUR 1,250 + EUR 250 + EUR 200 = EUR 1,700/mo total occupancy (vs. current EUR 3,325/mo)
- Starting month: M4 (replacing EUR 750 co-working from M1-M3)
- OpEx
- NET CHANGE: -EUR 1,625/mo from current model

**Investor communication note:** Honest occupancy costs for a 50 sqm wellness boutique in a B-location side street. We do not need Kastanienallee rents to build a community.

---

### EX-08: Community Manager Recruitment

**Priority:** LOW
**Category:** Cost
**Source research:** Agent C (Space OpEx Gaps)

**Options:**
- Option A: Self-recruit via Wellfound + founder network -- EUR 0 cost
- Option B: Promoted Wellfound listing -- EUR 500 one-time
- Option C: Agency recruitment -- EUR 4,400-8,784 (15-30% of EUR 29,280/yr salary)

**Recommended:** Option A -- Self-recruit. Budget EUR 500 as fallback.

**Rationale:** The Community Manager salary (EUR 2,440/mo gross = EUR 29,280/yr) is below Berlin market median (EUR 43,500/yr). This is a mission-driven hire attracted by culture and growth opportunity, not money. Recruiter fees of EUR 4,400+ are disproportionate for a below-market junior role. Daria's wellness community network and Instagram outreach should yield qualified candidates within 4-6 weeks.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Add contingency line "CM Recruitment Fallback" at EUR 500 in M5. Not critical -- can be absorbed by existing contingency buffer.
- Variable name: `cm_recruitment = 500`
- Value: EUR 500 one-time
- Starting month: M5
- OpEx (one-time)

**Investor communication note:** No material impact. Self-recruiting junior hires through founder networks is standard practice for pre-seed startups in Berlin.

---

### EX-09: Growth Marketer Recruitment

**Priority:** LOW
**Category:** Cost
**Source research:** Agent C (Space OpEx Gaps)

**Options:**
- Option A: Self-recruit via founder network + Wellfound -- EUR 500 (platform fees)
- Option B: Agency recruitment -- EUR 13,200 (20% of EUR 65,880/yr salary)
- Option C: Budget EUR 13,200 as contingency, spend only if network fails

**Recommended:** Option A with Option C as contingency flag. Model EUR 500 in base case.

**Rationale:** EUR 65,880/yr is competitive for Berlin mid-level growth marketers. Timu's marketing network and Berlin startup scene connections should surface candidates. Budget EUR 500 for Wellfound Essentials (EUR 140/mo x 2 months + promoted listing EUR 180). Flag EUR 13,200 agency contingency in model notes but do not include in base case burn.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Add one-time EUR 500 in M11 for Growth Marketer recruitment. Add model note: "Contingency EUR 13,200 if agency required."
- Variable name: `gm_recruitment = 500`
- Value: EUR 500 one-time
- Starting month: M11
- OpEx (one-time)

**Investor communication note:** No material impact. Flagged as contingency only.

---

### EX-10: CTO Recruitment Contingency

**Priority:** HIGH
**Category:** Cost
**Source research:** Agent C (Space OpEx Gaps)

**Options:**
- Option A: Budget EUR 19,000 as base-case cost in M14-M16 -- honest worst case
- Option B: Budget EUR 19,000 as contingency (flagged, not in base-case burn) -- spend only if network search fails at M15
- Option C: Reduce to EUR 10,000 assuming Wellfound + LinkedIn premium only

**Recommended:** Option B -- EUR 19,000 as flagged contingency. Include in the model as a separate contingency row, NOT in the base-case OpEx total.

**Rationale:** The model already has EUR 18,000 for CTO recruitment at B51 (M17). The research validates this at EUR 19,000 (20% of EUR 95,160/yr). However, the EUR 95,160/yr salary is significantly below Berlin CTO market median (EUR 133,000). This means the hire is more likely to come via network/equity-motivated search than traditional recruiter. Model the EUR 19,000 as a contingency visible to investors but excluded from the base-case monthly burn calculation. This avoids overstating burn while being transparent about the risk.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Update B51 from EUR 18,000 to EUR 19,000. Move to a "Contingency" section row and flag: "Network-first; agency fee only if M15 search fails." Exclude from base-case OpEx summation; include in bear-case scenario.
- Variable name: `cto_recruitment_contingency = 19000`
- Value: EUR 19,000 (contingency, not base case)
- Starting month: M14-M16 (earlier than current M17 to account for search lead time)
- OpEx (contingency, one-time)

**Investor communication note:** "CTO recruitment budgeted at EUR 19K contingency. Our first path is network-driven: angel investor intros, Berlin tech community, CTO Guild. The contingency funds a specialist recruiter only if the network path hasn't delivered by M15."

---

### EX-11: POS System Hardware + SaaS (TSE Compliance)

**Priority:** HIGH
**Category:** Cost / Build Decision
**Source research:** Agent C (Space OpEx Gaps)

**Options:**
- Option A: SumUp POS Kit + hardware TSE (EUR 1,250 one-time M3) + SumUp Essentials SaaS (EUR 39/mo from M4) -- total Year 1: EUR 1,250 + EUR 351 = EUR 1,601
- Option B: Free SumUp POS (EUR 0/mo) + hardware TSE (EUR 250) -- saves EUR 39/mo but loses inventory analytics and multi-staff features
- Option C: Shopify POS (EUR 79-299/mo) -- overkill and higher transaction fees (2.6-2.9% vs. SumUp 1.39%)

**Recommended:** Option A -- SumUp Kit + Essentials.

**Rationale:** TSE compliance (KassenSichV, mandatory since January 2023) is non-negotiable. Failure to comply risks EUR 25,000 fine and Kassennachschau audit. SumUp is Berlin-headquartered, supports Girocard (dominant German payment method), and the 1.39% transaction fee is the lowest available. The Essentials plan (EUR 39/mo) provides inventory tracking needed for retail product management and meets the ELSTER registration requirement introduced in 2025.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Add CapEx line "POS Hardware + TSE (M3)" at EUR 1,250. Update B75 ("POS system M4+") from EUR 50 to EUR 39 (SumUp Essentials actual price). Add transaction fee note: 1.39% of card-based space revenue as COGS.
- Variable names: `pos_hardware_capex = 1250`, `pos_saas_monthly = 39`
- Values: EUR 1,250 (M3 one-time CapEx), EUR 39/mo (M4+ OpEx)
- Starting month: M3 (hardware), M4 (SaaS)
- CapEx (hardware) + OpEx (SaaS)

**Investor communication note:** Standard German compliance requirement. SumUp is the market-standard POS for Berlin retail. EUR 1,250 one-time + EUR 39/mo ongoing.

---

### EX-12: Opening Inventory (Balance Sheet Item)

**Priority:** HIGH
**Category:** Cost (CapEx / Balance Sheet)
**Source research:** Agent C (Space OpEx Gaps)

**Options:**
- Option A: 2x minimum opening inventory = EUR 5,750 (50 units x 5 SKUs x EUR 11.50 COGS x 2) -- recommended retail best practice
- Option B: 1x minimum = EUR 2,875 -- lean launch, risk of stockouts
- Option C: 3x buffer = EUR 8,625 -- safe but ties up more working capital; perishability risk if shelf life is short

**Recommended:** Option A -- EUR 5,750 in M3.

**Rationale:** Opening with 2x expected first-month sell-through is the standard retail launch buffer. Under-stocking on Day 1 creates a poor first impression for a brand built on curation and quality. The EUR 5,750 is a working capital requirement, NOT a P&L expense -- it sits on the balance sheet as inventory and transitions to COGS only when units are sold. Monthly replenishment (EUR 1,150-2,000/mo from M4) is already captured in the COGS lines.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Add line in Cash Flow sheet: "Opening Inventory (M3)" at EUR 5,750. This is a balance sheet item (inventory asset), NOT a P&L expense. It appears as a cash outflow in M3 on the Cash Flow Statement but does not hit EBITDA. Monthly COGS (already modeled) handles the P&L impact as units sell.
- Variable name: `opening_inventory = 5750`
- Value: EUR 5,750 (one-time, M3)
- Starting month: M3
- Balance Sheet / Cash Flow (NOT P&L OpEx)

**Investor communication note:** "EUR 5,750 opening inventory is a working capital investment, not an expense. It converts to revenue at 76% gross margin as units sell."

---

### EX-13: GEMA Music License (M4+)

**Priority:** MEDIUM
**Category:** Cost
**Source research:** Agent C (Space OpEx Gaps)

**Options:**
- Option A: GEMA Tarif M-U direct (EUR 117/year = EUR 9.75/mo) + Soundtrack Your Brand subscription (~EUR 25-35/mo) = EUR 35/mo total -- fully compliant, curated music experience
- Option B: GEMA direct only (EUR 9.75/mo) + royalty-free music library (EUR 0-10/mo) = EUR 10-20/mo -- cheaper but lower music quality
- Option C: Soundtrack Your Brand only (~EUR 25-35/mo, handles its own licensing) -- simplest single-vendor approach; confirm Germany-specific GEMA coverage with Soundtrack

**Recommended:** Option A -- EUR 35/mo from M4. This is the safest approach until Soundtrack's Germany GEMA coverage is confirmed.

**Rationale:** Spotify and Apple Music are NOT licensed for commercial use -- using them in-space is copyright infringement with GEMA auditing at double rates. The current model has EUR 31/mo for GEMA (B80). The research confirms the correct cost is EUR 9.75/mo for GEMA Tarif M-U (sub-100 sqm) plus a legal streaming service. EUR 35/mo total is trivial but compliance-mandatory.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: Update B80 ("GEMA M4+") from EUR 31 to EUR 35. Update note to "GEMA Tarif M-U + Soundtrack Your Brand"
- Variable name: `gema_music_monthly = 35`
- Value: EUR 35/mo
- Starting month: M4
- OpEx

**Investor communication note:** Trivial cost, full compliance. No impact on the story.

---

### EX-14: Rundfunkbeitrag Business Rate (M4+)

**Priority:** LOW
**Category:** Cost
**Source research:** Agent C (Space OpEx Gaps)

**Options:**
- Option A: EUR 6.12/mo (Scale 1, 0-8 employees) -- mandatory, no alternative

**Recommended:** Option A -- EUR 6.12/mo from M4.

**Rationale:** Already in the model at EUR 6/mo (B81). Research confirms EUR 6.12/mo. The EUR 0.12/mo difference is immaterial. No model change needed.

**Model change:**
- File: build_excel_pnl_v3.py
- Action: No change required. Current model value (EUR 6/mo) is accurate within rounding.
- Variable name: Existing `rundfunkbeitrag = 6`
- Value: EUR 6/mo (unchanged)
- Starting month: M4 (already modeled)
- OpEx

**Investor communication note:** No impact. Already modeled.

---

## BREAK-EVEN IMPACT ANALYSIS

### "What This Does to Break-Even"

---

#### 1. Sum of All CRITICAL + HIGH Cost Additions (Monthly OpEx from M4)

| Item | Priority | Monthly EUR Impact | Notes |
|------|----------|-------------------|-------|
| EX-06: App contractor (M5+) | CRITICAL | +EUR 10,500/mo | Replaces EUR 1,500/mo retainer with EUR 12,000/mo contractor |
| EX-07: Rent correction | CRITICAL | -EUR 1,625/mo | Model currently overstates rent by EUR 1,625/mo |
| EX-10: CTO recruitment | HIGH | EUR 0/mo (contingency) | One-time EUR 19K, excluded from base case |
| EX-11: POS SaaS | HIGH | -EUR 11/mo | Corrects EUR 50 to EUR 39 |
| EX-12: Opening inventory | HIGH | EUR 0/mo | Balance sheet item, not OpEx |
| **Net monthly OpEx change** | | **+EUR 8,864/mo** | Dominated by app contractor cost |

**The honest assessment:** The app contractor cost (EX-06) is the single largest change and adds EUR 10,500/mo to OpEx from M5. The rent correction partially offsets this (-EUR 1,625/mo), but the net is still +EUR 8,864/mo in additional monthly burn. This is material and shifts break-even later.

However, note that the current model already has EUR 1,500/mo for "App maintenance retainer" -- this was always an underestimate. A real app supporting wearable integrations, AI protocols, subscription billing, and community features requires ongoing engineering investment far exceeding EUR 1,500/mo. The research corrects this underestimate to a realistic figure.

---

#### 2. Sum of All CRITICAL + HIGH Revenue Additions (Monthly Revenue)

| Item | Priority | Monthly EUR at M12 | Notes |
|------|----------|-------------------|-------|
| EX-01: Annual subscriptions | CRITICAL | +EUR 0 incremental cash (retention benefit) | Not new revenue; improves LTV and retention. Cash flow benefit is upfront collection. |
| EX-02: B2B corporate (base case) | HIGH | +EUR 585/mo | 1 client x 15 employees x EUR 39 PEPM |
| EX-04: Space subletting | HIGH | +EUR 1,290/mo | 12 hrs/week x EUR 25/hr by M10-M12 |
| **Net monthly revenue addition at M12** | | **+EUR 1,875/mo** | |

Including MEDIUM priority items:
| EX-03: Gift cards (base case) | MEDIUM | +EUR 490-980/mo | Ramping M4-M10 |
| **Total with MEDIUM** | | **+EUR 2,365-2,855/mo** | |

---

#### 3. NET Monthly Change to P&L at M12

| Category | Monthly EUR |
|----------|------------|
| Additional OpEx (net, from Section 1) | +EUR 8,864/mo |
| Additional Revenue (CRITICAL + HIGH, from Section 2) | +EUR 1,875/mo |
| Additional Revenue (including MEDIUM) | +EUR 2,855/mo |
| **NET P&L impact at M12** | **-EUR 5,989 to -EUR 6,989/mo worse** |

---

#### 4. Does Break-Even Shift Forward (Worse) or Backward (Better)?

**Break-even shifts forward (worse) by approximately 3-5 months.**

The current model targets EBITDA break-even at M11-M13. Adding the corrected app contractor cost (+EUR 10,500/mo net) while only partially offsetting with new revenue streams (+EUR 1,875 to EUR 2,855/mo) creates a net deficit of ~EUR 6,000-7,000/mo. This pushes EBITDA break-even to approximately M15-M17.

**However, this is a more honest model.** The previous EUR 1,500/mo app maintenance assumption was unrealistic for a product of this complexity. The corrected figure reflects what it actually costs to maintain and develop a health app with wearable integrations, AI protocols, and subscription billing.

---

#### 5. Does the EUR 500K Last 18+ Months with All Changes?

**Calculation:**

| Phase | Monthly Burn (est.) | Duration | Total |
|-------|-------------------|----------|-------|
| M1-M3 (pre-launch) | EUR 18,000/mo | 3 months | EUR 54,000 |
| M3 one-time outlays | EUR 11,350 (inventory + POS + deposit + co-work overlap) | 1 month | EUR 11,350 |
| M3 CapEx (already modeled) | EUR 75,000 (Ablose + buildout) | 1 month | EUR 75,000 |
| M1-M4 app MVP build | EUR 20,000 | 4 months | EUR 20,000 |
| M4-M12 (operating + contractor) | EUR 28,000-30,000/mo (OpEx incl. contractor) minus growing revenue | 9 months | EUR 162,000 (net of revenue) |
| M13-M18 (scaling) | EUR 32,000-35,000/mo minus EUR 20,000-30,000/mo revenue | 6 months | EUR 48,000 (net) |
| **Total estimated cash requirement M1-M18** | | | **~EUR 370,000-400,000** |
| **Remaining at M18** | | | **EUR 100,000-130,000** |

**Answer: Yes, the EUR 500K lasts 18+ months, but with tighter margins than the current model suggests.** The buffer shrinks from a comfortable EUR 150K+ to approximately EUR 100K-130K. This is viable but leaves less room for error.

The annual subscription cash flow benefit (EX-01) provides additional runway cushion: if 30% of subscribers pay annually by M12, the upfront cash collection accelerates by EUR 10,000-15,000 in cumulative pre-payments, further extending runway.

---

#### 6. Items That Materially Threaten Runway (>EUR 20K Unexpected Cost)

| Item | Risk Amount | Probability | Mitigation |
|------|------------|-------------|------------|
| **App contractor overrun** | +EUR 24,000-48,000 if contractor is EUR 14,000-16,000/mo instead of EUR 12,000/mo | Medium | Cap at EUR 12,000/mo via fixed-price retainer contract. Use Eastern EU contractor (Arc.dev) at EUR 10,000/mo to reduce risk. |
| **CTO recruitment fee** | EUR 19,000 (if network search fails) | Medium-Low | This is already flagged as contingency. If it hits AND contractor costs run high, combined impact is EUR 40K+. |
| **Agency build instead of FlutterFlow** | +EUR 38,000-113,000 above FlutterFlow path | Low (only if FlutterFlow fails) | Only if FlutterFlow MVP fundamentally fails. Mitigated by Xmethod's proven health app track record. |

**No single item threatens runway in isolation.** The risk is in combinations: if the contractor costs EUR 14K/mo AND the CTO needs a recruiter AND rent comes in at the high end, the combined overrun is ~EUR 50K-60K, which compresses the M18 buffer to EUR 40K-70K. Still survivable but uncomfortable. The annual subscription cash flow benefit and B2B revenue provide the counterbalance.

---

## SUMMARY: PRIORITY MATRIX

| ID | Topic | Priority | Impact on Model | Action |
|----|-------|----------|----------------|--------|
| EX-01 | Annual subscriptions | CRITICAL | +LTV, +cash flow | Add pricing + mix assumption |
| EX-06 | App build approach | CRITICAL | +EUR 10,500/mo OpEx (corrects underestimate) | Replace maintenance line with contractor |
| EX-07 | Rent correction | CRITICAL | -EUR 1,625/mo OpEx (corrects overestimate) | Reduce rent + utilities assumptions |
| EX-02 | B2B corporate | HIGH | +EUR 585/mo revenue (M6+) | Add revenue line |
| EX-04 | Space subletting | HIGH | +EUR 540-1,290/mo revenue (M4+) | Add revenue line |
| EX-10 | CTO recruitment | HIGH | EUR 19K contingency | Flag in model, not base case |
| EX-11 | POS system | HIGH | EUR 1,250 CapEx + EUR 39/mo OpEx | Add CapEx + correct SaaS line |
| EX-12 | Opening inventory | HIGH | EUR 5,750 cash outflow (balance sheet) | Add to Cash Flow sheet |
| EX-03 | Gift cards | MEDIUM | +EUR 490-980/mo revenue (M4+) | Add revenue line |
| EX-13 | GEMA music | MEDIUM | EUR 4/mo increase | Update existing line |
| EX-05 | Newsletter sponsorship | LOW | EUR 0 (deferred) | No model change |
| EX-08 | CM recruitment | LOW | EUR 0-500 one-time | Absorb in contingency |
| EX-09 | GM recruitment | LOW | EUR 500 one-time | Absorb in contingency |
| EX-14 | Rundfunkbeitrag | LOW | EUR 0 (already modeled) | No change |

---

## BOTTOM LINE FOR INVESTORS

The expanded model is **more honest and more complete** than the current v3.3. It corrects two significant estimation errors in opposite directions: the app maintenance cost was understated by EUR 10,500/mo, and the rent was overstated by EUR 1,625/mo. It adds EUR 1,875-2,855/mo in new revenue streams (B2B, subletting, gift cards) that were previously absent.

Net effect: break-even shifts from M11-M13 to approximately M15-M17. The EUR 500K lasts 18+ months with an estimated EUR 100K-130K buffer at M18. The model is tighter but defensible.

The three things that most improve investor confidence:
1. **Annual subscriptions from Day 1** -- shows pricing maturity and reduces churn narrative risk
2. **B2B BGM tax angle** -- unique German market insight that demonstrates local market knowledge
3. **Honest app build cost** -- EUR 12K/mo for a real engineering team is credible; EUR 1,500/mo was not

---

*Decision register compiled 2026-02-25. All figures sourced from Phase 1 research documents. No numbers invented. EUR 500K hard ceiling respected.*
