# Assumptions Tracker -- Alche

> **Version:** 1.0 | March 2026
> **Protocol:** Each assumption is rated on confidence and criticality. High criticality + low confidence = validate first.

---

## Assumption Categories

### A. Customer Assumptions

| # | Assumption | Confidence | Criticality | Validated? | Validation Method |
|---|---|---|---|---|---|
| A1 | Women 30-55 in Berlin are the primary customer segment | LOW | HIGH | NO | Experiment 4 (interviews + survey) |
| A2 | Target customers are alienated by biohacker/optimization culture | LOW | HIGH | NO | Experiment 4 (interviews) |
| A3 | Target customers currently spend EUR 50+/mo on scattered wellness | LOW | HIGH | NO | Experiment 4 (spending survey) |
| A4 | Perimenopause/menopause is a key pain point driving purchase | LOW | HIGH | NO | Experiment 4 (interviews) |
| A5 | Customers want community (in-person + digital) for longevity | LOW | HIGH | NO | Experiment 3 (pop-up events) |
| A6 | Berlin expat vs. German audience split is manageable | LOW | MEDIUM | NO | Experiment 4 (demographic analysis) |
| A7 | Gen Z is not a significant segment for this product | MEDIUM | MEDIUM | PARTIAL | McKinsey data suggests 41% wellness spend from Gen Z |

### B. Value Proposition Assumptions

| # | Assumption | Confidence | Criticality | Validated? | Validation Method |
|---|---|---|---|---|---|
| B1 | "Imperfect Longevity" resonates as a purchase trigger | LOW | CRITICAL | NO | Experiment 1 (concept testing) |
| B2 | Multi-dimensional longevity (vs. nutrition-only) is valued | LOW | HIGH | NO | Experiment 1 (concept comparison) |
| B3 | Physical space adds enough value to justify its cost | LOW | HIGH | NO | Experiment 3 + 5 (events + conversion) |
| B4 | AI-powered personalization is a meaningful differentiator | MEDIUM | MEDIUM | NO | Post-launch A/B testing |
| B5 | Transparent evidence sourcing builds trust | MEDIUM | MEDIUM | NO | Post-launch NPS |

### C. Pricing Assumptions

| # | Assumption | Confidence | Criticality | Validated? | Validation Method |
|---|---|---|---|---|---|
| C1 | Target WTP is EUR 49/mo for Integrated tier | LOW | CRITICAL | NO | Experiment 2 (Van Westendorp) |
| C2 | 50% of subscribers choose Integrated (EUR 49) tier | LOW | HIGH | NO | Post-launch tier tracking |
| C3 | 20% choose Complete (EUR 99) tier | LOW | MEDIUM | NO | Post-launch tier tracking |
| C4 | 40% choose annual billing | MEDIUM | MEDIUM | NO | Post-launch billing analysis |
| C5 | Customers would cancel 1-2 existing subscriptions to afford Alche | LOW | HIGH | NO | Experiment 2 (substitution mapping) |

### D. Business Model Assumptions

| # | Assumption | Confidence | Criticality | Validated? | Validation Method |
|---|---|---|---|---|---|
| D1 | Cafe generates EUR 7-10K/mo revenue | LOW | HIGH | NO | Post-launch tracking |
| D2 | Cafe-to-app conversion rate >3% | LOW | CRITICAL | NO | Experiment 5 |
| D3 | Monthly subscriber churn <7% | MEDIUM | HIGH | NO | Post-launch cohort analysis |
| D4 | Community features reduce churn by 15-23% | MEDIUM | HIGH | NO | Post-launch A/B (community active vs. passive) |
| D5 | Lab partnership achievable at 15-20% commission | MEDIUM | MEDIUM | NO | Partnership conversations |
| D6 | Heilpraktiker covers intended services | MEDIUM | HIGH | NO | Experiment 6 (legal review) |

### E. Operational Assumptions

| # | Assumption | Confidence | Criticality | Validated? | Validation Method |
|---|---|---|---|---|---|
| E1 | CTO hire achievable within EUR 60-90K/yr + equity | MEDIUM | HIGH | NO | Market research, candidate conversations |
| E2 | Cafe buildout within EUR 40-80K | MEDIUM | HIGH | NO | Contractor quotes |
| E3 | MVP app buildable in 3-4 months | MEDIUM | MEDIUM | NO | CTO assessment |
| E4 | Berlin commercial space available at EUR 25-35/sqm | MEDIUM | MEDIUM | NO | Real estate scouting |
| E5 | 24-month runway on EUR 500K | LOW | HIGH | NO | Depends on all cost assumptions |

### F. Market Assumptions

| # | Assumption | Confidence | Criticality | Validated? | Validation Method |
|---|---|---|---|---|---|
| F1 | Over-optimization backlash is a structural trend (not cyclical) | MEDIUM | MEDIUM | PARTIAL | GWS 2026 confirms; duration unknown |
| F2 | Women's longevity market grows as projected | MEDIUM | MEDIUM | PARTIAL | Multiple analyst reports confirm |
| F3 | Berlin is the right first city | MEDIUM | HIGH | PARTIAL | Ecosystem data supports; demand unquantified |
| F4 | 12-18 month competitive window exists | LOW | HIGH | NO | Dependent on competitor moves |
| F5 | No stealth competitor in same position | LOW | MEDIUM | NO | Unknown by definition |

---

## Validation Priority Matrix

```
CRITICALITY
  HIGH  |  A1,A2,B1,C1   E1,D1,D2
        |  A3,A4,A5       D3,D4,D6
        |  B3,C5,E5       F3,F4
        |
  MED   |  A7,B4,B5       C4,D5,E3
        |  A6,C2,C3       E2,E4
        |  F1,F2          F5
        |
  LOW   |
        +──────────────────────────
          LOW            MEDIUM         HIGH
                     CONFIDENCE
```

**Top-left quadrant (HIGH criticality, LOW confidence) = Validate first:**
A1, A2, A3, A4, A5, B1, B3, C1, C5, D1, D2, E5, F3, F4

These 14 assumptions are the ones that could kill the startup if wrong and have not been validated. The validation playbook addresses most of them.

---

## Assumption Dependencies

```
B1 (positioning resonates)
    |
    ├── if TRUE --> A1 (segment confirmed) --> C1 (WTP confirmed)
    |                                              |
    |                                              └── D2 (conversion works) --> D3 (retention holds)
    |                                                                                |
    |                                                                                └── E5 (runway sufficient)
    |
    └── if FALSE --> ENTIRE THESIS NEEDS REWORK
```

**B1 (Imperfect Longevity resonates at purchase level) is the root assumption.** If it fails, the downstream assumptions become irrelevant. This is why Experiment 1 is P0.

---

*Update this tracker monthly as validation data comes in. Change status from NO to PARTIAL or YES with supporting evidence.*
