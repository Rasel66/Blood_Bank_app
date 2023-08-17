const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.DB)
        console.log(`Database connected ${mongoose.connection.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Database error ${error}`.bgRed.white);
    }
}

module.exports = connectDB;