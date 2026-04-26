# Video Briefs — alche.com Hero Assets

Five shots, written in the image-first two-prompt format per `~/.claude/image-to-video-guide.md`. Each shot has a Nano Banana Pro **still prompt** (Prompt A) and a video-model **motion prompt** (Prompt B), plus model choice, aspect, and iteration budget.

**House rules for every shot:**
- North star: *Aesop campaign film · Loewe Perfumes · Apple "Shot on iPhone" macro · Maison Margiela Replica · A24 trailer cinematography*
- Never: lens flares, sparkle effects, fast cuts, text overlays, motion blur trails, "epic" slow-motion ramps, rotating logos, Instagram filters
- Always: single continuous take, single light setup, single subject, one atmospheric note held for the duration
- Grade: cool-leaning neutral, slight green-cyan in shadows, warm only where a practical (candle, tungsten) justifies it. Never teal-and-orange.
- Grain: subtle 35mm film grain, ~400 ISO equivalent

**Workflow per shot:**
1. Generate Prompt A in Nano Banana Pro at 1920×1080 (or 1080×1920 for 9:16). Reroll 3-4× until the still is perfect.
2. Export as PNG, sRGB, 8-bit, no compression.
3. Upload as the first frame to the named video model. Feed Prompt B as the motion prompt.
4. Budget rerolls per shot (see each brief). If you blow the budget, the still is the problem — regenerate it, not the video.

---

## Shot 01 · Smoke Hero — `01-smoke-hero`

| Field | Value |
|-------|-------|
| **Section** | §02 — Opening frame, full-bleed |
| **Duration** | 8s loop |
| **Aspect** | 16:9 (shoot 9:16 as separate generation for mobile cut) |
| **Resolution** | 1080p native, upscale to 4K in post |
| **Model** | **Veo 3.1 Standard**, audio-off |
| **Why this model** | Physics on smoke + loop closure + camera lock-off fidelity |
| **Iteration budget** | 3 stills × 5 motion gens = 15 gens max |

### Prompt A · the still (Nano Banana Pro)

```
A vertical column of slow, cold black smoke rising through a narrow
diagonal beam of pale daylight-balanced light, against a near-black
void. The frame is 90% negative space, 10% smoke and light beam.
The smoke occupies the center third vertically, in a single
continuous column at rest — no curls in progress, no turbulence,
just a soft upward suggestion.

Shot on a 100mm macro lens, locked tripod, dead-center framing.
Shallow depth of field — the smoke is in razor focus, the surrounding
air falls to absolute black. The light beam cuts diagonally across
the upper third, catching only the smoke, not the surrounding air.

Single hard-edged daylight source (5600K) from camera-left. No fill,
no rim. Severe contrast, shadows never crushed. The only hint of
warmth is a faint amber suggestion deep in the smoke's shadow side.

Color palette: near-black charcoal, cool daylight white, trace amber.
Monochrome cool. Subtle 35mm film grain.

Composition: three depth planes — foreground darkness, midground
smoke column in razor focus, background absolute black. The smoke
is at rest, not mid-curl.

Aspect ratio: 16:9, 1920×1080. PNG, sRGB, no compression.

Negative: no text, no captions, no people, no hands, no products,
no fire, no flames, no sparks, no lens flares, no light leaks, no
sun rays, no dust particles beyond the smoke itself, no orange
color cast, no fast motion blur baked into the still, no turbulent
smoke, mid-motion smoke.
```

### Prompt B · the motion (Veo 3.1, first frame = Prompt A output)

```
The camera holds completely still. The smoke breathes — one slow
inhale, one slow exhale — rising and falling over eight seconds,
curling gently left to right and back. The beam of light is steady.
No other motion in frame.

Loop seamlessly — first and last frame must register as identical.
```

---

## Shot 02 · Dropper Scrub — `03-dropper-scrub`

| Field | Value |
|-------|-------|
| **Section** | §03 — Statement, scroll-scrubbed |
| **Duration** | 6s (frame-accuracy critical — user scrolls through the timeline) |
| **Aspect** | 16:9 |
| **Resolution** | 1080p, high bitrate (6 Mbps+) for clean scrubbing |
| **Model** | **Veo 3.1 Standard**, audio-off |
| **Why this model** | Best physics on liquid impact + frame coherence for scrubbing. Luma Ray 2 is a backup if Veo struggles with the splash. |
| **Iteration budget** | 4 stills × 8 motion gens = 32 gens max (splash physics is harder) |

### Prompt A · the still (Nano Banana Pro)

```
Top-down macro shot of a clear glass petri dish on a pure black
acrylic surface. The dish contains a shallow pool of still distilled
water, surface undisturbed, mirror-flat. A glass pipette dropper is
suspended three inches above the water surface, held by an invisible
stand outside the frame. A single drop of warm amber liquid — the
color of unfiltered honey held against light — hangs at the dropper
tip, spherical, held by surface tension, not yet falling.

Shot on a 100mm macro at f/4, focus on the dropper tip and the water
meniscus simultaneously (achievable via top-down geometry). The
dropper is rim-lit by a single soft top-light. The water dish picks
up a faint underglow that catches the amber color through the liquid
drop. Everything else falls to black.

Lighting: one large soft source from above-camera-back, slightly
warm (4200K) to register the amber. One small kicker from the side
to give the water meniscus a hairline highlight. No fill on the
shadow side — let it fall to black.

Color: editorial-black background (#0d121b), warm amber liquid
(honey), cool clear water. High contrast. Subtle film grain.

Composition: three depth planes — black acrylic foreground, amber
drop and dropper tip midground in razor focus, water surface
background (one plane due to top-down but readable as three via
reflection depth).

Aspect ratio: 16:9, 1920×1080. PNG, sRGB, no compression.

Negative: no hands, no people, no labels, no text on the dropper
or dish, no laboratory clutter, no test tubes in background, no
measuring equipment in frame, no ripples on the water, no drops
already fallen, no splash happening, no amber color in the water
yet, no steam, no smoke, no sparkles, no lens flare.
```

### Prompt B · the motion (Veo 3.1, first frame = Prompt A output)

```
The camera holds completely still, locked top-down.

For the first two seconds, the amber drop hangs motionless at the
dropper tip, held by surface tension.

At the 3-second mark, the drop releases and falls slowly across one
second, suspended in air, holding its spherical shape.

At the 4-second mark, the drop strikes the water surface. A crown
splash blooms upward, droplets scatter and fall back. Ripples spread
radially to the edges of the dish in concentric rings.

By six seconds, the water is almost still again, one small amber
tendril dispersing into the clear water.

Elegant, not dramatic. The splash reads as a measurement, not a
crash.
```

---

## Shot 03 · Long Table — `04d-long-table`

| Field | Value |
|-------|-------|
| **Section** | §04 — Four layers, BELONG panel |
| **Duration** | 8s seamless loop |
| **Aspect** | 16:9 |
| **Resolution** | 1080p |
| **Model** | **Kling 2.0 Master** (hands + cloth + candlelight motion is Kling's strength at 1080p native) |
| **Why this model** | Kling handles skin/cloth/flame motion better than Veo 3.1 in close-up. Veo 3.1 is the backup if Kling breaks the hand pass. |
| **Iteration budget** | 4 stills × 10 motion gens = 40 gens max (hands are hard) |

### Prompt A · the still (Nano Banana Pro)

```
A long oak communal table, candlelit, photographed from a low side
angle at the far end of the table looking down its length. The table
surface is oak with visible grain, set with bone-colored linen
runners, ceramic vessels in muted earth tones (terracotta, bone,
charcoal), small pillar beeswax candles spaced along the centerline,
all lit, their flames steady. In the immediate foreground, a single
ceramic cup of warm amber tea is being held between two hands — a
left hand from frame right holding the cup, a right hand from frame
left reaching toward it. The hands register as adult, lived-in,
ringless, unmarked. Only hands and forearms visible — figures are
cropped out of frame above the wrists.

Shot on a 35mm at f/2.8, focus on the cup and the meeting of the
hands. Candle flames bokeh-soft along the table's vanishing line
into the background. Vanishing point roughly one-third frame depth.

Lighting: candlelight only. Five to seven practical pillar candles
visible on the table, no fill, no key, no flash. The ambient room
is near-black. Skin reads warm amber, ceramics read deep brown and
bone. Highlights diffuse and steady. Color temperature ~1900K on
the candles, no white-balance correction.

Color: warm amber and deep oxblood shadow, with a faint cool
window-light cyan barely visible at the very back of the frame as
a hint of exterior. Film grain slightly more present than the
other clips.

Composition: three depth planes — hands and cup in foreground (razor
focus), candles and ceramics midground (gentle defocus), receding
vanishing line background (bokeh-soft). Hands are at rest, holding
position — the exchange is about to happen, not happening.

Aspect ratio: 16:9, 1920×1080. PNG, sRGB, no compression.

Negative: no faces, no shoulders, no full bodies, no chairs visible,
no smartphones, no laptops, no wine glasses, no restaurant signaling,
no waiters, no menus, no salt-and-pepper shakers, no bread baskets,
no flowers in vases, no string lights, no fairy lights, no bokeh
balls beyond the candle flames themselves, no overhead chandelier,
no heavy warm-orange restaurant wash, no hands mid-gesture, no
interlaced fingers.
```

### Prompt B · the motion (Kling 2.0 Master, first frame = Prompt A output)

```
The camera holds completely still.

Over eight seconds, the left hand passes the ceramic cup slowly to
the right hand. The exchange completes at the five-second mark.
The receiving hand holds the cup for one beat and the loop resets
seamlessly as the giving hand has just released — making the pass
continuous in loop.

Candle flames flicker gently throughout. No other motion.

Loop seamlessly.
```

---

## Shot 04 · Apothecary Walk — `06-apothecary-walk`

| Field | Value |
|-------|-------|
| **Section** | §06 — The apothecary |
| **Duration** | 15s (stitch from two Veo 3.1 clips: 8s + 7s) |
| **Aspect** | 16:9 |
| **Resolution** | 1080p |
| **Model** | **Veo 3.1 Standard** with native `Extend` feature for the stitch |
| **Why this model** | Camera-language (first-person slow walk) is Veo's strength; Extend handles the 8s-to-15s chain; architecture + practical lighting hold stable |
| **Iteration budget** | 2 stills (start + midpoint) × 6 motion gens per clip × 2 clips = 24 gens max |

### Prompt A1 · still for Clip 1 (Nano Banana Pro)

```
First-person POV, standing just inside a heavy wooden side door that
has just closed behind us. We see a hallway ahead, lined with
apothecary shelves on both sides. The shelves hold small amber glass
bottles, ceramic jars labeled in Space Mono monospace lettering,
dried herbs hanging upside down in small bunches. A single hairline
brass shelf rail runs along the edge of each shelf. The hallway
floor is polished concrete. Thirty feet ahead, the hallway opens
into a ritual room with a low ceiling, a single linen-curtained
treatment bed, and a small daylight window casting cool light across
the bed. A kettle on a side table emits a thin plume of steam.

Camera at chest height, slightly forward-tilted toward the floor and
middle ground. Wide lens — 24mm equivalent — but never fisheye-
distorted. Framing is symmetrical, the hallway vanishing point dead
center of the frame.

Lighting: mixed practical only. Tungsten-warm wall sconces in the
hallway (~2700K) spaced every eight feet. Cool daylight from the
ritual-room window at the end of the hallway (~5600K). The mix of
warm and cool reads as architectural honesty, not cinematography.

Color: warm wood tones, bone-white linen, deep brown glass on
shelves, cool slate concrete floor, daylight cyan at the end.
Subtle film grain.

Composition: three depth planes — near shelves in soft defocus,
midground hallway in sharp focus, distant ritual room in gentle
bokeh. Empty space. Lived-in — a linen cloth slightly crumpled on
a side table, a single book spine-up, one chair pulled slightly
out.

Aspect ratio: 16:9, 1920×1080. PNG, sRGB, no compression.

Negative: no people, no faces, no hands, no patients, no
practitioners, no pets, no posters, no signage, no neon, no spa
towels rolled in baskets, no aromatherapy diffuser steam, no
lavender bouquets, no crystals, no sage smudge sticks, no Buddha
statues, no gemstones, no whitewashed Mediterranean look, no
obvious "wellness clinic" signaling.
```

### Prompt B1 · motion for Clip 1 (Veo 3.1 Standard, first frame = Prompt A1 output)

```
Gimbal-stabilized first-person walk at slow human pace —
approximately 0.6 meters per second, half-walking-speed. The camera
moves forward down the hallway, past the shelves, through the
opening into the ritual room. The walk is steady but not robotic —
slight organic sway in the body. We pass the treatment bed. The
kettle steam rises gently. No other motion.

Shutter at 1/48 for natural motion blur.
```

### Prompt A2 · still for Clip 2 (Nano Banana Pro, visual continuity with A1)

```
First-person POV, standing in the ritual room with a curtained
doorway just ahead. Through the parted linen curtain, we glimpse
the next room: a small cubic LED booth lined with matte cool-white
panels, a single LED bed, soft cool-white glow from the panels.
Beyond the LED room, through another doorway, we can see the edge
of a wider salon room with a long communal wooden table — the same
oak table as Shot 03 — and a wall of windows casting cool diagonal
daylight across the wood.

Camera at chest height, forward-tilted. Wide lens — 24mm equivalent.
Framing centers the curtained doorway.

Lighting: mixed practical. Warm tungsten from behind (where we
came), cool LED panel glow through the curtain, cooler daylight
further ahead. Three light temperatures visible in one frame.

Color: warm amber receding behind, cool cyan LED mid-frame, neutral
daylight ahead. The color temperature progression reads the journey.

Composition: three depth planes — linen curtain foreground in gentle
defocus, LED booth midground sharp, salon room background bokeh-soft.

Aspect ratio: 16:9, 1920×1080. Continuity with Prompt A1 — same
camera height, same wall textures, same floor finish.

Negative: [same as Prompt A1]
```

### Prompt B2 · motion for Clip 2 (Veo 3.1 Standard, first frame = Prompt A2 output, chain via Extend)

```
Gimbal-stabilized first-person walk continues at the same 0.6 m/s
pace. Camera moves forward, parts the linen curtain, passes through
the LED booth, through the second doorway, and enters the salon
room. Camera ends on a wide of the empty long table, holds for one
beat, ends.

Shutter at 1/48. Same organic sway as Clip 1.
```

**Stitch note:** Use Veo 3.1's native `Extend` feature from the last frame of Clip 1. If Extend drifts on architecture, chain manually: extract last frame of Clip 1 → re-upload as first frame of Clip 2 and repeat 80%+ of the still's descriptive tokens in Prompt A2.

---

## Shot 05 · Candle — `09-candle`

| Field | Value |
|-------|-------|
| **Section** | §09 — Join, vertical strip |
| **Duration** | 12s seamless loop |
| **Aspect** | 9:16 (vertical, fills the 240px-wide left strip) |
| **Resolution** | 1080×1920 |
| **Model** | **Luma Ray 2** in loop mode |
| **Why this model** | Ray 2 has native loop mode + dual-keyframe support. A candle flame loop is exactly what loop mode is built for. Veo 3.1 Standard is the backup. |
| **Iteration budget** | 3 stills × 5 motion gens = 15 gens max |

### Prompt A · the still (Nano Banana Pro)

```
A single beeswax pillar candle, ivory color, set on a polished
slate surface against a near-black wall. The candle occupies the
lower 60% of the vertical frame. The flame sits in the upper-middle,
steady, small, at rest — not blown, not flickering at an angle.

Shot on an 85mm at f/2.8, locked-off tripod, camera slightly below
the flame's eye line. Very shallow depth of field — the flame is
in razor focus, the candle body softly defocused, the wall and
surface absolute black.

Lighting: candlelight only. The candle illuminates itself. The
background wall and slate surface are near-black, picking up only
the faintest amber spill at the immediate base of the candle.
Color temperature ~1900K.

Color: warm amber flame, deep wax-cream candle body, near-black
elsewhere. Severe contrast. Subtle film grain.

Composition: three depth planes — candle body foreground (soft
defocus), flame midground (razor focus), black void background.
Flame is at rest, vertical, not curled.

Aspect ratio: 9:16, 1080×1920. PNG, sRGB, no compression.

Negative: no hands, no faces, no other candles, no candle holders
beyond the candle resting directly on slate, no smoke plume, no
extinguishing, no wind-blown flame, no incense, no glass votive,
no cathedral background, no religious context, no bokeh balls
beyond the flame itself, no light leaks, no lens flares, no sepia
wash across the whole frame, no dimming.
```

### Prompt B · the motion (Luma Ray 2, loop mode, first frame = Prompt A output)

```
The camera holds completely still. Only the flame moves.

The flame breathes in long slow movements, occasionally elongating
upward then settling. Wax glows faintly where the flame meets the
wick, casting a subtle warm halo on the upper inch of the candle
body. The flame's intensity remains constant throughout.

Twelve seconds of pure candlelight. No other motion in frame.

Loop seamlessly.
```

---

## Generation workflow — run in this order

1. **Round 1 — foundation (3 shots):** 01 Smoke Hero · 04 Apothecary Walk · 05 Candle. Three full-bleed loops. Site feels alive on day one.
2. **Round 2 — the thesis:** 02 Dropper Scrub. The single "wow" interaction.
3. **Round 3 — BELONG panel:** 03 Long Table. Completes the four-layers section (the remaining 04a-c panels use a similar two-prompt pattern, not yet briefed here).

**Why this order:** the three foundation shots can ship without the others, and the thesis shot benefits from running late because the still model (Nano Banana Pro) gets better prompts once you've seen how the first three landed.

**Before each generation:**
- Still passes the 13-rule checklist in `~/.claude/image-to-video-guide.md` §4
- Motion prompt is ≤3 lines, one camera verb, one subject action, one atmospheric note
- Check the still for anything you don't want to move (watermarks, text, extras) — inpaint before uploading

**After each generation:**
- Stitch multi-clip shots in DaVinci Resolve
- Unified color grade across all 5 shots
- Film grain overlay pass (FilmConvert or Dehancer)
- Web encode per spec in `alche/website/CLAUDE-BUILD-PROMPT.md` §6

---

*Written against `~/.claude/image-to-video-guide.md`. If conflicts arise between this brief and the guide, the guide wins for process; this brief wins for Alche-specific content.*

*Built in the vibe of `alche-home-redesign.html`. Kinfolk meets science. Quiet, italic, cold, alive.*
