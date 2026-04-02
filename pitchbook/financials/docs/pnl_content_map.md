# P&L Learning Guide -- Content Map
## Customized for Alche | Longevity Lifestyle Platform | GmbH Pre-Seed (Berlin)

**Purpose**: Walk founders with limited financial literacy from zero to a fully populated Profit & Loss statement, using Alche's actual business model data as the teaching vehicle.

**Audience**: Timu (Co-founder & CMO) and Daria (Co-founder & COO) -- marketers/strategists building their first financial model.

**How to use this document**: Each phase builds on the previous. Every line item includes a plain-language definition, why it matters for Alche specifically, where to find the number, common founder mistakes, input specifications with Alche defaults, and calculation logic. Complete the phases in order. By the end of Phase 5, you will have a populated P&L and know exactly what story it tells investors.

---

## TABLE OF CONTENTS

- [Phase 1: Revenue (Top Line)](#phase-1-revenue-top-line)
- [Phase 2: Cost of Goods Sold (COGS)](#phase-2-cost-of-goods-sold-cogs)
- [Phase 3: Operating Expenses (OpEx)](#phase-3-operating-expenses-opex)
- [Phase 4: Below the Line](#phase-4-below-the-line)
- [Phase 5: The Story Your P&L Tells](#phase-5-the-story-your-pnl-tells)
- [Glossary](#glossary)

---

# PHASE 1: REVENUE (TOP LINE)

Revenue is the total money your business earns from customers before you subtract any costs. It is the very first line of a P&L -- the "top line." Everything else flows down from here.

**Why start here**: Investors read a P&L top-to-bottom. Revenue tells them how big the business is (or could be). For a pre-revenue company like Alche, this section is a projection -- a best-estimate model of what money will come in, based on your pricing, your audience size, and your conversion assumptions.

**Alche has four revenue streams.** Each stream has different margins, different growth curves, and different implications for how investors value the company. Subscription revenue is valued at SaaS multiples (8-15x ARR). Product and service revenue are valued at lower multiples (2-4x). This is why the pitch book emphasizes growing subscription share from 52% in Year 1 to 68% by Year 3.

---

## 1.1 Subscription Revenue

### 1.1.1 Free Tier Subscribers

**Definition**: The number of people using Alche's app at no cost. Free users do not generate direct revenue, but they are the top of your conversion funnel -- the pool from which paying subscribers are drawn.

**Why it matters for Alche**: Your content-first go-to-market strategy means you will build a large free audience before converting them to paid. Investors want to see this number growing because it proves demand and gives them a denominator for your conversion rate. If you have 2,000 free users and 100 paying subscribers, your conversion rate is 5% -- a number investors can evaluate against industry benchmarks (typical freemium conversion: 2-5%).

**Where to find the number**: Your app analytics dashboard (e.g., Firebase, Mixpanel, or whatever analytics tool your MVP uses). Pre-launch, this is a projection based on your content audience size and expected download-to-signup conversion rate.

**Common founder mistakes**:
- Counting free users as "customers" in revenue conversations. They are not customers until they pay.
- Projecting unrealistic free-to-paid conversion rates. 2-5% is realistic for freemium health apps. 10%+ requires extraordinary evidence.
- Not tracking free users at all. You need this number to calculate your conversion funnel.

**Input specification**:
- Field type: Number (integer)
- Unit: Users
- Validation: >= 0
- Default placeholder: 500 (projected M6 free users)

**Calculation logic**: Free tier generates EUR 0 revenue. Its value is in the conversion math: `Potential Paid Users = Free Users x Conversion Rate`.

---

### 1.1.2 Core Tier Subscribers (EUR 19/month)

**Definition**: The number of people paying EUR 19 per month for Alche's Core membership. Core includes biomarker dashboard, wearable sync, and basic longevity protocols.

**Why it matters for Alche**: Core is your entry-level paid tier. It is the first moment a user becomes a revenue-generating customer. The EUR 19 price point is deliberately set below the psychological EUR 20 threshold -- low enough to convert curious users, high enough to signal value above free content.

**Where to find the number**: Stripe dashboard (payment processor) will show active subscriptions by plan. Pre-launch, this is a projection. A reasonable model: of your total paid subscribers at break-even (145), approximately 50-60% may be Core tier (72-87 subscribers).

**Common founder mistakes**:
- Assuming all subscribers land on your highest tier. Most users start at the lowest paid tier and upgrade over time.
- Not accounting for monthly churn within each tier. If you add 20 Core subscribers per month but lose 8% of existing ones, your net growth is lower than you think.
- Forgetting that Stripe charges processing fees on each transaction (2.9% + EUR 0.25) -- this is a COGS item, not revenue.

**Input specification**:
- Field type: Number (integer)
- Unit: Subscribers
- Validation: >= 0
- Default placeholder: 75 (projected M12)

**Calculation logic**: `Core Tier Monthly Revenue = Core Subscribers x EUR 19`

---

### 1.1.3 Pro Tier Subscribers (EUR 49/month)

**Definition**: The number of people paying EUR 49 per month for Alche's Pro membership. Pro includes personalized protocols, AI-driven insights, and advanced tracking.

**Why it matters for Alche**: Pro is your target tier -- EUR 49 is your weighted ARPU (Average Revenue Per User). This tier drives the unit economics that make the business model work. The EUR 49 price point aligns with what a health-conscious Berliner currently spends on a single fragmented service (e.g., a gym membership or supplement subscription), making it psychologically justifiable as a consolidation play.

**Where to find the number**: Stripe dashboard. Pre-launch projection: approximately 30-40% of paid subscribers (44-58 at break-even).

**Common founder mistakes**:
- Pricing Pro too close to Core (leaving no room for perceived value difference) or too close to Premium (making Premium feel like a negligible upgrade).
- Not defining clear feature gates between tiers. If Pro users can do almost everything Premium users can, nobody upgrades.

**Input specification**:
- Field type: Number (integer)
- Unit: Subscribers
- Validation: >= 0
- Default placeholder: 55 (projected M12)

**Calculation logic**: `Pro Tier Monthly Revenue = Pro Subscribers x EUR 49`

---

### 1.1.4 Premium Tier Subscribers (EUR 99/month)

**Definition**: The number of people paying EUR 99 per month for Alche's Premium membership. Premium includes blood panel credits, 1:1 protocol reviews, exclusive events, and CGM integration (Phase 2).

**Why it matters for Alche**: Premium has a lower gross margin (70-85% vs. 85-90% for Core/Pro) because it includes real-world service costs (blood panels, 1:1 reviews). However, these subscribers are your highest-LTV users and your most likely evangelists. Premium subscribers also generate the data density that makes your personalization engine smarter over time.

**Where to find the number**: Stripe dashboard. Pre-launch projection: approximately 10-15% of paid subscribers (15-22 at break-even).

**Common founder mistakes**:
- Over-projecting Premium uptake. At pre-seed, most subscribers will be Core or Pro. Premium requires deep product trust that takes time to build.
- Underestimating the operational cost of Premium deliverables (scheduling 1:1 reviews, coordinating blood panel logistics). These are real labor costs that eat into margin.

**Input specification**:
- Field type: Number (integer)
- Unit: Subscribers
- Validation: >= 0
- Default placeholder: 15 (projected M12)

**Calculation logic**: `Premium Tier Monthly Revenue = Premium Subscribers x EUR 99`

---

### 1.1.5 Total Subscription Revenue

**Definition**: The sum of all revenue from paid app subscriptions across all tiers in a given month.

**Why it matters for Alche**: This is the number investors care about most. Subscription revenue is recurring (it repeats every month without you having to re-sell), predictable (you can model it forward), and valued at SaaS multiples. Your target is for subscriptions to represent 52% of total revenue in Year 1, growing to 68% by Year 3. The higher this percentage, the higher your company's valuation multiple.

**Where to find the number**: Sum of the three tier calculations above.

**Common founder mistakes**:
- Reporting gross subscription revenue without subtracting payment processing fees. The number on your Stripe dashboard is gross; the number that hits your bank account is net of fees.
- Confusing MRR (Monthly Recurring Revenue) with monthly revenue. MRR only counts recurring subscription revenue. One-time payments (e.g., a product sale) are not MRR.

**Input specification**:
- Field type: Calculated (auto-sum)
- Unit: EUR/month
- Default placeholder: EUR 5,125/mo (75 x 19 + 55 x 49 + 15 x 99)

**Calculation logic**:
```
Total Subscription Revenue = (Core Subscribers x 19) + (Pro Subscribers x 49) + (Premium Subscribers x 99)
```

Using projected M12 defaults: (75 x 19) + (55 x 49) + (15 x 99) = 1,425 + 2,695 + 1,485 = EUR 5,605/mo

---

## 1.2 Product Revenue

**Definition**: Revenue from selling physical products -- curated longevity products sold through Alche's app (e-commerce) and physical space (retail). Think: supplements, functional foods, wellness tools, longevity-focused personal care.

**Why it matters for Alche**: Product revenue is your second-largest stream (18% of Y1 mix). Unlike subscriptions, product revenue is transactional -- each sale requires a new purchase decision. The margin is lower (40-55%) because you are buying wholesale and reselling. However, products serve a strategic purpose: they give free users a reason to transact before committing to a subscription, and they give subscribers additional touchpoints with the brand.

**Where to find the number**: Your e-commerce platform (Shopify, WooCommerce, or custom) for online sales. Point-of-sale system for in-space retail. Pre-launch, model as: `Units Sold per Month x Average Product Price`.

**Common founder mistakes**:
- Counting product revenue at retail price without accounting for returns, refunds, and breakage. A realistic return rate for wellness products sold online is 5-10%.
- Not separating e-commerce product revenue from in-space retail revenue. They have different COGS profiles (e-commerce has shipping costs; retail has space overhead).
- Overestimating initial product volume. You are not AG1 (EUR 600M revenue). Start with conservative unit assumptions.

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder |
|----------|-----------|------|------------|-------------------|
| Units sold per month | Number | Units | >= 0 | 120 |
| Average product price | Currency | EUR | > 0 | EUR 35 |
| Return/refund rate | Percentage | % | 0-100 | 5% |

**Calculation logic**:
```
Gross Product Revenue = Units Sold x Average Price
Net Product Revenue = Gross Product Revenue x (1 - Return Rate)
```

Using defaults: 120 x 35 = EUR 4,200 gross; 4,200 x 0.95 = EUR 3,990 net/mo

---

## 1.3 Service Revenue

**Definition**: Revenue from wellness services provided to customers -- LED therapy sessions, blood panel facilitation, workshops, and events. These are time-bound, appointment-based revenue events.

**Why it matters for Alche**: Services represent 17% of Y1 revenue and have a 50-65% gross margin. Services serve a dual purpose: they generate revenue AND they deepen the customer relationship, driving subscription retention. A customer who books a blood panel through Alche and sees their results integrated into their app protocol is far less likely to churn than a subscriber who only reads content.

**Where to find the number**: Your booking/scheduling system (e.g., Calendly, Acuity, or custom) for session counts. Payment processor for revenue. Pre-launch, model as: `Sessions per Month x Average Session Price` for each service type.

**Common founder mistakes**:
- Not accounting for capacity constraints. If you have one LED therapy device, you can only run a finite number of sessions per day. Service revenue has a ceiling tied to physical capacity.
- Pricing services without understanding practitioner costs. If a blood panel facilitation costs you EUR 40 in practitioner fees and lab costs, and you charge EUR 80, your margin is 50% -- not 80%.
- Mixing event revenue (one-time, variable) with recurring service revenue. Model them separately.

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder |
|----------|-----------|------|------------|-------------------|
| LED therapy sessions/month | Number | Sessions | >= 0 | 40 |
| LED therapy avg price | Currency | EUR | > 0 | EUR 45 |
| Blood panel facilitations/month | Number | Sessions | >= 0 | 20 |
| Blood panel avg price | Currency | EUR | > 0 | EUR 120 |
| Events/workshops per month | Number | Events | >= 0 | 3 |
| Event avg ticket price | Currency | EUR | > 0 | EUR 35 |
| Avg attendees per event | Number | People | >= 0 | 20 |

**Calculation logic**:
```
LED Revenue = LED Sessions x LED Price
Blood Panel Revenue = Blood Panel Sessions x Panel Price
Event Revenue = Events x Avg Attendees x Ticket Price
Total Service Revenue = LED Revenue + Blood Panel Revenue + Event Revenue
```

Using defaults: (40 x 45) + (20 x 120) + (3 x 20 x 35) = 1,800 + 2,400 + 2,100 = EUR 6,300/mo

---

## 1.4 Physical Space Revenue

**Definition**: Revenue generated directly by the Berlin physical space, separate from services. This includes bar/cafe revenue (functional beverages, longevity elixirs) and space rental income (renting the space for private events, brand activations, or community meetups).

**Why it matters for Alche**: Physical space revenue represents 13% of Y1 mix. The critical framing: the space is a MARKETING COST, not a retail business. Space revenue (EUR 5,500-8,000/mo) roughly offsets space operating costs (EUR 5,800-7,300/mo), meaning the space nearly self-funds while driving subscriber acquisition at an effective CAC of EUR 100-130 via 15-20 walk-in conversions per month. Investors should see the space as a customer acquisition channel that happens to break even, not as a second business.

**IMPORTANT NOTE**: Per the content blueprint, the physical space is Phase 2 (seed-funded). For the pre-seed P&L, physical space revenue is EUR 0. Include this section in the P&L template for completeness and future modeling, but set all defaults to zero for the pre-seed version. The space appears in the pitch book only as a vision element tagged "Phase 2 -- Seed funded."

**Where to find the number**: Point-of-sale system for bar revenue. Calendar/booking system for space rental. Pre-launch for Phase 2, these are projections.

**Common founder mistakes**:
- Treating the physical space as a profit center in the pre-seed pitch. Investors will immediately compare it to Forward Health (burned $657M running software + clinics) and flag the Two-Business Death Spiral. Frame it as marketing infrastructure.
- Not separating space revenue from service revenue. A blood panel facilitation done in the space is service revenue, not space revenue. The bar sale to the person waiting for their blood panel is space revenue.
- Overestimating bar revenue. Cafe/bar businesses typically need significant foot traffic to be profitable. Your space serves a niche audience, not the general public.

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder (Pre-seed) | Default Placeholder (Phase 2) |
|----------|-----------|------|------------|-------------------------------|-------------------------------|
| Monthly bar/cafe revenue | Currency | EUR/mo | >= 0 | EUR 0 | EUR 4,000 |
| Monthly space rental income | Currency | EUR/mo | >= 0 | EUR 0 | EUR 2,500 |

**Calculation logic**:
```
Total Space Revenue = Bar Revenue + Space Rental Income
```

Pre-seed defaults: EUR 0 + EUR 0 = EUR 0/mo
Phase 2 defaults: EUR 4,000 + EUR 2,500 = EUR 6,500/mo

---

## 1.5 Total Monthly Revenue

**Definition**: The sum of all revenue from all four streams in a single month.

**Why it matters for Alche**: This is the headline number at the top of your P&L. At break-even (Month 12), your target is approximately EUR 10,000-15,000/mo in total revenue from 145 paying subscribers plus ancillary streams. Total monthly revenue multiplied by 12 gives you your annual run rate, and subscription MRR multiplied by 12 gives you your ARR (Annual Recurring Revenue) -- the number used for SaaS valuation multiples.

**Where to find the number**: Sum of all stream revenues above.

**Common founder mistakes**:
- Double-counting. If a Premium subscriber gets a "free" blood panel included in their EUR 99/month, that blood panel revenue is already inside subscription revenue. Do not also count it as service revenue.
- Not recognizing revenue correctly. Under German accounting rules (HGB), revenue is recognized when the service is delivered or the product ships -- not when the customer pays. If someone prepays for 12 months, you recognize 1/12 per month.
- Ignoring seasonality. Wellness businesses typically see higher sign-ups in January (New Year's resolutions) and September (post-summer health focus), and lower activity in July-August and December.

**Input specification**:
- Field type: Calculated (auto-sum)
- Unit: EUR/month

**Calculation logic**:
```
Total Monthly Revenue = Total Subscription Revenue + Net Product Revenue + Total Service Revenue + Total Space Revenue
```

Using M12 defaults (pre-seed, no space): 5,605 + 3,990 + 6,300 + 0 = EUR 15,895/mo

---

## 1.6 Total Annual Revenue

**Definition**: Your total revenue projected across a full 12-month period.

**Why it matters for Alche**: Annual revenue provides a clearer picture than any single month because it smooths out monthly fluctuations. Your Year 1 annual revenue will be lower than Monthly Revenue x 12 because you start at zero subscribers and ramp up. A realistic Year 1 model assumes a growth curve, not a flat line.

**Where to find the number**: Sum of all 12 monthly revenue figures. In a financial model spreadsheet, you would have 12 columns (one per month) with revenue growing each month.

**Common founder mistakes**:
- Calculating annual revenue as "best month x 12." This dramatically overstates Year 1 revenue. Your Month 1 revenue will be near zero; your Month 12 revenue may hit the target. The annual total is the sum of the ramp.
- Not modeling the ramp. Subscription businesses have an S-curve: slow early growth (Months 1-4), accelerating growth as content and word-of-mouth compound (Months 5-8), and approaching steady-state (Months 9-12).

**Input specification**:
- Field type: Calculated
- Unit: EUR/year
- Note: For a realistic Year 1 projection, sum each month's revenue individually rather than multiplying a single month by 12.

**Calculation logic**:
```
Total Annual Revenue = Sum of (Month 1 Revenue + Month 2 Revenue + ... + Month 12 Revenue)

Rough estimate for Year 1 (ramp model):
If Month 12 = EUR 15,895 and Month 1 = EUR 500,
average monthly revenue ~ EUR 8,000 (midpoint of ramp)
Year 1 estimate ~ EUR 96,000
```

**Seasonality note**: Apply a +15% uplift for January and September, and a -10% reduction for July-August and December, to improve model accuracy.

---

# PHASE 2: COST OF GOODS SOLD (COGS)

COGS is the direct cost of delivering your product or service to a customer. It only includes costs that scale with revenue -- if you sold zero units, these costs would be zero. COGS is subtracted from revenue to calculate Gross Profit.

**The key question COGS answers**: "For every euro of revenue, how many cents go toward actually delivering the thing we sold?"

**Why this matters for Alche**: Your blended gross margin (revenue minus COGS, divided by revenue) is approximately 72% in Year 1, growing to approximately 80% by Year 3. This is because your revenue mix shifts toward subscriptions (85-90% margin) and away from products (40-55% margin) and services (50-65% margin). Investors will check your gross margin immediately -- it tells them how much of each euro you keep to fund growth.

---

## 2.1 Digital COGS (Subscription Delivery Costs)

These are the costs of running the app and delivering digital subscription value to users.

### 2.1.1 Hosting & Infrastructure

**Definition**: The cost of servers, databases, and cloud services that keep your app running. This includes compute (running the app), storage (user data, content), and bandwidth (delivering content to users).

**Why it matters for Alche**: As a digital-first platform, hosting is your primary COGS item for subscriptions. The good news: hosting costs scale sub-linearly with users. Serving 1,000 users costs roughly 1.5x what serving 500 users costs, not 2x. This is why software businesses have high margins.

**Where to find the number**: Your cloud provider invoice (AWS, Google Cloud, or Hetzner -- Hetzner is popular with Berlin startups for cost efficiency). Pre-launch, estimate based on comparable apps. A health/wellness app serving 500-2,000 users typically costs EUR 200-500/mo in hosting.

**Common founder mistakes**:
- Underestimating hosting costs by using free-tier pricing. Free tiers expire. Budget for production-grade infrastructure from the start.
- Overestimating hosting costs by assuming enterprise-grade infrastructure. At pre-seed with fewer than 2,000 users, you do not need a EUR 5,000/mo AWS bill.
- Not monitoring hosting costs monthly. Cloud bills can spike unexpectedly if you have inefficient queries or data storage bloat.

**Input specification**:
- Field type: Currency
- Unit: EUR/month
- Validation: >= 0
- Default placeholder: EUR 350/mo (M6-M12 estimate for sub-2,000 users on Hetzner/minimal AWS)

**Calculation logic**: Direct cost. Feeds into `Total Digital COGS`.

---

### 2.1.2 API Costs

**Definition**: The cost of third-party services your app relies on -- wearable data sync APIs (Oura, WHOOP, Apple Health), AI/ML model calls, content delivery, push notification services, and any other external service your app calls.

**Why it matters for Alche**: Your app integrates with wearable devices (BYOD model -- Bring Your Own Device), runs personalization algorithms, and delivers content. Each of these integrations has a per-call or per-user cost. As your user base grows, these costs grow proportionally.

**Where to find the number**: Each API provider's billing dashboard. Common cost structure: per-API-call pricing (e.g., EUR 0.001 per call) or per-user/month pricing (e.g., EUR 0.50 per active user). Pre-launch, inventory every third-party service you plan to use, find their pricing page, and estimate based on projected usage.

**Common founder mistakes**:
- Forgetting that "free" APIs have rate limits. Once you exceed them, you pay.
- Not budgeting for AI/ML inference costs. If you run personalization models on user data, each inference has a cost. At scale, this can be significant.
- Signing annual contracts for APIs before validating that users actually use the features those APIs power.

**Input specification**:
- Field type: Currency
- Unit: EUR/month
- Validation: >= 0
- Default placeholder: EUR 200/mo (M6-M12 estimate)

**Calculation logic**: Direct cost. Feeds into `Total Digital COGS`.

---

### 2.1.3 Payment Processing Fees

**Definition**: The fee your payment processor (Stripe) charges for every transaction. Stripe's standard European pricing is 1.5% + EUR 0.25 per successful card charge for European cards, and 2.9% + EUR 0.25 for non-European cards.

**Why it matters for Alche**: Every subscription payment, product purchase, and service booking that goes through Stripe incurs this fee. At EUR 49/month (Pro tier), the Stripe fee is approximately EUR 0.98 + EUR 0.25 = EUR 1.23 per transaction, or about 2.5% of revenue. This seems small, but it is unavoidable and adds up. At 145 subscribers, you are paying roughly EUR 180-250/mo in processing fees.

**Where to find the number**: Stripe dashboard, under "Balance" > "Fees." Pre-launch, calculate as: `(Total Revenue x Fee Percentage) + (Number of Transactions x Per-Transaction Fee)`.

**Common founder mistakes**:
- Reporting revenue without deducting payment processing fees. Your Stripe dashboard shows gross volume; your bank account receives net of fees.
- Not accounting for failed payment retry costs. Stripe charges for retries on failed payments, which is common with subscription billing (expired cards, insufficient funds).
- Not factoring in the EUR 0.25 per-transaction fixed fee. For low-value transactions (a EUR 5 product), the fixed fee is 5% alone.

**Input specification**:
- Field type: Percentage + Fixed fee
- Unit: % of transaction + EUR per transaction
- Validation: Percentage 0-10, Fixed fee >= 0
- Default placeholder: 1.5% + EUR 0.25 (European cards) / 2.9% + EUR 0.25 (non-EU cards)
- Blended default: ~2.5% of total revenue (assuming ~70% European cards)

**Calculation logic**:
```
Payment Processing Fees = (Total Revenue x Blended Fee Rate) + (Number of Transactions x EUR 0.25)
```

Simplified: `Payment Processing Fees ~ Total Revenue x 0.029` (blended average including per-transaction fee)

---

### 2.1.4 Total Digital COGS

**Input specification**:
- Field type: Calculated (auto-sum)
- Unit: EUR/month

**Calculation logic**:
```
Total Digital COGS = Hosting + API Costs + Payment Processing Fees
```

Using defaults: 350 + 200 + (15,895 x 0.029) = 350 + 200 + 461 = EUR 1,011/mo

**Digital Gross Margin check**: (5,605 - 1,011) / 5,605 = 82% (within the 85-90% target for subscriptions when you exclude payment processing on non-subscription revenue)

---

## 2.2 Product COGS

These are the costs of sourcing, storing, packaging, and shipping physical products.

### 2.2.1 Wholesale Cost (Cost of Goods)

**Definition**: What you pay your supplier for the products you resell. If you sell a longevity supplement for EUR 35 and your wholesale cost is EUR 17, your product margin before other costs is 51%.

**Why it matters for Alche**: Product margin (40-55%) is your lowest-margin revenue stream. The wholesale cost is the biggest driver. Your curation model (selecting and reselling third-party products rather than manufacturing your own) means you are paying someone else's margin. This is a deliberate trade-off: lower margin but zero manufacturing risk, zero inventory development cost, and the ability to swap products based on customer feedback.

**Where to find the number**: Supplier invoices and purchase orders. For each product, you should know the exact wholesale cost. Pre-launch, research wholesale pricing from potential suppliers. Typical wellness product wholesale is 45-60% of retail price.

**Common founder mistakes**:
- Using the wholesale price from a single-unit sample order. Volume pricing is typically 10-20% lower once you commit to minimum order quantities (MOQs).
- Not accounting for import duties if sourcing from outside the EU. Customs, VAT on imports, and shipping from supplier to your warehouse are all part of your true wholesale cost.
- Not tracking per-product margins. Some products might have 60% margin and others 30%. Your blended margin depends on which products actually sell.

**Input specification**:
- Field type: Percentage of retail price
- Unit: %
- Validation: 0-100
- Default placeholder: 52% (midpoint of 45-60% range)

**Calculation logic**:
```
Wholesale COGS = Units Sold x (Average Retail Price x Wholesale Cost Percentage)
```

Using defaults: 120 x (35 x 0.52) = 120 x 18.20 = EUR 2,184/mo

---

### 2.2.2 Shipping Costs

**Definition**: The cost of delivering products from your warehouse (or fulfilment center) to the customer's address. Includes postage, packaging, and any fulfilment service fees.

**Why it matters for Alche**: For e-commerce product sales, shipping is a real per-unit cost. In Germany, DHL standard parcel costs approximately EUR 3-5 for domestic delivery. If you offer "free shipping" to customers, this cost comes entirely out of your margin.

**Where to find the number**: Your shipping provider contract (DHL, DPD, Hermes). Fulfilment center invoices if outsourcing. Pre-launch, get rate quotes from 2-3 carriers for your expected package sizes and weights.

**Common founder mistakes**:
- Offering free shipping without modeling the margin impact. On a EUR 35 product with EUR 18 wholesale cost and EUR 4 shipping, your margin drops from 49% to 37%.
- Not accounting for return shipping. In Germany, the seller typically pays return shipping under the Fernabsatzgesetz (distance selling law). Budget for returns at your expected rate.
- Ignoring in-space retail (no shipping cost). Separate e-commerce shipping costs from in-space sales where shipping = EUR 0.

**Input specification**:
- Field type: Currency (per unit)
- Unit: EUR/unit
- Validation: >= 0
- Default placeholder: EUR 4/unit (DHL domestic average)

**Calculation logic**:
```
Total Shipping Costs = E-commerce Units Sold x Shipping Cost per Unit
```

Note: In-space retail units have EUR 0 shipping cost. Default assumes 70% of units ship (e-commerce) and 30% are in-space retail.

Using defaults: (120 x 0.70) x 4 = 84 x 4 = EUR 336/mo

---

### 2.2.3 Packaging Costs

**Definition**: The cost of packaging materials -- boxes, tissue paper, branded inserts, labels, tape. For a premium longevity brand, packaging is part of the brand experience, not just logistics.

**Why it matters for Alche**: Your brand identity is "Apple Glassmorphic x Neo-Apothecary." Packaging needs to match. A plain brown box undercuts the brand; custom-printed boxes with branded tissue paper reinforce it. However, premium packaging costs EUR 1.50-3.00 per unit vs. EUR 0.50-1.00 for basic packaging. The trade-off is brand consistency vs. margin.

**Where to find the number**: Packaging supplier quotes. For custom packaging, get quotes from suppliers like Packhelp (EU-based, good for small MOQs) or local Berlin suppliers.

**Common founder mistakes**:
- Over-investing in premium packaging before product-market fit is validated. Start with good-enough packaging and upgrade once you know which products are keepers.
- Not including branded inserts (thank you cards, referral codes, product guides) in the packaging cost estimate.
- Forgetting that packaging cost varies by product size. A supplement bottle needs different packaging than a wellness device.

**Input specification**:
- Field type: Currency (per unit)
- Unit: EUR/unit
- Validation: >= 0
- Default placeholder: EUR 1.50/unit

**Calculation logic**:
```
Total Packaging Costs = Units Sold x Packaging Cost per Unit
```

Using defaults: 120 x 1.50 = EUR 180/mo

---

### 2.2.4 Total Product COGS

**Input specification**:
- Field type: Calculated (auto-sum)
- Unit: EUR/month

**Calculation logic**:
```
Total Product COGS = Wholesale COGS + Shipping Costs + Packaging Costs
```

Using defaults: 2,184 + 336 + 180 = EUR 2,700/mo

**Product Gross Margin check**: (3,990 - 2,700) / 3,990 = 32%. This is below the 40-55% target range, which means either (a) the wholesale cost assumption is too high, (b) shipping/packaging costs need optimization, or (c) average selling price needs to increase. Founders should adjust these inputs until product margin falls within target range.

---

## 2.3 Service COGS

These are the direct costs of delivering wellness services.

### 2.3.1 Practitioner Fees

**Definition**: What you pay the practitioners (therapists, phlebotomists, health coaches) who deliver your services. In most cases at pre-seed, practitioners are freelancers or contracted providers, not employees.

**Why it matters for Alche**: Practitioner fees are the largest component of service COGS. If a blood panel facilitation generates EUR 120 in revenue and the practitioner/lab costs EUR 55, your service margin on that offering is 54%. The key insight: as a platform, you are taking a cut of the practitioner's work. Your value-add is the customer relationship, the scheduling infrastructure, and the data integration back into the app.

**Where to find the number**: Freelancer contracts or service provider agreements. For blood panels, the lab processing fee is typically fixed (e.g., EUR 30-50 per panel depending on markers tested). For LED therapy, the practitioner cost may be time-based (e.g., EUR 20-25 per 30-minute session). For events, facilitator fees are per-event (EUR 100-300 depending on expertise).

**Common founder mistakes**:
- Not formalizing practitioner agreements before modeling costs. Verbal agreements are not cost estimates.
- Assuming you can pay practitioners less than market rate because "they get exposure through your platform." Skilled practitioners have options.
- Not accounting for no-show risk. If a practitioner is booked for 8 sessions and 2 cancel, you may still owe the practitioner a cancellation fee or minimum guarantee.

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder |
|----------|-----------|------|------------|-------------------|
| LED therapy practitioner cost/session | Currency | EUR | >= 0 | EUR 18 |
| Blood panel lab + practitioner cost | Currency | EUR | >= 0 | EUR 55 |
| Event facilitator cost/event | Currency | EUR | >= 0 | EUR 200 |

**Calculation logic**:
```
LED Practitioner Fees = LED Sessions x LED Practitioner Cost
Blood Panel Practitioner Fees = Blood Panel Sessions x Blood Panel Cost
Event Facilitator Fees = Events x Facilitator Cost
Total Practitioner Fees = LED + Blood Panel + Event Facilitator Fees
```

Using defaults: (40 x 18) + (20 x 55) + (3 x 200) = 720 + 1,100 + 600 = EUR 2,420/mo

---

### 2.3.2 Consumables

**Definition**: Single-use materials required to deliver services -- blood draw kits, LED therapy eye protection, sanitization supplies, event materials (printed guides, sample products).

**Why it matters for Alche**: Consumables are a small but non-zero per-session cost. They are easy to forget in financial modeling and easy to let creep upward as you add premium touches to the service experience.

**Where to find the number**: Supplier invoices for medical supplies, hygiene products, event materials. Pre-launch, research prices for each consumable item per service type.

**Common founder mistakes**:
- Treating consumables as zero because "they are cheap per unit." At 60+ service sessions per month, even EUR 3-5 per session adds up to EUR 180-300/mo.
- Not budgeting for health and safety compliance consumables (sanitization, PPE). German Gesundheitsamt requirements for wellness spaces may mandate specific supplies.

**Input specification**:
- Field type: Currency (per session, averaged across service types)
- Unit: EUR/session
- Validation: >= 0
- Default placeholder: EUR 4/session

**Calculation logic**:
```
Total Consumables = Total Service Sessions x Average Consumable Cost per Session
Total Service Sessions = LED Sessions + Blood Panel Sessions + (Events x Avg Attendees)
```

Using defaults: (40 + 20 + 60) x 4 = 120 x 4 = EUR 480/mo

---

### 2.3.3 Equipment Depreciation (Service Equipment)

**Definition**: The gradual cost of equipment wearing out over its useful life. If you buy an LED therapy device for EUR 8,000 and it lasts 5 years, you "expense" EUR 133/month (8,000 / 60 months) as a COGS item for services.

**Why it matters for Alche**: Depreciation is a real cost of doing business, even though no cash leaves your bank account each month (you already paid for the equipment). It matters because it accurately represents the true cost of delivering services. Without it, your service margin looks artificially high.

**Where to find the number**: Purchase invoices for equipment, divided by useful life in months. For pre-seed modeling, list all service equipment you need to purchase and their expected lifespan.

**Common founder mistakes**:
- Ignoring depreciation entirely. This makes your margin look better than reality.
- Using the wrong useful life. Tax authorities (Finanzamt in Germany) publish depreciation tables (AfA-Tabellen) that specify useful life for different equipment categories. Using a shorter life = higher monthly cost = lower reported profit (but faster tax deduction).
- Double-counting: putting the full equipment purchase price in Month 1 AND adding depreciation every month. You do one or the other.

**Input specification**:
- Field type: Calculated
- Unit: EUR/month
- Default placeholder: EUR 200/mo (assuming EUR 12,000 in service equipment depreciated over 5 years)

**Calculation logic**:
```
Monthly Equipment Depreciation = Total Equipment Cost / (Useful Life in Years x 12)
```

---

### 2.3.4 Total Service COGS

**Input specification**:
- Field type: Calculated (auto-sum)
- Unit: EUR/month

**Calculation logic**:
```
Total Service COGS = Practitioner Fees + Consumables + Equipment Depreciation
```

Using defaults: 2,420 + 480 + 200 = EUR 3,100/mo

**Service Gross Margin check**: (6,300 - 3,100) / 6,300 = 51% (within the 50-65% target range)

---

## 2.4 Space COGS

These are the direct costs of operating the bar/cafe and delivering space-based experiences. Only applicable in Phase 2 when the physical space is operational.

### 2.4.1 Ingredients & Supplies

**Definition**: The cost of ingredients for functional beverages, longevity elixirs, and any food items sold at the bar. This is the equivalent of "food cost" in the restaurant industry.

**Why it matters for Alche**: Bar/cafe businesses typically target a 30-35% food cost ratio (ingredients cost = 30-35% of bar revenue). If your bar generates EUR 4,000/month in revenue, your ingredient cost should be EUR 1,200-1,400.

**Where to find the number**: Supplier invoices for ingredients. Pre-launch, build a recipe cost sheet for each menu item. Multiply by projected sales volume.

**Common founder mistakes**:
- Underestimating waste. Perishable ingredients expire. Budget for 5-10% waste.
- Not tracking ingredient cost per menu item. Some items may have 20% food cost and others 50%. Your menu pricing should reflect this.
- Using retail ingredient prices instead of wholesale/bulk pricing in your model.

**Input specification**:
- Field type: Percentage of bar revenue
- Unit: %
- Validation: 0-100
- Default placeholder: 32% (midpoint of 30-35% range)
- Pre-seed default: EUR 0 (space is Phase 2)

**Calculation logic**:
```
Ingredients & Supplies = Bar Revenue x Ingredient Cost Percentage
```

---

### 2.4.2 Direct Utilities (Space)

**Definition**: Electricity, water, and gas costs directly attributable to operating the space. This is separate from the rent and general utilities covered in OpEx -- this captures incremental utility cost from operating a bar/service space (commercial kitchen equipment, lighting, HVAC for customer comfort).

**Why it matters for Alche**: A commercial wellness space uses more utilities than a simple office. LED therapy devices, commercial espresso machines, commercial refrigeration, and extended operating hours all contribute.

**Where to find the number**: Utility provider bills once the space is operational. Pre-launch, ask the landlord for the previous tenant's utility costs, or use a per-square-meter estimate for commercial spaces in Berlin (typically EUR 3-5/sqm/month for a mixed-use commercial space).

**Common founder mistakes**:
- Forgetting that commercial electricity rates in Germany are different from residential rates.
- Not separating utilities that are already included in the rent (some Berlin commercial leases include Nebenkosten) from utilities you pay separately.

**Input specification**:
- Field type: Currency
- Unit: EUR/month
- Validation: >= 0
- Default placeholder: EUR 0 (pre-seed) / EUR 400/mo (Phase 2 estimate)

---

### 2.4.3 Total Space COGS

**Input specification**:
- Field type: Calculated (auto-sum)
- Unit: EUR/month

**Calculation logic**:
```
Total Space COGS = Ingredients & Supplies + Direct Utilities
```

Pre-seed: EUR 0
Phase 2 estimate: (4,000 x 0.32) + 400 = 1,280 + 400 = EUR 1,680/mo

---

## 2.5 Total COGS, Gross Profit, and Gross Margin

### 2.5.1 Total COGS

**Definition**: The sum of ALL direct costs across all revenue streams.

**Input specification**:
- Field type: Calculated (auto-sum)
- Unit: EUR/month

**Calculation logic**:
```
Total COGS = Digital COGS + Product COGS + Service COGS + Space COGS
```

Using pre-seed M12 defaults: 1,011 + 2,700 + 3,100 + 0 = EUR 6,811/mo

---

### 2.5.2 Gross Profit

**Definition**: The money left over after you have paid for the direct costs of delivering your products and services. Gross profit is what you have available to pay for your team, your rent, your marketing, and everything else it takes to run the business.

**Why it matters for Alche**: Gross profit is arguably the most important line in your early-stage P&L. It answers the question: "Does this business model make fundamental economic sense?" If your gross profit is negative (COGS exceeds revenue), you lose money on every sale and cannot grow your way to profitability. If your gross profit is positive, you have a viable business model -- the question becomes whether you can generate enough volume to cover your operating expenses.

**Where to find the number**: Calculated from the lines above.

**Common founder mistakes**:
- Confusing gross profit with net profit. Gross profit does NOT account for salaries, rent, marketing, or any operating expenses. A business can have positive gross profit and still lose money overall (which is expected at pre-seed).
- Mixing COGS and OpEx. A common error: putting founder salaries in COGS. Founder salaries are operating expenses, not direct delivery costs. COGS should only contain costs that scale directly with revenue.

**Input specification**:
- Field type: Calculated
- Unit: EUR/month

**Calculation logic**:
```
Gross Profit = Total Revenue - Total COGS
```

Using pre-seed M12 defaults: 15,895 - 6,811 = EUR 9,084/mo

---

### 2.5.3 Gross Margin Percentage

**Definition**: Gross profit expressed as a percentage of revenue. It tells you what fraction of each euro of revenue you keep after direct costs.

**Why it matters for Alche**: Your target blended gross margin is approximately 72% in Year 1, growing to approximately 80% by Year 3. Investors benchmark this against comparable companies: SaaS companies typically have 70-85% gross margins; marketplace/e-commerce companies have 30-50%. Alche's hybrid model falls in the middle. The shift toward subscription revenue over time pushes margin upward.

**Where to find the number**: Calculated.

**Common founder mistakes**:
- Reporting gross margin without specifying whether it is blended (across all streams) or per-stream. Always provide both. A 72% blended margin might hide a 30% product margin that drags down 90% subscription margins.
- Comparing your margin to pure-play SaaS companies without acknowledging your physical product/service streams. Context matters.

**Input specification**:
- Field type: Calculated
- Unit: %

**Calculation logic**:
```
Gross Margin % = (Gross Profit / Total Revenue) x 100
```

Using defaults: (9,084 / 15,895) x 100 = 57%

**Note**: This is below the 72% target. This happens because the M12 defaults have significant service and product revenue. As subscription revenue grows proportionally, the blended margin will approach the target. Founders should run sensitivity analysis by adjusting the revenue mix.

---

# PHASE 3: OPERATING EXPENSES (OpEx)

Operating expenses are all the costs of running the business that are NOT directly tied to delivering a product or service. These are the costs you pay even if you sell nothing in a given month: rent, salaries, software subscriptions, legal fees.

**The key question OpEx answers**: "How much does it cost to keep the lights on?"

**Why this matters for Alche**: At pre-seed, your OpEx will exceed your gross profit for the first several months. This is expected. The gap between gross profit and OpEx is your operating loss -- the money you are "burning" from your EUR 500K raise each month. Understanding OpEx is how you calculate burn rate and runway.

---

## 3.1 Marketing & Acquisition

**Definition**: All spending aimed at attracting new customers -- paid advertising, content creation tools, influencer partnerships, event sponsorships, SEO tools, and any other spend that exists solely to generate new users or subscribers.

**Why it matters for Alche**: Your content-first GTM strategy means your CAC (Customer Acquisition Cost) is heavily weighted toward organic channels (60% organic / 40% paid). This is a major strength: it means your marketing budget stretches further. CAC math is simple: `Marketing Budget / New Customers Acquired = CAC`. Your target blended CAC is EUR 40-80.

**Where to find the number**: Sum of all marketing-related invoices and receipts. Paid ads: Google Ads / Meta Ads dashboards. Content tools: subscription invoices. Influencer costs: contracts/invoices. Pre-launch, set a monthly marketing budget and divide it by your projected new subscriber count to estimate CAC.

**Common founder mistakes**:
- Claiming "our CAC is EUR 0 because we do organic marketing." Your CAC is not zero -- your time has value, and any tools you use for content creation cost money. A more honest framing: "Content acquisition runs on founder labor, not capital. Pre-funding CAC is effectively zero in direct spend." Post-funding, once you hire a content team or run paid ads, CAC becomes real.
- Not tracking CAC by channel. If Instagram drives subscribers at EUR 30 CAC and Google Ads drives them at EUR 120 CAC, you should invest more in Instagram. But you cannot know this if you lump all marketing spend together.
- Spending on brand marketing and counting it as acquisition spending. Brand marketing (awareness, positioning) is valuable but does not directly produce trackable new subscribers. Keep them in the same budget line for the P&L, but track them separately for CAC calculation.

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder |
|----------|-----------|------|------------|-------------------|
| Monthly paid advertising | Currency | EUR/mo | >= 0 | EUR 800 |
| Content creation tools | Currency | EUR/mo | >= 0 | EUR 150 |
| Influencer/partnership costs | Currency | EUR/mo | >= 0 | EUR 300 |
| Other marketing spend | Currency | EUR/mo | >= 0 | EUR 150 |
| Total marketing spend | Calculated | EUR/mo | -- | EUR 1,400 |
| New customers acquired (month) | Number | Customers | >= 0 | 25 |
| Calculated CAC | Calculated | EUR | -- | EUR 56 |

**Calculation logic**:
```
Total Marketing Spend = Paid Ads + Content Tools + Influencer Costs + Other
CAC = Total Marketing Spend / New Customers Acquired
```

Using defaults: 1,400 / 25 = EUR 56 (within EUR 40-80 target range)

---

## 3.2 Rent & Facilities

**Definition**: The monthly cost of your physical workspace(s) -- office space, co-working membership, or (in Phase 2) the Berlin wellness space lease.

**Why it matters for Alche**: This is a critical framing issue for investors. Pre-seed, your rent is minimal (co-working or home office). In Phase 2 (seed-funded), the Berlin space rent is EUR 5,800-7,300/month including base rent, Nebenkosten (operating costs), and basic utilities. The critical framing: the space is a MARKETING COST, not a retail cost. It drives subscriber acquisition. Revenue from the space (EUR 5,500-8,000/mo) roughly offsets the cost.

**Where to find the number**: Lease agreement or co-working invoice. For the Phase 2 space, get actual quotes from commercial real estate agents in your target Berlin neighborhoods (Mitte, Prenzlauer Berg, Kreuzberg).

**Common founder mistakes**:
- Forgetting Nebenkosten in the rent estimate. German commercial leases typically quote Kaltmiete (base rent) + Nebenkosten (utilities, building maintenance, property tax). The total is 15-30% higher than the base rent.
- Not including the Kaution (security deposit, typically 3 months' rent) in startup costs. This is cash you need upfront but do not expense monthly.
- Signing a long-term lease (5+ years) before validating the business. Berlin commercial leases can be very difficult to exit early.

**Input specification**:
- Field type: Currency
- Unit: EUR/month
- Validation: >= 0
- Default placeholder (pre-seed): EUR 500/mo (co-working space for 2 founders)
- Default placeholder (Phase 2): EUR 6,500/mo (midpoint of EUR 5,800-7,300 range)

**Calculation logic**: Direct cost. Feeds into `Total OpEx`.

---

## 3.3 Founder Salaries (Founder Draws)

**Definition**: Monthly payments to the founders. At pre-seed in a GmbH, these are technically Geschaeftsfuehrer (managing director) salaries, subject to payroll tax and social contributions. However, pre-seed founders typically set their salaries at subsistence level to preserve cash.

**Why it matters for Alche**: Two founders at EUR 3,800/month each = EUR 7,600/month total. This is your single largest operating expense and one of the first things investors scrutinize. EUR 3,800/mo (approximately EUR 45,600/year gross) is well below the Berlin tech worker median salary of EUR 75,000, signaling that the founders are prioritizing the business over personal compensation. This is exactly what investors want to see.

**Where to find the number**: Decided by the founders and documented in the Geschaeftsfuehrer employment contracts. Your Steuerberater (tax advisor) or accountant will set up the monthly payroll, including income tax withholding, social security contributions (Sozialabgaben), and health insurance.

**Common founder mistakes**:
- Setting founder salary at EUR 0 to "show sacrifice." This backfires: (a) it is illegal for GmbH Geschaeftsfuehrer to work without compensation in many contexts (taxed as hidden profit distribution), (b) investors worry about founders who cannot sustain themselves, and (c) it makes the burn rate look artificially low.
- Setting founder salary too high (EUR 6,000+/mo at pre-seed). Investors will question capital discipline.
- Forgetting employer-side costs. Your EUR 3,800 gross salary costs the GmbH approximately EUR 4,500-4,800/mo when you include the employer's share of social security, health insurance, and other statutory contributions (roughly 20-25% on top of gross salary).

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder |
|----------|-----------|------|------------|-------------------|
| Founder 1 (Timu) gross monthly salary | Currency | EUR/mo | >= 0 | EUR 3,800 |
| Founder 2 (Daria) gross monthly salary | Currency | EUR/mo | >= 0 | EUR 3,800 |
| Employer-side cost multiplier | Percentage | % | 100-150 | 125% |
| Total founder compensation cost | Calculated | EUR/mo | -- | EUR 9,500 |

**Calculation logic**:
```
Total Founder Compensation = (Founder 1 Gross + Founder 2 Gross) x Employer Cost Multiplier
```

Using defaults: (3,800 + 3,800) x 1.25 = EUR 9,500/mo

**Note**: The EUR 7,600/mo figure in the project context is the gross salary sum. The actual cost to the GmbH is higher due to employer contributions. Use the fully-loaded figure (EUR 9,500) in your P&L.

---

## 3.4 Technology (Non-COGS)

**Definition**: Technology costs that are NOT directly tied to delivering the product to users (those are in COGS). This includes development tools, staging environments, code repositories, project management tools, and any technology infrastructure used by the team rather than by end users.

**Why it matters for Alche**: As a digital-first platform, technology is a significant cost center. However, at pre-seed with a contracted dev agency building the MVP, many of these costs are bundled into the agency contract. Once you have an in-house CTO and engineers, this line item grows significantly.

**Where to find the number**: Monthly invoices from SaaS tools (GitHub, Figma, Notion, Slack, etc.), development tool subscriptions, and any QA/testing services.

**Common founder mistakes**:
- Mixing technology COGS (hosting, APIs that serve users) with technology OpEx (dev tools that serve the team). Keep them separate. COGS scales with users; technology OpEx scales with team size.
- Underbudgeting for SaaS tool subscriptions. A typical startup stack (Slack, Notion, GitHub, Figma, Linear, 1Password, etc.) runs EUR 50-100/person/month.
- Not accounting for the dev agency cost. If your MVP is built by a contracted agency, that is either a one-time startup cost or a monthly retainer. Either way, it is a significant technology expense.

**Input specification**:
- Field type: Currency
- Unit: EUR/month
- Validation: >= 0
- Default placeholder: EUR 1,000/mo (for 2-person team + contracted dev work)

**Calculation logic**: Direct cost. Feeds into `Total OpEx`.

---

## 3.5 Legal & Compliance

**Definition**: Costs of maintaining legal standing, regulatory compliance, and protecting the business. Includes GmbH annual maintenance, GDPR compliance costs, health regulation compliance, trademark protection, and any legal advisory fees.

**Why it matters for Alche**: As a GmbH operating in the health/wellness space in Germany, you face multiple compliance requirements. GDPR (since your app collects health data, which is "special category data" under GDPR Article 9), German health advertising regulations (Heilmittelwerbegesetz -- HWG), and standard GmbH corporate maintenance (Handelsregister filings, annual accounts/Jahresabschluss). Cutting corners on compliance creates existential risk.

**Where to find the number**: Legal advisor invoices. GmbH maintenance costs are relatively predictable (approximately EUR 2,000/year for Handelsregister fees, IHK membership, and basic filings). GDPR compliance may require a one-time investment in a Data Protection Officer (DPO) appointment or assessment -- many startups use fractional DPO services at EUR 200-500/month.

**Common founder mistakes**:
- Treating legal as a EUR 0 line item until something goes wrong. Budget for it from Month 1.
- Not realizing that collecting health data in the EU triggers stricter GDPR requirements. The fact that only 8% of EU consumers share health data (BEUC) means your data handling practices are a trust differentiator -- but also a compliance cost.
- Forgetting IHK (Industrie- und Handelskammer) mandatory membership fees for Berlin GmbHs, which vary based on revenue but start at approximately EUR 100-200/year at pre-seed.

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder |
|----------|-----------|------|------------|-------------------|
| GmbH maintenance (annualized monthly) | Currency | EUR/mo | >= 0 | EUR 170 |
| GDPR/data compliance | Currency | EUR/mo | >= 0 | EUR 250 |
| Health regulation compliance | Currency | EUR/mo | >= 0 | EUR 100 |
| Legal advisory retainer | Currency | EUR/mo | >= 0 | EUR 200 |
| Total legal & compliance | Calculated | EUR/mo | -- | EUR 720 |

**Calculation logic**:
```
Total Legal & Compliance = GmbH Maintenance + GDPR + Health Regs + Legal Advisory
```

---

## 3.6 Insurance

**Definition**: Business insurance policies required to operate. For a wellness space and health-related app, this includes commercial property insurance (Betriebshaftpflicht), professional liability insurance (Berufshaftpflicht), and potentially product liability insurance (Produkthaftpflicht) for physical products.

**Why it matters for Alche**: Operating a physical wellness space (even in Phase 2) and facilitating health services (blood panels, LED therapy) creates liability exposure. If a customer has an adverse reaction to a recommended supplement or an injury in the space, insurance protects the GmbH.

**Where to find the number**: Insurance broker quotes. Berlin-based commercial insurance brokers (e.g., Hiscox, Allianz commercial, or a specialized Makler) can provide bundled quotes. Pre-launch, get at minimum a Betriebshaftpflicht quote.

**Common founder mistakes**:
- Not having any insurance. GmbH liability protection only covers the entity -- if the founders acted negligently, personal liability can pierce the corporate veil.
- Over-insuring at pre-seed with expensive policies meant for established businesses.
- Not checking whether the landlord's building insurance covers some risks (many commercial leases require tenants to carry their own insurance regardless).

**Input specification**:
- Field type: Currency
- Unit: EUR/month
- Validation: >= 0
- Default placeholder (pre-seed): EUR 200/mo (basic Betriebshaftpflicht + product liability)
- Default placeholder (Phase 2): EUR 400/mo (adding commercial space + professional liability)

**Calculation logic**: Direct cost. Feeds into `Total OpEx`.

---

## 3.7 Professional Services

**Definition**: Fees paid to external professionals who provide ongoing expertise -- accountants (Steuerberater), tax advisors, bookkeepers, and any advisory fees.

**Why it matters for Alche**: German tax and accounting requirements for GmbHs are complex. You are legally required to file annual accounts (Jahresabschluss), monthly or quarterly VAT returns (Umsatzsteuervoranmeldung), and payroll filings. Most pre-seed founders outsource this entirely to a Steuerberater. This is non-negotiable -- getting German tax wrong creates penalties and compliance risk.

**Where to find the number**: Monthly invoices from your Steuerberater/bookkeeper. Standard rates for a small Berlin GmbH with 2-3 employees: EUR 300-500/month for monthly bookkeeping, VAT returns, payroll processing, and annual accounts preparation.

**Common founder mistakes**:
- Trying to do bookkeeping yourself to save money. German bookkeeping (Buchfuehrung) follows specific standards (HGB) and must be done correctly. Mistakes in early books haunt you during due diligence.
- Not budgeting for the Jahresabschluss (annual accounts), which is a one-time yearly fee of EUR 1,500-3,000 on top of monthly bookkeeping.
- Forgetting that the Steuerberater also handles your Koerperschaftsteuer (corporate tax) and Gewerbesteuer (trade tax) filings.

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder |
|----------|-----------|------|------------|-------------------|
| Monthly bookkeeping/Steuerberater | Currency | EUR/mo | >= 0 | EUR 400 |
| Advisory fees | Currency | EUR/mo | >= 0 | EUR 100 |
| Total professional services | Calculated | EUR/mo | -- | EUR 500 |

**Calculation logic**: Direct cost. Feeds into `Total OpEx`.

---

## 3.8 Software & Tools (Non-Development)

**Definition**: Subscriptions to business software that is neither development infrastructure (covered in Technology) nor customer-facing (covered in COGS). This includes team communication (Slack/Teams), project management (Notion/Linear), design tools (Figma/Canva), email marketing (Mailchimp/ConvertKit), CRM, analytics, and any other SaaS tools the team uses to run the business.

**Why it matters for Alche**: A 2-person founding team at pre-seed uses fewer tools than you might think. But even a minimal stack adds up. The trap is tool proliferation -- signing up for too many SaaS products "just in case" and then paying for underused subscriptions.

**Where to find the number**: Audit your credit card statements and subscriptions. Make a list of every SaaS tool you pay for, the monthly cost, and whether it is essential, useful, or dispensable.

**Common founder mistakes**:
- Paying for enterprise-tier plans when free or startup-tier plans exist. Many SaaS companies offer free plans for early-stage startups (Notion, Figma, Slack, etc.).
- Not canceling trials before they auto-renew to paid plans.
- Not distinguishing between tools that serve the team (OpEx) and tools that serve the customer (COGS). Email marketing tools that send customer newsletters are arguably COGS; project management tools are definitely OpEx.

**Input specification**:
- Field type: Currency
- Unit: EUR/month
- Validation: >= 0
- Default placeholder: EUR 600/mo

**Calculation logic**: Direct cost. Feeds into `Total OpEx`.

---

## 3.9 Total OpEx and EBITDA

### 3.9.1 Total Operating Expenses

**Definition**: The sum of ALL operating expenses -- everything it costs to run the business beyond the direct cost of delivering products and services.

**Input specification**:
- Field type: Calculated (auto-sum)
- Unit: EUR/month

**Calculation logic**:
```
Total OpEx = Marketing + Rent + Founder Compensation + Technology + Legal & Compliance + Insurance + Professional Services + Software & Tools
```

Using pre-seed M12 defaults: 1,400 + 500 + 9,500 + 1,000 + 720 + 200 + 500 + 600 = EUR 14,420/mo

---

### 3.9.2 EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization)

**Definition**: Your operating profit before accounting for financing costs, taxes, and non-cash charges. EBITDA tells you whether the core business operations are generating money or burning money, independent of how the business is financed or how its assets are depreciating.

**Why it matters for Alche**: EBITDA is the metric that tells you whether you are on track to break even. At pre-seed, EBITDA will be negative for the first several months. The path to break-even at Month 12 means EBITDA should turn positive (or reach approximately zero) by that point.

**Where to find the number**: Calculated from the lines above.

**Common founder mistakes**:
- Confusing EBITDA with cash flow. EBITDA does not include cash spent on startup costs (one-time), loan repayments, or capital expenditures. You can have positive EBITDA and still run out of cash.
- Overusing "adjusted EBITDA" to exclude legitimate recurring costs. If you exclude founder salaries from EBITDA and call it "adjusted," investors will see through it.

**Input specification**:
- Field type: Calculated
- Unit: EUR/month

**Calculation logic**:
```
EBITDA = Gross Profit - Total OpEx
```

Using pre-seed M12 defaults: 9,084 - 14,420 = -EUR 5,336/mo

**Interpretation**: At projected M12 defaults, the business is still burning approximately EUR 5,336/month. To reach break-even (EBITDA = 0), either revenue must increase, COGS must decrease, or OpEx must decrease. The break-even at 145 subscribers targets approximately EUR 10K+/mo in subscription MRR alone, which would significantly shift the numbers.

---

# PHASE 4: BELOW THE LINE

"Below the line" refers to items that appear after EBITDA on a P&L statement. These are real costs, but they are separated because they relate to financing decisions, accounting conventions, and taxes rather than day-to-day business operations.

---

## 4.1 Depreciation

**Definition**: The systematic allocation of the cost of tangible assets (physical things you bought) over their useful life. When you spend EUR 50,000 on space buildout, you do not expense the full EUR 50,000 in Month 1. Instead, you "depreciate" it over 5-7 years, recognizing approximately EUR 600-830/month as a cost.

**Why it matters for Alche**: Your startup costs include EUR 247K for space buildout, MVP development, and legal/GmbH formation. Of this, the physical space buildout and equipment have a depreciable life. Depreciation reduces your taxable income without reducing cash in the bank -- it is a tax shield.

**Where to find the number**: Your Steuerberater will set up the depreciation schedule based on the German tax depreciation tables (AfA-Tabellen). Common useful lives:
- Commercial interior buildout (Mietereinbauten): 5-10 years (depends on lease term)
- Equipment (LED devices, kitchen equipment): 5-7 years
- IT hardware (computers, tablets): 3 years
- Furniture: 10-13 years

**Common founder mistakes**:
- Not tracking depreciable assets at all. Your Steuerberater needs a complete asset register (Anlageverzeichnis).
- Using the wrong depreciation method. Germany generally requires straight-line depreciation (lineare Abschreibung) for most assets.
- Depreciating items that should be expensed immediately. In Germany, assets costing less than EUR 800 net can be immediately expensed as GWG (geringwertige Wirtschaftsgueter) -- no depreciation needed.

**Input specification**:

| Asset Category | Total Cost | Useful Life | Monthly Depreciation | Default |
|---------------|-----------|-------------|---------------------|---------|
| Space buildout | Currency (EUR) | Years | Calculated | EUR 0 (pre-seed) / EUR 700/mo (Phase 2, assuming EUR 50K over 6 years) |
| Equipment | Currency (EUR) | Years | Calculated | EUR 200/mo (assuming EUR 12K over 5 years) |
| IT hardware | Currency (EUR) | Years | Calculated | EUR 85/mo (assuming EUR 3K over 3 years) |
| Total monthly depreciation | Calculated | EUR/mo | -- | EUR 285/mo (pre-seed) |

**Calculation logic**:
```
Monthly Depreciation per Asset = Asset Purchase Price / (Useful Life in Years x 12)
Total Depreciation = Sum of all asset category depreciation
```

---

## 4.2 Amortization

**Definition**: The same concept as depreciation, but for intangible assets (things you cannot touch). For Alche, the primary amortizable asset is the cost of developing your app/software.

**Why it matters for Alche**: MVP development costs (a significant portion of the EUR 247K startup budget) are capitalized and amortized over their useful life. In Germany, self-developed software can be amortized over 3-5 years. This means a EUR 120,000 MVP development cost becomes approximately EUR 2,000-3,333/month in amortization expense.

**Where to find the number**: Development invoices (if using a dev agency) or tracked developer time (if building in-house). Your Steuerberater will determine whether the development costs qualify for capitalization under German GAAP (HGB Section 248).

**Common founder mistakes**:
- Expensing all development costs immediately. Capitalization spreads the cost over the useful life of the software, reducing current-year losses and creating a balance sheet asset.
- Capitalizing development costs that should be expensed. Under HGB, only development costs (Entwicklungskosten) can be capitalized -- research costs (Forschungskosten) must be expensed. The distinction matters for tax purposes.
- Using the wrong amortization period. 3 years is common for software; your Steuerberater will advise based on the expected useful life of your app version.

**Input specification**:

| Asset | Total Cost | Amortization Period | Monthly Amortization | Default |
|-------|-----------|-------------------|---------------------|---------|
| App/MVP development | Currency (EUR) | Years | Calculated | EUR 2,800/mo (assuming EUR 100K over 3 years) |
| Patents/IP (if any) | Currency (EUR) | Years | Calculated | EUR 0 |
| Total monthly amortization | Calculated | EUR/mo | -- | EUR 2,800/mo |

**Calculation logic**:
```
Monthly Amortization = Capitalized Development Cost / (Amortization Period in Years x 12)
```

---

## 4.3 Interest Expense

**Definition**: The cost of borrowed money. If Alche raises EUR 500K via a Wandeldarlehen (convertible loan), the loan may carry an interest rate. Interest accrues monthly and is either paid or added to the loan principal.

**Why it matters for Alche**: The pitch book specifies a Wandeldarlehen (convertible loan) at EUR 2.5M valuation cap with a 20% discount. Convertible loans in Germany typically carry a nominal interest rate of 1-5% per year (often 2-3%). On a EUR 500K loan at 3%, annual interest is EUR 15,000, or EUR 1,250/month. This interest usually accrues (is added to the principal) rather than being paid monthly -- but it still appears on your P&L as an expense.

**Where to find the number**: The Wandeldarlehen term sheet specifies the interest rate. If the terms are not yet finalized, use 3% as a reasonable placeholder for German convertible loans.

**Common founder mistakes**:
- Ignoring interest expense entirely because "the convertible loan converts to equity." Until it converts, it is debt, and interest accrues. If the loan does not convert (e.g., no qualifying financing event), you owe the principal PLUS accrued interest.
- Confusing interest expense with loan repayment. Interest is the cost of borrowing; repayment is returning the borrowed money. They are different line items.
- Not understanding that accrued (unpaid) interest still appears on the P&L as an expense. It reduces your reported profit even though no cash left the bank.

**Input specification**:

| Sub-item | Field Type | Unit | Validation | Default Placeholder |
|----------|-----------|------|------------|-------------------|
| Loan principal | Currency | EUR | >= 0 | EUR 500,000 |
| Annual interest rate | Percentage | % | 0-20 | 3% |
| Monthly interest expense | Calculated | EUR/mo | -- | EUR 1,250 |

**Calculation logic**:
```
Monthly Interest Expense = (Loan Principal x Annual Interest Rate) / 12
```

Note: If interest is compounding (added to principal), the calculation is slightly different each month. For a pre-seed P&L model, simple interest is sufficient.

---

## 4.4 German Corporate Taxes

**Definition**: The taxes a GmbH pays on its taxable profit. Germany's corporate tax burden is approximately 30% combined, made up of three components.

**Why it matters for Alche**: At pre-seed, you will likely have negative taxable profit (a loss), meaning you pay zero corporate tax. However, these losses carry forward and reduce future tax obligations when the business becomes profitable. Understanding the tax structure matters because (a) it affects your future net profit projections and (b) investors will ask about your tax situation.

**Where to find the number**: Your Steuerberater calculates this. For modeling purposes, use the combined rate below.

### Tax Components

**4.4.1 Koerperschaftsteuer (Corporate Income Tax)**
- Rate: 15% of taxable profit
- Applies to: All GmbH profits, regardless of location
- Administered by: Finanzamt

**4.4.2 Solidaritaetszuschlag (Solidarity Surcharge, "Soli")**
- Rate: 5.5% of the Koerperschaftsteuer amount (NOT 5.5% of profit)
- Effective rate on profit: 15% x 5.5% = 0.825%
- Note: Despite periodic discussions about abolishing it for individuals, the Soli still applies to corporations.

**4.4.3 Gewerbesteuer (Trade Tax)**
- Rate: Varies by municipality. Berlin's Hebesatz (multiplier) is 410%, giving an effective Gewerbesteuer rate of approximately 14.35% of profit.
- Calculation: Steuermessbetrag (3.5% of profit) x Hebesatz (410%) = approximately 14.35%
- Note: GmbHs receive a deduction of EUR 0 for Gewerbesteuer (unlike sole proprietors who get a EUR 24,500 Freibetrag).

**Combined effective rate**: 15% + 0.825% + 14.35% = approximately 30.18%

For modeling: use 30% as a round number.

**Common founder mistakes**:
- Modeling tax in the first year at pre-seed. You will almost certainly have a loss. Tax = EUR 0 on losses.
- Not understanding loss carryforward (Verlustvortrag). Losses in Year 1 reduce taxable income in Year 2 and beyond. This is valuable.
- Not accounting for Gewerbesteuer as a separate tax with its own filing and payment schedule.
- Confusing the corporate tax rate with the founder's personal income tax rate. Founders pay personal income tax on their salaries. The GmbH pays corporate tax on its profit. These are separate.

**Input specification**:
- Field type: Percentage
- Unit: %
- Validation: 0-100
- Default placeholder: 30%
- Tax amount: Calculated only when taxable profit > 0

**Calculation logic**:
```
If Taxable Profit > 0:
    Corporate Tax = Taxable Profit x 0.30
Else:
    Corporate Tax = EUR 0
    Loss Carryforward += |Taxable Profit|
```

---

## 4.5 One-Time Startup Costs vs. Recurring Costs

**Definition**: Startup costs are expenses incurred once to get the business off the ground. They do not repeat. Recurring costs happen every month or year. The P&L should clearly separate these because investors need to understand your ongoing cost structure (recurring) separately from your launch investment (one-time).

**Why it matters for Alche**: Your startup costs total approximately EUR 247K (space buildout + MVP development + legal/GmbH formation). These are large numbers that distort your monthly P&L if treated as a single month's expense. Proper treatment: capitalize eligible startup costs (buildout, development) and depreciate/amortize them (covered in 4.1 and 4.2). Expense non-capitalizable costs (legal fees, GmbH formation) in the month incurred.

**Key one-time costs for Alche**:

| Item | Estimated Cost | Treatment |
|------|---------------|-----------|
| GmbH formation (Notar, Handelsregister, Stammkapital) | EUR 3,000-5,000 | Expense immediately |
| Legal setup (shareholder agreement, templates) | EUR 5,000-8,000 | Expense immediately |
| MVP development (dev agency contract) | EUR 80,000-120,000 | Capitalize and amortize over 3 years |
| Space buildout (Phase 2 only) | EUR 50,000-80,000 | Capitalize and depreciate over 5-7 years |
| Equipment purchases | EUR 10,000-15,000 | Capitalize and depreciate over 3-5 years |
| Branding & design (initial) | EUR 3,000-5,000 | Expense immediately |
| Initial inventory (products for retail) | EUR 5,000-10,000 | Current asset (inventory), expensed as sold |

**Common founder mistakes**:
- Putting all EUR 247K in Month 1 of the P&L. This creates a massive loss in Month 1 and makes all subsequent months look artificially good by comparison.
- Not tracking which costs are capitalizable vs. immediately expensable. Your Steuerberater will advise, but the general rule: if it creates an asset with value lasting more than one year, it is capitalizable.
- Forgetting that inventory is not an expense until it is sold. If you buy EUR 10,000 of products for retail, that EUR 10K sits on your balance sheet as inventory, not on your P&L. It becomes a COGS expense only when a unit sells.

**Input specification**: No single input field. This is a classification guide. Each one-time cost should be categorized as either "Capitalize + Depreciate/Amortize" or "Expense Immediately" and entered in the appropriate P&L line.

---

## 4.6 Net Profit / Net Loss

**Definition**: The absolute bottom line. After subtracting COGS, OpEx, depreciation, amortization, interest, and taxes from revenue, whatever remains is your net profit (if positive) or net loss (if negative).

**Why it matters for Alche**: At pre-seed, your net profit will be negative. This is normal, expected, and not a problem -- as long as (a) the loss is smaller than your monthly cash infusion from the raise, and (b) the loss decreases over time as revenue grows. The trajectory matters more than the absolute number.

**Where to find the number**: Calculated from all the lines above.

**Common founder mistakes**:
- Panicking about negative net profit at pre-seed. Every startup burns money before break-even. The question is whether the burn is controlled and declining.
- Confusing net profit with cash in the bank. Your bank balance includes the EUR 500K raise proceeds and is reduced by both P&L losses AND non-P&L cash outflows (startup costs, inventory purchases, loan repayments). Net profit is an accounting concept; cash balance is a bank account concept.

**Input specification**:
- Field type: Calculated
- Unit: EUR/month

**Calculation logic**:
```
Earnings Before Tax (EBT) = EBITDA - Depreciation - Amortization - Interest Expense
Net Profit / Loss = EBT - Corporate Tax

Full chain:
Net Profit = Total Revenue
             - Total COGS
             = Gross Profit
             - Total OpEx
             = EBITDA
             - Depreciation
             - Amortization
             - Interest Expense
             = Earnings Before Tax (EBT)
             - Corporate Tax (30% if EBT > 0, else EUR 0)
             = Net Profit / Net Loss
```

Using all defaults:
```
Revenue:       EUR 15,895
- COGS:        EUR  6,811
= Gross Profit: EUR  9,084
- OpEx:        EUR 14,420
= EBITDA:      EUR -5,336
- Depreciation: EUR    285
- Amortization: EUR  2,800
- Interest:    EUR  1,250
= EBT:         EUR -9,671
- Tax:         EUR      0 (loss)
= Net Loss:    EUR -9,671/mo
```

---

# PHASE 5: THE STORY YOUR P&L TELLS

This phase has no input fields. It is narrative guidance -- how to read, interpret, and present your P&L to investors.

---

## 5.1 Burn Rate Calculation

**Definition**: Burn rate is how much cash you spend each month beyond what you earn. It is the rate at which your EUR 500K raise is being consumed.

**Two types of burn rate**:

**Gross burn rate**: Total cash out per month (all expenses regardless of revenue).
```
Gross Burn = Total COGS + Total OpEx + One-time costs amortized monthly
```

**Net burn rate**: Cash out minus cash in per month.
```
Net Burn = Total Monthly Expenses - Total Monthly Revenue
```

**For Alche at Month 1** (near-zero revenue):
- Gross burn: approximately EUR 14,420 (OpEx) + minimal COGS = approximately EUR 15,000/mo
- Net burn: approximately EUR 15,000/mo (essentially equal to gross burn because revenue is near zero)
- Pre-launch monthly burn (founders only): EUR 7,600/mo (founder salaries only, per project data)

**For Alche at Month 12** (projected break-even):
- Revenue: EUR 15,895
- Expenses: EUR 15,895 (approximately)
- Net burn: approximately EUR 0 (break-even)

**Runway**: The number of months your cash lasts at the current burn rate.
```
Runway (months) = Cash in Bank / Net Monthly Burn Rate
```

With EUR 500K and EUR 15,000/mo net burn: 500,000 / 15,000 = 33 months runway (before accounting for startup costs)

After EUR 247K in startup costs: (500,000 - 247,000) / 15,000 = approximately 17 months

**But**: Revenue ramps over those months, reducing net burn. This is why the locked figure is 24 months runway -- it accounts for the revenue ramp reducing burn over time.

**Buffer at break-even**: The project data states EUR 142K buffer at break-even (Month 12). This means the model projects that approximately EUR 142K of the EUR 500K remains unspent at the point where monthly revenue equals monthly expenses.

---

## 5.2 Month-by-Month Path to Break-Even

**The break-even target**: Month 12, approximately 145 paying subscribers.

Here is what the journey looks like:

| Month | Milestone | Revenue (est.) | Burn (est.) | Net Loss | Cumulative Cash Used |
|-------|-----------|---------------|-------------|----------|---------------------|
| M0 | GmbH formation, legal setup | EUR 0 | EUR 12,000 | -EUR 12,000 | EUR 12,000 |
| M1 | CTO hired, dev agency engaged | EUR 0 | EUR 15,000 | -EUR 15,000 | EUR 27,000 |
| M2 | App development, content creation | EUR 200 | EUR 15,000 | -EUR 14,800 | EUR 41,800 |
| M3 | App MVP beta, first 50 free users | EUR 500 | EUR 15,000 | -EUR 14,500 | EUR 56,300 |
| M4 | Beta testing, community building | EUR 1,200 | EUR 15,500 | -EUR 14,300 | EUR 70,600 |
| M5 | Content engine live, early conversions | EUR 2,500 | EUR 16,000 | -EUR 13,500 | EUR 84,100 |
| M6 | App public launch, ~30 paying subs | EUR 4,000 | EUR 17,000 | -EUR 13,000 | EUR 97,100 |
| M7 | Growth marketing begins | EUR 5,500 | EUR 17,500 | -EUR 12,000 | EUR 109,100 |
| M8 | ~60 paying subscribers | EUR 7,000 | EUR 18,000 | -EUR 11,000 | EUR 120,100 |
| M9 | ~80 paying subscribers | EUR 8,500 | EUR 18,500 | -EUR 10,000 | EUR 130,100 |
| M10 | ~100 paying subscribers | EUR 10,500 | EUR 19,000 | -EUR 8,500 | EUR 138,600 |
| M11 | ~125 paying subscribers | EUR 13,000 | EUR 19,500 | -EUR 6,500 | EUR 145,100 |
| M12 | ~145 paying subscribers, break-even | EUR 15,500 | EUR 15,500 | EUR 0 | EUR 145,100 |

**Note**: These are illustrative estimates based on the locked data. Revenue scales with subscriber growth; burn increases modestly as you add marketing spend and infrastructure. The EUR 358K in cumulative cash used (500K - 142K buffer) aligns with the EUR 142K buffer figure from the project data.

**What the month-by-month path shows investors**:
1. Disciplined spend: burn stays relatively flat while revenue ramps
2. Revenue inflection: the curve accelerates in M6-M12 as the content flywheel compounds
3. Conservative targets: 145 subscribers is a tiny number. An investor can picture 145 people in Berlin who would pay EUR 49/month for a curated longevity platform.

---

## 5.3 The 3 Numbers Investors Look At First

When an investor opens your P&L, they do not read it line by line. They look at three things immediately:

### Number 1: Gross Margin

**What it tells them**: "Does this business model fundamentally work?"

**Your number**: approximately 72% blended (Y1), growing to approximately 80% (Y3)

**What they compare it to**: SaaS benchmarks (70-85%), marketplace benchmarks (30-50%), consumer health benchmarks (40-60%). Your 72% is strong for a hybrid model and signals that the subscription-heavy revenue mix is working.

**Red flag threshold**: Below 50% makes investors nervous about long-term viability. Below 30% is a deal-breaker for most pre-seed investors.

### Number 2: Burn Rate and Runway

**What it tells them**: "How long before they need more money?"

**Your number**: 24-month runway with EUR 500K

**What they compare it to**: Standard pre-seed runway is 12-18 months. Your 24-month runway signals capital efficiency and reduces the investor's risk of a "bridge round" (emergency fundraising before the next milestone).

**Red flag threshold**: Less than 12 months runway at current burn rate. Also, burn rate that does not decrease over time (meaning the company is not growing toward sustainability).

### Number 3: Unit Economics (LTV:CAC)

**What it tells them**: "Does each customer create more value than they cost to acquire?"

**Your number**: LTV:CAC of 5:1 to 15:1 (conservative to realistic)

- LTV: EUR 280-588 (EUR 35-49 ARPU x 8-12 months retained)
- CAC: EUR 40-80 (blended)

**What they compare it to**: 3:1 is the minimum viable ratio. Below 3:1 means you are spending too much to acquire customers relative to what they are worth. Above 5:1 is excellent. Above 10:1 is "you should be spending more on marketing" (because you are under-investing in growth relative to unit profitability).

**Red flag threshold**: LTV:CAC below 3:1 is a deal-breaker. LTV based on assumptions with no actual retention data is also a concern -- investors will discount your LTV estimate by 30-50% if you have no real churn data.

---

## 5.4 How to Present a Pre-Revenue P&L

Your P&L is a projection, not a history. Here is how to present it credibly:

**Do**:
- Label every number as a projection or estimate. Use "projected," "estimated," or "modeled" -- never present projections as facts.
- Show your assumptions explicitly. "We project 145 paying subscribers at M12, based on: (a) 30 monthly walk-in conversions from content (b) 15% free-to-paid conversion, (c) 8% monthly churn."
- Include a sensitivity analysis. What happens if churn is 12% instead of 8%? What if CAC is EUR 100 instead of EUR 60? Showing that you have stress-tested your model builds credibility.
- Keep projections to 12-18 months. European pre-seed investors penalize Year 3-5 projections as fantasy. Show the next 12 months in detail and note that a seed round extends the runway.
- Use ranges, not point estimates. "We project EUR 120K-180K in Year 1 revenue" is more credible than "We project EUR 152,473 in Year 1 revenue." False precision signals naive modeling.

**Do not**:
- Do not show projections beyond 18 months. No investor believes a pre-seed company can predict Year 3 revenue to any useful precision.
- Do not claim EUR 0 costs for things that cost money (see CAC note above).
- Do not hide your biggest cost items. If founder salaries are 65% of OpEx, show that transparently. Hiding it is worse than showing it.
- Do not show a "hockey stick" revenue curve that magically inflects in Month 6. Revenue growth should be gradual and tied to specific actions (content growth, paid marketing spend, partnership launches).
- Do not include a "Scenario A / B / C" with a "Worst Case" that is still profitable. Real worst cases include scenarios where the business fails. A "worst case" that shows you making money is not a worst case.

---

## 5.5 Red Flags Investors Spot in Founder-Built P&Ls

These are the specific errors and patterns that make experienced investors lose confidence:

### Red Flag 1: Unrealistic Revenue Ramp
**What it looks like**: Month 1 revenue of EUR 0, then suddenly EUR 20,000/mo by Month 3.
**Why it is a problem**: Revenue does not appear magically. Every euro of revenue requires a specific action (user acquisition, conversion, retention). If your model cannot explain where each subscriber comes from, investors will not believe the number.
**Alche fix**: Tie revenue projections to specific acquisition channels and their capacity. "Instagram content drives 15 free signups/week; 15% convert to paid = 9 new paid subscribers/month from Instagram alone."

### Red Flag 2: Missing or Under-budgeted COGS
**What it looks like**: A subscription business showing 95% gross margin with no hosting, API, or payment processing costs.
**Why it is a problem**: Every business has COGS. If yours are not in the model, the investor assumes you did not think about them.
**Alche fix**: Show all four COGS categories (digital, product, service, space) even if some are small. Transparency builds trust.

### Red Flag 3: No Founder Salaries
**What it looks like**: Two full-time founders, EUR 0 in salary expense.
**Why it is a problem**: Either the founders are independently wealthy (possible but unlikely), or they will need salaries as soon as money runs out (which changes the burn rate). Investors model this in regardless.
**Alche fix**: Show EUR 3,800/mo per founder plus employer costs. This is already lower than market rate and signals discipline.

### Red Flag 4: Perfectly Flat Expenses
**What it looks like**: Every month from M1 to M12 has exactly the same OpEx.
**Why it is a problem**: Real businesses have expenses that grow as they grow. Hiring, marketing spend, infrastructure costs -- all increase as revenue increases. Flat expenses suggest the model was built backward from a target break-even date.
**Alche fix**: Model expense growth tied to specific triggers. "Month 4: CTO hire adds EUR 5,500/mo. Month 7: marketing budget increases from EUR 800 to EUR 2,000/mo as paid acquisition begins."

### Red Flag 5: Tax Assumptions on Year 1 Losses
**What it looks like**: A P&L showing negative EBT but still including a tax expense line.
**Why it is a problem**: You do not pay corporate tax on losses. Including tax on a loss signals that the founder does not understand basic tax mechanics (or copy-pasted a template without customizing it).
**Alche fix**: Corporate tax = EUR 0 when EBT is negative. Note the loss carryforward.

### Red Flag 6: Revenue Projections Without Churn
**What it looks like**: Subscriber count only ever goes up. 10 new subscribers/month for 12 months = 120 subscribers, with no one ever leaving.
**Why it is a problem**: 77% of health app users churn by Day 3. 44% cancel within 90 days. These are YOUR locked data points. If your model ignores churn, it contradicts your own pitch book.
**Alche fix**: Model churn explicitly. "We add 25 subscribers/month, lose 8% of existing subscribers. Net growth = 25 new - (existing x 0.08)."

### Red Flag 7: Physical Space Costs in the Wrong Place
**What it looks like**: EUR 80,000 space buildout appearing as a monthly operating expense, or physical space revenue appearing at full run-rate from Month 1.
**Why it is a problem**: Confuses capital expenditure with operating expense, and overstates early revenue.
**Alche fix**: Capitalize buildout costs and depreciate. Phase 2 space revenue starts only when the space opens, not from Month 1. Pre-seed P&L should have EUR 0 space revenue and EUR 0 space buildout cost.

---

# GLOSSARY

Every financial term used in this guide, defined in plain language.

---

**ARPU (Average Revenue Per User)**: The average amount of money each paying user generates per month. Calculated as: Total Monthly Revenue / Number of Paying Users. Alche's weighted ARPU target is EUR 49/mo.

**ARR (Annual Recurring Revenue)**: Your MRR multiplied by 12. It tells investors the annualized size of your recurring revenue base. ARR is used for SaaS valuation multiples. If your MRR is EUR 7,000, your ARR is EUR 84,000.

**Amortization**: Spreading the cost of an intangible asset (like software development costs) over its useful life, as a monthly expense on the P&L. Similar to depreciation but for non-physical assets.

**Break-even**: The point where total revenue equals total expenses, and the business stops losing money. For Alche, the target is Month 12 at approximately 145 paying subscribers. Break-even does not mean the business is profitable -- it means the monthly cash outflow equals the monthly cash inflow.

**Burn Rate**: How much cash the business spends per month beyond what it earns. Gross burn = total monthly expenses. Net burn = total expenses minus total revenue. At pre-seed, net burn is the critical number because it determines how long your money lasts.

**CAC (Customer Acquisition Cost)**: The total cost of acquiring one new paying customer. Calculated as: Total Marketing & Sales Spend / Number of New Customers Acquired. Alche's target blended CAC is EUR 40-80.

**Churn**: The percentage of subscribers who cancel in a given period. Monthly churn of 8% means 8 out of every 100 subscribers cancel each month. Churn is the enemy of subscription businesses -- it determines how fast you need to acquire new customers just to stay flat.

**COGS (Cost of Goods Sold)**: The direct costs of delivering your product or service. If you sold zero units, COGS would be zero. For Alche: hosting, API costs, payment processing (digital); wholesale cost, shipping, packaging (products); practitioner fees, consumables (services).

**Contribution Margin**: Revenue from a single unit minus the variable costs of that unit. For a EUR 49 Pro subscription with EUR 3 in digital COGS, the contribution margin is EUR 46. It tells you how much each sale contributes toward covering fixed costs.

**Convertible Note (Wandeldarlehen in German)**: A loan that converts into equity (ownership shares) at a future financing event, typically at a discount to the price new investors pay. Alche is raising EUR 500K via convertible loan at EUR 2.5M valuation cap with 20% discount.

**Depreciation**: Spreading the cost of a physical asset (like equipment or space buildout) over its useful life, as a monthly expense on the P&L. A EUR 12,000 device depreciated over 5 years = EUR 200/month in depreciation expense.

**EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization)**: Your operating profit from core business activities, before accounting for financing, tax, and non-cash charges. It is the best measure of whether your day-to-day business operations are generating or consuming money.

**Fixed Costs**: Costs that do not change with revenue volume. Rent, founder salaries, and software subscriptions are fixed costs -- you pay them whether you have 0 or 1,000 customers. Opposite of variable costs.

**Founder Draw**: The salary or compensation founders take from the business. In a GmbH, founder draws are formalized as Geschaeftsfuehrer (managing director) salaries, subject to payroll tax and social security.

**Gewerbesteuer (Trade Tax)**: A German municipal tax on business profits. The rate varies by city. Berlin's effective rate is approximately 14.35%. Applies to GmbH profits on top of Koerperschaftsteuer.

**GmbH (Gesellschaft mit beschraenkter Haftung)**: The German limited liability company structure. Similar to a UK Ltd or US LLC. The standard entity type for German startups. Requires EUR 25,000 in registered capital (Stammkapital), of which EUR 12,500 must be paid in at formation.

**Gross Margin**: Gross Profit expressed as a percentage of revenue. Gross Margin = (Revenue - COGS) / Revenue x 100. Alche targets approximately 72% in Y1, approximately 80% in Y3.

**Gross Profit**: Revenue minus COGS. It is the money available to cover operating expenses, before any OpEx is deducted. Gross Profit = Total Revenue - Total COGS.

**Koerperschaftsteuer (Corporate Income Tax)**: Germany's federal corporate income tax, at a flat rate of 15% on GmbH profits. Combined with Soli and Gewerbesteuer, the total corporate tax burden is approximately 30%.

**LTV (Lifetime Value)**: The total revenue a customer generates over their entire relationship with your business. Calculated as: ARPU x Average Customer Lifespan (in months). Alche's LTV range: EUR 280-588 (EUR 35-49 ARPU x 8-12 months).

**MRR (Monthly Recurring Revenue)**: The total recurring subscription revenue in a given month. It excludes one-time purchases, product sales, and service fees. MRR = sum of all active subscription payments in the month.

**Net Profit / Net Loss**: The absolute bottom line of the P&L. Revenue minus ALL costs (COGS, OpEx, depreciation, amortization, interest, taxes). If positive, it is net profit. If negative, it is net loss.

**OpEx (Operating Expenses)**: All costs of running the business that are not COGS. Includes salaries, rent, marketing, legal, insurance, software tools, and professional services. OpEx does not scale directly with revenue -- it scales with business complexity and team size.

**Pre-seed**: The earliest stage of startup fundraising. Pre-seed rounds are typically EUR 100K-1M, used to go from idea/research to MVP and initial traction. Alche is raising EUR 500K at this stage.

**Revenue**: The total money earned from selling products and services. Also called "top line" because it is the first line of a P&L. Revenue is recognized when the product/service is delivered, not when payment is received.

**Runway**: The number of months a startup can operate before running out of cash. Calculated as: Cash in Bank / Net Monthly Burn Rate. Alche targets 24-month runway with EUR 500K.

**SAFE (Simple Agreement for Future Equity)**: A US-originated investment instrument that gives the investor the right to receive equity at a future financing event. Less common in Germany than the Wandeldarlehen, but used by some international investors.

**Soli (Solidaritaetszuschlag)**: A surcharge on German corporate income tax, at 5.5% of the Koerperschaftsteuer amount. On a EUR 100,000 profit, Koerperschaftsteuer is EUR 15,000 and Soli is EUR 825 (5.5% of 15,000).

**Unit Economics**: The revenue and cost associated with a single "unit" of your business (typically one customer). The core unit economics metrics are ARPU, LTV, CAC, and LTV:CAC ratio. Strong unit economics mean each customer is profitable; weak unit economics mean you lose money on each customer.

**Valuation Cap**: The maximum company valuation at which a convertible note or SAFE will convert into equity. If the cap is EUR 2.5M and the company raises a priced round at EUR 5M valuation, the convertible note holders convert at the EUR 2.5M valuation (getting more shares per euro invested). The cap protects early investors from dilution.

**Variable Costs**: Costs that increase proportionally with revenue. If you sell twice as many products, your shipping costs double. COGS items are mostly variable costs. Opposite of fixed costs.

---

## COMPLETE P&L TEMPLATE SUMMARY

For quick reference, here is the full P&L structure with Alche's projected M12 (pre-seed) defaults:

```
PROFIT & LOSS STATEMENT — ALCHE GmbH
Monthly View | Month 12 Projection (Pre-Seed)

REVENUE
  Subscription Revenue
    Core (75 subs x EUR 19)                         EUR  1,425
    Pro (55 subs x EUR 49)                          EUR  2,695
    Premium (15 subs x EUR 99)                      EUR  1,485
  Total Subscription Revenue                        EUR  5,605

  Product Revenue (net of returns)                  EUR  3,990
  Service Revenue                                   EUR  6,300
  Physical Space Revenue                            EUR      0
                                                    ──────────
TOTAL REVENUE                                       EUR 15,895

COST OF GOODS SOLD
  Digital COGS (hosting, APIs, payment processing)  EUR  1,011
  Product COGS (wholesale, shipping, packaging)     EUR  2,700
  Service COGS (practitioners, consumables, equip)  EUR  3,100
  Space COGS                                        EUR      0
                                                    ──────────
TOTAL COGS                                          EUR  6,811

GROSS PROFIT                                        EUR  9,084
GROSS MARGIN                                            57.1%

OPERATING EXPENSES
  Marketing & Acquisition                           EUR  1,400
  Rent & Facilities                                 EUR    500
  Founder Compensation (fully loaded)               EUR  9,500
  Technology (non-COGS)                             EUR  1,000
  Legal & Compliance                                EUR    720
  Insurance                                         EUR    200
  Professional Services                             EUR    500
  Software & Tools                                  EUR    600
                                                    ──────────
TOTAL OPERATING EXPENSES                            EUR 14,420

EBITDA                                              EUR -5,336

  Depreciation                                      EUR    285
  Amortization                                      EUR  2,800
  Interest Expense                                  EUR  1,250
                                                    ──────────
EARNINGS BEFORE TAX (EBT)                           EUR -9,671

  Corporate Tax (30%, EUR 0 on loss)                EUR      0
                                                    ──────────
NET LOSS                                            EUR -9,671
```

**Note**: This template uses conservative defaults. The actual break-even projection at M12 (145 paying subscribers) implies higher subscription revenue and/or lower expenses than these defaults show. Founders should adjust inputs to match their detailed financial model and validate the break-even assumption with their Steuerberater.

---

*Content map prepared by Agent 1 (Financial Content Architect) for the Alche P&L Learning Guide. All data sourced from locked project figures in CLAUDE.md and the Content Blueprint. No external data has been substituted.*
