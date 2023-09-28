const express = require('express');
const productController = require('../controllers/productContoller');
// const authController = require('../controllers/authController');

const router = express.Router();

router.route('/').get(productController.getAllProduct);

// router.get('/getMyBlogs', authController.protect, blogController.getMyBlogs);

// router.route('/:id').get(blogController.getBlogById);

module.exports = router;
