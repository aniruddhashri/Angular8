const mongoose = require("mongoose")

const menuschema = new mongoose.Schema(
    {
        dishname : String,
        price : String,
        dishimg : String
    });


module.exports  = mongoose.model("Menus",menuschema)

