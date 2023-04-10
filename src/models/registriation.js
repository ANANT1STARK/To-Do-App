const mongoose = require('mongoose')


const employeeSchema = mongoose.Schema({
    Username: String,
    Password: String,
    EmailID: String,
    age: String,
    gender: String,
    Daily: Array,
    Monthly:Array,
    Weekly: Array,
    Yearly: Array

},{collection: 'Users'})


module.exports = mongoose.model('Register',employeeSchema)




