# A · Lix — Character Bible

**The Droplet.** Alche's elixir made flesh. You are consuming this character.

---

## DNA

Intimate. Liquid. Iridescent. A single drop of something precious that chose to have a face. Metaphor for Alche's core promise: the elixir you take into yourself.

---

## Name shortlist

| Name | Feel | Note |
|------|------|------|
| **Lix** | sharp, clean, modern | **top pick** — 3 letters, brand-shaped |
| **Damla** | warm, Turkish for "droplet" | TR heritage without folklore |
| **Elix** | on-the-nose | safer, less distinct |
| **Dew** | soft, morning, poetic | drifts wellness-generic |
| **Qi** | energetic, Eastern | risks TCM appropriation |

---

## Personality archetype

**Innocent-Sage hybrid.** Curious about the user's body like a newborn scientist. Knows things but asks first. Never bossy. Low-key flirty in the way a droplet of something precious is flirty — it wants to be tasted.

---

## Visual spec

- **Form:** plump droplet, ~1:1.2 ratio (slightly taller than round). Rounded teardrop, not a sharp point.
- **Chat avatar size:** 72×84px. Hero size: 120px.
- **Skin:** iridescent oil-on-water — dominant tones rotate across pink-amber → pistachio → violet → cream, shifting with light angle. Never saturated.
- **Face:** two 4px round eyes high on the body. No pupils — solid soft-black dots. Tiny closed-mouth smile (arc, 12px wide). Rosy blush ovals either side, 30% opacity.
- **Highlights:** one crescent specular highlight upper-left. One soft sub-surface glow bottom-right. Inner amber core glow, 8% opacity, pulses.
- **Shadow:** single soft ellipse beneath, 30% opacity, 2px blur — implies floating.
- **Material:** matte-to-satin. NEVER glossy plastic. Reference is rosewater in a Le Labo bottle, not a candy GIF.

---

## Palette tokens

| Token | Hex | Role |
|-------|-----|------|
| `lix-core` | `#F4E4D6` | warm cream base |
| `lix-irid-1` | `#E8B4C8` | soft pink shift |
| `lix-irid-2` | `#B8D4C4` | pistachio shift |
| `lix-irid-3` | `#C4B8E0` | lavender shift |
| `lix-glow` | `#F5C88A` | amber inner light |
| `lix-eye` | `#1A1612` | warm black |
| `lix-blush` | `#D89B9B` | cheek tint (30% opacity) |
| `lix-shadow` | `#1A1612` | ground shadow (15% opacity) |

---

## Voice

- **Sentence length:** 4–12 words
- **Registers:** curious > declarative
- **Never:** exclamation marks, "amazing", "journey", "wellness"
- **Uses:** lowercase always, em-dashes, occasional ellipsis

**Samples:**
- "hi. i'm lix."
- "mostly water. like you."
- "tell me one thing you're tired of."
- "mm. noted."
- "okay — give me 24 hours. i'm mixing."

---

## Expression sheet

| State | Face | Body | Use case |
|-------|------|------|----------|
| **Idle** | closed smile, eyes open | gentle wobble, 2s loop | default |
| **Listening** | small smile, one eye squint (lean) | leans ~8° toward user | user typing |
| **Thinking** | mouth a tiny "o", eyes looking up | spinning shimmer in core | API wait |
| **Delighted** | wide crescent smile, eyes arc'd closed | tiny bounce, splash particles | user submits |
| **Sleeping** | flat line mouth, z's above | lowered, glow dimmed 50% | end of session |

---

## Chat script (7 turns, Lix voice)

```
Lix:  hi. i'm lix.
Lix:  i mix things. small doses. long timelines.
Lix:  what should i call you?

User: Timu

Lix:  timu. good.
Lix:  quick — how old is this body?

User: 29

Lix:  still soft. easy work.

Lix:  one more — pick the one that's loudest:
      → sleep   → energy   → focus   → sex   → mood

User: focus

Lix:  ah. the quiet one. okay.

Lix:  here's my promise —
Lix:  one small thing, every morning.
Lix:  no pills-that-look-like-clinical. no rituals-that-feel-like-work.
Lix:  just us.

Lix:  ready when you are.  →
```

---

## Animation personality

- **Idle loop:** 2s wobble, sine-ease, ±4px vertical, ±2° skew
- **Blink:** every 4–6s, 120ms duration, both eyes
- **Speak:** tiny jello squash (scaleY 0.96 / scaleX 1.04) per word, 80ms each
- **Appear:** splash-drop from above, bounce-settle, 600ms
- **Tap feedback:** ripple outward, 3 concentric rings, 400ms

---

## App integration

- **App icon:** Lix centered on cream (`#F4E4D6`), 3D render with ambient occlusion. Recognizable at 29×29px.
- **Splash:** Lix drops from top, settles, wordmark fades in below
- **Home:** migrates to top-right as 40px avatar badge, subtle pulse
- **Logo lockup:** `[Lix] alche` — droplet precedes wordmark, 8px gap

---

## Risks & mitigations

| Risk | Mitigation |
|------|-----------|
| Reads "water-tracking app" | Iridescent palette (never pure blue) + apothecary context in first line |
| Apple Liquid Glass knock-off | Matte finish, warm tones, never glassy transparency |
| Duolingo-adjacent kawaii | Adult voice, slower animation, no cartoon-loud expressions |
| AI-slop 3D mascot territory | Single continuous form, editorial lighting, no hands/legs |

---

## References

**Positive:** Aesop bottle silhouettes · Le Labo packaging · Headspace "blob" but adult · Apple Siri orb circa 2011 · Rilakkuma stripped of kawaii

**Avoid:** Duolingo Duo · any mascot with visible arms/legs · Canva stock
