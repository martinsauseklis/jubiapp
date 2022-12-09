const puppeteer = require('puppeteer');
const storeUrls = require('../stores');

const getPrices = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const finalArray = Promise.all(storeUrls.map((store) => browser.newPage()
    .then((page) => page.goto(store.url, { timeout: 60000 }))
    .then((result) => result.frame().content())
    .then((res) => {
      const patternFound = store.pricePattern.exec(res);
      if (patternFound[0]) {
        const stringPrice = patternFound[0];
        const pattern = /[0-9](\.|,)[0-9]{2}/;
        const numPrice = Number.parseFloat(pattern.exec(stringPrice)[0].replace(/,/, '.'));
        return { store: store.name, price: numPrice };
      }
      return { store: store.name, price: 'Try reload' };
    })));
  return finalArray;
};

module.exports.getPrices = getPrices;
