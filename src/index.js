const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const userRouter = require('./routers/userRouter');
const productRouter = require('./routers/productRouter');
const orderRouter = require('./routers/orderRouter');
const cartRouter = require('./routers/cartRouter');
const Product = require('./models/productModel');
const fileUpload = require('express-fileupload');

dotenv.config();

var app = express();

// Middleware
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());
app.use(express.urlencoded());

// Session
app.use(
  session({
    secret: 'SECRET',
    resave: true,
    saveUninitialized: true,
    user: {},
    cart: { cartItems: [], total: 0 },
    error: {},
    cookie: { maxAge: 3600000 * 24 * 1 }, // 1 day
  })
);

// View engine
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'ejs');

// fileUpload
app.use(fileUpload());

// connect to mongodb cloud
mongoose.connect('mongodb://localhost:27017/shoe_shop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/order', orderRouter);
app.use('/cart', cartRouter);
app.get('/aboutus', async (req, res) => {
  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('aboutUs', { isLogin, user });
});
app.get('/', async (req, res) => {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
  localStorage.setItem('cartItems', []);

  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  const interestProduct = await Product.find({}).limit(4);
  res.render('index', { isLogin, user, interestProduct });
});
app.get('*', async (req, res) => {
  res.render('404');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
