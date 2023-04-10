const mongoose = require("mongoose");
 
// create an schema
const userSchema =mongoose.Schema({
    Username: String,
    Password: String,
    EmailID: String,
    age: String,
    gender: String,
    Daily: Array,
    Monthly:Array,
    Weekly: Array,
    Yearly: Array
           
        }, {collection: 'Users'});
 
// var userModel=mongoose.model('users',userSchema);
 
module.exports = mongoose.model("User", userSchema);




