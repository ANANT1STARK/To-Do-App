const express = require('express')
const route = express.Router()
const bodyParser = require('body-parser')
route.use(bodyParser.json());





// route.post('/sign-up',async (req,res)=>{
//     try{
//         var username = await req.body.username;
//         var password = await req.body.password;
//         console.log(username , password)
//         res.render('home_page')
//     }
//     catch(err){
//         console.log(err)
//         console.log('error countered')

//     }
// })
module.exports = route;


