# MVP Definition -- Alche

> **Version:** 1.0 | March 2026

---

## MVP Philosophy

**Build the minimum that tests the maximum number of assumptions.**

The most expensive mistake is building a full product before validating core hypotheses. Alche has 5 unvalidated bets (see intake brief). The MVP should test as many as possible with as little code as possible.

---

## What the MVP Must Validate

| Hypothesis | How MVP Tests It | Success Metric |
|---|---|---|
| "Imperfect Longevity" resonates at purchase level | Positioning is reflected in all touchpoints; subscriber growth confirms | 50+ paid subscribers in 3 months |
| Food is the social object for longevity community | Cafe is the entry point; events are food-centered | 4+ community events/month with 15+ attendees each |
| WTP at EUR 49/mo | Pricing live from Day 1; track tier distribution | 40%+ subscribers on Integrated (EUR 49) or Complete (EUR 99) tier |
| Community retains better than data | Community features live from Day 1; measure churn by community engagement | Community-active users churn <5% vs. community-passive >8% |
| Cafe-to-app conversion works | Track every cafe visitor's path to app download and subscription | >3% conversion from cafe visitor to paid subscriber |

---

## MVP Scope (What to Build)

### Pillar 1: Physical Space (Cafe/Apothecary)

| Element | Include in MVP? | Notes |
|---|---|---|
| Cafe with functional food/drinks | YES | Revenue-generating, brand experience, community anchor |
| Curated product shelf (supplements, books, devices) | YES | Low-cost to set up, margin opportunity |
| Event space (within cafe) | YES | 20-30 person capacity for workshops and dinners |
| Full apothecary with testing room | NO (Phase 2) | Requires Heilpraktiker, higher buildout cost |

**MVP space:** ~80-120 sqm cafe with kitchen, counter, seating, product display, and flexible event space. Not a clinical space. A warm, beautiful room.

**Estimated buildout:** EUR 40-80K (including design, fixtures, equipment, initial inventory)
- Kitchen equipment: EUR 10-15K
- Interior/design: EUR 15-25K
- Furniture/fixtures: EUR 10-15K
- Product inventory: EUR 3-5K
- Signage/branding: EUR 2-5K
- Contingency (20%): EUR 8-13K

### Pillar 2: AI App (v1)

| Feature | Include in MVP? | Build/Buy | Priority |
|---|---|---|---|
| User profile + onboarding | YES | BUILD | P0 |
| Content library (longevity articles, guides) | YES | BUILD (content) + off-shelf CMS | P0 |
| Community forum / feed | YES | BUILD or integrate (Circle, etc.) | P0 |
| Basic AI recommendations (based on profile) | YES | BUILD (LLM integration) | P0 |
| Event calendar + RSVP | YES | BUILD or integrate | P1 |
| Biomarker result integration | YES (manual first) | BUILD (basic upload/display) | P1 |
| Wearable integration | NO (Phase 2) | -- | -- |
| Advanced AI analysis | NO (Phase 2) | -- | -- |
| E-commerce / product purchase | NO (Phase 2) | -- | -- |
| Push notifications | YES (basic) | BUILD | P1 |
| Membership management / billing | YES | BUY (Stripe, RevenueCat) | P0 |
| Referral tracking | YES | BUILD (simple) | P1 |

**MVP app scope:** Profile, content, community, basic AI, events, billing. No wearable integration, no advanced AI, no e-commerce.

**Estimated development:** 3-4 months with CTO + 1 developer
- Or: 2 months with CTO + 2 developers + existing template/framework
- Tech stack recommendation: React Native (cross-platform) or Flutter, with Firebase/Supabase backend, OpenAI/Claude API for AI features

### Pillar 3: Community

| Element | Include in MVP? | Notes |
|---|---|---|
| Weekly in-person events (at cafe) | YES | Workshops, dinners, morning sessions |
| In-app community forum | YES | Integrated or via Circle/Discord initially |
| Cohort programs (8-week journeys) | NO (Phase 2) | Requires content depth + facilitation |
| Member-get-member referral | YES | Simple: give cafe credit for referrals |
| Ambassador program | NO (Phase 2) | Need proven members first |

### Pillar 4: Biomarker Testing

| Element | Include in MVP? | Notes |
|---|---|---|
| Lab partnership (1 partner) | YES | Aware (Berlin), or similar. Variable cost per test. |
| Basic panel (20-30 markers) | YES | Entry-level offering |
| Results display in app | YES (basic) | Upload PDF -> contextualized display |
| Follow-up AI recommendations | YES (basic) | "Based on your results, here's what to focus on" |
| Comprehensive panel (100+ markers) | NO (Phase 2) | Higher cost, more complex interpretation |
| Retest cycle tracking | YES (simple) | "Your next test is in 3 months" |

---

## What the MVP Explicitly Excludes

| Feature | Why Excluded | When to Add |
|---|---|---|
| Custom hardware/devices | Asset-light model; Forward Health lesson | Never (partner for hardware) |
| Wearable integration (OURA, Apple Health) | Complex API work, low ROI for MVP | Phase 2 (Month 6+) |
| E-commerce (in-app product sales) | Adds complexity; cafe shelf handles this physically | Phase 2 (Month 6+) |
| B2B/corporate offering | Requires different sales motion | Phase 3 (Month 12+) |
| Multi-city support | Berlin-only for MVP | Phase 4 (Month 18+) |
| Advanced AI (image analysis, meal recognition) | Over-engineering for MVP | Phase 2-3 |
| Gamification (streaks, badges, leaderboards) | Conflicts with "Imperfect Progress" value | Potentially never |

---

## MVP Timeline

```
Month -6 to -3:   Pre-validation (interviews, pricing study, pop-ups)
Month -3 to 0:    Build (cafe buildout, app development, partnership signing)
Month 0:          Soft launch (waitlist members only)
Month 1:          Public launch (cafe + app)
Month 1-3:        MVP validation period (measure everything)
Month 3:          Go/No-Go on Phase 2 investment
```

---

## MVP Success Criteria (Month 3 Checkpoint)

| Metric | Green | Yellow | Red |
|---|---|---|---|
| Paying subscribers | 50+ | 25-49 | <25 |
| ARPU | EUR 45+ | EUR 30-44 | <EUR 30 |
| Monthly churn | <7% | 7-10% | >10% |
| Day 30 app retention | >15% | 8-14% | <8% |
| Community event attendance | 60+/month (total) | 30-59 | <30 |
| Cafe-to-app conversion | >3% | 1-3% | <1% |
| Cafe monthly revenue | EUR 6K+ | EUR 3-6K | <EUR 3K |
| NPS | >40 | 20-39 | <20 |
| Organic referrals | 10+/month | 5-9 | <5 |

**Red across 3+ metrics at Month 3 = pivot or revisit fundamental assumptions.**

---

## MVP Budget Estimate

| Category | Estimate | Notes |
|---|---|---|
| Cafe buildout | EUR 40-80K | See breakdown above |
| App development (3-4 months) | EUR 30-50K | CTO salary + 1 developer |
| Pre-launch marketing | EUR 11.5K | Phase 1 pre-launch activities |
| First 3 months operations | EUR 45-60K | Rent, staff, COGS, marketing |
| Lab partnership setup | EUR 2-5K | Initial integration, first batch of tests |
| Legal/admin | EUR 5-10K | Heilpraktiker, incorporation, contracts |
| Contingency (15%) | EUR 20-30K | |
| **Total MVP Investment** | **EUR 153-246K** | |

**Against EUR 500K raise:** MVP consumes 30-50% of the raise, leaving EUR 254-347K for months 4-24 operations and growth. This is tight if cafe buildout hits the high end.

---

## Flags

**RED:**
- Cafe buildout at EUR 80K + app development at EUR 50K = EUR 130K before any operations. That's 26% of the raise just for MVP build. If both hit high estimates (EUR 80K + EUR 50K + EUR 60K ops + EUR 30K contingency = EUR 220K), that's 44% of the raise consumed by Month 3.

**YELLOW:**
- MVP app v1 without wearable integration may feel incomplete to optimization-curious secondary segment.
- Manual biomarker result upload is not scalable. Lab API integration should be Phase 2 priority.
- CTO hire timing is the critical path for app delivery. Every month of CTO delay = one month of app delay.

---

*MVP is a validation instrument, not a finished product. Build to learn, not to impress.*
