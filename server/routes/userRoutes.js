const express = require('express');
const authController = require('../controllers/authController');
// const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/isLoggedIn', authController.isLoggedIn);
router.get('/logout', authController.logout);

// router.get('/me', authController.protect, userController.getMe);

module.exports = router;
