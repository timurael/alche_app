# P&L Learning Guide -- UX & Interaction Specification
## Agent 2 Deliverable for Agent 3 (HTML Builder)
### Customized for Alche | Longevity Lifestyle Platform | GmbH Pre-Seed (Berlin)

**Purpose**: This document specifies every interaction, component, calculation chain, validation rule, animation, responsive breakpoint, and accessibility requirement for the interactive P&L Learning Guide. Agent 3 should be able to build the complete HTML from this spec without ambiguity.

**Design System Reference**: All colors, typography, and glassmorphic treatments follow the Alche design system defined in CLAUDE.md. Key tokens repeated here for convenience:
- `--cream: #F5F0E8` (page background)
- `--deep: #2C2418` (all text)
- `--amber: #C4956A` (labels, accents)
- `--sage: #8B9E7C` (progress, positive values)
- `--terra: #B86B4A` (warnings, glossary term underlines, negative values)
- `--rose: #C47A8A` (error states)
- `--glass` / `--glass-strong` (card backgrounds)
- Headlines: Cormorant Garamond; Body: Outfit; Data/Mono: Space Mono

---

## 1. COMPONENT MAPPING

Every content block from Agent 1's content map is assigned a teaching modality below. The modalities are:

| Modality | Use Case | Component Name |
|----------|----------|----------------|
| `input-currency` | EUR monetary values | Currency input with EUR prefix, thousand separators |
| `input-integer` | Counts (subscribers, units, sessions) | Integer input with stepper buttons |
| `input-percentage` | Rates (churn, margin, tax) | Slider + number input combo |
| `input-currency-per-unit` | Per-unit costs (shipping, packaging) | Currency input with "/unit" suffix |
| `calculated-field` | Auto-computed values | Read-only display with formula tooltip |
| `calculated-subtotal` | Section subtotals | Highlighted summary row |
| `calculated-milestone` | Gross Profit, EBITDA, Net P/L | Large highlighted card with color coding |
| `concept-card` | Definitions & explanations | Expandable card with collapsed/expanded states |
| `warning-callout` | Common mistakes, red flags | Collapsible callout with severity indicator |
| `narrative-block` | Phase 5 read-only content | Styled prose block, no inputs |
| `data-table` | Month-by-month, comparisons | Styled table with Space Mono figures |
| `glossary-term` | Inline term references | Dotted underline + tooltip |

---

### Phase 1: Revenue (Top Line)

#### 1.1 Subscription Revenue

**Phase intro** (before any inputs):
- Modality: `concept-card`
- Collapsed text: "Revenue is the total money your business earns before subtracting costs -- the 'top line.'"
- Expanded content: Full intro paragraph from content map about why revenue matters, four streams, SaaS multiples (8-15x ARR) vs. product multiples (2-4x), and why subscription share grows from 52% to 68%.
- Icon: Thin upward arrow
- Color accent: `--amber` left border (4px)
- Default state: Expanded (first concept card user sees)

**1.1.1 Free Tier Subscribers**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `free_tier_subs` |
| Label | "Free Tier Subscribers" |
| Help text | "Users on the free plan. They don't generate revenue but feed your conversion funnel." |
| Placeholder | `500` |
| Default value | `500` |
| Min | `0` |
| Max | `100000` |
| Step | `1` |
| Validation | Integer >= 0 |
| Error message | "Must be zero or a positive whole number" |
| Stepper buttons | Yes (+1, +10, +100) |
| Feeds into | Conversion rate display (informational only, not a P&L line) |

- Concept card (collapsed): "Free users aren't customers -- but they're the pool from which paying subscribers are drawn."
- Warning callout (collapsed, severity: info): "Don't count free users as 'customers' in revenue conversations. Realistic freemium conversion: 2-5%."

**1.1.2 Core Tier Subscribers (EUR 19/month)**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `core_subs` |
| Label | "Core Subscribers (EUR 19/mo)" |
| Help text | "Paying users on the Core plan: biomarker dashboard, wearable sync, basic protocols." |
| Placeholder | `75` |
| Default value | `75` |
| Min | `0` |
| Max | `10000` |
| Step | `1` |
| Validation | Integer >= 0 |
| Error message | "Must be zero or a positive whole number" |
| Feeds into | `core_revenue`, `total_sub_revenue`, `total_monthly_revenue` |

- Concept card (collapsed): "EUR 19 is below the psychological EUR 20 threshold -- low enough to convert, high enough to signal value."
- Warning callout (collapsed, severity: warning): "Most users start at the lowest tier. Don't assume all subscribers land on your highest tier."

**1.1.3 Pro Tier Subscribers (EUR 49/month)**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `pro_subs` |
| Label | "Pro Subscribers (EUR 49/mo)" |
| Help text | "Paying users on the Pro plan: personalized protocols, AI insights, advanced tracking." |
| Placeholder | `55` |
| Default value | `55` |
| Min | `0` |
| Max | `10000` |
| Step | `1` |
| Validation | Integer >= 0 |
| Error message | "Must be zero or a positive whole number" |
| Feeds into | `pro_revenue`, `total_sub_revenue`, `total_monthly_revenue` |

- Concept card (collapsed): "EUR 49 is your target ARPU. This tier drives the unit economics that make the model work."

**1.1.4 Premium Tier Subscribers (EUR 99/month)**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `premium_subs` |
| Label | "Premium Subscribers (EUR 99/mo)" |
| Help text | "Paying users on the Premium plan: blood panel credits, 1:1 reviews, exclusive events, CGM integration." |
| Placeholder | `15` |
| Default value | `15` |
| Min | `0` |
| Max | `10000` |
| Step | `1` |
| Validation | Integer >= 0 |
| Error message | "Must be zero or a positive whole number" |
| Feeds into | `premium_revenue`, `total_sub_revenue`, `total_monthly_revenue` |

- Concept card (collapsed): "Premium has lower gross margin (70-85%) due to real-world service costs, but these are your highest-LTV users."
- Warning callout (collapsed, severity: info): "Over-projecting Premium uptake is a common mistake. At pre-seed, most subscribers will be Core or Pro."

**1.1.5 Total Subscription Revenue**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_sub_revenue` |
| Label | "Total Subscription Revenue" |
| Display format | `EUR X,XXX` (Space Mono, tabular-nums) |
| Formula | `(core_subs * 19) + (pro_subs * 49) + (premium_subs * 99)` |
| Formula tooltip | "= (Core x EUR 19) + (Pro x EUR 49) + (Premium x EUR 99)" |
| Visual treatment | Glass card with `--amber` left border, slightly larger font (1.1em) |
| Positive/negative | Always positive or zero; show in `--deep` |
| Sub-display | Show breakdown: "Core: EUR X,XXX | Pro: EUR X,XXX | Premium: EUR X,XXX" in smaller text below |

- Warning callout (collapsed, severity: info): "This is MRR (Monthly Recurring Revenue) -- the number investors care about most. Don't confuse with total monthly revenue."

---

#### 1.2 Product Revenue

**Section intro concept card** (collapsed):
- "Revenue from physical products -- supplements, functional foods, wellness tools. 18% of Y1 revenue mix."

**1.2.1 Units Sold Per Month**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `product_units` |
| Label | "Product Units Sold / Month" |
| Help text | "Total units of curated products sold via app and in-space retail." |
| Placeholder | `120` |
| Default value | `120` |
| Min | `0` |
| Max | `10000` |
| Step | `1` |
| Validation | Integer >= 0 |
| Error message | "Must be zero or a positive whole number" |
| Feeds into | `gross_product_revenue`, `net_product_revenue`, `product_wholesale_cogs`, `product_shipping_cogs`, `product_packaging_cogs` |

**1.2.2 Average Product Price**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `avg_product_price` |
| Label | "Average Product Price" |
| Help text | "Weighted average selling price across all products." |
| Placeholder | `35` |
| Default value | `35` |
| Min | `1` |
| Max | `1000` |
| Step | `0.01` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Validation | Number > 0 |
| Error message | "Price must be greater than zero" |
| Feeds into | `gross_product_revenue`, `product_wholesale_cogs` |

**1.2.3 Return/Refund Rate**

| Property | Value |
|----------|-------|
| Modality | `input-percentage` |
| Field ID | `product_return_rate` |
| Label | "Return / Refund Rate" |
| Help text | "Percentage of products returned. 5-10% is typical for wellness e-commerce." |
| Placeholder | `5` |
| Default value | `5` |
| Min | `0` |
| Max | `100` |
| Step | `0.5` |
| Suffix | "%" |
| Slider | Yes, 0-30 range visible (full 0-100 via manual input) |
| Validation | Number 0-100 |
| Error message | "Must be between 0% and 100%" |
| Feeds into | `net_product_revenue` |

**1.2.4 Gross Product Revenue (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `gross_product_revenue` |
| Label | "Gross Product Revenue" |
| Formula | `product_units * avg_product_price` |
| Display format | `EUR X,XXX` |
| Formula tooltip | "= Units Sold x Average Price" |

**1.2.5 Net Product Revenue (calculated subtotal)**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `net_product_revenue` |
| Label | "Net Product Revenue (after returns)" |
| Formula | `gross_product_revenue * (1 - product_return_rate / 100)` |
| Display format | `EUR X,XXX` |
| Formula tooltip | "= Gross Revenue x (1 - Return Rate)" |
| Visual treatment | Glass card with `--amber` left border |

---

#### 1.3 Service Revenue

**Section intro concept card** (collapsed):
- "Revenue from wellness services: LED therapy, blood panels, workshops. 17% of Y1 mix, 50-65% gross margin."

**1.3.1 LED Therapy Sessions/Month**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `led_sessions` |
| Label | "LED Therapy Sessions / Month" |
| Help text | "Number of LED therapy sessions booked and delivered per month." |
| Placeholder | `40` |
| Default value | `40` |
| Min | `0` |
| Max | `500` |
| Step | `1` |
| Validation | Integer >= 0 |
| Feeds into | `led_revenue`, `total_service_revenue`, `led_practitioner_fees`, `total_service_sessions` |

**1.3.2 LED Therapy Avg Price**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `led_price` |
| Label | "LED Therapy Avg Price" |
| Placeholder | `45` |
| Default value | `45` |
| Min | `1` |
| Max | `500` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Feeds into | `led_revenue`, `total_service_revenue` |

**1.3.3 Blood Panel Facilitations/Month**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `blood_sessions` |
| Label | "Blood Panel Facilitations / Month" |
| Help text | "Number of blood panel sessions facilitated per month." |
| Placeholder | `20` |
| Default value | `20` |
| Min | `0` |
| Max | `200` |
| Step | `1` |
| Feeds into | `blood_revenue`, `total_service_revenue`, `blood_practitioner_fees`, `total_service_sessions` |

**1.3.4 Blood Panel Avg Price**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `blood_price` |
| Label | "Blood Panel Avg Price" |
| Placeholder | `120` |
| Default value | `120` |
| Min | `1` |
| Max | `1000` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Feeds into | `blood_revenue`, `total_service_revenue` |

**1.3.5 Events/Workshops Per Month**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `event_count` |
| Label | "Events / Workshops Per Month" |
| Placeholder | `3` |
| Default value | `3` |
| Min | `0` |
| Max | `30` |
| Step | `1` |
| Feeds into | `event_revenue`, `total_service_revenue`, `event_facilitator_fees`, `total_service_sessions` |

**1.3.6 Event Avg Ticket Price**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `event_ticket_price` |
| Label | "Event Avg Ticket Price" |
| Placeholder | `35` |
| Default value | `35` |
| Min | `0` |
| Max | `500` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Feeds into | `event_revenue` |

**1.3.7 Avg Attendees Per Event**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `event_attendees` |
| Label | "Avg Attendees Per Event" |
| Placeholder | `20` |
| Default value | `20` |
| Min | `0` |
| Max | `200` |
| Step | `1` |
| Feeds into | `event_revenue`, `total_service_sessions` |

**1.3.8 LED Revenue (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `led_revenue` |
| Label | "LED Therapy Revenue" |
| Formula | `led_sessions * led_price` |
| Display format | `EUR X,XXX` |

**1.3.9 Blood Panel Revenue (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `blood_revenue` |
| Label | "Blood Panel Revenue" |
| Formula | `blood_sessions * blood_price` |
| Display format | `EUR X,XXX` |

**1.3.10 Event Revenue (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `event_revenue` |
| Label | "Event / Workshop Revenue" |
| Formula | `event_count * event_attendees * event_ticket_price` |
| Display format | `EUR X,XXX` |

**1.3.11 Total Service Revenue (calculated subtotal)**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_service_revenue` |
| Label | "Total Service Revenue" |
| Formula | `led_revenue + blood_revenue + event_revenue` |
| Display format | `EUR X,XXX` |
| Visual treatment | Glass card with `--amber` left border |

---

#### 1.4 Physical Space Revenue

**Section intro concept card** (expanded by default -- important framing):
- Collapsed: "Physical space revenue is Phase 2 (seed-funded). Pre-seed defaults are EUR 0."
- Expanded: Full explanation of space as marketing cost, not retail business. Forward Health comparison. "Set defaults to zero for your pre-seed P&L."
- Icon: Building outline
- Color accent: `--stone` left border (indicates Phase 2 / future)

**1.4.1 Monthly Bar/Cafe Revenue**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `bar_revenue` |
| Label | "Monthly Bar / Cafe Revenue" |
| Help text | "Revenue from functional beverages and longevity elixirs. Phase 2 only -- set to EUR 0 for pre-seed." |
| Placeholder | `0` |
| Default value | `0` |
| Min | `0` |
| Max | `50000` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Feeds into | `total_space_revenue`, `ingredient_cogs` |

- Warning callout (collapsed, severity: warning, trigger: `bar_revenue > 0`): "Physical space is Phase 2 (seed-funded). Including space revenue in a pre-seed P&L may concern investors. Consider setting to EUR 0."

**1.4.2 Monthly Space Rental Income**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `rental_revenue` |
| Label | "Monthly Space Rental Income" |
| Help text | "Income from renting space for private events, brand activations, community meetups." |
| Placeholder | `0` |
| Default value | `0` |
| Min | `0` |
| Max | `20000` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Feeds into | `total_space_revenue` |

**1.4.3 Total Space Revenue (calculated subtotal)**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_space_revenue` |
| Label | "Total Physical Space Revenue" |
| Formula | `bar_revenue + rental_revenue` |
| Display format | `EUR X,XXX` |
| Visual treatment | Glass card with `--stone` left border (Phase 2 indicator) |

---

#### 1.5 Total Monthly Revenue

| Property | Value |
|----------|-------|
| Modality | `calculated-milestone` |
| Field ID | `total_monthly_revenue` |
| Label | "TOTAL MONTHLY REVENUE" |
| Formula | `total_sub_revenue + net_product_revenue + total_service_revenue + total_space_revenue` |
| Display format | `EUR XX,XXX` (large, Space Mono, bold 700) |
| Formula tooltip | "= Subscriptions + Products (net) + Services + Space" |
| Visual treatment | `glass-elevated` card, full width, `--sage` top border (4px), larger text (1.5em for value), background subtle sage gradient |
| Positive styling | `--sage` text color for the value |
| Sub-display | Percentage breakdown bar showing each stream's contribution (colored segments: amber=subs, terra=products, sage=services, stone=space) |

---

#### 1.6 Total Annual Revenue

| Property | Value |
|----------|-------|
| Modality | `calculated-milestone` |
| Field ID | `total_annual_revenue` |
| Label | "TOTAL ANNUAL REVENUE (run-rate)" |
| Formula | `total_monthly_revenue * 12` |
| Display format | `EUR XXX,XXX` |
| Formula tooltip | "= Monthly Revenue x 12 (run-rate, not ramp-adjusted)" |
| Visual treatment | Same as 1.5 but with info note below |
| Info note | "This is a run-rate (current month x 12). Your actual Year 1 total will be lower because revenue ramps from near-zero. See Phase 5 for the ramp model." |

---

### Phase 2: Cost of Goods Sold (COGS)

**Phase intro concept card** (expanded by default):
- "COGS is the direct cost of delivering your product or service. If you sold zero units, these costs would be zero."
- Expanded: Explanation of blended gross margin target (72% Y1, 80% Y3), why the mix shift matters.

#### 2.1 Digital COGS

**2.1.1 Hosting & Infrastructure**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `hosting_cost` |
| Label | "Hosting & Infrastructure" |
| Help text | "Cloud servers, databases, bandwidth. Scales sub-linearly with users. EUR 200-500/mo typical for sub-2,000 users." |
| Placeholder | `350` |
| Default value | `350` |
| Min | `0` |
| Max | `10000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Decimal places | 2 |
| Feeds into | `total_digital_cogs` |

**2.1.2 API Costs**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `api_costs` |
| Label | "API Costs (Wearables, AI/ML, etc.)" |
| Help text | "Third-party API costs: wearable data sync, personalization models, push notifications." |
| Placeholder | `200` |
| Default value | `200` |
| Min | `0` |
| Max | `10000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Decimal places | 2 |
| Feeds into | `total_digital_cogs` |

**2.1.3 Payment Processing Fees**

| Property | Value |
|----------|-------|
| Modality | `input-percentage` |
| Field ID | `stripe_rate` |
| Label | "Payment Processing Fee Rate" |
| Help text | "Stripe: 1.5% + EUR 0.25 (EU cards) / 2.9% + EUR 0.25 (non-EU). Blended ~2.9% including per-tx fee." |
| Placeholder | `2.9` |
| Default value | `2.9` |
| Min | `0` |
| Max | `10` |
| Step | `0.1` |
| Suffix | "%" |
| Slider | Yes, 0-10 range |
| Feeds into | `payment_processing_fees`, `total_digital_cogs` |

**Payment Processing Fees (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `payment_processing_fees` |
| Label | "Payment Processing Fees" |
| Formula | `total_monthly_revenue * (stripe_rate / 100)` |
| Display format | `EUR X,XXX` |
| Formula tooltip | "= Total Revenue x Fee Rate" |

**2.1.4 Total Digital COGS (calculated subtotal)**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_digital_cogs` |
| Label | "Total Digital COGS" |
| Formula | `hosting_cost + api_costs + payment_processing_fees` |
| Display format | `EUR X,XXX` |
| Visual treatment | Glass card with `--terra` left border (cost indicator) |

---

#### 2.2 Product COGS

**2.2.1 Wholesale Cost Percentage**

| Property | Value |
|----------|-------|
| Modality | `input-percentage` |
| Field ID | `wholesale_pct` |
| Label | "Wholesale Cost (% of Retail Price)" |
| Help text | "What you pay suppliers as a percentage of your selling price. Typical wellness products: 45-60%." |
| Placeholder | `52` |
| Default value | `52` |
| Min | `0` |
| Max | `100` |
| Step | `1` |
| Suffix | "%" |
| Slider | Yes, 0-100 range |
| Feeds into | `product_wholesale_cogs` |

**Wholesale COGS (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `product_wholesale_cogs` |
| Label | "Wholesale COGS" |
| Formula | `product_units * (avg_product_price * wholesale_pct / 100)` |
| Display format | `EUR X,XXX` |

**2.2.2 Shipping Cost Per Unit**

| Property | Value |
|----------|-------|
| Modality | `input-currency-per-unit` |
| Field ID | `shipping_per_unit` |
| Label | "Shipping Cost Per Unit" |
| Help text | "DHL domestic: EUR 3-5/parcel. Only applies to e-commerce orders (~70% of units)." |
| Placeholder | `4` |
| Default value | `4` |
| Min | `0` |
| Max | `50` |
| Prefix | "EUR" |
| Suffix | "/unit" |
| Decimal places | 2 |
| Feeds into | `product_shipping_cogs` |

**E-commerce Ratio (calculated helper)**
- 70% of units ship (e-commerce); 30% are in-space retail with EUR 0 shipping.
- This ratio is hardcoded at 0.70 but shown as an info tooltip: "Assumes 70% e-commerce / 30% in-space retail."

**Shipping COGS (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `product_shipping_cogs` |
| Label | "Shipping Costs" |
| Formula | `(product_units * 0.70) * shipping_per_unit` |
| Display format | `EUR XXX` |

**2.2.3 Packaging Cost Per Unit**

| Property | Value |
|----------|-------|
| Modality | `input-currency-per-unit` |
| Field ID | `packaging_per_unit` |
| Label | "Packaging Cost Per Unit" |
| Help text | "Custom branded packaging: EUR 1.50-3.00/unit. Basic: EUR 0.50-1.00/unit." |
| Placeholder | `1.50` |
| Default value | `1.50` |
| Min | `0` |
| Max | `20` |
| Prefix | "EUR" |
| Suffix | "/unit" |
| Decimal places | 2 |
| Feeds into | `product_packaging_cogs` |

**Packaging COGS (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `product_packaging_cogs` |
| Label | "Packaging Costs" |
| Formula | `product_units * packaging_per_unit` |
| Display format | `EUR XXX` |

**2.2.4 Total Product COGS (calculated subtotal)**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_product_cogs` |
| Label | "Total Product COGS" |
| Formula | `product_wholesale_cogs + product_shipping_cogs + product_packaging_cogs` |
| Display format | `EUR X,XXX` |
| Visual treatment | Glass card with `--terra` left border |
| Sub-display | "Product Gross Margin: XX%" calculated as `((net_product_revenue - total_product_cogs) / net_product_revenue) * 100` |

- Warning callout (dynamic, severity: warning, trigger: product gross margin < 40): "Product margin is below the 40-55% target. Consider adjusting wholesale cost, shipping, or average price."

---

#### 2.3 Service COGS

**2.3.1 LED Therapy Practitioner Cost/Session**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `led_practitioner_cost` |
| Label | "LED Practitioner Cost / Session" |
| Help text | "Freelancer/contractor fee per LED therapy session." |
| Placeholder | `18` |
| Default value | `18` |
| Min | `0` |
| Max | `200` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Feeds into | `led_practitioner_fees` |

**2.3.2 Blood Panel Lab + Practitioner Cost**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `blood_practitioner_cost` |
| Label | "Blood Panel Lab + Practitioner Cost" |
| Help text | "Combined lab processing fee + practitioner fee per blood panel session." |
| Placeholder | `55` |
| Default value | `55` |
| Min | `0` |
| Max | `500` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Feeds into | `blood_practitioner_fees` |

**2.3.3 Event Facilitator Cost/Event**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `event_facilitator_cost` |
| Label | "Event Facilitator Cost / Event" |
| Help text | "Facilitator/speaker fee per event or workshop." |
| Placeholder | `200` |
| Default value | `200` |
| Min | `0` |
| Max | `2000` |
| Prefix | "EUR" |
| Decimal places | 2 |
| Feeds into | `event_facilitator_fees` |

**Practitioner Fees (calculated fields)**

| Field ID | Formula |
|----------|---------|
| `led_practitioner_fees` | `led_sessions * led_practitioner_cost` |
| `blood_practitioner_fees` | `blood_sessions * blood_practitioner_cost` |
| `event_facilitator_fees` | `event_count * event_facilitator_cost` |
| `total_practitioner_fees` | `led_practitioner_fees + blood_practitioner_fees + event_facilitator_fees` |

**2.3.4 Consumables (Per Session)**

| Property | Value |
|----------|-------|
| Modality | `input-currency-per-unit` |
| Field ID | `consumable_per_session` |
| Label | "Avg Consumable Cost / Session" |
| Help text | "Blood draw kits, eye protection, sanitization, event materials. Averaged across service types." |
| Placeholder | `4` |
| Default value | `4` |
| Min | `0` |
| Max | `50` |
| Prefix | "EUR" |
| Suffix | "/session" |
| Decimal places | 2 |
| Feeds into | `total_consumables` |

**Total Service Sessions (calculated helper)**

| Property | Value |
|----------|-------|
| Field ID | `total_service_sessions` |
| Formula | `led_sessions + blood_sessions + (event_count * event_attendees)` |
| Note | Event attendees count because consumables are per-person for events |

**Total Consumables (calculated)**

| Property | Value |
|----------|-------|
| Field ID | `total_consumables` |
| Formula | `total_service_sessions * consumable_per_session` |
| Display format | `EUR XXX` |

**2.3.5 Equipment Depreciation (Service)**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `service_equip_depreciation` |
| Label | "Service Equipment Depreciation" |
| Help text | "Monthly depreciation of service equipment (LED devices, etc.). EUR 12K over 5 years = EUR 200/mo." |
| Placeholder | `200` |
| Default value | `200` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Decimal places | 2 |
| Feeds into | `total_service_cogs` |

**2.3.6 Total Service COGS (calculated subtotal)**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_service_cogs` |
| Label | "Total Service COGS" |
| Formula | `total_practitioner_fees + total_consumables + service_equip_depreciation` |
| Display format | `EUR X,XXX` |
| Visual treatment | Glass card with `--terra` left border |
| Sub-display | "Service Gross Margin: XX%" calculated as `((total_service_revenue - total_service_cogs) / total_service_revenue) * 100` |

---

#### 2.4 Space COGS

**2.4.1 Ingredients & Supplies (% of Bar Revenue)**

| Property | Value |
|----------|-------|
| Modality | `input-percentage` |
| Field ID | `ingredient_rate` |
| Label | "Ingredient Cost (% of Bar Revenue)" |
| Help text | "Food cost ratio. Bars/cafes target 30-35%. Pre-seed: EUR 0 because bar revenue is EUR 0." |
| Placeholder | `32` |
| Default value | `32` |
| Min | `0` |
| Max | `100` |
| Step | `1` |
| Suffix | "%" |
| Slider | Yes |
| Feeds into | `ingredient_cogs` |

**Ingredient COGS (calculated)**

| Property | Value |
|----------|-------|
| Field ID | `ingredient_cogs` |
| Formula | `bar_revenue * (ingredient_rate / 100)` |
| Display format | `EUR X,XXX` |

**2.4.2 Direct Utilities (Space)**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `space_utilities` |
| Label | "Direct Utilities (Space)" |
| Help text | "Incremental electricity, water, gas from operating bar/service space. EUR 0 pre-seed." |
| Placeholder | `0` |
| Default value | `0` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Decimal places | 2 |
| Feeds into | `total_space_cogs` |

**2.4.3 Total Space COGS (calculated subtotal)**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_space_cogs` |
| Label | "Total Space COGS" |
| Formula | `ingredient_cogs + space_utilities` |
| Display format | `EUR X,XXX` |
| Visual treatment | Glass card with `--stone` left border (Phase 2) |

---

#### 2.5 Total COGS, Gross Profit, and Gross Margin

**2.5.1 Total COGS**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_cogs` |
| Label | "TOTAL COGS" |
| Formula | `total_digital_cogs + total_product_cogs + total_service_cogs + total_space_cogs` |
| Display format | `EUR X,XXX` (Space Mono bold) |
| Visual treatment | Glass card, `--terra` top border (4px), slightly larger text |

**2.5.2 Gross Profit**

| Property | Value |
|----------|-------|
| Modality | `calculated-milestone` |
| Field ID | `gross_profit` |
| Label | "GROSS PROFIT" |
| Formula | `total_monthly_revenue - total_cogs` |
| Display format | `EUR X,XXX` (large, Space Mono bold 700) |
| Visual treatment | `glass-elevated` card, full width, dynamic border color |
| Positive styling | `--sage` top border + value text color |
| Negative styling | `--terra` top border + value text color |

**2.5.3 Gross Margin Percentage**

| Property | Value |
|----------|-------|
| Modality | `calculated-milestone` |
| Field ID | `gross_margin` |
| Label | "GROSS MARGIN" |
| Formula | `total_monthly_revenue > 0 ? (gross_profit / total_monthly_revenue) * 100 : 0` |
| Display format | `XX.X%` (one decimal, Space Mono bold) |
| Visual treatment | Displayed within the Gross Profit card as a secondary metric |
| Color rules | >= 72%: `--sage` | 50-71%: `--amber` | < 50%: `--terra` |

- Warning callout (dynamic, severity: warning, trigger: `gross_margin > 95`): "Double-check: most businesses have some direct costs. A 95%+ gross margin may indicate missing COGS items."
- Warning callout (dynamic, severity: warning, trigger: `gross_margin < 30`): "This margin may concern investors. SaaS benchmarks are 70-85%; marketplace benchmarks are 30-50%."

---

### Phase 3: Operating Expenses (OpEx)

**Phase intro concept card** (expanded):
- "Operating expenses are all costs NOT directly tied to delivering a product. These are the costs you pay even if you sell nothing."
- Expanded: Explanation of burn rate, runway, and why OpEx exceeds gross profit at pre-seed.

#### 3.1 Marketing & Acquisition

**3.1.1 Monthly Paid Advertising**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `paid_ads` |
| Label | "Monthly Paid Advertising" |
| Help text | "Google Ads, Meta Ads, and other paid channels." |
| Placeholder | `800` |
| Default value | `800` |
| Min | `0` |
| Max | `50000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_marketing` |

**3.1.2 Content Creation Tools**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `content_tools` |
| Label | "Content Creation Tools" |
| Placeholder | `150` |
| Default value | `150` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_marketing` |

**3.1.3 Influencer/Partnership Costs**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `influencer_costs` |
| Label | "Influencer / Partnership Costs" |
| Placeholder | `300` |
| Default value | `300` |
| Min | `0` |
| Max | `20000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_marketing` |

**3.1.4 Other Marketing Spend**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `other_marketing` |
| Label | "Other Marketing Spend" |
| Placeholder | `150` |
| Default value | `150` |
| Min | `0` |
| Max | `10000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_marketing` |

**3.1.5 Total Marketing Spend (calculated)**

| Property | Value |
|----------|-------|
| Field ID | `total_marketing` |
| Formula | `paid_ads + content_tools + influencer_costs + other_marketing` |
| Display format | `EUR X,XXX` |

**3.1.6 New Customers Acquired / Month**

| Property | Value |
|----------|-------|
| Modality | `input-integer` |
| Field ID | `new_customers_month` |
| Label | "New Paying Customers / Month" |
| Help text | "Total new paying subscribers acquired this month (across all tiers)." |
| Placeholder | `25` |
| Default value | `25` |
| Min | `0` |
| Max | `1000` |
| Step | `1` |
| Feeds into | `calculated_cac` |

**3.1.7 Calculated CAC (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `calculated_cac` |
| Label | "Customer Acquisition Cost (CAC)" |
| Formula | `new_customers_month > 0 ? total_marketing / new_customers_month : 0` |
| Display format | `EUR XX` |
| Formula tooltip | "= Total Marketing Spend / New Customers" |

- Warning callout (dynamic, severity: info, trigger: `calculated_cac < 10 && calculated_cac > 0`): "Organic-only acquisition is difficult to scale. A CAC below EUR 10 may not be sustainable."
- Warning callout (dynamic, severity: warning, trigger: `calculated_cac > 200`): "This CAC may not be sustainable at your price point. Target: EUR 40-80."

---

#### 3.2 Rent & Facilities

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `rent` |
| Label | "Rent & Facilities" |
| Help text | "Co-working or office space. Pre-seed: ~EUR 500/mo. Phase 2 wellness space: EUR 5,800-7,300/mo." |
| Placeholder | `500` |
| Default value | `500` |
| Min | `0` |
| Max | `20000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_opex` |

- Concept card (collapsed): "Pre-seed, your rent is minimal. The Berlin space is Phase 2 (seed-funded). Frame the space as a marketing cost, not retail."

---

#### 3.3 Founder Salaries

**3.3.1 Founder 1 (Timu) Gross Monthly Salary**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `founder1_salary` |
| Label | "Founder 1 (Timu) Gross Salary" |
| Help text | "Monthly gross salary. EUR 3,800 is below Berlin tech median (EUR 75K/yr), signaling discipline." |
| Placeholder | `3800` |
| Default value | `3800` |
| Min | `0` |
| Max | `15000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_founder_comp` |

**3.3.2 Founder 2 (Daria) Gross Monthly Salary**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `founder2_salary` |
| Label | "Founder 2 (Daria) Gross Salary" |
| Placeholder | `3800` |
| Default value | `3800` |
| Min | `0` |
| Max | `15000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_founder_comp` |

**3.3.3 Employer-Side Cost Multiplier**

| Property | Value |
|----------|-------|
| Modality | `input-percentage` |
| Field ID | `employer_multiplier` |
| Label | "Employer Cost Multiplier" |
| Help text | "Social security, health insurance, etc. add 20-25% on top of gross. 125% = gross x 1.25." |
| Placeholder | `125` |
| Default value | `125` |
| Min | `100` |
| Max | `150` |
| Step | `1` |
| Suffix | "%" |
| Slider | Yes, 100-150 range |
| Feeds into | `total_founder_comp` |

**3.3.4 Total Founder Compensation (calculated subtotal)**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_founder_comp` |
| Label | "Total Founder Compensation (Fully Loaded)" |
| Formula | `(founder1_salary + founder2_salary) * (employer_multiplier / 100)` |
| Display format | `EUR X,XXX` |
| Visual treatment | Glass card with `--amber` left border |

- Warning callout (dynamic, severity: warning, trigger: `founder1_salary === 0 || founder2_salary === 0`): "Investors will add salary costs to their own model anyway. EUR 0 founder salary is a red flag, not a strength."
- Warning callout (dynamic, severity: info, trigger: `founder1_salary > 6000 || founder2_salary > 6000`): "Founder salaries above EUR 6,000/mo at pre-seed may raise questions about capital discipline."

---

#### 3.4 Technology (Non-COGS)

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `technology_opex` |
| Label | "Technology (Non-COGS)" |
| Help text | "Dev tools, staging environments, project management, code repos. NOT hosting or APIs (those are COGS)." |
| Placeholder | `1000` |
| Default value | `1000` |
| Min | `0` |
| Max | `20000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_opex` |

---

#### 3.5 Legal & Compliance

**3.5.1 GmbH Maintenance (annualized monthly)**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `gmbh_maintenance` |
| Label | "GmbH Maintenance" |
| Placeholder | `170` |
| Default value | `170` |
| Min | `0` |
| Max | `2000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_legal` |

**3.5.2 GDPR/Data Compliance**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `gdpr_cost` |
| Label | "GDPR / Data Compliance" |
| Placeholder | `250` |
| Default value | `250` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_legal` |

**3.5.3 Health Regulation Compliance**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `health_reg_cost` |
| Label | "Health Regulation Compliance" |
| Placeholder | `100` |
| Default value | `100` |
| Min | `0` |
| Max | `3000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_legal` |

**3.5.4 Legal Advisory Retainer**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `legal_advisory` |
| Label | "Legal Advisory Retainer" |
| Placeholder | `200` |
| Default value | `200` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_legal` |

**3.5.5 Total Legal & Compliance (calculated)**

| Property | Value |
|----------|-------|
| Field ID | `total_legal` |
| Formula | `gmbh_maintenance + gdpr_cost + health_reg_cost + legal_advisory` |
| Display format | `EUR XXX` |

---

#### 3.6 Insurance

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `insurance` |
| Label | "Insurance" |
| Help text | "Betriebshaftpflicht + product liability. Pre-seed: ~EUR 200/mo. Phase 2: ~EUR 400/mo." |
| Placeholder | `200` |
| Default value | `200` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_opex` |

---

#### 3.7 Professional Services

**3.7.1 Monthly Bookkeeping/Steuerberater**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `bookkeeping` |
| Label | "Bookkeeping / Steuerberater" |
| Placeholder | `400` |
| Default value | `400` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_professional` |

**3.7.2 Advisory Fees**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `advisory_fees` |
| Label | "Advisory Fees" |
| Placeholder | `100` |
| Default value | `100` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_professional` |

**3.7.3 Total Professional Services (calculated)**

| Property | Value |
|----------|-------|
| Field ID | `total_professional` |
| Formula | `bookkeeping + advisory_fees` |
| Display format | `EUR XXX` |

---

#### 3.8 Software & Tools (Non-Development)

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `software_tools` |
| Label | "Software & Tools (Non-Dev)" |
| Help text | "Slack, Notion, Figma, email marketing, CRM, analytics. ~EUR 50-100/person/mo." |
| Placeholder | `600` |
| Default value | `600` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_opex` |

---

#### 3.9 Total OpEx and EBITDA

**3.9.1 Total Operating Expenses**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `total_opex` |
| Label | "TOTAL OPERATING EXPENSES" |
| Formula | `total_marketing + rent + total_founder_comp + technology_opex + total_legal + insurance + total_professional + software_tools` |
| Display format | `EUR XX,XXX` (Space Mono bold) |
| Visual treatment | Glass card, `--terra` top border (4px) |

**3.9.2 EBITDA**

| Property | Value |
|----------|-------|
| Modality | `calculated-milestone` |
| Field ID | `ebitda` |
| Label | "EBITDA" |
| Formula | `gross_profit - total_opex` |
| Display format | `EUR XX,XXX` or `-EUR XX,XXX` (large, Space Mono bold 700) |
| Visual treatment | `glass-elevated` card, full width, dynamic border |
| Positive styling | `--sage` top border + value text |
| Negative styling | `--terra` top border + value text, prefix with "-" |
| Sub-display | "EBITDA Margin: XX.X%" = `(ebitda / total_monthly_revenue) * 100` |

- Concept card (collapsed): "EBITDA tells you whether core operations generate or burn money, independent of financing and depreciation."
- Warning callout (collapsed, severity: info): "Negative EBITDA is expected at pre-seed. The trajectory (improving monthly) matters more than the absolute number."

---

### Phase 4: Below the Line

**Phase intro concept card** (expanded):
- "Items below the line relate to financing decisions, accounting conventions, and taxes -- not daily operations."

#### 4.1 Depreciation

**4.1.1 Space Buildout Depreciation**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `space_depreciation` |
| Label | "Space Buildout Depreciation" |
| Help text | "Monthly depreciation of space buildout. EUR 0 pre-seed. Phase 2: EUR 50K over 6 years = EUR 700/mo." |
| Placeholder | `0` |
| Default value | `0` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_depreciation` |

**4.1.2 Equipment Depreciation**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `equipment_depreciation` |
| Label | "Equipment Depreciation" |
| Help text | "IT hardware, furniture. EUR 3K over 3 years = EUR 85/mo." |
| Placeholder | `85` |
| Default value | `85` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_depreciation` |

**Note**: Service equipment depreciation (`service_equip_depreciation`) is already in COGS (2.3.5). Do NOT double-count it here.

**4.1.3 Total Monthly Depreciation (calculated)**

| Property | Value |
|----------|-------|
| Field ID | `total_depreciation` |
| Formula | `space_depreciation + equipment_depreciation` |
| Display format | `EUR XXX` |
| Note | This is the NON-COGS depreciation only. COGS depreciation is in Phase 2. |

---

#### 4.2 Amortization

**4.2.1 App/MVP Development Amortization**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `app_amortization` |
| Label | "App / MVP Development Amortization" |
| Help text | "Monthly amortization of capitalized dev costs. EUR 100K over 3 years = EUR 2,800/mo." |
| Placeholder | `2800` |
| Default value | `2800` |
| Min | `0` |
| Max | `10000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_amortization` |

**4.2.2 Patents/IP Amortization**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `ip_amortization` |
| Label | "Patents / IP Amortization" |
| Placeholder | `0` |
| Default value | `0` |
| Min | `0` |
| Max | `5000` |
| Prefix | "EUR" |
| Suffix | "/mo" |
| Feeds into | `total_amortization` |

**4.2.3 Total Monthly Amortization (calculated)**

| Property | Value |
|----------|-------|
| Field ID | `total_amortization` |
| Formula | `app_amortization + ip_amortization` |
| Display format | `EUR X,XXX` |

---

#### 4.3 Interest Expense

**4.3.1 Loan Principal**

| Property | Value |
|----------|-------|
| Modality | `input-currency` |
| Field ID | `loan_principal` |
| Label | "Loan Principal (Wandeldarlehen)" |
| Help text | "Total convertible loan amount. Alche: EUR 500,000." |
| Placeholder | `500000` |
| Default value | `500000` |
| Min | `0` |
| Max | `5000000` |
| Prefix | "EUR" |
| Thousand separators | Yes |
| Feeds into | `monthly_interest` |

**4.3.2 Annual Interest Rate**

| Property | Value |
|----------|-------|
| Modality | `input-percentage` |
| Field ID | `annual_interest_rate` |
| Label | "Annual Interest Rate" |
| Help text | "German convertible loans typically carry 1-5% per year. 3% is standard." |
| Placeholder | `3` |
| Default value | `3` |
| Min | `0` |
| Max | `20` |
| Step | `0.1` |
| Suffix | "%" |
| Slider | Yes, 0-10 range visible |
| Feeds into | `monthly_interest` |

**4.3.3 Monthly Interest Expense (calculated)**

| Property | Value |
|----------|-------|
| Field ID | `monthly_interest` |
| Formula | `(loan_principal * (annual_interest_rate / 100)) / 12` |
| Display format | `EUR X,XXX` |

---

#### 4.4 German Corporate Taxes

**4.4.1 Tax Rate**

| Property | Value |
|----------|-------|
| Modality | `input-percentage` |
| Field ID | `corp_tax_rate` |
| Label | "Combined Corporate Tax Rate" |
| Help text | "Koerperschaftsteuer (15%) + Soli (0.825%) + Gewerbesteuer Berlin (~14.35%) = ~30%." |
| Placeholder | `30` |
| Default value | `30` |
| Min | `0` |
| Max | `50` |
| Step | `0.5` |
| Suffix | "%" |
| Slider | Yes, 0-50 range |
| Feeds into | `corp_tax_amount` |

- Concept card (expanded): Three-component breakdown of German corporate tax with Koerperschaftsteuer, Solidaritaetszuschlag, and Gewerbesteuer explained.

**4.4.2 Corporate Tax Amount (calculated)**

| Property | Value |
|----------|-------|
| Modality | `calculated-field` |
| Field ID | `corp_tax_amount` |
| Label | "Corporate Tax" |
| Formula | `ebt > 0 ? ebt * (corp_tax_rate / 100) : 0` |
| Display format | `EUR X,XXX` or `EUR 0` |
| Info tooltip (when EUR 0) | "Tax is EUR 0 because Earnings Before Tax is negative. These losses carry forward (Verlustvortrag) to reduce future tax." |

---

#### 4.5 One-Time Startup Costs

**No input fields.** This is a classification guide rendered as a `narrative-block` with a reference table.

| Property | Value |
|----------|-------|
| Modality | `data-table` (read-only) |
| Content | The startup cost table from content map (GmbH formation, legal setup, MVP, space buildout, equipment, branding, initial inventory) with columns: Item, Estimated Cost, Treatment |
| Visual treatment | Standard glass card, `--stone` left border |
| Note below table | "These costs are already reflected in Depreciation (4.1) and Amortization (4.2) above. Do not add them as separate OpEx items." |

---

#### 4.6 Net Profit / Net Loss

**4.6.1 Earnings Before Tax (EBT) -- calculated**

| Property | Value |
|----------|-------|
| Modality | `calculated-subtotal` |
| Field ID | `ebt` |
| Label | "EARNINGS BEFORE TAX (EBT)" |
| Formula | `ebitda - total_depreciation - total_amortization - monthly_interest` |
| Display format | `EUR XX,XXX` or `-EUR XX,XXX` |
| Positive styling | `--sage` |
| Negative styling | `--terra` |

**4.6.2 Net Profit / Net Loss -- THE BOTTOM LINE**

| Property | Value |
|----------|-------|
| Modality | `calculated-milestone` |
| Field ID | `net_profit_loss` |
| Label | "NET PROFIT / NET LOSS" |
| Formula | `ebt - corp_tax_amount` |
| Display format | `EUR XX,XXX` or `-EUR XX,XXX` (largest text on page, 2em, Space Mono bold 700) |
| Visual treatment | `glass-elevated` card, full width, heavy dynamic border (6px top) |
| Positive styling | `--sage` border + text, label says "NET PROFIT" |
| Negative styling | `--terra` border + text, label says "NET LOSS" |
| Sub-displays | (1) Net Margin: `(net_profit_loss / total_monthly_revenue) * 100` as XX.X% (2) Monthly Burn Rate: `abs(net_profit_loss)` when negative (3) Runway: `500000 / abs(net_profit_loss)` months when negative |

- Concept card (collapsed): "Negative net profit is normal and expected at pre-seed. The trajectory matters more than the absolute number."

---

### Phase 5: The Story Your P&L Tells

**All content in Phase 5 is read-only narrative. No input fields.**

#### 5.1 Burn Rate Calculation

| Property | Value |
|----------|-------|
| Modality | `narrative-block` |
| Content | Burn rate explanation with gross vs. net burn definitions |
| Dynamic elements | Auto-populate with user's calculated values: gross burn = `total_cogs + total_opex`, net burn = `total_cogs + total_opex + total_depreciation + total_amortization + monthly_interest - total_monthly_revenue`, runway = `500000 / abs(net_burn)` |
| Visual treatment | Prose with two inline `calculated-field` displays showing the user's actual burn rate and runway |

#### 5.2 Month-by-Month Path to Break-Even

| Property | Value |
|----------|-------|
| Modality | `data-table` (read-only, static reference) |
| Content | The 12-month table from content map (M0-M12 with milestones, revenue, burn, net loss, cumulative cash used) |
| Visual treatment | Full-width glass card, Space Mono for numbers, zebra-striped rows, M12 row highlighted with `--sage` background |

#### 5.3 The 3 Numbers Investors Look At First

| Property | Value |
|----------|-------|
| Modality | `narrative-block` with three `calculated-milestone` cards |
| Card 1 | "Gross Margin" -- show user's calculated `gross_margin` with benchmark comparison (SaaS 70-85%, marketplace 30-50%) |
| Card 2 | "Burn Rate & Runway" -- show user's net burn and runway, compared to standard 12-18 month pre-seed runway |
| Card 3 | "Unit Economics (LTV:CAC)" -- calculated from user's ARPU and CAC if available; otherwise show target range |

#### 5.4 How to Present a Pre-Revenue P&L

| Property | Value |
|----------|-------|
| Modality | `narrative-block` |
| Content | Do's and don'ts list from content map |
| Visual treatment | Two-column layout on desktop: left column "Do" items with `--sage` checkmarks, right column "Don't" items with `--terra` x-marks |

#### 5.5 Red Flags Investors Spot

| Property | Value |
|----------|-------|
| Modality | Seven `warning-callout` components, all expanded by default |
| Each callout | Title (red flag name), description, "Alche fix" |
| Dynamic enhancement | For each red flag, check user's inputs and show a status indicator: green checkmark if the user's P&L avoids this red flag, amber warning if it might trigger it |
| Red Flag 1 trigger | Revenue ramp: not dynamically checkable (static warning) |
| Red Flag 2 trigger | `total_cogs < total_monthly_revenue * 0.05` (missing COGS) |
| Red Flag 3 trigger | `founder1_salary === 0 || founder2_salary === 0` |
| Red Flag 4 trigger | Not dynamically checkable (static warning) |
| Red Flag 5 trigger | `ebt < 0 && corp_tax_amount > 0` (tax on losses) |
| Red Flag 6 trigger | Not dynamically checkable (static warning -- no churn field in this simplified P&L) |
| Red Flag 7 trigger | `space_depreciation > 0 && bar_revenue === 0` (space costs without space revenue) |

---

### Glossary

All 30 terms from Agent 1's glossary. Each term rendered as:

| Property | Value |
|----------|-------|
| Modality | Glossary panel entry |
| Term | Bold, Outfit 500, `--deep` |
| Definition | Outfit 300, `--deep-70` |
| Alche-specific note | Where applicable, italicized Alche-specific value (e.g., "Alche target: EUR 49/mo ARPU") in `--amber` |

Full term list (alphabetical): ARPU, ARR, Amortization, Break-even, Burn Rate, CAC, Churn, COGS, Contribution Margin, Convertible Note, Depreciation, EBITDA, Fixed Costs, Founder Draw, Gewerbesteuer, GmbH, Gross Margin, Gross Profit, Koerperschaftsteuer, LTV, MRR, Net Profit/Loss, OpEx, Pre-seed, Revenue, Runway, SAFE, Soli, Unit Economics, Valuation Cap, Variable Costs.

---

## 2. CALCULATION ENGINE SPECIFICATION

Every calculation chain is mapped explicitly below. Agent 3 must implement these as a reactive JavaScript engine where changing any input triggers an immediate cascade through all dependent calculations.

### 2.1 Architecture Overview

```
CALCULATION GRAPH (directed acyclic):

INPUT LAYER (user-editable fields)
    |
    v
INTERMEDIATE CALCULATIONS (sub-totals per category)
    |
    v
MILESTONE CALCULATIONS (Gross Profit, EBITDA, Net P/L)
    |
    v
DERIVED METRICS (margins, burn rate, runway, CAC)
```

**Implementation pattern**: Use a single `recalculate()` function that runs the full chain on ANY input change. At ~60 fields, this is computationally trivial and avoids the complexity of selective recalculation. Debounce input events by 100ms to avoid flickering during rapid typing.

### 2.2 Phase 1 Calculations (Revenue)

```javascript
// Subscription Revenue
core_revenue = core_subs * 19;
pro_revenue = pro_subs * 49;
premium_revenue = premium_subs * 99;
total_sub_revenue = core_revenue + pro_revenue + premium_revenue;

// Product Revenue
gross_product_revenue = product_units * avg_product_price;
net_product_revenue = gross_product_revenue * (1 - product_return_rate / 100);

// Service Revenue
led_revenue = led_sessions * led_price;
blood_revenue = blood_sessions * blood_price;
event_revenue = event_count * event_attendees * event_ticket_price;
total_service_revenue = led_revenue + blood_revenue + event_revenue;

// Space Revenue
total_space_revenue = bar_revenue + rental_revenue;

// Totals
total_monthly_revenue = total_sub_revenue + net_product_revenue + total_service_revenue + total_space_revenue;
total_annual_revenue = total_monthly_revenue * 12;
```

**Update triggers**: Any change to `core_subs`, `pro_subs`, `premium_subs`, `product_units`, `avg_product_price`, `product_return_rate`, `led_sessions`, `led_price`, `blood_sessions`, `blood_price`, `event_count`, `event_attendees`, `event_ticket_price`, `bar_revenue`, `rental_revenue`.

**Display formats**:
- All revenue values: `EUR X,XXX` with EUR prefix, comma thousand separators, 0 decimal places for display (internal precision: 2 decimals)
- Percentage breakdowns: `XX.X%` with 1 decimal

**Animation on value change**: 300ms gold border flash on the calculated field container (`box-shadow: 0 0 0 2px var(--amber)` fading to transparent).

**Color coding**:
- All revenue values display in `--deep` (they are always non-negative)
- Revenue stream percentage bars use: `--amber` (subscriptions), `--terra` (products), `--sage` (services), `--stone` (space)

### 2.3 Phase 2 Calculations (COGS)

```javascript
// Digital COGS
payment_processing_fees = total_monthly_revenue * (stripe_rate / 100);
total_digital_cogs = hosting_cost + api_costs + payment_processing_fees;

// Product COGS
product_wholesale_cogs = product_units * (avg_product_price * wholesale_pct / 100);
product_shipping_cogs = (product_units * 0.70) * shipping_per_unit;
product_packaging_cogs = product_units * packaging_per_unit;
total_product_cogs = product_wholesale_cogs + product_shipping_cogs + product_packaging_cogs;

// Service COGS
led_practitioner_fees = led_sessions * led_practitioner_cost;
blood_practitioner_fees = blood_sessions * blood_practitioner_cost;
event_facilitator_fees = event_count * event_facilitator_cost;
total_practitioner_fees = led_practitioner_fees + blood_practitioner_fees + event_facilitator_fees;
total_service_sessions = led_sessions + blood_sessions + (event_count * event_attendees);
total_consumables = total_service_sessions * consumable_per_session;
total_service_cogs = total_practitioner_fees + total_consumables + service_equip_depreciation;

// Space COGS
ingredient_cogs = bar_revenue * (ingredient_rate / 100);
total_space_cogs = ingredient_cogs + space_utilities;

// Totals
total_cogs = total_digital_cogs + total_product_cogs + total_service_cogs + total_space_cogs;

// Milestones
gross_profit = total_monthly_revenue - total_cogs;
gross_margin = total_monthly_revenue > 0 ? (gross_profit / total_monthly_revenue) * 100 : 0;

// Per-stream margins (for sub-displays)
product_gross_margin = net_product_revenue > 0 ? ((net_product_revenue - total_product_cogs) / net_product_revenue) * 100 : 0;
service_gross_margin = total_service_revenue > 0 ? ((total_service_revenue - total_service_cogs) / total_service_revenue) * 100 : 0;
digital_gross_margin = total_sub_revenue > 0 ? ((total_sub_revenue - total_digital_cogs) / total_sub_revenue) * 100 : 0;
```

**Display formats**:
- COGS values: `EUR X,XXX` (0 decimals displayed)
- Gross profit: `EUR X,XXX` or `-EUR X,XXX`
- Gross margin: `XX.X%` (1 decimal)
- Per-stream margins: `XX%` (0 decimals, shown in sub-displays)

**Color coding**:
- COGS values: `--deep` (always non-negative)
- Gross profit: `--sage` if >= 0, `--terra` if < 0
- Gross margin: `--sage` if >= 72%, `--amber` if 50-71%, `--terra` if < 50%

### 2.4 Phase 3 Calculations (OpEx)

```javascript
// Marketing
total_marketing = paid_ads + content_tools + influencer_costs + other_marketing;
calculated_cac = new_customers_month > 0 ? total_marketing / new_customers_month : 0;

// Founder Compensation
total_founder_comp = (founder1_salary + founder2_salary) * (employer_multiplier / 100);

// Legal & Compliance
total_legal = gmbh_maintenance + gdpr_cost + health_reg_cost + legal_advisory;

// Professional Services
total_professional = bookkeeping + advisory_fees;

// Total OpEx
total_opex = total_marketing + rent + total_founder_comp + technology_opex + total_legal + insurance + total_professional + software_tools;

// EBITDA
ebitda = gross_profit - total_opex;
ebitda_margin = total_monthly_revenue > 0 ? (ebitda / total_monthly_revenue) * 100 : 0;
```

**Display formats**:
- OpEx values: `EUR X,XXX`
- CAC: `EUR XX` (0 decimals)
- EBITDA: `EUR X,XXX` or `-EUR X,XXX`
- EBITDA margin: `XX.X%`

**Color coding**:
- EBITDA: `--sage` if >= 0, `--terra` if < 0
- CAC: `--sage` if 40-80, `--amber` if 10-39 or 81-200, `--terra` if < 10 or > 200

### 2.5 Phase 4 Calculations (Below the Line)

```javascript
// Depreciation & Amortization
total_depreciation = space_depreciation + equipment_depreciation;
total_amortization = app_amortization + ip_amortization;
total_da = total_depreciation + total_amortization;

// Interest
monthly_interest = (loan_principal * (annual_interest_rate / 100)) / 12;

// EBT
ebt = ebitda - total_depreciation - total_amortization - monthly_interest;

// Tax
corp_tax_amount = ebt > 0 ? ebt * (corp_tax_rate / 100) : 0;

// Net Profit / Loss
net_profit_loss = ebt - corp_tax_amount;
net_margin = total_monthly_revenue > 0 ? (net_profit_loss / total_monthly_revenue) * 100 : 0;
```

**Display formats**:
- D&A, Interest: `EUR X,XXX`
- EBT: `EUR X,XXX` or `-EUR X,XXX`
- Tax: `EUR X,XXX` (with tooltip when EUR 0 on loss)
- Net P/L: `EUR X,XXX` or `-EUR X,XXX` (largest display on page)

**Color coding**:
- Net P/L: `--sage` if >= 0, `--terra` if < 0

### 2.6 Phase 5 Derived Metrics (auto-populated narrative)

```javascript
// Burn Rate
gross_burn = total_cogs + total_opex + total_da + monthly_interest;
net_burn = gross_burn - total_monthly_revenue; // positive = burning money
net_burn_display = Math.abs(net_profit_loss); // simplified: equals abs(net P/L) when tax is 0

// Runway
runway_months = net_burn > 0 ? Math.floor(500000 / net_burn) : Infinity;

// LTV:CAC (estimated)
arpu = (core_subs + pro_subs + premium_subs) > 0
  ? total_sub_revenue / (core_subs + pro_subs + premium_subs)
  : 0;
estimated_ltv = arpu * 10; // assuming 10-month average lifespan
ltv_cac_ratio = calculated_cac > 0 ? estimated_ltv / calculated_cac : 0;
```

### 2.7 Complete Field Registry

Total input fields: **47**
Total calculated fields: **35**
Total fields: **82**

**Input fields by phase**:
- Phase 1 (Revenue): 14 inputs
- Phase 2 (COGS): 10 inputs
- Phase 3 (OpEx): 16 inputs
- Phase 4 (Below the Line): 7 inputs
- Phase 5 (Narrative): 0 inputs

---

## 3. INTERACTION FLOW DESIGN

### 3.1 Navigation

#### Desktop (>1024px): Sticky Sidebar Nav

```
Position: fixed, left side
Width: 200px
Top: 80px (below header)
Bottom: 20px
Background: var(--glass-strong)
Border: 1px solid var(--glass-border)
Border-radius: 16px
Padding: 24px 16px
z-index: 100
```

**Contents (top to bottom)**:
1. "P&L Guide" label (Outfit 500, 11px, uppercase, `--amber`, letter-spacing 0.12em)
2. Progress bar (overall, see 3.2)
3. Phase list:

```
Each phase item:
  - Circle indicator (16px diameter):
    - Empty circle: not started (border only, --deep-30)
    - Half-filled circle: in progress (--amber fill at 50%)
    - Filled circle with checkmark: complete (--sage fill, white checkmark)
  - Phase number (Space Mono 400, 11px, --deep-50)
  - Phase name (Outfit 400, 13px, --deep):
    "Revenue"
    "COGS"
    "OpEx"
    "Below the Line"
    "The Story"
  - Per-phase progress: "X/Y" (Space Mono 400, 10px, --deep-30)

  Active phase: --amber left border (3px), background var(--glass)
  Hover: background var(--glass), cursor pointer
  Click: smooth scroll to phase header (scroll-behavior: smooth, offset -100px for sticky header)
```

4. Glossary toggle button (bottom of sidebar):
```
  "Glossary" (Outfit 500, 12px)
  Icon: book outline
  Click: toggles glossary panel (see Section 5)
```

#### Mobile (<768px): Horizontal Phase Tabs

```
Position: sticky, top (below main header)
Height: 48px
Background: var(--glass-strong)
Backdrop-filter: blur(16px)
Border-bottom: 1px solid var(--glass-border)
z-index: 100
Overflow-x: auto (horizontal scroll)
-webkit-overflow-scrolling: touch
Scroll-snap-type: x mandatory
```

**Tab items** (horizontally scrollable):
```
Each tab:
  - Phase number circle (same indicators as desktop, 14px)
  - Phase short name ("Revenue", "COGS", "OpEx", "Below", "Story")
  - Font: Outfit 500, 12px
  - Padding: 8px 16px
  - Scroll-snap-align: start
  - Active: --amber bottom border (3px), font weight 600
  - Tap: smooth scroll to phase
```

#### Tablet (768-1024px): Top Nav Bar

Same as mobile horizontal tabs but with full phase names and slightly larger touch targets (56px height).

### 3.2 Progress Tracking

#### Overall Progress Bar

```
Location: Top of sidebar (desktop) / header area (mobile)
Track:
  - Height: 6px
  - Background: var(--deep-08)
  - Border-radius: 3px
Fill:
  - Background: var(--sage)
  - Border-radius: 3px
  - Transition: width 300ms ease
  - Width: (filled_input_count / total_input_count) * 100%

total_input_count = 47 (all input fields across Phases 1-4)
filled_input_count = count of inputs where value !== '' && value !== null && value !== undefined
```

**Note**: Default placeholder values DO count as "filled" since the guide pre-populates Alche's defaults. The progress bar starts at 100% and drops if a user clears fields.

#### Per-Phase Progress

Shown next to each phase name in sidebar:
```
Format: "X / Y" where X = filled inputs in phase, Y = total inputs in phase
Font: Space Mono 400, 10px, --deep-30
```

Phase input counts:
- Phase 1: 14 inputs
- Phase 2: 10 inputs
- Phase 3: 16 inputs
- Phase 4: 7 inputs
- Phase 5: 0 inputs (always "complete")

#### Phase Completion Logic

A phase is "complete" when ALL required inputs in that phase have non-empty, valid values. Completion triggers:
1. Phase circle indicator changes to filled + checkmark
2. Sidebar phase item gets a subtle `--sage` background tint
3. If the next phase exists, a brief pulse animation on the next phase circle (300ms, scale 1.0 to 1.2 to 1.0)

### 3.3 Phase Progression

- All phases are visible and scrollable at all times. No gating or locking.
- When a user fills the LAST empty input in a phase, smooth-scroll to the next phase header after a 500ms delay.
- Each phase ends with a "Continue to Phase X" button:

```
Button:
  - Outfit 500, 14px
  - Background: var(--glass)
  - Border: 1px solid var(--glass-border-strong)
  - Border-radius: 12px
  - Padding: 12px 24px
  - Color: var(--deep)
  - Hover: background var(--glass-strong), border-color var(--amber)
  - Click: smooth scroll to next phase header
  - Arrow icon (right-pointing chevron) after text
```

- Phase 5 does not have a "Continue" button. Instead it has the Export button (see Section 4).

### 3.4 Auto-Save (localStorage)

**Save behavior**:
- On every input change, debounced by 500ms
- Save key: `alche_pnl_guide_data`
- Save format: JSON object with all field IDs and their current values
- Also save: `alche_pnl_guide_timestamp` with ISO 8601 timestamp

```javascript
// Save structure
{
  "core_subs": 75,
  "pro_subs": 55,
  "premium_subs": 15,
  // ... all 47 input fields
}
```

**Restore behavior**:
- On page load, check localStorage for `alche_pnl_guide_data`
- If found, populate all input fields with saved values
- Run `recalculate()` after restoring
- Show "Last saved: [relative time]" indicator in the header

**Last saved indicator**:
```
Location: Header bar, right side (desktop) / below phase tabs (mobile)
Format: "Saved X minutes ago" or "Saved just now"
Font: Outfit 300, 11px, --deep-30
Update: every 30 seconds via setInterval
```

**Reset button**:
```
Location: Header bar, next to save indicator
Label: "Reset All"
Font: Outfit 400, 11px, --terra
Icon: Circular arrow (reset icon)
Click: Confirmation dialog:
  - Glass overlay (background rgba(44,36,24,0.4))
  - Glass card centered:
    - "Reset all values?" (Cormorant Garamond 400, 20px)
    - "This will clear your saved data and restore Alche's default values." (Outfit 300, 14px)
    - Two buttons: "Cancel" (ghost) and "Reset" (--terra background, white text)
  - On confirm: clear localStorage keys, reload page (which loads defaults)
  - On cancel: close dialog
```

---

## 4. EXPORT SPECIFICATION

### 4.1 "Copy Your P&L" Button

**Location**:
- Desktop: Fixed bottom-right corner, 24px from edges, always visible
- Mobile: Sticky footer bar, full width, 56px height
- Also appears at the end of Phase 5

**Button design**:
```
Desktop:
  - Outfit 600, 14px, white text
  - Background: var(--deep)
  - Border-radius: 12px
  - Padding: 14px 24px
  - Box-shadow: 0 4px 16px rgba(44,36,24,0.15)
  - Icon: clipboard icon (left of text)
  - Hover: background var(--deep-90), transform translateY(-1px)
  - Active: transform translateY(0)

Mobile:
  - Full-width bar
  - Same styling but border-radius: 0
  - 56px height, centered text
```

### 4.2 Copy Output Format

On click, generate this TSV (tab-separated) string and copy to clipboard:

```
PROFIT & LOSS STATEMENT — ALCHE GmbH
Monthly Projection

REVENUE
Subscription Revenue — Core ({core_subs} subs x EUR 19)\tEUR {core_revenue}
Subscription Revenue — Pro ({pro_subs} subs x EUR 49)\tEUR {pro_revenue}
Subscription Revenue — Premium ({premium_subs} subs x EUR 99)\tEUR {premium_revenue}
Total Subscription Revenue\tEUR {total_sub_revenue}
\t
Product Revenue (net of {product_return_rate}% returns)\tEUR {net_product_revenue}
\t
Service Revenue — LED Therapy ({led_sessions} sessions x EUR {led_price})\tEUR {led_revenue}
Service Revenue — Blood Panels ({blood_sessions} sessions x EUR {blood_price})\tEUR {blood_revenue}
Service Revenue — Events ({event_count} events x {event_attendees} attendees x EUR {event_ticket_price})\tEUR {event_revenue}
Total Service Revenue\tEUR {total_service_revenue}
\t
Physical Space Revenue\tEUR {total_space_revenue}
\t
TOTAL REVENUE\tEUR {total_monthly_revenue}
\t
COST OF GOODS SOLD
Digital COGS (hosting, APIs, payment processing)\tEUR {total_digital_cogs}
Product COGS (wholesale, shipping, packaging)\tEUR {total_product_cogs}
Service COGS (practitioners, consumables, equipment)\tEUR {total_service_cogs}
Space COGS\tEUR {total_space_cogs}
TOTAL COGS\tEUR {total_cogs}
\t
GROSS PROFIT\tEUR {gross_profit}
GROSS MARGIN\t{gross_margin}%
\t
OPERATING EXPENSES
Marketing & Acquisition\tEUR {total_marketing}
Rent & Facilities\tEUR {rent}
Founder Compensation (fully loaded)\tEUR {total_founder_comp}
Technology (non-COGS)\tEUR {technology_opex}
Legal & Compliance\tEUR {total_legal}
Insurance\tEUR {insurance}
Professional Services\tEUR {total_professional}
Software & Tools\tEUR {software_tools}
TOTAL OPERATING EXPENSES\tEUR {total_opex}
\t
EBITDA\tEUR {ebitda}
\t
Depreciation\tEUR {total_depreciation}
Amortization\tEUR {total_amortization}
Interest Expense\tEUR {monthly_interest}
\t
EARNINGS BEFORE TAX (EBT)\tEUR {ebt}
Corporate Tax (30%)\tEUR {corp_tax_amount}
\t
NET PROFIT / LOSS\tEUR {net_profit_loss}
```

**Number formatting in export**: All EUR values use comma thousand separators, no decimal places. Negative values prefixed with minus sign: `-EUR 9,671`.

### 4.3 Copy Feedback

```javascript
// Primary method
navigator.clipboard.writeText(tsvString).then(() => {
  // Success: change button text
  button.textContent = ''; // clear
  button.innerHTML = '<svg>...</svg> Copied!'; // checkmark icon + text
  button.style.background = 'var(--sage)';
  setTimeout(() => {
    button.innerHTML = '<svg>...</svg> Copy Your P&L'; // restore
    button.style.background = 'var(--deep)';
  }, 2000);
});

// Fallback for older browsers
const textarea = document.createElement('textarea');
textarea.value = tsvString;
textarea.style.position = 'fixed';
textarea.style.left = '-9999px';
document.body.appendChild(textarea);
textarea.select();
document.execCommand('copy');
document.body.removeChild(textarea);
```

**Checkmark icon animation**: Scale from 0 to 1 over 200ms with ease-out timing.

---

## 5. GLOSSARY BEHAVIOR

### 5.1 Desktop: Floating Sidebar Panel

```
Position: fixed, right side
Width: 280px
Top: 80px
Bottom: 20px
Background: var(--glass-strong)
Backdrop-filter: blur(24px)
Border: 1px solid var(--glass-border-strong)
Border-radius: 20px
Box-shadow: 0 8px 32px rgba(44,36,24,0.08)
Padding: 24px
z-index: 200
Transform: translateX(320px) (hidden state)
Transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1)
Overflow-y: auto
```

**Toggle**: Clicking "Glossary" button in sidebar nav slides the panel in/out via transform.

**Header** (sticky within panel):
```
"Glossary" (Cormorant Garamond 400, 20px, --deep)
Close button: X icon, top-right corner, 32px touch target
Search input:
  - Outfit 400, 13px
  - Background: var(--cream)
  - Border: 1px solid var(--deep-15)
  - Border-radius: 8px
  - Padding: 8px 12px
  - Placeholder: "Search terms..."
  - Filters terms in real-time as user types (case-insensitive substring match)
  - Clear button (X) appears when text is entered
```

**Term entries** (scrollable list below search):
```
Each term:
  - Term name: Outfit 500, 14px, --deep
  - Definition: Outfit 300, 13px, --deep-70, margin-top 4px
  - Alche note (where applicable): Outfit 300 italic, 12px, --amber, margin-top 4px
  - Divider: 1px solid var(--deep-08), margin 16px 0

  Terms are alphabetically sorted.
  Terms that don't match the search filter are hidden (display: none).
```

### 5.2 Mobile: Bottom Drawer

```
Position: fixed, bottom
Width: 100%
Max-height: 60vh
Background: var(--glass-strong)
Backdrop-filter: blur(24px)
Border-top: 1px solid var(--glass-border-strong)
Border-radius: 20px 20px 0 0
Box-shadow: 0 -8px 32px rgba(44,36,24,0.08)
z-index: 200
Transform: translateY(100%) (hidden state)
Transition: transform 400ms cubic-bezier(0.16, 1, 0.3, 1)
Overflow-y: auto
```

**Drag handle** at top:
```
Width: 40px
Height: 4px
Background: var(--deep-15)
Border-radius: 2px
Margin: 12px auto
```

**Touch behavior**: Swiping down on the drag handle or the header area closes the drawer. Scrolling inside the term list scrolls the list (not the drawer).

**Toggle**: Tapping "Glossary" in the mobile phase tabs, or tapping a glossary term in body text.

### 5.3 Inline Glossary Term Styling

Throughout the guide body text, any word/phrase that matches a glossary term gets:

```css
.glossary-inline {
  color: var(--terra);
  text-decoration: underline;
  text-decoration-style: dotted;
  text-decoration-color: var(--terra);
  text-underline-offset: 3px;
  cursor: help;
}
```

**Hover behavior (desktop)**: After 200ms delay, show a tooltip:
```
Tooltip:
  - Position: above the term, centered, with 8px arrow pointing down
  - Background: var(--deep)
  - Color: var(--cream)
  - Border-radius: 8px
  - Padding: 12px 16px
  - Max-width: 280px
  - Font: Outfit 300, 12px
  - Content: Short definition (first sentence only)
  - "See full definition" link at bottom (Outfit 500, 11px, --amber, underlined)
  - Fade in: opacity 0 to 1 over 150ms
  - Fade out: on mouse leave, 100ms delay then 150ms fade
  - z-index: 300
```

**Tap behavior (mobile)**: Same tooltip appears on tap. Tap elsewhere to dismiss. "See full definition" opens the glossary drawer scrolled to that term.

**"See full definition" behavior**: Opens glossary panel/drawer and scrolls to the matching term entry (using `scrollIntoView({ behavior: 'smooth', block: 'center' })`). The target term briefly highlights with `--amber` background (500ms, then fade out).

---

## 6. VALIDATION & SMART HINTS

### 6.1 Validation Architecture

Every input has three levels of validation:
1. **Hard validation** (prevents invalid data): enforced via HTML `min`/`max`/`type` attributes + JavaScript
2. **Soft validation** (contextual warnings): shown as amber hints below the input, dismissible
3. **Smart hints** (educational context): triggered by specific value combinations, shown as info callouts

### 6.2 Hard Validation Rules

Applied to ALL inputs:
```
- Number inputs: reject non-numeric characters on keydown (allow digits, decimal point, minus for negative-capable fields)
- Integer inputs: reject decimal points
- Currency inputs: allow digits, single decimal point, max 2 decimal places
- Percentage inputs: clamp to 0-100 range
- All inputs: clamp to field-specific min/max range on blur
```

**Error display** (hard validation failure):
```
- Input border: 2px solid var(--rose)
- Error message below input:
  - Font: Outfit 400, 11px, --rose
  - Icon: exclamation circle, 12px, --rose
  - Appears immediately on validation failure
  - Disappears when input is corrected
```

### 6.3 Soft Validation (Contextual Warnings)

Each warning has: trigger condition, severity, message, and dismissibility.

| Field(s) | Trigger | Severity | Message | Dismissible |
|-----------|---------|----------|---------|-------------|
| `total_monthly_revenue` | > 50,000 | warning | "Monthly revenue above EUR 50K is ambitious for M1-M6 pre-seed. Ensure your subscriber projections support this." | Yes |
| `gross_margin` | > 95 | warning | "Double-check: most businesses have some direct costs. A 95%+ gross margin may indicate missing COGS items." | Yes |
| `gross_margin` | < 30 | warning | "This margin may concern investors. SaaS benchmarks are 70-85%; marketplace benchmarks are 30-50%." | Yes |
| `calculated_cac` | < 10 AND > 0 | info | "Organic-only acquisition is difficult to scale. A CAC below EUR 10 may reflect unfunded marketing." | Yes |
| `calculated_cac` | > 200 | warning | "This CAC may not be sustainable at your price point. Alche target: EUR 40-80." | Yes |
| `founder1_salary` OR `founder2_salary` | === 0 | warning | "Investors will add salary costs to their own model anyway. EUR 0 founder salary is a red flag." | Yes |
| `founder1_salary` OR `founder2_salary` | > 6000 | info | "Founder salaries above EUR 6,000/mo at pre-seed may raise questions about capital discipline." | Yes |
| `product_gross_margin` | < 40 | warning | "Product margin below 40% is outside the 40-55% target. Consider adjusting wholesale cost or pricing." | Yes |
| `bar_revenue` | > 0 | warning | "Physical space is Phase 2 (seed-funded). Including space revenue in a pre-seed P&L may concern investors." | Yes |
| `ebt` | < 0 AND `corp_tax_amount` > 0 | error | "Tax should be EUR 0 when EBT is negative. Check your tax rate input." | No (auto-corrected) |
| `corp_tax_amount` | === 0 AND `ebt` < 0 | info (auto-shown tooltip) | "Tax is EUR 0 because you have a loss. These losses carry forward (Verlustvortrag) to offset future profits." | Yes |

**Warning display style**:
```css
.validation-warning {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin-top: 6px;
  padding: 8px 12px;
  background: rgba(196, 149, 106, 0.08); /* --amber at 8% */
  border: 1px solid rgba(196, 149, 106, 0.2);
  border-radius: 8px;
  font: 300 12px/1.5 'Outfit', sans-serif;
  color: var(--deep-70);
}

.validation-warning.severity-info {
  background: rgba(139, 158, 124, 0.08); /* --sage at 8% */
  border-color: rgba(139, 158, 124, 0.2);
}

.validation-warning.severity-error {
  background: rgba(196, 122, 138, 0.08); /* --rose at 8% */
  border-color: rgba(196, 122, 138, 0.2);
}

.validation-dismiss {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
  opacity: 0.5;
}
.validation-dismiss:hover { opacity: 1; }
```

**Dismiss behavior**: Dismissed warnings are stored in sessionStorage (not localStorage -- they reappear on next visit). Key: `alche_pnl_dismissed_warnings`, value: array of warning IDs.

---

## 7. RESPONSIVE DESIGN SPECIFICATION

### 7.1 Desktop (>1024px)

```
Layout:
  - Left sidebar nav: 200px, fixed
  - Main content area: max-width 700px, margin-left 240px (200px sidebar + 40px gap)
  - Right glossary panel: 280px, fixed (when open, content area shrinks or overlaps)
  - Content area has 24px horizontal padding

Input group layout:
  - Subscription tiers (1.1.2, 1.1.3, 1.1.4): displayed in a 3-column grid
  - Service revenue inputs: paired in 2-column grids (sessions + price side by side)
  - Legal & compliance sub-items: 2-column grid
  - All other inputs: single column, full width of content area

Phase headers:
  - Cormorant Garamond 300, 36px
  - Phase number: Space Mono 400, 14px, --amber, above title
  - Margin-top: 80px (large visual break between phases)
  - Scroll margin-top: 100px (accounts for sticky header)

Calculated milestone cards:
  - Full width of content area
  - Padding: 32px
  - Min-height: 120px

Glass cards:
  - Padding: 24px
  - Margin-bottom: 16px
  - Full content width
```

### 7.2 Tablet (768-1024px)

```
Layout:
  - No sidebar nav (use top nav bar, 56px height)
  - Main content: max-width 100%, padding 24px
  - Glossary: overlay panel (right side, 300px, with scrim behind it)

Input group layout:
  - Subscription tiers: 3-column grid (still fits)
  - Service revenue: single column (stack sessions and price vertically)
  - All other inputs: single column

Phase headers:
  - Cormorant Garamond 300, 30px
  - Scroll margin-top: 80px

Calculated milestone cards:
  - Full width, padding 24px
```

### 7.3 Mobile (<768px)

```
Layout:
  - Sticky phase tabs at top (48px)
  - Main content: full width, padding 16px
  - Glossary: bottom drawer (60vh max)
  - Export button: sticky footer bar (56px)
  - Content area bottom padding: 80px (to clear sticky footer)

Input group layout:
  - ALL inputs: single column, full width
  - Touch targets: minimum 44px height for all interactive elements
  - Input height: 48px
  - Stepper buttons: 44px x 44px

Phase headers:
  - Cormorant Garamond 300, 24px
  - Scroll margin-top: 60px

Calculated milestone cards:
  - Full width, padding 16px
  - Value text: 1.3em (smaller than desktop 2em)

Progress indicator:
  - Replace full bar with phase dots (5 dots, 10px each, horizontal)
  - Current phase dot: --amber, larger (14px)
  - Completed phases: --sage dots
  - Incomplete: --deep-15 dots

Concept cards:
  - ALL start collapsed on mobile to reduce scroll depth
  - Tap to expand/collapse
  - Chevron indicator (rotates 180 degrees on expand)
```

### 7.4 CSS Breakpoint Structure

```css
/* Mobile first */
/* Base styles: mobile (<768px) */

@media (min-width: 768px) {
  /* Tablet overrides */
}

@media (min-width: 1024px) {
  /* Desktop overrides */
}

@media (min-width: 1280px) {
  /* Large desktop: slightly wider content area */
}
```

---

## 8. ANIMATION & MICRO-INTERACTION SPECIFICATION

### 8.1 Section Entry Animation

```css
.phase-section {
  opacity: 0;
  transform: translateY(20px);
}

.phase-section.visible {
  animation: fadeSlideIn 400ms ease forwards;
}

@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Trigger**: IntersectionObserver with `threshold: 0.1`. When a `.phase-section` enters the viewport, add `.visible` class.

**Stagger**: Each child element within a section gets an incrementing `animation-delay`:
```javascript
section.querySelectorAll('.animate-child').forEach((el, i) => {
  el.style.animationDelay = `${i * 100}ms`;
});
```

### 8.2 Value Change Highlight

When any calculated field value changes:

```css
@keyframes valueFlash {
  0% { box-shadow: 0 0 0 2px var(--amber); }
  100% { box-shadow: 0 0 0 2px transparent; }
}

.calculated-field.value-changed {
  animation: valueFlash 300ms ease;
}
```

**Trigger**: After `recalculate()`, compare each calculated field's new value to its previous value. If changed, add `.value-changed` class, remove after animation completes (300ms).

### 8.3 Progress Bar Animation

```css
.progress-fill {
  transition: width 300ms ease;
}
```

### 8.4 Glossary Term Tooltip

```css
.glossary-tooltip {
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 150ms ease, transform 150ms ease;
  pointer-events: none;
}

.glossary-tooltip.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
```

**Show delay**: 200ms (desktop hover). Use `setTimeout` to add `.visible` class; clear timeout on mouse leave.

### 8.5 Phase Completion

Optional subtle celebration effect (CSS-only):

```css
@keyframes phaseComplete {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.phase-indicator.complete {
  animation: phaseComplete 400ms ease;
}
```

No confetti or particle effects -- keep it subtle and professional.

### 8.6 Copy Button Success

```css
@keyframes checkmarkIn {
  0% { transform: scale(0); opacity: 0; }
  60% { transform: scale(1.2); }
  100% { transform: scale(1); opacity: 1; }
}

.copy-btn.success .checkmark-icon {
  animation: checkmarkIn 200ms ease forwards;
}
```

### 8.7 Concept Card Expand/Collapse

```css
.concept-card-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 300ms ease, padding 300ms ease;
}

.concept-card.expanded .concept-card-content {
  max-height: 500px; /* generous max; actual height is less */
  padding-top: 12px;
}

.concept-card .chevron {
  transition: transform 200ms ease;
}

.concept-card.expanded .chevron {
  transform: rotate(180deg);
}
```

### 8.8 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This disables ALL animations and transitions for users who prefer reduced motion.

---

## 9. ACCESSIBILITY REQUIREMENTS

### 9.1 Semantic HTML

```html
<main id="main-content" role="main">
  <section aria-labelledby="phase-1-heading">
    <h2 id="phase-1-heading">Phase 1: Revenue</h2>
    ...
  </section>
</main>
```

- Each phase is a `<section>` with `aria-labelledby` pointing to its heading
- Input groups use `<fieldset>` and `<legend>` for logical grouping
- Navigation uses `<nav>` with `aria-label="Phase navigation"`

### 9.2 Labels and ARIA

Every input MUST have:
```html
<label for="core_subs">Core Subscribers (EUR 19/mo)</label>
<input type="number" id="core_subs" name="core_subs"
       min="0" max="10000" step="1" value="75"
       aria-describedby="core_subs_help core_subs_error">
<span id="core_subs_help" class="help-text">Paying users on the Core plan...</span>
<span id="core_subs_error" class="error-text" role="alert" aria-live="assertive"></span>
```

Every calculated field MUST have:
```html
<div role="status" aria-live="polite" aria-label="Total Subscription Revenue">
  <span class="calculated-label">Total Subscription Revenue</span>
  <span class="calculated-value">EUR 5,605</span>
</div>
```

- `role="status"` + `aria-live="polite"` announces value changes to screen readers without interrupting
- Do NOT use `aria-live="assertive"` for calculated fields (too noisy); only for validation errors

### 9.3 Keyboard Navigation

- Tab order follows visual order: sidebar nav items, then phase content top-to-bottom
- All interactive elements are focusable
- Stepper buttons are focusable and activated by Enter or Space
- Concept cards are toggle buttons: `role="button"`, `aria-expanded="true/false"`, activated by Enter or Space
- Glossary panel can be closed with Escape key
- Confirmation dialog (reset) can be closed with Escape key
- Slider inputs respond to Arrow keys (left/down = decrease, right/up = increase)

### 9.4 Focus Styles

```css
:focus-visible {
  outline: 2px solid var(--terra);
  outline-offset: 2px;
}

/* Remove default outline only for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 9.5 Skip Navigation

First element in the DOM:
```html
<a href="#main-content" class="skip-link">Skip to content</a>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: var(--deep);
  color: var(--cream);
  padding: 8px 16px;
  z-index: 1000;
  font: 400 14px/1 'Outfit', sans-serif;
}

.skip-link:focus {
  top: 0;
}
```

### 9.6 Color Contrast

All text combinations must meet WCAG AA:
- `--deep` (#2C2418) on `--cream` (#F5F0E8): contrast ratio ~11.2:1 (passes AAA)
- `--deep-70` on `--cream`: ~7.2:1 (passes AA)
- `--deep-50` on `--cream`: ~4.8:1 (passes AA for normal text)
- `--amber` (#C4956A) on `--cream`: ~2.5:1 (FAILS for body text -- use only for decorative elements, labels with large text, or borders)
- `--terra` (#B86B4A) on `--cream`: ~3.2:1 (passes AA for large text only -- use for headings/labels 18px+, not body text)
- `--sage` (#8B9E7C) on `--cream`: ~2.8:1 (FAILS for body text -- use only for icons, progress bars, borders)

**Critical rule**: NEVER use `--amber`, `--sage`, `--terra`, `--rose`, or `--stone` as body text color. These are ONLY for decorative elements, icons, borders, and large labels. All readable text must use `--deep` or its opacity variants at 70%+.

### 9.7 Screen Reader Announcements

When the P&L is exported (copied):
```html
<div role="status" aria-live="polite" id="export-status" class="sr-only">
  P&L copied to clipboard
</div>
```

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
```

---

## 10. PRINT STYLES

### 10.1 Print Media Query

```css
@media print {
  /* Remove navigation */
  .sidebar-nav,
  .phase-tabs,
  .sticky-header,
  .progress-bar,
  .glossary-panel,
  .glossary-drawer,
  .export-button,
  .reset-button,
  .save-indicator,
  .skip-link,
  .copy-btn-sticky { display: none !important; }

  /* Remove interactivity indicators */
  .concept-card .chevron { display: none; }
  .stepper-btn { display: none; }
  input[type="range"] { display: none; }
  .validation-warning .validation-dismiss { display: none; }

  /* Show all content */
  .concept-card-content {
    max-height: none !important;
    overflow: visible !important;
    padding-top: 12px !important;
  }

  /* Convert inputs to static values */
  input[type="number"],
  input[type="text"] {
    border: none;
    background: transparent;
    padding: 0;
    font-family: 'Space Mono', monospace;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Page layout */
  body {
    background: white;
    color: var(--deep);
    font-size: 10pt;
  }

  body::before { display: none; } /* Remove atmospheric gradient */

  .glass, .glass-elevated {
    background: rgba(245, 240, 232, 0.3);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    box-shadow: none;
    border: 1px solid rgba(44, 36, 24, 0.1);
  }

  /* Page breaks */
  .phase-section { page-break-before: always; }
  .phase-section:first-child { page-break-before: avoid; }
  .input-group { page-break-inside: avoid; }
  .calculated-milestone { page-break-inside: avoid; }
  .concept-card { page-break-inside: avoid; }

  /* Footer */
  @page {
    size: A4;
    margin: 15mm 20mm;
    @bottom-center {
      content: "Generated from Alche P&L Guide";
      font: 8pt 'Outfit', sans-serif;
      color: rgba(44, 36, 24, 0.3);
    }
  }

  /* Disable all animations */
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### 10.2 Glossary as Final Print Page

```css
@media print {
  .glossary-print-section {
    display: block !important;
    page-break-before: always;
  }

  .glossary-print-section .term-entry {
    page-break-inside: avoid;
    margin-bottom: 12px;
  }
}
```

A hidden `<section class="glossary-print-section">` in the DOM contains all glossary terms formatted for print. It is `display: none` in screen mode and `display: block` in print mode.

---

## 11. COMPLETE HTML STRUCTURE (for Agent 3)

This is the high-level DOM structure Agent 3 should implement:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>P&L Learning Guide — Alche</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
  <!-- All CSS inline in <style> tag for single-file delivery -->
</head>
<body>
  <a href="#main-content" class="skip-link">Skip to content</a>

  <!-- Atmospheric background -->
  <!-- (via body::before pseudo-element) -->

  <!-- Sticky Header -->
  <header class="sticky-header">
    <div class="header-left">
      <span class="wordmark">alche</span>
      <span class="header-label">P&L Learning Guide</span>
    </div>
    <div class="header-right">
      <span class="save-indicator">Saved just now</span>
      <button class="reset-button">Reset All</button>
    </div>
  </header>

  <!-- Mobile Phase Tabs -->
  <nav class="phase-tabs" aria-label="Phase navigation (mobile)">
    <!-- 5 phase tab buttons -->
  </nav>

  <!-- Desktop Sidebar Nav -->
  <nav class="sidebar-nav" aria-label="Phase navigation">
    <span class="nav-label">P&L GUIDE</span>
    <div class="progress-bar">...</div>
    <ul class="phase-list">
      <!-- 5 phase items with indicators -->
    </ul>
    <button class="glossary-toggle">Glossary</button>
  </nav>

  <!-- Main Content -->
  <main id="main-content" role="main">

    <!-- Title Section -->
    <section class="title-section">
      <h1>Build Your P&L Statement</h1>
      <p class="subtitle">Walk through each line item using Alche's actual business model data.</p>
    </section>

    <!-- Phase 1: Revenue -->
    <section class="phase-section" id="phase-1" aria-labelledby="phase-1-heading">
      <div class="phase-header">
        <span class="phase-number">PHASE 1</span>
        <h2 id="phase-1-heading">Revenue (Top Line)</h2>
      </div>
      <!-- Phase intro concept card -->
      <!-- 1.1 Subscription Revenue -->
      <!-- 1.2 Product Revenue -->
      <!-- 1.3 Service Revenue -->
      <!-- 1.4 Physical Space Revenue -->
      <!-- 1.5 Total Monthly Revenue (milestone) -->
      <!-- 1.6 Total Annual Revenue (milestone) -->
      <button class="continue-btn">Continue to Phase 2 &rarr;</button>
    </section>

    <!-- Phase 2: COGS -->
    <section class="phase-section" id="phase-2" aria-labelledby="phase-2-heading">
      <!-- Same structure pattern -->
      <!-- Ends with Gross Profit + Gross Margin milestones -->
    </section>

    <!-- Phase 3: OpEx -->
    <section class="phase-section" id="phase-3" aria-labelledby="phase-3-heading">
      <!-- Same structure pattern -->
      <!-- Ends with EBITDA milestone -->
    </section>

    <!-- Phase 4: Below the Line -->
    <section class="phase-section" id="phase-4" aria-labelledby="phase-4-heading">
      <!-- Same structure pattern -->
      <!-- Ends with Net Profit/Loss milestone -->
    </section>

    <!-- Phase 5: The Story -->
    <section class="phase-section" id="phase-5" aria-labelledby="phase-5-heading">
      <!-- Narrative blocks, data tables, red flag callouts -->
      <!-- No input fields -->
    </section>

    <!-- Complete P&L Summary Card -->
    <section class="pnl-summary" aria-label="Complete P&L Summary">
      <!-- Full P&L template rendered with all calculated values -->
      <!-- Same format as the export TSV but rendered as a styled table -->
    </section>

  </main>

  <!-- Export Button (desktop: fixed bottom-right) -->
  <button class="copy-btn" aria-label="Copy P&L to clipboard">
    <svg><!-- clipboard icon --></svg>
    Copy Your P&L
  </button>

  <!-- Mobile Export Button (sticky footer) -->
  <div class="copy-btn-sticky">
    <button class="copy-btn-mobile" aria-label="Copy P&L to clipboard">
      Copy Your P&L
    </button>
  </div>

  <!-- Glossary Panel (desktop) -->
  <aside class="glossary-panel" aria-label="Glossary" role="complementary">
    <div class="glossary-header">
      <h3>Glossary</h3>
      <button class="glossary-close" aria-label="Close glossary">X</button>
      <input type="search" class="glossary-search" placeholder="Search terms..." aria-label="Search glossary">
    </div>
    <div class="glossary-terms">
      <!-- 31 term entries, alphabetically sorted -->
    </div>
  </aside>

  <!-- Glossary Drawer (mobile) -->
  <aside class="glossary-drawer" aria-label="Glossary" role="complementary">
    <div class="drawer-handle"></div>
    <!-- Same content as glossary panel -->
  </aside>

  <!-- Glossary Print Section (hidden on screen) -->
  <section class="glossary-print-section" aria-hidden="true">
    <!-- All terms formatted for print -->
  </section>

  <!-- Reset Confirmation Dialog -->
  <dialog class="reset-dialog">
    <h3>Reset all values?</h3>
    <p>This will clear your saved data and restore Alche's default values.</p>
    <div class="dialog-actions">
      <button class="dialog-cancel">Cancel</button>
      <button class="dialog-confirm">Reset</button>
    </div>
  </dialog>

  <!-- Screen Reader Announcements -->
  <div id="sr-announcements" role="status" aria-live="polite" class="sr-only"></div>

  <!-- All JavaScript inline in <script> tag for single-file delivery -->
  <script>
    // Calculation engine
    // Auto-save/restore
    // Navigation/scroll
    // Glossary toggle
    // Export/copy
    // Animations (IntersectionObserver)
    // Validation
  </script>
</body>
</html>
```

---

## 12. JAVASCRIPT MODULE STRUCTURE (for Agent 3)

Agent 3 should implement the following JavaScript modules (all inline in a single `<script>` tag):

### Module 1: State Management
```
- Object holding all 47 input values (initialized from defaults or localStorage)
- Object holding all 35 calculated values
- recalculate() function that runs the full chain
- getState() / setState() for serialization
```

### Module 2: DOM Binding
```
- On page load: bind input event listeners to all 47 input fields
- Each listener: update state, call recalculate(), update DOM, trigger save, trigger validation
- Debounce input events by 100ms
- Format display values (thousand separators, EUR prefix, percentage suffix)
```

### Module 3: Persistence
```
- save(): serialize state to localStorage (debounced 500ms)
- restore(): deserialize from localStorage on page load
- reset(): clear localStorage, reload page
- updateTimestamp(): update "Last saved" display
```

### Module 4: Navigation
```
- IntersectionObserver for active phase detection (update sidebar highlight)
- Smooth scroll on phase click
- Progress bar update
- Phase completion detection
```

### Module 5: Glossary
```
- Toggle panel/drawer visibility
- Search/filter terms
- Tooltip positioning (desktop hover / mobile tap)
- ScrollIntoView for "See full definition"
```

### Module 6: Export
```
- generateTSV(): build tab-separated string from current state
- copyToClipboard(): navigator.clipboard with fallback
- UI feedback (button text change, icon animation)
```

### Module 7: Validation
```
- runValidation(): check all soft validation rules against current state
- showWarning() / hideWarning(): toggle warning visibility
- Dismissed warnings tracking (sessionStorage)
```

### Module 8: Animation
```
- IntersectionObserver for section entry animations
- Value change detection and highlight
- Concept card expand/collapse
- Reduced motion check
```

---

*UX specification prepared by Agent 2 (Experience Engineer) for the Alche P&L Learning Guide. This document is the complete interaction blueprint for Agent 3 (HTML Builder). Every component, calculation, validation rule, animation, and responsive behavior is specified. No ambiguity should remain.*

