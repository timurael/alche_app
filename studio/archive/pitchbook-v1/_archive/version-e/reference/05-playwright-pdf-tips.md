# Playwright PDF Generation — Practical Tips & Gotchas

Collected from research and hands-on testing, February 2026.

---

## Font Loading

Google Fonts load asynchronously. You MUST wait before generating the PDF:

```javascript
await page.goto(url, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(2000); // safety margin

// Verify fonts loaded
const fonts = await page.evaluate(() => {
  const loaded = [];
  document.fonts.forEach(f => {
    if (f.status === 'loaded') loaded.push(f.family);
  });
  return [...new Set(loaded)];
});
console.log('Fonts:', fonts.join(', '));
```

**Source:** https://testautomationmastery.com/how-to-wait-for-font-loading-to-ensure-complete-page-load-in-playwright-tests/

---

## Local HTTP Server Required

Loading HTML via `file://` protocol can cause issues with font loading and resource paths. Use a local HTTP server:

```javascript
import { createServer } from 'http';
import { statSync, createReadStream } from 'fs';

const server = createServer((req, res) => {
  let filePath = join(rootDir, decodeURIComponent(req.url));
  // ... serve files with correct MIME types
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
await page.goto(`http://127.0.0.1:${port}/path/to/file.html`);
```

---

## Page Breaks

Chromium's print-to-PDF respects CSS page break properties:

```css
.page {
  page-break-after: always !important;
  page-break-inside: avoid !important;
  break-after: page !important;
  break-inside: avoid !important;
}

/* Last page: no break after */
.page:last-child {
  page-break-after: auto !important;
  break-after: auto !important;
}
```

If content overflows a page's height, Chromium creates an extra PDF page. Fix by setting `max-height` and `overflow: hidden`.

---

## Print Background Colors

Backgrounds are NOT included by default. Always set:

```javascript
await page.pdf({
  printBackground: true,  // REQUIRED for any background colors/gradients
});
```

And in CSS:
```css
* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}
```

---

## Headless vs Graphical Chrome

Headless Chrome's print-to-PDF and graphical Chrome's "Save as PDF" produce different results:
- Different default margins
- Different resource fetching behavior
- Headless silently refuses to fetch external resources in `@page` CSS rules

**Workaround:** Base64-encode external resources (images, fonts) inline.

**Source:** https://andre.arko.net/2025/05/25/chrome-headless-print-to-pdf/

---

## CSS Injection Before PDF

You can inject CSS overrides after page load but before PDF generation:

```javascript
await page.addStyleTag({ content: `
  .page { height: 1123px !important; overflow: hidden !important; }
  body::before { display: none !important; }  /* remove atmospheric gradient */
` });
```

And JavaScript:
```javascript
await page.evaluate(() => {
  // Manipulate DOM before PDF render
  document.querySelectorAll('.page').forEach(p => {
    // ... fix layout issues
  });
});
```

---

## PDF Metadata

Chromium's `page.pdf()` does not support setting PDF metadata (title, author, subject). If you need metadata, post-process with pdf-lib:

```javascript
import { PDFDocument } from 'pdf-lib';

const pdfBytes = readFileSync('output.pdf');
const doc = await PDFDocument.load(pdfBytes);
doc.setTitle('alche — The Art of Curated Longevity');
doc.setAuthor('alche');
doc.setSubject('Pre-Seed Investment Memorandum');
writeFileSync('output.pdf', await doc.save());
```

---

## Known Regressions

- **v1.28.0**: Content cut off on pages exceeding ~3 PDF pages
  - Source: https://github.com/microsoft/playwright/issues/20565
- **Color rendering**: Colors may appear slightly different (brighter/darker) in PDF vs screen
  - Workaround: Use `--force-color-profile=srgb` browser arg
- **Chromium version pinning**: PDF output can change across Chromium updates. Pin versions for reproducibility.
  - Source: https://www.checklyhq.com/docs/learn/playwright/generating-pdfs/

---

## pdf() Options Reference

```javascript
await page.pdf({
  path: 'output.pdf',          // save to file
  format: 'A4',                // or 'Letter', 'Legal', etc.
  width: '210mm',              // explicit dimensions (overrides format)
  height: '297mm',
  printBackground: true,        // include background colors/images
  preferCSSPageSize: true,      // respect @page { size: ... }
  margin: {                     // page margins
    top: 0, right: 0, bottom: 0, left: 0
  },
  displayHeaderFooter: false,   // Chromium header/footer (usually unwanted)
  scale: 1,                     // content scale (0.1 to 2.0)
  landscape: false,
  pageRanges: '1-5',           // specific pages only
});
```

**Source:** https://playwright.dev/docs/api/class-page#page-pdf
