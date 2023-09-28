const express = require('express');
const authController = require('../controllers/authController');
const checkoutController = require('../controllers/checkoutController');

const router = express.Router({ mergeParams: true });
router.use(authController.protect);

router.route('/').post(checkoutController.createCheckout);

module.exports = router;
