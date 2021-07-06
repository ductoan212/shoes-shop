var mongoose = require('mongoose');

const productShema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    image: { type: String, require: true },
    brand: { type: String, require: true },
    category: { type: String, require: true },
    description: { type: String, require: true },
    oldPrice: { type: Number, require: true },
    price: { type: Number, require: true },
    sizeAndStock: [
      {
        numSize: { type: Number },
        countInStock: { type: Number },
      },
    ],
    numSold: { type: Number, require: true, default: 0 },
    rating: { type: Number, require: true, default: 0 },
    numReviews: { type: Number, require: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productShema);
module.exports = Product;
