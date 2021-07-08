var mongoose = require('mongoose');

const orderShema = new mongoose.Schema(
  {
    items: [
      {
        name: { type: String, require: true },
        image: { type: String, require: true },
        price: { type: Number, require: true },
        quantity: { type: Number, require: true },
        totalItem: { type: Number, require: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          require: true,
        },
      }
    ],
    total: { type: Number, require: true },
    user: {
      fullname: { type: String, require: true },
      email: { type: String, require: true },
      phoneNumber: { type: Number, require: true },
      address: { type: String, require: true },
    },
    isConfirm: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model('order', orderShema);
module.exports = order;
