# Typography & Fluid Type Scale — 2026 Best Practices

## Font Selection by Aesthetic

| Aesthetic | Headline | Body | Data/Mono |
|---|---|---|---|
| Luxury / Editorial | Cormorant Garamond, Playfair Display, Crimson Pro | Outfit, DM Sans, Figtree | Space Mono, JetBrains Mono |
| Technical / Clean | IBM Plex Serif, Source Serif 4 | IBM Plex Sans, Source Sans 3 | IBM Plex Mono, Fira Code |
| Bold / Contemporary | Bricolage Grotesque, Newsreader | Instrument Sans, Geist Sans | Geist Mono, Space Grotesk |
| Warm / Humanist | Fraunces, Lora | Nunito Sans, Work Sans | Inconsolata, Courier Prime |

**Banned fonts (AI slop signals):** Inter, Roboto, Open Sans, Lato, Arial, Helvetica, system-ui defaults.

## Font Pairing Principle

High contrast = interesting. Three distinct voices:
- **Headlines:** serif/display (editorial authority)
- **Body:** geometric sans (modern clarity)
- **Data:** monospace (precision)

## Weight & Scale Rules

- Use weight extremes: 300 vs. 600/700, not 400 vs. 500
- Size jumps should be 2-3x, not 1.5x
- Use `font-variant-numeric: tabular-nums` for all data

## Fluid Type Scale (CSS clamp)

For screen-responsive typography without media queries:

```css
:root {
  /* Perfect Fourth scale (1.333) */
  --text-xs:   clamp(0.70rem, 0.66rem + 0.20vw, 0.80rem);   /* 11-13px */
  --text-sm:   clamp(0.85rem, 0.80rem + 0.25vw, 0.95rem);   /* 14-15px */
  --text-base: clamp(1.00rem, 0.93rem + 0.33vw, 1.13rem);   /* 16-18px */
  --text-lg:   clamp(1.33rem, 1.20rem + 0.65vw, 1.50rem);   /* 21-24px */
  --text-xl:   clamp(1.78rem, 1.56rem + 1.07vw, 2.00rem);   /* 28-32px */
  --text-2xl:  clamp(2.37rem, 2.03rem + 1.70vw, 2.67rem);   /* 38-43px */
  --text-3xl:  clamp(3.16rem, 2.64rem + 2.58vw, 3.55rem);   /* 51-57px */
  --text-4xl:  clamp(4.21rem, 3.43rem + 3.93vw, 4.74rem);   /* 67-76px */
}
```

**For print (A4):** Use fixed `rem` or `pt` values. Viewport is constant, so `clamp()` is unnecessary.

## Hierarchy Roles

| Role | Font | Weight | Size | Color |
|---|---|---|---|---|
| Main headline | Serif/display | 300 | 51-76px | Primary text |
| Section heading | Serif/display | 400 | 38-43px | Primary text |
| Subheading | Sans-serif | 500-600 | 21-24px | Primary 90% |
| Body | Sans-serif | 300-400 | 16-18px | Primary 70-90% |
| Pull quote | Serif italic | 300 | 28-32px | Primary 70% |
| Data/KPI | Monospace | 400-700 | 38-76px | Primary |
| Section label | Sans-serif | 500 | 10-11px | Accent color |
| Source citation | Sans-serif | 300 | 9px | Primary 40-50% |

## 2026 Typography Trends

- **High-contrast serifs are back** — elegant serifs with personality dominate after a decade of sans-serifs
- **Monospaced stepping out of code** — used for branding, editorial, UI. Precise spacing adds utilitarian charm
- **Ink traps as style** — originally a print solution, exaggerated ink traps add rhythm and disruption
- **"Mutant Heritage"** — classic letterforms reengineered with slightly off-kilter feel
- **Weight extremes** — ultra-light (100-200) paired with ultra-bold (800-900)

## Accessibility Note

When using `clamp()` with viewport units (`vw`), browser zoom (Cmd/Ctrl +) may not scale text properly because `vw` is locked to viewport dimensions. Always include a `rem` component in the clamp formula to ensure zoom works.

## Tools

- [Utopia.fyi](https://utopia.fyi/) — fluid type scales with spacing
- [Fluid Type Scale Calculator](https://www.fluid-type-scale.com/) — quick one-offs
- [ClampGenerator.com](https://clampgenerator.com/) — full control over fluid typography

## Sources

- [Modern Fluid Typography Using CSS Clamp — Smashing Magazine](https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/)
- [CSS-only Fluid Modular Type Scales — Utopia](https://utopia.fyi/blog/css-modular-scales/)
- [Fluid Type Scale Calculator](https://www.fluid-type-scale.com/)
- [Generating font-size CSS Rules — Modern CSS Solutions](https://moderncss.dev/generating-font-size-css-rules-and-creating-a-fluid-type-scale/)
- [Responsive Typography Beyond clamp() — Medium](https://robertcelt95.medium.com/responsive-typography-that-actually-works-beyond-font-size-clamp-acf592b79774)
- [Breaking Rules: Typography Trends 2026 — Creative Bloq](https://www.creativebloq.com/design/fonts-typography/breaking-rules-and-bringing-joy-top-typography-trends-for-2026)
