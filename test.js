const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.setViewport({width: 1080, height: 1980});
  await page.goto('https://www.idnes.cz/');
  const els = await page.$$("a.art-link");
  await els[0].click();
  await page.waitForTimeout(3000);
  await page.screenshot("idnes.png");

  await browser.close();
})();