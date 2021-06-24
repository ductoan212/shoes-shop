const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const userRouter = require('./routers/userRouter');

var app = express();

// Middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

// View engine
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost:27017/shoe_shop',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use('/user', userRouter);
app.get('/', async (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('App is running on http://localhost:3000');
});
