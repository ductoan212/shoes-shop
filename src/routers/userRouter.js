var express = require('express');
var User = require('../models/userModel.js');
var { isAdmin, isLogin } = require('../utils.js');
var data = require('../data.js');

const userRouter = express.Router();

userRouter.get('/', isAdmin, async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const count = await User.countDocuments({});
  const users = await User.find({})
    .skip(pageSize * (page - 1))
    .limit(pageSize);

  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('userListAdmin', {
    isLogin,
    user,
    users,
    page,
    pages: Math.ceil(count / pageSize),
  });
});

userRouter.get('/seed', async (req, res) => {
  await User.remove({});
  const createUsers = await User.insertMany(data.users);
  res.send({ createUsers });
});

userRouter.get('/login', async (req, res) => {
  if (req.session.user) {
    res.redirect('/');
  }
  let error =
    req.session.error && req.session.error.login ? req.session.error.login : '';
  req.session.error = {};
  const redirect = req.query.redirect || '';
  res.render('login', { error, redirect });
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
        phoneNumber: user.phoneNumber,
        isAdmin: user.isAdmin,
      };
      const redirect = req.query.redirect || '';
      if (redirect) {
        res.redirect(redirect);
        return;
      }
      res.redirect('/');
      return;
    }
  }
  req.session.error = { login: 'Invalid username or password' };
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
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
  });
  // await User.remove({});
  const createUser = await user.save();
  req.session.user = {
    _id: user._id,
    username: user.username,
    fullname: user.fullname,
    email: user.email,
    address: user.address,
    phoneNumber: user.phoneNumber,
    isAdmin: user.isAdmin,
  };
  res.redirect('/');
});

userRouter.get('/logout', (req, res) => {
  req.session.user = null;
  res.redirect('/');
});

userRouter.get('/profile', isLogin, async (req, res) => {
  const user = req.session.user;
  const error =
    req.session.error && req.session.error.profile
      ? req.session.error.profile
      : '';
  const success =
    req.session.success && req.session.success.profile
      ? req.session.success.profile
      : '';
  req.session.success = {};
  req.session.error = {};
  res.render('profile', { isLogin: true, user, success, error });
});

userRouter.post('/update', isLogin, async (req, res) => {
  const user = await User.findById(req.session.user._id);
  if (!user) {
    res.redirect('/user/profile');
    return;
  }
  const {
    username,
    fullname,
    email,
    currentPassword,
    newPassword,
    newPasswordRepeat,
    address,
    phoneNumber,
  } = req.body;

  const userTemp = await User.findOne({ username });
  if (userTemp && username != user.username) {
    req.session.error = { profile: 'Username is exists.' };
    res.redirect('/user/profile');
    return;
  }

  if (currentPassword && newPassword && newPasswordRepeat) {
    if (newPassword != newPasswordRepeat || currentPassword != user.password) {
      req.session.error = { profile: 'Update password fail.' };
      res.redirect('/user/profile');
      return;
    } else {
      user.password = newPassword;
    }
  }
  user.username = username;
  user.fullname = fullname;
  user.email = email;
  user.address = address;
  user.phoneNumber = phoneNumber;

  const updatedUser = await user.save();
  req.session.user = {
    _id: user._id,
    username: user.username,
    fullname: user.fullname,
    email: user.email,
    address: user.address,
    phoneNumber: user.phoneNumber,
    isAdmin: user.isAdmin,
  };
  req.session.success = { profile: 'Updated successfully.' };
  res.redirect('/user/profile');
});

userRouter.get('/delete/:id', isAdmin, async (req, res) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (user) {
    const deleteUser = await user.remove();
  }
  res.redirect('/user');
});

module.exports = userRouter;
