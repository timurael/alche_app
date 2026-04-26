# Alche Feature Inventory

**Purpose:** Complete catalog of all alche features across 6 revenue streams for tier allocation planning.
**Status:** Based on existing pitch book materials (sections 05-08, product/business model files)
**Date:** February 2026

---

## Digital App Features

### Onboarding & Assessment

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| Health questionnaire | 50-question intake assessing goals, lifestyle, current health status | Medium | Low | Roadmap | Essential for all tiers; generates initial data for protocol templates |
| Outcome selection | User selects primary goal from 5 outcome categories (energy, longevity, recovery, cognitive, aesthetic) | Low | Low | MVP | Single-tap goal selection determines protocol templates, product recommendations, content feed |
| Lifestyle context capture | Sleep habits, stress levels, dietary patterns, exercise frequency | Medium | Low | MVP | Powers protocol personalization in V1 |
| Biomarker upload | Manual entry or photo upload of lab results | High | Medium | V1 | May require AI/OCR; essential for personalized protocols |

### Protocol Generation & Guidance

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| Template protocols | Pre-built protocol templates for 5 outcome categories | Medium | Low | MVP | Fixed templates, not personalized; physician-informed |
| Personalized AI protocols | Protocols calibrated to individual biomarkers, lifestyle, and goals | High | High | V1 | Requires AI layer + data scale; physician-informed oversight |
| Protocol milestones | Journey framework with progress checkpoints | Medium | Low | MVP | Creates behavioral structure and gamification hooks |
| Protocol-linked product recommendations | Supplements/products suggested based on user's protocol | High | Medium | V1 | Bridges KNOW → GET in flywheel; requires intelligent matching |
| Physician-informed guidance | Medical advisor validation of protocol templates and ranges | Medium | Medium | MVP/V1 | Essential for credibility and regulatory safety; CTO hire unlocks this |

### Tracking Features

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| Session tracking | Log LED sessions, smoothie orders, space visits | Low | Low | MVP | QR check-in system; creates behavioral data for personalization |
| Wearable integration | Sync sleep, HRV, activity from Oura, WHOOP, Apple Health | High | Medium | Core tier | API integrations; standard but technically complex |
| Biomarker dashboard | Display blood panel results, trends over time | Medium | Low | Core tier | Longitudinal view; 6 months of data = 6x more valuable than snapshot |
| CGM glucose tracking (Lite) | Manual glucose entry or basic CGM data display | Medium | Medium | MVP Extended | "CGM Lite" for MVP; basic display, no intelligence layer |
| CGM glucose tracking (Smart) | Real-time glucose + meal correlation + insights | High | High | V1/V2 | Requires physician partnership + data science; physician-enabled feature |
| Habit automation | Track daily wellness habits (hydration, supplements, movement) | Medium | Low | V1 | Creates consistent engagement touchpoints |
| Biological age score | Calculate bio age from bloodwork + epigenetic clocks | Very High | High | V2 | Science validation required; Fitzgerald et al. 2021 evidence base |

### Insights & Analytics

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| Basic data visualization | Charts for biomarkers, session frequency, habit streaks | Medium | Low | MVP | Essential for "KNOW" layer in flywheel |
| AI insights engine | Personalized interpretations of trends, correlations, recommendations | Very High | High | V1 | Requires ML + data scale; differentiation vs. competitors |
| Glucose-smoothie correlation | Map smoothie ingredients to glucose response patterns | High | High | V1 | Unique to alche; bridges physical space + data intelligence |
| Outcome progress tracking | Measure progress toward user's selected outcome category | Medium | Low | MVP | Ties back to initial goal selection; retention driver |
| Comparative benchmarks | Show user's metrics vs. age/gender cohort averages | Medium | Medium | V1 | Requires population data; social proof + motivation |

### Community Features

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| Community feed | Browse posts, updates, member activity | Medium | Medium | Core tier | Content moderation required; retention moat |
| Accountability circles | Small groups (5-8 members) with shared goals | High | Medium | Pro tier | 2.3x retention from WHOOP data; differentiator |
| Shared challenges | Time-bound group challenges (30-day protocols, etc.) | Medium | Low | Core tier | Gamification + community combined; engagement driver |
| Protocol sharing | Members share and remix protocols | Medium | Low | Pro tier | UGC content; network effects |
| Member profiles | Public profiles with bio age, protocols, achievements | Low | Low | Core tier | Social identity layer; BELONG in flywheel |
| Direct messaging | Private messages between members | Medium | Medium | Pro tier | Requires moderation infrastructure |
| Event RSVP | Book tickets for Alche Salon, workshops, talks | Low | Low | MVP | Revenue stream #5; seamless app → IRL bridge |

### Gamification & Engagement

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| Streaks | Track consecutive days of protocol adherence | Low | Low | MVP | Low-effort retention driver |
| Achievements | Unlock badges for milestones (first blood panel, 90-day streak, etc.) | Medium | Low | V1 | Dopamine hits; requires achievement system design |
| Leaderboards | Rankings for challenges, session frequency, bio age improvement | Medium | Low | Pro tier | Social proof + competition; moderation needed to avoid toxicity |
| Milestone rewards | Credits, discounts, or perks for completing milestones | Medium | Medium | V1 | Revenue feedback loop; ties to commerce layer |

### Content Library

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| Science articles | Evidence-based longevity content | Low | Low | Free tier | Founder-generated; content-first GTM strategy |
| Video library | Short-form and long-form educational content | Medium | Low | Free tier | Repurposed from TikTok/YouTube; SEO pillar |
| Protocol guides | How-to guides for protocols (sauna, red light, nutrition, etc.) | Medium | Low | Core tier | Bridges education → action |
| Researcher talks (recorded) | Recorded Alche Salon events | Low | Low | Pro tier | Content production from physical events; evergreen value |
| Member success stories | Case studies of bio age reversals, health improvements | Low | Low | Free tier | Social proof; user-generated in V1 |

### Expert Access

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| AI concierge | Chatbot for protocol questions, product recommendations | High | High | V1 | GPT-4 + RAG architecture; reduces support load |
| Physician 1:1 reviews | Quarterly blood panel review calls with medical advisor | Low | Very High | Premium tier | Human labor cost; outsourced or via physician SaaS partnership |
| Protocol reviews | Async written reviews of user's protocol by expert | Medium | High | Premium tier | Human labor; scales poorly but high perceived value |
| In-app chat support | Support team answers questions | Low | Medium | Core tier+ | Operational cost; community can self-serve in Free tier |

### Commerce & Product Features

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| Shop by outcome | Browse supplements/products organized by outcome category | Medium | Low | MVP | Unique categorization; bridges protocol → product |
| Product catalog | Curated third-party supplements, own-brand potions, functional products | Low | Low | MVP | Curation, not manufacturing; asset-light |
| Smart replenishment | Auto-reorder based on usage patterns and protocol | High | Medium | V1 | Predictive commerce; increases LTV |
| Subscription boxes | Monthly curated supplement boxes | Medium | Medium | V1 | Competes with AG1; bundling play |
| Product reviews | Community ratings and reviews | Low | Low | Core tier | UGC; builds trust |
| Potion customization | Build-your-own smoothie with functional boosts | Low | Low | MVP | In-app during booking flow; average ticket EUR 11 |

### Physical Space Integration

| Feature | Description | Effort to Deliver | Cost to Deliver | Status | Notes |
|---------|-------------|-------------------|-----------------|--------|-------|
| LED session booking | Real-time availability for 20-minute red light sessions (Glow or Recovery) | Medium | Low | MVP | Core revenue stream #3; capacity-controlled |
| Smoothie pre-order | Order potion during booking flow for pickup on arrival | Low | Low | MVP | Increases average ticket; reduces wait time |
| QR check-in | Scan QR code on arrival for session | Low | Low | MVP | Seamless experience; generates behavioral data |
| In-store mode | Optimized UI for browsing products while in physical space | Medium | Low | MVP | Bridges digital → physical commerce |
| Space access hours | Display open hours, crowd levels | Low | Low | MVP | Transparency; sets expectations |
| Member-exclusive space access | Priority booking, extended hours for Pro/Premium members | Low | Low | Pro tier+ | Tiering incentive; community differentiation |

---

## Physical Space Features

### Red Light Therapy (LED)

| Feature | Description | Effort | Cost | Status | Notes |
|---------|-------------|--------|------|--------|-------|
| 20-minute Glow session | Red light (630-670nm) for skin rejuvenation | Low (operations) | High (equipment) | Phase 2 | Core revenue stream #3; equipment ~EUR 15-25K |
| 20-minute Recovery session | Near-infrared for muscle recovery, inflammation | Low (operations) | High (equipment) | Phase 2 | Same equipment, different protocol |
| Booking system integration | App-based booking with real-time availability | Medium | Low | MVP | Technical integration; prevents overbooking |
| Session tracking & feedback | Post-session "how do you feel?" logging | Low | Low | MVP | Creates behavioral data for V1 personalization |

### Space Access & Membership

| Feature | Description | Effort | Cost | Status | Notes |
|---------|-------------|--------|------|--------|-------|
| Open access hours | Standard hours for all members | Low | Medium (rent + staffing) | Phase 2 | Berlin Mitte location; ~EUR 10K/month baseline |
| Extended hours for Premium | Early morning or late evening access | Low | Medium (staffing) | Phase 2 | Premium tier perk |
| Walk-in vs. member pricing | Non-members can visit at higher price | Low | Low | Phase 2 | Acquisition funnel; walk-ins convert to digital subscribers |
| Community seating area | Space to work, socialize, meet other members | Low | Low | Phase 2 | BELONG layer; physical manifestation of community |

### Smoothie Bar (Functional Potions)

| Feature | Description | Effort | Cost | Status | Notes |
|---------|-------------|--------|------|--------|-------|
| 6 signature potions | EUR 7-11 base smoothies (Energy, Focus, Recovery, Glow, Gut, Immunity) | Medium (recipe development) | Medium (ingredients + equipment) | Phase 2 | Mapped to outcome categories |
| 5 functional boosts | +EUR 2 add-ons (collagen, creatine, adaptogens, greens, omega-3) | Low | Low | Phase 2 | Upsell driver; average ticket EUR 11 |
| Pre-order via app | Order during booking flow, ready on arrival | Low | Low | MVP | Reduces wait time; increases conversion |
| Build-your-own | Custom smoothie with user-selected boosts | Low | Low | Phase 2 | Personalization play; data collection on preferences |
| Pouch retail | Buy boost powders to take home | Low | Low | Phase 2 | Cross-sell to products; "try in smoothie, buy for home" |

### Events (Alche Salon)

| Feature | Description | Effort | Cost | Status | Notes |
|---------|-------------|--------|------|--------|-------|
| Quarterly science talks | Researcher presentations over wine | Low | Low-Medium (venue + catering) | Pre-funding (Q2) | Content production + community building + revenue (EUR 200-500/event) |
| Monthly events (post-funding) | Scale to monthly with 60-80 attendees | Low | Low-Medium | Post-funding (Q3+) | Biohackers Berlin meetup (2,213 members) is warm audience |
| Member-exclusive events | Premium tier gets priority access or exclusive sessions | Low | Low | Phase 2 | Tiering incentive |
| Workshop series | Hands-on protocol workshops (meal prep, breath work, etc.) | Medium | Medium | Phase 2 | Higher ticket price; educational revenue stream |
| Event recordings | Record and publish to app | Low | Low | Phase 2 | Content library; evergreen value |

---

## Cross-Sell Integration Points

### Potions (Supplements) Cross-Sell

| Feature | Description | Tier Dependency? | Notes |
|---------|-------------|------------------|-------|
| Potion recommendations in protocol | AI suggests smoothies based on user's protocol and outcome | Pro tier (AI layer) | V1 feature; bridges physical + digital |
| "Loved this? Take it home" | After ordering a smoothie with boosts, see retail pouches of those boosts in shop | All tiers | Low-hanging conversion; try-before-buy |
| Tier discounts on potions | 10% off for Pro, 20% off for Premium members | Pro/Premium | Incentivizes upgrade; increases LTV |
| Subscription potion packs | Monthly delivery of boost powders | All tiers | Competes with AG1; recurring revenue |

### CGM Programs Cross-Sell

| Feature | Description | Tier Dependency? | Notes |
|---------|-------------|------------------|-------|
| CGM program access | 14-day CGM + personalized nutrition coaching | Premium tier | Phase 2; physician-enabled; ~EUR 200-400 program price |
| Glucose-smoothie insights | See how alche smoothies impact your glucose | Premium tier (CGM users) | Unique to alche; V1+ feature |
| CGM data dashboard | Real-time glucose trends + correlations | Premium tier | V2 feature; requires physician partnership formalized |
| Protocol adjustments from CGM | AI refines nutrition protocol based on glucose data | Premium tier | V2 feature; personalization at scale |

### Events Cross-Sell

| Feature | Description | Tier Dependency? | Notes |
|---------|-------------|------------------|-------|
| Event RSVP in-app | All members can discover and book events | All tiers (but Free may have limited access) | MVP feature |
| Member-exclusive events | Priority access or exclusive workshops for Pro/Premium | Pro/Premium | Tiering incentive |
| Event ticket discounts | Pro gets 10%, Premium gets 20% off event tickets | Pro/Premium | Increases event attendance + tier value |
| Event + session bundles | Book event + LED session at discount | All tiers | Increases average transaction; drives physical space usage |

### Physical Space → Digital Subscription Cross-Sell

| Feature | Description | Tier Dependency? | Notes |
|---------|-------------|------------------|-------|
| Walk-in → waitlist capture | Non-members who visit space can sign up for digital waitlist | N/A (acquisition) | 60% of acquisitions come from physical space at EUR 15-20 CAC |
| First visit discount | Walk-ins get EUR 5 off first subscription month | N/A (acquisition) | Conversion incentive |
| QR code prompts | After session, QR code suggests "Track your progress in the app" | All tiers | Behavioral nudge toward engagement |
| Space credits for subscribers | Pro/Premium members get LED session credits included | Pro/Premium | Reduces churn; increases perceived value |

---

## B2B Features (Doctor SaaS / Physician Integration)

### Patient-Facing (Doctor-Enabled)

| Feature | Description | Effort | Cost | Status | Notes |
|---------|-------------|--------|------|--------|-------|
| CGM data access | Physician can view patient's CGM dashboard | High | Medium | Phase 2 | Requires GDPR-compliant data sharing + physician portal |
| Protocol co-creation | Physician and patient collaborate on protocol in app | High | Medium | Phase 2 | Regulatory complexity; requires Heilpraktiker or MD |
| Blood panel review | Physician reviews results and leaves notes in app | Medium | Medium | Phase 2 | Async communication; reduces appointment load for physician |
| Prescription integration | Physician can send supplement recommendations to patient's app shop | High | High | Roadmap | Regulatory complexity in Germany |

### Physician SaaS (B2B Revenue)

| Feature | Description | Effort | Cost | Status | Notes |
|---------|-------------|--------|------|--------|-------|
| Physician dashboard | View all patients using alche with shared data | High | High | Phase 2 | SaaS portal; EUR 50-200/month per physician revenue |
| Patient roster management | Physician manages which patients have access to their guidance | Medium | Low | Phase 2 | Admin layer |
| Batch protocol templates | Physician creates protocol templates for multiple patients | Medium | Low | Phase 2 | Efficiency play; scales physician time |
| Revenue share from CGM programs | Physician earns % of CGM program fees when prescribing | Low | Low | Phase 2 | Incentive alignment; physician gets 20-30% |
| White-label option | Physician can brand the app experience as their practice | Very High | High | Roadmap | Premium SaaS tier; EUR 500+/month |

---

## Feature Categorization for Tier Allocation

### "Table Stakes" (Must be in Free/Core tier)

**Why:** Acquisition, social proof, network effects, baseline value perception

- **Content library access (articles, videos):** Free tier acquisition magnet; content-first GTM strategy
- **Community feed browsing:** BELONG layer requires critical mass; paywall kills network effects
- **Event discovery (RSVP for paid events):** Discovery = Free, ticket purchase = paid revenue
- **Product catalog browsing:** Discovery = Free; commerce happens at checkout
- **Member profiles (basic):** Social identity layer requires visibility to drive community
- **Outcome selection:** Core experience; everyone needs a goal to understand the product
- **Basic data visualization (if they connect wearables):** "KNOW" layer must be accessible to prove value

**Core tier table stakes** (EUR 19/month):
- **Wearable integration (Oura, Apple Health):** Essential for "KNOW" layer; data dependency
- **Biomarker dashboard:** Longitudinal tracking is the hook; 6 months of data = 6x value
- **Template protocols:** Direction without intelligence; table stakes for action layer
- **Habit tracking:** Basic engagement; creates data for V1 personalization
- **Community feed posting:** BELONG requires participation, not just observation
- **Shared challenges:** Gamification + community; retention driver

---

### "Upgrade Drivers" (Strong paywall candidates for Pro/Premium)

**Why:** High perceived value, differentiation, recurring engagement, personalization layer

**Pro tier (EUR 49/month):**
- **Personalized AI protocols:** THE differentiator; requires data + AI layer (V1)
- **AI insights engine:** Interpretations > raw data; makes platform indispensable
- **Advanced tracking (CGM Lite, habit automation):** Power users want more granularity
- **Accountability circles:** 2.3x retention per WHOOP data; community moat
- **Protocol sharing & remixing:** Network effects within paid tier; UGC content
- **Smart replenishment:** Commerce convenience; increases LTV
- **Member-exclusive space access:** Physical space perk; differentiation
- **Product discounts (10%):** Immediate ROI on subscription cost
- **Protocol reviews (async):** Expert guidance; scales better than 1:1 calls

**Premium tier (EUR 99/month):**
- **Physician 1:1 reviews (quarterly):** White-glove service; high perceived value
- **Blood panel credits:** Subsidy for testing; removes friction from biomarker tracking
- **CGM program access:** Phase 2; physician-enabled; ~EUR 200-400 value bundled
- **Exclusive events:** VIP access; status + community depth
- **AI concierge priority:** Faster responses, deeper queries
- **Bio age score:** V2 feature; science credibility + tangible metric
- **Product discounts (20%):** Doubles Pro discount; heavy users get ROI
- **Extended space hours:** Convenience + exclusivity

---

### "Premium Differentiators" (EUR 99 tier ONLY)

**Why:** Human labor, high cost to deliver, regulatory complexity, or extreme personalization

- **Physician 1:1 reviews:** Human time; doesn't scale; highest perceived value
- **Blood panel credits (quarterly EUR 80 value):** Direct subsidy; high cost
- **CGM program access:** Requires physician partnership; regulatory complexity; EUR 200-400 value
- **Exclusive events:** Limited capacity; status differentiation
- **Bio age score:** V2 feature; science validation required; aspirational metric
- **Extended space hours:** Operational cost (staffing); small audience

---

### "Uncertain" (Need decision / testing)

**Why:** Value unclear, overlap between tiers, or insufficient data to decide placement

- **Direct messaging between members:** Privacy risk + moderation cost vs. community depth — test as Pro feature or Free with rate limits?
- **Leaderboards:** Toxic competition risk vs. motivation — test as opt-in Free feature or Pro feature with better moderation?
- **Comparative benchmarks:** Requires population data — may not be ready for MVP/V1; could be Pro or Premium
- **Milestone rewards (credits/discounts):** Dilutes margin vs. increases LTV — test threshold amounts and redemption rates
- **Subscription boxes:** Competes with smart replenishment — do we need both? Test as Premium perk or standalone product
- **Build-your-own smoothies:** Operational complexity in physical space vs. personalization value — test capacity constraints
- **Workshop series:** Pricing overlap with events — do we tier by content complexity or make all events Premium-exclusive?
- **White-label physician SaaS:** Huge dev lift; niche market — build only if validated demand from physician partners

---

## Summary Stats

- **Total digital features:** 73
  - Onboarding & Assessment: 4
  - Protocol Generation: 5
  - Tracking: 7
  - Insights & Analytics: 5
  - Community: 7
  - Gamification: 4
  - Content Library: 5
  - Expert Access: 4
  - Commerce & Products: 6
  - Physical Space Integration: 6
  - Cross-sell integration: 20 (across 4 categories)

- **Total physical features:** 15
  - Red Light Therapy: 4
  - Space Access: 4
  - Smoothie Bar: 4
  - Events: 5

- **Total B2B features (Doctor SaaS):** 9
  - Patient-facing: 4
  - Physician SaaS: 5

- **Total cross-sell integration points:** 20
  - Potions cross-sell: 4
  - CGM cross-sell: 4
  - Events cross-sell: 4
  - Physical → Digital: 4
  - B2B integration: 4

---

## Features Requiring Specialized Development

### AI/ML Features (7)
- Personalized AI protocols
- AI insights engine
- AI concierge
- Smart replenishment
- Glucose-smoothie correlation
- Protocol adjustments from CGM
- Comparative benchmarks

### Human Labor Features (6)
- Physician 1:1 reviews
- Protocol reviews (async)
- In-app chat support
- Event facilitation & hosting
- Content creation (articles, videos)
- Community moderation

### Regulatory/Medical Features (8)
- CGM program access
- Physician 1:1 reviews
- Blood panel upload & interpretation
- Bio age score calculation
- Prescription integration
- Physician dashboard (B2B)
- CGM data sharing with physicians
- Protocol co-creation with physicians

### Hardware/Equipment Dependencies (2)
- LED therapy (requires panels, ~EUR 15-25K)
- Smoothie bar (blenders, refrigeration, ~EUR 5-10K)

---

## Roadmap Status Summary

- **MVP (M1-4):** 28 features
  - Membership, LED booking, smoothie pre-order, events, basic shop, in-store mode, QR check-in
  - Template protocols, outcome selection, session tracking
  - Community feed (read-only), event RSVP, product catalog

- **V1 (M5-9):** 18 features
  - Personalized AI protocols, AI insights, smart replenishment
  - Wearable integration, biomarker dashboard, CGM Lite
  - Accountability circles, protocol sharing, habit automation

- **V2 (M10+):** 12 features
  - Bio age score, CGM Smart, glucose-smoothie correlation
  - AI concierge, comparative benchmarks, achievement system
  - Physician integration (1:1 reviews, CGM program, dashboard)

- **Phase 2 (Physical Space Launch):** 15 features
  - All physical space features (LED, smoothie bar, events scale-up)
  - Walk-in → digital funnel, space credits, member-exclusive access

- **Roadmap (Future):** 10 features
  - Prescription integration, white-label SaaS, advanced physician tools
  - Subscription boxes, workshop series (pending validation)

---

## Notes on Feature Status

### Features Marked "Roadmap" vs. "MVP/V1/V2"
- **Roadmap:** Conceptual; not yet scoped or prioritized for a specific build phase
- **MVP:** Confirmed for Months 1-4 build (pre-funding + immediate post-funding)
- **V1:** Months 5-9 (intelligence layer; requires data scale)
- **V2:** Months 10+ (bio age, full physician integration, advanced personalization)
- **Phase 2:** Physical space launch (funding-dependent; likely M6-9)

### Features Marked "Physician-Enabled"
These require the medical advisor partnership to be formalized and active:
- CGM program access
- Physician 1:1 reviews
- Protocol co-creation
- Blood panel interpretation
- Bio age score (physician validation of ranges/thresholds)

### Features Requiring CTO Hire
All AI/ML features and integrations (wearable sync, CGM, smart replenishment) require technical leadership, unlocked by funding:
- CTO hire happens M1-3 post-funding
- Dev team build happens M4-6 (MVP)
- Intelligence layer (V1) happens M7-9

---

## Next Steps (Phase 2 of Tier Allocation Process)

1. **Map features to tier templates:** Use this inventory to populate 4 tier allocation models (Conservative, Balanced, Aggressive, Hybrid)
2. **Assign feature weights:** Score each feature by effort, cost, value perception, and competitive differentiation
3. **Model unit economics:** Calculate LTV impact of different tier allocations (what's the marginal subscriber worth if we move Feature X to Pro vs. Premium?)
4. **Identify "upgrade paths":** Which features drive Free → Core, Core → Pro, Pro → Premium conversions?
5. **Validate with customer discovery:** Show tier concepts to target users; A/B test pricing page with different feature sets
6. **Build decision matrix:** Create final recommendation for EUR 19 / 49 / 99 feature allocation

---

**Document Status:** ✅ Complete feature inventory
**Next Document:** `02-tier-allocation-models.md` (4 allocation scenarios with unit economics)
**Owner:** Timu + Daria
**Review Cadence:** Update after each customer discovery session or competitive intelligence update
