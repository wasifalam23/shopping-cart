const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Checkout must belong to an user'],
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: [true, 'A checkout must have a product'],
  },

  shippingAddress: {
    type: String,
    required: [true, 'Please enter a shippingAddress'],
  },

  paymentInfo: {
    cardHolderName: {
      type: String,
      required: [true, 'Please enter card holder name'],
    },

    cardNumber: {
      type: String,
      required: [true, 'Please enter card number'],
    },

    expirationDate: {
      type: String,
      required: [true, 'Please enter expiration date'],
    },

    cvv: {
      type: String,
      required: [true, 'Please enter a cvv'],
    },
  },
});

const Checkout = mongoose.model('Checkout', checkoutSchema);

module.exports = Checkout;
