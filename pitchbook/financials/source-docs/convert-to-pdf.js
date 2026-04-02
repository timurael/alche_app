const { chromium } = require('playwright');
const path = require('path');

async function convertToPDF() {
  console.log('Launching browser...');
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'PNL_INVESTOR_BRIEF.html');
  const pdfPath = path.resolve(__dirname, 'PNL_INVESTOR_BRIEF.pdf');

  console.log(`Loading HTML from: ${htmlPath}`);
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  // Wait for fonts to load
  await page.evaluate(() => document.fonts.ready);
  console.log('Fonts loaded, waiting 1 second for final render...');
  await page.waitForTimeout(1000);

  console.log('Generating PDF...');
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });

  await browser.close();
  console.log(`✓ PDF saved to: ${pdfPath}`);
}

convertToPDF().catch(error => {
  console.error('Error converting to PDF:', error);
  process.exit(1);
});
