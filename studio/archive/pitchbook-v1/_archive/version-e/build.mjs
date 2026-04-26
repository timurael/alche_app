/**
 * Build Version E pitch book HTML + render PDF via Playwright.
 *
 * Usage:  node build.mjs
 * Output: version-e.html  +  version-e.pdf
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const parentDir = join(__dirname, '..');

// Section files in order, with source directory
const SECTIONS = [
  { file: 'section-00-cover.html',          dir: parentDir },
  { file: 'section-00b-toc.html',           dir: __dirname },   // NEW
  { file: 'section-01-insight.html',         dir: __dirname },   // MODIFIED (v2)
  { file: 'section-02-who-we-serve.html',    dir: parentDir },
  { file: 'section-03-market.html',          dir: parentDir },
  { file: 'section-04-competitive.html',     dir: __dirname },   // MODIFIED
  { file: 'section-05-solution.html',        dir: __dirname },   // MODIFIED
  { file: 'section-06-product.html',         dir: __dirname },   // MODIFIED
  { file: 'section-07-business-model.html',  dir: parentDir },
  { file: 'section-08-go-to-market.html',    dir: parentDir },
  { file: 'section-09-traction.html',        dir: parentDir },
  { file: 'section-10-moat.html',            dir: __dirname },   // MODIFIED
  { file: 'section-11-team.html',            dir: __dirname },   // MODIFIED
  { file: 'section-12-ask.html',             dir: __dirname },   // MODIFIED
  { file: 'section-13-closing.html',         dir: parentDir },
];

// Read CSS
const css = readFileSync(join(parentDir, '_design-system.css'), 'utf-8');
const fontsCss = ''; // fonts loaded via <link> tag from Google CDN

// Extract <style> and <body> from each section
function extractParts(html, fromParent) {
  const styleBlocks = [];
  const styleRe = /<style>([\s\S]*?)<\/style>/gi;
  let m;
  while ((m = styleRe.exec(html)) !== null) {
    styleBlocks.push(m[1]);
  }

  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/i);
  let body = bodyMatch ? bodyMatch[1] : '';

  // Remove photo placeholder divs
  body = body.replace(/<div class="team-profile__photo">Photo<\/div>\s*/g, '');

  // Fix image paths for parent-dir sections: screens/ -> ../screens/
  if (fromParent) {
    body = body.replace(/src="screens\//g, 'src="../screens/');
  }

  return { styles: styleBlocks.join('\n'), body };
}

// Collect all parts
let allStyles = '';
let allBodies = '';

for (const { file, dir } of SECTIONS) {
  const html = readFileSync(join(dir, file), 'utf-8');
  const fromParent = dir === parentDir;
  const { styles, body } = extractParts(html, fromParent);
  allStyles += `\n/* === ${file} === */\n${styles}\n`;
  allBodies += `\n<!-- === ${file} === -->\n${body}\n`;
}

// Strip em dashes from body content (textual -- , —, –, &mdash;, &ndash;)
// Only apply to body text, not CSS (which uses -- for custom properties)
allBodies = allBodies.replace(/ -- /g, ', ');
allBodies = allBodies.replace(/—/g, ',');
allBodies = allBodies.replace(/–/g, ',');
allBodies = allBodies.replace(/&mdash;/g, ',');
allBodies = allBodies.replace(/&ndash;/g, ',');

// Print-safe overrides
const printOverrides = `
/* ============================================================================
   PRINT + PDF OVERRIDES (Version E)
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
  .page, .cover {
    page-break-after: always;
    page-break-inside: avoid;
    overflow: hidden;
  }
  .page:last-child, .cover:last-child {
    page-break-after: auto;
  }
}

/* Ensure pages don't overflow in screen view either */
.page {
  overflow: hidden;
}

/* Print-safe overflow fixes */
img { max-width: 100% !important; height: auto !important; }
table { width: 100% !important; table-layout: fixed !important; }
td, th { word-wrap: break-word !important; }
`;

// Assemble combined HTML
const combined = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alche: Pre-Seed Pitch Book (Version E)</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">

  <style>
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
const htmlPath = join(__dirname, 'version-e.html');
writeFileSync(htmlPath, combined, 'utf-8');
console.log(`Combined HTML written: ${htmlPath}`);
console.log(`  Sections: ${SECTIONS.length}`);
console.log(`  Size: ${(Buffer.byteLength(combined) / 1024).toFixed(0)} KB`);

// Render PDF using screenshot-per-page approach (guarantees correct font rendering)
import { renderPDF } from '../render-pdf.mjs';
const pdfPath = join(__dirname, 'version-e.pdf');
renderPDF(htmlPath, pdfPath).then(() => {
  console.log(`PDF rendered: ${pdfPath}`);
}).catch((err) => {
  console.error('PDF render failed:', err.message);
  console.log('Combined HTML is still available at:', htmlPath);
  process.exit(1);
});
