var express = require('express');
var User = require('../models/userModel.js');
var { isAdmin } = require('../utils.js');

const userRouter = express.Router();

userRouter.get('/', isAdmin, async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

userRouter.get('/login', async (req, res) => {
  if (req.session.user) {
    res.redirect('/');
  }
  let error =
    req.session.error && req.session.error.login ? req.session.error.login : '';
  req.session.error = {};
  res.render('login', { error });
});

userRouter.get('/register', async (req, res) => {
  let error =
    req.session.error && req.session.error.register
      ? req.session.error.register
      : '';
  req.session.error = {};
  res.render('register', { error });
});

userRouter.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (user) {
    if (user.password === req.body.password) {
      req.session.user = {
        _id: user._id,
        username: user.username,
        fullname: user.fullname,
        email: user.email,
        address: user.address,
        phonenumber: user.phonenumber,
        isAdmin: user.isAdmin,
      };
      res.redirect('/');
      return;
    }
  }
  req.session.error = { login: 'Invalid email or password' };
  res.redirect('/user/login');
});

userRouter.post('/register', async (req, res) => {
  const userTemp = await User.findOne({ username: req.body.username });
  if (userTemp) {
    req.session.error = { register: 'Username is exists' };
    res.redirect('/user/register');
    return;
  }
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
    address: req.body.address,
  });
  // await User.remove({});
  const createUser = await user.save();
  req.session.user = {
    _id: user._id,
    username: user.username,
    fullname: user.name,
    email: user.email,
    address: user.address,
    phonenumber: user.phonenumber,
    isAdmin: user.isAdmin,
  };
  res.redirect('/');
});

userRouter.get('/logout', (req, res) => {
  req.session.user = null;
  res.redirect('/');
});

module.exports = userRouter;
