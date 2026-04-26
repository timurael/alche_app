# Build Brief — alche.com

*A prompt for Claude Code, written by the UX designer.*

---

## 0. How to read this document

You are a senior interactive designer-engineer. I am the UX designer who wrote this brief. This document is the spec. Do not rewrite the scope. Do not invent a different aesthetic. Do not "improve" the brand DNA. Build the site I describe, at the quality level I describe.

**Before touching a file, read these in this order:**

1. `alche/home-redesign/alche-home-redesign.html` — this is the vibe target. Typography, color, rhythm, voice. Match it.
2. `alche/home-redesign/alche-figma-tokens.css` — the design tokens. Use them. Do not invent new ones.
3. `alche/home-redesign/direction-a-mockup.html` — the smoke-gradient ritual hero. This is the visual core of the brand. Study how the gradient and italics work together.
4. `alche/app/motherdoc.md` §1–3 — brand positioning, the user (Lena), the four-layer flywheel (KNOW · DO · GET · BELONG). Know what you are selling.
5. `alche/app/design/tokens.md` and `alche/app/design/components.md` — source of truth for type scale, spacing, component behavior.

If anything in this brief conflicts with those files, **those files win** for tokens. This brief wins for site structure, copy, motion, and scope.

---

## 1. The one thing to get right

alche.com is a **scroll film**. Not a webpage with videos on it — a continuous video-led narrative you scroll through. Every major section is either a full-bleed ambient video, a scroll-scrubbed video (Apple product page style), or a video-on-hover editorial grid. Text is sparse, set in Newsreader italic, and overlays the motion.

The emotional target is the feeling you get the first time you hold a glass object — cold, considered, alive, quiet. Editorial longevity. Kinfolk meets science. Never clinical, never wellness-bro, never AI-generated-looking.

If a visitor could mistake this site for Calm, Whoop, Levels, Noom, or any other health app — we failed. It should read closer to **Aesop · Loewe Perfumes · Patagonia's longform · Apple's iPhone product pages · Maison Margiela Replica · NoWadays** than to any "wellness" competitor.

---

## 2. Brand DNA (non-negotiable)

**What Alche is:** A longevity companion. Berlin apothecary + iOS app + community. Four layers: KNOW (biomarkers, bio age), DO (daily protocols), GET (smoothies, LED, supplements), BELONG (community, events, Salons).

**Who it's for:** Lena — 36, Berlin, product designer, €72K household. Wants to age well without making it her full-time job. Tried Oura and Levels, got anxious, quit. Not a biohacker. A discerning adult.

**Voice:** Kinfolk essay, not brochure. Italic restraint. Opinion-driven. One strong verb per section. Never "optimize your wellness journey." Never "unlock your potential." Never "science-backed." Italics carry weight; if a line is in italic, it should mean something.

**Visual DNA (from tokens):**
- **Type:** `Newsreader` italic (display), `Noto Sans` (body), `Space Mono` (labels, data, overlines). No other fonts.
- **Color:** `--editorial-black #0d121b` on `--bg-light #fcfcfd`. `--editorial-muted #8d96a6` for secondary. The smoke gradient on dark. Pastels only in data visualizations, never in UI.
- **Shadow system:** hard drop, no blur — `2px 2px 0`, `4px 4px 0`, `6px 6px 0 var(--editorial-black)`. This is a signature. Use it.
- **Dividers:** hairlines, not boxes. Hairline hierarchy is the layout.
- **Radii:** sharp (2px) for UI, pills only for tags. No rounded-xl anywhere.

**Anti-patterns (instant fail):**
- Glassmorphism, neumorphism, gradient meshes, "AI aurora"
- Accent lines under headings
- Equal-weight bullet grids
- Emoji anywhere in UI copy
- Rounded card stacks with drop-shadow-lg
- Gradient text
- Motion that "feels smooth" — we want motion that feels **intentional**. Slower than your instinct. More still than you'd default to.

---

## 3. Site architecture

Single long-scroll homepage (primary), plus five secondary routes. Build the homepage to shipping quality. Stub the secondary routes with the hero section only and a "Writing in progress" placeholder in the correct type treatment.

```
/                     The scroll film. Ships complete.
/apothecary           Berlin space. Hero + one scroll-section stub.
/app                  iOS app. Hero + one scroll-section stub.
/salons               Events + community. Hero stub.
/journal              Editorial content. Hero stub + index grid stub.
/join                 Waitlist + founding member paywall. Functional form.
```

Footer appears on all routes. Navigation is a thin top bar that hides on scroll-down, shows on scroll-up.

---

## 4. The homepage — section by section

Numbered in scroll order. Each has: **purpose · video treatment · layout · copy · motion**.

### 01 — Masthead bar (fixed, auto-hide)
- **Purpose:** orient, not decorate.
- **Layout:** 64px tall. Left: `Alche` wordmark in Newsreader italic 22px. Center: 4 links (Apothecary · App · Salons · Journal) in Space Mono 10px 0.2em letterspaced. Right: a single `Join` button — `alche-button-primary` style from tokens. Hairline bottom border.
- **Motion:** translate-y out on scroll down past 200px, in on scroll up. 300ms cubic-bezier(0.4, 0, 0.2, 1). No fade — translate only.

### 02 — Opening frame · full-bleed ambient video
- **Purpose:** establish vibe before a single word lands.
- **Video:** 8–12 second loop, 4K, muted, autoplay, `playsinline`, `preload="metadata"`. **Content:** slow black smoke curling through a beam of cold light against a near-black background. Zero captions. Zero cuts. One continuous breath.
- **Overlay:** dead-center, lower third. Single line: *"A home worth waking up to."* in Newsreader italic 200 weight, `clamp(56px, 9vw, 132px)`, line-height 0.95, letter-spacing -0.03em, color `--editorial-accent` with 90% opacity.
- **Below the line:** one Space Mono overline in 10px/0.3em: `ALCHE · LONGEVITY, DAILY · EST. BERLIN 2026`.
- **Scroll cue:** a 1px vertical hairline, 40px tall, at the bottom center. Not an arrow. Not an icon. A line. On hover, extends to 60px.
- **Motion:** video autoplays on page load after 200ms pre-fade-in. Headline letters reveal on a 1200ms stagger (60ms per word). No bounce, no overshoot.

### 03 — Statement · scroll-scrubbed video
- **Purpose:** the thesis, delivered as a film.
- **Video:** 6-second clip of a **single dropper of amber liquid falling into a petri-dish slow enough to read**. This clip is **scroll-scrubbed** — as the section enters the viewport and scrolls through it, the video timeline is mapped 1:1 to scroll position. Pin the section for `100vh` of scroll. When the dropper hits the water, scroll continues normally.
- **Layout:** video pinned at 80vh centered. Text on the left rail, sticky within the pinned region, three Newsreader italic lines that **change based on video progress**:
  - 0–33%: *"Your body is not a dashboard."*
  - 34–66%: *"It is a rhythm you can learn to read."*
  - 67–100%: *"Alche is how you learn to read it."*
  - Each line fades to the next. Never two visible at once.
- **Motion:** GSAP ScrollTrigger, `scrub: 1` (not 0 — feel the lag). Pin with `anticipatePin: 1`. Release cleanly.

### 04 — The four layers · horizontal pin
- **Purpose:** introduce KNOW · DO · GET · BELONG without a 2×2 grid.
- **Layout:** pinned horizontal-scroll. Vertical scroll progress → translate-x of a 4-panel row. Each panel is full viewport, left-aligned text + right-aligned video.
  1. **KNOW** — video: a macro shot of a blood drop spreading across a lab-glass slide. Copy: *"Know what your body is doing. Not what a quiz thinks."* Label: `I · KNOW`.
  2. **DO** — video: a hand placing a single supplement capsule into a silicone weekly organizer, from above, stop-motion pacing. Copy: *"Do the one thing today, not the forty-seven things ever."* Label: `II · DO`.
  3. **GET** — video: a green-amber functional smoothie pouring into a chilled glass, slow. Copy: *"Get what you need. Nothing that sounds clever at a party."* Label: `III · GET`.
  4. **BELONG** — video: a candlelit long table in the Berlin Apothecary, hands passing a ceramic cup, no faces. Copy: *"Belong to a table. Wellness was never meant to be solitary."* Label: `IV · BELONG`.
- **Motion:** pin for 400vh. `scrub: true`. Each panel's video plays **forward on entry, reverses on exit**. Text on each panel uses a subtle mask-reveal from bottom (clip-path inset).

### 05 — Bio-age moment · numeric scrub
- **Purpose:** show, don't tell, the product's intelligence.
- **Layout:** full-bleed near-black. Center: a single italic number that **counts up and back** as you scroll — `34.2` → `31.7` → `28.9` years — labeled `YOUR BIOLOGICAL AGE · SAMPLE PROJECTION` in Space Mono above. The number uses `--alche-data-value` at 200px.
- **Below the number:** three hairline-separated rows of Space Mono:
  - `INFLAMMATION · LOW · ↓ 12% · 90 DAYS`
  - `SLEEP DEBT · MODERATE · ↑ 4% · 14 DAYS`
  - `MICRONUTRIENTS · ATTENTION · VITAMIN D · MAGNESIUM`
- **Motion:** number interpolates with scroll position using `gsap.to(obj, { value: X, scrollTrigger: {...} })` and re-renders into the DOM. Cubic easing. Feels like a scanner, not a counter.

### 06 — The apothecary · place video
- **Purpose:** make Berlin real. This is a physical space with a door and a smell.
- **Video:** 15-second autoplay loop. Fixed GoPro-slow walk from the Görlitzer-Park side door of the apothecary, through the ritual room, into the LED booth, out to the salon table. Handheld-stabilized, warm tungsten mixed with cool daylight, no people in frame (empty space, lived-in).
- **Layout:** video covers the right 60% of the viewport. Left 40% is off-white with a single paragraph of Newsreader italic copy, 22px, max-width 420px:
  > *"The app is the voice. The space is the room. In Berlin, we keep a door open most days of the week — a ritual room, an LED booth, a long table, and a kettle that is always nearly on. No appointment required to stand in the doorway."*
- **CTA:** one `alche-button-underline` below the paragraph — `VISIT · SKALITZER STR.` linking to `/apothecary`.
- **Motion:** video plays muted-loop. Paragraph reveals word-by-word with IntersectionObserver at 40% threshold. No parallax on the video — let it be still.

### 07 — Voices · editorial grid with video-on-hover
- **Purpose:** third-party credibility without using the word "testimonial".
- **Layout:** 3-column asymmetric grid. Each cell is a still portrait (16:9, desaturated) of a member with a Newsreader italic pull quote beneath. On hover, the still **cross-fades to a 3-second video loop** of the same member — a quiet gesture, not a talking head (sipping, reading, walking, adjusting a window).
- **Copy pattern per cell:**
  - Label: `MEMBER · ROLE · CITY` in Space Mono 10px
  - Quote: one italic line, max 18 words
  - Attribution: first name only, Space Mono
- **Three members (placeholder until real):**
  1. Lena · Designer · Berlin · *"It is the only app I open in the morning without bracing for a score."*
  2. Kadir · Chef · Kreuzberg · *"The Apothecary is the only place in this city that treats food as medicine without being precious about it."*
  3. Noor · Strategist · Mitte · *"I was tired of being optimized. I wanted to be cared for. This is the first thing that felt like the second."*
- **Motion:** hover cross-fade 400ms. On mobile, tap to toggle. Videos `preload="none"`, load on intent.

### 08 — Journal preview · type-first
- **Purpose:** editorial depth, a reason to come back.
- **Layout:** full-width. A hairline top + hairline bottom. Three rows, one article each. Each row: left column — Space Mono kicker (`ESSAY · 12 MIN · 2026-03`). Center column — Newsreader italic headline in 42px. Right column — a muted "Read →" link. Rows have generous padding (48px top/bottom). Hovering a row **tints the row background to `--bg-warm`** and reveals a thin 16:9 thumbnail on the right side that wasn't there before.
- **Three article placeholders:**
  1. *"What Ayurveda got right about circadian time, and what blood tests finally caught up to."*
  2. *"A letter against the biological age obsession, from the team that built a biological age tool."*
  3. *"What happens at the long table: the Alche Salon, transcribed."*
- **Motion:** hover tint 200ms ease. Thumbnail slides in from 8px offset, 250ms.

### 09 — Join · paywall moment as editorial
- **Purpose:** convert without looking like a paywall.
- **Layout:** full-bleed section, background `var(--editorial-black)`, color `var(--bg-white)`. Left: a full-height narrow ambient video strip (240px wide) of a candle flame flickering in a cool room, 12-second loop. Right: the offer, set like the closing of an essay.
  - Overline: `VI · JOIN`
  - Headline: *"The founding one thousand."* — Newsreader italic 300, `clamp(48px, 6vw, 92px)`
  - Paragraph: *"The first thousand members keep €19/month for life. They shape the app, the apothecary hours, the smoothie menu, and what we do with the long table on Tuesday nights. This is the deal: early access, permanent price, a real seat at a real table."*
  - Three-line stack: `FOUNDING RATE · €19 / MONTH · LOCKED FOR LIFE`
  - CTA: `alche-button-primary` — `RESERVE A SEAT` → `/join`
  - Below: `847 / 1000 RESERVED · UPDATED WEEKLY` in Space Mono at 50% opacity.
- **Motion:** number ticks up by one with a 1200ms fade on page load. No fake urgency timers. No pop-up. No exit intent.

### 10 — Footer
- **Layout:** three columns on desktop, stacked on mobile.
  - Left: Alche wordmark + a one-sentence address (Skalitzer Str., 10999 Berlin).
  - Center: sitemap links in Space Mono 10px, stacked.
  - Right: email capture — single input, Space Mono label `WRITTEN TO IRREGULARLY · NO MARKETING`, submit is an arrow.
- **Bottom bar:** copyright line, `EDITORIAL LONGEVITY · MADE IN BERLIN`, privacy + terms links.
- **Motion:** none. Footers should not perform.

---

## 5. Motion system (the rules, not the tricks)

Motion must **feel slower than you instinctively want**. When in doubt, add 100ms.

| Use | Duration | Easing |
|-----|----------|--------|
| UI state change (hover tint, link underline) | 180–220ms | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Reveal (mask, fade-in-up) | 600–900ms | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Large translate / pin exit | 900–1200ms | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Scroll-scrub sections | `scrub: 1` (GSAP) | N/A — driven by scroll |
| Number interpolation | scrubbed or 1200ms linear | linear for scanners, ease for counts |

**Forbidden:** bounce, overshoot, spring-with-wobble, parallax that jitters on safari, scrolljacking that fights the user, any motion that triggers below 30% visibility.

**Honor `prefers-reduced-motion`.** Every scroll-scrubbed section collapses to a static poster frame. Every autoplay video pauses and shows its poster. No exceptions.

---

## 6. Video · the hard part

Videos are the product surface. Handle them like assets, not decorations.

**Technical spec (all videos):**
- Encode two sources per asset: `.webm` (AV1 or VP9) + `.mp4` (H.264 baseline, High@L4). Browser picks via `<source>` order.
- Max bitrate per above-the-fold video: 4 Mbps. Max for scroll-scrub: 6 Mbps (needs frame-accuracy).
- Resolution: 1920×1080 desktop, 1280×720 mobile, auto-swap via `<source media="(max-width: 768px)">`.
- All autoplay videos: `muted playsinline autoplay loop preload="metadata"`. Poster frame mandatory — **a high-quality JPEG of the first frame**, never a solid color.
- Scroll-scrub videos: use **a frame-sequence fallback** (WebP sequence of ~120 frames) if HTMLVideoElement scrubbing stutters — Safari especially. Decide at build time; test on real device.
- Lazy-load below-the-fold videos with IntersectionObserver at `rootMargin: "400px"`. Start `preload="metadata"` only when within 400px of viewport.

**Accessibility:**
- Every decorative video has an empty `alt=""` (it's decorative), but the section must carry the meaning in text.
- Every video has a `<track kind="descriptions">` if it communicates narrative (sections 03, 04).
- Full-page `prefers-reduced-motion: reduce` → all autoplay is disabled, posters remain.

**Asset list (10 hero videos + 3 member loops + 1 candle):**
I will generate these separately. Do not block on them. Use placeholder posters and a 1-second loop of the poster until real assets arrive. Name them:
```
/website/assets/video/
  01-smoke-hero.{mp4,webm,poster.jpg}
  03-dropper-scrub.{mp4,webm,poster.jpg}
  04a-blood-slide.{mp4,webm,poster.jpg}
  04b-capsule-stop.{mp4,webm,poster.jpg}
  04c-smoothie-pour.{mp4,webm,poster.jpg}
  04d-long-table.{mp4,webm,poster.jpg}
  06-apothecary-walk.{mp4,webm,poster.jpg}
  07-member-1.{mp4,webm,poster.jpg}
  07-member-2.{mp4,webm,poster.jpg}
  07-member-3.{mp4,webm,poster.jpg}
  09-candle.{mp4,webm,poster.jpg}
```

Each poster at `/website/assets/video/posters/` in 1920×1080 JPEG quality 82 and 1280×720 mobile.

---

## 7. Tech stack (pick exactly this)

- **Framework:** Astro 5.x. Zero-JS by default, islands where we need them. SSG output. Static deploy to Netlify or Vercel.
- **Styling:** Plain CSS with `alche-figma-tokens.css` imported as the single source of tokens. No Tailwind. No CSS-in-JS. One `global.css` for resets + tokens, per-component CSS for everything else.
- **Motion:** GSAP 3 + ScrollTrigger. Loaded only on routes that use it (homepage). Lenis for smooth scroll — **do not set an aggressive duration**, 1.2s with `easeOutExpo` max. Lenis respects reduced-motion natively; verify.
- **Video:** native `<video>`. No hls.js unless a specific section demands streaming. Use `media-chrome` web components only if a section needs controls (none do in v1).
- **Type:** Fontsource-loaded Newsreader, Noto Sans, Space Mono — self-host the subsets we use. Do not ship Google Fonts CDN calls.
- **Analytics:** Plausible embed, one `<script>` in base layout. No Google Analytics, no Meta pixel.
- **Email capture:** POSTs to a Supabase Edge Function at `/api/subscribe`. Stub for now — write the function signature and a 200-OK mock handler.

**Directory structure:**
```
alche/website/
  src/
    pages/
      index.astro             the scroll film
      apothecary.astro        stub
      app.astro               stub
      salons.astro            stub
      journal.astro           stub
      join.astro              functional form
    components/
      Masthead.astro
      Footer.astro
      ScrollFilm/
        01-OpeningFrame.astro
        02-Statement.astro       (has client:load for GSAP)
        03-FourLayers.astro      (client:visible)
        04-BioAge.astro          (client:visible)
        05-Apothecary.astro
        06-Voices.astro          (client:idle)
        07-Journal.astro
        08-Join.astro
    styles/
      global.css
      tokens.css                 symlink or copy of alche-figma-tokens.css
    scripts/
      scroll.ts                  GSAP + Lenis setup, reduced-motion gate
      scrub.ts                   scroll-scrub helpers
  public/
    assets/video/
    assets/img/
  astro.config.mjs
  package.json
```

---

## 8. Performance budget

Enforce. Fail the build if exceeded.

| Metric | Budget |
|--------|--------|
| LCP (mobile 4G, Moto G Power) | ≤ 2.5s |
| CLS | < 0.05 |
| INP | < 200ms |
| JS transferred (homepage) | ≤ 120 KB gzipped |
| CSS transferred (homepage) | ≤ 40 KB gzipped |
| Hero video first-frame visible | ≤ 1.2s (via poster) |
| Total page weight (excluding lazy videos) | ≤ 1.8 MB |

**Tactics:** videos below-the-fold are lazy. Only the hero video and the hero poster are in the initial bundle. Fonts are preloaded for woff2 subsets. No `@import` chains. No unused CSS — ship what's referenced.

---

## 9. Accessibility

Non-negotiable minimums:
- WCAG 2.2 AA on every text/background pair. Run axe on every route before shipping.
- Keyboard traversal works through every interactive element, in reading order. Focus ring visible — custom, not the browser default. A 2px `--editorial-black` outline, 2px offset.
- All videos have text that carries the same meaning. Decorative videos have `aria-hidden="true"`.
- Horizontal-pinned section (04) has a keyboard escape: `Escape` or `Tab` past the pinned region skips to the next vertical section. Must work.
- `prefers-reduced-motion` tested. Reduced-motion visitors must see every message; nothing is gated behind animation.
- `prefers-color-scheme: dark` — **do not build a dark mode in v1**. The site already lives in dark moments. Leave it alone.

---

## 10. Copy principles

The receiving designer writes no copy. All copy is in this brief. If a section lands without copy in the spec, use a `<!-- TK: copy pending -->` comment and ship a visible placeholder in the right type treatment.

**Voice rules:**
- Italics are for emphasis, quotes, and the brand's own voice. Not decoration.
- No exclamation marks. Anywhere.
- No trailing CTAs like "Learn more →". Use a verb-led action: `READ ·`, `VISIT ·`, `RESERVE ·`, `OPEN ·`.
- Numbers are numerals (`1000`, not "one thousand") except when the number is part of the voice (section 09 headline).
- Do not capitalize every word in UI labels. Space Mono labels are `UPPERCASE LETTERSPACED`, but sentences are sentence case.

**Banned phrases (instant rewrite):**
*optimize · unlock · journey · wellness · science-backed · game-changer · redefine · revolutionize · supercharge · biohack · longevity journey · daily ritual of self-care · your best self*

---

## 11. Build order

Not optional. Build in this order. Ship each as it finishes.

1. **Scaffold.** Astro init, tokens imported, fonts self-hosted, Masthead + Footer, typography renders correctly on `/`.
2. **Static homepage.** All 10 sections laid out with **posters only, no video**. Type, color, rhythm, dividers. It should already be beautiful.
3. **Masthead scroll behavior.** Hide/show on scroll.
4. **Video layer — autoplay loops only.** Sections 02, 04, 06, 07, 09. Lazy-load correctly. Prefers-reduced-motion respected.
5. **Scroll-scrub — section 03.** Dropper clip. Test on Chrome, Safari, Firefox desktop and mobile.
6. **Horizontal pin — section 04.** KNOW · DO · GET · BELONG. Test keyboard escape.
7. **Bio-age numeric scrub — section 05.**
8. **Hover video cells — section 07.**
9. **Stub routes.** `/apothecary`, `/app`, `/salons`, `/journal` — hero + placeholder.
10. **Functional `/join`.** Form, Supabase stub, success state.
11. **Gate pass.** Visual QA at 375, 768, 1280, 1920. Keyboard pass. Axe pass. Lighthouse run on mobile 4G throttle.

After each step, screenshot the work at 1440×900 and 375×812 and attach to your update message. Do not skip this.

---

## 12. Out of scope (do not touch)

- CMS integration. Copy lives in `.astro` files for v1.
- Internationalization. English only. `/de` comes in v2.
- Commerce. No checkout, no shop on the website. That lives in the app.
- Login, account, dashboard. Not on the marketing site.
- The Journal article pages themselves. The grid previews them; the articles come later.
- Any content on `/apothecary`, `/app`, `/salons`, `/journal` beyond the hero stub. Those are future work.
- A/B testing, consent banners beyond a minimal GDPR line in the footer (`By using this site you accept the cookies we don't set.` — we are not setting analytics cookies).

---

## 13. Definition of done

Ship only when all of the following are true:

- [ ] All 10 homepage sections render correctly at 375, 768, 1280, 1920 widths.
- [ ] Videos autoplay on Chrome, Safari (including iOS 17+), Firefox latest. Posters show on first paint.
- [ ] Scroll-scrub and pin sections work on desktop + mobile. Keyboard escape works on section 04.
- [ ] `prefers-reduced-motion` kills every autoplay and scroll-scrub. Site remains fully readable.
- [ ] Lighthouse mobile: Performance ≥ 85, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- [ ] Axe: 0 serious, 0 critical issues on `/`.
- [ ] No console errors on any route.
- [ ] All five stub routes exist and render.
- [ ] `/join` posts to the Supabase stub and returns a success state in < 1s.
- [ ] Total initial transfer ≤ budget in §8.
- [ ] Git history is clean — one commit per build-order step, commit messages in the house style (`feat(section-03): scroll-scrubbed dropper clip`).

---

## 14. What to ask me before you start

Nothing. This brief is complete. If a genuine ambiguity appears mid-build, make the call in the direction of **less motion, less copy, more restraint**. I will correct if I disagree.

The only exception: if a video asset does not exist in `public/assets/video/`, place the named poster placeholder and move on. Flag missing assets in your end-of-step update. Do not invent videos.

---

*Built in the vibe of `alche-home-redesign.html`. Kinfolk meets science. Quiet, italic, cold, alive.*

*— The UX designer*
