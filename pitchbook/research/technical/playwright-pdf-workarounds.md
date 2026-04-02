# Playwright/Puppeteer PDF Workarounds

## The Core Issue

Chromium's `page.pdf()` uses the Skia PDF backend which resolves fonts from the system font registry, NOT from CSS @font-face declarations. This is a long-standing Chromium limitation (Chromium bug #422040).

**Confirmed behavior:**
- `document.fonts.ready` resolves with all fonts loaded
- Canvas font measurement confirms fonts are available
- System font check via canvas shows "AVAILABLE"
- PDF output still uses Times New Roman / system sans-serif fallback

## Workaround: Screenshot-Per-Page with pdf-lib

The reliable solution captures each page as a PNG screenshot and assembles into a PDF:

```javascript
import { PDFDocument } from 'pdf-lib';

// For each .page element:
const elementHandle = await page.evaluateHandle((idx) => {
  return document.querySelectorAll('.page, .cover')[idx];
}, i);

const screenshot = await elementHandle.screenshot({ type: 'png', scale: 'device' });

const pngImage = await pdfDoc.embedPng(screenshot);
const pdfPage = pdfDoc.addPage([595.28, 841.89]); // A4 in points
pdfPage.drawImage(pngImage, { x: 0, y: 0, width: 595.28, height: 841.89 });
```

### Pros
- Pixel-perfect font rendering
- No dependency on system font installation
- Works with any CSS (gradients, backdrop-filter, etc.)
- Consistent across all environments

### Cons
- Text is rasterized (not selectable/searchable)
- Slightly larger file sizes for text-heavy pages
- Rendering depends on viewport size matching print size

## Alternative Approaches (Not Tested)

### wkhtmltopdf
- Uses QtWebKit, may handle @font-face better
- Source: https://wkhtmltopdf.org/

### WeasyPrint
- Python HTML-to-PDF, handles @font-face natively
- Source: https://weasyprint.org/

### Prince XML
- Commercial, best @font-face support
- Source: https://www.princexml.com/

### Chromium with --font-render-hinting flag
- May affect font rendering in PDF
- Untested for this specific issue

## HTTP Server Requirement

When using Playwright with custom fonts, always serve HTML via HTTP (not file://):

```javascript
import { createServer } from 'http';

const server = createServer((req, res) => {
  // Serve files from project directory
  // Set correct Content-Type for .woff2 -> 'font/woff2'
});

server.listen(0, '127.0.0.1'); // Random port
const port = server.address().port;

await page.goto(`http://127.0.0.1:${port}/path/to/file.html`);
```

This ensures:
- No CORS issues with font loading
- Correct MIME types for font files
- Consistent behavior across platforms

## Sources

- Chromium bug #422040: https://bugs.chromium.org/p/chromium/issues/detail?id=422040
- Playwright page.pdf() docs: https://playwright.dev/docs/api/class-page#page-pdf
- Playwright elementHandle.screenshot(): https://playwright.dev/docs/api/class-elementhandle#element-handle-screenshot
- pdf-lib documentation: https://pdf-lib.js.org/
- document.fonts API: https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet
- Chromium Skia PDF backend: https://chromium.googlesource.com/chromium/src/+/HEAD/components/printing/
