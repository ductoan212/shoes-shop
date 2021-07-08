var express = require('express');

const cartRouter = express.Router();

cartRouter.get('/', async (req, res) => {
  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('cart', { isLogin, user });
});

module.exports = cartRouter;
