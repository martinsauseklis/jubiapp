const puppetteer = require('puppeteer');

async function getVynotekaPrice(url) {
  const browser = await puppetteer.launch();

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  const price = await page.$$eval('script[type="application/ld+json"]', (el) => JSON.parse(el[0].textContent))
    .then((result) => parseFloat(result.offers.price)).catch(() => new Error('Vynoteka not fetched').message);

  await browser.close();

  return { price, url: page.url(), img: 'https://vynoteka.lv/build/assets/images/vynoteka.svg' };
}

module.exports.getVynotekaPrice = getVynotekaPrice;
