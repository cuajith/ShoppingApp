const express = require('express');
const userController = require("../controller/usersController");
const protect = require('../middlewares/authMiddleware');
const router = express.Router();

// User registration
router.post('/',userController.registerUser);

// User Login
router.post('/login',userController.authController);

// User profile
router.route("/profile").get(protect,userController.getUserProfile).put(protect,userController.updateUserDetails);

module.exports = router;