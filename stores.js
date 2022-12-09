const stores = [
  {
    name: 'rimi',
    url: 'view-source:https://www.rimi.lv/e-veikals/lv/meklesana?query=piebalgas%20jubilejas',
    pricePattern: /"price": [0-9]\.[0-9]{2}/,
  },
  {
    name: 'maxima',
    url: 'https://www.barbora.lv/produkti/alus-jubilejas-gaisais-5-2-proc-500-ml-d',
    pricePattern: /€[0-9],[0-9]{2}/,
  },
  {
    name: 'spirits',
    url: 'https://www.spiritsandwine.lv/lv/?search=piebalgas+jubilejas',
    pricePattern: /[0-9]\.[0-9]{2} €/,
  },
  {
    name: 'cesu',
    url: 'https://veikals.cesualus.lv/collections/piebalgas-alus/products/piebalgas-jubilejas-5-2-0-5l',
    pricePattern: /. - €[0-9],[0-9]{2}/,
  },
  {
    name: 'top',
    url: 'https://etop.lv/index.php?route=product/search&search=piebalgas%20jubilejas',
    pricePattern: /[0-9],[0-9]{2}€/,
    elementNames: [['special_no_format_157053', 'cents'], 'price_no_format_157053'],
  },
  {
    name: 'alkoutlet',
    url: 'https://alkoutlet.lv/alus-piebalgas-jubilejas-5-2.html',
    pricePattern: /itemprop="price" content="[0-9]\.[0-9]{2}"/,
  },
  {
    name: 'vynoteka',
    url: 'https://vynoteka.lv/lv/product/search?query=jubilejas&page=1',
    pricePattern: /"price": "[0-9]\.[0-9]{2}"/,
  },
];

module.exports.stores = stores;
