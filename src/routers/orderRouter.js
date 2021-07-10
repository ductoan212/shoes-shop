var express = require('express');
const Order = require('../models/orderModel.js');
const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');
var { isAdmin, isLogin } = require('../utils.js');

const orderRouter = express.Router();

//============================= ORDER FOR ADMIN =============================
orderRouter.get('/', isAdmin, async (req, res) => {
  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('orderListAdmin', { isLogin, user });
});

orderRouter.get('/id/:id', isAdmin, async (req, res) => {
  const id = req.params.id;
  const user = req.session.user;
  const orderOfId = await Order.findById(id);
  res.json({ orderOfId });
  // res.render('orderListAdmin', { isLogin: true, user });
});

//============================= ORDER FOR USER =============================
orderRouter.get('/user', isLogin, async (req, res) => {
  const user = req.session.user;
  const ordersOfUser = await Order.find({ userId: user._id });
  res.json({ ordersOfUser });
  // res.render('orderListUser', { isLogin: true, user });
});

orderRouter.get('/user/id/:id', isLogin, async (req, res) => {
  const user = req.session.user;
  const id = req.params.id;
  const ordersOfId = await Order.findById(id);
  res.json({ ordersOfId });
  // res.render('orderListUser', { isLogin: true, user });
});

module.exports = orderRouter;
