const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();
const pgp = require('pg-promise')();
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');
const saltRounds = 10;

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/gif/:tag', (req, res) => {
  const { tag } = req.params;
  fetch(`https://api.tenor.co/v1/random?q=${tag}&limit=1&key=${process.env.API_KEY}`)
    .then(response => response.json())
    .then(data => res.json(data));
});

app.post('/api/new-user', (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.one('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username', [
      username,
      hash,
    ])
      .then(data => {
        res.json({ status: 'OK', id: data.id, name: data.username });
      })
      .catch(error => console.log(error));
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.one('SELECT * FROM users WHERE username = $1', [username])
    .then(user => {
      if (!user) {
        console.log('User does not exist!');
      } else {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            res.json({ status: 'OK', id: user.id, username: user.username });
          } else {
            res.send('Incorrect Password');
            console.log('Incorrect Password');
          }
        });
      }
    })
    .catch(error => console.log(error));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
