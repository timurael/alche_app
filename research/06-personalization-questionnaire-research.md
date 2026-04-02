# Personalization & Self-Assessment Research
## For Alche Goal-Setting Flow Design

> **Research date:** 2026-03-19
> **Purpose:** Inform the design of Alche's tiered onboarding questionnaire, GlowScan integration, and progressive personalization system.
> **Context:** Alche is a longevity wellness app (iOS, SwiftUI) with a "Neo-Apothecary Glass" design language (Aesop meets science). Target: health-conscious Europeans, 27-40. The app already has GlowScan (appearance-based skin analysis), Biomarker Dashboard (mock for MVP), and protocol/goal systems in the roadmap.

---

## 1. Competitive Personalization Flows

### 1.1 Rootine (DNA + Blood + Lifestyle)

| Dimension | Detail |
|-----------|--------|
| **Quiz length** | 18-33 questions (sources vary; likely ~20 core + optional deep questions) |
| **Time** | ~5-10 minutes |
| **Data tiers** | Tier 1: Free lifestyle quiz. Tier 2: DNA test ($125 or upload 23andMe/Ancestry). Tier 3: Blood nutrient test ($125) |
| **Questions asked** | Age, biological sex, height/weight (BMI), dietary type (keto/paleo/vegan/vegetarian/omnivore), food frequency (dairy, fruit, veg, gluten, fish), smoking status, exercise/activity level, stress level (low/moderate/high/extreme), energy levels, health goals, current supplements |
| **UX details** | Progress bar, back arrow for corrections, explanatory lines at each data collection step to build trust, data confidentiality disclaimers at key moments |
| **Personalization depth** | Quiz alone = directional baseline. DNA = 50+ gene variants affecting nutrient needs/absorption. Blood = actual nutrient levels (folate, B12, D, hsCRP, homocysteine, Mg, Cu, Zn, Se). All three combined = truly personalized formula with specific dosages |
| **Output** | Custom supplement packs with individual nutrient dosages, delivered monthly. Dashboard showing personalized nutrition plan |
| **Status (2025)** | Microbead format paused as of Feb 2025. Quiz + personalization engine still active. $94/mo subscription, 3-month minimum |

**Key takeaway for Alche:** Rootine proves that a free quiz is an effective top-of-funnel, but the real value unlock is biological data. Their tiered approach (quiz > DNA > blood) is the gold standard for progressive data collection. The trust-building UX elements (explanatory lines, progress bar) are worth emulating.

---

### 1.2 Viome (Gut Microbiome + Health Intelligence)

| Dimension | Detail |
|-----------|--------|
| **Quiz length** | Comprehensive -- 30-70 minutes depending on health complexity |
| **Time** | 30-70 minutes (not a typo -- this is extremely thorough) |
| **Data tiers** | No free tier. All require kit purchase. Gut Intelligence ($149), Health Intelligence ($249), Full Body Intelligence ($349) |
| **Questionnaires used** | PROMIS (GI symptoms), PHQ-9 (mood/depression), GAD-7 (anxiety), plus detailed health history, dietary preferences, health goals, digestive health history, lifestyle factors |
| **Biological samples** | Stool (gut microbiome), blood (health intelligence), saliva (oral microbiome) |
| **Analysis method** | RNA sequencing (not just DNA -- captures what microbes are actively doing) + proprietary AI |
| **Output** | 50+ health scores (0-100) across gut, heart, immune, cellular health. Food recommendations (add/limit/avoid with scientific rationale). Custom supplement formulation (vitamins, minerals, herbs, probiotics) |
| **Personalization depth** | Extremely deep. Supplements can be adjusted monthly based on new research or ingredient availability. Questionnaire answers + biological data together drive dynamic recommendations |

**Key takeaway for Alche:** Viome's questionnaire is far too long for onboarding (30-70 min is a clinical intake, not an app flow). However, their use of clinically validated instruments (PROMIS, PHQ-9, GAD-7) is interesting -- borrowing 2-3 validated screening questions rather than whole instruments could add scientific credibility to Alche's Tier 2 without the time burden. Their "scores out of 100" output format is clean and scannable.

---

### 1.3 ZOE (Blood Sugar + Gut + Blood Fat)

| Dimension | Detail |
|-----------|--------|
| **Quiz length** | 15-20 questions |
| **Time** | ~5 minutes |
| **Data tiers** | ZOE 2.0 (2025): Free quiz with instant personalization (no hardware). Optional: Gut microbiome test kit (stool sample). Previously required CGM + blood fat test + cookie challenge -- all removed in 2.0 |
| **Questions asked** | Health goals (weight, energy, gut health), key health questions, existing blood test results (optional upload), dietary habits |
| **Algorithm breakthrough** | 300,000+ microbiome profiles trained their algorithm to predict blood sugar and blood fat responses from health questions alone -- no CGM or blood test needed |
| **UX details** | Social proof throughout quiz (user counts, reviews). Information panels between question groups explaining why questions matter and showing personalized stats (e.g., "11% chance you have a friendly parasite correlated with less body fat"). Email gate before results. Web-to-app funnel |
| **Output** | Personalized food scoring system, meal recommendations, gut health score (out of 1000 if you add the test kit) |

**Key takeaway for Alche:** ZOE's evolution is the most relevant model for Alche. They proved you can deliver meaningful personalization from just a quiz by training algorithms on biological data at scale. Their "information panels between questions" pattern -- showing personalized micro-insights during the quiz itself -- is a brilliant engagement trick. The email gate before results is a proven conversion pattern. For MVP, Alche should emulate ZOE 2.0's approach: quiz-first personalization that works standalone, with biological data as an optional upgrade.

---

### 1.4 InsideTracker (Blood Biomarkers + DNA + Fitness)

| Dimension | Detail |
|-----------|--------|
| **Quiz length** | Health Profile questionnaire (moderate length, focused) |
| **Time** | ~10 minutes |
| **Data tiers** | No free quiz. Plans start at blood testing. InnerAge ($249), Ultimate ($589) measures 43-54 biomarkers |
| **Questions asked** | Biological sex, menstrual/menopausal status (female), dietary preferences and food frequency, supplement intake, sunlight exposure, workout type and frequency |
| **Biomarkers tested** | Up to 54 biomarkers across 10 categories: metabolism (glucose, insulin, HbA1c), endurance, fitness, heart health, cognition, inflammation, hormones (estradiol, progesterone, DHEAS for women), liver, kidney function |
| **Personalization engine** | Calculates "optimal zones" per biomarker per person (not just normal ranges). Uses demographic data + questionnaire + biomarkers + DNA. Integrates with Oura, Fitbit, Garmin, Apple Health |
| **Output** | Personalized recommendations across 4 channels: food, supplements, exercise, lifestyle. ProTips from wearable data. InnerAge score. 80% of members optimize at least one biomarker by second test |

**Key takeaway for Alche:** InsideTracker's "optimal zone" concept (vs. normal range) is a powerful differentiator that Alche should adopt for the Biomarker Dashboard. Their 4-channel recommendation framework (food + supplements + exercise + lifestyle) maps well to Alche's KNOW > DO > GET > BELONG flywheel. The wearable integration adding context to blood data is the direction Alche should head post-MVP.

---

### 1.5 Ritual (Simple Quiz)

| Dimension | Detail |
|-----------|--------|
| **Quiz length** | Short (~5-8 questions) |
| **Time** | ~2-3 minutes |
| **Data tiers** | Quiz only. No biological testing. Fixed formulas per demographic |
| **Questions asked** | Age, sex, life stage (prenatal, etc.), health goals (overall wellness, immunity, sleep, stress, energy, fitness, digestion), current supplement use |
| **Personalization philosophy** | Demographic-level, not individual. E.g., methylated folate for everyone (1/3 of population has MTHFR mutation), zinc for men but not women. "The type of personalization we can get behind" |
| **Output** | Product recommendation (which Ritual product to buy), not custom formulation. Accompanied by scientific explanations |
| **UX** | Clean, editorial, confidence-building. Campaign-based personalization post-quiz (homepage adapts to show your recommended product with relevant social proof and content) |

**Key takeaway for Alche:** Ritual proves that a short, well-designed quiz can drive conversion without deep personalization. Their post-quiz homepage personalization (adapting the entire site to your segment) is worth studying. For Alche, the lesson is: even Tier 1 (5-8 questions) can meaningfully change the user experience if you use the answers to personalize the entire app surface, not just one recommendation screen.

---

### 1.6 Nourished (Symptom-Based, 3D-Printed Supplements)

| Dimension | Detail |
|-----------|--------|
| **Quiz length** | ~12-15 questions |
| **Time** | 2 minutes (they market this explicitly) |
| **Data tiers** | Quiz only. No biological testing |
| **Questions asked** | Health goals, current symptoms, dietary restrictions, lifestyle factors, energy levels |
| **Technology** | Proprietary AI algorithm recommends 7 nutrients. Patented 3D-printing produces personalized 7-layer gummy stacks |
| **Output** | Made-to-order gummy stack of 7 nutrients specific to your answers. Can modify flavor/inclusions anytime |

**Key takeaway for Alche:** The "7 nutrients from your answers" constraint is interesting -- it forces the algorithm to prioritize, which makes the output feel curated rather than overwhelming. For Alche's goal-setting flow, consider a similar constraint: "Based on your answers, here are your 3 focus areas" rather than showing everything.

---

### 1.7 Humanity (Aging Pace)

| Dimension | Detail |
|-----------|--------|
| **Quiz length** | Minimal quiz -- primarily wearable-driven |
| **Time** | Quick setup, ongoing passive data |
| **Data tiers** | Free app with wearable integration. Optional: blood test upload (analyzes via Nature-published blood age model) |
| **Data collected** | Heart rate, walking speed, movement patterns, sleep (from Apple Watch/iPhone). Optional: fasting glucose, cholesterol, full blood count from uploaded blood tests |
| **Algorithm** | Trained against UK Biobank and NHANES longitudinal datasets. Claims predictive accuracy comparable to a standard blood test |
| **Output** | Daily Humanity Score (function of movement, nutrition, mind, recovery). Biological age estimate. Personalized daily guidance on highest-impact action. Different recommendations for different user profiles (sedentary 50yo vs. fit 30yo runner) |
| **Traction** | 200,000 users, 4.7 App Store rating. Users show 15% increase in monitored health actions after 40 days. Average biological age reduction: 0.49 years per active user |

**Key takeaway for Alche:** Humanity is the closest comp to Alche's vision. Their "daily score + personalized highest-impact action" pattern is exactly what Alche's protocol system should deliver. The insight that their aging measures (from wearables alone) are "as predictive as a standard blood test" validates Alche's approach of shipping GlowScan and protocol tracking before real biomarker integration. The 0.49 year biological age reduction is a powerful outcome metric Alche should aspire to measure.

---

### Competitive Summary Matrix

| App | Quiz Time | Free Tier? | Bio Testing | Questions | Personalization Depth | Output |
|-----|-----------|------------|-------------|-----------|----------------------|--------|
| **Rootine** | 5-10 min | Yes (quiz) | DNA + Blood | 18-33 | Deep (3 data layers) | Custom supplement doses |
| **Viome** | 30-70 min | No | Stool + Blood + Saliva | 100+ | Very deep (RNA seq) | 50+ scores + custom supplements |
| **ZOE** | 5 min | Yes (quiz) | Optional gut test | 15-20 | Medium-high (algorithm) | Food scoring system |
| **InsideTracker** | 10 min | No | Blood + DNA + Wearables | ~30 | Deep (optimal zones) | Food/supplement/exercise/lifestyle Rx |
| **Ritual** | 2-3 min | Yes (quiz) | None | 5-8 | Low (demographic) | Product recommendation |
| **Nourished** | 2 min | Yes (quiz) | None | 12-15 | Medium (symptom-based) | 7-nutrient custom stack |
| **Humanity** | Minimal | Yes (app) | Optional upload | Few | Medium-high (wearable AI) | Daily score + actions |

---

## 2. Self-Assessment Question Bank

### Design Principles (Before the Questions)

1. **Every question must change something.** If an answer doesn't alter the protocol, goal recommendation, or content shown, don't ask it.
2. **Questions are the product.** In a premium app, the quiz itself should feel like a consultation, not a form. Language should be warm, specific, never clinical.
3. **Segment first, personalize later.** Tier 1 creates meaningful cohorts. Tier 2 individualizes within cohorts. Tier 3 provides biological ground truth.
4. **Show value during the quiz.** Follow ZOE's pattern: micro-insights between question groups ("People with your profile typically see X").

---

### Tier 1: Quick Scan (2 minutes, 7 questions, mandatory onboarding)

These 7 questions are designed to:
- Place the user in a primary goal archetype
- Determine which protocols to surface first
- Set the right tone and content density
- Enable meaningful Day 1 personalization

| # | Question | Format | Why It Matters | What It Changes |
|---|----------|--------|----------------|-----------------|
| **Q1** | "What brought you to Alche?" | Multi-select (max 3): Energy & vitality / Skin & appearance / Sleep & recovery / Stress & calm / Gut health / Longevity & aging well / Weight & body composition / Mental clarity | **Primary goal archetype.** This is the single most important segmentation. It determines which protocols surface first, which GlowScan framing to use, which content to show on Home. | Protocol ordering, Home feed, GlowScan framing, shop recommendations, onboarding flow sequence |
| **Q2** | "How old are you?" | Number input or decade selector (20s / 30s / 40s / 50s+) | **Age-appropriate protocols.** A 28-year-old and a 45-year-old with the same goal get different protocol intensities, different supplement considerations, different language. | Protocol intensity, supplement relevance, longevity score baseline, content tone |
| **Q3** | "How would you describe your energy on a typical day?" | Single select: Consistently strong / Good mornings, afternoon dip / Unpredictable -- some days great, some terrible / Running on fumes most days | **Energy archetype.** This is the highest-signal lifestyle question. It correlates with sleep quality, stress, diet, and exercise without asking about each. It's also the fastest thing to improve, so it's a good "quick win" anchor. | Protocol urgency, supplement priority (adaptogens, B vitamins, CoQ10), daily check-in framing |
| **Q4** | "What does your movement look like?" | Single select: I train 4+ times/week / I move regularly (walks, yoga, 2-3x gym) / I want to move more but struggle with consistency / I'm mostly sedentary right now | **Activity level.** Determines protocol intensity, recovery recommendations, and whether to push movement goals or support existing habits. | Protocol intensity, recovery protocol inclusion, booking suggestions (LED, cryo), step/movement goals |
| **Q5** | "How do you eat, roughly?" | Single select: I eat well and enjoy cooking / I eat okay but it's inconsistent / I rely on convenience food more than I'd like / I follow a specific diet (shows sub-menu: vegan, vegetarian, pescatarian, keto, Mediterranean, other) | **Nutrition archetype.** Determines whether to recommend nutritional protocols, smoothie orders, Eat Smart Outside features. Also flags dietary restrictions for supplement recommendations. | Smoothie recommendations, meal protocol content, supplement form (some are animal-derived), Eat Smart Outside relevance |
| **Q6** | "How's your sleep?" | Single select: I sleep well and wake rested / I sleep enough but don't feel refreshed / I struggle to fall or stay asleep / My sleep is chaotic (shift work, new parent, travel) | **Sleep quality.** The single strongest predictor of recovery capacity and protocol adherence. Determines whether sleep protocols should be primary or secondary. | Sleep protocol priority, evening protocol timing, supplement recommendations (magnesium, L-theanine), check-in time suggestions |
| **Q7** | "How much do you already know about longevity and wellness?" | Single select: I'm curious but new to this / I know the basics and want to go deeper / I'm already optimizing -- show me what's next / I'm skeptical but open | **Content density calibration.** This isn't about health -- it's about how to talk to the user. A beginner needs education. An optimizer needs data. A skeptic needs evidence. | Content depth, explanation density, scientific citation visibility, feature introduction pacing, community group suggestions |

**Post-Quiz Micro-Insight (shown immediately):**

> "Based on your answers, your Alche profile suggests focusing on **[top goal]** and **[secondary goal]**. People with your profile typically see the most improvement by starting with **[protocol name]**."

This creates an immediate "this app gets me" moment before the user even sees the Home screen.

---

### Tier 2: Deep Profile (5 minutes, 18 questions, optional -- unlocked after first week)

Trigger: After 5-7 days of app use, surface a prompt: "Want more personalized protocols? Take the Deep Profile -- it takes 5 minutes and meaningfully improves your recommendations."

Organized in 4 sections with transitions:

#### Section A: Body & Symptoms (5 questions)

| # | Question | Format | What It Changes |
|---|----------|--------|-----------------|
| **Q8** | "Do you experience any of these regularly?" | Multi-select: Afternoon energy crashes / Brain fog or difficulty concentrating / Bloating or digestive discomfort / Skin dullness, dryness, or breakouts / Joint stiffness or muscle soreness / Frequent colds or slow recovery / Mood swings or irritability / None of these | Symptom-based supplement mapping, protocol prioritization, GlowScan correlation |
| **Q9** | "How would you rate your stress right now?" | Slider 1-10 with labels (1=very calm, 5=managing, 10=overwhelmed) | Stress protocol intensity, adaptogen recommendations, breathing exercise frequency |
| **Q10** | "Any conditions a practitioner has diagnosed?" | Multi-select: Thyroid issues / Autoimmune condition / PCOS/hormonal imbalance / Digestive condition (IBS, SIBO) / Anxiety or depression / None / Prefer not to say | Safety filtering (contraindicated supplements), practitioner session recommendations, disclaimer triggers |
| **Q11** | "Are you currently pregnant, breastfeeding, or trying to conceive?" | Single select: Yes / No / Prefer not to say | Critical safety filter. Changes entire supplement recommendation set. Flags certain protocols as inappropriate |
| **Q12** | "Do you take any medications or supplements currently?" | Free text + common selections: Birth control / Thyroid medication / Antidepressants / Blood pressure medication / I take supplements (specify) / None | Interaction checking, supplement gap analysis, avoid redundancy |

#### Section B: Lifestyle Patterns (5 questions)

| # | Question | Format | What It Changes |
|---|----------|--------|-----------------|
| **Q13** | "What time do you typically wake up and go to bed?" | Two time pickers (wake/sleep) | Circadian protocol timing, check-in scheduling, morning/evening routine content |
| **Q14** | "How much time do you spend outdoors on a typical day?" | Single select: <30 min / 30-60 min / 1-2 hours / 2+ hours | Vitamin D protocol relevance, light exposure recommendations, nature prescriptions |
| **Q15** | "How much water do you drink daily?" | Single select: I forget to drink water / 3-5 glasses / 6-8 glasses / 8+ glasses or I track it | Hydration protocol, skin hydration correlation (GlowScan), supplement absorption context |
| **Q16** | "How often do you drink alcohol?" | Single select: Never / Occasionally (1-2x/month) / Regularly (1-2x/week) / Most days | Liver support relevance, recovery protocol intensity, gut health context |
| **Q17** | "Screen time before bed?" | Single select: I'm on screens until I fall asleep / I try to stop 30 min before / I have a strict wind-down routine / I don't track this | Sleep protocol specificity, blue light recommendations, evening routine content |

#### Section C: Skin & Appearance (4 questions -- feeds GlowScan)

| # | Question | Format | What It Changes |
|---|----------|--------|-----------------|
| **Q18** | "What's your biggest skin concern right now?" | Multi-select (max 2): Dullness or tired-looking skin / Dryness or dehydration / Breakouts or blemishes / Fine lines or texture / Uneven tone or dark spots / Redness or sensitivity / None -- my skin is fine | GlowScan focus areas, skin-specific supplement mapping, topical protocol content |
| **Q19** | "How would you describe your skin type?" | Single select: Oily / Dry / Combination / Sensitive / Normal / I don't know | GlowScan calibration, product recommendations, supplement form preferences |
| **Q20** | "Do you currently have a skincare routine?" | Single select: Consistent daily routine / Sometimes / Just basics (cleanser + moisturizer) / Not really | Protocol intensity for skin, product recommendation depth, education content |
| **Q21** | "How much sun exposure does your skin get?" | Single select: Minimal (mostly indoors) / Moderate / Regular (outdoor work/exercise) / I actively sun-seek | UV damage context for GlowScan, vitamin D correlation, antioxidant protocol relevance |

#### Section D: Goals & Preferences (4 questions)

| # | Question | Format | What It Changes |
|---|----------|--------|-----------------|
| **Q22** | "What does 'aging well' mean to you?" | Multi-select (max 3): Staying energetic and active / Looking as good as I feel / Keeping my mind sharp / Avoiding chronic disease / Staying independent as long as possible / Being part of a community that cares about this | Long-term protocol framing, content curation, community group matching, marketing language |
| **Q23** | "How do you prefer to build new habits?" | Single select: Give me a daily checklist / Suggest things and let me choose / Just track what I'm already doing / I need accountability (remind me, nudge me) | Protocol delivery UX, notification strategy, check-in frequency, community feature emphasis |
| **Q24** | "Budget for wellness monthly?" | Single select: Under EUR 50 / EUR 50-100 / EUR 100-200 / EUR 200+ / I don't track this | Subscription tier suggestion, product recommendation price range, booking frequency suggestions |
| **Q25** | "Would you be open to biological testing (blood work, gut microbiome) for deeper personalization?" | Single select: Yes, very interested / Maybe, if it's easy / Not right now / I already have results I could share | Tier 3 upsell timing, biomarker dashboard engagement, practitioner session recommendation |

---

### Tier 3: Biomarker Layer (Optional Upgrade)

#### Most Actionable Blood Panels for Supplement Recommendation

Based on research across InsideTracker, Rootine, Jinfiniti, Mito Health, and longevity biomarker literature, here are the panels ranked by actionability (how directly the result changes a supplement recommendation):

**Panel A: Foundational (Most Actionable, ~15 markers)**

| Biomarker | Why It's Actionable | Supplement Response |
|-----------|-------------------|-------------------|
| **Vitamin D (25-OH)** | Deficient in 40-60% of Europeans. Single most supplement-responsive marker | Vitamin D3 + K2 dosing (1000-5000 IU based on level) |
| **Ferritin** | Iron storage. Low = fatigue, hair loss, poor skin. High = inflammation risk | Iron supplementation or avoidance |
| **Vitamin B12** | Especially relevant for plant-based diets. Affects energy, cognition, mood | Methylcobalamin dosing |
| **Folate (B9)** | MTHFR mutations affect 1/3 of population. Affects homocysteine, mood, skin | Methylfolate vs. folic acid choice |
| **Homocysteine** | Cardiovascular risk marker. Highly responsive to B6, B12, folate | B-vitamin complex titration |
| **HbA1c** | 3-month blood sugar average. Metabolic health cornerstone | Berberine, chromium, cinnamon extract, lifestyle protocols |
| **Fasting Glucose** | Short-term blood sugar. Combined with HbA1c gives full metabolic picture | Same as above |
| **hs-CRP** | Systemic inflammation marker. Elevated in most chronic disease | Omega-3, curcumin, anti-inflammatory protocols |
| **Omega-3 Index** | Directly measures omega-3 status. Affects skin, brain, heart, inflammation | EPA/DHA dosing |
| **Magnesium (RBC)** | Most people are deficient. Affects sleep, stress, muscle, 300+ enzymes | Magnesium glycinate/threonate dosing |
| **Zinc** | Immune function, skin health, wound healing. Deficiency common | Zinc picolinate/glycinate dosing |
| **TSH** | Thyroid screening. Affects energy, weight, mood, skin, hair | Selenium, iodine, referral to practitioner |
| **Cortisol (AM)** | Stress hormone. Context for energy and sleep complaints | Ashwagandha, rhodiola, lifestyle protocols |
| **DHEA-S** | Adrenal/hormonal health. Declines with age | DHEA supplementation (with practitioner guidance) |
| **Complete Blood Count** | Baseline health. Catches anemia, infection, immune issues | Iron, B12, folate as indicated |

**Panel B: Longevity-Focused (Advanced, add ~10 markers)**

| Biomarker | Why It's Actionable | Supplement/Protocol Response |
|-----------|-------------------|-------------------|
| **ApoB** | Better cardiovascular predictor than LDL cholesterol | Berberine, plant sterols, omega-3, lifestyle |
| **Fasting Insulin** | Insulin resistance (pre-diabetes years before HbA1c rises) | Berberine, chromium, exercise protocols |
| **Lp(a)** | Genetic cardiovascular risk (test once, it doesn't change much) | Niacin (limited), lifestyle, risk awareness |
| **IGF-1** | Growth factor. Too high = cancer risk, too low = sarcopenia. Optimal zone matters | Protein intake adjustment, exercise type |
| **GGT** | Liver health, oxidative stress | NAC, milk thistle, alcohol protocols |
| **Uric Acid** | Metabolic health, gout risk, oxidative stress | Diet modification, cherry extract |
| **Vitamin A (Retinol)** | Skin health, immune function | Retinol/beta-carotene dosing |
| **Selenium** | Thyroid cofactor, antioxidant. Narrow optimal range | Selenomethionine dosing |
| **Copper:Zinc Ratio** | Imbalance linked to inflammation and cognitive decline | Zinc or copper adjustment |
| **NAD+ (emerging)** | Cellular energy. Declines with age. Core longevity marker | NMN/NR supplementation |

**How to Tier This for Alche:**

- **Free:** Quiz-only personalization (Tiers 1-2). Estimated nutrient needs based on lifestyle answers.
- **EUR 19/mo (Base):** Add wearable data integration (Apple Health, Oura) for sleep/activity context.
- **EUR 49/mo (Longevity):** Blood test integration. User uploads results from any lab OR orders through Alche partner lab. Panel A analyzed. Protocols adjust.
- **EUR 99/mo (Longevity+):** Panel A + B. Quarterly retesting. Practitioner session to review results. Most granular supplement and protocol personalization.

---

## 3. GlowScan to Goal-Setting Mapping

### How Skin Scan Results Inform Supplement Recommendations

The GlowScan measures appearance-based skin metrics. Here's the evidence-backed mapping from scan outputs to supplement and protocol recommendations:

**Important language note (from CLAUDE.md):** GlowScan uses appearance-based language only. "Your skin looks well-hydrated" -- NEVER "Your hydration levels indicate." It's a Glow Score, not a Health Score.

#### Mapping Table: GlowScan Output > Nutrient Signal > Supplement/Protocol

| GlowScan Metric | What It Suggests | Primary Supplements | Supporting Protocols | Blood Marker Correlation (Tier 3) |
|-----------------|-----------------|--------------------|--------------------|----------------------------------|
| **Low Hydration Score** | Insufficient water retention in skin barrier, possible essential fatty acid or hyaluronic acid deficit | Omega-3 (EPA/DHA), Hyaluronic acid (oral), Ceramides | Hydration tracking protocol, humidifier recommendation, reduce alcohol | Omega-3 Index, Vitamin A |
| **Rough Texture** | Impaired skin cell turnover, possible vitamin A or zinc deficit | Vitamin A (retinol/beta-carotene), Zinc, Vitamin C | Exfoliation protocol, sleep optimization (skin repairs during deep sleep) | Zinc, Vitamin A, Vitamin C |
| **Low Radiance / Dullness** | Poor circulation, oxidative stress, possible iron or B12 deficit | Iron (if ferritin low), B12, Vitamin C (collagen + iron absorption), CoQ10 | Movement protocol (circulation), cold exposure, antioxidant-rich diet | Ferritin, B12, hs-CRP |
| **Blemishes / Breakouts** | Inflammation, hormonal fluctuation, gut-skin axis disruption, possible zinc deficit | Zinc, Probiotics (gut-skin axis), Omega-3, Vitamin D | Gut health protocol, dairy reduction experiment, stress management, sleep | Zinc, hs-CRP, Vitamin D, Homocysteine |
| **Fine Lines / Elasticity** | Collagen degradation, UV damage, oxidative stress | Collagen peptides (2.5-10g/day), Vitamin C, Vitamin E, Astaxanthin | Sun protection protocol, sleep optimization, hydration | Vitamin C, Vitamin D, Omega-3 Index |
| **Uneven Tone / Spots** | UV-induced melanin, inflammation, possible vitamin C deficit | Vitamin C (ascorbic acid), Niacinamide (B3), Alpha-lipoic acid | Sun protection, antioxidant-rich diet, stress reduction | Vitamin C, hs-CRP |
| **Redness / Sensitivity** | Barrier disruption, inflammation, possible omega-3 or vitamin D deficit | Omega-3, Vitamin D, Quercetin, Probiotics | Anti-inflammatory diet protocol, barrier repair routine, stress management | Omega-3 Index, Vitamin D, hs-CRP |

#### How GlowScan Feeds Goal Setting

**Flow:**

```
User completes Tier 1 quiz (2 min)
    |
    v
User does GlowScan (1 min)
    |
    v
App combines quiz answers + scan results:
    - Quiz says: "Energy & vitality" + "Skin & appearance" are top goals
    - GlowScan shows: Low hydration + dullness
    |
    v
App generates personalized goal set:
    1. "Restore your glow" (hydration + radiance protocol)
       - Omega-3, Vitamin C, hydration tracking
    2. "Steady energy" (energy protocol)
       - B-vitamin complex, magnesium, sleep protocol
    3. "Foundation" (always included)
       - Vitamin D, movement, sleep hygiene
    |
    v
User sees: "Your 3 Focus Areas" with clear visual hierarchy
    - Can tap to explore each, see the "why" with GlowScan visuals
    - Can add/remove focus areas (autonomy)
```

**The key insight:** GlowScan gives users a *visible* baseline they can track over time. Unlike blood markers (abstract numbers), skin changes are something users can see in the mirror. This makes GlowScan the most powerful engagement driver for protocol adherence -- "Is my glow score improving?" is a more compelling daily check-in than "Is my homocysteine dropping?"

---

## 4. Progressive Personalization Architecture

### The Principle

The system must work well at every data layer, and get meaningfully better (not just marginally) with each addition. "Meaningfully better" means: at least one protocol recommendation changes, or a protocol's intensity/timing adjusts, or a new goal becomes available.

### Data Layer Stack

```
Layer 0: Anonymous (before quiz)
    Available: Generic longevity content, Alche brand experience, event listings
    Personalization: None. One-size-fits-all Home screen.

Layer 1: Quick Scan (Tier 1 quiz, 2 min)
    Added data: Goal archetype, age, energy/movement/nutrition/sleep profiles,
                knowledge level
    Personalization unlocked:
        - 3 personalized focus areas
        - Protocol recommendations ordered by relevance
        - Home feed curated to goals
        - Smoothie suggestions based on diet type
        - Content depth matched to knowledge level
        - Community group suggestions
    Confidence level: ~40% (lifestyle signals only)

Layer 2: GlowScan (1 min, available from Day 1)
    Added data: Skin hydration, texture, radiance, blemishes, tone scores
    Personalization unlocked:
        - Skin-specific supplement suggestions
        - Visual baseline for progress tracking
        - "Restore your glow" goal pathway (if skin scores warrant)
        - Correlation between skin goals (from quiz) and visible evidence
        - Glow Score trend over time
    Confidence level: ~50% (lifestyle + visible skin signals)

Layer 3: Deep Profile (Tier 2 quiz, 5 min, Week 1+)
    Added data: Symptoms, stress level, diagnosed conditions, medications,
                sleep timing, outdoor time, hydration, alcohol, screen habits,
                skin type, skincare routine, sun exposure, habit preferences,
                budget, bio-testing interest
    Personalization unlocked:
        - Symptom-to-supplement mapping
        - Safety filtering (medications, conditions, pregnancy)
        - Circadian-timed protocols (wake/sleep times)
        - Hydration protocol calibration
        - Practitioner session recommendations based on conditions
        - Subscription tier suggestion based on budget
        - Fine-tuned GlowScan interpretation (sun exposure context)
    Confidence level: ~65% (lifestyle + symptoms + visible skin + preferences)

Layer 4: Wearable Integration (Apple Health, Oura -- ongoing)
    Added data: Actual sleep data (not self-reported), heart rate, HRV,
                steps, workout data, respiratory rate
    Personalization unlocked:
        - Objective sleep data replaces self-report
        - Recovery-based protocol intensity (HRV-driven)
        - Activity-adjusted supplement timing
        - Trend detection ("your sleep has worsened this week")
        - Humanity-style daily action prioritization
    Confidence level: ~75% (all above + objective biometric data)

Layer 5: Biomarker Integration (Blood/Gut tests -- EUR 49+/mo)
    Added data: Actual nutrient levels, inflammation markers, metabolic
                markers, hormonal markers
    Personalization unlocked:
        - Evidence-based supplement dosing (not just "take zinc" but "take
          30mg zinc picolinate because your level is 65 mcg/dL, optimal is 80-120")
        - Deficiency detection quiz couldn't catch
        - Optimal zones per marker (InsideTracker-style)
        - GlowScan + biomarker correlation ("your skin dullness correlates
          with low ferritin -- here's the protocol")
        - Practitioner-reviewed protocols
        - Quarterly retest tracking
    Confidence level: ~90% (full data picture)
```

### UX Pattern: "Your Personalization Level"

Show users their current data completeness and what they'd unlock by adding more data. This creates a natural upgrade path without being pushy.

```
Visual concept:

    YOUR ALCHE PROFILE
    ==================

    [====------] 40% personalized

    Completed:
    [x] Quick Scan           -- unlocked 3 focus areas
    [x] GlowScan             -- unlocked skin protocols

    Next steps:
    [ ] Deep Profile (5 min) -- unlock symptom-specific protocols
    [ ] Connect Apple Health  -- unlock recovery-based intensity
    [ ] Blood panel           -- unlock precision dosing

    "Each layer makes your protocols meaningfully more personal."
```

### When to Prompt for More Data

| Trigger | What to Surface | Why Now |
|---------|----------------|---------|
| Day 1, post-quiz | GlowScan | Immediate visual engagement, quick, no friction |
| Day 5-7 | Deep Profile | User has context. They've seen the app. Now they understand what "more personalized" means |
| Day 14 | Wearable integration | After 2 weeks of protocol adherence, show them how wearable data would improve timing and intensity |
| Day 30 | Biomarker upsell | After 1 month, user is engaged. Show GlowScan trends. "Want to know what's behind the numbers? Blood panel unlocks precision protocols" |
| After any plateau | Next data tier | If Glow Score plateaus after initial improvement, prompt: "Your skin progress has leveled off. The Deep Profile can help us find what's missing" |

### Anti-Patterns to Avoid

1. **Don't gate the core experience behind data.** The app must feel complete and valuable at Layer 1. Layers 2-5 are "better," not "necessary."
2. **Don't re-ask questions the app can infer.** If someone books LED sessions 3x/week, don't ask "How often do you do recovery sessions?"
3. **Don't show users what they're missing.** Instead of "You haven't completed the Deep Profile -- your protocols are limited," say "Your protocols are working. Want to fine-tune them? The Deep Profile takes 5 minutes."
4. **Don't change everything at once.** When new data arrives (e.g., blood results), don't overhaul all protocols overnight. Surface 1-2 key insights: "Your blood panel revealed low vitamin D. We've added a targeted protocol."
5. **Don't fake precision.** At Layer 1, say "This protocol supports energy." At Layer 5, say "Based on your B12 level of 280 pg/mL, we recommend 1000mcg methylcobalamin daily." Match language precision to data precision.

---

## 5. Design Recommendations for the Alche Flow

### The Ideal Onboarding Sequence (MVP)

```
1. Welcome / Brand moment (5 sec)
       "Alche. Your longevity, daily."

2. Quick Scan quiz (2 min, 7 questions)
       Warm, conversational tone
       Progress bar
       One question per screen (no scrolling)
       Micro-insight after Q4: "People with your energy + movement profile
       often see the fastest gains from [X]"

3. Your Focus Areas reveal (10 sec)
       Animated reveal of 3 personalized focus areas
       Each shows: icon, name, 1-line description
       Tap to preview what the protocol looks like

4. GlowScan invitation (optional, 1 min)
       "Want to see where your skin stands? Take a 60-second GlowScan."
       If yes: scan > results > skin-specific goal added
       If skip: "You can do this anytime from your profile"

5. Home screen (personalized from first load)
       Top card: "Your journey starts with [Protocol 1]"
       Shows focus areas as navigable sections
       Bottom: "Your Alche Profile: 40% personalized -- here's what's next"

6. Day 5-7: Deep Profile prompt
       Contextual (after they've used the app)
       "Your protocols are working. Want them tuned to your body?
       The Deep Profile takes 5 minutes."
```

### Question UX Principles (Neo-Apothecary Glass)

- **One question per screen.** No forms. Each question is a moment.
- **Warm language.** "How's your sleep?" not "Rate your sleep quality on a scale of 1-5."
- **Visual answer options.** Where possible, use illustration or icon + text rather than plain text lists.
- **Progress feels good.** Cormorant Garamond headers, subtle animations on selection, warm color feedback (terra/sage on select, not cold blue checkmarks).
- **No dead ends.** Every answer gets a micro-acknowledgment. "Good to know." / "That's common -- we can help." / "Noted."
- **Exit without loss.** If user quits mid-quiz, resume where they left off. Never restart.

---

## Sources

- [Rootine Daily Health](https://rootine.co/pages/daily-health)
- [Rootine Vitamins Review (Garage Gym Reviews, 2026)](https://www.garagegymreviews.com/rootine-vitamins-review)
- [Rootine Review (Femtech Insider, 2025)](https://femtechinsider.com/rootine-sample-3-pack-review-everything-you-need-to-know-2025/)
- [Viome Full Body Intelligence Guide (UpDiet)](https://up-diet.com/blog/viome-full-body-intelligence)
- [Viome Reviews (Innerbody, 2026)](https://www.innerbody.com/viome-review)
- [Viome MSK Pilot Case Study](https://www.viome.com/blog/msk-x-viome-health-program-pilot-case-study)
- [ZOE 2.0 (zoe.com)](https://zoe.com/learn/zoe-2-0-science-made-simple)
- [ZOE Web-to-App Quiz Funnel (Medium)](https://medium.com/design-bootcamp/how-flo-and-zoe-use-a-web-to-app-to-boost-their-conversion-6f424171b1b7)
- [InsideTracker 48 Biomarkers](https://www.insidetracker.com/a/articles/blood-biomarkers-insidetracker-measures)
- [InsideTracker Healthspan Category Testing](https://blog.insidetracker.com/healthspan-category-testing)
- [InsideTracker Biomarker Selection](https://blog.insidetracker.com/select-blood-biomarkers-tests)
- [Ritual Vitamin Quiz](https://ritual.com/quiz)
- [Ritual: The Truth About Personalized Vitamins](https://ritual.com/articles/the-truth-about-personalized-vitamins)
- [Nourished Personalized Gummy Vitamins](https://get-nourished.com/)
- [Humanity App (humanity.health)](https://humanity.health/)
- [Humanity Aging Score (VitaDAO)](https://www.vitadao.com/projects/humanity)
- [Humanity Nutrition Addition (Longevity Technology)](https://longevity.technology/news/humanity-adds-nutrition-to-app-that-helps-slow-your-aging/)
- [Blood Biomarkers for Longevity Guide 2025 (Optimal Health)](https://optimalhealth.co/resources/blood-testing/biomarkers-longevity)
- [Jinfiniti Longevity Testing Guide](https://www.jinfiniti.com/longevity-testing-guide-biomarkers/)
- [Collagen Supplementation and Skin Health (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8824545/)
- [Skin Findings and Nutritional Deficiencies (Cleveland Clinic Journal)](https://www.ccjm.org/content/83/10/731)
- [Cutaneous Signs of Nutritional Disorders (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC8721081/)
- [Nutrient Deficiency and Skin (Nutritionist Resource)](https://www.nutritionist-resource.org.uk/articles/skin-issues-as-a-sign-of-underlying-nutrient-deficiencies)
- [Progressive Onboarding (UserPilot)](https://userpilot.com/blog/progressive-onboarding/)
- [Progressive Onboarding (UserGuiding)](https://userguiding.com/blog/progressive-onboarding)
- [Care/of Quiz Analysis (DTC Patterns)](https://www.dtcpatterns.com/dtc-patterns-articles/this-care-of-quiz-helps-you-skip-the-confusion-in-the-vitamin-aisle)
- [Vitamin Quiz Examples for Supplement Stores (LeadsHook, 2025)](https://www.leadshook.com/blog/vitamin-quiz-examples/)
- [Haut.AI Skin Analysis](https://haut.ai/)
- [Personalization Decoded: How to Personalize Ritual](https://www.personalizationdecoded.com/p/how-would-we-personalize-ritual-based)
