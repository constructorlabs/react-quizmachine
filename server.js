const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/gif/:tag', (req, res) => {
  const { tag } = req.params;
  fetch(`https://api.tenor.co/v1/random?q=${tag}&limit=1&key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(data => res.json(data));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
