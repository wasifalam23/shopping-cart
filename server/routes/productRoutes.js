const express = require('express');
const checkoutRoutes = require('./checkoutRoutes');
const productController = require('../controllers/productContoller');
// const authController = require('../controllers/authController');

const router = express.Router();
router.use('/:productId/checkout', checkoutRoutes);

router.route('/').get(productController.getAllProduct);

// router.get('/getMyBlogs', authController.protect, blogController.getMyBlogs);

// router.route('/:id').get(blogController.getBlogById);

module.exports = router;
