const express = require('express');
const authController = require("../controller/auth");
const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/products',authController.product);
router.get('/products/:id',authController.singleProduct);

module.exports = router;