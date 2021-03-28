const express = require("express");
const app = express();
//const cors = require('cors'); 

const mongoose  = require("mongoose");
const dotenv = require("dotenv");

app.use(function(req, res, next) 
{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "*");

  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  req.header("Access-Control-Allow-Headers", "*");

  next();
});

app.listen(2000,()=>
{
console.log("Listening to 2000 port");
});


app.get("/", function(req, res) {
  res.send("Hello Worlxxxxd! Header added");
});

const listinroutes = require("./routes/routing");

dotenv.config();

mongoose.connect(process.env.DB_STR,
{ useNewUrlParser: true , useUnifiedTopology: true },()=>{
console.log("DB Connected");
}) 

app.use(express.json());

app.use("/api/listing",listinroutes)

