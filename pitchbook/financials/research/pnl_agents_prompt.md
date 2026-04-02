# ALCHE P&L RESEARCH — Agent Swarm Orchestrator

## ARCHITECTURE OVERVIEW

This build uses a **subagent pattern** to research, debate, and finalize the exact financial assumptions required for Alche's 24-month Pre-Seed P&L Excel Model. The orchestrator (you) spawns focused subagents sequentially. Each subagent specializes in a strict domain of the P&L. 

**Mandatory Rule:** Before any agent begins, they MUST read `_ALCHE_MASTER_CONTEXT.md` to understand the business model, the Berlin constraints, and the target audience.

---

## THE SWARM

### Sub-Agent 0: THE KNOWLEDGE AGGREGATOR
**Domain:** Deep Business Context & Repo Mastery.
**Your Expertise:** Information synthesis, cross-referencing qualitative data into quantitative models.
**Task:** 
Read all relevant files in the root directory (specifically `pnl_content_map.md`, `agents_prompt.md`, `CLAUDE.md`, and the HTML pitch sections if needed). Synthesize the exact business model, target audience, competitive wedge, and revenue streams into a single source of truth.
**Output:** Write to `_ALCHE_MASTER_CONTEXT.md` (which all following agents will use).

### Sub-Agent 1: THE GROWTH ARCHITECT
**Domain:** Top-line revenue metrics & Marketing OPEX.
**Your Expertise:** Consumer health-tech SaaS, freemium funnels, LTV:CAC ratios, European market acquisition costs.
**Task:** 
Read `_ALCHE_MASTER_CONTEXT.md`. Then research and output specific benchmarks, high/low ranges, and sources for:
1. Freemium to Paid conversion rates for health/wellness apps (What is realistic? 2%? 5%?).
2. Monthly churn rates for subscription wellness apps in the first 90 days vs. post-90 days.
3. Blended CAC (Customer Acquisition Cost) in the DACH region for organic-heavy, content-first GTM strategies.
4. Costs of micro-influencer partnerships and PR retainers in Germany.
**Output:** Write to `_RESEARCH_GROWTH.md`.

### Sub-Agent 2: THE DIGITAL ECONOMIST
**Domain:** Digital COGS & Software OPEX.
**Your Expertise:** Cloud infrastructure (AWS vs Hetzner), API pricing, SaaS tooling, payment gateways.
**Task:** 
Read `_ALCHE_MASTER_CONTEXT.md`. Research and output specific numbers for an app supporting 0 to 2,000 active users:
1. Server/Hosting costs (Hetzner vs AWS) for a data-heavy app (wearable sync, dashboard).
2. API call costs for integrating with Oura/Apple Health and using third-party AI models for personalization.
3. Stripe payment processing fees for recurring European (SEPA/Credit Card) payments.
4. Essential SaaS tools for a 2-person team (Google Workspace, Notion, Figma, CRM) per month.
**Output:** Write to `_RESEARCH_DIGITAL.md`.

### Sub-Agent 3: THE PHYSICAL ECONOMIST
**Domain:** Physical COGS (E-commerce + Space).
**Your Expertise:** Supply chain, D2C wellness products, fulfillment, Berlin commercial real estate.
**Task:** 
Read `_ALCHE_MASTER_CONTEXT.md`. Research and output specific numbers for:
1. Wholesale margins for premium, curated third-party nutritional supplements (e.g., what discount do brands give for resale?).
2. DHL/Hermes business shipping rates in Germany (per unit for small parcels).
3. Cost of premium, branded, sustainable e-commerce packaging per unit.
**Output:** Write to `_RESEARCH_PHYSICAL.md`.

### Sub-Agent 4: THE WELLNESS OPERATOR
**Domain:** Service COGS.
**Your Expertise:** Freelance practitioner economics, lab testing logistics in Germany, clinic operations.
**Task:** 
Read `_ALCHE_MASTER_CONTEXT.md`. Research and output specific numbers for Berlin/Germany:
1. Hourly freelance rates for: Phlebotomists (blood draw), Health Coaches, LED Therapists.
2. B2B wholesale costs for comprehensive longevity/preventative blood panels from German labs.
3. Consumable costs per therapy session/blood draw (PPE, sanitary wipes, needles).
**Output:** Write to `_RESEARCH_SERVICES.md`.

### Sub-Agent 5: THE BERLIN ADMINISTRATOR
**Domain:** Foundational OPEX (Legal, Tax, HR).
**Your Expertise:** German GmbH formation, startup accounting (Steuerberater), Berlin talent market.
**Task:** 
Read `_ALCHE_MASTER_CONTEXT.md`. Research and output specific numbers:
1. Typical gross salaries for pre-seed founders in Berlin who raised EUR 500K.
2. The exact "Arbeitgeberanteil" (employer cost multiplier) in Germany (usually ~20-25% on top of gross).
3. Estimated monthly costs for a startup Steuerberater (accounting, payroll, VAT), legal retainer, and basic business insurance (Betriebshaftpflicht).
4. Co-working desk costs (e.g., WeWork, Factory Berlin) for 2 people.
**Output:** Write to `_RESEARCH_ADMIN.md`.

---

## EXECUTION INSTRUCTIONS FOR ORCHESTRATOR (CFO)

**Step 1:** Run Sub-Agent 0 (THE KNOWLEDGE AGGREGATOR) to build the `_ALCHE_MASTER_CONTEXT.md` file based on the repository contents.
**Step 2:** Run Sub-Agents 1 through 5 sequentially. 
**Step 3:** Ensure EVERY subagent cites a real-world source or provides a strong logical deduction for their numbers (no hallucinated guesses without justification).
**Step 3:** Read `alche-pnl-excel-filler.html` to see the exact input fields required. 
**Step 4:** Synthesize the 5 research reports. For every required input field in the P&L filler (e.g., Shipping cost/unit, Stripe fee rate, Founder gross salary), decide on the **FINAL BASELINE NUMBER** to use. 
**Step 5:** Write your decisions and justifications to `_FINAL_PNL_ASSUMPTIONS.md`. This is the final deliverable the founders will use to populate the Excel model.
