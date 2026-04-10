const mongoose = require('mongoose');

const connectDB = async () => {
    try {

       const connection =  await mongoose.connect(process.env.MONGOBD_URI)
        console.log("mongodb connected")
        
    } catch (error) {
        console.error("database error", error.message);
    }
}

module.exports = connectDB; 