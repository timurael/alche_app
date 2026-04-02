/**
 * Build Version A combined pitch book HTML + render PDF via Playwright.
 *
 * - Sections 05, 06, 11: read from ./ (version-a modified files)
 * - All other sections: read from ../ (original files)
 * - CSS: read from ../_design-system.css
 *
 * Usage:  node build.mjs
 * Output: version-a.html  +  version-a.pdf
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const parentDir = join(__dirname, '..');

// ── Section files in order ──────────────────────────────────────────────────
// Map: filename -> directory to read from
const SECTIONS = [
  { file: 'section-00-cover.html',          dir: parentDir },
  { file: 'section-00b-toc.html',           dir: __dirname },   // Version A TOC
  { file: 'section-01-insight.html',        dir: __dirname },   // Version A
  { file: 'section-02-who-we-serve.html',   dir: parentDir },
  { file: 'section-03-market.html',         dir: parentDir },
  { file: 'section-04-competitive.html',    dir: parentDir },
  { file: 'section-05-solution.html',       dir: __dirname },   // Version A
  { file: 'section-06-product.html',        dir: __dirname },   // Version A
  { file: 'section-07-business-model.html', dir: parentDir },
  { file: 'section-08-go-to-market.html',   dir: parentDir },
  { file: 'section-09-traction.html',       dir: parentDir },
  { file: 'section-10-moat.html',           dir: parentDir },
  { file: 'section-11-team.html',           dir: __dirname },   // Version A
  { file: 'section-12-ask.html',            dir: parentDir },
  { file: 'section-13-closing.html',        dir: parentDir },
];

// ── Read CSS ────────────────────────────────────────────────────────────────
const css = readFileSync(join(parentDir, '_design-system.css'), 'utf-8');
const fontsCss = readFileSync(join(parentDir, 'fonts', 'fonts-local.css'), 'utf-8');

// ── Extract <style> and <body> from each section ────────────────────────────
function extractParts(html, fromVersionA) {
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

  // For original sections (not version-a), fix screen image paths
  // Original sections use src="screens/..." which needs to become src="../screens/..."
  if (!fromVersionA) {
    body = body.replace(/src="screens\//g, 'src="../screens/');
  }

  // Replace textual em dashes (but not CSS custom properties like var(--...))
  // Only replace -- that appears between word characters (textual em dash usage)
  body = body.replace(/(\w)\s*--\s*(\w)/g, '$1, $2');
  body = body.replace(/&mdash;/g, ', ');
  body = body.replace(/\u2014/g, ', ');   // literal em dash character
  body = body.replace(/\u2013/g, ' to '); // literal en dash character

  return { styles: styleBlocks.join('\n'), body };
}

// ── Collect all parts ───────────────────────────────────────────────────────
let allStyles = '';
let allBodies = '';

for (const { file, dir } of SECTIONS) {
  const html = readFileSync(join(dir, file), 'utf-8');
  const fromVersionA = dir === __dirname;
  const { styles, body } = extractParts(html, fromVersionA);
  allStyles += `\n/* === ${file} === */\n${styles}\n`;
  allBodies += `\n<!-- ═══ ${file} ═══ -->\n${body}\n`;
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
.pillar-card,
.journey-flow__step,
.feedback-loop__step,
.app-module {
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

/* Info system hub should keep its amber border in PDF */
.info-system-hub {
  -webkit-backdrop-filter: none !important;
  backdrop-filter: none !important;
  background: rgba(196,149,106,0.08) !important;
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

// ── Assemble combined HTML ──────────────────────────────────────────────────
const combined = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alche - Pre-Seed Pitch Book (Version A)</title>

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
const htmlPath = join(__dirname, 'version-a.html');
writeFileSync(htmlPath, combined, 'utf-8');
console.log(`Combined HTML written: ${htmlPath}`);
console.log(`  Sections: ${SECTIONS.length}`);
console.log(`  Size: ${(Buffer.byteLength(combined) / 1024).toFixed(0)} KB`);

// ── Render PDF via Playwright ───────────────────────────────────────────────
// Render PDF using screenshot-per-page approach (guarantees correct font rendering)
import { renderPDF } from '../render-pdf.mjs';
const pdfPath = join(__dirname, 'version-a.pdf');
renderPDF(htmlPath, pdfPath).then(() => {
  console.log(`PDF rendered: ${pdfPath}`);
}).catch((err) => {
  console.error('PDF render failed:', err.message);
  console.log('Combined HTML is still available at:', htmlPath);
  process.exit(1);
});
