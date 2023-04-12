const express=require('express');
const router=express.Router();
exports.router = router;
const user=require('../models/user.js');
const attendanceData=require('../models/attendanceData.js');
const timeTableData=require('../models/timeTableData.js');

//get a list of students from mongo db
router.get('/students',function(req,res,next){
    //res.send({type:'GET'});
    user.find({role:'student'}).then(function(students){
        res.send(students);
    }).catch(next);
    });

//get a list of faculties from mongo db
router.get('/faculty',function(req,res,next){
    res.send({type:'GET'});
    // user.find({role:'faculty'}).then(function(faculties){
    //     res.send(faculties);
    // }).catch(next);
    });

//get attendance data from mongo db
router.get('/attendance',function(req,res,next){
    // res.send({type:'GET'});
    attendanceData.find({}).then(function(courses){
        res.send(courses);
    }).catch(next);
     });

//get time table data from mongo db
router.get('/timeTable',function(req,res,next){
    res.send({type:'GET'});
    // timeTableData.find({}).then(function(timeTable){
    //     res.send(timeTable);
    // }).catch(next);
    });

// get details of a single student
router.get('/students/:id',function(req,res,next){
    //res.send({type:'GET'});
    user.findOne({_id:req.params.id}).then(function(student){
        res.send(student);
    }).catch(next);
    });

// get details of a single course's attendance
router.get('/attendance/courses/:crcode/',function(req,res,next){
    // res.send({type:'GET'});
    attendanceData.find({courseCode:req.params.crcode}).then(function(course){
        res.send(course);
    }).catch(next);
    });

router.get('/attendance/student/:rollnum/',function(req,res,next){
    // res.send({type:'GET'});
    attendanceData.find({studentCode:req.params.rollnum}).then(function(course){
        res.send(course);
    }).catch(next);
    });


    
// put attendance update in mongo db
router.put('/attendance/:id/:studentId',function(req,res,next){
    res.send({type:'PUT'});
    // attendanceData.findOneAndUpdate({_id:req.params.id,studentCode:req.params.studentId},req.body).then(function(){
    //     attendanceData.findOne({_id:req.params.id,studentCode:req.params.studentId}).then(function(course){
    //         res.send(course);
    //     });
    // }).catch(next);
    });


module.exports=router;