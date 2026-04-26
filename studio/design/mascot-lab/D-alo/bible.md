# D · Alo — Character Bible

**The Stone / Orb.** The Philosopher's Stone, warmed. You are meeting a *presence*.

---

## DNA

Alchemy's purest symbol — a single object that transmutes. Most tech-forward of the four. Not a character, a presence. Clean stillness of a meditation bell.

---

## Name shortlist

| Name | Feel | Note |
|------|------|------|
| **Alo** | open, warm, 3 letters | **top pick** — greeting + branded object |
| **Nu** | new, atomic, modern | minimal |
| **Lumen** | bright, scientific | too clinical |
| **Taş** | Turkish for "stone" | cool but plosive, hard for non-TR |
| **Pebble** | warm, retro | taken (Pebble watch) |

> "Alo" is also the Turkish telephone greeting — layered joke: the orb *calls* the user every morning. Rhymes with halo.

---

## Personality archetype

**Magician-Sage.** The character is minimal, knowing, slightly otherworldly. Doesn't explain. Observes. Offers. Feels older than time but not dusty — the clean stillness of a meditation bell.

---

## Visual spec

- **Form:** smooth palm-sized orb, slight asymmetry (not perfect sphere — hand-carved feel). ~1:1 ratio with 3% vertical stretch.
- **Surface:** polished rose-quartz-meets-river-stone. Warm pink-amber undertones, not cold crystal. Subtle internal cloudiness, honey-light glowing from within.
- **Face (optional):** no face, OR two extremely faint light-dimples (barely readable, more *felt* than seen). Emotion expressed entirely through glow, color shift, pulse rate.
- **Glow:** internal amber core, emits ~30% opacity outward halo, 40px radius.
- **Aura:** faint heat-shimmer around perimeter, animated.
- **Shadow:** floats 3mm above soft elliptical shadow, 20% opacity.

---

## Palette tokens

| Token | Hex | Role |
|-------|-----|------|
| `alo-core` | `#F4C89A` | warm amber body base |
| `alo-surface` | `#E8A88C` | rose-quartz mid |
| `alo-surface-deep` | `#C47A68` | shadow side |
| `alo-glow-inner` | `#FFD9A0` | honey core |
| `alo-glow-outer` | `#F5B888` | halo (30% opacity) |
| `alo-highlight` | `#FFF4E0` | specular |
| `alo-bg` | `#1A0E08` | obsidian backdrop |
| `alo-shadow-ground` | `#2A1C14` | (20% opacity) |

---

## Voice

- **Sentence length:** 2–8 words. Extremely compressed.
- **Registers:** stillness > activity
- **Never:** emotion words (happy, excited, sad)
- **Uses:** pauses, single-word replies, koan-adjacent observations

**Samples:**
- "alo."
- "i'm here."
- "what's your name, then."
- "mm."
- "one thing, every morning. okay."

---

## Expression sheet (all via glow/motion — no face)

| State | Glow | Motion | Use case |
|-------|------|--------|----------|
| **Idle** | steady warm | 3s breath pulse, ±5% scale | default |
| **Listening** | slight brightening | pulses faster, 1.5s cycle | user typing |
| **Thinking** | warm-to-violet color shift | slow rotate in place | API wait |
| **Aligned** | brightest flash, amber-gold | single upward bob, settle | user submits |
| **Resting** | dimmed to 30% | slower 6s breath | end |

---

## Chat script (7 turns, Alo voice)

```
Alo: alo.
Alo: i'm alo. i'm here.

Alo: your name.

User: Timu

Alo: timu.
Alo: noted.

Alo: how old is the body.

User: 29

Alo: young. enough.

Alo: which one is loudest.
     → sleep   → energy   → focus   → sex   → mood

User: focus

Alo: focus. yes.

Alo: here is what happens.
Alo: one small thing. every morning.
Alo: not medicine. not ritual. just a stone, warming your pocket.

Alo: ready.  →
```

---

## Animation personality

- **Idle:** breath pulse, 3s cycle, scale ±5% with glow ±10%
- **Blink:** n/a — no face. Periodic amber ripple across surface every 8s.
- **Speak:** inner glow brightens 20% per line for 200ms, then returns
- **Appear:** fades in from blackness, brightens to full, 1500ms — like a sun rising
- **Tap:** bright flash + outward ripple, 500ms

---

## App integration

- **App icon:** Alo centered, deep-warm-black background (`#1A0E08`). Orb glowing. Most iconic of the four.
- **Splash:** black screen, orb fades in, pulses once, logo appears
- **Home:** 36px orb in nav, subtle glow
- **Logo lockup:** `[Alo] alche` OR just Alo-as-dot above the wordmark — orb can become a period or tittle

---

## Risks & mitigations

| Risk | Mitigation |
|------|-----------|
| No face = harder to carry personality | Voice must do heavy lifting. Every line memorable. |
| Siri-clone territory | Warm palette (never blue), no voice waveform, faceless but not abstract-shape |
| Feels too woo / esoteric | Grounded copy, zero crystal/astrology references |
| Hard to love vs Filiz/Havan | Targets a different user — someone who wants *less*, not more |

---

## References

**Positive:** Apple's original Siri orb (2011-2016) · Loewe soap-stone candles · Teenage Engineering OP-1 product shots · Olafur Eliasson's "Little Sun" · Tadao Ando light compositions · Japanese suiseki stones

**Avoid:** Crystal-healing Instagram · Replika · meditation-app gradient blobs · any orb with swirling galaxy inside
