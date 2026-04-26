# Alche Goal & Supplement Mapping
## Evidence-Backed Research for Wellness Goal Architecture

*Research date: 2026-03-19 | For app: Alche iOS MVP | Market: EU/Germany*

---

## Part 1: Macro Goal Evaluation & Recommendation

### Current Goals (Assessment)

| # | Current Goal | Verdict | Issue |
|---|---|---|---|
| 01 | Party Detox | **Rename + Broaden** | Too niche, positions brand as hangover cure. "Detox" triggers EU regulatory scrutiny (health claim). Excludes users who don't drink. |
| 02 | Stress Regulation | **Keep, refine name** | Strong evidence base. "Regulation" is clinical — "Resilience" is aspirational and more premium. |
| 03 | Hormonal Cycle Balance | **Broaden** | Excludes ~50% of users (men). Too narrow even for women without cycle-specific issues. Good sub-goal, bad macro goal. |
| 04 | Beauty Glow | **Keep, refine framing** | Weakest evidence base of all 5 (2025 meta-analysis found no effect in high-quality, non-funded studies). Needs honesty about what supplements actually do vs. lifestyle. |
| 05 | Systemic Anti-Inflammation | **Rename** | Excellent science but too clinical for consumer. Nobody opens an app thinking "I need cytokine modulation." |

### Recommended 5 Macro Goals

Designed for: health-conscious Europeans 27-40. Broad enough for most users, specific enough to feel personalized. Framed as states users *want* (aspirational) backed by pathways that *work* (mechanistic).

```
GOAL_01  DEEP RECOVERY         [RESTORE_PATHWAY_ACTIVE]
GOAL_02  STRESS RESILIENCE     [CORTISOL_DAMPENING_SEQ]
GOAL_03  INNER BALANCE         [HOMEOSTASIS_CALIBRATION]
GOAL_04  RADIANT DEFENSE       [DERMAL_LUMINOSITY_MATRIX]
GOAL_05  CELLULAR VITALITY     [CYTOKINE_MODULATION_ACTIVE]
```

| Goal | What the user feels | What the science targets | Who it's for |
|---|---|---|---|
| **Deep Recovery** | "I bounce back fast" | Liver support, sleep optimization, oxidative damage repair, post-excess restoration | Anyone recovering from stress, poor sleep, social excess, travel |
| **Stress Resilience** | "I handle pressure well" | HPA axis regulation, cortisol modulation, nervous system balance, cognitive performance under load | High-performers, anxious professionals, burnout-adjacent users |
| **Inner Balance** | "My body feels regulated" | Hormonal support, gut-brain axis, cyclical wellness, metabolic homeostasis | Women with cycle-related goals AND anyone with gut/metabolic concerns |
| **Radiant Defense** | "I look as good as I feel" | Antioxidant protection, skin barrier support, photoaging defense, structural proteins | Skin/beauty-motivated users, aging-concerned, appearance-invested |
| **Cellular Vitality** | "I have deep, sustained energy" | Anti-inflammation, mitochondrial function, NAD+ support, foundational longevity pathways | Longevity-curious, fatigue sufferers, inflammation-aware users |

**Why these 5 work together:**
- Every user will pick 1-3. The combinations naturally create "personas" without forcing persona selection.
- Recovery + Resilience = the stressed professional
- Inner Balance + Radiant Defense = the holistic beauty seeker
- Cellular Vitality + Recovery = the longevity optimizer
- All 5 share foundational supplements (magnesium, omega-3, vitamin D) — this simplifies the recommendation engine and product SKUs.

---

## Part 2: Sub-Goals & Supplement Mapping

### GOAL_01: DEEP RECOVERY

#### Sub-Goals

| Sub-Goal ID | Name | User Framing |
|---|---|---|
| G01-A | **Sleep Optimization** | "I want to fall asleep faster and wake up restored" |
| G01-B | **Liver & Metabolic Reset** | "I want to support my body after social nights or travel" |
| G01-C | **Physical Recovery** | "I want my muscles and joints to recover faster" |

#### G01-A: Sleep Optimization

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Magnesium Glycinate** | Regulates GABA receptors, reduces cortisol, supports melatonin production. Glycinate form has highest bioavailability + calming properties from glycine itself. | **Strong** — RCT: 500mg/day for 8 weeks significantly increased sleep time, sleep efficiency, and serum melatonin while reducing cortisol and insomnia severity. | 200-400mg elemental Mg, 60min before bed | Yes |
| **Glycine** | Lowers core body temperature via peripheral vasodilation, acts on NMDA receptors in suprachiasmatic nucleus. Improves subjective sleep quality and reduces next-day fatigue. | **Moderate** — Multiple small RCTs show improved subjective sleep quality at 3g dose. Mechanism well-understood. Larger trials needed. | 3g, 30-60min before bed | Yes |
| **L-Theanine** | Promotes alpha brain wave activity (relaxed alertness). Reduces stress-induced cortisol spikes without sedation. Synergistic with magnesium. | **Moderate** — Clinical studies show reduced sleep latency and improved sleep quality. Best evidence in combination with other sleep-supporting compounds. | 100-200mg, 30min before bed | Yes |

**Note on melatonin:** Strong evidence (multiple RCTs, dose-response meta-analysis peaking at ~4mg) but positioning risk for a premium brand. Melatonin is a hormone, not a nutrient. In Germany, melatonin is available OTC but only at 0.5-1mg in food supplements. Higher doses are prescription (Circadin 2mg). For Alche's positioning, recommend leading with magnesium glycinate + glycine and listing melatonin as "complementary" at 0.5-1mg.

#### G01-B: Liver & Metabolic Reset

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **NAC (N-Acetyl Cysteine)** | Direct precursor to glutathione (master antioxidant). Replenishes hepatic GSH depleted by alcohol/toxin metabolism. Supports Phase II liver detoxification. Gold standard for acetaminophen overdose treatment. | **Strong** (mechanism + clinical use for liver), **Moderate** (for hangover prevention specifically — one RCT, strong preclinical) | 600-1200mg, before or after exposure | Yes — widely available as supplement in EU |
| **Milk Thistle (Silymarin)** | Stabilizes hepatocyte membranes, stimulates liver cell regeneration, increases glutathione levels. Anti-inflammatory and antioxidant in hepatic tissue. | **Moderate** — Long history of use, multiple trials in liver disease. ESCOP and WHO monographs support use. Mixed results in healthy populations. | 200-400mg (standardized to 70-80% silymarin) | Yes — established herbal medicine in Germany |
| **B-Complex (B1, B6, B12, Folate)** | Alcohol depletes B vitamins. B1 (thiamine) critical for preventing Wernicke-Korsakoff. B6 supports amino acid metabolism. B12 + folate support methylation and DNA repair. | **Strong** — B vitamin depletion in alcohol use is well-established. Supplementation standard of care in clinical alcohol treatment. | B-complex providing 100% RDA+ of each B vitamin | Yes |

**Note on glutathione:** Direct oral glutathione has poor bioavailability. NAC is the preferred route. Liposomal glutathione formulations show improved absorption but evidence is still emerging. For Alche, lead with NAC.

#### G01-C: Physical Recovery

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Omega-3 (EPA+DHA)** | EPA-derived resolvins and protectins actively resolve exercise-induced inflammation. Reduce DOMS (delayed onset muscle soreness). Support tendon and joint health. | **Strong** — Extensive RCT evidence for anti-inflammatory effects and cardiovascular benefits. Higher EPA ratios preferred for inflammation. | 1000-2000mg combined EPA+DHA | Yes |
| **Creatine Monohydrate** | Maintains ATP levels during high energy demand. Supports phosphocreatine energy system. Decades of evidence for strength, power output, and recovery. Muscle mass is strongest predictor of healthy aging. | **Strong** — Most studied sports supplement in existence. Meta-analyses confirm benefits across all age groups. | 3-5g daily (no loading needed for chronic use) | Yes |
| **Tart Cherry Extract** | Rich in anthocyanins with potent anti-inflammatory and antioxidant properties. Reduces markers of muscle damage and inflammation post-exercise. | **Moderate** — Several RCTs show reduced DOMS, CRP, and IL-6 after intense exercise. Small sample sizes. | 480mg anthocyanins (or 30ml concentrate) | Yes |

---

### GOAL_02: STRESS RESILIENCE

#### Sub-Goals

| Sub-Goal ID | Name | User Framing |
|---|---|---|
| G02-A | **Cortisol Balance** | "I want to lower my baseline stress and feel calmer" |
| G02-B | **Mental Clarity Under Pressure** | "I want to think clearly when things get intense" |
| G02-C | **Nervous System Support** | "I want to stop feeling wired but tired" |

#### G02-A: Cortisol Balance

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Ashwagandha (KSM-66)** | Modulates HPA axis. Reduces cortisol by 20-30% in 8-12 weeks. Regulates stress-induced proteins. Standardized withanolides are the active compounds. | **Strong** — 2025 meta-analysis (BJPsych Open): 15 studies, 873 patients. Significant reduction in cortisol, PSS, and HAM-A scores. KSM-66 extract specifically is best-studied. | 300-600mg/day (standardized to 5% withanolides) | Yes — established in EU market. EFSA botanical assessment pending but widely sold. |
| **Magnesium Glycinate** | Activates 11-beta-HSD2 enzyme converting active cortisol to inactive cortisone. Helps body *clear* cortisol rather than blocking production. | **Strong** — 24-week RCT: 350mg/day significantly reduced 24-hour urinary cortisol. Also supports GABA for calming. | 250-400mg elemental Mg | Yes |
| **Phosphatidylserine** | Phospholipid that modulates HPA axis. Blunts cortisol response to acute stressors. Particularly effective for exercise-induced cortisol spikes. | **Moderate** — Multiple clinical studies showing blunted cortisol response. Best evidence in athletes and high-stress populations. | 100-300mg/day | Yes |

#### G02-B: Mental Clarity Under Pressure

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **L-Theanine** | Promotes alpha brain waves (relaxed focus). Crosses blood-brain barrier. Reduces cortisol spikes from mental and physical stress without drowsiness. Synergistic with caffeine. | **Moderate-Strong** — Multiple RCTs showing improved attention and reduced anxiety. Well-studied caffeine + L-theanine combination. | 100-200mg (or 200mg with caffeine) | Yes |
| **Rhodiola Rosea** | Adaptogen that reduces mental and physical fatigue under stress. Different mechanism than ashwagandha: better for acute performance than chronic cortisol. Modulates serotonin and dopamine. | **Moderate** — Multiple clinical trials showing reduced fatigue scores and improved cognitive function under stress. Less robust for direct cortisol lowering than ashwagandha. | 200-400mg (standardized to 3% rosavins, 1% salidroside) | Yes — established herbal in EU |
| **B-Complex (esp. B5, B6, B12)** | B5 (pantothenic acid) directly supports adrenal function. B6 is cofactor for serotonin and GABA synthesis. B12 supports methylation and energy metabolism. Stress depletes B vitamins. | **Strong** — B vitamin depletion under chronic stress well-established. Supplementation improves perceived stress in multiple trials. | B-complex providing 100-200% RDA | Yes |

#### G02-C: Nervous System Support

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Magnesium Glycinate** | Essential for nerve signal transmission. Regulates NMDA receptors (prevents excitotoxicity). Relaxes smooth and skeletal muscle. Over 300 enzymatic reactions. | **Strong** — Deficiency strongly linked to anxiety and nervous system dysfunction. Supplementation in deficient individuals shows clear benefit. | 250-400mg elemental Mg | Yes |
| **Omega-3 (EPA+DHA)** | DHA is structural component of brain cell membranes. EPA modulates neuroinflammation. Together they support neurotransmitter function and synaptic plasticity. | **Strong** — Extensive evidence for neurological benefits. Higher EPA ratios associated with mood and anti-inflammatory benefits. | 1000-2000mg combined EPA+DHA | Yes |
| **Saffron Extract** | Modulates serotonin reuptake (similar mechanism to SSRIs at lower potency). Reduces cortisol. Anti-inflammatory in CNS tissue. | **Moderate** — Several RCTs show comparable efficacy to low-dose fluoxetine for mild-moderate mood support. Crocin and safranal are active compounds. | 30mg/day (standardized extract) | Yes |

---

### GOAL_03: INNER BALANCE

#### Sub-Goals

| Sub-Goal ID | Name | User Framing |
|---|---|---|
| G03-A | **Hormonal Cycle Support** | "I want less PMS, more predictable cycles" *(women-specific sub-goal)* |
| G03-B | **Gut Harmony** | "I want better digestion and less bloating" |
| G03-C | **Metabolic Steadiness** | "I want stable energy without crashes" |

#### G03-A: Hormonal Cycle Support

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Chasteberry (Vitex agnus-castus)** | Influences hypothalamus-pituitary axis. Restores estrogen-progesterone balance. Reduces prolactin. Alleviates PMS symptoms including mood, cravings, breast tenderness. | **Strong** — Trial of 1,500+ women: 93% reported symptom decrease after 3 cycles. 3 of 4 systematic review studies positive. Long European tradition. | 20-40mg/day (standardized extract) | Yes — traditional herbal medicine in Germany, well-established |
| **Calcium + Vitamin D** | Low calcium and vitamin D during luteal phase exacerbate PMS. Calcium shown to reduce total PMS symptom scores by ~50%. Vitamin D modulates sex steroid fluctuations and serotonin. | **Strong** — Two well-designed RCTs showing significant PMS reduction. Systematic review supports use for at least 3 cycles. | Calcium: 1000-1200mg/day, Vitamin D: 1000-2000 IU/day | Yes |
| **Magnesium** | Reduces PMS-related bloating, fluid retention, breast tenderness. Supports neurotransmitter synthesis affected by hormonal fluctuations. Prevents menstrual migraine. | **Moderate** — Mixed results across 4 studies (2 positive, 2 neutral). Mechanism well-understood. Low risk, broad benefits. | 250-360mg/day | Yes |
| **Omega-3 (EPA+DHA)** | Reduces prostaglandin-driven menstrual pain and cramps. Anti-inflammatory effect alleviates both somatic and psychological PMS symptoms. | **Moderate-Strong** — 2022 meta-analysis (600+ women): significant reduction in both somatic and psychological PMS symptoms. | 1000-2000mg combined EPA+DHA | Yes |

#### G03-B: Gut Harmony

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Probiotics (multi-strain)** | Restore and maintain diverse gut microbiome. Produce short-chain fatty acids. Support serotonin production (gut-brain axis). Reduce bloating and improve bowel regularity. | **Strong** — Extensive evidence across multiple conditions. Strain-specific effects. Best evidence for Lactobacillus and Bifidobacterium strains. | 10-50 billion CFU, multi-strain | Yes — 34 probiotic strains recently confirmed "not novel" by EU |
| **L-Glutamine** | Primary fuel for intestinal epithelial cells (enterocytes). Promotes tight junction protein expression. Reduces intestinal permeability ("leaky gut"). Modulates gut microbiota composition. | **Moderate** — Meta-analysis: doses >30mg/day significantly reduced intestinal permeability. Significant reduction in IBS-D symptoms. | 5-10g/day | Yes |
| **Prebiotic Fiber (Inulin/FOS)** | Feeds beneficial gut bacteria (Bifidobacterium, Lactobacillus). Increases short-chain fatty acid production. Supports mineral absorption. | **Strong** — Well-established prebiotic effect. Multiple RCTs showing increased beneficial bacteria and improved bowel function. | 5-10g/day | Yes |

#### G03-C: Metabolic Steadiness

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Berberine** | Activates AMPK (cellular energy sensor). Improves insulin sensitivity. Reduces fasting blood glucose. Comparable to metformin in some trials. | **Strong** — Multiple RCTs showing significant blood glucose and lipid improvements. Dihydroberberine is 5x more bioavailable. | 500mg 2-3x/day (or 200mg dihydroberberine) | Yes — EFSA decision pending for 2026, currently sold in EU. Monitor regulatory status. |
| **Chromium Picolinate** | Enhances insulin receptor sensitivity. Supports glucose uptake into cells. Reduces carbohydrate cravings. | **Moderate** — Mixed results in healthy individuals. Stronger evidence in insulin-resistant populations. Safe at recommended doses. | 200-400mcg/day | Yes |
| **Magnesium** | Involved in insulin signaling and glucose metabolism. Deficiency linked to insulin resistance. Supports over 300 metabolic enzyme reactions. | **Strong** — Meta-analysis of 19 cohort studies: higher Mg intake linked to reduced all-cause mortality and metabolic syndrome risk. | 250-400mg/day | Yes |

---

### GOAL_04: RADIANT DEFENSE

#### Sub-Goals

| Sub-Goal ID | Name | User Framing |
|---|---|---|
| G04-A | **Skin Protection & Hydration** | "I want my skin to look healthy and age slower" |
| G04-B | **Hair & Nail Strength** | "I want stronger hair and nails" |
| G04-C | **Antioxidant Shield** | "I want to protect my body from environmental damage" |

#### G04-A: Skin Protection & Hydration

**Important evidence note:** A landmark 2025 meta-analysis (23 RCTs, 1,474 participants) in *The American Journal of Medicine* found that when controlling for industry funding and study quality, collagen supplements showed NO significant benefit for skin aging. This is the most rigorous analysis to date. Alche should be transparent about this and position skin health as multi-factorial (nutrition, hydration, sun protection, sleep) with supplements as *supporting* rather than *primary*.

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Vitamin C** | Essential cofactor for collagen synthesis. Potent antioxidant protecting against UV-induced oxidative damage. Inhibits melanin production. Regenerates vitamin E. | **Strong** — Well-established role in collagen synthesis and photoprotection. Oral + topical combination most effective. | 500-1000mg/day | Yes |
| **Astaxanthin** | Carotenoid antioxidant 6,000x stronger than vitamin C at the molecular level. Protects skin from UV damage internally. Improves skin elasticity and reduces wrinkles in multiple trials. | **Moderate-Strong** — Several RCTs showing improved skin moisture, elasticity, and reduced wrinkle depth. Photoprotective from inside out. | 4-12mg/day | Yes |
| **Hyaluronic Acid (oral)** | Supports skin hydration from within. Oral HA shown to increase skin moisture in several trials. Lower molecular weight forms show better absorption. | **Moderate** — Multiple RCTs showing improved skin hydration. Mechanism of oral-to-skin delivery still debated. | 120-240mg/day | Yes |
| **Omega-3 (EPA+DHA)** | Anti-inflammatory protection against UV damage and skin aging. Supports skin barrier function. EPA specifically reduces UV-induced inflammation. | **Strong** — Well-established for systemic anti-inflammatory effects benefiting skin. | 1000-2000mg combined EPA+DHA | Yes |

**On collagen peptides:** Include if desired for product range (consumer demand is high) but position honestly. 2025 npj Aging study showed biological age reduction with optimized collagen amino acid composition + AKG + astaxanthin + vitamin C. The combination approach is more defensible than standalone collagen claims. If included: hydrolyzed marine collagen peptides, 5-10g/day.

#### G04-B: Hair & Nail Strength

**Important evidence note:** A 2025 Mayo Clinic review found limited evidence that biotin benefits hair/nails in people without deficiency. Biotin deficiency is rare in balanced diets. High-dose biotin (>5000mcg) interferes with lab tests for thyroid, cardiac, and cancer markers. Alche should NOT lead with high-dose biotin.

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Biotin (conservative dose)** | Cofactor for keratin synthesis. Only clinically effective when deficiency is present. Essential for fatty acid and amino acid metabolism needed for hair follicle health. | **Weak in healthy individuals** — Only proven in deficiency states. Include at modest dose as part of B-complex, not as hero ingredient. | 30-100mcg/day (RDA level, NOT megadose) | Yes |
| **Zinc** | Essential for hair tissue growth and repair. Supports oil gland function around follicles. Deficiency strongly linked to hair loss. | **Moderate** — Supplementation effective when deficiency present. Common deficiency in vegetarians and those with gut issues. | 15-25mg/day | Yes |
| **Vitamin C + Iron** | Iron deficiency is most common nutritional cause of hair loss, especially in women. Vitamin C dramatically improves non-heme iron absorption. | **Strong** (for deficiency states) — Ferritin testing recommended before supplementing iron. Iron overload is dangerous. | Iron: 14-18mg/day (only if indicated), Vitamin C: 500mg to enhance absorption | Yes — but iron should be guided by bloodwork |
| **Silica (from Bamboo Extract)** | Structural component of connective tissue. Supports collagen and keratin cross-linking. Traditional use for hair, skin, nail strength. | **Emerging** — Limited clinical trials but strong mechanistic basis. Long traditional use. Low risk. | 10-20mg/day | Yes |

#### G04-C: Antioxidant Shield

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Vitamin C** | Water-soluble antioxidant. Regenerates vitamin E. Protects DNA from oxidative damage. Supports immune function. | **Strong** — Well-established antioxidant. 500-1000mg provides benefit beyond dietary intake. | 500-1000mg/day | Yes |
| **Vitamin E (mixed tocopherols)** | Fat-soluble antioxidant protecting cell membranes. Works synergistically with vitamin C. Mixed tocopherols superior to alpha-tocopherol alone. | **Strong** — Well-established. Avoid high-dose alpha-tocopherol alone (associated with increased mortality in some trials). | 15-100mg/day (mixed tocopherols) | Yes |
| **Astaxanthin** | Spans the entire cell membrane (unlike most antioxidants). Protects against lipid peroxidation. Does not become pro-oxidant at high concentrations. | **Moderate-Strong** — Growing evidence base. Unique dual antioxidant action (both hydrophilic and lipophilic). | 4-12mg/day | Yes |
| **Selenium** | Essential cofactor for glutathione peroxidase (body's primary antioxidant enzyme system). Protects against heavy metal toxicity. Supports thyroid function. | **Strong** — Well-established role in antioxidant defense. Narrow therapeutic window — do not exceed 200mcg/day. | 55-100mcg/day | Yes |

---

### GOAL_05: CELLULAR VITALITY

#### Sub-Goals

| Sub-Goal ID | Name | User Framing |
|---|---|---|
| G05-A | **Anti-Inflammation** | "I want to reduce chronic low-grade inflammation" |
| G05-B | **Mitochondrial Energy** | "I want deep, sustained energy — not stimulant highs" |
| G05-C | **Longevity Foundations** | "I want to invest in aging well at the cellular level" |

#### G05-A: Anti-Inflammation

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Omega-3 (EPA+DHA)** | EPA-derived resolvins and protectins actively resolve inflammation. Reduce CRP, TNF-alpha, IL-6. Dose-dependent anti-inflammatory effect peaking at 8-12 weeks. | **Strong** — Scientific American review: one of only 3 supplements with good anti-inflammatory evidence from dozens of studies. | 1000-3000mg combined EPA+DHA (higher EPA ratio preferred) | Yes |
| **Curcumin (with piperine)** | Blocks NF-kB (master inflammatory switch). Inhibits IL-6, IL-2, TNF-alpha, and COX-2. Comparable to ibuprofen in some OA trials. Poorly absorbed without piperine (154% improvement with black pepper extract). | **Moderate-Strong** — Convincing in people with pre-existing conditions (metabolic disorders, OA). Less clear in healthy populations. Large Canadian trial found no benefit post-surgery. Bioavailability is the key challenge. | 500-1500mg curcuminoids + 5-10mg piperine | Yes |
| **Vitamin D3** | Modulates immune response. Reduces pro-inflammatory cytokines. Deficiency strongly linked to increased inflammation and autoimmune risk. | **Strong** — Meta-analysis of 52 trials (75,454 participants): 16% reduction in cancer mortality. Widespread deficiency in Northern Europe (especially Germany in winter). | 1000-4000 IU/day (dose based on blood levels, target 40-60ng/ml) | Yes |

#### G05-B: Mitochondrial Energy

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **CoQ10 (Ubiquinol form)** | Essential electron carrier in mitochondrial respiratory chain. Converts food to ATP. Levels decline with age. Ubiquinol (reduced form) has superior absorption. Protects mitochondrial DNA from oxidative damage. | **Strong** — Meta-analyses confirm cardiovascular benefits. RCT: 1200mg/day increased plasma CoQ10 5-fold and reduced post-exercise lactate. Ubiquinol form recommended over ubiquinone for adults 40+. | 100-300mg/day (ubiquinol form preferred) | Yes |
| **NR (Nicotinamide Riboside)** | NAD+ precursor. NAD+ levels decline ~50% between ages 40-60. Supports sirtuin activation, DNA repair, mitochondrial biogenesis. NR is the EU-approved NAD+ precursor (NMN is NOT yet authorized). | **Moderate** — Human trials show 40-60% NAD+ increase. Strong mechanistic evidence. 2025 review: "no conclusive evidence NAD supplementation can slow aging" but pathway is well-validated. | 300-500mg/day | **Yes — NR (as Nicotinamide Riboside Chloride) is on the EU Novel Food Union List. NMN is NOT authorized in EU.** |
| **Alpha-Lipoic Acid (ALA)** | Universal antioxidant (works in both water and fat-soluble environments). Regenerates other antioxidants (vitamin C, E, glutathione). Supports mitochondrial enzyme function. Activates AMPK. | **Moderate** — RCT combination with CoQ10 + creatine reduced oxidative stress and lactate in mitochondrial disorder patients. Standalone evidence more limited. | 300-600mg/day | Yes |
| **B-Complex** | B1, B2, B3, B5 are all direct cofactors in mitochondrial energy production. B3 (niacin) is NAD+ precursor. B5 is CoA precursor. B2 (riboflavin) supports electron transport chain. | **Strong** — Essential cofactors for energy metabolism. Deficiency directly impairs mitochondrial function. | Full-spectrum B-complex, 100%+ RDA | Yes |

#### G05-C: Longevity Foundations

| Supplement | Mechanism | Evidence | Typical Dosage | EU Legal |
|---|---|---|---|---|
| **Omega-3 (EPA+DHA)** | Meta-analysis shows beneficial effect on telomere length. Reduces cardiovascular mortality. Anti-inflammatory across all organ systems. Foundation of any longevity stack. | **Strong** — One of the most-studied supplements for longevity-related outcomes. | 1000-2000mg combined EPA+DHA | Yes |
| **Vitamin D3** | Modulates 1,000+ genes. Immune regulation, bone health, cardiovascular protection, cancer mortality reduction. Widespread deficiency in Northern Europe. | **Strong** — Among the highest evidence bases of any supplement for broad health outcomes. | 1000-4000 IU/day | Yes |
| **Magnesium** | Involved in 300+ enzymatic reactions. Meta-analysis of 19 cohort studies: higher dietary magnesium linked to reduced all-cause mortality. Supports every other supplement's function. | **Strong** — Foundation mineral. Most Europeans are suboptimally supplied. | 250-400mg/day | Yes |
| **Spermidine** | Induces autophagy (cellular self-cleaning). Supports DNA stability and gene regulation. Polyamine naturally present in wheat germ, aged cheese, mushrooms. Declines with age. | **Emerging-Moderate** — Strong preclinical data. Epidemiological studies link higher spermidine intake with reduced mortality. Human trials underway. | 1-6mg/day | Yes — available as wheat germ extract in EU |

---

## Part 3: Goal Interactions

### Synergistic Combinations (Complement Each Other)

```
DEEP RECOVERY + STRESS RESILIENCE
├── Shared: Magnesium glycinate, L-theanine, B-complex
├── Synergy: Recovery from stress and recovery from excess use same pathways
│   (cortisol regulation, liver support, sleep optimization)
└── Benefit: Magnesium dose serves both goals — no duplication needed

STRESS RESILIENCE + INNER BALANCE
├── Shared: Magnesium, Omega-3, B-complex
├── Synergy: Cortisol dysregulation disrupts hormonal cycles and gut health.
│   Fixing the stress axis often improves hormonal and digestive symptoms.
└── Benefit: Ashwagandha (stress) + Chasteberry (hormonal) complement each other

INNER BALANCE + RADIANT DEFENSE
├── Shared: Omega-3, Vitamin C, Zinc
├── Synergy: Gut health directly impacts skin (gut-skin axis).
│   Hormonal balance reduces hormonal acne and skin inflammation.
└── Benefit: Probiotics (gut) improve skin outcomes. Multi-layer approach.

CELLULAR VITALITY + DEEP RECOVERY
├── Shared: Omega-3, CoQ10, Magnesium, B-complex
├── Synergy: Mitochondrial support accelerates physical recovery.
│   Anti-inflammation supports both cellular health and tissue repair.
└── Benefit: This is the "longevity optimizer" persona combination.

CELLULAR VITALITY + RADIANT DEFENSE
├── Shared: Omega-3, Vitamin C, Vitamin E, Astaxanthin
├── Synergy: Antioxidant defense protects both cellular aging and skin aging.
│   Mitochondrial health reflected in skin vitality.
└── Benefit: "Age well inside and out" narrative.
```

### Potential Conflicts / Watch Points

```
SUPPLEMENT OVERLAP (Dose Stacking Risk)
├── Magnesium appears in 4 of 5 goals
│   └── RULE: Cap at 400mg elemental/day regardless of how many goals selected.
│       If user selects Recovery + Resilience + Balance, DO NOT triple the dose.
│
├── Omega-3 appears in all 5 goals
│   └── RULE: Cap at 3000mg EPA+DHA/day. Single recommendation regardless of goals.
│
├── B-Complex appears in 3 goals
│   └── RULE: One B-complex serving covers all goals. Water-soluble, excess excreted.
│
└── Vitamin D appears in 3 goals
    └── RULE: Single dose of 1000-4000 IU/day. Never stack.

TIMING CONFLICTS
├── Ashwagandha (calming) vs. Rhodiola (stimulating)
│   └── RULE: If user selects both Cortisol Balance + Mental Clarity,
│       recommend Ashwagandha PM + Rhodiola AM. Never combine in single dose.
│
├── NAC timing with alcohol
│   └── RULE: NAC should be taken BEFORE drinking, not after.
│       Some evidence suggests NAC after alcohol may worsen oxidative stress.
│
└── Mineral absorption competition
    └── RULE: Calcium, magnesium, zinc, iron compete for absorption.
        Space calcium 2+ hours from zinc and iron.
        Take iron on empty stomach with vitamin C.
        Take magnesium in evening, zinc with meal.

CONTRAINDICATION AWARENESS
├── Omega-3 + blood thinners → increased bleeding risk
├── Ashwagandha + thyroid medication → may alter thyroid levels
├── Ashwagandha + immunosuppressants → immune-stimulating effect
├── Berberine + metformin → additive blood sugar lowering (hypoglycemia risk)
├── High-dose biotin → interferes with cardiac, thyroid, cancer lab tests
├── St. John's Wort (NOT recommended) → interacts with oral contraceptives,
│   antidepressants, blood thinners, and many other medications
└── Saffron at high doses → contraindicated in pregnancy

ADAPTOGEN CYCLING
├── Multi-ingredient adaptogen blends linked to hepatotoxicity in case studies
├── RULE: Recommend single adaptogens, not blends. Cycle 8 weeks on / 2 weeks off.
└── New users should start with one adaptogen before adding a second.
```

---

## Part 4: Regulatory & Brand Safety Notes

### EU/Germany Compliance (as of March 2026)

| Status | Supplements |
|---|---|
| **Fully legal, well-established** | Magnesium, Omega-3, Vitamin D, Vitamin C, Vitamin E, B-vitamins, Zinc, Selenium, Calcium, Probiotics, Creatine, CoQ10, L-Theanine, Glycine, L-Glutamine, NAC, Biotin, Silica |
| **Legal herbal (German tradition)** | Ashwagandha, Rhodiola, Milk Thistle (Silymarin), Chasteberry (Vitex), Saffron, Tart Cherry Extract |
| **Novel Food — Authorized** | Nicotinamide Riboside (NR) Chloride |
| **Novel Food — NOT Authorized (do NOT sell)** | NMN (6 applications pending, EFSA review in progress, approval possible late 2026+) |
| **Regulatory watch list (2026)** | Berberine (EFSA decision expected 2026), Spermidine (available as wheat germ extract, standalone may need NF application) |
| **Avoid for premium brand** | BPC-157, TB-500 (peptides — pharmaceutical, not food supplements), Rapamycin (prescription drug), Metformin (prescription drug) |

### Health Claims Language

Under EU Regulation 1924/2006, only EFSA-authorized health claims can be used on products and marketing. For Alche:

- **DO say:** "supports," "contributes to," "helps maintain," "as part of a balanced lifestyle"
- **DO NOT say:** "detoxifies," "cures," "treats," "heals," "prevents disease," "anti-aging" (as a direct claim)
- **Approved claim examples:**
  - Magnesium: "contributes to normal functioning of the nervous system"
  - Vitamin D: "contributes to the normal function of the immune system"
  - Vitamin C: "contributes to normal collagen formation for the normal function of skin"
  - Biotin: "contributes to the maintenance of normal hair"
  - Zinc: "contributes to the maintenance of normal skin"

### Premium Brand Positioning

For the Aesop-meets-longevity-science aesthetic:
- Lead with *fewer, better* supplements per goal (not 15-pill megastacks)
- Transparent about evidence strength (this differentiates from hype brands)
- Never megadose — therapeutic ranges, not influencer ranges
- Cycling recommendations build trust and show sophistication
- "We recommend this because..." is more premium than "This will give you..."

---

## Part 5: Swift Enum Reference

For direct use in the app's data model. Maps to the existing `ProtocolGoal` enum structure.

```swift
// Proposed update to ProtocolGoal enum
enum WellnessGoal: String, Codable, Sendable, CaseIterable, Hashable {
    case deepRecovery
    case stressResilience
    case innerBalance
    case radiantDefense
    case cellularVitality

    var displayName: String {
        switch self {
        case .deepRecovery: "Deep Recovery"
        case .stressResilience: "Stress Resilience"
        case .innerBalance: "Inner Balance"
        case .radiantDefense: "Radiant Defense"
        case .cellularVitality: "Cellular Vitality"
        }
    }

    var codeTag: String {
        switch self {
        case .deepRecovery: "[RESTORE_PATHWAY_ACTIVE]"
        case .stressResilience: "[CORTISOL_DAMPENING_SEQ]"
        case .innerBalance: "[HOMEOSTASIS_CALIBRATION]"
        case .radiantDefense: "[DERMAL_LUMINOSITY_MATRIX]"
        case .cellularVitality: "[CYTOKINE_MODULATION_ACTIVE]"
        }
    }

    var subGoals: [WellnessSubGoal] {
        switch self {
        case .deepRecovery: [.sleepOptimization, .liverReset, .physicalRecovery]
        case .stressResilience: [.cortisolBalance, .mentalClarity, .nervousSystemSupport]
        case .innerBalance: [.hormonalCycleSupport, .gutHarmony, .metabolicSteadiness]
        case .radiantDefense: [.skinProtection, .hairNailStrength, .antioxidantShield]
        case .cellularVitality: [.antiInflammation, .mitochondrialEnergy, .longevityFoundations]
        }
    }
}

enum WellnessSubGoal: String, Codable, Sendable, Hashable {
    // Deep Recovery
    case sleepOptimization
    case liverReset
    case physicalRecovery
    // Stress Resilience
    case cortisolBalance
    case mentalClarity
    case nervousSystemSupport
    // Inner Balance
    case hormonalCycleSupport
    case gutHarmony
    case metabolicSteadiness
    // Radiant Defense
    case skinProtection
    case hairNailStrength
    case antioxidantShield
    // Cellular Vitality
    case antiInflammation
    case mitochondrialEnergy
    case longevityFoundations
}
```

---

## Part 6: Shared Supplement Matrix

Supplements that appear across multiple goals — these are the "foundation" supplements that simplify product SKUs and reduce pill burden.

| Supplement | Goals Served | Max Daily Dose | Priority |
|---|---|---|---|
| **Magnesium Glycinate** | Recovery, Resilience, Balance, Vitality | 400mg elemental | FOUNDATION — include in every protocol |
| **Omega-3 (EPA+DHA)** | All 5 goals | 3000mg combined | FOUNDATION — include in every protocol |
| **Vitamin D3** | Balance, Defense, Vitality | 4000 IU | FOUNDATION — especially for Northern European users |
| **B-Complex** | Recovery, Resilience, Vitality | 1 serving | FOUNDATION — covers energy, stress, nerve function |
| **Vitamin C** | Recovery, Defense | 1000mg | HIGH — antioxidant + collagen + iron absorption |
| **Ashwagandha (KSM-66)** | Resilience (primary), Recovery (secondary) | 600mg | GOAL-SPECIFIC — strongest adaptogen evidence |
| **CoQ10 (Ubiquinol)** | Vitality (primary), Recovery (secondary) | 300mg | GOAL-SPECIFIC — mitochondrial focus |
| **Probiotics** | Balance (primary), Defense (secondary) | 50B CFU | GOAL-SPECIFIC — gut-first approach |
| **NAC** | Recovery (primary), Defense (secondary) | 1200mg | GOAL-SPECIFIC — liver + antioxidant |
| **Curcumin + Piperine** | Vitality (primary), Balance (secondary) | 1500mg | GOAL-SPECIFIC — anti-inflammatory focus |

---

*Sources indexed in Part 7 below. All dosage ranges are for healthy adults. This document is for product design and app architecture — not medical advice. Final formulations should be reviewed by a licensed pharmacist or regulatory consultant for EU market compliance.*

---

## Part 7: Sources

- [26 Longevity Trends That Will Define 2026](https://honehealth.com/edge/longevity-trends/)
- [2026 Life Time Wellness Survey](https://www.prnewswire.com/news-releases/2026-life-time-wellness-survey-results-are-in-strength-training-and-longevity-lead-new-year-priorities-with-82-focused-more-on-wellbeing-302650843.html)
- [Longevity Supplements Stack 2025 Update: 20 Most Impactful](https://schroederca.medium.com/longevity-supplements-stack-2025-update-the-20-most-impactful-low-risk-supplements-8719cc9429bd)
- [Best Longevity Supplements 2026: Science-Backed Guide](https://mimiohealth.com/blogs/news/best-longevity-supplements-2026-science-backed-guide)
- [15 Best Longevity Supplements in 2025 (Ranked by Evidence)](https://www.jinfiniti.com/best-longevity-supplements/)
- [Top 10 Longevity & Anti-Aging Breakthroughs of 2025](https://www.gethealthspan.com/research/article/top-ten-longevity-anti-aging-breakthroughs-of-2025)
- [European supplement regulations to watch in 2026](https://www.nutraingredients.com/Article/2026/01/07/european-supplement-regulations-to-watch-in-2026/)
- [Food supplements 2026: What will shape the EU market](https://medfilesgroup.com/food-supplements-2026-what-will-shape-eu-market/)
- [NMN Supplement EU Legal Status 2025](https://www.charava.eu/blogs/news/nmn-supplement-legal-status-benefits-europe-buying-guide-2025)
- [EU Novel Food Application Updates Q3 2025](https://www.cirs-group.com/en/food/eu-novel-food-application-updates-in-q3-2025-including-akk-nmn-and-hmos)
- [Ashwagandha Meta-Analysis — BJPsych Open 2025](https://www.cambridge.org/core/journals/bjpsych-open/article/effects-of-ashwagandha-supplements-on-cortisol-stress-and-anxiety-levels-in-adults-a-systematic-review-and-metaanalysis/6F2D7847C1F64707F2034A45FD6CF0C0)
- [Vitamin/mineral supplements for PMS — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6491313/)
- [Calcium and vitamin D in PMS — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6422848/)
- [Collagen and Skin Aging 2025 Meta-Analysis — American Journal of Medicine](https://pubmed.ncbi.nlm.nih.gov/40324552/)
- [Collagen amino acid composition reduces biological age — npj Aging](https://www.nature.com/articles/s41514-025-00280-7)
- [NAC for hangover prevention — RCT in Scientific Reports](https://www.nature.com/articles/s41598-021-92676-0)
- [Three anti-inflammatory supplements — Scientific American](https://www.scientificamerican.com/article/three-anti-inflammatory-supplements-can-really-fight-disease-according-to/)
- [Safety of adaptogenic products — PMC 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12389708/)
- [Supplement interactions — University Hospitals 2025](https://www.uhhospitals.org/blog/articles/2025/06/taking-supplements-watch-out-for-these-common-interactions)
- [Magnesium bisglycinate for sleep — RCT 2025](https://pmc.ncbi.nlm.nih.gov/articles/PMC12412596/)
- [Glycine sleep enhancement — GlobalRPH 2025](https://globalrph.com/2025/10/glycines-role-in-sleep-enhancement-clinical-evidence-mechanisms-and-therapeutic-applications/)
- [Glutamine and gut permeability — meta-analysis](https://pmc.ncbi.nlm.nih.gov/articles/PMC11471693/)
- [Biotin for hair loss — PMC review](https://pmc.ncbi.nlm.nih.gov/articles/PMC5582478/)
- [Biotin risks for cancer patients — 2026](https://medicalxpress.com/news/2026-01-cancer-patients-popular-supplement-treatment.html)
- [Dietary supplements for sleep quality — PMC 2024](https://pmc.ncbi.nlm.nih.gov/articles/PMC11082867/)
- [CoQ10 meta-analysis heart failure — PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9609170/)
