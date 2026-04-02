# Glassmorphism & Apple Liquid Glass — 2026 State of the Art

## Core Properties (4 required)

Professional glassmorphism requires four properties working together:
1. Semi-transparent background (`rgba(255, 252, 246, 0.55)`)
2. Backdrop blur (`backdrop-filter: blur(16px)` + `-webkit-` prefix)
3. Subtle border (low-opacity accent color, catches "light")
4. Depth shadow (grounds card in space)

## Glass Variant System

- **Glass-subtle** (blur 8px) — secondary containers, sidebars
- **Glass standard** (blur 16px) — primary content cards
- **Glass-elevated** (blur 24px) — hero elements, KPI cards
- **Glass-accent** — narrative sidebars with colored left border

## Inner Glow & Refraction (Premium feel)

Add `inset box-shadow` for light catching:
```css
box-shadow:
  0 8px 32px rgba(44, 36, 24, 0.06),       /* outer shadow */
  inset 0 1px 0 rgba(255, 255, 255, 0.3),   /* top inner glow */
  inset 0 -1px 0 rgba(44, 36, 24, 0.05);    /* bottom inner shadow */
```

Adding `saturate(1.2)` alongside blur boosts color bleeding through glass — creates more "alive" frosted effect.

## Apple Liquid Glass (iOS 26 / macOS Tahoe)

Apple's Liquid Glass is THE defining design language of 2026. Key principles:

- **Content refracts through glass** — background visible but softened, not hidden
- **Dynamic depth** — glass responds to context (heavier blur over busy backgrounds)
- **Unified translucency** — all UI surfaces share same material language
- **Tint adaptation** — glass picks up color from surrounding content via backdrop-filter
- **Restraint** — glass on tabs, nav, toolbars, cards — NOT on everything

**Note:** True Liquid Glass lensing/refraction requires JS or WebGL. For print/PDF, CSS-only frosted glass. The key takeaway is the *philosophy*: glass as responsive material that adapts to context.

## Noise / Grain Texture Overlay

Crucial detail separating premium glassmorphism from basic. Makes glass feel like physical material.

**SVG feTurbulence inline technique:**
```css
.glass::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: 0.03;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}
```

**Tuning parameters:**
- `baseFrequency`: 0.6-0.9 fine grain, 0.3-0.5 coarse grain
- `numOctaves`: 3-4 (above 4: diminishing returns, performance cost)
- `opacity`: 0.02-0.05 subtle, 0.05-0.10 visible
- `mix-blend-mode`: `overlay` for warm, `soft-light` for cool palettes

**Performance:** feTurbulence is CPU-rendered. For many glass elements per page, pre-render as 128x128 tiling PNG. Especially important for PDF rendering.

## Performance Rules

- Blur: 8-16px standard, 24px elevated max, 32px absolute max (hero only)
- Limit glass elements to 5-8 per viewport
- Add `will-change: transform` for Chromium PDF stability
- NEVER animate `backdrop-filter` — animate `opacity` or `transform` instead
- `-webkit-backdrop-filter` prefix is REQUIRED for Chromium/Safari

## Dark Mode

- Darker rgba: `rgba(17, 25, 40, 0.75)`
- Increase blur slightly (18-20px)
- Add `saturate(1.3-1.5)` to maintain vibrancy
- Ambient gradient orbs needed as backdrop (pure black makes glass invisible)
- Borders shift to `rgba(255, 255, 255, 0.1-0.15)`

## Fallback Strategy

```css
.glass { background: rgba(245, 240, 232, 0.92); }

@supports (backdrop-filter: blur(1px)) {
  .glass {
    background: rgba(255, 252, 246, 0.55);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }
}
```

## Online Tools

- [CSS Glass Generator](https://css.glass/) — visual CSS glass builder
- [UI Glass Generator](https://ui.glass/generator/) — another visual builder
- [fffuel nnnoise](https://www.fffuel.co/nnnoise/) — SVG noise texture generator
- [fffuel gggrain](https://www.fffuel.co/gggrain/) — grainy gradient generator

## Sources

- [Glassmorphism: What It Is and How to Use It in 2026](https://invernessdesignstudio.com/glassmorphism-what-it-is-and-how-to-use-it-in-2026)
- [Dark Glassmorphism: The Aesthetic That Will Define UI in 2026](https://medium.com/@developer_89726/dark-glassmorphism-the-aesthetic-that-will-define-ui-in-2026-93aa4153088f)
- [12 Glassmorphism UI Features, Best Practices, and Examples](https://uxpilot.ai/blogs/glassmorphism-ui)
- [Realistic Frosted Glassmorphism in CSS With Gradient Borders](https://smarative.com/blog/realistic-frosted-glassmorphism-css-gradient-borders)
- [Apple Liquid Glass Developer Documentation](https://developer.apple.com/documentation/TechnologyOverviews/liquid-glass)
- [Adopting Apple's Liquid Glass: Best Practices — LogRocket](https://blog.logrocket.com/ux-design/adopting-liquid-glass-examples-best-practices/)
- [Liquid Glass UI (React/Next.js)](https://liquidglassui.org/)
- [CSS Liquid Glass Effects — DesignFast](https://designfast.io/liquid-glass)
- [Grainy Gradients — CSS-Tricks](https://css-tricks.com/grainy-gradients/)
- [SVG feTurbulence for Texture — Codrops](https://tympanus.net/codrops/2019/02/19/svg-filter-effects-creating-texture-with-feturbulence/)
- [Grainy CSS Backgrounds Using SVG Filters — freeCodeCamp](https://www.freecodecamp.org/news/grainy-css-backgrounds-using-svg-filters/)
- [Grainy Gradients — Frontend Masters](https://frontendmasters.com/blog/grainy-gradients/)
