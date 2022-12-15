/* eslint-disable no-console */

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { fetcher } = require('./services/IntervalFetcher');

const app = express();
const port = 54345;

app.use(cors());

fetcher();

setInterval(fetcher, 10800000); // every 3 hours
app.get('/', async (req, res) => {
  await fs.readFile('data.txt', async (err, data) => {
    if (err) {
      return res.send('Smth not right');
    }
    const parsedData = JSON.parse(data.toString());
    return res.send(parsedData);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
