const puppetteer = require('puppeteer');

async function getTopPrice(url) {
  const browser = await puppetteer.launch();

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  const price = await page.$$eval('span.price_per_unit', (el) => el[0].innerHTML)
    .then((result) => Number.parseFloat(result.match(/\d(,|\.)\d{2}/)[0]
      .replace(',', '.')) / 2).catch(() => new Error('Top not fetched').message);

  await browser.close();

  return { price, url: page.url(), img: 'https://etop.lv/image/catalog/Vietejais%20Top%20logo-01.png' };
}

module.exports.getTopPrice = getTopPrice;
