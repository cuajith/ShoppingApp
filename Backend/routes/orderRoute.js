const express = require('express');
const orderController = require('../controller/orderController');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');

//Create new order
router.route('/').post(protect, orderController.addOrderItem);

module.exports = router;