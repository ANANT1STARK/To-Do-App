const mongoose = require('mongoose')
const cards_details = mongoose.Schema({
    heading: String,
    image: String,
    content:String,
    button: String,
    href: String
})


module.exports = mongoose.model('cards',cards_details)