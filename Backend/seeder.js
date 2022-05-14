const mongoose = require('mongoose');
const env = require('dotenv');
require('colors');
const Product = require('./model/productModel');
const User = require('./model/user');
const products = require('./data/product');
const users = require('./data/User');
const connectDb = require('./config/db');

env.config();
connectDb();

const importData = async () => {
    try {
        const createUser = await User.insertMany(users)
        const adminUser = createUser[0]._id
        const sampleData = products.map(product => {
            return { ...product, User: adminUser }
        })
        await Product.insertMany(sampleData)
        console.log("Data Imported...".green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

importData();
  