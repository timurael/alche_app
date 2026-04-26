---
project: Alche · Welcome Screen Video Loop
version: v2 (research-grounded)
date: 2026-04-25
status: brief-locked / awaiting-production
supersedes: v1 (vibes-only, 2026-04-25)
---

# Welcome Video — Creative Brief v2

**The brief:** a **10–12 second silent looping video** for Alche's welcome screen, built from **10 stills animated into motion via Veo 3.1 image-to-video**, composited into one seamless loop in DaVinci Resolve. Portrait **1080×1920**, HEVC, **3–5 MB bundled**, first-frame = last-frame-minus-one match-cut seam, Reduce Motion → single hero still.

Every decision below is grounded in the five research strands (R1–R5). Confidence flagged where [GUESS].

---

## 1. What Alche actually is — non-negotiables

Pulled verbatim from `app-redesign/shared-tokens.css`, `welcome/dialog-mockup.html`, `mascot-lab/A-lix/bible.md`, `LIX-BLEND.md`.

### 1.1 Locked palette

| Role | Hex | Usage |
|------|-----|-------|
| **editorial-black** | `#0d121b` | Primary text, buttons, frames |
| **bg-light** | `#fcfcfd` | Default app background (near-white) |
| **bg-warm** | `#f6f6f8` | Alternate background, subtle warmth |
| **primary** | `#1152d4` | The ONE accent — links, the "listen" underline, emphasis |
| editorial-muted | `#8d96a6` | Secondary type |

**v1 was wrong.** I used amber / moss / teal / honey — **none of that exists in Alche's tokens**. The positioning deck's gold `#c8a44e` is a marketing-only drift, not app-authoritative.

### 1.2 Locked copy (the film reads OVER this)

> **Some apps count steps.**
> **This one will listen to your body**
> **and read back what it hears.**
>
> — Alche · Your Read

"listen" is underlined in `#1152d4` primary blue. The video plays beneath this text — so frames must preserve **40%+ negative space at the top third** for copy legibility, and **must not compete for the eye**.

### 1.3 Locked tone

> *"Quietly inviting, editorial, a whisper that promises an ongoing correspondence — never sales pitch, never motivational."* — `welcome/current-audit.md`

The brand frames itself as a **personal letter**. Welcome = the cover. The video is the texture of the paper, the grain of the light, the pause before the first line is written.

### 1.4 Locked off-brand list (verbatim quotes)

| Off-brand | Source quote |
|-----------|--------------|
| Fitness/workout imagery | *"The decorative opacity grid and the 30%-width surface panel add visual weight with zero communicative value"* — replace decoration with voice |
| Clinical / pharma | implied by brand positioning "imperfect longevity" |
| Wellness kitsch (crystals, matcha, yoga) | Lix never: *"wellness"*, *"amazing"*, *"journey"* |
| Duolingo-kawaii mascots | *"Persistent droplet in the status bar would read Duolingo, not Aesop"* |
| DNA helices / molecules / ECG lines | R2 finding — *nobody in premium tier uses biotech stock* |
| "Journey" / "optimize" / "track" / "quantify" language | Lix bible explicit |
| Warm amber-over-honey apothecary cliché | R4 finding — the crunchy-wellness trap |
| AI tells (accent lines, glass UI, equal-weight grids) | `~/.claude/OPERATING.md` |

---

## 2. The aesthetic anchor — three creative directors converge

Each CD holds one lens. Every frame must survive all three.

| CD | Lens | Reference photographer (from R3) | What they enforce |
|----|------|----------------------------------|-------------------|
| **Justin Chung register** | Warm archival interior, documentary editorial, natural window light, kraft/bone palette | **Justin Chung** — Le Labo *Making Sense Vol. 1* | Unvarnished, intimate, interior, never posed |
| **Rinko Kawauchi register** | Diffuse overexposed daylight, halated highlight, wabi-sabi macro, sacred-mundane | **Rinko Kawauchi** — *Illuminance* | Almost overexposed, quiet, breath-level observation |
| **Scheltens & Abbenes register** | Flat editorial still-life, studio daylight, tabletop, graphic clarity | **Scheltens & Abbenes** — *Fantastic Man*, *T Magazine* | Object-as-artifact, generous negative space |

**Secondary anchors** pulled in per shot: **Viviane Sassen** (body-as-sculpture, no face above nose), **Edvinas Bruzas** (Aesop *Always On* — raking architectural shadow), **Hiroshi Sugimoto** (horizon stillness).

**Brand-world reference:** **Modern Age** (Kinfolk-meets-science, closest living aesthetic cousin) and **Aesop Gloam campaign** (Commission Studio, low-key still-life). Not **De Mamiel** — her black+gold is dark-mode, Alche's welcome is light-mode per locked mockup.

---

## 3. The narrative arc — bound to the copy

The three-line read is the shape of the film:

| Copy beat | What the film shows |
|-----------|---------------------|
| **"Some apps count steps."** | Frames 01–03 — the stillness that is NOT step-counting. A shoe at rest, a window opening, a letter unwritten |
| **"This one will listen to your body"** (emphasized word: **listen**) | Frames 04–07 — the act of listening made visible. Ink blooms, ear abstracted, pulse at wrist, breath on glass |
| **"and read back what it hears."** | Frames 08–10 — the reading returned. Handwritten line, hand on chest, window at dusk |

The loop closes with frame 10's window-light composition matching frame 02's — match-cut seam, invisible loop.

---

## 4. Chassis — LOCKED LIGHT

**Decision (Timu, 2026-04-25): light.**

The film lives on **light chassis** — editorial off-white, near-black subjects, one quiet note of `#1152d4` per frame (like ink through water, a shadow, a glass reflection). Think Le Labo kraft + Modern Age poppies + Kawauchi's halated light — not Aesop Gloam's low-key moodiness. Matches the existing welcome mockup (`#fcfcfd` bg, editorial black text).

SwiftUI: `.preferredColorScheme(.light)` locked on the welcome screen.

---

## 5. Lix — LOCKED IN · shot 02 only

**Decision (Timu, 2026-04-25): Lix is in.**

**Placement:** shot 02 (Window opens) — and ONLY shot 02. She sits on the windowsill catching first light. Static, small (~120px of a 1920px frame), lower-left third. By shot 10 (the dusk-window match) she is gone — the sill is empty. Narrative: **Lix arrives at dawn, writes the letter through the day, has moved inside by evening.** She IS the correspondence; once sent, her job is done.

**Why not shots 04 or 07:**
- Shot 04 is ink-in-water. Lix's negative-prompt list includes `"no blue-water association"` — she was explicitly designed NOT to read as a stock waterdrop / Duolingo. Putting her IN water would violate her identity spec.
- Shot 07 is animated (Veo 3.1 hero) — animating a mascot across frames introduces a character-consistency risk that would eat iteration budget.

**Why shot 02 works:**
- Static frame (Ken Burns only) — no character animation needed
- Her arrival fits the film's "beginning of correspondence" beat
- The windowsill places her on dry oak, not in water — respects her negative list
- Her iridescent cream/pink/pistachio palette is the ONE permitted exception to the film's editorial monochrome rule — she predates the film, she brought her palette with her
- She disappears from shot 10, which tells the story of her transience correctly

**Render reference:** `mascot-lab/A-lix/prompt.md` — master prompt (idle state, ICS format) pasted inline into shot 02's Prompt A. Full iridescent spec + negative prompt list included.

**Match-cut note:** Shot 02 (with Lix) brackets the film's opening; shot 10 (without Lix) brackets its close. The loop seam is shot 10 → shot 01 (both flat editorial still-life on pale ivory ground), NOT shot 10 → shot 02. So Lix appearing only in shot 02 doesn't break the loop.

---

## 6. Technical spec — production-locked

Pulled from R5. All verified unless flagged.

| Parameter | Value | Source |
|-----------|-------|--------|
| **Aspect** | 1080×1920 (9:16 portrait) | iPhone welcome |
| **Frame rate** | 30 fps | R5 norm |
| **Codec** | HEVC (H.265 Main 10) | AVPlayer-native, smaller than H.264 |
| **Bitrate** | 2.0–2.5 Mbps VBR | R5 baseline for 1080p30 low-motion |
| **Loop length** | 10–12s | R5 sweet spot (8s feels short, 15s+ bloats bundle) |
| **File size target** | **3–5 MB** | bundle, not stream |
| **Color space** | Display P3 SDR (tag, master Rec.709) | R5 — HDR causes brightness whiplash in bedtime launches |
| **Audio** | None (muted) | AVPlayerLooper mutes; saves ~30% file size |
| **Seam technique** | First-frame = last-frame-minus-one match cut + 12-frame crossfade safety net | R5 gold standard for ambient |
| **Swift pattern** | `AVQueuePlayer` + `AVPlayerLooper` + `AVPlayerLayer` in `UIViewRepresentable` | R5 verified, `VideoPlayer` can't loop cleanly |
| **Reduce Motion fallback** | Single hero still (frame 05 — the ear), NOT Ken Burns | Ken Burns IS motion, fails the rule |
| **Low Power fallback** | Same still, observe `NSProcessInfoPowerStateDidChange` | Luxury polish |
| **Dark mode** | Lock welcome to `.preferredColorScheme(.light)` to match chassis | Don't ship two videos |
| **Pipeline** | Hybrid — AI motion on 3 hero stills (Veo 3.1 Fast), Ken Burns + crossfade on remaining 7 in Resolve Fusion | R5 recommendation |

---

## 7. The production pipeline — step by step

1. **Generate 10 stills** via Nano Banana Pro (see `welcome-video-prompts-v2.md` for prompt pairs). Reroll each 3–4× until clean. ~40 image gens total.
2. **QA the stills** against §1.4 off-brand list + §2 photographer references + §6 aspect/color space.
3. **Pick 3 hero stills** (frames 04, 05, 07 — the ink bloom, the ear, the breath — the motion-carriers) for AI animation.
4. **Animate the 3 hero stills via Veo 3.1 Fast** — each 4s, motion prompts in the shot brief. Budget 6–10 gens per hero. ~25 video gens.
5. **Bring remaining 7 stills into DaVinci Resolve Fusion** — 5–10% Ken Burns travel each, 12-frame crossfades between. Fusion, not Edit page (Edit page easing is broken per Blackmagic forum).
6. **Sequence in Resolve:** frame 01 → crossfade → 02 → crossfade → 03 → 04 (AI clip) → crossfade → 05 (AI clip, HERO) → crossfade → 06 → 07 (AI clip) → crossfade → 08 → 09 → 10 → match cut to 01.
7. **Color grade unification pass** — single LUT across all 10 shots (AI outputs drift).
8. **Subtle 35mm film grain** — Dehancer or FilmConvert, 4–6% strength. Hides seams, ties shots, reads Kodak Portra-ish.
9. **Export** — HEVC Main 10, VBR ~2.5 Mbps, Display P3 tagged SDR, muted, 1080×1920, 30fps, target ~4 MB.
10. **Ship to repo** at `app/Alche/Resources/welcome-loop.mp4` + poster JPEG `welcome-still.jpg` for Reduce Motion fallback.

---

## 8. Iteration budget (R5 §8)

| Asset type | Count | Rerolls per usable | Total gens |
|------------|-------|---------------------|-----------|
| Stills (Nano Banana Pro) | 10 | 3–4 | **30–40** |
| AI motion (Veo 3.1 Fast, the 3 hero shots) | 3 | 6–10 | **18–30** |
| Ken Burns + crossfade (Resolve) | 7 | 0 (deterministic) | 0 |

**Estimated cost:** Nano Banana Pro API ~$0.15/image × 40 = **$6**. Veo 3.1 Fast silent $0.10/s × 4s × 30 = **$12**. DaVinci Resolve free. **~$18 all-in for the hero asset.** Shipping.

---

## 9. Gate checklist — before I mark this done

- [ ] All 10 stills use Alche's actual palette (editorial-black / off-white / primary blue), no amber/moss/teal invention
- [ ] Every prompt cites a named reference photographer from R3
- [ ] No DNA, molecules, ECG, crystals, wellness-kitsch, fitness-body in any frame
- [ ] 40%+ negative space top third preserved for copy overlay — checked per frame
- [ ] First frame composition matches last frame composition (match-cut seam possible)
- [ ] Reference images downloaded locally to `research-refs/` (Lesson 1 — assets are local)
- [ ] File path planned for final asset (`app/Alche/Resources/welcome-loop.mp4`)
- [ ] Reduce Motion still identified (frame 05)
- [ ] Dark-mode vs light-mode decision flagged for Timu (§4)
- [ ] Lix cameo decision flagged for Timu (§5)

---

## 10. Decisions — both locked

| Decision | Status | Date |
|---|---|---|
| Chassis | **Light** | 2026-04-25 |
| Lix | **In, shot 02 only, ~120px, static, windowsill** | 2026-04-25 |

**Prompts in `welcome-video-prompts-v2.md` are updated. Shots 02 and 10 revised. Ready for Nano Banana Pro.**

---

*Brief grounded in:*
- *R1 — Alche visual DNA audit (local repo)*
- *R2 — Luxury longevity app welcome screens 2026 (Modern Age, Superpower, Oura as primary anchors)*
- *R3 — Reference photographers (Justin Chung, Rinko Kawauchi, Scheltens & Abbenes as top 3)*
- *R4 — Luxury apothecary campaign aesthetics (Susanne Kaufmann, De Mamiel, Aesop as top 3)*
- *R5 — iOS welcome video technical brief (AVPlayerLooper, HEVC, 3–5 MB, Veo 3.1 Fast pipeline)*
