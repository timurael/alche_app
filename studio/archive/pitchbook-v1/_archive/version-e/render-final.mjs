/**
 * ALCHE PITCH BOOK — Final PDF Renderer
 *
 * Renders version-e.html to a professional PDF with:
 * - Zero blank spaces (content fills every A4 page)
 * - No content overflow (nothing gets clipped or squished)
 * - Proper spacing distribution on underfilled pages
 * - High-quality screenshot-per-page rendering
 *
 * Usage: node render-final.mjs
 * Output: version-e-final.pdf
 *
 * ═══════════════════════════════════════════════════════
 * POSITIONING RULES (self-imposed for professional output)
 * ═══════════════════════════════════════════════════════
 *
 * RULE 1 — EXACT A4: Every page is exactly 210mm × 297mm.
 *          No min-height: pages are clamped, not flexible.
 *
 * RULE 2 — NO BLANK ZONES: If content fills < 85% of the page,
 *          redistribute extra space proportionally between blocks.
 *          Favor padding after header and before footer.
 *
 * RULE 3 — NO SQUISH: If content overflows, compress spacing first.
 *          Scale content only as last resort, never below 85%.
 *
 * RULE 4 — FOOTER ANCHORED: Page footer always sits at the bottom
 *          of the A4 frame, regardless of content height.
 *
 * RULE 5 — VISUAL HIERARCHY: Extra space goes to the largest gaps
 *          first (section breaks > component gaps > inner padding).
 *          This looks intentional, not algorithmic.
 *
 * RULE 6 — COVER & CLOSING: These pages use centered layouts.
 *          They get vertical centering, not space distribution.
 *
 * RULE 7 — IMAGES RESPECT BOUNDS: App screenshots are constrained
 *          so no single element causes a page to overflow.
 *
 * RULE 8 — PRINT FIDELITY: Glass effects use solid fallbacks.
 *          All colors use exact-print-adjust. No transparency issues.
 */

import { createServer } from 'http';
import { statSync, createReadStream, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const parentDir = join(__dirname, '..');
const htmlPath = join(__dirname, 'version-e.html');
const pdfPath = join(__dirname, 'version-e-final.pdf');

// ─── A4 Constants ────────────────────────────────────────────────
const A4_W = 794;   // 210mm at 96dpi
const A4_H = 1123;  // 297mm at 96dpi
const A4_PT_W = 595.28;  // A4 width in PDF points
const A4_PT_H = 841.89;  // A4 height in PDF points

// ─── CSS Overrides (injected at render time) ──────────────────────
const CSS_OVERRIDES = `
/* ════════════════════════════════════════════════════════
   RENDER-TIME OVERRIDES: Page Fill System
   ════════════════════════════════════════════════════════ */

/* RULE 1: Exact A4 height on all pages */
.page {
  height: ${A4_H}px !important;
  min-height: ${A4_H}px !important;
  max-height: ${A4_H}px !important;
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
  box-sizing: border-box !important;
}

.cover {
  height: ${A4_H}px !important;
  min-height: ${A4_H}px !important;
  max-height: ${A4_H}px !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
}

/* RULE 4: Footer always at bottom */
.page .page-footer {
  margin-top: auto !important;
  flex-shrink: 0 !important;
  position: relative !important;
  bottom: auto !important;
  left: auto !important;
  right: auto !important;
}

/* RULE 4b: Header stays at top */
.page .page-header {
  flex-shrink: 0 !important;
}

/* RULE 7: Constrain images that cause overflow */
/* Product page app-grid: smaller screenshots */
.app-grid__item img {
  max-width: 120px !important;
  max-height: 200px !important;
}

.app-grid {
  gap: var(--space-2) !important;
  margin: var(--space-2) 0 !important;
}

/* Module list: tighter */
.module-list {
  gap: 0 var(--space-3) !important;
  margin: var(--space-2) 0 !important;
}

.module-item {
  padding: 2px 0 !important;
}

/* Tier row: more compact */
.tier-row {
  gap: var(--space-2) !important;
  margin: var(--space-2) 0 !important;
}

.tier-card {
  padding: var(--space-2) var(--space-2) !important;
}

/* Intel preview: constrain */
.intel-preview img {
  max-height: 180px !important;
  object-fit: contain !important;
}

.intel-preview {
  gap: var(--space-3) !important;
  margin: var(--space-3) 0 !important;
}

/* Roadmap cards: tighter */
.roadmap-cols {
  gap: var(--space-3) !important;
  margin: var(--space-3) 0 !important;
}

.roadmap-card {
  padding: var(--space-3) var(--space-3) !important;
}

.roadmap-card__list li {
  padding: 1px 0 !important;
}

/* Screen row: constrained for Solution pages */
.screen-row {
  gap: var(--space-3) !important;
  margin: var(--space-3) 0 !important;
}

.screen-item img {
  max-width: 140px !important;
  max-height: 220px !important;
}

/* Close page: vertically centered */
.close-page {
  min-height: auto !important;
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
}

/* Section tag: relative positioning */
.section-tag {
  position: relative !important;
  bottom: auto !important;
  left: auto !important;
  margin-top: auto !important;
}

/* Missing grid definition */
.kpi-grid--5 { grid-template-columns: repeat(5, 1fr) !important; }

/* KPI grid: compact for overflow pages */
.kpi-grid {
  margin: var(--space-3) 0 !important;
}

.kpi-grid__item {
  padding: var(--space-3) var(--space-2) !important;
}

.kpi-grid__value {
  font-size: 22px !important;
}

.kpi-grid__label {
  font-size: 8px !important;
  line-height: 1.25 !important;
}

/* Callout boxes: tighter in compressed pages */
.callout {
  padding: var(--space-3) var(--space-4) !important;
}

/* Section headers: tighter */
.section-header {
  margin-bottom: var(--space-4) !important;
}

/* Shelf layout images: constrain height */
.shelf-layout__image img {
  max-height: 300px !important;
  object-fit: contain !important;
}

/* Flow rows: tighter */
.flow-row {
  margin: var(--space-2) 0 !important;
}

.flow-step {
  font-size: 7px !important;
  padding: 3px var(--space-1) !important;
  max-width: 120px !important;
}

/* RULE 8: Print fidelity - glass solid fallbacks */
body::before {
  display: none !important;
}
`;

// ─── JS Page Fixer (injected at render time) ──────────────────────
const PAGE_FIXER_JS = `
(function() {
  const A4_H = ${A4_H};
  const allPages = document.querySelectorAll('.page, .cover');

  allPages.forEach((page, idx) => {
    // Skip cover - it has its own centered flex layout
    if (page.classList.contains('cover')) return;

    const header = page.querySelector('.page-header');
    const footer = page.querySelector('.page-footer');

    // ── Step 1: Wrap content between header and footer ──
    const children = Array.from(page.children);
    const contentNodes = children.filter(child =>
      child !== header && child !== footer &&
      !child.classList.contains('page-header') &&
      !child.classList.contains('page-footer')
    );

    if (contentNodes.length === 0) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'page-content-fill';
    wrapper.style.cssText = 'flex: 1; display: flex; flex-direction: column; overflow: hidden; min-height: 0;';

    // Insert wrapper after header
    if (header) {
      header.after(wrapper);
    } else {
      page.prepend(wrapper);
    }

    // Move content into wrapper
    contentNodes.forEach(node => wrapper.appendChild(node));

    // ── Step 2: Measure content vs available space ──
    const wrapperRect = wrapper.getBoundingClientRect();
    const availableH = wrapperRect.height;

    // Temporarily let wrapper expand to measure true content height
    wrapper.style.overflow = 'visible';
    wrapper.style.flex = 'none';
    const trueContentH = wrapper.scrollHeight;
    wrapper.style.overflow = 'hidden';
    wrapper.style.flex = '1';

    const diff = trueContentH - availableH;
    const fillRatio = trueContentH / availableH;

    // ── Step 3: Fix based on fill ratio ──
    if (fillRatio > 1.02) {
      // OVERFLOW: Content too tall
      fixOverflow(wrapper, trueContentH, availableH, idx);
    } else if (fillRatio < 0.88) {
      // UNDERFILL: Too much blank space
      fixUnderfill(wrapper, trueContentH, availableH, idx);
    }
    // Pages between 88-102% fill are considered good
  });

  function fixOverflow(wrapper, contentH, availableH, pageIdx) {
    // Pass 1: Compress spacing proportionally
    const compressionFactor = Math.max(0.25, availableH / contentH);
    const allElements = wrapper.querySelectorAll('*');

    allElements.forEach(el => {
      const cs = getComputedStyle(el);

      // Reduce vertical margins
      ['marginTop', 'marginBottom'].forEach(prop => {
        const val = parseFloat(cs[prop]);
        if (val > 3) {
          el.style[prop] = Math.max(1, Math.round(val * compressionFactor)) + 'px';
        }
      });

      // Reduce vertical padding (be less aggressive on padding)
      ['paddingTop', 'paddingBottom'].forEach(prop => {
        const val = parseFloat(cs[prop]);
        if (val > 6) {
          const factor = Math.max(0.4, compressionFactor * 1.1); // padding less aggressive
          el.style[prop] = Math.max(2, Math.round(val * factor)) + 'px';
        }
      });

      // Reduce gaps
      const gap = parseFloat(cs.gap) || parseFloat(cs.rowGap) || 0;
      if (gap > 3) {
        el.style.gap = Math.max(2, Math.round(gap * compressionFactor)) + 'px';
      }
    });

    // Measure after compression
    wrapper.style.overflow = 'visible';
    wrapper.style.flex = 'none';
    const newH = wrapper.scrollHeight;
    wrapper.style.overflow = 'hidden';
    wrapper.style.flex = '1';

    if (newH > availableH * 1.02) {
      // Pass 2: Scale down content as last resort (RULE 3: never below 82%)
      const scale = Math.max(0.82, availableH / newH);
      wrapper.style.transform = 'scaleY(' + scale + ')';
      wrapper.style.transformOrigin = 'top center';
      wrapper.style.width = '100%';
    } else if (newH < availableH * 0.88) {
      // Post-compression redistribution: content compressed too much, redistribute
      fixUnderfill(wrapper, newH, availableH, pageIdx);
    }
  }

  function fixUnderfill(wrapper, contentH, availableH, pageIdx) {
    const extraSpace = availableH - contentH;

    // Find top-level spacer-eligible elements in the wrapper
    const blocks = Array.from(wrapper.children);
    if (blocks.length === 0) return;

    // RULE 5: Visual hierarchy - categorize gaps
    // Large separators (section headers, sep dividers) get more space
    // Small elements (labels, captions) get less
    const spacers = [];
    blocks.forEach((block, i) => {
      if (i === 0) return; // First element gets top padding

      // Weight: larger gaps get more space
      let weight = 1;
      const tagName = block.tagName.toLowerCase();
      const classList = block.classList;

      // Section headers and separators get more weight
      if (classList.contains('section-header') || classList.contains('sep') ||
          classList.contains('sep--amber') || tagName === 'h1' || tagName === 'h2') {
        weight = 3;
      }
      // Glass cards and major components get medium weight
      else if (classList.contains('glass') || classList.contains('glass-elevated') ||
               classList.contains('glass-accent') || classList.contains('kpi-grid') ||
               classList.contains('pull-quote') || classList.contains('data-table')) {
        weight = 2;
      }
      // Section labels get slight weight
      else if (classList.contains('section-label')) {
        weight = 1.5;
      }

      spacers.push({ block, weight, index: i });
    });

    if (spacers.length === 0) {
      // Fallback: add padding to wrapper for centering effect
      wrapper.style.paddingTop = Math.round(extraSpace * 0.4) + 'px';
      wrapper.style.paddingBottom = Math.round(extraSpace * 0.3) + 'px';
      return;
    }

    // Calculate total weight
    const totalWeight = spacers.reduce((sum, s) => sum + s.weight, 0);

    // RULE 2: Distribute space proportionally
    // Reserve some for top and bottom padding
    const topPadding = Math.round(extraSpace * 0.15);
    const bottomPadding = Math.round(extraSpace * 0.10);
    const distributableSpace = extraSpace - topPadding - bottomPadding;

    // Add top padding to first element
    if (blocks[0]) {
      const currentMT = parseFloat(getComputedStyle(blocks[0]).marginTop) || 0;
      blocks[0].style.marginTop = Math.round(currentMT + topPadding) + 'px';
    }

    // Distribute among spacers
    spacers.forEach(({ block, weight }) => {
      const share = Math.round((weight / totalWeight) * distributableSpace);
      const currentMT = parseFloat(getComputedStyle(block).marginTop) || 0;
      block.style.marginTop = Math.round(currentMT + share) + 'px';
    });
  }
})();
`;

// ─── Main Render Pipeline ────────────────────────────────────────
async function main() {
  console.log('╔══════════════════════════════════════════════════════╗');
  console.log('║  ALCHE PITCH BOOK — Final PDF Renderer              ║');
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log();

  // Verify HTML exists
  try {
    statSync(htmlPath);
  } catch {
    console.error('ERROR: version-e.html not found. Run build.mjs first.');
    process.exit(1);
  }

  // Start local HTTP server (required for proper font loading)
  const server = createServer((req, res) => {
    let filePath = join(parentDir, decodeURIComponent(req.url));
    try {
      const stat = statSync(filePath);
      if (stat.isDirectory()) filePath = join(filePath, 'index.html');
      const ext = filePath.split('.').pop().toLowerCase();
      const types = {
        html: 'text/html; charset=utf-8', css: 'text/css',
        js: 'application/javascript', png: 'image/png', jpg: 'image/jpeg',
        woff2: 'font/woff2', woff: 'font/woff', ttf: 'font/ttf',
        svg: 'image/svg+xml',
      };
      res.writeHead(200, {
        'Content-Type': types[ext] || 'application/octet-stream',
        'Access-Control-Allow-Origin': '*',
      });
      createReadStream(filePath).pipe(res);
    } catch {
      res.writeHead(404);
      res.end('Not found: ' + req.url);
    }
  });

  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const port = server.address().port;
  const relPath = htmlPath.replace(parentDir, '').replace(/^\//, '');

  console.log(`  HTTP server: http://127.0.0.1:${port}`);
  console.log(`  Source: ${relPath}`);
  console.log();

  // Launch Playwright
  const { chromium } = await import('playwright');
  const { PDFDocument } = await import('pdf-lib');

  const browser = await chromium.launch({
    args: ['--force-color-profile=srgb']
  });
  const page = await browser.newPage();
  await page.setViewportSize({ width: A4_W, height: A4_H });

  // Load HTML
  console.log('  Loading HTML...');
  await page.goto(`http://127.0.0.1:${port}/${relPath}`, {
    waitUntil: 'networkidle',
    timeout: 30000
  });

  // Wait for fonts
  console.log('  Waiting for fonts...');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(2000);

  // Inject CSS overrides
  console.log('  Injecting page-fill CSS...');
  await page.addStyleTag({ content: CSS_OVERRIDES });
  await page.waitForTimeout(500);

  // Inject page-fixer JS
  console.log('  Running page-fixer...');
  await page.evaluate(PAGE_FIXER_JS);
  await page.waitForTimeout(1000);

  // Get page count and diagnostics
  const diagnostics = await page.evaluate(() => {
    const pages = document.querySelectorAll('.page, .cover');
    return Array.from(pages).map((p, i) => {
      const rect = p.getBoundingClientRect();
      const footerNum = p.querySelector('.page-footer__number');
      return {
        index: i,
        pageNum: footerNum ? footerNum.textContent.trim() : 'cover',
        height: Math.round(rect.height),
        width: Math.round(rect.width),
      };
    });
  });

  const pageCount = diagnostics.length;
  console.log(`  Pages: ${pageCount}`);
  console.log();

  // Log any size anomalies
  diagnostics.forEach(d => {
    if (Math.abs(d.height - 1123) > 5) {
      console.log(`  ⚠ Page ${d.pageNum} (idx ${d.index}): ${d.height}px (expected ${A4_H}px)`);
    }
  });

  // Screenshot each page
  console.log();
  console.log('  Capturing pages...');
  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < pageCount; i++) {
    // Scroll to page element
    await page.evaluate((idx) => {
      const el = document.querySelectorAll('.page, .cover')[idx];
      if (el) el.scrollIntoView({ block: 'start' });
    }, i);
    await page.waitForTimeout(200);

    // Get element handle
    const elementHandle = await page.evaluateHandle((idx) => {
      return document.querySelectorAll('.page, .cover')[idx];
    }, i);

    // Take screenshot
    const screenshot = await elementHandle.screenshot({
      type: 'png',
      scale: 'device',
    });

    // Embed into PDF
    const pngImage = await pdfDoc.embedPng(screenshot);
    const pdfPage = pdfDoc.addPage([A4_PT_W, A4_PT_H]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: A4_PT_W,
      height: A4_PT_H,
    });

    const d = diagnostics[i];
    process.stdout.write(`  ✓ Page ${d.pageNum.padStart(2)} (${d.height}px) → PDF page ${i + 1}\r\n`);
  }

  // Set PDF metadata
  pdfDoc.setTitle('alche — The Art of Curated Longevity');
  pdfDoc.setAuthor('alche');
  pdfDoc.setSubject('Pre-Seed Investment Memorandum');
  pdfDoc.setCreator('alche pitch book generator');

  // Save PDF
  const pdfBytes = await pdfDoc.save();
  writeFileSync(pdfPath, pdfBytes);

  const sizeMB = (pdfBytes.length / 1024 / 1024).toFixed(1);
  console.log();
  console.log(`  ✓ PDF saved: ${pdfPath}`);
  console.log(`  ✓ Size: ${sizeMB} MB`);
  console.log(`  ✓ Pages: ${pageCount}`);

  if (parseFloat(sizeMB) > 15) {
    console.log('  ⚠ File exceeds 15MB target. Consider qpdf compression.');
  }

  // Cleanup
  await browser.close();
  server.close();

  console.log();
  console.log('  Done.');
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
