const Checkout = require('../models/checkoutModel');
const catchAsync = require('../utils/catchAsync');

exports.createCheckout = catchAsync(async (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  if (!req.body.product) req.body.product = req.params.productId;

  const product = await Checkout.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      product,
    },
  });
});
