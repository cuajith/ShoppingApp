const Product = require('../model/productModel');

 // GET ALL PRODUCTS
const product = async (req,res) => {
    const products = await Product.find({})
    res.json(products);
}

// GET SINGLE PRODUCT
const singleProduct = async (req,res) => {
    const products = await Product.findById(req.params.id);
    if(products) {
        res.json(products);
    }
    else {
        res.status(404).json({ message : "Product not found"});
    }
}

exports.product = product;
exports.singleProduct = singleProduct;