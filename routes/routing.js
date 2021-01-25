const router = require("express").Router();

const Register = require("../models/registerschema")
const Menus = require("../models/menuschema")
const dotenv = require("dotenv");

// var https = require('https');

// router.get("/check",(req,resp)=>{
//     try
//     {

//         // https.get('https://jsonplaceholder.typicode.com/photos', (resp1) => {
//         https.get(process.env.APIURL, (resp1) => {
//         let data = '';

//         resp1.on('data', (chunk) => {
//         data += chunk;
//         });

//         // The whole response has been received. Print out the result.
//         resp1.on('end', () => {
//         // console.log(JSON.parse(data));
        
//         resp.json({data1: JSON.parse(data),status:100});        
//         });

//         }).on("error", (err) => {
//         console.log("Error: " + err.message);
//         });
        
        
//     }
//     catch(err) 
//     {
//         resp.send({error:err,status:500});
//     }
// })

router.post("/register",async (req,resp)=>{
    const register = new Register({
        username:req.body.username,
        password:req.body.password,
        address:req.body.address,
        mobile:req.body.mobile,
        email:req.body.email,
        usertype:req.body.usertype
    }); 
    try
    {
        Register.findOne({
            email:req.body.email
        })
        .then(user=>{
            if(!user)
            {
                Register.create(register)
                .then(user=>{
                    resp.json({ msg :"User registered",status:200})
                })
                .catch(err=>{
                    resp.send({error:err,status:500})
                })
            }
            else{
                resp.json({msg: "User already exists",status:100})
            }
        })
        .catch(err=>{
            resp.json({error: "User already exists",status:100})
        })
    }
    catch(err)
    {
        resp.send({error:err,status:500});
    }
})


router.post("/login",async (req,resp)=>{
    try
    {
        Register.findOne({
            email:req.body.email,
            password:req.body.password
        })
        .then(user=>{
            if(req.body.email == user.email)
            {
                if(req.body.password == user.password)
                {
                    resp.json({Data: user,status:200})
                }
                else{
                    resp.json({error: "User or Password is Invalid",status:404})
                }
            }
            else{
                resp.json({error: "User or Password is Invalid",status:404})
            }
        })
        .catch(err=>{
            resp.json({error: "User or Password is Invalid",status:404})
        })
    }
    catch(err)
    {
        resp.send({error:err,status:500});
    }
})


router.post("/addmenu",(req,resp)=>{

    const menus = new Menus({
        dishname : req.body.dishname,
        price : req.body.price,
        dishimg : req.body.dishimg
    })
    try
    {
        Menus.findOne({
            dishname:req.body.dishname
        })
        .then(dish=>{
            if(!dish)
            {
                Menus.create(menus)
                .then(dish=>{
                    resp.json({ msg :"Dish Added !!!",status:200})
                })
                .catch(err=>{
                    resp.send({error:err,status:500})
                })
            }
            else{
                resp.json({msg: "Dish already exists",status:100})
            }
        })
        .catch(err=>{
            resp.json({error: "Dish already exists",status:100})
        })
    }
    catch(err)
    {
   
        ({error:err,status:500});
    }
})

router.get("/fetchmenu",(req,resp)=>{
    const menus = new Menus({
        dishname : req.body.dishname,
        price : req.body.price,
        dishimg : req.body.dishimg
    })

    try
    {
        Menus.find()
        .then(dish=>{
            if(dish)
            {
                    resp.json({dish,status:200})
            }
        })
        .catch(err=>{
            resp.json({error: "No Data Found",status:100})
        })
    }
    catch(err)
    {
        resp.send({error:err,status:500});
    }
})

router.post("/deletemenu",(req,resp)=>{

        try
        {
        Menus.findOneAndDelete({dishname : req.body.dishname})
        .then(dish=>
        {
            resp.json({status:200})
        })
        }
        catch(err)
        {
        resp.send({error:err,status:500});
        }
})

module.exports = router;