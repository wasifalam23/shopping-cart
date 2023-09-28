const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllProduct = catchAsync(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  });
});
