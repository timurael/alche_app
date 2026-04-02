# Risk Analysis -- Alche (Likelihood x Impact Matrix)

> **Version:** 1.0 | March 2026

---

## Risk Matrix

### Scoring
- **Likelihood:** 1 (unlikely) to 5 (near-certain)
- **Impact:** 1 (minor) to 5 (existential)
- **Risk Score:** Likelihood x Impact (1-25)
- **Red:** Score >15 | **Yellow:** Score 8-15 | **Green:** Score <8

---

## Strategic Risks

| # | Risk | L | I | Score | Zone | Mitigation |
|---|---|---|---|---|---|---|
| S1 | "Imperfect Longevity" doesn't convert to purchases | 3 | 5 | **15** | YELLOW | Pre-launch concept testing (Experiment 1) |
| S2 | ZOE expands into multi-dimensional longevity + Europe | 2 | 5 | 10 | YELLOW | Monitor; move fast; community moat |
| S3 | Well-funded stealth competitor in same positioning | 2 | 4 | 8 | YELLOW | Speed to market; community lock-in |
| S4 | Over-optimization backlash is a trend cycle (1-2yr) | 2 | 4 | 8 | YELLOW | Build on "science + joy" foundation, not just anti-optimization |
| S5 | Community doesn't form around longevity | 3 | 5 | **15** | YELLOW | Test with pop-up events before building app |
| S6 | GLP-1 drugs eliminate perceived need for longevity platforms | 2 | 3 | 6 | GREEN | Position around holistic longevity, not weight/metabolism |

## Market Risks

| # | Risk | L | I | Score | Zone | Mitigation |
|---|---|---|---|---|---|---|
| M1 | WTP below EUR 35/mo | 3 | 5 | **15** | YELLOW | Van Westendorp pricing study pre-launch |
| M2 | Berlin SOM smaller than estimated | 3 | 4 | 12 | YELLOW | Validate audience size in interviews |
| M3 | European VC market tightens further | 3 | 3 | 9 | YELLOW | Conservative spend; revenue-focused milestones |
| M4 | Longevity market hype cools | 2 | 3 | 6 | GREEN | Long-term structural trend, not cyclical |

## Operational Risks

| # | Risk | L | I | Score | Zone | Mitigation |
|---|---|---|---|---|---|---|
| O1 | CTO hire delayed >3 months | 4 | 4 | **16** | RED | Start recruiting immediately; contractor bridge |
| O2 | Cafe buildout exceeds EUR 100K | 3 | 3 | 9 | YELLOW | Get contractor quotes before committing |
| O3 | Cafe-to-app conversion <1% | 3 | 5 | **15** | YELLOW | Track obsessively from Day 1; test with pop-ups |
| O4 | Monthly churn >10% | 3 | 4 | 12 | YELLOW | Community features, cohort programs, retest cycles |
| O5 | Key founder departure | 2 | 5 | 10 | YELLOW | Vesting schedules, aligned equity split |
| O6 | Heilpraktiker pathway doesn't cover intended services | 2 | 5 | 10 | YELLOW | Legal review pre-launch (Experiment 6) |

## Financial Risks

| # | Risk | L | I | Score | Zone | Mitigation |
|---|---|---|---|---|---|---|
| F1 | Runway shorter than 18 months | 3 | 5 | **15** | YELLOW | Lean burn scenario; revenue from Month 2 |
| F2 | Need bridge round at Month 12-15 | 4 | 3 | 12 | YELLOW | Build investor pipeline early; hit milestones |
| F3 | ARPU settles below EUR 40 | 3 | 4 | 12 | YELLOW | Strong value ladder; upsell campaigns |
| F4 | Cafe operates at >EUR 5K/mo loss | 3 | 3 | 9 | YELLOW | Budget conservatively; track cafe P&L separately |

## Reputational Risks

| # | Risk | L | I | Score | Zone | Mitigation |
|---|---|---|---|---|---|---|
| R1 | Science credibility challenged (no publications) | 4 | 4 | **16** | RED | Partnership with credible institution; transparent evidence sourcing |
| R2 | Health recommendation causes harm | 1 | 5 | 5 | GREEN | Disclaimers, medical advisor review, conservative recommendations |
| R3 | Data privacy breach | 1 | 5 | 5 | GREEN | GDPR compliance, minimal data collection, secure infrastructure |

---

## Risk Heat Map

```
IMPACT
  5 |           S5,S1     O1,R1
    |        M1,O3,F1
  4 |     S2,S3    O4,F3
    |              O2,O6,F2
  3 |  S4    M3,F4
    |
  2 |
    |
  1 |
    +────────────────────────
    1    2    3    4    5
              LIKELIHOOD
```

---

## Top 5 Risks (Prioritized by Score)

| Rank | Risk | Score | Owner | Action Required |
|---|---|---|---|---|
| 1 | **O1: CTO hire delayed** | 16 | Timu + Daria | Begin recruiting immediately. Network, AngelList, Berlin tech community. Have 3+ candidates in pipeline by fundraise close. |
| 2 | **R1: Science credibility gap** | 16 | Daria | Initiate partnership conversation with 2-3 research institutions. Even an advisory board with published researchers helps. |
| 3 | **S1: Positioning doesn't convert** | 15 | Timu | Experiment 1 (concept testing) is P0. Must complete before fundraise. |
| 4 | **S5: Community doesn't form** | 15 | Both | Experiment 3 (pop-up events) tests this directly. If it fails, the architecture must pivot. |
| 5 | **O3/M1/F1: Unit economics don't work** | 15 | Both | Experiments 2 + 5 test WTP and conversion. Financial model depends on these. |

---

## Flags

**RED:**
- Two risks score 16 (CTO hire delay, science credibility gap). Both require immediate action, not post-fundraise action.
- Five risks score 15. The concentration of high-scoring risks means the startup is genuinely high-risk. This is expected at pre-seed but must be communicated honestly to investors.

**YELLOW:**
- The risk profile is dominated by "unknowable" risks (market, positioning, community) rather than "manageable" risks (ops, legal). This means de-risking requires customer validation, not just better execution.

---

*This risk analysis should be reviewed monthly. Risk scores change as validation data comes in.*
