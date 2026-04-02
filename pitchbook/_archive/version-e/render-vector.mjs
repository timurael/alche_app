/**
 * ALCHE PITCH BOOK — Vector PDF Renderer
 *
 * Produces a high-quality vector PDF with:
 * - Selectable, crisp text at any zoom level (not rasterized screenshots)
 * - Embedded Google Fonts (Cormorant Garamond, Outfit, Space Mono)
 * - Exact 30 A4 pages (no blank overflow pages)
 * - Solid glass-card fallbacks (backdrop-filter doesn't survive print-to-PDF)
 * - Proper content fitting with compression for overflow pages
 *
 * Usage: node render-vector.mjs
 * Output: version-e-vector.pdf
 */

import { createServer } from 'http';
import { statSync, createReadStream, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const parentDir = join(__dirname, '..');
const htmlPath = join(__dirname, 'version-e.html');
const pdfPath = join(__dirname, 'version-e-vector.pdf');

// ─── A4 Constants ────────────────────────────────────────────────
const A4_W = 794;   // 210mm at 96dpi
const A4_H = 1123;  // 297mm at 96dpi

// ─── CSS Overrides for exact page sizing ──────────────────────────
const CSS_OVERRIDES = `
/* ════════════════════════════════════════════════════════
   VECTOR PDF OVERRIDES — Page Fit + Print Fidelity
   ════════════════════════════════════════════════════════ */

/* Force exact A4 height on all pages */
.page {
  height: ${A4_H}px !important;
  min-height: ${A4_H}px !important;
  max-height: ${A4_H}px !important;
  overflow: hidden !important;
  display: flex !important;
  flex-direction: column !important;
  box-sizing: border-box !important;
  page-break-after: always !important;
  page-break-inside: avoid !important;
  break-after: page !important;
  break-inside: avoid !important;
}

.cover {
  height: ${A4_H}px !important;
  min-height: ${A4_H}px !important;
  max-height: ${A4_H}px !important;
  overflow: hidden !important;
  box-sizing: border-box !important;
  page-break-after: always !important;
  page-break-inside: avoid !important;
  break-after: page !important;
  break-inside: avoid !important;
}

/* Last page: no break after */
.page:last-child, .cover:last-child {
  page-break-after: auto !important;
  break-after: auto !important;
}

/* Footer pinned to bottom via flex */
.page .page-footer {
  margin-top: auto !important;
  flex-shrink: 0 !important;
  position: relative !important;
  bottom: auto !important;
  left: auto !important;
  right: auto !important;
}

.page .page-header {
  flex-shrink: 0 !important;
}

/* ─── Glass → Solid fallbacks for PDF ─── */
.glass,
.glass-elevated,
.lock-card,
.churn-stat,
.force-card,
.consolidation-block,
.berlin-stat,
.advantage-card,
.frag-item,
.outcome-item,
.channel-card,
.hypothesis-card,
.term-card,
.persona-card,
.pillar-card,
.founder-card,
.advisor-card,
.roadmap-card,
.tier-card {
  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
  background: rgba(245,240,232,0.6) !important;
  border: 1px solid rgba(44,36,24,0.08) !important;
}

.glass-elevated {
  background: rgba(245,240,232,0.85) !important;
}

.glass-accent {
  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
}

.glass-accent--amber {
  background: rgba(196,149,106,0.06) !important;
  border-left: 3px solid rgba(196,149,106,0.5) !important;
}
.glass-accent--sage {
  background: rgba(139,158,124,0.06) !important;
  border-left: 3px solid rgba(139,158,124,0.5) !important;
}
.glass-accent--terra {
  background: rgba(184,107,74,0.06) !important;
  border-left: 3px solid rgba(184,107,74,0.5) !important;
}
.glass-accent--rose {
  background: rgba(196,122,138,0.06) !important;
  border-left: 3px solid rgba(196,122,138,0.5) !important;
}

.tier-card--highlight {
  border: 2px solid rgba(196,149,106,0.7) !important;
}

/* ─── Overflow-prone elements: tighter defaults ─── */
.app-grid__item img {
  max-width: 120px !important;
  max-height: 200px !important;
}

.app-grid {
  gap: var(--space-2) !important;
  margin: var(--space-2) 0 !important;
}

.module-list {
  gap: 0 var(--space-3) !important;
  margin: var(--space-2) 0 !important;
}

.module-item {
  padding: 2px 0 !important;
}

.tier-row {
  gap: var(--space-2) !important;
  margin: var(--space-2) 0 !important;
}

.tier-card {
  padding: var(--space-2) var(--space-2) !important;
}

.intel-preview img {
  max-height: 180px !important;
  object-fit: contain !important;
}

.intel-preview {
  gap: var(--space-3) !important;
  margin: var(--space-3) 0 !important;
}

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

.screen-row {
  gap: var(--space-3) !important;
  margin: var(--space-3) 0 !important;
}

.screen-item img {
  max-width: 140px !important;
  max-height: 220px !important;
}

.close-page {
  min-height: auto !important;
  flex: 1 !important;
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
  align-items: center !important;
}

.section-tag {
  position: relative !important;
  bottom: auto !important;
  left: auto !important;
  margin-top: auto !important;
}

/* Missing grid definition */
.kpi-grid--5 { grid-template-columns: repeat(5, 1fr) !important; }

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

.callout {
  padding: var(--space-3) var(--space-4) !important;
}

.section-header {
  margin-bottom: var(--space-4) !important;
}

.shelf-layout__image img {
  max-height: 300px !important;
  object-fit: contain !important;
}

.flow-row {
  margin: var(--space-2) 0 !important;
}

.flow-step {
  font-size: 7px !important;
  padding: 3px var(--space-1) !important;
  max-width: 120px !important;
}

/* Team section: remove photo column */
.team-profile {
  grid-template-columns: 1fr !important;
}
.team-profile__photo {
  display: none !important;
}
.exp-line {
  margin-left: 0 !important;
}

/* Print fidelity */
img { max-width: 100% !important; height: auto !important; }

/* Remove the atmospheric gradient overlay in PDF */
body::before {
  display: none !important;
}

/* @page rule for print */
@page {
  size: 210mm 297mm;
  margin: 0;
}

@media print {
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  body {
    background: #F5F0E8 !important;
    margin: 0 !important;
    padding: 0 !important;
  }
}
`;

// ─── Page Fixer JS (handles overflow + underfill) ─────────────────
const PAGE_FIXER_JS = `
(function() {
  const A4_H = ${A4_H};
  const allPages = document.querySelectorAll('.page, .cover');

  allPages.forEach((page, idx) => {
    if (page.classList.contains('cover')) return;

    const header = page.querySelector('.page-header');
    const footer = page.querySelector('.page-footer');

    // Wrap content between header and footer
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

    if (header) {
      header.after(wrapper);
    } else {
      page.prepend(wrapper);
    }

    contentNodes.forEach(node => wrapper.appendChild(node));

    // Measure content vs available space
    const wrapperRect = wrapper.getBoundingClientRect();
    const availableH = wrapperRect.height;

    wrapper.style.overflow = 'visible';
    wrapper.style.flex = 'none';
    const trueContentH = wrapper.scrollHeight;
    wrapper.style.overflow = 'hidden';
    wrapper.style.flex = '1';

    const fillRatio = trueContentH / availableH;

    if (fillRatio > 1.02) {
      fixOverflow(wrapper, trueContentH, availableH, idx);
    } else if (fillRatio < 0.88) {
      fixUnderfill(wrapper, trueContentH, availableH, idx);
    }
  });

  function fixOverflow(wrapper, contentH, availableH, pageIdx) {
    const compressionFactor = Math.max(0.25, availableH / contentH);
    const allElements = wrapper.querySelectorAll('*');

    allElements.forEach(el => {
      const cs = getComputedStyle(el);

      ['marginTop', 'marginBottom'].forEach(prop => {
        const val = parseFloat(cs[prop]);
        if (val > 3) {
          el.style[prop] = Math.max(1, Math.round(val * compressionFactor)) + 'px';
        }
      });

      ['paddingTop', 'paddingBottom'].forEach(prop => {
        const val = parseFloat(cs[prop]);
        if (val > 6) {
          const factor = Math.max(0.4, compressionFactor * 1.1);
          el.style[prop] = Math.max(2, Math.round(val * factor)) + 'px';
        }
      });

      const gap = parseFloat(cs.gap) || parseFloat(cs.rowGap) || 0;
      if (gap > 3) {
        el.style.gap = Math.max(2, Math.round(gap * compressionFactor)) + 'px';
      }
    });

    // Re-measure after compression
    wrapper.style.overflow = 'visible';
    wrapper.style.flex = 'none';
    const newH = wrapper.scrollHeight;
    wrapper.style.overflow = 'hidden';
    wrapper.style.flex = '1';

    if (newH > availableH * 1.02) {
      // Last resort: scale down (never below 82%)
      const scale = Math.max(0.82, availableH / newH);
      wrapper.style.transform = 'scaleY(' + scale + ')';
      wrapper.style.transformOrigin = 'top center';
      wrapper.style.width = '100%';
    } else if (newH < availableH * 0.88) {
      fixUnderfill(wrapper, newH, availableH, pageIdx);
    }
  }

  function fixUnderfill(wrapper, contentH, availableH, pageIdx) {
    const extraSpace = availableH - contentH;
    const blocks = Array.from(wrapper.children);
    if (blocks.length === 0) return;

    const spacers = [];
    blocks.forEach((block, i) => {
      if (i === 0) return;

      let weight = 1;
      const classList = block.classList;
      const tagName = block.tagName.toLowerCase();

      if (classList.contains('section-header') || classList.contains('sep') ||
          classList.contains('sep--amber') || tagName === 'h1' || tagName === 'h2') {
        weight = 3;
      } else if (classList.contains('glass') || classList.contains('glass-elevated') ||
                 classList.contains('glass-accent') || classList.contains('kpi-grid') ||
                 classList.contains('pull-quote') || classList.contains('data-table')) {
        weight = 2;
      } else if (classList.contains('section-label')) {
        weight = 1.5;
      }

      spacers.push({ block, weight, index: i });
    });

    if (spacers.length === 0) {
      wrapper.style.paddingTop = Math.round(extraSpace * 0.4) + 'px';
      wrapper.style.paddingBottom = Math.round(extraSpace * 0.3) + 'px';
      return;
    }

    const totalWeight = spacers.reduce((sum, s) => sum + s.weight, 0);
    const topPadding = Math.round(extraSpace * 0.15);
    const bottomPadding = Math.round(extraSpace * 0.10);
    const distributableSpace = extraSpace - topPadding - bottomPadding;

    if (blocks[0]) {
      const currentMT = parseFloat(getComputedStyle(blocks[0]).marginTop) || 0;
      blocks[0].style.marginTop = Math.round(currentMT + topPadding) + 'px';
    }

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
  console.log('║  ALCHE PITCH BOOK — Vector PDF Renderer              ║');
  console.log('╚══════════════════════════════════════════════════════╝');
  console.log();

  try {
    statSync(htmlPath);
  } catch {
    console.error('ERROR: version-e.html not found. Run build.mjs first.');
    process.exit(1);
  }

  // Start local HTTP server (for font loading)
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

  // Wait for Google Fonts
  console.log('  Waiting for fonts...');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(3000);

  const fontCheck = await page.evaluate(() => {
    const fonts = [];
    document.fonts.forEach(f => {
      if (f.status === 'loaded') fonts.push(f.family);
    });
    return [...new Set(fonts)];
  });
  console.log(`  Fonts loaded: ${fontCheck.join(', ')}`);

  // Inject CSS overrides
  console.log('  Injecting page-fit CSS...');
  await page.addStyleTag({ content: CSS_OVERRIDES });
  await page.waitForTimeout(500);

  // Inject page-fixer JS
  console.log('  Running page-fixer...');
  await page.evaluate(PAGE_FIXER_JS);
  await page.waitForTimeout(1000);

  // Verify all pages are exactly A4
  const diagnostics = await page.evaluate(() => {
    const pages = document.querySelectorAll('.page, .cover');
    return Array.from(pages).map((p, i) => {
      const rect = p.getBoundingClientRect();
      return {
        index: i,
        height: Math.round(rect.height),
        width: Math.round(rect.width),
      };
    });
  });

  console.log(`  Pages: ${diagnostics.length}`);
  let anomalies = 0;
  diagnostics.forEach(d => {
    if (Math.abs(d.height - A4_H) > 5) {
      console.log(`  WARNING: Page ${d.index}: ${d.height}px (expected ${A4_H}px)`);
      anomalies++;
    }
  });
  if (anomalies === 0) {
    console.log('  All pages at exact A4 height');
  }
  console.log();

  // Generate vector PDF using native page.pdf()
  console.log('  Generating vector PDF...');
  await page.pdf({
    path: pdfPath,
    width: '210mm',
    height: '297mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: false,
  });

  const stat = statSync(pdfPath);
  const sizeMB = (stat.size / 1024 / 1024).toFixed(1);

  console.log(`  PDF saved: ${pdfPath}`);
  console.log(`  Size: ${sizeMB} MB`);
  console.log(`  Type: VECTOR (selectable text, crisp at any zoom)`);

  if (parseFloat(sizeMB) > 15) {
    console.log('  WARNING: File exceeds 15MB email target.');
  }

  await browser.close();
  server.close();

  console.log();
  console.log('  Done.');
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
