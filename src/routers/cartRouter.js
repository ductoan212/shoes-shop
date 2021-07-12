var express = require('express');
const Order = require('../models/orderModel.js');
const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');

const cartRouter = express.Router();

cartRouter.get('/', async (req, res) => {
  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};

  if (!req.session.cart) req.session.cart = { cartItems: [], total: 0 };
  if (!req.session.cart.cartItems) req.session.cart.cartItems = [];

  const { cartItems, total } = req.session.cart;
  res.render('cart', { isLogin, user, cartItems, total });
});

cartRouter.get('/add/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  // Lấy sl và size cho giày
  let qty = req.query.qty || 1;
  qty = qty * 1;
  let size = product.sizeAndStock[0].numSize;
  for (let i = 1; i < product.sizeAndStock.length; i++) {
    if (product.sizeAndStock[i].numSize == req.query.size) {
      size = product.sizeAndStock[i].numSize;
      break;
    }
  }

  // Check biến cart
  if (!req.session.cart) req.session.cart = { cartItems: [], total: 0 };
  if (!req.session.cart.cartItems) req.session.cart.cartItems = [];

  // Thêm vào giỏ
  let cartItems = [...req.session.cart.cartItems];
  let isExists = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].productId == product._id && cartItems[i].size == size) {
      cartItems[i].quantity += qty;
      cartItems[i].totalItem += qty * product.price;
      isExists = true;
      break;
    }
  }
  if (!isExists) {
    cartItems.push({
      productId: product._id,
      name: product.name,
      image: product.image,
      size: size,
      price: product.price,
      quantity: qty,
      totalItem: qty * product.price,
    });
  }
  req.session.cart.cartItems = [...cartItems];
  req.session.cart.total += qty * product.price;

  res.redirect('/cart');
});

cartRouter.get('/sub/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  // Lấy size cho giày
  const size = req.query.size || 0;
  if (size === 0) {
    res.redirect('/cart');
    return;
  }

  // Check biến cart trong session
  if (!req.session.cart) req.session.cart = { cartItems: [], total: 0 };
  if (!req.session.cart.cartItems) req.session.cart.cartItems = [];
  if (req.session.cart.cartItems == []) return;

  // Tiến hành xóa
  let cartItems = [...req.session.cart.cartItems];
  let isExists = false;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].productId == product._id && cartItems[i].size == size) {
      cartItems[i].quantity--;
      cartItems[i].totalItem -= product.price;
      if (cartItems[i].quantity == 0) {
        res.redirect(`/cart/remove/${id}?size=${size}`);
        return;
      }
      isExists = true;
      break;
    }
  }
  if (isExists) {
    req.session.cart.cartItems = [...cartItems];
    req.session.cart.total -= product.price;
  }

  res.redirect('/cart');
});

cartRouter.get('/remove/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  const size = req.query.size || product.sizeAndStock[0].numSize;

  if (!req.session.cart) req.session.cart = { cartItems: [], total: 0 };
  if (!req.session.cart.cartItems) req.session.cart.cartItems = [];
  if (req.session.cart.cartItems == []) return;

  let cartItems = [...req.session.cart.cartItems];
  let index = -1;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].productId == product._id && cartItems[i].size == size) {
      index = i;
      break;
    }
  }
  req.session.cart.cartItems = [
    ...cartItems.slice(0, index),
    ...cartItems.slice(index + 1),
  ];
  // res.json({ items: req.session.cart.cartItems });
  res.redirect('/cart');
});

module.exports = cartRouter;
