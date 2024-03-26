const mongoose = require('mongoose');
const User = mongoose.Schema({
  file:String,
  name:String,
  email:String,
  password:String,
  number:Number,
  level:String,
  courses:String,
  mode:String,
  date:Date,
  isAdmin:{
    type:Boolean,
    default:false,
  }
},  { timestamps: true }
)

const Users = mongoose.model('User',User)
module.exports = Users;