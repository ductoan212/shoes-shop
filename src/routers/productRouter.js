var express = require('express');
var Product = require('../models/productModel.js');
var { isAdmin } = require('../utils.js');
var data = require('../data.js');

const productRouter = express.Router();

productRouter.get('/', isAdmin, async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Product.countDocuments({});
  const products = await Product.find({})
    .skip(pageSize * (page - 1))
    .limit(pageSize);

  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('productListAdmin', {
    isLogin,
    user,
    products,
    page,
    pages: Math.ceil(count / pageSize),
  });
});

// productRouter.get('/seed', async (req, res) => {
//   await Product.remove({});
//   const createProducts = await Product.insertMany(data.products);
//   res.send({ createProducts });
// });

productRouter.get('/search', async (req, res) => {
  const pageSize = 2;
  const page = Number(req.query.pageNumber) || 1;
  const name = req.query.name || '';
  const brand = req.query.brand || '';
  const category = req.query.category || '';
  const order = req.query.order || '';
  const min =
    req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
  const max =
    req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;

  const nameFilter = name ? { name: { $regex: name, $options: '$i' } } : {};
  const categoryFilter = category ? { category } : {};
  const brandFilter = brand ? { brand } : {};
  const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
  const sortOrder =
    order === 'lowest'
      ? { price: 1 }
      : order === 'highest'
      ? { price: -1 }
      : { _id: -1 };

  const count = await Product.countDocuments({
    ...nameFilter,
    ...categoryFilter,
    ...brandFilter,
    ...priceFilter,
  });

  const products = await Product.find({
    ...nameFilter,
    ...categoryFilter,
    ...brandFilter,
    ...priceFilter,
  })
    .sort(sortOrder)
    .skip(pageSize * (page - 1))
    .limit(pageSize);
  const query = {
    pages: Math.ceil(count / pageSize),
    page,
    name,
    brand,
    category,
    order,
    min,
    max,
    count,
  };
  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  // console.log({ products });
  res.render('search', {
    isLogin,
    user,
    query,
    products,
  });
});

productRouter.get('/create', isAdmin, async (req, res) => {
  let error =
    req.session.error && req.session.error.productCreate
      ? req.session.error.productCreate
      : '';
  req.session.error = {};

  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('productCreate', { isLogin, user, error });
});

productRouter.post('/create', isAdmin, async (req, res) => {
  const {
    name,
    image,
    brand,
    category,
    description,
    oldPrice,
    price,
    size,
    countInStock,
  } = req.body;

  // check size and stock
  const sizes = size.split(',');
  const countInStocks = countInStock.split(',');
  if (sizes.length != countInStocks.length) {
    req.session.error = {
      productCreate: "Size and Count in stock doesn't match.",
    };
    res.redirect('/product/create');
    return;
  }
  var sizeAndStock = [];
  for (let i = 0; i < sizes.length; i++) {
    sizeAndStock.push({
      numSize: sizes[i],
      countInStock: countInStocks[i],
    });
  }

  // check product name
  const findProduct = await Product.find({ name });
  if (findProduct.length !== 0) {
    req.session.error = {
      productCreate: 'Name of product is exists',
    };
    res.redirect('/product/create');
    return;
  }

  // save product
  const product = new Product({
    name,
    image,
    brand,
    category,
    description,
    oldPrice,
    price,
    sizeAndStock,
    numSold: 0,
    rating: 0,
    numReviews: 0,
  });
  const createProduct = await product.save(function (err) {
    if (err) {
      req.session.error = {
        productCreate: "Can't create product.",
      };
      res.redirect('/product/create');
    } else {
      res.redirect('/product');
    }
  });
});

productRouter.get('/edit/:id', isAdmin, async (req, res) => {
  let error =
    req.session.error && req.session.error.productEdit
      ? req.session.error.productEdit
      : '';
  req.session.error = {};
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    res.redirect('/product');
  }
  size = [];
  countInStock = [];
  for (let i = 0; i < product.sizeAndStock.length; i++) {
    size.push(product.sizeAndStock[i].numSize);
    countInStock.push(product.sizeAndStock[i].countInStock);
  }

  product.size = size.join(',');
  product.countInStock = countInStock.join(',');

  const isLogin = req.session.user ? true : false;
  const user = req.session.user ? req.session.user : {};
  res.render('productEdit', { isLogin, user, product, error });
});

productRouter.post('/edit/:id', isAdmin, async (req, res) => {
  const id = req.params.id;
  const {
    name,
    image,
    brand,
    category,
    description,
    oldPrice,
    price,
    size,
    countInStock,
  } = req.body;
  const sizes = size.split(',');
  const countInStocks = countInStock.split(',');
  if (sizes.length != countInStocks.length) {
    req.session.error = {
      productEdit: "Size and Count in stock doesn't match.",
    };
    res.redirect(`/product/edit/${id}`);
    return;
  }
  var sizeAndStock = [];
  for (let i = 0; i < sizes.length; i++) {
    sizeAndStock.push({
      numSize: sizes[i],
      countInStock: countInStocks[i],
    });
  }
  const product = await Product.findById(id);
  if (product) {
    product.name = name;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.description = description;
    product.oldPrice = oldPrice;
    product.price = price;
    product.sizeAndStock = sizeAndStock;

    const updatedProduct = product.save(function (err) {
      if (err) {
        req.session.error = {
          productEdit: 'Name of product is exists',
        };
        res.redirect(`/product/edit/${id}`);
      } else {
        res.redirect('/product');
      }
    });
  } else {
    res.redirect('/product');
  }
});

productRouter.get('/delete/:id', isAdmin, async (req, res) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (product) {
    const deleteProduct = await product.remove();
  }
  res.redirect('/product');
});

module.exports = productRouter;
