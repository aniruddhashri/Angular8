const mongoose = require("mongoose")

const registerschema = new mongoose.Schema({
    username:String,
    password:String,
    address:String,
    mobile:String,
    email:String,
    usertype:String
});


module.exports  = mongoose.model("Registration",registerschema)

