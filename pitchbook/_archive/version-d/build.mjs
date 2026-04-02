/**
 * Build Version D combined pitch book HTML + render PDF via Playwright.
 *
 * Usage:  node build.mjs
 * Output: version-d.html  +  version-d.pdf
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const parentDir = join(__dirname, '..');

// Section files in order: [source_dir, filename]
const SECTIONS = [
  [parentDir, 'section-00-cover.html'],
  [__dirname, 'section-00b-toc.html'],
  [__dirname, 'section-01-insight.html'],
  [parentDir, 'section-02-who-we-serve.html'],
  [parentDir, 'section-03-market.html'],
  [parentDir, 'section-04-competitive.html'],
  [__dirname, 'section-05-solution.html'],
  [__dirname, 'section-06-product.html'],
  [parentDir, 'section-07-business-model.html'],
  [parentDir, 'section-08-go-to-market.html'],
  [parentDir, 'section-09-traction.html'],
  [parentDir, 'section-10-moat.html'],
  [__dirname, 'section-11-team.html'],
  [parentDir, 'section-12-ask.html'],
  [parentDir, 'section-13-closing.html'],
];

// Read CSS
const css = readFileSync(join(parentDir, '_design-system.css'), 'utf-8');
const fontsCss = readFileSync(join(parentDir, 'fonts', 'fonts-local.css'), 'utf-8');

// Extract <style> and <body> from each section
function extractParts(html, sourceDir) {
  // Extract inline <style> blocks
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

  // Fix image paths: files from parent dir use screens/ which needs ../screens/
  // Files from version-d already use ../screens/ which needs ../screens/ (relative to HTML output)
  if (sourceDir === parentDir) {
    // Parent files: screens/ -> ../screens/
    body = body.replace(/src="screens\//g, 'src="../screens/');
  }
  // version-d files already use ../screens/ which is correct relative to version-d/

  // Remove em dashes from body text content:
  // Replace &mdash; and &ndash; entities
  body = body.replace(/&mdash;/g, ',');
  body = body.replace(/&ndash;/g, ',');
  // Replace unicode em dash and en dash
  body = body.replace(/\u2014/g, ',');
  body = body.replace(/\u2013/g, ',');
  // Replace text-level double hyphens used as em dashes (surrounded by spaces or at word boundaries)
  // but NOT CSS custom properties like var(--amber)
  body = body.replace(/(?<![a-zA-Z0-9(\/\-])--(?![a-zA-Z0-9)\->])/g, ',');
  // Also handle common patterns: "word -- word" or "word --" at end
  body = body.replace(/ -- /g, '. ');
  body = body.replace(/ --$/gm, '.');

  return { styles: styleBlocks.join('\n'), body };
}

// Collect all parts
let allStyles = '';
let allBodies = '';

for (const [sourceDir, file] of SECTIONS) {
  const html = readFileSync(join(sourceDir, file), 'utf-8');
  const { styles, body } = extractParts(html, sourceDir);
  allStyles += `\n/* === ${file} === */\n${styles}\n`;
  allBodies += `\n<!-- === ${file} === -->\n${body}\n`;
}

// Print-safe overrides
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
.persona-card {
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
`;

// Assemble combined HTML
const combined = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alche: Pre-Seed Pitch Book (Version D)</title>

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

// Write combined HTML
const htmlPath = join(__dirname, 'version-d.html');
writeFileSync(htmlPath, combined, 'utf-8');
console.log(`Combined HTML written: ${htmlPath}`);
console.log(`  Sections: ${SECTIONS.length}`);
console.log(`  Size: ${(Buffer.byteLength(combined) / 1024).toFixed(0)} KB`);

// Render PDF using screenshot-per-page approach (guarantees correct font rendering)
import { renderPDF } from '../render-pdf.mjs';
const pdfPath = join(__dirname, 'version-d.pdf');
renderPDF(htmlPath, pdfPath).then(() => {
  console.log(`PDF rendered: ${pdfPath}`);
}).catch((err) => {
  console.error('PDF render failed:', err.message);
  console.log('Combined HTML is still available at:', htmlPath);
  process.exit(1);
});
