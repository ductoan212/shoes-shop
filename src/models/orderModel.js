var mongoose = require('mongoose');

const orderShema = new mongoose.Schema(
  {
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          require: true,
        },
        name: { type: String, require: true },
        image: { type: String, require: true },
        size: { type: Number, require: true },
        price: { type: Number, require: true },
        quantity: { type: Number, require: true },
        totalItem: { type: Number, require: true },
      },
    ],
    total: { type: Number, require: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      require: true,
    },
    userInfo: {
      username: { type: String, require: true },
      fullname: { type: String, require: true },
      email: { type: String, require: true },
      phoneNumber: { type: String, require: true },
      address: { type: String, require: true },
    },
    paymentMethod: { type: String, require: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isConfirm: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const order = mongoose.model('Order', orderShema);
module.exports = order;
