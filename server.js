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
  fetch(`https://api.tenor.co/v1/random?q=${tag}&limit=1&key=LIVDSRZULELA`)
    .then((response) => response.json())
    .then((data) => res.json(data));
});

app.get('/api/high-scores', (req, res) => {
  db.any(
    `
  SELECT id(session), username, score, end_date
  FROM session, "user"
  WHERE score IS NOT NULL AND user_id = id("user")
  ORDER BY score DESC
  LIMIT 5;
  `,
  )
    .then((data) => {
      res.json(data);
    })
    .catch((error) => console.log(error));
});

app.post('/api/new-user', (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, saltRounds, (err, hash) => {
    db.one('INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id, username', [
      username,
      hash,
    ])
      .then((data) => {
        res.json({ status: 'OK', id: data.id, name: data.username });
      })
      .catch((error) => console.log(error));
  });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  db.one('SELECT * FROM "user" WHERE username = $1', [username])
    .then((user) => {
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
    .catch((error) => console.log(error));
});

app.post('/api/new-session', (req, res) => {
  const { userId, difficulty, triviaType, category } = req.body;
  db.one(
    `INSERT INTO session (user_id, difficulty, trivia_type, category, start_date )
      VALUES ($1, $2, $3, $4, now())
      RETURNING id`,
    [userId, difficulty, triviaType, category],
  )
    .then((response) => res.json({ status: 'OK', sessionId: response.id }))
    .catch((error) => console.log(error));
});

app.post('/api/end-session', (req, res) => {
  const { id, score } = req.body;
  db.one(
    `UPDATE session
      SET score = $1, end_date = now()
      WHERE id = $2
      RETURNING id`,
    [score, id],
  )
    .then((response) => res.json({ status: 'OK', sessionId: response.id }))
    .catch((error) => console.log(error));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
