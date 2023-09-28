const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A product must have a name'],
  },

  price: {
    type: String,
    required: [true, 'A product must have some price'],
  },

  image: {
    type: String,
    required: [true, 'A product must have an image'],
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
