var express = require('express');
var User = require('../models/userModel.js');
var { isAdmin } = require('../utils.js');

const productRouter = express.Router();

productRouter.get('/', isAdmin, async (req, res) => {
  res.json({ message: 'product router' });
});

productRouter.get('/search', async (req, res) => {
  const { query } = req.query;
  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('search', { isLogin, user, query });
});

module.exports = productRouter;
