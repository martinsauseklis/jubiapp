const fs = require('fs');
const { getAllPrices } = require('./AllPrices');

async function fetcher() {
  const data = await getAllPrices();
  await fs.writeFile('data.txt', JSON.stringify(data), () => console.log('Written!'));
}

module.exports.fetcher = fetcher;
