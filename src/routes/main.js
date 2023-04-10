
const express = require('express')
const route = express.Router()
const cards = require('../models/cards')



route.get('',async (req,res)=>{
    
    let cards_details  = await cards.find()
    // console.log(cards_details)
    console.log(cards_details)
    
    
    res.render('home_page',{cards_:cards_details})
})

module.exports = route;

