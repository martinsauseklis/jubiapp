const puppetteer = require('puppeteer');

async function getAlkoutletPrice(url) {
  const browser = await puppetteer.launch();

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  const price = await page.$$eval('span[data-price-type="finalPrice"]', (el) => el[0].getAttribute('data-price-amount'))
    .then((result) => Number.parseFloat(result)).catch(() => new Error('Alkoutlet not fetched').message);
  // data-price-type="" <- tas ir par 2 vai vairāk cenu,
  // bet, ja ir vecā cena vēl nostrīpota, tad ir oldPrice
  await browser.close();

  return { price, url: page.url(), img: 'https://alkoutlet.lv/media/logo/stores/1/Logo.png' };
}

module.exports.getAlkoutletPrice = getAlkoutletPrice;
