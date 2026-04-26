# Why backdrop-filter Does Not Work in PDF

This is the single most important technical insight from this project. It affects every HTML-to-PDF tool on the market.

---

## The Limitation

`backdrop-filter: blur()` — the CSS property that creates frosted-glass effects — **does not render in any PDF output**. It is silently dropped.

This is true for:
- Playwright `page.pdf()`
- Puppeteer `page.pdf()`
- Prince XML
- WeasyPrint
- Vivliostyle
- wkhtmltopdf
- Chrome "Print > Save as PDF"
- Any Chromium-based print-to-PDF tool

## Why

PDF rendering and screen rendering use fundamentally different pipelines:

**Screen rendering:** HTML → DOM → Layout → Paint → **GPU Compositor** → Screen
- The GPU compositor handles `backdrop-filter` by sampling pixels behind the element and applying a blur shader in real-time

**PDF rendering:** HTML → DOM → Layout → **Skia Document Backend** → PDF
- The Skia document backend writes PDF drawing operations directly
- It bypasses the GPU compositor entirely
- There is no pixel sampling, no blur shader, no compositing

`backdrop-filter` requires reading the pixels behind an element, which is a screen-time operation. PDF is a declarative format — it describes shapes, text, and images — it does not "render" in the same way a screen does.

## The Workaround

### For PDF (vector text, no blur):
Replace `backdrop-filter: blur()` with solid semi-transparent backgrounds:

```css
/* Screen: true glassmorphic */
.glass {
  background: rgba(255, 252, 246, 0.55);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(196, 149, 106, 0.18);
}

/* PDF fallback: more opaque to compensate for no blur */
.glass-pdf-fallback {
  background: rgba(245, 240, 232, 0.6);
  backdrop-filter: none;
  border: 1px solid rgba(44, 36, 24, 0.08);
}
```

The key: increase opacity to compensate for the missing blur. Without blur, a 55% opacity background shows too much of what's behind it, looking messy. At 60-85% opacity, the cards appear clean and solid.

### For Screenshot-based PDF (blur preserved, text rasterized):
Screenshots go through the GPU compositor, so `backdrop-filter` IS rendered. But all text becomes bitmap images — blurry at zoom, not selectable, not searchable.

### Trade-off Decision

| Approach | Text Quality | Glass Blur | File Size | Searchable |
|---|---|---|---|---|
| `page.pdf()` (vector) | Crisp at any zoom | No (solid fallback) | Smaller | Yes |
| Screenshot-to-PDF | Blurry at zoom | Yes (preserved) | Larger | No |

**For a pitch book: vector text wins.** Investors zoom in, search for terms, copy numbers. Solid glass cards look professional enough.

## Sources
- Chromium Skia PDF backend: https://skia.org/docs/user/api/skpdf/
- Playwright Issue on backdrop-filter: https://github.com/microsoft/playwright/issues/27235
- Chrome Print-to-PDF architecture: https://andre.arko.net/2025/05/25/chrome-headless-print-to-pdf/
- Vivliostyle CSS support (Filter Effects Level 1 only, not Level 2): https://docs.vivliostyle.org/supported-css-features.html
- WeasyPrint filter issue: https://github.com/Kozea/WeasyPrint/issues/1972
- Prince XML supported CSS (no backdrop-filter listed): https://www.princexml.com/doc/css-props/
