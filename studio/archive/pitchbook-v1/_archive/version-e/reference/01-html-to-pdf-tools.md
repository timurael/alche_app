# HTML-to-PDF Tool Comparison

Research conducted February 2026. Focus: converting a glassmorphic HTML design (backdrop-filter, radial gradients, Google Fonts) into a high-quality PDF.

## Critical Finding

**No tool supports `backdrop-filter` in PDF output.** This is an architectural limitation — PDF rendering pipelines use Skia document rendering, not the GPU compositor. The blur effect is silently dropped by every tool. The only way to preserve it is screenshots (which rasterizes text).

---

## 1. Playwright `page.pdf()` — RECOMMENDED

**Engine:** Chromium's built-in print-to-PDF via Chrome DevTools Protocol (`Page.printToPDF`)

| Feature | Support |
|---|---|
| Vector text | Yes |
| Font embedding | Yes (automatic, with subsetting) |
| `radial-gradient` | Yes (with `printBackground: true`) |
| `backdrop-filter` | No (silently dropped) |
| `box-shadow` | Mostly works |
| JavaScript execution | Yes (full) |
| Free/open-source | Yes (Apache 2.0) |
| Node.js integration | Excellent (first-class API) |

**Key settings:**
```javascript
await page.pdf({
  path: 'output.pdf',
  format: 'A4',           // or width: '210mm', height: '297mm'
  printBackground: true,   // required for backgrounds/gradients
  preferCSSPageSize: true,  // respect @page CSS
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});
```

**Font loading pattern:**
```javascript
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(2000); // safety margin for complex fonts
```

**Known issues:**
- Headless Chrome and graphical Chrome "Save as PDF" produce different results (margins, resource fetching)
- Headless Chrome silently refuses to fetch external resources in `@page` CSS rules — use base64 data URIs as workaround
- PDF output can change across Chromium versions — pin browser versions for reproducibility
- A regression in Playwright v1.28.0 cut off content on pages exceeding ~3 PDF pages

**Sources:**
- Checkly Playwright PDF Guide: https://www.checklyhq.com/docs/learn/playwright/generating-pdfs/
- BrowserStack Playwright PDF: https://www.browserstack.com/guide/playwright-pdf-html-generation
- Chrome Print-to-PDF Differences: https://andre.arko.net/2025/05/25/chrome-headless-print-to-pdf/
- Playwright Issue #27235 (backdrop-filter): https://github.com/microsoft/playwright/issues/27235
- Font Loading in Playwright: https://testautomationmastery.com/how-to-wait-for-font-loading-to-ensure-complete-page-load-in-playwright-tests/

---

## 2. Puppeteer `page.pdf()`

**Engine:** Same as Playwright — both use Chromium's `Page.printToPDF` DevTools Protocol method.

Functionally identical to Playwright for PDF generation. Choose based on existing tooling preference. Puppeteer is Chrome/Chromium-only.

**Differences from Playwright:**
- `page.emulateMediaType('screen')` available to avoid print-media color adjustments
- Colors can render differently (too bright/dark) in PDF vs screen
- Higher `deviceScaleFactor` improves image clarity

**Sources:**
- Puppeteer PDFOptions: https://pptr.dev/api/puppeteer.pdfoptions
- Puppeteer Colors Issue: https://github.com/puppeteer/puppeteer/issues/2685
- RisingStack Puppeteer PDF Guide: https://blog.risingstack.com/pdf-from-html-node-js-puppeteer/

---

## 3. Prince XML

**Engine:** Dedicated commercial HTML/CSS-to-PDF engine with its own renderer (not browser-based). Considered the "gold standard."

| Feature | Support |
|---|---|
| Vector text | Yes (excellent typography — kerning, ligatures, OpenType) |
| Font embedding | Yes (auto-embeds/subsets, TrueType, OpenType, WOFF/WOFF2, variable fonts) |
| `radial-gradient` | Yes |
| `backdrop-filter` | No (not listed in supported CSS properties) |
| CSS Paged Media | Best-in-class (@page, margin boxes, page floats, running headers) |
| PDF profiles | PDF/A, PDF/X, PDF/UA |
| JavaScript | No |
| Cost | ~$2,000/yr startup, ~$3,800+ perpetual |

**Sources:**
- Prince CSS Properties: https://www.princexml.com/doc/css-props/
- Prince Output Documentation: https://www.princexml.com/doc/prince-output/
- Prince Licensing: https://www.princexml.com/purchase/
- Prince Font Documentation: https://www.princexml.com/doc/11/fonts/
- Prince Graphics: https://www.princexml.com/doc/graphics/

---

## 4. WeasyPrint

**Engine:** Python-based, uses Cairo (graphics) and Pango (text layout). Not browser-based.

| Feature | Support |
|---|---|
| Vector text | Yes (Cairo/Pango renders true vector outlines) |
| Font embedding | Yes (auto-embeds/subsets via Pango/Fontconfig, @font-face with Pango >= 1.38) |
| `radial-gradient` | Yes |
| `backdrop-filter` | No |
| `filter` | No (feature request open, not implemented) |
| Flexbox/Grid | Limited (Grid rows recently improved, overall lags behind browsers) |
| JavaScript | No (zero JS support) |
| Cost | Free (BSD license) |
| Node.js | Python-only (call via subprocess) |

**Recent additions (v68, Dec 2025):** CMYK colors, PDF/X profiles, CSS layers, page breaks in grid rows.

**Sources:**
- WeasyPrint Features: https://doc.courtbouillon.org/weasyprint/v52.5/features.html
- WeasyPrint filter Issue: https://github.com/Kozea/WeasyPrint/issues/1972
- WeasyPrint gradient Issue: https://github.com/Kozea/WeasyPrint/issues/504
- WeasyPrint Changelog: https://doc.courtbouillon.org/weasyprint/stable/changelog.html

---

## 5. Vivliostyle

**Engine:** Browser-based CSS typesetting engine. CLI uses headless Chromium with a JS layout engine for CSS Paged Media on top.

| Feature | Support |
|---|---|
| Vector text | Yes (via Chromium) |
| `backdrop-filter` | No (same Chromium limitation) |
| CSS Paged Media | Good (better than raw Chromium — adds @page margin boxes, running headers) |
| Cost | Free (AGPL v3 — license may be concern for commercial use) |
| Node.js | npm CLI (`@vivliostyle/cli`) |

**Sources:**
- Vivliostyle Supported CSS: https://docs.vivliostyle.org/supported-css-features.html
- Vivliostyle CLI GitHub: https://github.com/vivliostyle/vivliostyle-cli
- Vivliostyle Getting Started: https://vivliostyle.org/getting-started/

---

## 6. wkhtmltopdf — DO NOT USE

**Engine:** Ancient (2015-era) patched Qt WebKit.

**Status:** Abandoned, unmaintained, insecure. Does not support modern CSS (no Grid, no Flexbox, no ES6). CiviCRM issued a security advisory. Every source recommends migrating to Puppeteer/Playwright.

**Sources:**
- wkhtmltopdf Status Page: https://wkhtmltopdf.org/status.html
- Abandonware Notice: https://doc.doppio.sh/article/wkhtmltopdf-is-now-abandonware
- Security Advisory: https://civicrm.org/advisory/civi-psa-2024-01-wkhtmltopdf-eol
- Alternatives: https://docraptor.com/wkhtmltopdf-alternatives

---

## Summary Matrix

| Tool | Vector Text | backdrop-filter | Gradients | Google Fonts | Free | Node.js | Quality |
|---|---|---|---|---|---|---|---|
| **Playwright** | Yes | No | Yes | Yes | Yes | Yes | High |
| **Puppeteer** | Yes | No | Yes | Yes | Yes | Yes | High |
| **Prince XML** | Yes | No | Yes | Yes | No (~$3.8K) | CLI | Highest |
| **WeasyPrint** | Yes | No | Yes | Yes | Yes | Python | Medium |
| **Vivliostyle** | Yes | No | Yes | Yes | Yes (AGPL) | npm CLI | High |
| **wkhtmltopdf** | Yes | No | No | Limited | Yes | CLI | Abandoned |
