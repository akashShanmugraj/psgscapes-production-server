const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const user=require('./user');
// create class model
const attendanceSchema= new Schema({
    courseCode:{type:String,required:true},
    courseName:{type:String,required:true},
    facultyCode:{type:String,required:true},
        // type:Schema.Types.ObjectId,
        // ref:'user',
        // required:true
    
    studentCode:{type:String,required:true},
        // type:Schema.Types.ObjectId,
        // ref:'user',
        // required:true
    totalPresent:{type:Number,required:true},
    totalClasses:{type:Number,required:true},
    expemptClasses:{type:Number,required:true},
    medicalLeave:{type:Number,required:true},
    absent:[
        {
            date:{type:Date,required:true},
            time:{type:String,required:true}
        }
    ]
});
const attendanceData=mongoose.model('attendanceData',attendanceSchema);
//exports
module.exports=attendanceData;