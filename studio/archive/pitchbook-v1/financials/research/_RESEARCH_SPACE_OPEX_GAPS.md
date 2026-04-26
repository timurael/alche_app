# _RESEARCH_SPACE_OPEX_GAPS.md
## Alche Berlin — Physical Space Operational Cost Gap Analysis
**Research Date:** 2026-02-25
**Analyst:** Financial Research Agent (Sonnet)
**Scope:** Six operational cost areas missing from or unverified in the current P&L model
**Data Quality:** Confirmed from official sources, live listings, and 2025/2026 market data where available

---

## EXECUTIVE SUMMARY

Six cost categories are either absent from the model or insufficiently quantified:

| # | Item | Monthly EUR | CapEx/OpEx | Month Starts |
|---|---|---|---|---|
| 1 | Physical space lease (all-in) | EUR 1,800–2,500 | OpEx | M4 |
| 2 | Recruiter fee — Community Manager | One-time EUR 0–4,400 | OpEx | M5 (pre-M6 hire) |
| 3 | Recruiter fee — Growth Marketer | One-time EUR 0–9,900 | OpEx | M11 (pre-M12 hire) |
| 4 | Recruiter fee — CTO | One-time EUR 14,300–19,000 | OpEx | M14 (pre-M17 hire) |
| 5 | POS system hardware + TSE | One-time EUR 1,200–1,500 | CapEx | M3 (setup) |
| 6 | POS software (SaaS) | EUR 39/mo | OpEx | M4 |
| 7 | Opening inventory pre-stock | One-time EUR 5,750–8,625 | CapEx/COGS | M3 |
| 8 | GEMA music license (Tarif M-U) | ~EUR 10/mo (EUR 117/yr) | OpEx | M4 |
| 9 | Rundfunkbeitrag (business rate) | EUR 6.12/mo | OpEx | M4 |

**Total one-time gap (CapEx + OpEx setup):** EUR 21,250–33,525
**Total recurring monthly gap (M4+):** EUR 1,855–2,555/mo (excluding lease, which may already be partially modeled)

---

## SECTION 1: PHYSICAL SPACE MONTHLY LEASE COST (BERLIN, M4+)

### Research Findings

**Market context (2025/2026):**
Berlin's commercial retail vacancy rate is approximately 2% citywide — one of Europe's tightest markets. The retail segment is experiencing stagnant demand (IVD Berlin 2025), which creates negotiating leverage for tenants in non-prime locations, but premium neighborhoods maintain strong pricing.

**Kaltmiete benchmarks for 40–60 sqm retail/wellness commercial space:**

| Location | Kaltmiete/sqm/mo | For 50 sqm |
|---|---|---|
| Prenzlauer Berg (B-location, side street) | EUR 15–22 | EUR 750–1,100 |
| Prenzlauer Berg (A-location, Kastanienallee etc.) | EUR 25–35 | EUR 1,250–1,750 |
| Mitte (B-location) | EUR 18–28 | EUR 900–1,400 |
| Mitte (A-location, Auguststraße etc.) | EUR 30–50+ | EUR 1,500–2,500+ |
| Kreuzberg (B-location) | EUR 14–20 | EUR 700–1,000 |
| Schöneberg (B-location, Goltzstraße etc.) | EUR 15–22 | EUR 750–1,100 |

Sources: [ImmobilienScout24 Berlin Gewerbeimmobilien](https://www.immobilienscout24.de/Suche/de/berlin/berlin/pankow/prenzlauer-berg/gewerbeimmobilien), [Investropa Berlin rent data](https://investropa.com/blogs/news/average-rent-per-sqm-berlin), [JLL Berlin Gewerbeimmobilien](https://gewerbeimmobilien.jll.de/gewerbe/gewerbeimmobilien-berlin-mitte), [IVD Berlin Gewerbemieten 2025](https://www.ivd-bildungsinstitut.de/gewerbemieten-in-berlin-2025/)

**Live listing reference:**
A 65 sqm space in Prenzlauer Berg (near Mitte) was listed at EUR 36,000/year (~EUR 46/sqm/mo), illustrating the premium for boutique-sized units. This is an outlier; realistic wellness B-location target is EUR 20–30/sqm.

**Nebenkosten (additional charges on top of Kaltmiete):**
For commercial leases in Berlin, Nebenkosten typically add **15–25%** on top of Kaltmiete. These include:
- Gebäudeversicherung (building insurance) — passed to tenant
- Grundsteuer (property tax) — passed to tenant
- Hausmeisterkosten (caretaker services)
- Gemeinschaftsflächen (common area maintenance)
- Müllentsorgung (waste disposal)
- Note: Heating (Heizung) and electricity (Strom) are typically metered separately for commercial leases — these are NOT included in standard Nebenkosten and should be budgeted separately as utilities (~EUR 150–300/mo for a 50 sqm space)

Sources: [Biallo Mietnebenkosten 2025](https://www.biallo.de/baufinanzierung/ratgeber/nebenkosten-wohnung/), [HousingAnywhere Nebenkosten Germany](https://housinganywhere.com/Germany/warm-rent-in-germany)

### RECOMMENDED MODEL INPUTS

**Target space profile:** 50 sqm, B-location (side street) in Prenzlauer Berg or Schöneberg
**Rationale:** A-location on Kastanienallee or similar flagship street adds EUR 600–1,000/mo in rent for marginal additional foot traffic — not justified at pre-seed stage. B-location side streets within the right postal code deliver equivalent wellness demographic.

| Scenario | Kaltmiete (50 sqm) | Nebenkosten (+20%) | All-in Monthly |
|---|---|---|---|
| **Low** (Kreuzberg/Schöneberg B) | EUR 850 | EUR 170 | **EUR 1,020** |
| **Mid** (Prenzlauer Berg B, target) | EUR 1,200 | EUR 240 | **EUR 1,440** |
| **High** (Mitte B or PB A-adjacent) | EUR 1,800 | EUR 360 | **EUR 2,160** |

**Recommended model line item:** EUR 1,500/mo all-in (Kaltmiete + Nebenkosten, excluding utilities)
**Separate utilities budget:** EUR 200/mo (electricity, heating, internet — from M4)
**Total occupancy:** EUR 1,700/mo from M4

**Transition from co-working:**
The EUR 750/mo co-working expense (M1–M3) is REPLACED entirely by the space lease from M4. It does not run concurrently. There is likely a 1-month overlap (M3 deposit + first month rent due before M4 opening) — budget for one double-payment month at transition.

**Deposit (Kaution):**
Commercial leases in Berlin typically require 3 months' Kaltmiete as security deposit. At EUR 1,200 Kaltmiete, this is EUR 3,600 due at signing (likely M3). This is a balance sheet item, not an expense.

**Important:** The EUR 50K Ablöse (key money) and EUR 25K buildout CapEx already modeled are separate from and in addition to ongoing monthly lease cost. The Ablöse is a one-time payment to the previous tenant, not to the landlord.

---

## SECTION 2: RECRUITMENT FEES FOR 3 PLANNED HIRES

### German Recruitment Market Context (2025)

Recruitment agency fees in Germany range from **15–30% of first-year annual gross salary** for standard hires. For technical/IT roles, the range is **18–25%**. For executive retained searches (C-suite), fees are typically **25–33%** paid in installments.

Source: [Eurojob Consulting — Recruitment Costs Germany](https://www.eurojob-consulting.com/en/a/recruitment-costs-in-germany-what-you-need-to-know-and-how-to-reduce-them), [Dover Tech Recruiter Fees 2025](https://www.dover.com/blog/tech-recruiter-fees-2025-cost-guide), [Hiring Hub — Recruitment Agency Fees Europe](https://www.hiring-hub.com/resources/recruitment-agency-fees-across-europe)

### Hire 1: Community Manager (starts M6, EUR 2,440/mo gross = EUR 29,280/yr)

**Recruiter needed?** No — self-recruit strongly recommended.

**Reasoning:**
- The EUR 29,280/yr salary is below median Berlin Community Manager market rate (market median: EUR 43,500/yr per Glassdoor 2025). This is a below-market startup hire — the candidate pool is people who value mission, culture, and growth opportunity over salary.
- Recruiter fee at 20% would be EUR 5,856 — equivalent to 2.4 months of the hire's salary. For a junior role, this is disproportionate.
- Effective zero-cost channels: Wellfound/AngelList (free tier), Instagram/LinkedIn organic outreach, Berlin wellness/longevity community networks, Daria's existing industry contacts.

**If recruiter used (against recommendation):** EUR 4,400–8,784 (15–30% of EUR 29,280)

**Recommended line item:** EUR 0 (self-recruit via network + free job boards)
**Fallback if network fails:** EUR 500–800 for promoted Wellfound listing ($149–200/mo for one month)
**Timing:** Begin search M4–M5 for M6 start. 4–6 weeks is sufficient for a community manager role.
**Month of expense:** M5

Source: [Glassdoor Community Manager Berlin 2025](https://www.glassdoor.com/Salaries/berlin-germany-community-manager-salary-SRCH_IL.0,14_IM1020_KO15,32.htm), [Wellfound Pricing](https://wellfound.com/recruit/pricing)

---

### Hire 2: Growth Marketer (starts M12, EUR 5,490/mo gross = EUR 65,880/yr)

**Recruiter needed?** Possibly — but avoidable with the right platform strategy.

**Reasoning:**
- EUR 65,880/yr is competitive for a mid-level growth marketer in Berlin (market range for this level: EUR 55,000–75,000/yr).
- Recruiter fee at 20%: EUR 13,176. At 25%: EUR 16,470. Significant for pre-Series A stage.
- A 2-month Wellfound Essentials subscription ($149 x 2 = ~EUR 280) plus a promoted listing ($200 = ~EUR 180) totals ~EUR 460 — vs. EUR 13–16K agency fee. Network hire (Tier 1 option) costs EUR 0.

**Recommended approach:**
1. **First:** Leverage Daria's media/PR network and Timu's marketing network (Berlin startup scene is small — a strong mid-level growth marketer hire is findable this way at zero cost)
2. **Second:** Wellfound Essentials for 1–2 months (~EUR 140/mo equivalent) plus promoted listing (~EUR 180 one-time)
3. **Last resort:** Agency at 20% = EUR 13,176

**Recommended model line item:** EUR 500 (platform fees, self-managed)
**Fallback:** EUR 13,200 if agency required (budget as contingency, not base case)
**Timing:** Begin search M10 for M12 start. Growth marketer roles in Berlin average 6–10 weeks time-to-hire.
**Month of expense:** M11

Source: [Wellfound Berlin Jobs](https://wellfound.com/location/berlin), [Berlin Startup Salary Report](https://berlinstartupjobs.com/startup-salary-survey/), [Berlin Salary Trends 2025](https://handpickedberlin.com/salaries/2025-03/report/)

---

### Hire 3: CTO (starts M17–18, EUR 7,930/mo gross = EUR 95,160/yr)

**Recruiter needed?** Very likely yes — but the fee should be modeled at the lower end of the range.

**Reasoning:**
- The EUR 95,160/yr salary is significantly below the Berlin CTO market median (Glassdoor: EUR 133,000/yr average; SalaryExpert: EUR 182,317). This means alche is hiring either a fractional CTO, a very early-career technical lead, or someone who accepts below-market salary in exchange for meaningful equity. This changes the search profile significantly.
- A below-market CTO hire is more likely to come from the founders' network or mission-driven referral than via a traditional recruiter. Traditional tech recruiters optimize for market-rate placements and may deprioritize below-market searches.
- If agency used: fee at 20% of EUR 95,160 = EUR 19,032. At 25%: EUR 23,790.
- Time-to-hire for technical leadership roles in Germany: **3–5 months** average.

**Recommended approach:**
1. **First (M14–M16):** Angel investor network (Shai's contacts), Berlin tech community (Droidcon, Berlin JS, Startup Weekend), CTO Guild Berlin, Tier 2 VC portfolio CTOs looking for new adventures
2. **Second:** Wellfound + LinkedIn ($200–500 in promoted listings)
3. **Last resort (M15+):** Specialist tech recruiter at 20% = EUR 19,000

**Recommended model line item:** EUR 19,000 (reserve in model; may not be spent)
**Note:** Budget the full EUR 19,000 as a contingency line item in M14–M16, but flag it as "spend only if network search fails at M15." If CTO comes via network, this entire line item converts to EUR 0 savings.
**Timeline:** Begin search no later than M14 (3 months before M17 target start). A fractional arrangement in M17–18 while full-time search continues is also viable.

Source: [Glassdoor CTO Berlin 2025](https://www.glassdoor.com/Salaries/berlin-cto-salary-SRCH_IL.0,6_IM1020_KO15,32.htm), [Dover Tech Recruiter Fees 2025](https://www.dover.com/blog/tech-recruiter-fees-2025-cost-guide), [Gini Talent Germany Recruiting 2025](https://ginitalent.com/how-to-recruit-in-germany-complete-guide-2025/)

---

## SECTION 3: POS SYSTEM FOR PHYSICAL SPACE (M3 SETUP / M4 OPERATION)

### Recommended System: SumUp POS (Germany)

**Why SumUp over Shopify POS or Square:**
- SumUp is headquartered in Berlin and has the strongest German market integration
- EC card (Girocard/Maestro) processing is natively supported — critical for German consumer payments behavior (EC cards remain the dominant payment method in Germany, unlike UK/US where contactless/credit dominates)
- No monthly software lock-in at entry level
- TSE compliance is integrated into their certified POS systems
- German language support and local customer service
- ELSTER registration support documentation available in German

Sources: [SumUp Germany](https://androidepos.de/product-category/sumup/), [SumUp POS Review 2025](https://www.joinstored.com/blogs/sumup-review-a-comprehensive-analysis-of-the-payment-solution-for-small-businesses-in-2025), [SumUp POS Overview](https://www.sumup.com/en-gb/point-of-sale-overview/sumup-pos/)

### Hardware Required

| Component | Item | EUR Cost |
|---|---|---|
| POS bundle | SumUp Kit: iPad + stand + Air card reader + receipt printer + cash drawer | EUR 999 |
| TSE module | Hardware TSE (USB/SD card, 5-year cert) OR Cloud TSE | EUR 200–250 one-time OR EUR 10–20/mo |
| Contingency/cables | Spare receipt paper rolls, power strips, mounting | EUR 50 |
| **TOTAL HARDWARE** | | **EUR 1,249–1,299 (one-time)** |

**TSE requirement (Germany-specific legal compliance):**
Since January 1, 2023, all businesses using electronic POS systems in Germany must have a certified TSE (Technische Sicherheitseinrichtung) under §146a AO / KassenSichV. New in 2025: mandatory ELSTER registration of the POS system and TSE within one month of acquisition. Failure to comply: fines up to EUR 25,000 and tax estimate risk during Kassennachschau. Non-negotiable.

**Recommended TSE choice:** Hardware TSE (~EUR 200–250 one-time). Lower lifetime cost than Cloud TSE subscription. Replace at certificate expiry in ~5 years.

Sources: [KMZ Kassensystem TSE Pflicht 2025](https://kmz-kassensystem.de/aktuell/tse-pflicht-2025-wichtige-aenderungen-fuer-kassensysteme/), [Lexware TSE Guide](https://www.lexware.de/wissen/buchhaltung-finanzen/neue-regelungen-zur-technischen-sicherheitseinrichtung-tse/), [PAYONE KassenSichV 2025](https://www.payone.com/DE-de/ueber-uns/insights/kassensicherungsverordnung)

### Software / SaaS

| Plan | Monthly EUR | Notes |
|---|---|---|
| SumUp Free POS | EUR 0 | Basic features, pay-per-transaction only (1.39%) |
| SumUp POS Essentials | ~EUR 39/mo | Advanced inventory, analytics, multi-staff — recommended |
| SumUp POS Plus (2025 new) | TBC | Launching 2025, for growing retail |

**Recommended:** SumUp POS Essentials at ~EUR 39/mo from M4.
**Transaction fee:** 1.39% per card payment (SumUp Germany rate — lower than Square 2.6% or Shopify 2.9%).

Source: [SumUp POS Pricing](https://www.sumup.com/en-us/pos/sumup-pos/pricing/), [SumUp Support — Preise und Gebühren](https://help.sumup.com/de-DE/articles/4oI3qHHji2I2S9dyvRfec3-preise-gebuehren)

### Model Inputs

- **M3 (one-time CapEx):** EUR 1,250 (POS hardware kit + TSE module)
- **M4 onwards (OpEx):** EUR 39/mo (SaaS software license)
- **Note:** Transaction fees are a variable COGS item (1.39% of card revenue), not a fixed OpEx line. They should be modeled as a COGS deduction against physical space revenue.

---

## SECTION 4: INVENTORY PRE-STOCK (M3, BEFORE SPACE OPENS)

### Industry Standard for Small Wellness Retail Launch

**Baseline calculation (as provided):**
- 50 units × 5 SKUs × EUR 11.50 COGS = **EUR 2,875 minimum opening inventory**

**Industry recommendation:**
The standard retail best practice is to open with **2–3x the minimum expected first-month sell-through** in inventory. This accounts for:
- Unknown initial demand distribution across SKUs
- Supplier lead times (typically 2–4 weeks for European wellness product suppliers)
- The reputational cost of "sold out" on launch is significantly higher than the cost of holding modest overstock

For a boutique wellness launch in Berlin, the specific considerations are:
- Wellness consumers are discovery-oriented — they may want to "browse and try" multiple products on first visit
- A lean launch creates scarcity (positive signal) only if the brand is already known; for a new physical space, scarcity on Day 1 reads as poor planning
- Typical Berlin boutique wellness opening inventory buffer: **2x minimum = EUR 5,750**

**Risk analysis:**

| Scenario | Action | Financial Impact |
|---|---|---|
| Under-stock launch | Lost sales, poor first impression, emergency reorder at premium | Revenue loss + damaged NPS |
| Optimal stock (2x) | Good selection, reorder cycle established | EUR 5,750 tied up as working capital |
| Over-stock (3x) | Excess inventory, cash tied up, potential waste if perishable | EUR 8,625 tied up, some write-off risk |

**Perishability consideration:** If SKUs include consumable wellness products (supplements, tonics, food/beverage), perishability risk increases. Check shelf life vs. expected sell-through at 2x buffer before committing to 3x.

Sources: [Paychex Retail Cash Flow Management](https://www.paychex.com/articles/finance/retail-cash-flow-management), [Ankorstore Cash Flow Statements](https://blog.ankorstore.com/cash-flow-statements/), [Retailowner.com Cash Flow Planning](https://retailowner.com/Cash/Cash-Flow-Planning)

### Recommended Model Input

- **M3 (one-time, CapEx/inventory asset):** EUR 5,750 (2x minimum opening inventory)
- **Classification:** Inventory asset on balance sheet; transitions to COGS when sold
- **Replenishment cycle:** Model monthly inventory purchases starting M4 at EUR 1,150–2,000/mo (variable, dependent on sell-through)
- **Cash flow note:** This EUR 5,750 outflow in M3 must be funded before the space opens. It is in addition to the EUR 50K Ablöse and EUR 25K buildout already modeled.

---

## SECTION 5: GEMA MUSIC LICENSE

### Tariff Clarification

The correct tariff for a wellness space playing background music via streaming/playlist is **Tarif M-U** (Hintergrundmusik mit Tonträgern), NOT Tarif M-V (which applies to live events and dances). This is confirmed by GEMA's own branch guide.

Source: [GEMA Tarif M-U](https://www.gema.de/de/musiknutzer/tarifuebersicht/tarif-m-u), [GEMA Einzelhandel](https://www.gema.de/de/musiknutzer/branchen/einzelhandel)

### Fee Estimates (2025)

GEMA does not publish a simple public price list; fees are calculated via their portal based on space size and media type. However, from official GEMA communications and third-party analysis:

| Space size | Annual GEMA fee (Tarif M-U, audio streaming) |
|---|---|
| Under 100 sqm | ~EUR 117/year (confirmed reference from official GEMA FAQ context) |
| Up to 200 sqm (radio) | EUR 448.90/year (confirmed 2025 rate) |
| Up to 200 sqm (streaming/CD) | ~EUR 221.20/year (confirmed 2025 rate) |

**For alche's 40–60 sqm space:**
- Estimated annual fee: **EUR 100–150/year** (streaming/audio, Tarif M-U, under 100 sqm)
- Monthly equivalent: **EUR 8.30–12.50/mo**
- Use EUR 117/year (EUR 9.75/mo) as the model line item

Sources: [GEMA Einzelhandel FAQ](https://www.gema.de/en/w/help/users/use-music/branches-more/fee-retail-trade), [Sonicsense GEMA Costs 2025](https://www.sonicsense.de/en/2025/08/25/gema-kosten-2025/), [Shopdirect GEMA Einzelhandel Guide](https://www.shopdirect-online.de/ratgeber/rechtliche-aspekte-und-sicherheit/gema-im-einzelhandel-leitfaden-zu-gebuehren-und-rechten/)

### Spotify / Apple Music: NOT licensed for business use

Confirmed: Streaming services including Spotify, Apple Music, and YouTube Music are licensed for **private use only**. Using them in a commercial space (including a wellness boutique with paying customers) constitutes copyright infringement. GEMA can and does audit businesses and will invoice for unauthorized use at **double the standard rate**.

### GEMA-Free Alternative

If alche wants to avoid GEMA entirely (and Spotify cannot be used commercially regardless):

| Service | Monthly Cost | Notes |
|---|---|---|
| Soundtrack Your Brand (Soundtrack.io) | ~EUR 25–35/mo | Handles its own licensing; no separate GEMA payment needed for covered repertoire |
| Sonicsense | ~EUR 10–35/mo | GEMA-free curated catalogue with legal certificates |
| TerraSound | One-time license | No subscription; purchase licence once |

**Recommendation:** The EUR 9.75/mo GEMA fee for a sub-100 sqm space is trivially small and fully compliant. Use GEMA registration (annual payment) paired with a **Soundtrack Your Brand subscription** (~EUR 25–35/mo) which provides the curated music experience AND handles licensing. Total cost: ~EUR 35/mo with Soundtrack's licensed catalogue (GEMA may or may not be required separately depending on Soundtrack's Germany licensing arrangement — confirm with Soundtrack's Germany team).

**Simplest approach for the model:** Budget EUR 35/mo for licensed music (covers either GEMA direct + streaming service, or Soundtrack all-in).

Sources: [Soundtrack Licensing Germany](https://www.soundtrack.io/licensing/germany/), [Sonicsense GEMA-Free Germany 2025](https://www.sonicsense.de/en/2025/06/20/gema-lizenz-vs-gema-frei-unterschiede/), [GEMA Tarife 2025](https://www.gema.de/de/musiknutzer/tarifuebersicht/tarife-2025)

### Model Input

- **M4 onwards:** EUR 35/mo (licensed music — Soundtrack subscription)
- **Annual pre-payment option:** EUR 117 direct GEMA Tarif M-U if going GEMA direct + Spotify alternative (but Spotify is not permitted)
- **CapEx:** EUR 0
- **Classification:** OpEx, compliance-mandatory

---

## SECTION 6: RUNDFUNKBEITRAG (GERMAN BROADCASTING FEE)

### Confirmed Rate (2025)

The Rundfunkbeitrag for business premises is calculated on a sliding scale based on number of employees per Betriebsstätte (location).

| Scale | Employees | Monthly Rate | Basis |
|---|---|---|---|
| Scale 1 | 0–8 employees | **EUR 6.12/mo** | 1/3 of base rate |
| Scale 2 | 9–19 employees | EUR 12.24/mo | 2/3 of base rate |
| Scale 3 | 20–49 employees | EUR 18.36/mo | Full base rate |

**Confirmed 2025 rate:** EUR 18.36/mo household base rate. Fee frozen through 2027 (German federal states voted to maintain rate in late 2024). Business rate at Scale 1 (0–8 employees) = **EUR 6.12/mo**.

**Is this per location?** Yes — per Betriebsstätte (premises). When alche opens the physical space (M4), this triggers a new Betriebsstätte registration at EUR 6.12/mo. Note: if founders are also paying the household Rundfunkbeitrag at their private address, they receive a credit so that the total does not exceed the household rate. The EUR 6.12 is net incremental cost for the business location.

**Annual cost:** EUR 73.44/year (EUR 6.12 × 12)

**Key point:** This is mandatory. Businesses that fail to register their Betriebsstätte can face retrospective billing plus penalties.

Sources: [Rundfunkbeitrag.de — Companies and Institutions](https://www.rundfunkbeitrag.de/welcome/englisch/companies_institutions_and_public_interest_bodies/index_ger.html), [Firma.de Broadcasting Fee Germany](https://www.firma.de/en/business-management/broadcasting-fee-germany-business-owners/), [IAmExpat Rundfunkbeitrag 2025](https://www.iamexpat.de/expat-info/germany-news/rundfunkbeitrag-germanys-tv-radio-tax-and-how-pay-it-or-legally-avoid)

### Model Input

- **M4 onwards:** EUR 6.12/mo (quarterly billing, approx. EUR 18.36/quarter)
- **Annual total:** EUR 73.44
- **Classification:** OpEx, compliance-mandatory
- **CapEx:** EUR 0
- **Note:** Register via ARD ZDF Deutschlandradio Beitragsservice within one month of opening the physical location

---

## COMPLETE GAP SUMMARY TABLE

| Item | EUR Amount | Month Starts | CapEx/OpEx | Payment Type | Priority | Notes |
|---|---|---|---|---|---|---|
| Physical space Kaltmiete (50 sqm, B-loc) | EUR 1,200/mo | M4 | OpEx | Monthly | **Must-Have** | Replace EUR 750 co-working from M4 |
| Nebenkosten (~20% of Kaltmiete) | EUR 240/mo | M4 | OpEx | Monthly | **Must-Have** | Bundled into lease |
| Space utilities (electric, heat, internet) | EUR 200/mo | M4 | OpEx | Monthly | **Must-Have** | Separately metered |
| Security deposit (3x Kaltmiete) | EUR 3,600 | M3 | Balance Sheet | One-time | **Must-Have** | Returned at lease end; not P&L expense |
| Co-working exit (1-month overlap) | EUR 750 | M3 | OpEx | One-time | **Must-Have** | One month of parallel cost at transition |
| Recruiter — Community Manager | EUR 0 (self-recruit) | M5 | OpEx | One-time | **Should-Have** | EUR 500 fallback if Wellfound needed |
| Recruiter — Growth Marketer | EUR 500 (platform fees) | M11 | OpEx | One-time | **Should-Have** | EUR 13,200 contingency if agency |
| Recruiter — CTO | EUR 19,000 (contingency) | M14 | OpEx | One-time | **Must-Have** | Only spend if network search fails; budget in model |
| POS hardware kit (SumUp + TSE) | EUR 1,250 | M3 | CapEx | One-time | **Must-Have** | TSE legally required in Germany |
| POS software (SumUp Essentials) | EUR 39/mo | M4 | OpEx | Monthly | **Must-Have** | SaaS license |
| Opening inventory pre-stock (2x buffer) | EUR 5,750 | M3 | Inventory Asset | One-time | **Must-Have** | COGS when sold; working capital requirement |
| GEMA / licensed music (Soundtrack) | EUR 35/mo | M4 | OpEx | Monthly | **Must-Have** | Spotify is NOT permitted for commercial use |
| Rundfunkbeitrag (business premises) | EUR 6.12/mo | M4 | OpEx | Quarterly | **Must-Have** | Mandatory business registration |

---

## SUPPLEMENTARY NOTES FOR MODEL INTEGRATION

### Total New OpEx Additions at M4 (monthly, mid-case)

| Line | EUR/mo |
|---|---|
| Kaltmiete (vs. EUR 750 co-working ending) | +EUR 1,440 (net +EUR 690) |
| Utilities | +EUR 200 |
| POS software | +EUR 39 |
| Licensed music | +EUR 35 |
| Rundfunkbeitrag | +EUR 6 |
| **Net new monthly OpEx at M4** | **+EUR 970/mo above M3 baseline** |

### One-Time Outlays in M3 (before space opens)

| Item | EUR |
|---|---|
| Security deposit | EUR 3,600 (balance sheet) |
| Co-working final month | EUR 750 |
| POS hardware + TSE | EUR 1,250 |
| Opening inventory | EUR 5,750 |
| **Total M3 one-time cash requirement** | **EUR 11,350** |

Note: This EUR 11,350 is in addition to the EUR 75,000 CapEx (EUR 50K Ablöse + EUR 25K buildout) already modeled. The complete cash requirement before the space opens is approximately EUR 86,350.

### CTO Recruitment Contingency

Budget EUR 19,000 as a deferred contingency line item in M14–M16. Flag in the model as:
"CTO recruitment — contingency, network-first (may not be incurred)"
This prevents the number from shocking investors while ensuring the model is honest about the scenario where CTO is not found via network.

---

## SOURCES INDEX

- [ImmobilienScout24 — Berlin Gewerbeimmobilien Prenzlauer Berg](https://www.immobilienscout24.de/Suche/de/berlin/berlin/pankow/prenzlauer-berg/gewerbeimmobilien)
- [ImmobilienScout24 — Berlin Gewerbeimmobilien Mitte](https://www.immobilienscout24.de/Suche/de/berlin/berlin/mitte-mitte/gewerbeimmobilien)
- [JLL Berlin-Mitte Gewerbeimmobilien](https://gewerbeimmobilien.jll.de/gewerbe/gewerbeimmobilien-berlin-mitte)
- [IVD Gewerbemieten Berlin 2025](https://www.ivd-bildungsinstitut.de/gewerbemieten-in-berlin-2025/)
- [Investropa — Average Berlin Rent per sqm 2025](https://investropa.com/blogs/news/average-rent-per-sqm-berlin)
- [GEMA Tarif M-U (Hintergrundmusik)](https://www.gema.de/de/musiknutzer/tarifuebersicht/tarif-m-u)
- [GEMA Einzelhandel — Branchen Guide](https://www.gema.de/de/musiknutzer/branchen/einzelhandel)
- [GEMA Fee for Retail Trade (EN)](https://www.gema.de/en/w/help/users/use-music/branches-more/fee-retail-trade)
- [GEMA Tarife 2025 Overview](https://www.gema.de/de/musiknutzer/tarifuebersicht/tarife-2025)
- [Sonicsense — GEMA Costs 2025](https://www.sonicsense.de/en/2025/08/25/gema-kosten-2025/)
- [Sonicsense — GEMA-Free vs GEMA 2025](https://www.sonicsense.de/en/2025/06/20/gema-lizenz-vs-gema-frei-unterschiede/)
- [Soundtrack — Music Licensing Germany](https://www.soundtrack.io/licensing/germany/)
- [Soundtrack — Pricing](https://www.soundtrack.io/pricing/)
- [Rundfunkbeitrag.de — Companies and Institutions (EN)](https://www.rundfunkbeitrag.de/welcome/englisch/companies_institutions_and_public_interest_bodies/index_ger.html)
- [Firma.de — Broadcasting Fee for Business Germany](https://www.firma.de/en/business-management/broadcasting-fee-germany-business-owners/)
- [IAmExpat — Rundfunkbeitrag Exemption Changes 2025](https://www.iamexpat.de/expat-info/germany-news/rundfunkbeitrag-exemption-rules-change-october-2025)
- [KMZ Kassensystem — TSE Pflicht 2025](https://kmz-kassensystem.de/aktuell/tse-pflicht-2025-wichtige-aenderungen-fuer-kassensysteme/)
- [Lexware — TSE Kassensystem Guide](https://www.lexware.de/wissen/buchhaltung-finanzen/neue-regelungen-zur-technischen-sicherheitseinrichtung-tse/)
- [PAYONE — Kassensicherungsverordnung 2025](https://www.payone.com/DE-de/ueber-uns/insights/kassensicherungsverordnung)
- [SumUp POS Overview](https://www.sumup.com/en-gb/point-of-sale-overview/sumup-pos/)
- [SumUp Germany — Products](https://androidepos.de/product-category/sumup/)
- [SumUp POS Pricing](https://www.sumup.com/en-us/pos/sumup-pos/pricing/)
- [SumUp Review 2025](https://www.joinstored.com/blogs/sumup-review-a-comprehensive-analysis-of-the-payment-solution-for-small-businesses-in-2025)
- [Eurojob Consulting — Recruitment Costs Germany](https://www.eurojob-consulting.com/en/a/recruitment-costs-in-germany-what-you-need-to-know-and-how-to-reduce-them)
- [Dover — Tech Recruiter Fees 2025](https://www.dover.com/blog/tech-recruiter-fees-2025-cost-guide)
- [Glassdoor — Community Manager Berlin 2025](https://www.glassdoor.com/Salaries/berlin-germany-community-manager-salary-SRCH_IL.0,14_IM1020_KO15,32.htm)
- [Glassdoor — CTO Berlin 2025](https://www.glassdoor.com/Salaries/berlin-cto-salary-SRCH_IL.0,6_IM1020_KO7,10.htm)
- [Wellfound — Berlin Jobs](https://wellfound.com/location/berlin)
- [Wellfound — Pricing](https://wellfound.com/recruit/pricing)
- [Hiring Hub — Recruitment Agency Fees Europe](https://www.hiring-hub.com/resources/recruitment-agency-fees-across-europe)
- [Berlin Startup Salary Report](https://berlinstartupjobs.com/startup-salary-survey/)
- [Handpicked Berlin — Salary Trends 2025](https://handpickedberlin.com/salaries/2025-03/report/)
- [Paychex — Retail Cash Flow Management](https://www.paychex.com/articles/finance/retail-cash-flow-management)
- [Ankorstore — Cash Flow Statements Guide](https://blog.ankorstore.com/cash-flow-statements/)

---

*Research completed 2026-02-25. All EUR figures are net (excluding German VAT/MwSt) unless otherwise noted. VAT on business expenses is generally recoverable via Vorsteuerabzug for registered businesses.*
