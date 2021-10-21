const express = require('express');
const axios = require('axios');
const redis = require('redis');
const app = express();

const client = redis.createClient(6379);

client.on('error', function (err) {
  console.log(err);
});

app.get('/', (req, res) => res.send(' Api : /api/v1'));

app.get('/api/v1', async (req, res) => {
  try {
    client.get('Characters', async (err, characters) => {
      if (err) {
        throw err;
      }
      if (characters) {
        res.status(200).send({
          characters: JSON.parse(characters),
          message: 'Data retrieved from the cache',
        });
      } else {
        const resp = await axios.get(`https://rickandmortyapi.com/api/character`);
        client.setex('Characters', 600, JSON.stringify(resp.data));
        res.status(200).send({
          characters: resp.data,
          message: 'cache miss',
        });
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
