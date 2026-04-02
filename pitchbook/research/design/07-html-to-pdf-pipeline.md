# HTML-to-PDF Pipeline — Playwright Best Practices

## Why Playwright?

Playwright (headless Chromium) produces the highest-fidelity HTML-to-PDF conversion. It supports:
- Full CSS rendering including `backdrop-filter`, gradients, and modern layout
- Google Fonts loading
- Precise A4 page sizing
- Background graphics in print mode

Alternatives: Puppeteer (similar quality but fewer built-in features), wkhtmltopdf (lower fidelity, no modern CSS).

## Playwright Configuration

```javascript
const { chromium } = require('playwright');

const browser = await chromium.launch({
  args: ['--force-color-profile=srgb']  // Consistent color rendering
});

const page = await browser.newPage();
await page.setViewportSize({ width: 794, height: 1123 }); // A4 at 96dpi

await page.goto(`file://${path.resolve(htmlPath)}`, {
  waitUntil: 'networkidle'
});

// Wait for fonts
await page.waitForFunction(() => document.fonts.ready);

// Safety buffer for backdrop-filter compositing
await page.waitForTimeout(2000);

await page.pdf({
  path: outputPath,
  format: 'A4',
  printBackground: true,         // REQUIRED for backgrounds
  preferCSSPageSize: true,       // Respect CSS @page rules
  margin: { top: '0', bottom: '0', left: '0', right: '0' }
});
```

## Required CSS for Print

```css
@page {
  size: A4;
  margin: 0;
}

* {
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

.page {
  width: 210mm;
  min-height: 297mm;
  position: relative;
  overflow: hidden;
  page-break-after: always;
  break-after: page;
  box-sizing: border-box;
}

/* Prevent content block splitting */
.glass, table, .kpi, figure, blockquote {
  page-break-inside: avoid;
  break-inside: avoid;
}

/* Paragraph widows/orphans */
p { orphans: 3; widows: 3; }

/* Keep headings with content */
h1, h2, h3, h4 {
  page-break-after: avoid;
  break-after: avoid;
}
```

## Troubleshooting Guide

| Problem | Fix |
|---|---|
| Glass effects break / disappear | Add `will-change: transform` to glass elements, increase `waitForTimeout` to 2000ms |
| Fonts render wrong / fallback | Add explicit `font-display: swap`, increase post-load wait to 3000ms |
| Bad page breaks | Add `page-break-before: always` to section starts, `break-inside: avoid` to content blocks |
| Background colors missing | Ensure `printBackground: true` AND `print-color-adjust: exact` in CSS |
| Noise texture slow to render | Replace inline SVG `feTurbulence` with pre-rendered PNG tile |
| File size > 15MB | Reduce blur values (16→8, 24→12), use `qpdf --compress-streams=y` for compression |
| Colors look different | Add `--force-color-profile=srgb` to Chromium launch args |
| `position: fixed` ignored | Replace with `position: absolute` inside each `.page` container |

## PDF Merging with pdf-lib

```javascript
const { PDFDocument } = require('pdf-lib');

const mergedPdf = await PDFDocument.create();

for (const pdfPath of sectionPdfs) {
  const pdfBytes = fs.readFileSync(pdfPath);
  const pdf = await PDFDocument.load(pdfBytes);
  const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
  pages.forEach(page => mergedPdf.addPage(page));
}

mergedPdf.setTitle('Document Title');
mergedPdf.setAuthor('Author Name');

const bytes = await mergedPdf.save();
fs.writeFileSync('final.pdf', bytes);
// Target: under 15MB for email-ability
```

## Key Rendering Checklist

- `-webkit-backdrop-filter` prefix ALWAYS alongside `backdrop-filter`
- `will-change: transform` on glass elements for stability
- Google Fonts CDN with `font-display: swap`
- `position: fixed` unreliable in print — use `position: absolute` within `.page`
- `printBackground: true` required for background colors/gradients
- Noise texture: prefer pre-rendered PNG tile over inline SVG for PDF
- 2000ms minimum wait after font loading for backdrop-filter compositing

## Sources

- [PDF Generation: Puppeteer vs Playwright vs wkhtmltopdf — Medium](https://medium.com/@coders.stop/pdf-generation-from-html-i-tested-puppeteer-playwright-and-wkhtmltopdf-so-you-dont-have-to-d14228d28c4c)
- [Playwright Documentation — Microsoft](https://playwright.dev/docs/api/class-page#page-pdf)
- [pdf-lib — JavaScript PDF Library](https://pdf-lib.js.org/)
- [Building Websites with Claude Code — Leon Furze](https://leonfurze.com/2026/02/14/building-websites-with-claude-code/)
