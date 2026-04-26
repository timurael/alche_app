# Business Model -- Alche

> **Version:** 1.0 | March 2026 | Pre-validation

---

## Architecture: Community Anchor Model

```
                    ┌─────────────────────────────────────────┐
                    │           COMMUNITY ANCHOR              │
                    │         (Physical Cafe/Apothecary)      │
                    │                                         │
                    │  Functions:                              │
                    │  - Discovery & awareness                │
                    │  - Brand experience                     │
                    │  - Community gathering                  │
                    │  - Revenue generation (not cost center) │
                    │  - Content creation venue               │
                    └──────────────┬──────────────────────────┘
                                   │
                                   │ Converts to
                                   ▼
                    ┌─────────────────────────────────────────┐
                    │           BUSINESS ENGINE               │
                    │         (AI-Powered App)                │
                    │                                         │
                    │  Functions:                              │
                    │  - Subscription revenue (primary)       │
                    │  - Personalized longevity guidance      │
                    │  - Biomarker integration                │
                    │  - Behavior tracking                    │
                    │  - Community hub (digital)              │
                    └──────────────┬──────────────────────────┘
                                   │
                                   │ Retains via
                                   ▼
                    ┌─────────────────────────────────────────┐
                    │           RETENTION FLYWHEEL            │
                    │         (Community + Data)              │
                    │                                         │
                    │  Functions:                              │
                    │  - In-person events & cohorts           │
                    │  - Peer accountability                  │
                    │  - Retest cycles (quarterly biomarkers) │
                    │  - Identity formation                   │
                    │  - Referral generation                  │
                    └─────────────────────────────────────────┘
```

**Key insight:** The cafe is the top of funnel. The app is the revenue engine. Community is the retention mechanism. Each layer serves a distinct business function.

---

## Revenue Model

### Subscription Tiers

| Tier | Price | Included | Target % of Subs |
|---|---|---|---|
| **Essentials** | EUR 19/mo | App access, AI guidance, community forum, basic content library | 30% |
| **Integrated** | EUR 49/mo | + Personalized protocols, biomarker integration, monthly community events, priority cafe perks | 50% (primary) |
| **Complete** | EUR 99/mo | + Quarterly biomarker testing, 1:1 coaching sessions, advanced AI analysis, all events | 20% |

### Blended ARPU Calculation

| Tier | Price | % of Subs | Weighted ARPU |
|---|---|---|---|
| Essentials | EUR 19 | 30% | EUR 5.70 |
| Integrated | EUR 49 | 50% | EUR 24.50 |
| Complete | EUR 99 | 20% | EUR 19.80 |
| **Blended ARPU** | | | **EUR 50.00** |

### Additional Revenue

| Stream | Monthly Target | Margin | Notes |
|---|---|---|---|
| Cafe food/beverage | EUR 6,000-8,000 | 30-40% | Functional food, longevity drinks, supplements |
| Event tickets | EUR 1,000-2,000 | 50-60% | Workshops, dinners, guest speakers |
| Product curation commissions | EUR 500-1,500 | 40-60% | Curated supplements, devices, skincare |
| Lab test commissions | EUR 500-1,000 | 15-25% | Revenue share on partner lab tests |
| **Total non-subscription** | **EUR 8,000-12,500** | | |

---

## Unit Economics (Hypothesis)

### Per-Subscriber Economics

| Metric | Value | Basis |
|---|---|---|
| ARPU | EUR 50/mo | Blended across tiers [Estimate] |
| Gross margin (app) | 75-85% | Software subscription, minimal COGS [Estimate] |
| Gross profit per sub | EUR 37.50-42.50/mo | |
| CAC | EUR 30-60 | Organic/community-driven acquisition [Estimate] |
| Monthly churn | 5-7% | Target: below industry avg of 7-9% [Estimate] |
| Average lifetime | 14-20 months | At 5-7% churn [Estimate] |
| LTV | EUR 700-1,000 | ARPU x lifetime [Estimate] |
| LTV:CAC | 12-33x | Exceptionally high IF organic CAC holds [Estimate] |
| Payback period | <2 months | At EUR 50 ARPU vs EUR 30-60 CAC [Estimate] |

**Honest caveat:** These unit economics assume organic acquisition via the cafe and community, which gives unrealistically low CAC. If paid acquisition is needed, CAC rises to EUR 80-150+ (industry average for wellness subscriptions), and LTV:CAC drops to 5-12x. Still healthy, but very different from the organic scenario. [Opinion]

### Cafe Unit Economics

| Metric | Value | Basis |
|---|---|---|
| Monthly rent (100 sqm, Mitte/Kreuzberg) | EUR 2,500-3,500 | EUR 25-35/sqm [Estimate] |
| Staff (2-3 part-time) | EUR 3,000-4,500 | EUR 12-15/hr Berlin |
| COGS (food/beverage) | EUR 2,000-3,000 | 35-45% of food revenue |
| Total monthly cafe cost | EUR 7,500-11,000 | |
| Monthly cafe revenue | EUR 6,000-10,000 | [Estimate] |
| Cafe net contribution | EUR -5,000 to EUR +2,500 | Break-even to slightly negative [Estimate] |

**Honest assessment:** The cafe is likely a break-even or slightly negative operation on its own P&L. Its value is as a marketing and community asset. This means it must convert cafe visitors to app subscribers at a measurable rate. If the cafe costs EUR 10K/mo and converts 10 subscribers/mo (EUR 500 ARPU value), the effective CAC via cafe is EUR 1,000/sub -- unacceptable. The cafe must convert 30-50+ subscribers/month to justify its cost as a marketing channel. [Opinion]

---

## Value Chain (Asset-Light Architecture)

| Function | Build vs. Partner | Rationale |
|---|---|---|
| Physical space | BUILD (lease + design) | Core brand experience. Must control. |
| Food/beverage | BUILD (in-house cafe) | Core experience. Low complexity. |
| AI app | BUILD (core IP) | Business engine. Must own. |
| Biomarker testing | PARTNER (lab network) | Capital-intensive if built. Variable cost if partnered. |
| Clinical oversight | PARTNER (Heilpraktiker + medical advisor) | Regulatory compliance. Not core competency. |
| Supplements/products | CURATE (partner brands) | Avoids manufacturing risk. Margin via curation. |
| Content | BUILD (in-house + community) | Brand voice. Must control. |
| Community platform | BUILD (within app) | Retention mechanism. Must own. |
| Wearable integration | PARTNER (API integrations) | Asset-light. No custom hardware. |

**Graveyard lesson:** Forward Health ($657M dead) built everything. Alche partners where possible. The only things Alche must own: the physical space experience, the app/AI, and the community.

---

## Business Model Risks (Ranked)

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | Cafe doesn't convert to app subscribers | HIGH | CRITICAL | Track conversion rigorously from Day 1. Set kill criteria. |
| 2 | Monthly churn exceeds 10% | MEDIUM-HIGH | HIGH | Community features, cohort programs, biomarker retest cycles |
| 3 | ARPU settles below EUR 35 (Essentials-heavy) | MEDIUM | HIGH | Strong value ladder, clear Integrated tier differentiation |
| 4 | Cafe costs overrun | MEDIUM | MEDIUM | Conservative buildout, phased approach |
| 5 | Lab partnership costs higher than modeled | MEDIUM | MEDIUM | Multiple partnership conversations, variable pricing |
| 6 | CTO hire delayed or more expensive | HIGH | HIGH | Contractor bridge, equity-heavy comp package |

---

## Flags

**RED:**
- Cafe-to-app conversion rate is the linchpin assumption. If this fails, the entire architecture fails. Must be measurable from Day 1 and must have a kill criterion (e.g., <20 conversions/month after Month 3 = pivot cafe strategy).
- Cafe as "not a cost center" is a claim, not a fact. Cafe P&L is likely break-even to negative. It's a marketing asset, not a profit center.

**YELLOW:**
- ARPU of EUR 50 assumes 50% land in EUR 49 Integrated tier. If most choose EUR 19 Essentials, ARPU drops to ~EUR 35 and unit economics compress.
- CTO hire within EUR 500K budget is tight. Berlin CTO salary: EUR 80-120K+. That's 16-24% of the entire raise for one hire's first year.

---

*All unit economics are pre-revenue estimates. Validate with first 50 paying subscribers.*
