const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const attendanceData=require('./attendanceData');
const roomData=require('./roomData');

//create course data schema
const courseSchema= new Schema({
    //here _id refers to course_code like 19Z101
    _id:{type:String,required:true},
    courseName:{type:String,required:true},
    faculty:{type:String,required:true},
    classKey:[]});
    //classKey is an array of class keys like 22Z2,22Z3 etc
const courseData=mongoose.model('courseData',courseSchema);
module.exports=courseData;