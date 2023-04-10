const express = require('express')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT | 5500
// const todo = require('./routes/todo')
const path = require('path')
const mongoose = require('mongoose')
const home = require('./routes/main')
const get_motivated = require('./routes/gM')
const bodyParser = require('body-parser')
const User = require('./models/Users')

const Register = require('./models/registriation')

app.use(bodyParser.urlencoded({extended: true})) 
app.use(bodyParser.json()) 
var username_this;

// var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/website', {useNewUrlParser: true});
let conn = mongoose.connection;
conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));

// db connection




// setting up our handelbars file


app.set('view engine', 'hbs');
app.set('views','D:/C.S.E/Web_Deve/ToDo/views');
hbs.registerPartials(path.join(__dirname,'../views/partials'))


app.use('/static',express.static(path.join(__dirname,'../public')))




app.use('',home)
app.use('/Get-Motivated',get_motivated)









app.get('/To-Do/Daily-Goals',async (req,res)=>{

    try{const details = await User.findOne({Username:username_this})
    // console.log(username_this)
    // console.log(details.Daily)
        let obj = {Heading : 'Daily-Goals',Goals : details.Daily}
        res.render('ToDo',{Daily_Goals:obj})
    // console.log(obj.Goals)
}
    catch(err){
        res.send('bad request !!!!!!!!')
    }


})



app.get('/To-Do/Weekly-Goals',async (req,res)=>{

    try{const details = await User.findOne({Username:username_this})
    // console.log(username_this)
    // console.log(details.Daily)
        let obj = {Heading : 'Weekly-Goals',Goals : details.Weekly}
        res.render('ToDo',{Daily_Goals:obj})
    // console.log(obj.Goals)
}
    catch(err){
        res.send('bad request !!!!!!!!')
    }


})
app.get('/To-Do/Monthly-Goals',async (req,res)=>{

    try{const details = await User.findOne({Username:username_this})
    console.log(username_this)
    // console.log(details.Daily)
        let obj = {Heading : 'Monthly-Goals',Goals : details.Monthly}
        res.render('ToDo',{Daily_Goals:obj})
    // console.log(obj.Goals)
}
    catch(err){
        res.send('bad request !!!!!!!!')
    }


})
app.get('/To-Do/Yearly-Goals',async (req,res)=>{

    try{const details = await User.findOne({Username:username_this})
    console.log(username_this)
    // console.log(details.Daily)
        let obj = {Heading : 'Yearly-Goals',Goals : details.Yearly}
        res.render('ToDo',{Daily_Goals:obj})
    // console.log(obj.Goals)
}
    catch(err){
        res.send('bad request !!!!!!!!')
    }


})
// console.log(path.join(__dirname,'../public'))






app.get('/add-goal-Daily-Goals',async (req,res)=>{
    try{const details = await User.findOne({Username:username_this})
    res.render('add_goal',{title:'Daily'})
    
    // console.log(obj.Goals)
}
    catch(err){
        res.send('bad request !!!!!!!!')
    }

})
app.get('/add-goal-Yearly-Goals',async (req,res)=>{
    try{const details = await User.findOne({Username:username_this})
    res.render('add_goal',{title:'Yearly'})
    
    // console.log(obj.Goals)
}
    catch(err){
        res.send('bad request !!!!!!!!')
    }

})
app.get('/add-goal-Weekly-Goals',async (req,res)=>{
    try{const details = await User.findOne({Username:username_this})
    res.render('add_goal',{title:'Weekly'})
    
    // console.log(obj.Goals)
}
    catch(err){
        res.send('bad request !!!!!!!!')
    }

})
app.get('/add-goal-Monthly-Goals',async (req,res)=>{
    try{const details = await User.findOne({Username:username_this})
    res.render('add_goal',{title:'Monthly'})
    
    // console.log(obj.Goals)
}
    catch(err){
        res.send('bad request !!!!!!!!')
    }

})



// post request for adding goals




app.post('/add-goal-Daily-Goals',async (req,res)=>{
    let goal = await req.body.goal
    try {
        const details = await User.updateOne({Username:username_this},{$push:{"Daily":goal}});
        res.redirect('/To-Do/Daily-Goals')
    } catch (error) {
        res.send('bro fucked up')
    }
    
   
    
})







app.post('/add-goal-Weekly-Goals',async (req,res)=>{
    let goal = await req.body.goal
    try {
        const details = await User.updateOne({Username:username_this},{$push:{"Weekly":goal}});
        res.redirect('/To-Do/Daily-Goals')
    } catch (error) {
        res.send('bro fucked up')
    }
    
   
    
})
app.post('/add-goal-Yearly-Goals',async (req,res)=>{
    let goal = await req.body.goal
    try {
        const details = await User.updateOne({Username:username_this},{$push:{"Yearly":goal}});
        res.redirect('/To-Do/Daily-Goals')
    } catch (error) {
        res.send('bro fucked up')
    }
    
   
    
})
app.post('/add-goal-Monthly-Goals',async (req,res)=>{
    let goal = await req.body.goal
    try {
        const details = await User.updateOne({Username:username_this},{$push:{"Monthly":goal}});
        res.redirect('/To-Do/Daily-Goals')
    } catch (error) {
        res.send('bro fucked up')
    }
    
   
    
})

// Delete request for deleting goals


app.delete('/To-Do/Daily-Goals',async (req,res)=>{
    let goal = await req.body.id_
    // let url = await req.body.url_
    try {
        const details = await User.updateOne({Username:username_this},{$pull:{"Daily":goal}});
        res.redirect('/To-Do/Daily-Goals')
        // console.log('hello')
    } catch (error) {
        res.send('bro fucked up')
    }
    
   
    
})
app.delete('/To-Do/Monthly-Goals',async (req,res)=>{
    let goal = await req.body.id_
    // let url = await req.body.url_
    try {
        const details = await User.updateOne({Username:username_this},{$pull:{"Monthly":goal}});
        res.redirect('/To-Do/Daily-Goals')
        // console.log('hello')
    } catch (error) {
        res.send('bro fucked up')
    }
    
   
    
})
app.delete('/To-Do/Weekly-Goals',async (req,res)=>{
    let goal = await req.body.id_
    // let url = await req.body.url_
    try {
        const details = await User.updateOne({Username:username_this},{$pull:{"Weekly":goal}});
        res.redirect('/To-Do/Daily-Goals')
        // console.log('hello')
    } catch (error) {
        res.send('bro fucked up')
    }
    
   
    
})
app.delete('/To-Do/Yearly-Goals',async (req,res)=>{
    let goal = await req.body.id_
    // let url = await req.body.url_
    try {
        const details = await User.updateOne({Username:username_this},{$pull:{"Yearly":goal}});
        res.redirect('/To-Do/Daily-Goals')
        // console.log('hello')
    } catch (error) {
        res.send('bro fucked up')
    }
    
   
    
})



app.get('',async (req,res)=>{
    
    let cards_details  = await cards.find()
    console.log(cards_details)
    let obj =  {heading:cards_details[0].heading,image:cards_details[0].image,content:cards_details[0].content,href:cards_details[0].href,button:cards_details[0].button}
//   console.log(obj.content)
    
    res.render('home_page',obj)
})








app.get('/sign-in',(req,res)=>{
    res.render('sign_in')
})









app.post('/sign-in',async (req,res)=>{
    try {username_this =  await req.body.username;
        
        let password =  await req.body.password;
       const details = await User.findOne({Username:username_this})
       if (details.Password == password){
        
        res.redirect('/To-Do/Daily-Goals')
       }
       else{
        res.send('password is incorrect')
       }
       
    //    console.log(details)
        
    } catch (error) {
        res.render('sign_in')
    }
    

})








app.get('/sign-up',(req,res)=>{

res.render('sign_up')

})









app.post('/sign-up',async (req,res)=>{
     username_this = req.body.username
    let email =req.body.EmailId
    let pass =req.body.password
    let age =req.body.Age
    let gender =req.body.flexRadioDefault
  


    let employee = await Register.findOne({EmailID: email})
    let employe_name = await Register.findOne({Username: username_this})
    console.log(employee , employe_name)
    if( employee!=null || employe_name!=null){
        res.send('Change Username Or may be YOu already have an account')

    }
    else{
        const registration =  new Register(
            {Username : username_this , Password : pass , EmailID : email , age : age , gender : gender}
        ) 
   
        const registered = await registration.save()
        // console.log(typeof age , typeof gender)
        res.redirect('/To-Do/Daily-Goals')
    }
    
    
})









app.listen(port,()=>{
    console.log("SERVER IS STARTED BRO!!!!!!!!!!!!!!!")
    console.log(`https://localhost:${port}`)
})