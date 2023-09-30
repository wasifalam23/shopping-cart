const Product = require('../models/productModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllProduct = catchAsync(async (req, res, next) => {
  // 1) Filtering
  const queryObj = { ...req.query };
  const excludeFields = ['sort', 'page'];
  excludeFields.forEach((el) => delete queryObj[el]);

  const partialName = queryObj.name || '';
  const regex = new RegExp(`^${partialName}`, 'i');

  let query = Product.find({ name: regex });

  // 2) Sorting
  if (req.query.sort) {
    query = query.sort(req.query.sort);
  }

  const products = await query;

  res.status(200).json({
    status: 'success',
    results: products.length,
    data: {
      products,
    },
  });
});

exports.getProductById = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new AppError('No blog found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',

    data: {
      product,
    },
  });
});
