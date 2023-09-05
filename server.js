const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.PORT || 8080;

dotenv.config();

//Database connection
connectDB();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'))

//test routes
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth',require('./routes/authRoutes'))
app.use('/api/v1/inventory',require('./routes/inventoryRoutes'))







//listen server
app.listen(PORT,()=>{
    console.log(`Server is running in ${process.env.DEV_MODE} on port http://localhost:${process.env.PORT}`.bgBlue.white);
})