#!/usr/bin/env node
/**
 * HTML → PDF via Playwright (headless Chromium)
 *
 * Usage:
 *   node export-pdf.js <input.html> <output.pdf>
 *   echo "<html>...</html>" | node export-pdf.js --stdin <output.pdf>
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function htmlToPdf(htmlContent, outputPath, options = {}) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.setContent(htmlContent, { waitUntil: 'networkidle' });

  // Hide annotation UI elements before PDF export
  await page.evaluate(() => {
    document.querySelectorAll(
      '.annotation-sidebar, .annotation-marker, .note-popover, .annotation-toolbar, .note-highlight-overlay'
    ).forEach(el => el.style.display = 'none');
    // Remove highlight backgrounds from annotated elements
    document.querySelectorAll('[data-annotated]').forEach(el => {
      el.style.backgroundColor = '';
      el.style.outline = '';
    });
  });

  await page.pdf({
    path: outputPath,
    format: options.format || 'A4',
    printBackground: true,
    margin: {
      top: options.marginTop || '2cm',
      bottom: options.marginBottom || '2.5cm',
      left: options.marginLeft || '2cm',
      right: options.marginRight || '2cm',
    },
    displayHeaderFooter: false,
    preferCSSPageSize: true,
  });

  await browser.close();
  return outputPath;
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.error('Usage: node export-pdf.js <input.html> <output.pdf>');
    console.error('       node export-pdf.js --stdin <output.pdf>');
    process.exit(1);
  }

  let htmlContent;
  let outputPath;

  if (args[0] === '--stdin') {
    outputPath = args[1] || 'output.pdf';
    // Read HTML from stdin
    const chunks = [];
    for await (const chunk of process.stdin) {
      chunks.push(chunk);
    }
    htmlContent = Buffer.concat(chunks).toString('utf-8');
  } else {
    const inputPath = args[0];
    outputPath = args[1] || inputPath.replace(/\.html?$/i, '.pdf');

    if (!fs.existsSync(inputPath)) {
      console.error(`File not found: ${inputPath}`);
      process.exit(1);
    }
    htmlContent = fs.readFileSync(inputPath, 'utf-8');
  }

  try {
    const result = await htmlToPdf(htmlContent, outputPath);
    // Output the path as JSON for the Python server to parse
    console.log(JSON.stringify({ path: result, size: fs.statSync(result).size }));
  } catch (err) {
    console.error(JSON.stringify({ error: err.message }));
    process.exit(1);
  }
}

main();
