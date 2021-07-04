var express = require('express');
var User = require('../models/userModel.js');
var { isAdmin } = require('../utils.js');

const orderRouter = express.Router();

orderRouter.get('/', isAdmin, async (req, res) => {
  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('orderListAdmin', { isLogin, user });
});

orderRouter.get('/user/:id', async (req, res) => {
  const id = req.params.id;
  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('orderListUser', { isLogin, user });
});

module.exports = orderRouter;
