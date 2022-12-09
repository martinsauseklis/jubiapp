const puppetteer = require('puppeteer');

async function getCesuPrice(url) {
  const browser = await puppetteer.launch();

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  const price = await page.$$eval('meta[property="og:price:amount"]', (el) => el[0].getAttribute('content'))
    .then((result) => parseFloat(result.replace(',', '.'))).catch(() => new Error('Cesu not fetched').message);

  await browser.close();

  return { price, url: page.url(), img: 'https://cdn.shopify.com/s/files/1/0365/9409/0123/files/logo-22_150x@2x.png?v=1618419327' };
}

module.exports.getCesuPrice = getCesuPrice;
