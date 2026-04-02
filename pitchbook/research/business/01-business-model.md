# alche Business Model — Complete Architecture

**Source:** `/Users/timoel/Downloads/pitchbook/agents_prompt.md` (ALCHE_PITCHBOOK_AGENTS.md)
**Research Sessions:** 35+ fact-checking rounds
**Status:** LOCKED DATA — do not modify numbers without re-validating sources

---

## Executive Summary

**Model Type:** Subscription-first SaaS + curated commerce + experiential community
**Break-Even:** Month 12 @ 145 paying subscribers + EUR 10K/month total revenue
**Funding:** EUR 500K pre-seed, EUR 2.5M valuation cap
**Runway:** 24 months (breaks even at M12, 12-month buffer remaining)

---

## Four Revenue Streams (Ranked by Margin)

### 1. Digital Subscriptions (Target: 52% → 68% of revenue Y1 → Y3)

**Free Tier** (EUR 0/month)
- Community access
- Content browsing
- Product recommendations
- No biomarker tracking, no personalized protocols
- **Purpose:** Top-of-funnel acquisition, social proof, content distribution

**Core Tier** (EUR 19/month)
- Biomarker dashboard (sync Oura, Apple Health, WHOOP)
- Basic protocols (sleep, recovery, nutrition fundamentals)
- Weekly insights
- **Gross Margin:** 85-90%
- **Target Conversion:** 4-5% from free base (upper quartile of industry)
- **Target Share:** ~62% of paid base

**Pro Tier** (EUR 49/month) — **WEIGHTED AVERAGE / ARPU ANCHOR**
- Everything in Core
- Personalized protocols (AI-driven based on biomarker trends)
- Advanced tracking (longitudinal data, trend analysis)
- Monthly 1:1 check-in (async, via app)
- Priority event access
- **Gross Margin:** 85-90%
- **Target Conversion:** 20% upgrade from Core
- **Target Share:** ~32% of paid base

**Premium Tier** (EUR 99/month)
- Everything in Pro
- Quarterly blood panel credits (partner with Berlin labs)
- 1:1 video reviews with physician advisor
- Exclusive in-person events (Alche Salon VIP access)
- CGM (Continuous Glucose Monitor) access when launched (Phase 2)
- **Gross Margin:** 70-85% (lower due to blood panel + CGM costs in Phase 2)
- **Target Conversion:** ~8% of paid base
- **Target Share:** ~6% of paid base

**COGS Breakdown (Digital Subscriptions)**
- Cloud hosting (AWS/GCP): EUR 1-2 per user/month
- Payment processing (Stripe): 2.2% + EUR 0.30 ≈ EUR 1.30/transaction
- Biomarker data ingestion (API costs): EUR 0
- AI inference (GPT-4 API for personalization): EUR 0.50-1/month (Pro+ only)
- **Total COGS per subscriber:** EUR 2.50-3.50/month
- **Net margin:** 87-90% (digital subscriptions only)

**Source:** agents_prompt.md Section "Revenue Model Architecture"

---

### 2. Curated Product Commerce (Target: 18% Y1 → 15% Y3)

**Product Categories:**
- LED/red light therapy devices (EUR 150-600 per unit)
- Recovery equipment (massage guns, compression boots, sauna blankets)
- Functional potions (adaptogen blends, electrolyte mixes, nootropics)
- Supplements (curated, third-party tested, EU-compliant)
- Sleep optimization (blackout solutions, cooling mattresses, sleep trackers)

**Margin Structure:**
- Digital subscriptions/LED recovery: 65-75% margin
- Potions/functional drinks: 55-65% margin
- Supplements: 40-50% margin (lower due to commodity competition)

**Fulfillment:** Partner with existing distributors (no inventory owned pre-Seed)

**Why This Works:**
- Members already asking "what should I buy?" in community
- Curation = trust moat (alche only recommends what's evidence-backed)
- Affiliate revenue initially (10-15%), transition to direct partnerships at scale

**Source:** agents_prompt.md "Revenue Streams Detail"

---

### 3. Experiences & Services (Target: 17% Y1 → 10% Y3)

**Alche Salon** (Quarterly → Monthly by M12)
- Format: 2-hour science talk + networking + wine
- Ticket price: EUR 50-80 per attendee
- Capacity: 25-40 people per event
- Gross margin: 50-70% (venue, wine, speaker honorarium)
- **Revenue per event:** EUR 500-1,000
- **Secondary benefit:** Each event generates 3-4 weeks of social content

**Event Evolution:**
- Pre-launch: Quarterly (leverage Biohackers Berlin Meetup, 2,213 members)
- M4-M8: Bi-monthly
- M9-M12: Monthly
- Post-Seed: Weekly masterclasses, workshops, CGM onboarding sessions

**Why This Matters:**
- Physical touchpoint = churn reduction (8% vs 15% industry baseline)
- Community identity reinforcement (#dailyalche ritual becomes in-person)
- Acquisition: ~15% of event attendees convert to paid within 30 days

**Source:** agents_prompt.md "Go-to-Market Strategy"

---

### 4. Physical Space Revenue (Target: 13% Y1 → 7% Y3)

**CRITICAL RESOLUTION:** Physical space is **Phase 2 (Seed-funded), NOT pre-seed.**

**Pre-Seed (EUR 500K raise):**
- Digital-first, app-focused
- Zero physical buildout costs
- Alche Salon events held in rented venues

**Seed (EUR 3M raise):**
- Berlin Alche Salon space launches
- Format: Content production studio + event space + walk-in consultations
- Standalone P&L: EUR -2K to EUR +700/month (near breakeven)
- **True value:** Acquisition engine

**Walk-In Economics:**
- Target: 15-20 walk-in conversions per month
- Effective CAC: EUR 100-130 (vs. paid digital CAC EUR 60-80)
- Space acts as brand showroom, not primary revenue driver

**Why This Avoids "Two-Business Death Spiral" (Graveyard Rule #4):**
- Space launches ONLY when seed-funded
- Separate revenue P&L (not core to break-even)
- ONE revenue module, not a parallel business

**Source:** agents_prompt.md "CRITICAL RESOLUTION: Physical Space Model"

---

## Revenue Mix Evolution (Y1 → Y3)

| Stream | Year 1 | Year 3 | Margin |
|--------|--------|--------|--------|
| Digital subscriptions | 52% | 68% | 87% |
| Product commerce | 18% | 15% | 58% |
| Experiences/services | 17% | 10% | 60% |
| Physical space | 13% | 7% | 50% |
| **Blended Gross Margin** | **72%** | **80%** | — |

**Why margin improves:** Subscription share increases, lower-margin products decline as % of mix.

**Valuation Implication:**
- Subscriptions valued at 8-15x ARR (SaaS multiples)
- Products valued at 2-4x revenue (premium retail)
- Services valued at 2-4x revenue (high-margin services)
- **Result:** Valuation multiple compounds faster than revenue growth

**Source:** agents_prompt.md "Revenue Projections & Growth Trajectory"

---

## Unit Economics (The Investor Holy Trinity)

### Pricing Architecture

**Weighted ARPU Calculation:**
```
Core (EUR 19):    62% of paid base × EUR 19 = EUR 11.78
Pro (EUR 49):     32% of paid base × EUR 49 = EUR 15.68
Premium (EUR 99):  6% of paid base × EUR 99 = EUR  5.94
─────────────────────────────────────────────────────
Weighted ARPU:                              EUR 33-37
```

**Target ARPU: EUR 49** (Pro tier as anchor, assumes higher Pro conversion than baseline)

**Source:** agents_prompt.md "Unit Economics"

---

### LTV (Lifetime Value)

**Conservative Model:**
```
ARPU:             EUR 35/month
Gross Margin:     85%
Monthly Churn:    12.5% (industry average)
Lifetime:         1 / 0.125 = 8 months
LTV:              EUR 35 × 0.85 × 8 = EUR 238
```

**Realistic Model (alche target):**
```
ARPU:             EUR 49/month
Gross Margin:     87%
Monthly Churn:    8% (alche target, defended by community + data compounding)
Lifetime:         1 / 0.08 = 12.5 months
LTV:              EUR 49 × 0.87 × 12.5 = EUR 533
```

**Why 8% churn is defensible:**
1. Physical touchpoints (Alche Salon events create real relationships)
2. Community identity (#dailyalche ritual, user-generated content)
3. Longitudinal data compounding (the more data you contribute, the more valuable insights become)

**Industry Baseline:** 12-15% monthly churn for health/wellness apps
- 77% of health app users churn by Day 3 (Source: locked data)
- 44% cancel within first 90 days (Source: locked data)

**Source:** agents_prompt.md "Unit Economics," locked data from research sessions

---

### CAC (Customer Acquisition Cost)

**Blended CAC Target:** EUR 40-55

**By Channel:**
- Content-first (pre-funding): EUR 0 CAC
  - TikTok/Instagram Reels (3-5 posts/week)
  - Newsletter (Substack, weekly deep-dives)
  - YouTube (monthly 10-20min "Alche Reviewed" videos)
  - Organic from existing audience

- Paid acquisition (post-funding): EUR 15-25 CAC
  - Amplify what already converts organically
  - EUR 50-100K (15-20% of raise) allocated to paid

- Walk-in (physical space, Phase 2): EUR 100-130 CAC
  - Higher CAC but stronger retention due to in-person relationship

**Source:** agents_prompt.md "Go-to-Market & Customer Acquisition"

---

### LTV:CAC Ratio

**Conservative:** EUR 238 LTV / EUR 55 CAC = **4.3x**
**Realistic:** EUR 533 LTV / EUR 40 CAC = **13.3x**

**Industry Minimum:** 3x (anything below = unsustainable)
**Excellent:** 5x+
**alche Target:** 10-15x (achievable due to content-first EUR 0 CAC phase)

**Source:** agents_prompt.md "Unit Economics"

---

## Break-Even Economics

### Path to Break-Even: Month 12

**Monthly Burn (Pre-Launch, M1-M3):**
- Team salaries: EUR 4,000-5,000
- Operations: EUR 1,500-2,000
- Content creation: EUR 1,100-1,600
- **Total:** EUR 7,600/month

**Break-Even Milestone (Month 12):**
- Digital revenue (145 subscribers): EUR 6,500-7,500/month
  - Weighted ARPU EUR 45-52 × 145 subscribers
- Product + events + space: EUR 2,500-3,500/month
- **Total revenue:** EUR 10,000-11,000/month

**Cash Position at Break-Even:**
- EUR 500K raise
- Cumulative burn through M12: ~EUR 358K
- **Buffer remaining:** EUR 142K
- **Total runway:** 24 months

**Runway Scenarios:**
| Raise | Runway | Buffer at M12 |
|-------|--------|---------------|
| EUR 500K | 24 months | EUR 142K |
| EUR 400K | 21 months | EUR 42K |
| EUR 350K | 20 months | EUR 0 (just breaks even) |

**Source:** agents_prompt.md "Break-Even Economics"

---

## Use of Funds (EUR 500K Pre-Seed)

**One-Time Costs:**
- App MVP development: EUR 100-200K (20-40%)
- Legal, GmbH formation, operations: EUR 30K (6%)
- Team hiring (CTO, content lead): EUR 80-120K (16-24%)
- **Subtotal:** EUR 210-350K (42-70%)

**Operating Runway & Buffer:**
- EUR 150-290K (30-58%)

**What is NOT Funded:**
- Physical space buildout (EUR 80-150K) → moves to Seed
- LED/recovery equipment inventory → moves to Seed
- Fixture costs, studio buildout → moves to Seed

**Why This Matters:**
- Pre-seed = digital-first, asset-light, capital-efficient
- Avoids "Two-Business Death Spiral" (Graveyard Rule #4)
- Proves digital model before adding physical complexity

**Source:** agents_prompt.md "Use of Funds (EUR 500K Pre-Seed)"

---

## Revenue Projections

### Year 1-2 Horizon (Pre-Seed Target)
- Paying subscribers: 0 → 145 (M12) → 500 (M24)
- MRR at M12: EUR 7,000-8,000
- ARR at M12: EUR 84,000-96,000
- **Valuation at Seed:** EUR 3-5M (5-7x ARR at product-market fit)

### Year 2-4 Horizon (Seed-to-Series A)
- Paying subscribers: 500 → 10,000
- ARR: EUR 6M (Seed target for Series A readiness)
- **Comparable Metrics:**
  - Function Health: $2.5B valuation at 200K+ members
  - Noom: $3.7B at peak with 5.8M users
  - Ultrahuman: USD 65M raised

**Source:** agents_prompt.md "Revenue Projections & Growth Trajectory"

---

## Key Takeaways

1. **Digital-first, asset-light:** Physical space deferred to Seed (EUR 3M raise)
2. **Subscription-dominant:** 52% → 68% of revenue from high-margin subs
3. **Defensible economics:** 13.3x LTV:CAC (realistic), 24-month runway
4. **Content moat:** EUR 0 CAC phase proves demand before paid acquisition
5. **Community retention:** 8% churn vs 15% industry = 12.5mo vs 6.7mo lifetime

**This model is deliberately conservative, European-investor friendly, and grounded in failure pattern analysis of $1.4B+ in better-funded predecessors.**
