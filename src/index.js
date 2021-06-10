const express = require('express');
const path = require('path');

var app = express();

// Middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  res.render('pages/index');
});

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
