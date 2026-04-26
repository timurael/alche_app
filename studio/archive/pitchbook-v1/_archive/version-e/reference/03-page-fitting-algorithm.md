# Page Fitting Algorithm — Technical Reference

How the `render-vector.mjs` renderer ensures all 30 HTML pages fit exactly within A4 dimensions without blank spaces or content overflow.

---

## The Problem

The combined `version-e.html` has 30 page elements (`.page` and `.cover` divs). In the browser, these use `min-height: var(--page-height)` which means:
- **Overflow pages** grow taller than A4, causing extra PDF pages when printed
- **Underfill pages** have blank space at the bottom

### Measured Page Heights (before fixing)

| Page | Content | Height (px) | A4 (1123px) | Issue |
|---|---|---|---|---|
| 0 | Cover | 1123 | OK | - |
| 4 | Insight p3 | 1124 | +1px | Trivial |
| 5 | Insight p4 | 1214 | +91px | Overflow |
| 10 | Competitive p1 | 1135 | +12px | Overflow |
| 14 | Solution p3 | 1169 | +46px | Overflow |
| 16 | Product p1 | 1886 | +763px | Major overflow |
| 17 | Product p2 | 1401 | +278px | Overflow |
| 18 | Business Model p1 | 1452 | +329px | Overflow |
| 27 | Ask | 1314 | +191px | Overflow |
| 29 | Closing p2 | 1296 | +173px | Overflow |

9 overflow pages, 20+ underfill pages, only 3 "just right."

---

## The Solution: CSS + JS Two-Pass System

### Pass 1: CSS Overrides (injected at render time)

Force exact A4 dimensions and flex layout:

```css
.page {
  height: 1123px !important;
  min-height: 1123px !important;
  max-height: 1123px !important;
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
}

.page .page-footer {
  margin-top: auto !important;  /* Pins footer to bottom */
  flex-shrink: 0 !important;
  position: relative !important;
}
```

Plus targeted size reductions for known overflow sources:
- App screenshots: `max-width: 120px; max-height: 200px`
- Module list items: `padding: 2px 0`
- Tier cards: compact padding
- KPI grid values: `font-size: 22px` (from default larger size)
- Missing `.kpi-grid--5`: `grid-template-columns: repeat(5, 1fr)`

### Pass 2: JavaScript Page Fixer (injected at render time)

For each `.page` element:

1. **Wrap content** between header and footer in a flex container
2. **Measure true content height** vs available space
3. **Classify**: overflow (>102% fill), underfill (<88% fill), or OK

#### Overflow Handler (fillRatio > 1.02)

Progressive compression, never degrades below 82% scale:

1. Calculate `compressionFactor = max(0.25, availableH / contentH)`
2. Reduce all `marginTop`/`marginBottom` > 3px by compressionFactor
3. Reduce all `paddingTop`/`paddingBottom` > 6px by compressionFactor * 1.1 (less aggressive)
4. Reduce all `gap`/`rowGap` > 3px by compressionFactor
5. Re-measure. If still overflowing: `scaleY(max(0.82, availableH / newH))`
6. If over-compressed (< 88% fill after compression): redistribute

#### Underfill Handler (fillRatio < 0.88)

Weighted space distribution following visual hierarchy:

| Element Type | Weight | Examples |
|---|---|---|
| Section headers, separators | 3x | `.section-header`, `.sep`, `h1`, `h2` |
| Glass cards, major components | 2x | `.glass`, `.glass-elevated`, `.kpi-grid`, `.data-table` |
| Section labels | 1.5x | `.section-label` |
| Everything else | 1x | - |

Distribution formula:
- Reserve 15% of extra space as top padding
- Reserve 10% as bottom padding
- Distribute remaining 75% proportionally by weight among spacer elements

This makes the spacing look intentional (editorial) rather than algorithmic.

---

## A4 Constants

```
A4 at 96dpi:   794px × 1123px
A4 in mm:      210mm × 297mm
A4 in points:  595.28pt × 841.89pt
```

---

## 8 Positioning Rules

1. **EXACT A4**: Every page is exactly 210mm x 297mm. No min-height — clamped.
2. **NO BLANK ZONES**: If content < 85% fill, redistribute space proportionally.
3. **NO SQUISH**: Compress spacing first; scale only as last resort, never below 82%.
4. **FOOTER ANCHORED**: Footer always at page bottom via `margin-top: auto` in flex.
5. **VISUAL HIERARCHY**: Extra space goes to largest gaps first (section breaks > component gaps > padding).
6. **COVER & CLOSING**: Use centered layouts, not space distribution.
7. **IMAGES RESPECT BOUNDS**: Screenshots constrained so no single element causes overflow.
8. **PRINT FIDELITY**: Glass effects use solid fallbacks. All colors use exact-print-adjust.
