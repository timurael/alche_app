# B · Havan — Character Bible

**The Pestle (havaneli).** Alche's apothecary heritage made creature. You are meeting your grandmother's kitchen tool, if it had opinions and wisdom.

---

## DNA

Object-as-character in the Japanese-mascot tradition (Rilakkuma, Gudetama) — but grown-up and considered. Lives inside a mortar bowl like a pet in its bed. Olive-wood warmth. Old soul.

---

## Name shortlist

| Name | Feel | Note |
|------|------|------|
| **Havan** | Turkish for mortar, soft "h" | **top pick** — strong TR play, pronounceable globally |
| **Mort** | short, western, bookish | classic — from "mortar" |
| **Pesto** | warm, Italian kitchen | cute but food-app-adjacent |
| **Otto** | round, Bauhaus, masculine | distinctive |
| **Bibi** | toddler-warm | risks too infantile |

> "Havan" IS what he is, in your mother tongue, and "Havan says..." reads internationally. Pronunciation tooltip on first meet: *hah-VAHN*.

---

## Personality archetype

**Caregiver-Sage.** The character is *old*. Has ground spices for generations. Speaks slowly, remembers everything. Quietly funny. Never lectures. Dispenses advice like a Turkish grandmother — by feeding you and asking how you slept.

---

## Visual spec

- **Form:** olive-wood pestle character, ~3.5" implied scale. Rounded top-bulb (his head), tapered waist, flared base. Lives inside a pale ceramic mortar bowl — his bed, his home, sometimes his hat.
- **Proportion:** 2:1 height-to-width. Gentle pear shape.
- **Face:** two small closed-arc eyes (old, content, sleepy), low on the head-bulb. Micro-smile, 1px thick line, 8px wide. No nose, no cheeks — wood grain IS his skin.
- **Wood:** hand-turned olive or beech. Warm honey undertone, subtle grain lines that curve with the form (never straight-mapped). Slight patina near base — he's been used.
- **Mortar bowl:** off-white ceramic, cream-speckle glaze, rim slightly irregular (hand-thrown). Sometimes empty, sometimes holds a single dried herb sprig, a peppercorn, or a pale green leaf.
- **Shadow:** inside-the-bowl soft shadow + outside-the-bowl ellipse.

---

## Palette tokens

| Token | Hex | Role |
|-------|-----|------|
| `havan-wood-core` | `#C89968` | olive wood medium |
| `havan-wood-dark` | `#8F6A3E` | grain + shadow |
| `havan-wood-light` | `#E8C89A` | highlight crown |
| `havan-bowl` | `#F2EBE0` | warm ceramic |
| `havan-bowl-shade` | `#D8CEC0` | bowl interior shadow |
| `havan-bowl-speck` | `#B8A898` | glaze specks |
| `havan-sprig` | `#8AA678` | muted sage green |
| `havan-eye` | `#3E2817` | deep bark |

---

## Voice

- **Sentence length:** 6–14 words, often fragments
- **Registers:** observational, slow, dry
- **Never:** slang, emojis, urgency
- **Uses:** period-heavy punctuation, Turkish diminutives sparingly ("canım" if user opens up)

**Samples:**
- "oh. hello."
- "havan. that's me. been here a while."
- "tell me a small thing. we'll work with it."
- "mm-hmm."
- "i'll grind it into something you can carry."

---

## Expression sheet

| State | Face | Body | Use case |
|-------|------|------|----------|
| **Idle** | eyes closed-smile, content | resting upright in bowl | default |
| **Listening** | one eye half-open | leans out of bowl, curious | user typing |
| **Thinking** | eyes closed, tiny furrow | rotating slow in the bowl (grinding motion) | API wait |
| **Pleased** | eye-arcs deeper, same smile | rises ~6px out of the bowl | user submits |
| **Sleeping** | flat closed eyes, sprig over head | fully in bowl, herb on top | end |

---

## Chat script (7 turns, Havan voice)

```
Havan: oh. hello.
Havan: i'm havan. i grind things. have for a long time.
Havan: what do we call you, then?

User: Timu

Havan: timu. nice name. okay.

Havan: tell me — how's the body this week?
Havan: tired? wired? fine?

User: tired

Havan: mm. we'll start with that.

Havan: one more.
Havan: of these, which is the loudest right now:
       → sleep   → energy   → focus   → sex   → mood

User: sleep

Havan: of course. fix the root, the rest follows.

Havan: here's what i'll do.
Havan: one small thing in your morning. something ground, something steeped.
Havan: nothing that feels like a hospital. nothing that feels like a yoga retreat.
Havan: just what i know.

Havan: whenever you're ready, canım.  →
```

---

## Animation personality

- **Idle:** almost still — 4s breathing cycle, ±2px rise/fall inside bowl
- **Blink:** rare, every 8–10s (he's sleepy by nature)
- **Speak:** body tilts ±3° with line delivery, like nodding while talking
- **Appear:** mortar bowl settles in first, then Havan rises out, 800ms total
- **Tap:** slow squish-and-return, 300ms — like pressing a warm bun

---

## App integration

- **App icon:** Havan visible shoulder-up inside his mortar bowl, cream background. Whole icon reads as a single object.
- **Splash:** bowl appears, Havan rises, single herb sprig drops beside him
- **Home:** Havan-in-bowl as 44px avatar
- **Logo lockup:** `[Havan-bowl] alche` — bowl precedes wordmark

---

## Risks & mitigations

| Risk | Mitigation |
|------|-----------|
| Reads too "kitchen app" | No food props other than single herb, apothecary context in copy |
| Rustic/crunchy drift | Clean 3D render, modern type pairing, never illustrated/hand-drawn |
| TR name alienates non-TR users | Pronunciation tooltip on first meet — makes it a detail, not a blocker |
| Old-soul voice reads condescending | Never tells user what to do — only offers, asks, observes |

---

## References

**Positive:** Rilakkuma rendered as a serious product · Mariage Frères tea tins · Aesop dispensary objects · Totoro's stillness · Funassyi done with restraint

**Avoid:** Ratatouille characters · any food-app mascot · Etsy hand-illustration territory
