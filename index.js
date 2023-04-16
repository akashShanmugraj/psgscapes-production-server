const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const morgan = require('morgan');
//set up express app
const app=express();

//setting up body-parser
app.use(bodyParser.json());
app.use(morgan())
// setting routes folder
app.use('/api',require('./routes/api'));

//connect to mongodb
//mongodb+srv://<username>:<password>@cluster0.pfose.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect('mongodb://127.0.0.1:27017/attendance')
mongoose.Promise=global.Promise;

//listening for requests 
app.listen(process.env.port || 4000,function(){
    console.log('now listening for requests');
});

//error handling 
app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});
