# FINAL SYNTHESIS: ALCHE PRE-SEED P&L ASSUMPTIONS (v2.0)
*Compiled by the Alche Research Swarm — Updated for 6 Product Lines & Scaled Friction*

Below are the verified, Berlin-adjusted baseline inputs to be used in the Alche Excel P&L model. 

---

## 1. SUBSCRIPTION PRICING & FUNNEL (Line 0)
*   **Core Tier (App Only):** EUR 19 / month (Estimated Share: 52%)
*   **Pro Tier (App + AI Protocols):** EUR 49 / month (Estimated Share: 38%)
*   **Premium Tier (App + Practitioner/Blood):** EUR 99 / month (Estimated Share: 10%)
*   **Conversion Rate:** 4.0% - 5.0% blended conversion from free app to paid Core.
*   **Monthly Churn (Blended):** 8% (Accounting for brutal Month 1 churn, stabilizing post-90 days).

## 2. REVENUE LINES & COGS (Lines 1-6)

### Line 1: Retail Products (Curated Third-Party Shelf Items)
*   **Retail Price:** EUR 49 per unit.
*   **COGS:** EUR 23.50/unit (wholesale cost of curated third-party products). Margin: ~52%. *(Updated from EUR 11.50 / 76% — that was the old in-house manufacturing model. D11: R10 validated wholesale.)*
*   **Waste/Spoilage:** 5.5% blended reserve on physical revenue (D7: capsules 4%, powders 7%).
*   **3PL Fulfillment:** EUR 2.50 per unit shipped (starts M4 — physical space opens M4).

### Line 2: LED Therapy (Free Amenity)
*   **Session Price:** EUR 0 — free with smoothie purchase. *(Updated from EUR 45 — pivot to dwell-time play, no practitioner needed.)*
*   **Practitioner Fee:** EUR 0 — self-service MITO LIGHT panels. *(Updated from EUR 25 — saves EUR 25/session COGS, EUR 5K CapEx for the panels.)*

### Line 3: CGM Referral Commission
*   **Model:** Affiliate/referral commission — alche earns per active CGM user/month. No hardware, no inventory, no RMA reserve.
*   **Commission Rate:** EUR 15/user/month (referral fee from Dexcom G7 / Libre 3 DACH channel).
*   **Access Gate:** Premium tier subscribers (must have been Premium for 3 consecutive months) OR any subscriber who purchases CGM as an add-on.
*   **Start:** Month 7 (first Premium 3-month cohort eligible).
*   **COGS:** EUR 0. Pure margin. Stripe fee (2.9%) already captured in the Stripe COGS line.
*   **Note:** ZOE dropped CGM hardware Sept 2025. Supersapiens shut down Feb 2024. This model avoids all hardware execution risk while preserving the CGM integration narrative.

### Line 4: Community Events
*   **Ticket Price:** EUR 35 (Avg attendees scales from 12 to 25).
*   **Event Fixed Cost:** EUR 250 (Facilitator + F&B).
*   **Platform Ticketing Fee:** 7% of ticket revenue (Eventbrite/Luma cut).

### Line 5: Restaurant Partnerships (B2B Affiliate)
*   **Revenue Commission:** EUR 1.50 per user cover sent to the restaurant via the app.

### Line 6: Doctor Directory (B2B SaaS)
*   *Legal Disclaimer:* Compliant with § 299a StGB (No kickbacks). 
*   **Revenue Fee:** EUR 99/month SaaS listing fee paid by verified longevity doctors. *(Updated from EUR 150 — D1: EUR 99 chosen; compliant with Doctolib pricing precedent.)*
*   **Verification COGS:** EUR 25 one-off freelance credential check per new doctor added.

---

## 3. CORE OPERATIONAL COSTS (OPEX)

### Payroll (Gross + 1.22x German Employer Multiplier)
*   **Timu (CEO):** EUR 4,166 / month gross 
*   **Daria (COO):** EUR 4,166 / month gross
*   **Strategic Hires (Post-Launch):**
    *   Partner / Community Manager (M6+): EUR 2,000 / month gross (Part-time)
    *   Growth Marketer (M12+): EUR 4,500 / month gross
    *   CTO / Tech Lead (M18+): EUR 6,500 / month gross

### R&D and Maintenance 
*   **R&D CapEx (M1):** EUR 5,000 one-off stability testing for Potions.
*   **App Maintenance:** EUR 1,500 / month external dev retainer.
*   **UX / Design Iteration:** EUR 800 / month freelance design.

### Software, APIs & Administration
*   **Base SaaS Stack:** Scales EUR 350 -> EUR 850 -> EUR 1,800/mo (Google, Figma to Mixpanel/CRM).
*   **Internal AI (Claude):** EUR 210 / month
*   **CGM Data API (Terra):** EUR 499 / month (Starts M6).
*   **Anthropic Inference:** Base EUR 150/mo + dynamic scaling per active subscriber.
*   **Stripe Fees:** 2.9% blended rate across all revenue.
*   **Menu Analysis / Dietitian Database:** EUR 500 / month (To support Restaurant Line 5).
*   **Rent/Coworking:** EUR 750 / month (Desks in Berlin for Founders/Manager).
*   **Steuerberater (Accounting & Payroll):** EUR 400 / month.

---
*These variables are hard-coded into the updated `alche-pnl-excel-filler.html` default resets.*
