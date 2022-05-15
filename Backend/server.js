const express = require('express');
const env = require('dotenv');
const cors = require ('cors');
const app = express();
const productRoute = require('./routes/productRoute');
const userRoute = require('./routes/userRoute');
const connectDb = require('./config/db');

//environment variable
env.config();

app.use(express.json());
app.use(cors());
app.use('/api',productRoute);
app.use('/api/user', userRoute);

connectDb();

app.listen(process.env.PORT, () =>
    console.log(`Server is running on port ${process.env.PORT}`)
);