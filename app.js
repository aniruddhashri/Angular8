const express = require("express");
const app = express();
const cors = require('cors'); 


app.listen(3000,()=>
{
console.log("Listening to 3000 port");
});

 const mongoose  = require("mongoose");
 const dotenv = require("dotenv");

app.get("/", function(req, res) {
  res.send("Hello Worlxxxxd!");
});

const listinroutes = require("./routes/routing");

dotenv.config();

mongoose.connect(process.env.DB_STR,
{ useNewUrlParser: true , useUnifiedTopology: true },()=>{
console.log("DB Connected");
}) 

app.use(express.json());

app.use("/api/listing",listinroutes)

app.use(function(req, res, next) 
{res.header("Access-Control-Allow-Origin", "*");
res.header("Content-Type: application/json; charset=UTF-8");
next();});
