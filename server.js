const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/dist', express.static('dist'));
app.set('view engine', 'hbs');


// Render index.hbs template
app.get('*', function (req, res) {
    res.render('index');
});

// Server stuff
app.listen(8080, function () {
    console.log('Listening on port 8080');
});
// Heroku
// const port = process.env.PORT || 8080;
// app.listen(port, function () {
//   console.log(`Listening on port number ${port}`);
// });

