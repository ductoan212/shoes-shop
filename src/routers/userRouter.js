var express = require('express');
var User = require('../models/userModel.js');
var { isAdmin } = require('../utils.js');

const userRouter = express.Router();

userRouter.get('/', isAdmin, async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

userRouter.get('/login', async (req, res) => {
  res.render('login');
});

userRouter.get('/register', async (req, res) => {
  res.render('register');
});

// userRouter.post('/login', async (req, res) => {
//   const user = await User.findOne({ email: req.body.email });
//   if (user) {
//     if (bcrypt.compareSync(req.body.password, user.password)) {
//       res.send({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         isSeller: user.isSeller,
//         token: generateToken(user),
//       });
//       return;
//     }
//   }
//   res.status(401).send({ message: 'Invalid email or password' });
// });

// userRouter.post('/register', async (req, res) => {
//   const user = new User({
//     name: req.body.name,
//     email: req.body.email,
//     password: bcrypt.hashSync(req.body.password, 8),
//   });
//   const createUser = await user.save();
//   res.send({
//     _id: user._id,
//     name: user.name,
//     email: user.email,
//     isAdmin: user.isAdmin,
//     isSeller: user.isSeller,
//     token: generateToken(user),
//   });
// });

// userRouter.get('/:id', async (req, res) => {
//   const user = await User.findById(req.params.id);
//   if (user) {
//     res.send(user);
//   } else {
//     res.status(404).send({ message: 'User Not Found' });
//   }
// });

module.exports = userRouter;
