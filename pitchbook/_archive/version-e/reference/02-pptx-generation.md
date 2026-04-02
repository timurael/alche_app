# PowerPoint Generation from HTML — Research

Research conducted February 2026. Use case: converting a 30-page glassmorphic HTML pitch book to PPTX as a fallback to PDF.

---

## PptxGenJS (v4.0.1) — Primary Option

The dominant Node.js library for programmatic PowerPoint creation. ~551K weekly npm downloads, 4,489 GitHub stars, zero runtime dependencies, actively maintained (last release June 2025).

### Capabilities

| Feature | Support | Notes |
|---|---|---|
| Solid color backgrounds | Yes | `slide.background = { color: "F5F0E8" }` |
| Gradient backgrounds | No (native) | Open feature request since 2017. Workaround: pre-render as PNG image |
| Custom fonts | Reference only | Writes font name into PPTX XML but does NOT embed .ttf/.woff files. Recipient needs fonts installed |
| Rounded corners | Yes | `rectRadius` on `pptx.ShapeType.roundRect` |
| Borders | Yes | Via `line` property (color, width, dash type) |
| Outer shadows | Yes | `shadow: { type: "outer", color, blur, offset, angle, opacity }` |
| Inner shadows | Buggy | Known bug corrupts PPTX files (Issue #1293) |
| Precise positioning | Yes | `x`, `y`, `w`, `h` in inches or percentages |
| Image embedding | Yes | PNG, JPG, GIF (animated), SVG. URL, file path, or base64 |
| A4 slides | Yes | `pptx.defineLayout({ name: "A4", width: 8.27, height: 11.69 })` |
| Rich text (multi-font) | Yes | Pass array of `{ text, options }` to `addText()` |
| Tables | Yes | Cell-level formatting, auto-paging across slides |
| backdrop-filter/blur | No | Not possible in PPTX/OOXML format |
| Fill transparency | Yes | `fill: { color: "FFFFFF", transparency: 50 }` |

### Font Limitation for alche

PptxGenJS does NOT embed fonts. If the recipient doesn't have Cormorant Garamond, Outfit, and Space Mono installed, PowerPoint substitutes defaults. Options:
- Distribute fonts alongside the PPTX
- Use system-font substitutes (Garamond, Calibri, Courier New)
- Include font install instructions

### Code Examples

```javascript
import PptxGenJS from 'pptxgenjs';

const pptx = new PptxGenJS();
pptx.defineLayout({ name: 'A4', width: 8.27, height: 11.69 });
pptx.layout = 'A4';

const slide = pptx.addSlide();
slide.background = { color: 'F5F0E8' };

// Glass card approximation
slide.addShape(pptx.ShapeType.roundRect, {
  x: 0.87, y: 2.0, w: 6.5, h: 2.0,
  fill: { color: 'FFFCF6', transparency: 40 },
  rectRadius: 0.08,
  line: { color: 'C4956A', width: 0.5 },
  shadow: { type: 'outer', color: '2C2418', blur: 8, offset: 2, angle: 270, opacity: 0.06 }
});

// Rich text
slide.addText([
  { text: 'EUR ', options: { fontFace: 'Outfit', fontSize: 18, color: '2C2418' } },
  { text: '500K', options: { fontFace: 'Space Mono', fontSize: 28, color: '2C2418', bold: true } }
], { x: 1.0, y: 2.2, w: 4.0, h: 1.0 });

await pptx.writeFile({ fileName: 'alche-pitchbook.pptx' });
```

### Visual Fidelity Assessment for alche

| Design Element | Fidelity | Workaround |
|---|---|---|
| Cream background | 100% | Direct support |
| Radial gradient overlay | 0% native | Pre-render as PNG background image |
| Glass cards | ~70% | Semi-transparent fill + border (no blur) |
| Typography hierarchy | ~85% | All positioning works, fonts need install |
| Data tables | ~90% | Full table formatting with cell-level control |
| KPI grids | ~80% | Manual layout with positioned shapes |
| App screenshots | 100% | Full image embedding support |

**Overall: ~75-80% visual fidelity** compared to the HTML version.

### Sources
- PptxGenJS Documentation: https://gitbrent.github.io/PptxGenJS/
- PptxGenJS GitHub: https://github.com/gitbrent/PptxGenJS
- Shapes API: https://gitbrent.github.io/PptxGenJS/docs/api-shapes/
- Text API: https://gitbrent.github.io/PptxGenJS/docs/api-text.html
- Images API: https://gitbrent.github.io/PptxGenJS/docs/api-images.html
- Tables API: https://gitbrent.github.io/PptxGenJS/docs/api-tables.html
- Slide Options: https://gitbrent.github.io/PptxGenJS/docs/usage-slide-options.html
- HTML-to-PowerPoint (tables only): https://gitbrent.github.io/PptxGenJS/docs/html-to-powerpoint/
- Gradient Issue #102: https://github.com/gitbrent/PptxGenJS/issues/102
- Inner Shadow Bug #1293: https://github.com/gitbrent/PptxGenJS/issues/1293
- Rich Text Issue #369: https://github.com/gitbrent/PptxGenJS/issues/369

---

## Alternative Libraries

### officegen (v0.6.5)
- Status: Dead (~5 years stale). Do not use.
- npm: ~35K weekly downloads (legacy inertia)

### pptx-automizer
- Status: Active. Template-based approach (wraps PptxGenJS).
- Best for: Filling data into pre-designed PowerPoint templates.

### dom-to-pptx (v1.1.5)
- Status: Very new (created November 2025, 60 GitHub stars)
- Unique: Claims to preserve gradients, shadows, rounded corners from HTML DOM
- Smart font embedding
- **Browser-only** — cannot run in Node.js server-side
- Risk: Immature, limited community testing
- Source: https://github.com/atharva9167j/dom-to-pptx

### Anthropic html2pptx Skill
- Part of Anthropic's Agent Skills framework for Claude Code
- Uses PptxGenJS under the hood
- HTML slide → PPTX conversion with placeholder system for charts
- Web-safe fonts only (custom fonts may cause rendering issues)
- Backgrounds/borders/shadows only work on `<div>` elements
- Source: https://github.com/anthropics/skills/blob/main/skills/pptx/html2pptx.md

---

## Recommended Approach for PPTX (if needed)

**Screenshot-to-PPTX:** Take Playwright screenshots of each page at 3x `deviceScaleFactor`, embed as full-slide images using PptxGenJS. This preserves 100% visual fidelity (including backdrop-filter) but text becomes rasterized.

```javascript
// Screenshot at 3x for retina quality
await page.setViewportSize({ width: 794, height: 1123 });
const screenshot = await page.screenshot({
  type: 'png',
  scale: 'device',  // uses deviceScaleFactor
});

// Embed in PPTX
const slide = pptx.addSlide();
slide.addImage({
  data: `image/png;base64,${screenshot.toString('base64')}`,
  x: 0, y: 0, w: 8.27, h: 11.69,
  sizing: { type: 'cover', w: 8.27, h: 11.69 }
});
```

**PDF is the correct format for a pitch book.** PPTX should only be produced if specifically requested by an investor for an editable version.
