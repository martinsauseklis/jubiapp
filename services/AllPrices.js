const { getAlkoutletPrice } = require('./PriceAlkoutlet');
const { getCesuPrice } = require('./PriceCesu');
const { getMaximaPrice } = require('./PriceMaxima');
const { getRimiPrice } = require('./PriceRimi');
const { getSpiritsPrice } = require('./PriceSpirits');
const { getTopPrice } = require('./PriceTop');
const { getVynotekaPrice } = require('./PriceVynoteka');

async function getAllPrices() {
  const prices = [];
  await getAlkoutletPrice('https://alkoutlet.lv/catalogsearch/result/?q=piebalgas%20jubilejas')
    .then((priceUrl) => prices.push({ name: 'alkoutlet', priceUrl }));
  await getCesuPrice('https://veikals.cesualus.lv/collections/piebalgas-alus/products/piebalgas-jubilejas-5-2-0-5l')
    .then((priceUrl) => prices.push({ name: 'cesu', priceUrl }));
  await getMaximaPrice('https://www.barbora.lv/meklet?q=Jubilejas%2520alus')
    .then((priceUrl) => prices.push({ name: 'maxima', priceUrl }));
  await getRimiPrice('https://www.rimi.lv/e-veikals/lv/meklesana?query=piebalgas%20jubilejas')
    .then((priceUrl) => prices.push({ name: 'rimi', priceUrl }));
  await getSpiritsPrice('https://www.spiritsandwine.lv/lv/?search=piebalgas+jubilejas')
    .then((priceUrl) => prices.push({ name: 'spirits', priceUrl }));
  await getTopPrice('https://etop.lv/index.php?route=product/search&search=piebalgas%20jubilejas')
    .then((priceUrl) => prices.push({ name: 'top', priceUrl }));
  await getVynotekaPrice('https://vynoteka.lv/piebalgas-jubilejas-alus-pud-05l-52')
    .then((priceUrl) => prices.push({ name: 'vynoteka', priceUrl }));

  return prices;
}

module.exports.getAllPrices = getAllPrices;
