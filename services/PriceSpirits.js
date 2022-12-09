const puppetteer = require('puppeteer');

async function getSpiritsPrice(url) {
  const browser = await puppetteer.launch();

  const page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
  await page.goto(url);
  let price;
  try {
    price = await page.$$eval('div.product-price-sale', (el) => el[0].innerHTML.match(/\d\.\d{2}/)[0])
      .then((result) => parseFloat(result));
  } catch (error) {
    price = await page.$$eval('div.product-price', (el) => el[0].innerHTML.match(/\d\.\d{2}/)[0])
      .then((result) => parseFloat(result)).catch(() => new Error('Spirits not fetched').message);
  }
  await browser.close();

  return { price, url: page.url(), img: 'https://www.spiritsandwine.lv/assets/assets_v3/icons/header/header_logo.svg' };
}

module.exports.getSpiritsPrice = getSpiritsPrice;
