const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI;

const connectDB = async () =>{
    try {
        await mongoose.connect(URI);
        console.log("Connected To Data Base Successfully");
    } catch (error) {
        console.log(error)
        console.log("Not Connected To Data Base Failed !!!");
        process.exit(0);
    }
}

module.exports = connectDB;