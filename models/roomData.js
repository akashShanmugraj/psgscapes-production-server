const mongoose=require('mongoose');
const Schema=mongoose.Schema;

// create room_id schema
const roomSchema= new Schema({
    //here _id refers to room_id
    _id:{type:String,required:true},
    UUID:{type:String,required:true}});
const roomData=mongoose.model('roomData',roomSchema);

//exports
module.exports=roomData;