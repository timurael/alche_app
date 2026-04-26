/**
 * Build Version B combined pitch book HTML + render PDF via Playwright.
 *
 * - Sections 05, 06, 11: reads from ./  (version-b modified files)
 * - All other sections:   reads from ../ (original files)
 * - CSS:                  reads from ../_design-system.css
 *
 * Usage:  node build.mjs
 * Output: version-b.html  +  version-b.pdf
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const parentDir = join(__dirname, '..');

// ── Section files in order ──────────────────────────────────────────────────
const SECTIONS = [
  'section-00-cover.html',
  'section-00b-toc.html',
  'section-01-insight.html',
  'section-02-who-we-serve.html',
  'section-03-market.html',
  'section-04-competitive.html',
  'section-05-solution.html',
  'section-06-product.html',
  'section-07-business-model.html',
  'section-08-go-to-market.html',
  'section-09-traction.html',
  'section-10-moat.html',
  'section-11-team.html',
  'section-12-ask.html',
  'section-13-closing.html',
];

// Sections that use version-b files
const VERSION_B_SECTIONS = new Set([
  'section-00b-toc.html',
  'section-01-insight.html',
  'section-05-solution.html',
  'section-06-product.html',
  'section-11-team.html',
]);

// ── Read CSS ────────────────────────────────────────────────────────────────
const css = readFileSync(join(parentDir, '_design-system.css'), 'utf-8');
const fontsCss = readFileSync(join(parentDir, 'fonts', 'fonts-local.css'), 'utf-8');

// ── Extract <style> and <body> from each section ────────────────────────────
function extractParts(html) {
  // Extract inline <style> blocks (section-specific CSS)
  const styleBlocks = [];
  const styleRe = /<style>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = styleRe.exec(html)) !== null) {
    styleBlocks.push(m[1]);
  }

  // Extract body content
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : '';

  // Remove photo placeholder divs from team section
  body = body.replace(/<div class="team-profile__photo">Photo<\/div>\s*/g, '');

  return { styles: styleBlocks.join('\n'), body };
}

// ── Fix image paths for version-b section files ─────────────────────────────
// Version-b section files already use ../screens/ paths, but original section
// files use screens/ paths. We need to rewrite original paths to ../screens/
function fixImagePaths(body, isVersionB) {
  if (!isVersionB) {
    // Original files: screens/ -> ../screens/
    body = body.replace(/src="screens\//g, 'src="../screens/');
  }
  // Version-b files already have ../screens/ paths, no change needed
  return body;
}

// ── Collect all parts ───────────────────────────────────────────────────────
let allStyles = '';
let allBodies = '';

for (const file of SECTIONS) {
  const isVersionB = VERSION_B_SECTIONS.has(file);
  const filePath = isVersionB ? join(__dirname, file) : join(parentDir, file);
  const html = readFileSync(filePath, 'utf-8');
  let { styles, body } = extractParts(html);

  if (!isVersionB) {
    // Strip textual em dashes from parent sections (preserve CSS custom properties)
    body = body.replace(/(?<!=)--(?![\w-])/g, ', ');
    body = body.replace(/&mdash;/g, ', ');
    body = body.replace(/—/g, ', ');
    body = body.replace(/–/g, ' to ');
  }

  const fixedBody = fixImagePaths(body, isVersionB);
  allStyles += `\n/* === ${file}${isVersionB ? ' (version-b)' : ''} === */\n${styles}\n`;
  allBodies += `\n<!-- ═══ ${file}${isVersionB ? ' (version-b)' : ''} ═══ -->\n${fixedBody}\n`;
}

// ── Print-safe overrides ────────────────────────────────────────────────────
const printOverrides = `
/* ============================================================================
   PRINT + PDF OVERRIDES
   ============================================================================ */

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

/* Glass -> solid fallback for PDF */
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
.founder-card,
.advisor-card,
.module-item {
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

/* Definition box should keep its amber border in PDF */
.definition-box {
  background: rgba(245,240,232,0.85) !important;
  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
}

/* Product columns should keep their colored left borders */
.product-col--physical {
  background: rgba(139,158,124,0.06) !important;
  border-left: 3px solid rgba(139,158,124,0.5) !important;
}
.product-col--digital {
  background: rgba(196,149,106,0.06) !important;
  border-left: 3px solid rgba(196,149,106,0.5) !important;
}

/* Founder card border fix for highlighted Pro tier */
.four-col .glass[style*="border: 2px solid"] {
  border: 2px solid var(--amber) !important;
}

/* Page dimensions and breaks */
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
  }
  body::before {
    display: none !important;
  }
  .page {
    page-break-after: always;
    page-break-inside: avoid;
    overflow: hidden;
  }
  .page:last-child {
    page-break-after: auto;
  }
}

/* Ensure pages don't overflow in screen view either */
.page {
  overflow: hidden;
}

/* ============================================================================
   GLOBAL OVERFLOW FIXES
   ============================================================================ */

/* All images: prevent horizontal overflow */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* All tables: prevent horizontal overflow */
table {
  width: 100%;
  table-layout: fixed;
}

table td,
table th {
  word-wrap: break-word;
  overflow-wrap: break-word;
}

/* Custom grid containers: prevent overflow */
.founder-grid,
.team-row,
.product-columns,
.gap-visual,
.module-grid,
.screen-grid-3,
.screen-grid-2,
.screen-row-inline,
.flow-steps,
.descent {
  max-width: 100%;
}

/* Membership tier four-col: ensure small enough font sizes */
.four-col .tier-card {
  padding: var(--space-2) var(--space-1);
}

.four-col .tier-card__price {
  font-size: var(--text-lg);
}

.four-col .tier-card__features {
  font-size: 7.5px;
  line-height: 1.45;
}

.four-col .section-label {
  font-size: 8px;
}
`;

// ── Assemble combined HTML ──────────────────────────────────────────────────
const combined = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alche - Pre-Seed Pitch Book (Version B)</title>

  <!-- Google Fonts (fallback) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

  <style>
${fontsCss}
${css}
${allStyles}
${printOverrides}
  </style>
</head>
<body>
${allBodies}
</body>
</html>
`;

// ── Write combined HTML ─────────────────────────────────────────────────────
const htmlPath = join(__dirname, 'version-b.html');
writeFileSync(htmlPath, combined, 'utf-8');
console.log(`Combined HTML written: ${htmlPath}`);
console.log(`  Sections: ${SECTIONS.length}`);
console.log(`  Version-B sections: ${VERSION_B_SECTIONS.size}`);
console.log(`  Size: ${(Buffer.byteLength(combined) / 1024).toFixed(0)} KB`);

// Render PDF using screenshot-per-page approach (guarantees correct font rendering)
import { renderPDF } from '../render-pdf.mjs';
const pdfPath = join(__dirname, 'version-b.pdf');
renderPDF(htmlPath, pdfPath).then(() => {
  console.log(`PDF rendered: ${pdfPath}`);
}).catch((err) => {
  console.error('PDF render failed:', err.message);
  console.log('Combined HTML is still available at:', htmlPath);
  process.exit(1);
});
