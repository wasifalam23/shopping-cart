const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getMe = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id).populate({
    path: 'orderHistory',
  });

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
