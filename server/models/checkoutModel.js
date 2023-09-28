const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Checkout must belong to an user'],
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'A checkout must have a product'],
      },
      quantity: Number,
    },
  ],
  shippingAddress: String,
  paymentInfo: String,
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
