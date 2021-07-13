var express = require('express');
const nodemailer = require('nodemailer');
const Order = require('../models/orderModel.js');
const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');
var { isAdmin, isLogin } = require('../utils.js');

const orderRouter = express.Router();

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'flowershop212@gmail.com',
    pass: 'Flowershop212@',
  },
});

function sendMail(reciver, subject, content) {
  var mailOptions = {
    from: '"TVT ShoeShop" <foo@example.com>',
    to: reciver,
    subject: subject,
    html: content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(`Mail sent: ${info.response}`);
    }
  });
}
//============================= ORDER FOR ADMIN =============================
orderRouter.get('/', isAdmin, async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const user = req.session.user;
  const count = await Order.countDocuments({});
  const orders = await Order.find({})
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 })
    .limit(pageSize);

  res.render('orderListAdmin', {
    isLogin: true,
    user,
    orders,
    page,
    pages: Math.ceil(count / pageSize),
  });
});

orderRouter.get('/id/:id', isAdmin, async (req, res) => {
  const id = req.params.id;
  const user = req.session.user;
  const orderOfId = await Order.findById(id);
  res.json({ orderOfId });
  // res.render('orderListAdmin', { isLogin: true, user });
});

orderRouter.get('/confirmed/:id', isAdmin, async (req, res) => {
  const id = req.params.id;
  const order = await Order.findById(id);
  if (order) {
    order.isConfirm = true;
    const confirmOrder = await order.save();
    const content = 'templateMail(dhCreated)';
    sendMail(
      confirmOrder.userInfo.email,
      `[Order ${confirmOrder._id}] (${confirmOrder.createdAt
        .toString()
        .substring(0, 10)})`,
      content
    );
  }
  res.redirect('/order');
});

orderRouter.get('/delivered/:id', isLogin, async (req, res) => {
  const id = req.params.id;
  const order = await Order.findById(id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();
    const confirmOrder = await order.save();
  }
  res.redirect('/order/user');
});

orderRouter.get('/delete/:id', isLogin, async (req, res) => {
  const id = req.params.id;
  const redirect = req.query.redirect;
  const order = await Order.findById(id);
  if (order) {
    const deletedOrder = await order.remove();
  }
  res.redirect(redirect);
});

orderRouter.get('/detail/:id', isLogin, async (req, res) => {
  const user = req.session.user;
  const id = req.params.id;
  const ordersOfId = await Order.findById(id);
  const { _id, items, total, userInfo, isConfirm, isDelivered, deliveredAt } =
    ordersOfId;
  res.render('detailOrder', {
    isLogin: true,
    user,
    _id,
    items,
    total,
    userInfo,
    isConfirm,
    isDelivered,
    deliveredAt,
  });
});

//============================= ORDER FOR USER =============================
orderRouter.get('/user', isLogin, async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const user = req.session.user;
  const count = await Order.countDocuments({ userId: user._id });
  const ordersOfUser = await Order.find({ userId: user._id })
    .skip(pageSize * (page - 1))
    .sort({ createdAt: -1 })
    .limit(pageSize);

  res.render('orderListUser', {
    isLogin: true,
    user,
    ordersOfUser,
    page,
    pages: Math.ceil(count / pageSize),
  });
});

orderRouter.get('/user/id/:id', isLogin, async (req, res) => {
  const user = req.session.user;
  const id = req.params.id;
  const ordersOfId = await Order.findById(id);
  res.json({ ordersOfId });
});

orderRouter.get('/checkout', async (req, res) => {
  const { cartItems, total } = req.session.cart;
  if (cartItems.length <= 0 || total <= 0) {
    res.redirect('/cart');
    return;
  }
  if (!req.session.user) {
    res.redirect('/user/login?redirect=/cart');
  }
  const user = req.session.user;
  const order = new Order({
    items: [...req.session.cart.cartItems],
    total: req.session.cart.total,
    userId: user._id,
    userInfo: {
      ...user,
    },
    isConfirm: false,
    isDelivered: false,
  });
  const createOrder = await order.save();
  if (createOrder) {
    req.session.cart.cartItems = [];
    req.session.cart.total = 0;
  }
  // res.json({ cartItems, total });
  res.redirect('/order/user');
});

module.exports = orderRouter;
