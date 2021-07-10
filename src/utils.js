module.exports.isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.isAdmin) {
    next();
  } else {
    // res.status(401).send({ message: 'Invalid Admin Token' });
    res.redirect('/');
  }
};

module.exports.isLogin = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
};
