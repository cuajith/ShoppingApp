const express = require('express');
const productController = require("../controller/productController");
const router = express.Router();

router.get('/products',productController.product);
router.get('/products/:id',productController.singleProduct);

module.exports = router;