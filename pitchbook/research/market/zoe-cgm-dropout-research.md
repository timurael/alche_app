# ZOE Dropped CGM: Full Research Brief

**Purpose:** Investor rebuttal preparation for alche pitch conversations.
**Key question:** "ZOE dropped CGM. Why are you picking it up?"
**Last updated:** 2026-02-23

---

## 1. Timeline: When ZOE Dropped CGM

- **September 30, 2025:** ZOE publicly announced **ZOE 2.0**, removing the CGM sensor, blood fat test, and standardized test cookies from the product.
- **December 10, 2025:** ZOE 2.0 page updated with fuller details and the transition was complete.
- **Sell-off period (Sept-Dec 2025):** ZOE sold remaining old-format test kits at a discount, noting "there will be no more test kits available in the old version once remaining stock is sold."

ZOE framed this as a product evolution, not a retreat. Their official language: "We have removed the need for eating cookies, blood fat, and continuous glucose monitors from ZOE 2.0."

---

## 2. ZOE's Official Reasoning (and What It Actually Means)

### What ZOE said:
> "Thanks to the data we have collected, our ZOE algorithm can now predict your blood fat and blood glucose response by asking carefully selected health questions. This means your advice is instantly personalized when you download the app -- no waiting times and instant access to our science."

### The stated reasons:
1. **Algorithmic sufficiency:** With hundreds of thousands of CGM datasets collected over 8 years, ZOE claims their AI can now predict glucose responses from questionnaire data alone.
2. **Accessibility:** Removing hardware drops the price dramatically. Old kit: GBP 299 + GBP 24.99/month. ZOE 2.0: Available at "lowest ever price" with no mandatory test kit.
3. **Speed to value:** No more waiting for a kit to ship, wearing a sensor for 14 days, and waiting for results. Instant personalization on download.
4. **Scale:** "Our mission has always been to improve the health of millions" -- hardware-bundled kits were a bottleneck to mass adoption.

### What the data actually suggests (reading between the lines):

**A. Unit economics were brutal.**
- ZOE's kit included an Abbott FreeStyle Libre 2 sensor (UK retail: ~GBP 50 ex-VAT per sensor) + stool sample kit + blood fat test + standardized cookies + shipping.
- Physical kit COGS likely ate a huge portion of the GBP 299 upfront fee.
- A pricing strategy analysis from someone who worked on ZOE's pricing noted: "The 'wow' effect comes from the test, the CGM, and the test results; however, profit margins are easier to achieve from subscriptions." This is the central tension: the thing that attracted customers (hardware) was the thing destroying margins.
- Over 70% of ZOE's revenue (as of mid-2025) was from recurring subscription memberships. The test kit was a customer acquisition cost, not a profit center.

**B. Retention didn't justify the hardware cost.**
- Users wore the CGM for only 14 days. After that, the CGM was gone and users were left with app-only recommendations.
- Multiple reviewers noted that during the 14-day CGM period, ZOE's app gave "little beyond what the Libre app already showed."
- The transition from "real-time biofeedback" to "app scores and recommendations" was jarring, and likely drove churn.

**C. Regulatory pressure was mounting.**
- In 2024, UCL researchers published a narrative review in *Diabetic Medicine* calling CGM use by non-diabetics "off-label" and urging that "commercial claims suggesting the utility of the device in PNLD [people not living with diabetes] be labelled as misleading."
- The MHRA undertook a public consultation to rearticulate "intended purpose" for medical devices, with CGMs specifically in scope.
- ZOE required users to consent to their "clinical study" to receive the CGM -- a workaround that may not have been sustainable under tightening regulations.

**D. Abbott's own moves threatened the model.**
- Abbott launched **Lingo** (OTC wellness CGM) in the UK and US in 2024, going direct-to-consumer. Why would Abbott keep giving ZOE favorable bulk pricing when Abbott was building its own competing wellness product?
- This is the classic platform risk: ZOE's CGM experience depended entirely on a supplier who was becoming a competitor.

---

## 3. ZOE's Original CGM Model

| Component | Detail |
|---|---|
| **Sensor** | Abbott FreeStyle Libre 2 |
| **Duration** | 14-day wear period (one-time, not continuous subscription) |
| **Companion app** | FreeStyle LibreLink (Abbott's app) -- ZOE required users to download this separately |
| **Data flow** | Sensor -> LibreLink app -> ZOE app (via integration) |
| **Kit price** | GBP 299 (included CGM + stool sample kit + blood fat test + cookies) |
| **Subscription** | GBP 24.99/month for ongoing app access |
| **CGM purpose** | Calibrate the algorithm to the individual user, then use predictive model going forward |
| **Research use** | In ZOE PREDICT studies, they tested both Abbott Freestyle Libre Pro and Dexcom G6, but only shipped Libre to consumers |

The fundamental design was: wear CGM once -> train the model -> use the model forever. The CGM was a calibration tool, not an ongoing engagement mechanism.

---

## 4. Market and User Reaction

### User backlash (Trustpilot, forums):
- **"True enshittification"**: One reviewer called ZOE 2.0 "true enshittification of what was something useful," criticizing childish gamification ("earning beans"), patronizing AI coach ("Ziggie"), and removal of community chat boards.
- **Founding member cancellation**: "As a founding member I was with Zoe nutrition from the beginning... the new App has led me to cancel my subscription. It feels as though it has been dumbed down."
- **CGM was the draw**: Multiple users cited the CGM as "one of the big reasons" they tried ZOE. Without it, the product felt like "just another nutrition app."
- **Predictive accuracy questioned**: A Mumsnet user reported: "I had some food recommended to me that spiked my blood sugar when I wore a second CGM. They don't have enough evidence to really predict how foods will affect each person."

### Media/expert reaction:
- **The Oxford Scientist** questioned "how insightful the use of a CGM to track blood glucose levels in individuals with normal levels is."
- **Wired** quoted a dietician saying CGMs were "just making them quite weird about food... for no reason whatsoever."
- **BJGP Life** noted ZOE was "only affordable to the nutritionally curious middle class."
- **The Spectator** questioned whether the glucose monitoring craze was "really so healthy."

### Industry reaction:
- ZOE's move was broadly interpreted as a signal that **sensor-bundled wellness CGM is not a sustainable business model at scale** -- the hardware costs, regulatory headwinds, and supplier dependency make it untenable.
- Competitors like Nutrisense and Signos, which still bundle sensors, watched closely.

---

## 5. The Broader CGM Startup Graveyard

ZOE is not the only company to struggle with CGM hardware bundling:

### Supersapiens (Shut down February 2024)
- **What they did:** Software platform for athletes using Abbott Libre Sense glucose biosensor.
- **Why they failed:**
  - Total dependency on Abbott for sensors (exclusive partnership that became a cage).
  - Could not get FDA approval, limiting to Europe only.
  - Net revenue in 2023: ~EUR 1.3M (after years of operation).
  - Sensor cost to end users: ~GBP 110/month. Margins likely razor-thin.
  - Abbott imposed connectivity restrictions (users needed phones for Garmin integration).
  - UCI banned their use in pro cycling races.
  - Cash crunch prevented US market pivot.
- **Key lesson:** Total hardware dependency + no regulatory pathway + slim margins = death.

### Levels Health (Major layoffs May 2023, still operating but pivoting)
- Laid off ~50% of design and engineering staff.
- Pivoted toward a software-focused model where the app can be used without a CGM.
- Added blood testing and coaching as revenue streams.
- Revenue: ~$21M in 2023 (healthy but growth slowed).
- Raised $46M total. Currently experimenting with free/freemium models.

### January AI (Pivoted to fully software-only)
- Originally paired CGM with AI predictions.
- Now offers a CGM-free glucose prediction app using AI trained on clinical trial data from thousands of users' CGM + fitness tracker + food log data.
- Named one of TIME's Best Inventions of 2025.
- Their "Virtual CGM" predicts glucose from photos, barcodes, and demographic data -- no sensor required.
- **Key lesson:** The puck is moving toward software-only prediction. January AI proves the concept.

---

## 6. What This Means for Startups Considering CGM

### The sensor-bundling model is dying. Here's why:

1. **COGS kill margins.** Libre sensors cost ~GBP 50 retail. Even at bulk pricing, shipping a physical sensor eats your margin on a GBP 19-99/month subscription.

2. **Supplier becomes competitor.** Abbott (Lingo) and Dexcom (Stelo) are going direct-to-consumer. They have no incentive to give you favorable pricing when they're building their own apps.

3. **Regulatory walls are closing.** The MHRA, UCL researchers, and the EU medical device regulation framework are all moving toward tighter scrutiny of non-diabetic CGM use. If you're bundling sensors, you're in the regulatory crosshairs.

4. **One-time calibration is not a retention engine.** ZOE proved that a 14-day CGM stint doesn't create lasting engagement. Users get the "wow" and then churn.

5. **Logistics are a nightmare.** Shipping perishable medical devices internationally, handling returns, managing expiry dates, customs clearance -- this is a distraction from building great software.

### But CGM data itself is more valuable than ever:

- Dexcom Stelo is FDA-cleared OTC and available for ~$50/month (user-purchased).
- Abbott Lingo is available in the UK and US without prescription.
- Dexcom has FDA-cleared real-time APIs for third-party developers (OAuth 2.0, RESTful).
- Oura invested in Dexcom integration ($75M Dexcom investment in Oura, Nov 2024).
- The ecosystem is opening up -- the hardware problem is being solved by the hardware companies.

---

## 7. Counter-Arguments: Why alche's Software-Only CGM Approach Works

### The investor question:
> "ZOE dropped CGM. Why are you picking it up?"

### The answer:

**We're not picking up what ZOE dropped. We're doing the opposite of what ZOE did.**

ZOE bundled sensors. We don't touch sensors. ZOE used CGM as a one-time calibration tool. We use CGM as an ongoing coaching layer. ZOE bore the COGS. We let the user BYOD. These are fundamentally different business models.

### Key differences:

| Dimension | ZOE (old model) | alche (BYOD model) |
|---|---|---|
| **Sensor ownership** | ZOE purchased and shipped Abbott Libre sensors | User buys their own Dexcom/Libre sensor |
| **COGS exposure** | ~GBP 50+ per sensor in kit cost | Zero hardware COGS |
| **Regulatory posture** | Bundling sensors required "clinical study" consent workaround | Software-only = wellness app, not medical device distributor |
| **CGM role** | One-time 14-day calibration, then discarded | Ongoing interpretation/coaching layer for as long as user wears sensor |
| **Engagement model** | CGM -> algorithm -> app scores (CGM gone after 14 days) | Continuous real-time coaching + CGM data interpretation |
| **Supplier dependency** | Totally dependent on Abbott pricing and supply | Sensor-agnostic: works with Dexcom Stelo, Dexcom G7, Libre 2/3, Lingo |
| **Margin structure** | Hardware-heavy upfront, subscription retention problem | Pure software subscription, near-zero marginal cost |
| **Integration** | Required users to download LibreLink separately | Integrates via Dexcom API (FDA-cleared real-time), Apple Health, Google Health Connect |

### Why the timing is right for BYOD CGM:

1. **OTC sensors now exist.** Dexcom Stelo and Abbott Lingo made CGM available without prescription. The "how do I get a sensor?" friction is gone.

2. **APIs are mature.** Dexcom's developer portal offers production-ready OAuth 2.0 APIs. Connected partners include Oura, Nutrisense, Signos, and dozens more. The plumbing exists.

3. **The interpretation gap is the real opportunity.** Raw glucose data is meaningless to most people. Tim Spector himself said: "I think CGMs are very hard to use if you're not given any instructions... it can cause quite a bit of stress or worry." alche fills the interpretation gap: not the sensor, but the sense-making.

4. **ZOE validated the data, then abandoned the interface.** ZOE spent 8 years and 300K+ CGM datasets proving that glucose data is predictive of health outcomes. Then they removed the user's ability to see their own real-time data. That's an opportunity gap.

5. **The hardware manufacturers want software partners.** Dexcom invested $75M in Oura for integration. They're building an ecosystem of connected apps. They want companies like alche to increase sensor sell-through. This is an aligned incentive, not a conflict.

6. **January AI proves software-only works.** Named TIME's Best Invention of 2025, January AI showed that glucose interpretation is a software problem. But they went fully virtual (no sensor). alche occupies the middle ground: real sensor data + intelligent software interpretation.

### The one-liner rebuttal:

> "ZOE dropped the sensor because bundling hardware destroyed their margins and created supplier dependency. We never touch hardware. We're the interpretation layer -- pure software, BYOD sensors. ZOE proved that glucose data predicts health outcomes with 300K profiles. We're building on their science without repeating their business model mistake."

---

## 8. Risk Factors to Acknowledge

Be honest with investors about these:

1. **Market still nascent for non-diabetic CGM.** The UCL researchers are right that evidence for non-diabetic CGM use is thin. alche needs to frame CGM data as one input among many in a holistic longevity protocol, not as the entire product.

2. **API dependency.** BYOD still depends on Dexcom/Abbott APIs. If they restrict third-party access, the model breaks. Mitigation: diversify across sensor brands, support Apple Health/Google Health Connect as backup data pipes.

3. **User willingness to self-purchase sensors.** Dexcom Stelo costs ~$50/month. Adding a EUR 19-99/month alche subscription means total cost of EUR 70-150/month. The audience needs to be affluent and motivated. (Berlin tech workers at EUR 75K gross are the right demo.)

4. **"Just another glucose app" risk.** Nutrisense, Signos, Levels, and Veri all offer CGM interpretation. alche's differentiation must be the longevity lifestyle context -- CGM is one pillar alongside sleep, stress, movement, and community, not the whole product.

---

## 9. Key Data Points for Pitch Conversations

- ZOE raised ~$118-133M total funding at a $250M valuation (Dec 2022).
- ZOE had ~88,000 paying members as of August 2025.
- ZOE's 2023 revenue: ~$80M (Latka) or ~$37M (CB Insights) depending on entity.
- ZOE collected 300,000+ microbiome profiles and presumably a comparable number of CGM datasets.
- Supersapiens: shut down Feb 2024, ~EUR 1.3M net revenue in 2023.
- Levels: $21M revenue in 2023, 50% staff layoffs, pivoting to software-only.
- January AI: TIME Best Invention 2025 for CGM-free glucose prediction.
- Dexcom Stelo: first FDA-cleared OTC CGM (2024), ~$50/month.
- Abbott Lingo: OTC wellness CGM available in UK and US (2024).
- Dexcom invested $75M in Oura for CGM data integration (Nov 2024).

---

## Sources

- [ZOE 2.0: Simpler Personalized Nutrition at Your Fingertips](https://zoe.com/learn/zoe-2-0-science-made-simple)
- [ZOE FAQs](https://zoe.com/en-us/faqs)
- [ZOE Continuous Glucose Monitor page](https://zoe.com/continuous-glucose-monitor)
- [ZOE Pricing Strategy Case Study (MTsireud)](https://mtsireud.com/tag/business-model/)
- [ZOE Trustpilot Reviews](https://www.trustpilot.com/review/zoe.com)
- [ZOE Crowdcube Campaign (Oct 2025)](https://www.crowdcube.com/zoe)
- [ZOE Revenue Data (Latka)](https://getlatka.com/companies/zoe)
- [ZOE Funding Overview (Clay)](https://www.clay.com/dossier/zoe-funding)
- [ZOE Deloitte UK Fast 50 2024](https://www.deloitte.co.uk/fast50/winners/2024/winner-profiles/zoe/)
- [ZOE TechCrunch: $15M raise for US expansion](https://techcrunch.com/2024/07/30/nutrition-microbiome-zoe/)
- [Supersapiens Shutdown (DC Rainmaker)](https://www.dcrainmaker.com/2024/02/supersapiens-announces-shutting.html)
- [Supersapiens Closure (road.cc)](https://road.cc/content/news/supersapiens-terminates-all-memberships-amid-restructuring-307049)
- [UCL: CGM Use by Non-Diabetics Needs More Regulation](https://www.ucl.ac.uk/news/2024/jun/use-glucose-monitors-people-not-living-diabetes-needs-more-regulation)
- [Oganesova et al. (2024) Narrative Review in Diabetic Medicine](https://onlinelibrary.wiley.com/doi/10.1111/dme.15369)
- [BJGP Life: Uncertain Promise of CGMs in Non-Diabetic People](https://bjgplife.com/the-uncertain-promise-of-continuous-glucose-monitors-in-non-diabetic-people/)
- [STAT News: Glucose Sensors Straddle Medical Device and Wellness Tool](https://www.statnews.com/2025/08/20/dexcom-continuous-glucose-monitor-medical-device-wellness-fda/)
- [FDA Clears First OTC CGM (Dexcom Stelo)](https://www.fda.gov/news-events/press-announcements/fda-clears-first-over-counter-continuous-glucose-monitor)
- [Abbott Lingo Launch](https://abbott.mediaroom.com/2024-09-05-Abbotts-Lingo-TM-Continuous-Glucose-Monitor-for-Health-and-Wellness-Now-Available-in-the-U-S)
- [Dexcom Developer API](https://developer.dexcom.com/)
- [Stelo Connected Partners](https://www.stelo.com/en-us/partners)
- [Dexcom Invests $75M in Oura](https://www.medicaldevice-network.com/news/oura-rolls-out-glucose-app-linked-with-dexcoms-cgm-stelo/)
- [January AI: TIME Best Inventions 2025](https://time.com/collections/best-inventions-2025/7318362/january-ai/)
- [January AI Glucose Prediction Without Sensor](https://insider.fitt.co/press-release/january-ai-launches-the-worlds-first-glucose-prediction-app-scan-your-food-see-the-impact-all-without-a-glucose-monitor/)
- [Fitt Insider: Glucose Monitoring Startups Scale Up](https://insider.fitt.co/glucose-monitoring-and-metabolic-health-startups-scale-up/)
- [Fitt Insider: Future of Metabolic Health](https://insider.fitt.co/the-future-of-metabolic-health/)
- [Abbott FreeStyle Libre UK Pricing](https://www.freestyle.abbott/uk-en/getting-started/costandcoverage.html)
- [Griffen Fitness: Honest Review of ZOE](https://www.griffenfitness.com/blog/an-honest-review-of-zoe)
- [Honest Brand Reviews: ZOE Test Kit Review](https://www.honestbrandreviews.com/reviews/zoe-test-kit-review/)
- [healthHackers: Why I Quit ZOE](https://healthhackers.org/handson/part-2-my-zoe-nutrition-experience-and-why-i-quit)
- [Oxford Scientist: Promises of Personalised Nutrition](https://oxsci.org/the-promises-of-personalised-nutrition/)
- [ZOE Co-Founder Interview (George Hadjigeorgiou, tryterra)](https://tryterra.co/blog/Live-Interview-Cofounder-of-ZOE-George-Hadjigeorgiou)
