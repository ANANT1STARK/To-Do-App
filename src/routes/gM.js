const express = require('express')
const route = express.Router()


// console.log(x)





route.get('',async (req,res)=>{
   
    res.render('get_motivated')

})

module.exports = route;
