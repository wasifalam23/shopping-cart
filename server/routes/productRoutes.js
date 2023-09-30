const express = require('express');
const checkoutRoutes = require('./checkoutRoutes');
const productController = require('../controllers/productContoller');
const authController = require('../controllers/authController');

const router = express.Router();

router.use('/:productId/checkout', checkoutRoutes);

router.use(authController.protect);

router.route('/').get(productController.getAllProduct);
router.route('/:id').get(productController.getProductById);

module.exports = router;
