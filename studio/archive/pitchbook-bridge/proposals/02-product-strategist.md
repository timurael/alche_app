# Product Strategy Proposal — The App's New Role

> **From:** Product Strategist (Senior Specialist)
> **To:** Timu & Daria, Alche Founders
> **Date:** 2026-04-14
> **Re:** How the app should work in a retail-first model

---

## 1. Current State Assessment

**The deck presents four equal pillars:** Physical Space, Product Brand, App/Membership, Events/Culture. Each gets the same visual weight. Each is framed as a co-equal revenue generator.

**That framing is wrong for the new model.** Here's why.

In a subscription-first world, every pillar generates its own revenue. The app charges €19-99/mo. The physical space sells LED sessions. Events sell tickets. Products are "additional revenue." You can pitch them as equals because they each have their own P&L.

**In a retail-first world, the hierarchy changes completely.** The app no longer earns money directly — it earns trust, generates data, and drives purchases. The physical space is an experience node, not a revenue center. Events build community that feeds retention. Products are the only thing on the revenue line.

This means the "four equal pillars" visual is actively misleading to investors. It suggests diversified revenue when the reality is: **products pay the bills, everything else is infrastructure that makes products sell.**

**What needs to shift:**
- The app goes from "revenue tier" to "value delivery engine" — the free thing that makes the paid thing work
- Products go from "one of four pillars" to "the pillar" — the only direct revenue generator
- Physical space moves from "pillar" to "amplifier" — an experience layer that deepens trust
- Events/Culture move from "pillar" to "retention engine" — the reason people stay in the ecosystem

The deck needs a new visual hierarchy that makes this architecture legible.

---

## 2. The App's New Role

**Old role:** Subscription product. Users pay for the app. The app IS the business.

**New role:** Free value delivery engine. Users get genuine wellness value for free. The app generates data, trust, and purchase intent. Revenue comes from products the app recommends.

This is the Sephora model. Sephora's free app drives **80% of North American e-commerce sales**. AG1 spends **$2.2M/month** on free content to sell $600M in products. Goop explicitly says content is "not a media business model" — it's a commerce engine.

**The app's job is no longer to be worth €19/month. Its job is to make every user buy €70 worth of products every 75 days.**

### What This Means for the 10 Modules

| # | Module | Current Role | New Role | Priority |
|---|--------|-------------|----------|----------|
| 01 | **Onboarding** | Goal selection, profile setup | **THE MAKE-OR-BREAK MOMENT.** 25% of installs = single session. This is the one shot. Must deliver first value AND collect enough data for a personalized first recommendation. | ELEVATE |
| 02 | LED Booking | Real-time slots, smoothie pairing | Stays, but becomes a protocol touchpoint. "Your protocol includes LED recovery this week — book your session." Physical visits feed data back into the loop. | STAYS (Phase 2) |
| 03 | Potion Menu | Six potions, five boosts | Protocol-integrated ordering. "Your morning protocol: Clarity Potion + Lion's Mane boost. Pre-order for Thursday's session." Not a standalone menu. | STAYS (Phase 2) |
| 04 | **Shop** | Outcome-based product catalog | **TRANSFORMS.** No longer a browsing catalog. Becomes protocol-driven commerce. Products surface WITHIN the protocol context — "Your sleep protocol recommends Magnesium L-Threonate. Here's the research. Here's ours." | ELEVATE |
| 05 | **Dashboard** | Wellness scores, journey tracking | **THE DAILY RETURN REASON.** This is what brings users back every day. Protocol progress, streak tracking, wellness scores, and — crucially — the data that feeds better product recommendations. | ELEVATE |
| 06 | Events | Calendar, RSVP, ticketing | Deprioritized in MVP. Community value is real but not commerce-critical at launch. Events matter for retention after the 90-day window, not for first purchase. | DEPRIORITIZE |
| 07 | Profile | Membership, settings, history | Stays as-is. Becomes the hub for order history, subscription management, and health data preferences. | STAYS |
| 08 | Biomarkers | CGM, blood panels, wearable sync | Premium tier only. This is the legitimate paywall — advanced health data integration that costs Alche real money to deliver (CGM devices, doctor review time). | PREMIUM GATE |
| 09 | **AI Concierge** | Personalized recommendations | **THE CENTRAL NERVOUS SYSTEM.** AI-guided shopping converts **4x better** and drives **369% higher AOV**. This module is no longer a feature — it's the business model incarnate. Every recommendation backed by research. Every suggestion tied to the user's actual data. | ELEVATE |
| 10 | Digital Twin | Bio age score, predictive model | Premium tier, Phase 2+. Requires enough behavioral data to make predictions meaningful. The roadmap already phases this correctly. | PREMIUM GATE |

**Summary:** Three modules get elevated to core (Onboarding, Dashboard, AI Concierge). One module gets fundamentally transformed (Shop). Two modules get gated behind premium (Biomarkers, Digital Twin). Two modules stay but become Phase 2 physical-space features (LED Booking, Potion Menu). One stays as-is (Profile). One gets deprioritized (Events).

---

## 3. Option A: Discovery-First App

### The Premise
The app's primary job is **product discovery and recommendation**. Think: Sephora's app meets Wirecutter's editorial model. Users browse by outcome, read the research, get AI-powered recommendations, and buy.

The value IS the curation intelligence. Alche becomes the place where you go to figure out what supplements to take and why — and then you buy them there because you trust the research.

### User Flow

```
Download → Quick quiz (goals, not medical history)
    → "Your Results" screen: outcome categories matched to you
        → Browse: GLOW / ENERGY / CALM / SLEEP / RECOVERY
            → Each category: editorial content + research summaries
                → Product cards with: science score, community rating, price
                    → AI recommendation: "Based on your goals, start here"
                        → Purchase → Smart replenishment
```

### What Screens Matter Most
1. **Discovery Feed** — Outcome-organized product cards with editorial context. Not a grid of products. A curated magazine of recommendations.
2. **Product Deep Dives** — The Wirecutter page. Why this product, what the research says, who it's for, what to stack it with.
3. **AI Recommendation Engine** — "Tell me your goal, I'll tell you what to take." Conversational product discovery.
4. **The Research Library** — Free, ungated access to the science behind every product. This IS the trust-builder.

### Daily Experience
Users open the app when they're **shopping or researching**. They come with intent: "I want better sleep" or "What should I take for recovery?" They browse, read, get recommendations, and buy.

**Between purchases**, engagement drops. The app has no daily pull unless you layer in tracking or community.

### Strengths
- Directly maps to the commerce model. Every screen is one step from a purchase.
- Research-as-trust aligns perfectly with the data: 56% trust expert recommendations, lab results on product pages drive 25-35% higher conversion.
- Low barrier to first value — browse immediately, no protocol setup required.

### Weaknesses
- **No daily engagement loop.** Users come to shop, not to live. Between purchases (avg 75 days), the app goes dormant.
- **Misses the overwhelm problem.** 73% feel overwhelmed buying health products online. A discovery feed is still a catalog — just a prettier one.
- **Doesn't build switching cost.** If Alche is "where I research products," any competitor with better content wins.

---

## 4. Option B: Protocol-First App

### The Premise
The app's primary job is **delivering a personalized wellness protocol**. Products are woven INTO the protocol — not sold alongside it. "Your morning routine: take these 3 supplements. Here's why each one matters. Order here."

Research and education support the protocol. The protocol IS the product. Commerce is the natural outcome of a well-designed protocol.

Think: Noom meets curated retail. The app tells you what to do every day, and the things you need to do it are one tap away.

### User Flow

```
Download → Deeper onboarding (goals, lifestyle, health context, existing supplements)
    → "Your Protocol" generated: morning routine + evening routine
        → Each routine step: what to do + why + product link
            → Day 1: "Take Omega-3 with breakfast. Here's why."
                → Tap: see the research, see the product, one-tap buy
            → Day 7: "How are you feeling? Let's adjust."
                → Protocol refines based on feedback
            → Day 14: "Your supplements are running low. Reorder?"
                → Smart replenishment, subscribe-and-save offer
            → Day 30: "Protocol checkpoint. Here's what changed."
                → Dashboard shows progress, AI suggests next addition
```

### What Screens Matter Most
1. **Today View (Protocol Screen)** — The single most important screen. What to do right now, what's next, what you completed. Products are inline, not in a separate shop.
2. **Protocol Builder / AI Concierge** — The conversational interface where users ask questions, get recommendations, and understand WHY their protocol includes specific products.
3. **Progress Dashboard** — Streaks, wellness scores, protocol adherence. The daily return reason. "You've been on your sleep protocol for 23 days. Energy score: up 12%."
4. **Smart Replenishment** — Not a shop. A reorder flow that knows what you're taking, when you'll run out, and suggests upgrades based on your protocol evolution.

### Daily Experience
Users open the app **every morning and evening** to check their protocol. Each check-in takes 30-90 seconds. They see what to take, mark it done, and occasionally read a research snippet about why it matters.

**The app becomes a habit.** Protocol adherence = daily opens. Daily opens = data. Data = better recommendations. Better recommendations = higher AOV.

### Strengths
- **Solves the overwhelm problem directly.** 73% feel overwhelmed → protocol says "just do this." Decision fatigue eliminated.
- **Creates daily engagement.** Users return every day to follow their protocol, not just when shopping.
- **The invisible bridge.** Research principle #5 from the synthesis: "Research → protocol → product = one continuous thread." This IS that thread.
- **AI personalization unlocked.** Protocol adherence data, feedback loops, and outcome tracking feed the AI system that drives 369% higher AOV.
- **Subscription behavior without a subscription fee.** Users take supplements daily → they reorder monthly → subscribe-and-save becomes natural (55-67% annual retention for subscribers vs. 18-31% for one-time buyers).

### Weaknesses
- **Higher onboarding friction.** Generating a meaningful protocol requires more user input upfront. Risk of drop-off during setup.
- **Slower time-to-first-value.** User must complete onboarding AND receive their first products before the protocol delivers tangible results.
- **Protocol quality must be excellent from Day 1.** A bad recommendation destroys trust. Need strong science team or AI model validation before launch.

---

## 5. Option C: Community-First App

### The Premise
The app's primary job is **community and accountability**. Products surface through community behavior — "Members with your goals swear by this stack." Social proof drives commerce.

Think: Xiaohongshu for longevity. User-generated content, product reviews, stack sharing, progress photos. The community IS the recommendation engine.

### User Flow

```
Download → Quick profile (goals + interests)
    → Community feed: posts from people with similar goals
        → "Sarah, 34, SLEEP goal: 'This magnesium changed my sleep in 2 weeks.' [Product card]"
            → Tap: see product, see community stats, buy
        → "Top stacks for ENERGY" — community-curated product bundles
            → Browse, compare, buy the stack
        → Challenges: "30-Day Sleep Optimization" — join with 200 others
            → Daily check-ins, product recommendations woven into challenge
```

### What Screens Matter Most
1. **Community Feed** — Posts, reviews, stack shares, progress updates. Filtered by your goals.
2. **Stack Profiles** — What other members take, why, and how it's working. The social proof layer.
3. **Challenges & Groups** — Time-boxed community programs with built-in commerce touchpoints.
4. **Product Pages with Community Data** — "847 members take this. Average rating: 4.7. Most common pairing: with Vitamin D3."

### Daily Experience
Users open the app to **see what their community is doing**. New posts, challenge updates, product reviews. Social pressure keeps them engaged. Commerce happens through social proof: "If 847 people like me take this product, I should try it."

### Strengths
- **Social proof is the strongest purchase trigger.** 93.4% read reviews. 85% won't buy without ratings. Community-generated social proof is more authentic than editorial.
- **Xiaohongshu proves the model.** $4.8B revenue, 300M+ MAU, content-to-commerce flywheel. 70-80% female, urban, quality-driven — overlaps with Alche's target demographic.
- **Retention through belonging.** Community is the hardest engagement lever to replicate. Once you belong, leaving costs social capital.
- **User-generated content scales for free.** The community creates the content that sells the products. Marketing cost goes to near-zero as community grows.

### Weaknesses
- **Cold start problem.** Community-first requires community. At launch, there's nobody there. The feed is empty. The social proof is absent.
- **Quality control risk.** User-generated product recommendations can be wrong, dangerous, or commercially motivated. Requires heavy moderation in a health context.
- **Slower path to first purchase.** Users need to build community engagement before commerce feels natural. The 30-day purchase window gets harder to hit.
- **The Xiaohongshu comp is culturally specific.** What works in Chinese social commerce may not translate directly to German consumer behavior (83% trust pharmacists, not strangers on the internet).

---

## 6. My Recommendation: Protocol-First with Discovery Support

**Option B is the foundation. Option A is the supporting structure.**

Here's why, with the data.

### The Overwhelm Problem Demands Protocols

**73% of shoppers feel overwhelmed buying health products online.** A discovery feed — no matter how well-curated — is still "here are 50 things, pick one." A protocol says "take these 3 things, in this order, at this time." That's what overwhelmed people actually need.

The entire insight that opens the deck — "People who want to age well are forced to become full-time project managers of their own health" — is a protocol problem, not a discovery problem. The solution to project management overload is not a better catalog. It's someone else managing the project.

### The Purchase Triggers Align with Protocols

| Trigger | Data | How it maps |
|---------|------|-------------|
| **Expert recommendation** | 56% say this matters most | A protocol IS an expert recommendation. "Your AI-generated protocol recommends Omega-3 because..." |
| **Social proof** | 93.4% read reviews | Layer community data ONTO protocol recommendations. "2,400 members on similar protocols take this." |
| **Personalization** | 71% expect it; 76% frustrated when absent | Protocols are inherently personalized. Discovery feeds are generic unless heavily filtered. |
| **AI guidance** | 369% higher AOV, 4x conversion | AI builds the protocol. The protocol recommends the products. The products generate revenue. |

### The Retention Math Demands Daily Engagement

- **25% of installs** = single session. If the first session is "browse products," there's no reason to come back until you need to shop again (75 days later).
- **50.3% of repeat purchases** happen within 30 days. You need daily engagement in those first 30 days to trigger the first reorder.
- A protocol gives users a reason to open the app **every morning**. A discovery feed gives them a reason to open it **every 75 days**.

### The Discovery Layer Still Matters

Protocols don't replace discovery — they create a different entry point to it. When a user follows their evening protocol and sees "Add Magnesium L-Threonate to improve your sleep score," they're discovering a product WITHIN a trusted context.

**The shop doesn't disappear.** It becomes the place users go when they want to explore beyond their protocol. "What else is out there for recovery?" The browse-by-outcome catalog lives here. But it's secondary to the protocol-driven product integration.

### What This Looks Like in Practice

**Morning, Day 1:**
> Open app. See "Your Morning Protocol." Three steps: (1) Take Omega-3 — tap to see why, tap to order. (2) Take Vitamin D3+K2 — one-line research summary. (3) Log energy level.

**Evening, Day 3:**
> Open app. See "Your Evening Protocol." Two steps: (1) Take Magnesium — "This is why we included this." (2) Log sleep quality from last night.

**Day 14:**
> Push notification: "Your Omega-3 supply runs low around March 28. Reorder now and save 10% with subscribe-and-save."

**Day 21:**
> Dashboard: "Your energy scores are up 8% since starting your protocol. Based on your progress, consider adding CoQ10 to your morning stack. Here's the research."

**Day 30:**
> Protocol checkpoint: "30-day review. Here's what changed. 2,100 members on similar protocols saw similar improvements. Want to adjust anything?"

**Between protocols (browse mode):**
> User taps "Explore." Discovery feed: outcome categories, trending products, new arrivals, research articles. This is Option A — but it's the secondary experience, not the primary one.

---

## 7. The Four Pillars — Reframed

**Old framing:** Four equal pillars. Each generates revenue. Flat hierarchy.

**New framing:** One engine, three amplifiers. Clear hierarchy.

### Pillar 1: Product Commerce (THE ENGINE)
**What it is:** Curated third-party supplements + own-brand products. Sold through the app, recommended by AI, backed by research.

**Why it's #1:** This is where the money comes from. Everything else exists to make this work better.

**Year 1 target:** 65% of revenue (45% curated + 20% own-brand).

### Pillar 2: App + AI Intelligence (THE VALUE DELIVERY ENGINE)
**What it is:** Free app delivering personalized protocols, wellness tracking, AI concierge, research library. No subscription gate on core value.

**Why it's #2:** This is what makes people trust you enough to buy. The app doesn't make money — it makes money possible. Sephora's free app drives 80% of e-commerce sales. Alche's free app drives 100% of product sales.

**Metric:** Time-to-first-purchase < 30 days. Daily active engagement during the 90-day retention window.

### Pillar 3: Community + Culture (THE RETENTION ENGINE)
**What it is:** Community circles, challenges, events, social proof. Members sharing protocols, reviewing products, holding each other accountable.

**Why it's #3:** Community doesn't drive first purchases — it drives reorders. 93.4% read reviews before buying. Community data ("2,400 members take this") is the social proof layer on top of AI recommendations. This pillar matters most AFTER the first purchase, during the critical 30-90 day retention window.

**Metric:** 90-day reorder rate > 40%. Community-driven product discovery as % of total purchases.

### Pillar 4: Physical Space (THE EXPERIENCE AMPLIFIER)
**What it is:** Berlin flagship — LED sessions, functional smoothie bar, product shelf, community events.

**Why it's #4:** The physical space is Phase 2. It operates near breakeven standalone, generates walk-in-to-member conversions, and creates the environmental cues that bridge the 66-day habit formation gap. But it's not where the business model lives. It amplifies the digital experience — it doesn't replace it.

**Metric:** Walk-in to app download conversion. In-store product trial to online reorder rate.

### How They Feed Each Other

```
[1] PRODUCT COMMERCE ← revenue flows here
        ↑ purchases driven by
[2] APP + AI INTELLIGENCE ← trust + recommendations generated here
        ↑ data enriched by          ↑ social proof from
[3] COMMUNITY + CULTURE ← retention + accountability here
        ↑ amplified by
[4] PHYSICAL SPACE ← sensory experience + walk-in acquisition here
        ↓ feeds data back to [2]
```

Every pillar feeds the one above it. Physical space creates visceral experiences that build community bonds. Community creates social proof that enriches AI recommendations. AI recommendations create purchase intent. Purchases generate revenue. Revenue funds better AI, bigger community, nicer spaces.

**The flywheel only spins if the hierarchy is clear.** Equal pillars = no flywheel. Clear hierarchy = compounding loop.

---

## 8. The Funnel — Download to Reorder

### The Numbers That Define the Funnel

| Window | Data Point | Design Implication |
|--------|-----------|-------------------|
| First session | 25% of installs = single session | Onboarding must deliver value in under 3 minutes |
| 0-30 days | 50.3% of all repeat purchases | First purchase must happen within 14-21 days |
| 0-90 days | 76.4% of repeaters already back | If they haven't reordered by Day 90, they're gone |
| 0-180 days | 96.3% of returners back | After 180 days, probability of return = near zero |

### The Journey

**PHASE 1: First Value (Day 0, Minutes 0-5)**

```
Download → Open app
    → Quick onboarding: 4-6 screens
        Screen 1: "What's your primary goal?" [GLOW / ENERGY / CALM / SLEEP / RECOVERY]
        Screen 2: "What are you already taking?" [Quick supplement check]
        Screen 3: "Tell us about your lifestyle" [Sleep, exercise, stress — 3 sliders]
        Screen 4: "Here's your starting protocol."
    → THE AHA MOMENT: A personalized protocol appears.
      Not generic. Not "everybody gets this." YOUR protocol.
      Morning routine: 2-3 specific steps with product recommendations.
      Evening routine: 1-2 specific steps.
      Each step: what to do + one sentence of why + product card.
```

**Time to first value: under 3 minutes.** The user sees a personalized protocol before they've spent a cent. This is the free value that builds trust.

**PHASE 2: First Engagement Loop (Days 1-7)**

```
Day 1: Push notification — "Your morning protocol is ready."
    → Open app → See today's protocol → Mark steps complete
    → AI concierge: "Want to know why we recommended Omega-3 for your goal?"
        → Research deep-dive → builds trust in the recommendation

Day 3: Push notification — "You've been consistent for 3 days."
    → Streak begins. Gamification light-touch.
    → First product recommendation becomes more prominent:
      "Ready to start your protocol? Your first order ships free."

Day 7: Weekly summary.
    → "You followed your protocol 5/7 days. Here's what that means."
    → Soft commerce prompt: "Members who start their products in Week 1
       report 2x better outcomes by Day 30."
```

**PHASE 3: First Purchase (Days 7-21)**

```
The bridge must be invisible. Research → protocol → product = one continuous thread.

Triggers that drive first purchase:
    1. Protocol familiarity (user has been following the protocol for a week)
    2. AI recommendation within protocol context (not a pop-up ad)
    3. Research backing ("12 clinical studies support this for your goal")
    4. Social proof ("1,847 members with your goal take this product")
    5. First-order incentive (free shipping, 10% off, sample bundle)

Purchase flow:
    Protocol screen → "Order your protocol products" → Pre-built cart
    → All products from protocol, pre-selected
    → Research summary for each product
    → Community stats for each product
    → One-tap checkout
    → Expected delivery: 2-3 days (German 3PL)

Target: first purchase by Day 14-21.
Target AOV: €55-80 (bundled 2-3 products from protocol).
```

**PHASE 4: First Reorder (Days 30-75)**

```
Day 30: Protocol checkpoint.
    → "30-day review. Here's your progress."
    → Dashboard: wellness scores, streak data, protocol adherence
    → AI suggestion: "Based on your first month, consider adding [product]
       to address [specific goal]."
    → Cross-sell opportunity: 15-30% basket size increase

Day 45-60: Smart replenishment trigger.
    → App knows when products run low (purchase date + dosage = estimated depletion)
    → Push notification: "Your Omega-3 supply is running low."
    → One-tap reorder or subscribe-and-save offer
    → Subscribe-and-save conversion target: >30% of reorders

Day 75: Average reorder interval.
    → If user hasn't reordered: escalated engagement
    → "Your protocol is paused without [product]. Here's what you're missing."
    → Community proof: "Members who maintain their protocol see 3x better outcomes."
```

**PHASE 5: Retention Lock (Days 75-90)**

```
This is the critical window. 76.4% of repeat customers come back within 90 days.
After this, probability drops to near-zero.

Day 75-90 tactics:
    → Protocol evolution: "Based on 3 months of data, here's your updated protocol."
    → New product introduction: AI suggests protocol additions
    → Community deepening: invite to challenge or circle
    → Membership offer: "Unlock advanced insights for €5-9/mo"
      (Premium features: digital twin preview, biomarker integration, doctor review)

If they make it past Day 90 as an active user, they're in the flywheel.
Reorder becomes automatic. Protocol becomes identity.
"I'm on my Alche protocol" = retention through self-concept.
```

### Funnel Metrics — What to Track

| Stage | Metric | Target |
|-------|--------|--------|
| Download → Onboarding complete | Completion rate | > 70% |
| Onboarding → Day 7 active | 7-day retention | > 40% |
| Day 7 → First purchase | Conversion rate | > 15% |
| First purchase → 30-day reorder | Reorder rate | > 35% |
| First purchase → 90-day reorder | Reorder rate | > 50% |
| Active user → Subscribe-and-save | Subscription conversion | > 30% of reorders |
| Active user → Membership (€5-9/mo) | Premium conversion | > 10% |
| Time to first purchase | Median days | < 21 |
| AOV (first order) | Average | €55-80 |
| AOV (reorder with cross-sell) | Average | €70-100 |

---

## Summary

The app is no longer a subscription product. It's the world's best free wellness protocol engine — and it happens to sell exactly the products you need to follow the protocol it designed for you.

**Protocol-first** because overwhelmed people need direction, not catalogs.
**Discovery-supported** because curious people need to explore when they're ready.
**Community-amplified** because social proof converts and community retains.
**Physically-grounded** because sensory experience builds trust that screens cannot.

The hierarchy is the strategy. Get it right in the deck, and investors see a flywheel. Get it wrong, and they see four small bets instead of one compounding system.
