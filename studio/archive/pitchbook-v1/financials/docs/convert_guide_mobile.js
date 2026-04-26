const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const htmlPath = path.resolve(__dirname, 'pnl_section_guide_mobile.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle' });

  // Wait for Google Fonts to load
  await page.waitForTimeout(2500);

  await page.pdf({
    path: path.resolve(__dirname, 'PNL_SECTION_GUIDE_MOBILE.pdf'),
    width: '390px',
    height: '844px',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  await browser.close();
  console.log('PDF saved: PNL_SECTION_GUIDE_MOBILE.pdf');
})();
