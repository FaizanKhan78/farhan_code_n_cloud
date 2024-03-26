//* It is Require when The Data Base is not Connecting and saying Require String and receive undefined.
require('dotenv').config();

const express = require("express");
const app = express();
const router  = require('./routes/auth-route');
const connectDB = require('./utils/db');
const cors = require("cors");

//? Middleware.
//* Telling the Server That We are going to Interact Between The Json Format Data.
app.use(express.json());
app.use(express.static('public'))

const corsOption = {
    origin:"http://localhost:5173",
    methods:"GET,POST,DELETE,PATCH,PUT",
    credentials:true,
}

app.use(cors(corsOption));


app.use("/api/auth",router);
const PORT = 8000;

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is Running at Port Number ${PORT}`)
    })
}).catch(error=>{
    console.log(error);
})