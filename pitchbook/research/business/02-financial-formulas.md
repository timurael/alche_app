# alche Financial Formulas — The Math Behind the Model

**Source:** agents_prompt.md + exploration agent output
**Purpose:** Reference equations for building financial models, pitch calculators, and investor materials

---

## Core Revenue Metrics

### MRR (Monthly Recurring Revenue)
```
MRR = (Core × 19) + (Pro × 49) + (Premium × 99) + Products + Events
```
Where:
- Core = # of Core tier subscribers
- Pro = # of Pro tier subscribers
- Premium = # of Premium tier subscribers
- Products = monthly product commerce revenue
- Events = monthly event revenue

**Example (Month 12):**
```
MRR = (90 × 19) + (40 × 49) + (15 × 99) + 2000 + 800
    = 1,710 + 1,960 + 1,485 + 2,000 + 800
    = EUR 7,955/month
```

---

### ARR (Annual Recurring Revenue)
```
ARR = MRR × 12
```

**Example:**
```
ARR = EUR 7,955 × 12 = EUR 95,460
```

**Note:** One-time product sales are NOT recurring, but are included in MRR for simplicity in pre-seed model. At scale, separate into "recurring subscription ARR" and "product GMV."

---

### ARPU (Average Revenue Per User)
```
ARPU = Subscription_Revenue / Total_Subscribers
```

**Weighted ARPU Formula:**
```
ARPU = (Core% × 19) + (Pro% × 49) + (Premium% × 99)
```

**Example:**
```
Core:    62% × EUR 19 = EUR 11.78
Pro:     32% × EUR 49 = EUR 15.68
Premium:  6% × EUR 99 = EUR  5.94
                        ──────────
Weighted ARPU:           EUR 33.40
```

**alche Target:** EUR 49 (assumes higher Pro mix than baseline)

---

## Unit Economics

### Lifetime (Customer Lifetime in Months)
```
Lifetime = 1 / Monthly_Churn_Rate
```

**Example:**
```
Churn = 8%  → Lifetime = 1 / 0.08 = 12.5 months
Churn = 12% → Lifetime = 1 / 0.12 = 8.3 months
Churn = 15% → Lifetime = 1 / 0.15 = 6.7 months
```

---

### LTV (Lifetime Value)
```
LTV = ARPU × Gross_Margin × Lifetime
```

**Alternative Formula:**
```
LTV = ARPU × Gross_Margin / Monthly_Churn_Rate
```

**Example (Conservative):**
```
ARPU:         EUR 35
Gross Margin: 85%
Churn:        12.5%
Lifetime:     8 months

LTV = 35 × 0.85 × 8 = EUR 238
```

**Example (alche Target):**
```
ARPU:         EUR 49
Gross Margin: 87%
Churn:        8%
Lifetime:     12.5 months

LTV = 49 × 0.87 × 12.5 = EUR 533
```

---

### LTV:CAC Ratio
```
LTV:CAC = LTV / CAC
```

**Benchmarks:**
- Below 3x: Unsustainable (burning more than you earn)
- 3x: Minimum viable
- 5x+: Excellent
- 10x+: Industry-leading (achievable with content-first EUR 0 CAC)

**Example:**
```
LTV:CAC = EUR 533 / EUR 40 = 13.3x
```

---

### Payback Period (Months to Recoup CAC)
```
Payback = CAC / (ARPU × Gross_Margin)
```

**Example:**
```
CAC:          EUR 40
ARPU:         EUR 49
Gross Margin: 87%

Payback = 40 / (49 × 0.87) = 0.94 months (~28 days)
```

**Benchmark:** Under 12 months is healthy. Under 6 months is excellent.

---

### Revenue per EUR Spent (ROI)
```
Revenue_per_EUR_Spent = LTV / CAC
```
(This is the same as LTV:CAC ratio, but expressed as "for every EUR 1 spent on acquisition, you get EUR X back over the customer's lifetime")

---

### Months to 3x CAC
```
Months_to_3x = (3 × CAC) / (ARPU × Gross_Margin)
```

**Example:**
```
Months_to_3x = (3 × 40) / (49 × 0.87) = 2.8 months
```

**Why This Matters:** Investors want to see you recoup 3x your acquisition cost within a reasonable window (typically 12-18 months). alche does it in under 3 months.

---

## Churn & Retention

### Monthly Churn Rate
```
Monthly_Churn = Cancelled_Subscribers / Total_Subscribers_Start_of_Month
```

**Example:**
```
Start of month: 145 subscribers
Cancelled:      11 subscribers
Churn = 11 / 145 = 7.6%
```

---

### Retention Rate
```
Retention_Rate = 1 - Churn_Rate
```

**Example:**
```
Churn = 8%
Retention = 1 - 0.08 = 92%
```

---

### Cohort Retention Over Time
```
Retained(month) = 100 × (1 - Churn_Rate)^month
```

**Example (8% churn):**
```
M0:  100 × (0.92)^0  = 100 users
M3:  100 × (0.92)^3  = 78 users
M6:  100 × (0.92)^6  = 61 users
M12: 100 × (0.92)^12 = 37 users
```

**Example (15% industry churn):**
```
M0:  100 × (0.85)^0  = 100 users
M12: 100 × (0.85)^12 = 14 users
```

**Insight:** At 8% churn, 37% remain after 12 months. At 15%, only 14% remain. This difference = EUR 533 LTV vs EUR 238 LTV.

---

## Gross Margin Calculations

### Subscription Gross Margin
```
Gross_Margin = (Revenue - COGS) / Revenue
```

**COGS per Subscriber:**
```
Hosting:           EUR 1.50
Payment processing: EUR 1.30
AI inference:       EUR 0.70 (Pro+ only)
                    ─────────
Total COGS:         EUR 2.50-3.50/month
```

**Example (EUR 49 ARPU):**
```
Gross_Margin = (49 - 3.50) / 49 = 92.9%
```

**alche Uses 87%** (conservative, accounts for partner API costs, data storage scaling)

---

### Blended Gross Margin (Across All Revenue Streams)
```
Blended_Margin = (Sub_Rev × Sub_Margin + Product_Rev × Product_Margin + Event_Rev × Event_Margin) / Total_Revenue
```

**Example (Month 12):**
```
Subscription: EUR 5,155 × 87% = EUR 4,485
Products:     EUR 2,000 × 58% = EUR 1,160
Events:       EUR 800  × 60% = EUR 480
                                ─────────
Total Revenue: EUR 7,955
Total GP:      EUR 6,125
Blended Margin: 6,125 / 7,955 = 77%
```

**Target:** 72% Y1 → 80% Y3 (as subscription mix increases)

---

## Conversion Funnel

### Free-to-Paid Conversion Rate
```
Conversion_Rate = Paid_Subscribers / Free_Users
```

**Example:**
```
Free users:   2,000
Paid users:   90
Conversion = 90 / 2,000 = 4.5%
```

**Benchmark:**
- Industry average: 2-3%
- Upper quartile: 4-6%
- alche target: 4.5%

---

### Upgrade Rate (Core → Pro)
```
Upgrade_Rate = Pro_Subscribers / (Core_Subscribers + Pro_Subscribers)
```

**Example:**
```
Core: 90 subscribers
Pro:  18 subscribers upgraded from Core

Upgrade_Rate = 18 / 90 = 20%
```

---

### Premium Penetration
```
Premium_Penetration = Premium_Subscribers / Total_Paid_Subscribers
```

**Example:**
```
Total paid: 145
Premium:    7

Penetration = 7 / 145 = 4.8%
```

**alche Target:** 6-8% of paid base

---

### Overall Conversion Cascade
```
Total_Paid = (Free × Free_to_Core%) + (Core × Core_to_Pro%) + (Paid × Paid_to_Premium%) + Walk_Ins
```

**Example:**
```
Free base:            2,000
Free → Core (4.5%):   90
Core → Pro (20%):     18  (so Core-only = 90 - 18 = 72)
Premium (8% of paid): ~7  (from both Core and Pro)
Walk-ins:             15

Total Paid = 72 + 18 + 7 + 15 = 112 subscribers
```

(Note: Math simplified; in practice, premium comes from entire paid pool, not just upgrades)

---

## Break-Even Calculations

### Subscribers Needed to Break Even
```
Subscribers_Needed = (Monthly_Burn - Extra_Revenue) / ARPU
```

**Example:**
```
Monthly burn:  EUR 7,600
Extra revenue: EUR 2,500 (products + events)
ARPU:          EUR 49

Subscribers = (7,600 - 2,500) / 49 = 104 subscribers
```

**alche Target:** 145 subscribers (includes buffer for revenue mix variability)

---

### Runway (Months)
```
Runway = Capital_Raised / Net_Monthly_Burn
```

**Pre-Revenue:**
```
Runway = EUR 500,000 / EUR 7,600 = 65.8 months (unrealistic; assumes zero revenue)
```

**Post-Break-Even:**
```
Net_Burn = Monthly_Burn - Monthly_Revenue
At M12: Net_Burn = 7,600 - 10,000 = -2,400 (profitable)
```

**Total Runway Calculation:**
```
Burn through M12:     EUR 358,000 (EUR 7,600/mo × 12, minus ramping revenue)
Remaining capital:    EUR 142,000
Post-break-even:      Profitable (no further capital consumption)

Total runway: 24+ months
```

---

### Cash Position Over Time
```
Cash(month) = Capital - Cumulative_Burn + Cumulative_Revenue
```

**Example (linear revenue ramp to M12):**
```
M0:  Cash = EUR 500,000 - 0 + 0 = EUR 500,000
M6:  Cash = EUR 500,000 - (7,600 × 6) + ~EUR 15,000 = EUR 469,400
M12: Cash = EUR 500,000 - (7,600 × 12) + ~EUR 48,000 = EUR 456,800
     (Actual: EUR 142K buffer due to expense phasing)
M24: Cash = EUR 142K + (profitable operations × 12) = Growing
```

---

## Valuation Multiples

### Pre-Seed → Seed Valuation
```
Valuation = ARR × Multiple
```

**Multiples by Revenue Type:**
- SaaS subscriptions: 8-15x ARR
- Premium retail: 2-4x revenue
- High-margin services: 2-4x revenue

**Example (M12):**
```
ARR:       EUR 96,000
Multiple:  5x (early-stage, pre-PMF)
Valuation: EUR 480,000

At Seed (with traction):
ARR:       EUR 500,000 (500 subs × EUR 49 × 12 × 1.7 total revenue multiplier)
Multiple:  6-8x
Valuation: EUR 3-4M
```

---

### Blended Valuation (Mixed Revenue Streams)
```
Valuation = (Sub_ARR × Sub_Multiple) + (Product_Rev × Product_Multiple) + (Service_Rev × Service_Multiple)
```

**Example (Seed stage):**
```
Subscription ARR:  EUR 300K × 10x = EUR 3.0M
Product revenue:   EUR 100K × 3x  = EUR 0.3M
Service revenue:   EUR 50K  × 3x  = EUR 0.15M
                                    ─────────
Blended valuation:                  EUR 3.45M
```

**Why This Matters:** As subscription mix increases, valuation multiple compounds faster than revenue growth.

---

## Key Ratios & Benchmarks

### Magic Number (Sales Efficiency)
```
Magic_Number = (ARR_Growth_Quarter) / (Sales_&_Marketing_Spend_Prior_Quarter)
```

- Below 0.5: Inefficient growth
- 0.5-0.75: Acceptable
- 0.75+: Efficient (strong product-market fit)
- 1.0+: Exceptional

**alche (Content-First):**
```
Q1 ARR Growth: EUR 24K (0 → EUR 24K)
Q1 S&M Spend:  EUR 2K (content production only)
Magic Number = 24 / 2 = 12.0 (exceptional due to EUR 0 CAC phase)
```

---

### Rule of 40 (Growth + Profitability)
```
Rule_of_40 = Revenue_Growth_Rate% + Profit_Margin%
```

- Score ≥ 40: Healthy, venture-backable
- Score < 40: Needs optimization

**alche (Year 2):**
```
Revenue growth: 350% YoY (EUR 96K → EUR 432K)
Profit margin:  -15% (still investing in growth)
Rule of 40:     350 + (-15) = 335 (well above 40)
```

---

## Cohort Analysis Formulas

### Cohort Total Revenue
```
Cohort_Revenue = Σ(Retained_Users(month) × ARPU)
```

**Example (100-user cohort, 8% churn, EUR 49 ARPU):**
```
M0:  100 × EUR 49 = EUR 4,900
M1:   92 × EUR 49 = EUR 4,508
M2:   85 × EUR 49 = EUR 4,165
...
M12:  37 × EUR 49 = EUR 1,813

Total revenue over 12 months: EUR 49,362 (≈ EUR 494/user)
```

---

### Cohort LTV (Real)
```
Cohort_LTV = Total_Cohort_Revenue / Initial_Cohort_Size
```

**Example:**
```
Cohort_LTV = EUR 49,362 / 100 = EUR 494
(Note: This is gross revenue; multiply by margin for gross profit LTV)
```

---

## Summary Table: Key Metrics at a Glance

| Metric | Conservative | Realistic (alche) | Source |
|--------|--------------|-------------------|--------|
| ARPU | EUR 35 | EUR 49 | Weighted avg |
| Monthly Churn | 12.5% | 8% | Defended by community |
| Lifetime | 8 mo | 12.5 mo | 1 / churn |
| Gross Margin | 85% | 87% | Subscription-heavy mix |
| LTV | EUR 238 | EUR 533 | ARPU × margin × lifetime |
| CAC | EUR 55 | EUR 40 | Content-first advantage |
| LTV:CAC | 4.3x | 13.3x | Well above 3x minimum |
| Payback | 1.5 mo | 0.9 mo | Under 1 month |
| Break-Even Subs | 138 | 104 | (Burn - extra) / ARPU |
| Break-Even Month | M12 | M12 | With EUR 142K buffer |
| Runway | 24 mo | 24 mo | EUR 500K raise |

---

## Notes on Model Assumptions

1. **Linear growth to M12** is assumed for simplicity. In reality, growth is exponential (content compounds, word-of-mouth accelerates).
2. **Churn is constant** at 8%. In reality, churn decreases over time as community strengthens and data compounds.
3. **ARPU is fixed** at EUR 49. In reality, ARPU increases as users upgrade tiers (Core → Pro → Premium).
4. **All formulas use monthly intervals.** For annual metrics, multiply by 12.
5. **Product/event revenue is included in MRR** for pre-seed simplicity. At scale, separate recurring vs. non-recurring.

**These formulas are the foundation of alche's financial model. Use them to build pitch calculators, investor models, and scenario planning tools.**
