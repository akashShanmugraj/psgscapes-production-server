const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// create user schema 
const userSchema= new Schema({
    //here _id refers to faculty or student roll_no
    _id:{type:String,required:true},
    name:{type:String,required:true},
    department:{type:String,required:true},
    // here role refers to faculty or student
    role:{type:String,required:true},
    password:{type:String,required:true},
    classKey:{type:String,required:true}
});
const user=mongoose.model('user',userSchema);
//exports
module.exports=user;