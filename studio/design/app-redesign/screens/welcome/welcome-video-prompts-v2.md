---
project: Alche · Welcome Screen Video Loop
version: v2 (research-grounded)
date: 2026-04-25
shots: 10
format: still (Nano Banana Pro) + motion (Veo 3.1 Fast, where animated)
companion: welcome-video-brief-v2.md
---

# Welcome Video — 10 Shot Pairs

Each shot follows the `image-to-video-guide.md` §9 template. Every shot is **two prompts** — a **still** (Nano Banana Pro) and a **motion** (Veo 3.1 Fast) with the still as first frame.

**Global still-prompt specs applied to every shot:**
```
aspect ratio 1080x1920 (9:16 portrait), sRGB PNG, 8-bit, no compression.
Single soft directional window light, north-facing diffusion.
Near-monochrome palette: editorial off-white #fcfcfd ground, near-black #0d121b subject, one note of primary blue #1152d4 per frame.
Editorial stillness. No faces above the nose line. No hands gesturing or interlaced.
No text, no logos, no wordmarks anywhere in frame.
40% negative space top-weighted for copy overlay.
Kodak Portra 400 emulation, fine grain, Rec.709 color space.
Style: Kinfolk / Cereal / T Magazine editorial register.
```

**Motion-prompt formula (per guide §5):**
```
[one camera verb — one move only].
[one subject action — one verb + one body part].
[one atmospheric element].
```

**Motion strength: 3–5 of 10** for every shot (higher warps; lower freezes).

---

## SHOT 01 · Step (the negation)

**Beat:** "Some apps count steps." — but not here.
**Reference anchor:** **Scheltens & Abbenes** — flat editorial still-life, tabletop, generous negative space.
**Model:** Ken Burns still only (no AI motion — this frame is deliberately frozen).
**Duration in loop:** 1.0s
**Continuity:** opens cold, cuts to frame 02 via crossfade.

### Prompt A · Still

> A **1080×1920 portrait editorial still life** of **a single worn leather walking shoe lying on its side** on a pale ivory linen cloth covering a warn oak tabletop. The shoe is warm chestnut brown, deeply creased at the vamp, shot from **directly overhead, bird's-eye 90-degree angle**. The laces are slack, one loop undone. The shoe occupies only the **bottom third** of the frame — the upper two-thirds are empty ivory linen, softly rumpled, catching pale morning window light from camera-left. **Palette:** editorial off-white `#fcfcfd` linen, deep chestnut-black `#0d121b` leather, single thread of primary blue `#1152d4` visible as a faint ink mark on the linen's lower-left corner. Shot on **Hasselblad X2D 100C, 80mm f/4**, Kodak Portra 400. **Style:** Scheltens & Abbenes editorial still-life — object-as-artifact, flat studio daylight, no hard shadow, absolute stillness. **Negative:** no feet, no foot inside the shoe, no second shoe, no text on the shoe, no branding visible.

### Prompt B · Motion (Resolve Ken Burns only)

> *No AI motion.* Import still to DaVinci Resolve Fusion. **5% push-in over 1.0s**, anchored centre. No pan. Preserves the "frozen" read — apps count steps; we don't.

---

## SHOT 02 · Window opens · LIX ARRIVES

**Beat:** first light enters the letter. Lix appears on the windowsill — her pre-auth cameo, her only frame in the film.
**Reference anchor:** **Rinko Kawauchi** — *Illuminance*, diffuse overexposed daylight. **Lix render spec:** `mascot-lab/A-lix/prompt.md` (ICS master prompt, idle state).
**Model:** Ken Burns still only.
**Duration in loop:** 1.0s
**Continuity:** crossfades from 01. Composition brackets frame 10 (Lix gone by dusk — she arrived at dawn, she's moved inside by evening).

### Prompt A · Still

> A **1080×1920 portrait still** of **an open wooden casement window, seen from inside a quiet room at 6:40 AM** in early spring. Through the window: soft blue-white morning mist, no distinct landscape, just diffuse pale gradient fading to white. The window frame is pale unpainted oak. A single thin strand of **pale sheer cotton curtain** drifts through the open pane at its lower-right corner, caught mid-breath by outside air. The room interior is **near-white with deep slate shadow** at the frame's edges.
>
> **On the windowsill, at lower-left third of the frame, sits Lix** — a **single plump iridescent droplet character, teardrop silhouette roughly 1:1.2 ratio, body height ~120px within the 1920px frame** (small, quiet, not dominating). Her surface is a **muted oil-on-water holography — pale pinks, pistachio greens, soft lavenders, and warm creams shifting softly**, matte-to-satin finish, never glossy. Two tiny round soft-black dot eyes high on the body (no pupils, no highlights). A small closed-mouth smile, 8px curved arc. Two soft rosy blush ovals at 20% opacity. One crescent specular highlight upper-left. A soft internal amber core glow (6% opacity) in the lower third. She floats 2mm above the oak sill, casting a soft elliptical shadow at 25% opacity. Pose: idle, perfectly upright, perfectly still, facing camera three-quarter to the morning light. She is catching the first light — the scene's only warm note against the cool window gradient.
>
> **Palette:** editorial off-white `#fcfcfd` dominant (65% of frame), cool window-gradient through to pale `#1152d4`-tinted mist at the horizon, deep slate `#0d121b` curtain shadow in the lower corners, **Lix's iridescent cream/pink/pistachio/lavender palette and her warm amber core glow `#F5C88A`** — the one permitted exception to the film's editorial-blue rule, because she predates it. Shot on **Hasselblad X2D 100C, 50mm f/4**, Kodak Portra 400, Rinko Kawauchi halated-overexposure register (+⅔ stop). Lix rendered **Cinema 4D soft global illumination, shallow depth of field, key light from upper-left 45°, cool subtle fill from right** — per `mascot-lab/A-lix/prompt.md` master spec.
>
> **Composition:** centered window, 40% top negative space (sky/mist — preserved for copy overlay), window frame 30%, windowsill + Lix 20%, interior shadow bottom 10%. Lix occupies lower-left third only — she does NOT compete with the window or the horizon.
>
> **Negative:** no limbs on Lix, no arms, no legs, no hands, no glossy plastic finish, no rainbow saturation, no cartoon outline, no thick black stroke, no sparkle effects, no halo ring, no text, no watermark, no mouth teeth, no tongue, no Duolingo aesthetic, no anime-style large eyes, no blue-water association (Lix does not touch or contain water here — she sits on dry oak sill). No people, no other plants, no other furniture, no identifiable landscape through window.

### Prompt B · Motion (Resolve Ken Burns)

> *No AI motion.* 3% slow pedestal-up over 1.0s — the camera rises from sill level toward the window, drawing the eye past Lix and through the window into the light. Pure vertical, no horizontal drift. Lix does not animate. She is perfectly still.

---

## SHOT 03 · Unwritten letter

**Beat:** the letter waiting to be written. "…steps" lands visually as the blank page.
**Reference anchor:** **Justin Chung** — Le Labo *Making Sense*, warm archival interior register.
**Model:** Ken Burns still only.
**Duration:** 1.0s

### Prompt A · Still

> A **1080×1920 portrait editorial still life** of **a single sheet of cream laid paper**, untouched, lying on a warm oak writing desk. Beside the paper (off-centre to the right): a **glass dip pen with an unused steel nib**, a small brass weight, a closed **cobalt-blue glass ink bottle** (sealed, label-less, `#1152d4`). Shot from an overhead **75-degree angle** (not fully flat) — the paper occupies the **right two-thirds of the lower frame**, the upper third empty oak desk fading into shadow. Single warm daylight from camera-left, long soft raking shadow across the paper's weave. **Palette:** cream paper `#fcfcfd`, warm oak desk tones edging to near-black `#0d121b`, single cobalt ink bottle `#1152d4` as the frame's only saturation. Shot on **Hasselblad X2D, 80mm f/5.6**, Justin Chung's *Making Sense Vol. 1* register — warm archival, unvarnished, intimate. Kodak Portra 400. **Negative:** no handwriting, no person, no hand, no text on the paper, no label on the ink bottle, no envelope, no wax seal.

### Prompt B · Motion (Resolve Ken Burns)

> *No AI motion.* 4% slow push-in toward the ink bottle, anchored on the bottle's cap. No rotation.

---

## SHOT 04 · Ink in water · HERO SHOT

**Beat:** "This one will **listen**" — the underlined word made visible. Primary blue blooms.
**Reference anchor:** **Wolfgang Tillmans** (chemical process) + **Rinko Kawauchi** (halated macro).
**Model:** **Veo 3.1 Fast** — animated hero. This is where the motion wakes up.
**Duration:** 2.0s
**Continuity:** crossfades from 03. Bleeds into 05.

### Prompt A · Still

> A **1080×1920 portrait ultra-macro still** of **a single thread of cobalt ink** (`#1152d4`, exact) suspended in a shallow glass dish of clear water, caught at the instant the ink first touches the water's surface — a fine vertical filament just beginning to bloom into a faint cloud, still mostly intact as a line. Shot from **eye-level with the water's surface**, the camera pointed at a subtle downward 20-degree angle. The glass dish sits on a pale ivory linen cloth. **Light:** single soft window daylight from camera-right, catching the water's meniscus in a thin highlight. Water is nearly colorless, just the faintest cool tint. Background is out-of-focus pale off-white linen fading to soft white. **Palette:** cobalt ink `#1152d4` as the ONLY saturation (occupies maybe 8% of frame), near-white water and linen `#fcfcfd` dominant (80%+), near-black `#0d121b` in deep shadow at the dish's rim. Shot on **Phase One XT with 120mm Blue Ring macro at f/4, 1/500s**. Kodak Portra 400. **Composition:** ink thread enters from top-centre, descends to mid-frame. 60% of frame above the water's surface is negative space — pale white. **Negative:** no hand, no dropper visible (ink is already falling, source out of frame), no other color anywhere.

### Prompt B · Motion (Veo 3.1 Fast)

> **Static lock-off, the camera holds completely still.**
> **The cobalt ink thread slowly blooms downward into the water, unfurling into a soft cloud over 2 seconds.**
> **A single small ripple expands outward from where the ink first touched the surface.**
>
> *No audio. Motion strength 4/10.*

---

## SHOT 05 · The ear · HERO SHOT · REDUCE MOTION FALLBACK

**Beat:** the organ of listening. The hinge of the whole film.
**Reference anchor:** **Viviane Sassen** — body-as-sculpture, cropped limb, shadow geometry.
**Model:** **Veo 3.1 Fast** — hero.
**Duration:** 2.0s
**Role:** this single still also ships as `welcome-still.jpg` for Reduce Motion / Low Power fallback.

### Prompt A · Still

> A **1080×1920 portrait abstracted body macro**: a **close-up of a single human ear and the soft curve of the neck below it**, lit from camera-left by diffuse north-facing window light. The rest of the face (above the lobe) is **completely cropped out of frame** — only the ear, the tragus, the antihelix, and a slope of warm ivory neck and jawline edge are visible. **Warm Mediterranean-olive skin**, no jewelry, faint peach-fuzz catching the light. The subject is at rest, listening — no tension in the neck. **60% of the frame is near-white ground** to camera-right (out-of-focus pale linen pillow), 40% is the ear and shadow. **Palette:** warm skin-ivory neutral (near `#fcfcfd` in the highlight, stepping to deep slate `#0d121b` in the ear canal's shadow), one tiny `#1152d4` primary-blue note — a single **thin blue cotton thread** resting on the neck just below the earlobe, barely visible, like something just noticed. Shot on **Canon EOS R5, 100mm f/2.8 macro at f/3.5**, shallow focus tack-sharp on the tragus, everything else in creamy bokeh. Kodak Portra 400, Viviane Sassen body-as-sculpture register. **Composition:** ear occupies left-centre, ground is right half. **Negative:** no face above the lobe, no hair, no earring, no background, no text, no mouth, no eye visible.

### Prompt B · Motion (Veo 3.1 Fast)

> **Static lock-off, the camera holds completely still.**
> **The neck rises and falls almost imperceptibly with a single slow breath.**
> **A single strand of hair at the edge of frame drifts in still air.**
>
> *No audio. Motion strength 3/10. This is the quietest moment in the film.*

---

## SHOT 06 · Pulse at wrist

**Beat:** the body speaking. Listening happens; here's what it hears.
**Reference anchor:** **Nadav Kander** — forensic stillness, sculpted skin under Rembrandt side-light.
**Model:** Ken Burns still only (pulse motion reads as a tic in AI — keep static).
**Duration:** 1.0s

### Prompt A · Still

> A **1080×1920 portrait editorial macro** of **a relaxed human wrist resting on raw ivory linen**, palm turned slightly upward, the tendons soft, the radial pulse faintly visible where the artery runs beneath the skin. Shot from **directly above, bird's-eye 90 degrees**, the hand entering frame from the **bottom-right corner** and extending diagonally to mid-frame. **Warm Mediterranean-olive skin**, no jewelry, no watch, no tattoo. The wrist is the subject; the hand's fingers soft-focus recede toward the corner. Single north-facing diffuse window light from camera-left, cool neutral `5600K`. **Palette:** warm skin neutrals, pale ivory `#fcfcfd` linen ground (65% of frame), a single muted slate shadow `#0d121b` along the wrist's underside, a **faint cobalt `#1152d4` vein tint** visible where the radial artery runs (subtle — just a hint of primary-blue register in the skin). Shot on **Hasselblad X2D, 120mm macro at f/3.2**, Nadav Kander *Bodies* register — forensic, sculpted, still. Kodak Portra 400. **Composition:** top two-thirds empty pale linen, bottom-right third contains the wrist entering. **Negative:** no visible pulse motion (still), no person above the wrist, no clothing, no hand clenched, no fingers interlaced.

### Prompt B · Motion (Resolve Ken Burns)

> *No AI motion.* 2% incredibly slow push-in toward the wrist, anchored on the pulse point. No drift.

---

## SHOT 07 · Breath on glass · HERO SHOT

**Beat:** evidence of living. The body announces itself.
**Reference anchor:** **Edvinas Bruzas** — Aesop *Always On*, raking architectural shadow + **Rinko Kawauchi** breath-level observation.
**Model:** **Veo 3.1 Fast** — hero.
**Duration:** 2.0s

### Prompt A · Still

> A **1080×1920 portrait macro still** of **a single pane of clear glass**, shot at a **15-degree oblique angle** to catch surface, with a **soft diffuse cloud of condensation from a human breath** just beginning to bloom across its lower-left quadrant. The breath-cloud has a faint cool blue register (the condensation catches the window light's color temperature, reading as `#1152d4`-tinted). The glass sits propped against a pale ivory paper backdrop. Soft directional window light from camera-right creates a long raking shadow beneath the glass. **Palette:** near-white `#fcfcfd` ground (75%), near-black `#0d121b` in the glass's deepest refraction, faint primary-blue cool-cast `#1152d4` in the breath condensation (the "listen" accent, atmospheric). Shot on **Phase One XT, 80mm f/5.6**, Edvinas Bruzas *Always On* raking-light register. Kodak Portra 400. **Composition:** glass occupies centre-right, breath-cloud enters from lower-left, 50% of frame above is empty pale ground. **Negative:** no person visible, no mouth, no face, no hand holding glass, no text on glass, no fingerprint visible.

### Prompt B · Motion (Veo 3.1 Fast)

> **Static lock-off, the camera holds completely still.**
> **The breath cloud slowly expands across the glass, then slowly begins to evaporate from its outer edges.**
> **A single dust mote drifts through the window light above the glass.**
>
> *No audio. Motion strength 4/10.*

---

## SHOT 08 · The read returns

**Beat:** "and read back what it hears." — the letter is written.
**Reference anchor:** **Justin Chung** — warm archival interior.
**Model:** Ken Burns still only.
**Duration:** 1.0s

### Prompt A · Still

> A **1080×1920 portrait editorial still** of **a cream laid-paper sheet on a warm oak writing desk**, now bearing **three short lines of handwritten cursive script in cobalt-blue ink** (`#1152d4`). The handwriting is illegible — just the rhythm of lines, three short phrases stacked, slightly irregular, written slowly. Beside the paper: the glass dip pen from shot 03, now lying on its side, nib resting on a small brass pen-stand, a tiny drop of blue ink pooled at the nib. Shot from overhead **75-degree angle** matching shot 03 exactly (loop-world continuity). Warm daylight from camera-left. **Palette:** cream paper `#fcfcfd`, warm oak desk in shadow, cobalt ink script `#1152d4` as the single saturation. Shot on **Hasselblad X2D, 80mm f/5.6**, Justin Chung archival register. Kodak Portra 400. **Composition:** paper centre-right, ink bottle (now uncapped, same one from shot 03) upper-right edge of frame, 35% top negative space for copy overlay. **Negative:** no legible words, no printed type, no hand, no face, no envelope.

### Prompt B · Motion (Resolve Ken Burns)

> *No AI motion.* 4% slow push-in toward the handwritten lines, anchored on the middle line. Imperceptibly slow.

---

## SHOT 09 · Hand on chest

**Beat:** the read received by the body. The return of the letter.
**Reference anchor:** **Viviane Sassen** (body abstraction) + **Harley Weir** (tactile skin tenderness).
**Model:** Ken Burns still only.
**Duration:** 1.0s

### Prompt A · Still

> A **1080×1920 portrait intimate editorial still** of **a single hand resting flat on a bare collarbone**, warm Mediterranean-olive skin, no jewelry. The head is cropped out entirely at the chin; the body is cropped at the shoulder — only the hand, the slope of the collarbone, and a small curve of the shoulder are visible. **Fingers relaxed, not gesturing**, palm flat, thumb resting against the sternum. Shot from slightly above at a **30-degree downward angle**. Single north-facing window light from camera-left. **Palette:** warm skin-ivory neutrals, deep slate shadow `#0d121b` in the collarbone hollow, pale `#fcfcfd` off-white bedsheet fading to the right of frame (40% negative space), one **thin cobalt-blue cotton thread** visible at the fingernail's edge (primary `#1152d4` note). Shot on **Hasselblad X2D, 85mm f/2.8**. Kodak Portra 400. **Composition:** hand occupies centre-left 50%, pale bedsheet ground occupies right 50%, top third negative space. **Negative:** no face, no chin, no sensual posing, no jewelry, no tattoo, no hair across shoulder.

### Prompt B · Motion (Resolve Ken Burns)

> *No AI motion.* 3% slow push-in toward the hand's centre, anchored between the knuckles. No pan.

---

## SHOT 10 · Window at dusk (loop back)

**Beat:** time has passed. The letter is sent. The window closes the circle.
**Reference anchor:** **Hiroshi Sugimoto** — long-exposure bisected horizon + **Rinko Kawauchi** halated light.
**Model:** Ken Burns still only.
**Duration:** 1.0s
**Continuity:** **match-cut seam with shot 02.** Same composition, same framing, same window — but dusk instead of dawn. First frame of loop = last frame of 10. On loop-back, the window appears to transition dawn → dusk → dawn invisibly.

### Prompt A · Still

> A **1080×1920 portrait still** of **the same open wooden casement window from shot 02, identical framing, identical composition, identical curtain position** — but now it is **6:40 PM early spring dusk**, and **Lix has moved inside** (the windowsill is empty, clean oak, no droplet). Through the window: pale silvered-blue gradient sky fading to soft primary-blue `#1152d4` at the horizon (the "listen" accent, returned as atmosphere). The interior shadow at frame's edges is slightly deeper than shot 02, carrying the evening. The single thin sheer cotton curtain drifts through the open pane at the same lower-right corner, at the same angle. **Palette:** editorial off-white `#fcfcfd` dominant (65% — slightly less than shot 02 to signal evening), cool `#1152d4`-tinted sky at the horizon, deep slate `#0d121b` shadow in the lower corners (slightly expanded vs. shot 02). Shot on **Hasselblad X2D 100C, 50mm f/4**, Sugimoto long-exposure stillness register. Kodak Portra 400. **Composition:** identical to shot 02 EXCEPT the windowsill is empty (Lix arrived at dawn, wrote the letter through the day, has moved deeper inside by evening — she IS the correspondence, and the correspondence has been made). **Negative:** no Lix, no droplet on sill, no people, no plants, no furniture, no text, no identifiable landscape.

### Prompt B · Motion (Resolve Ken Burns)

> *No AI motion.* 3% slow pedestal-down over 1.0s (inverse of shot 02's pedestal-up — closes the vertical arc). Hold last frame for 12 frames, then match-cut back to shot 01.

---

## Loop assembly map (Resolve Fusion timeline)

```
0.0s — Shot 01 · Step                     [still, 5% push-in]
1.0s — ⤳ 12fr crossfade
1.0s — Shot 02 · Window opens             [still, 3% pedestal-up]
2.0s — ⤳ 12fr crossfade
2.0s — Shot 03 · Unwritten letter         [still, 4% push-in]
3.0s — ⤳ 12fr crossfade
3.0s — Shot 04 · Ink in water (HERO)      [Veo 3.1 Fast, 2s]
5.0s — ⤳ 12fr crossfade
5.0s — Shot 05 · The ear (HERO)           [Veo 3.1 Fast, 2s]
7.0s — ⤳ 12fr crossfade
7.0s — Shot 06 · Pulse at wrist           [still, 2% push-in]
8.0s — ⤳ 12fr crossfade
8.0s — Shot 07 · Breath on glass (HERO)   [Veo 3.1 Fast, 2s]
10.0s — ⤳ 12fr crossfade
10.0s — Shot 08 · The read returns        [still, 4% push-in]
11.0s — ⤳ 12fr crossfade
11.0s — Shot 09 · Hand on chest           [still, 3% push-in]
12.0s — ⤳ 12fr crossfade
12.0s — Shot 10 · Window at dusk          [still, 3% pedestal-down]
13.0s — match-cut to Shot 01 — loop
```

**Total:** 13.0s real, **seamless loop via match-cut from shot 10 back to shot 01** (both are flat editorial still-life with identical overhead angle and pale ivory ground — the eye reads it as one rotation of morning → listening → evening → morning).

**Runway safety option:** if the match-cut seam fails QA, cut to **12.0s** and end on shot 09 + dusk window fade — the dusk window becomes the match-cut anchor instead of shot 01's shoe.

---

## Character / location lock token (repeat in every prompt)

**Palette lock:** `editorial off-white #fcfcfd ground, near-black #0d121b subject, one note of primary blue #1152d4 per frame`

**Light lock:** `single soft directional window light, north-facing diffusion, Kodak Portra 400, Rec.709`

**Style lock:** `Kinfolk / Cereal / T Magazine editorial register, 40% top negative space for copy, no text in frame`

**Negative lock:** `no DNA / molecules / ECG / crystals / wellness-kitsch / fitness body / Duolingo-kawaii / faces above nose line / interlaced hands / emojis / text / logos`

Paste at the end of every still prompt — redundancy prevents drift.

---

*Prompts paired with production brief in `welcome-video-brief-v2.md`. Reference images downloading to `research-refs/`.*
