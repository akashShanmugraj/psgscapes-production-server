const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// create user schema 
const userSchema= new Schema({
    //here _id refers to faculty or student roll_no
    _id:{type:String,required:true},
    username:{type:String,required:true},
    name:{type:String,required:true},
    rollnumber:{type:String,required:true},
    department:{type:String,required:true},
    email:{type:String,required:true},
    role:{type:String,required:true},
    password:{type:String,required:true}
});
const user=mongoose.model('user',userSchema);
//exports
module.exports=user;