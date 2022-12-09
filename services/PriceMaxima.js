const puppetteer = require('puppeteer');

async function getMaximaPrice(url) {
  const browser = await puppetteer.launch();

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  const price = await page.$$eval('span.b-product-price-current-number', (el) => el[0].getAttribute('content'))
    .then((result) => Number.parseFloat(result)).catch(() => new Error('Maxima not fetched').message);

  await browser.close();

  return { price, url: page.url(), img: 'https://www.maxima.lv/images/front/logos/maxima.svg' };
}

module.exports.getMaximaPrice = getMaximaPrice;
