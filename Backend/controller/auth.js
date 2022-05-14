const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const Product = require('../model/productModel');

 const register = async (req,res) => {
    try {
        const emailExist = await User.findOne({ email: req.body.email })
        if (emailExist) {
            return res.status(400).json("Email already exist")
        }

        const hash = await bcrypt.hash(req.body.password, 10)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hash
        })
        
         const data = await user.save()
         res.json(user)
      
    } catch (err) {
        res.status(400).json(err)
        console.log(err)
    }
}

const login = async (req,res) => {
    const email =  await User.findOne({ email: req.body.email });
    if(!email) {
        return res.status(400).json("Incorrect Email");
    }
    const password = await bcrypt.compare(req.body.password,email.password);
    if(!password) {
        return res.status(400).json("Incorrect password");
    }
    //create a token
    const userToken = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: '2d'});
    res.header('user', userToken).json({
        "token": userToken
    })
}

const product = async (req,res) => {
    const products = await Product.find({})
    res.json(products);
}

const singleProduct = async (req,res) => {
    const products = await Product.findById(req.params.id);
    if(products) {
        res.json(products);
    }
    else {
        res.status(404).json({ message : "Product not found"});
    }
}

exports.register = register;
exports.login = login;
exports.product = product;
exports.singleProduct = singleProduct;