const User = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv');
const generateToken = require('../utils/generateToken');

const registerUser = async (req,res) => {
    const { name, email, password } = req.body;
    const userExist = await User.findOne({ email })
    if(userExist) {
        res.status(400).json("User Already Exist!")
    }
    const user = await User.create({ name, email, password })
    if(user) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
      })
    } else {
        res.status(400).json("User Not Found")
    }
}

const authController = async(req,res) => {
   const { email, password } = req.body;
   const user = await User.findOne({email});
   if(user &&  (await user.matchPassword(password))) {
       res.json({
           _id: user._id,
           name: user.name,
           email: user.email,
           isAdmin: user.isAdmin,
           token: generateToken(user._id)
       })
   } else {
       res.status(400).json("Invalid Email or Password");
   }
}

const getUserProfile = async(req,res) => {
    const user = await User.findById(req.user._id)
    if(user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        })
    } else {
        res.status(400).json("User not found")
    }
}

const updateUserDetails = async(req,res) => {
    const user = await User.findById(req.user._id)
    if(user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password) {
        user.password = req.body.password
        }
        const updateUser = await user.save()
        res.json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            token: generateToken(updateUser._id)
        })
    } else {
        res.status(400).json("User Not Found")
    }
}

exports.registerUser = registerUser;
exports.authController = authController;
exports.getUserProfile = getUserProfile;
exports.updateUserDetails = updateUserDetails;