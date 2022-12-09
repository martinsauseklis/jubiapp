const puppetteer = require('puppeteer');

async function getRimiPrice(url) {
  const browser = await puppetteer.launch();

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  const price = await page.$$eval('div[data-gtm-eec-product]', (el) => el[0].getAttribute('data-gtm-eec-product'))
    .then((result) => JSON.parse(result).price).catch(() => new Error('Rimi not fetched').message);

  await browser.close();

  return { price, url: page.url(), img: 'https://www.rimi.lv/e-veikals/front/svg/vendor/rimi-logo.svg' };
}

module.exports.getRimiPrice = getRimiPrice;
