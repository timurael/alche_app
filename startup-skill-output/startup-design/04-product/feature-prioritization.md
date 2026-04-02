# Feature Prioritization -- Alche (RICE Framework)

> **Version:** 1.0 | March 2026

---

## RICE Scoring Key

- **Reach:** How many users/month will this feature affect? (1-10 scale)
- **Impact:** How much will it move the key metric? (3=massive, 2=high, 1=medium, 0.5=low, 0.25=minimal)
- **Confidence:** How sure are we of our estimates? (100%, 80%, 50%, 20%)
- **Effort:** Person-months to build (lower = better)
- **RICE Score = (Reach x Impact x Confidence) / Effort**

---

## Feature Prioritization Table

### MVP Features (Phase 1: Months 0-3)

| # | Feature | Reach | Impact | Confidence | Effort | RICE | Priority |
|---|---|---|---|---|---|---|---|
| 1 | User onboarding + profile | 10 | 3 | 100% | 1 | 30.0 | P0 |
| 2 | Subscription billing (Stripe/RevenueCat) | 10 | 3 | 100% | 0.5 | 60.0 | P0 |
| 3 | Community forum/feed | 8 | 2 | 80% | 1.5 | 8.5 | P0 |
| 4 | Content library (articles, guides) | 8 | 2 | 80% | 1 | 12.8 | P0 |
| 5 | Basic AI recommendations | 7 | 2 | 50% | 2 | 3.5 | P0 |
| 6 | Event calendar + RSVP | 6 | 2 | 80% | 0.5 | 19.2 | P1 |
| 7 | Biomarker result display (manual upload) | 4 | 2 | 50% | 1 | 4.0 | P1 |
| 8 | Referral tracking | 5 | 1 | 80% | 0.5 | 8.0 | P1 |
| 9 | Push notifications (basic) | 7 | 1 | 80% | 0.5 | 11.2 | P1 |
| 10 | Cafe menu / ordering integration | 3 | 0.5 | 50% | 1 | 0.75 | P2 |

### Phase 2 Features (Months 3-6)

| # | Feature | Reach | Impact | Confidence | Effort | RICE | Priority |
|---|---|---|---|---|---|---|---|
| 11 | Advanced AI analysis (personalized protocols) | 8 | 3 | 50% | 3 | 4.0 | P1 |
| 12 | Lab API integration (automatic results) | 5 | 2 | 80% | 2 | 4.0 | P1 |
| 13 | Wearable integration (OURA, Apple Health) | 6 | 1 | 50% | 2 | 1.5 | P2 |
| 14 | Cohort programs (8-week journeys) | 4 | 2 | 50% | 2 | 2.0 | P1 |
| 15 | In-app product curation / e-commerce | 5 | 1 | 50% | 2 | 1.25 | P2 |
| 16 | Progress tracking (biomarker trends over time) | 6 | 2 | 80% | 1.5 | 6.4 | P1 |
| 17 | Community DMs / peer matching | 4 | 1 | 50% | 1.5 | 1.3 | P2 |
| 18 | Member ambassador program (in-app) | 3 | 1 | 50% | 1 | 1.5 | P2 |

### Phase 3 Features (Months 6-12)

| # | Feature | Reach | Impact | Confidence | Effort | RICE | Priority |
|---|---|---|---|---|---|---|---|
| 19 | Multi-city support (infrastructure) | 2 | 3 | 20% | 4 | 0.3 | P3 |
| 20 | B2B / corporate wellness offering | 3 | 2 | 20% | 3 | 0.4 | P3 |
| 21 | Advanced biomarker interpretation (AI-powered) | 5 | 2 | 50% | 3 | 1.7 | P2 |
| 22 | Meal/recipe integration | 4 | 1 | 50% | 2 | 1.0 | P3 |
| 23 | Practitioner marketplace | 3 | 1 | 20% | 3 | 0.2 | P3 |

---

## Priority Summary

### Build First (P0 -- Months 0-3)
1. Subscription billing (RICE: 60.0)
2. User onboarding + profile (RICE: 30.0)
3. Event calendar + RSVP (RICE: 19.2)
4. Content library (RICE: 12.8)
5. Push notifications (RICE: 11.2)
6. Community forum/feed (RICE: 8.5)
7. Referral tracking (RICE: 8.0)
8. Basic AI recommendations (RICE: 3.5)

**Total P0 effort: ~7.5 person-months** (~2 developers x 4 months, or 3 developers x 2.5 months)

### Build Second (P1 -- Months 3-6)
1. Progress tracking / biomarker trends (RICE: 6.4)
2. Biomarker result display (RICE: 4.0)
3. Advanced AI analysis (RICE: 4.0)
4. Lab API integration (RICE: 4.0)
5. Cohort programs (RICE: 2.0)

**Total P1 effort: ~9.5 person-months**

### Build Later (P2-P3 -- Months 6+)
- Wearable integration, e-commerce, peer matching, ambassador program, multi-city, B2B, practitioner marketplace

---

## Feature-to-Hypothesis Map

| Feature | Which Hypothesis It Tests |
|---|---|
| Community forum + events | Bet 2 (food as social object), Bet 5 (community > data for retention) |
| Subscription billing + tiers | Bet 3 (WTP at EUR 49-99/mo) |
| Content library + AI recs | Bet 1 ("Imperfect Longevity" as value, not just brand) |
| Biomarker integration | Bet 1 (science depth) + Bet 3 (value justification for higher tiers) |
| Referral tracking | Bet 5 (community drives growth) |
| Push notifications | Retention mechanics (industry benchmark: 85% higher retention with weekly usage) |

---

## Build vs. Buy Decisions

| Feature | Recommendation | Rationale |
|---|---|---|
| Billing/subscription | BUY (RevenueCat + Stripe) | Commodity infrastructure, not differentiation |
| Community forum | BUILD or BUY (evaluate Circle, Discourse, custom) | Community UX is core to value prop; may need custom |
| Content CMS | BUY (Contentful, Sanity, or headless CMS) | Not differentiation |
| AI recommendations | BUILD (on top of LLM API) | Core IP -- the quality of recommendations is differentiation |
| Analytics | BUY (Mixpanel, Amplitude, or PostHog) | Commodity |
| Push notifications | BUY (OneSignal, Braze) | Commodity |
| Biomarker display | BUILD | Presentation and interpretation is core value |

---

## Flags

**YELLOW:**
- P0 features require ~7.5 person-months. With a CTO + 1 developer starting Month -3, this is achievable for Month 0 launch. If CTO hire is delayed, the entire feature timeline shifts.
- Basic AI recommendations (P0) using LLM APIs is fast to build but requires careful prompt engineering and safety guardrails. Medical/health recommendations carry liability risk.
- Community forum build-vs-buy decision is important. Custom = better UX but higher effort. Third-party = faster but less control.

---

*Priorities will shift based on MVP validation data. Re-score after Month 3 checkpoint.*
