# Session Summary: HTML-to-PDF Pipeline Rebuild

## What Was Done

### Problem
The existing PDF renderer (`render-pdf.mjs`) used a **screenshot-per-page approach**: it took PNG screenshots of each HTML page element and embedded them as images in a PDF using pdf-lib. This produced rasterized text that looked blurry, was not selectable, not searchable, and degraded at any zoom level. The user correctly identified the output as unacceptable quality for an investor pitch book.

### Root Cause
Screenshots render through the GPU compositor (which handles `backdrop-filter: blur()` and other visual effects) but produce bitmap images. When embedded in a PDF, all text becomes pixels instead of vector outlines. This is fundamentally the wrong approach for a text-heavy document.

### Solution: Vector PDF via Playwright `page.pdf()`

Built `render-vector.mjs` which uses Playwright's native `page.pdf()` method. This invokes Chromium's built-in print-to-PDF engine, which produces real PDF text operators — vector text that is:
- Crisp at any zoom level
- Selectable and copy-pastable
- Searchable (Cmd+F works)
- Properly embedded with font subsetting

### Key Technical Challenges Solved

1. **Page overflow (9 of 30 pages exceeded A4 height)**
   - Product page 1: 1886px (68% over A4's 1123px)
   - Business Model page 1: 1452px (29% over)
   - Ask page: 1314px (17% over)
   - Solution: CSS overrides force `height: 1123px; overflow: hidden` on all `.page`/`.cover` elements, plus a JS page-fixer that compresses spacing on overflow pages and redistributes space on underfill pages.

2. **backdrop-filter not supported in any PDF pipeline**
   - No tool (Playwright, Puppeteer, Prince XML, WeasyPrint, Vivliostyle) supports `backdrop-filter` in PDF output. This is an architectural limitation of PDF rendering (Skia document pipeline bypasses the GPU compositor).
   - Solution: Solid glass-card fallbacks with `background: rgba(245,240,232,0.6)` and subtle borders. These look professional without the blur.

3. **Missing CSS class `.kpi-grid--5`**
   - The Business Model page has a 5-column KPI grid, but the design system only defined `--2`, `--3`, `--4`. Added `grid-template-columns: repeat(5, 1fr)`.

4. **Content layout fix (closing section)**
   - Moved "What alche is not" / "What alche is" two-column block from the overflowing closing page 1 to closing page 2, where it has proper breathing room next to the pull quote and conviction close.

### Files Created/Modified

| File | Action | Purpose |
|---|---|---|
| `version-e/render-vector.mjs` | Created | New vector PDF renderer |
| `version-e/render-final.mjs` | Created (previous session) | Screenshot-based renderer (superseded) |
| `section-13-closing.html` | Modified | Moved two-col block to page 2 |
| `version-e/version-e-vector.pdf` | Generated | Final output: 30 pages, 3.7 MB, vector text |
| `version-e/reference/` | Created | This reference folder |

### Output Comparison

| Metric | Old (screenshot) | New (vector) |
|---|---|---|
| Text type | Rasterized bitmap | Vector outlines |
| Text selectable | No | Yes |
| Text searchable | No | Yes |
| Zoom quality | Degrades (blurry) | Perfect at any zoom |
| Glass blur effect | Preserved (as pixels) | Solid fallback |
| File size | 2.1 MB | 3.7 MB |
| Page count | 30 | 30 |
| Fonts | Bitmap rendering | Embedded vector (Cormorant Garamond, Outfit, Space Mono) |

### How to Regenerate

```bash
# Step 1: Rebuild combined HTML (if section files changed)
node version-e/build.mjs

# Step 2: Render vector PDF
node version-e/render-vector.mjs
```

Output: `version-e/version-e-vector.pdf`
