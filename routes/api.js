const express=require('express');
const router=express.Router();
exports.router = router;
const user=require('../models/user.js');
const attendanceData=require('../models/attendanceData.js');
const timeTableData=require('../models/timeTableData.js');

// get a list of students from mongo db
router.get('/students',async (req,res,next) => {
    try{
        const students=await user.find({role:'student'});
        res.status(200).send(students);
    }catch(err){
        res.status(500).send(err);
    }
});

//get a list of faculties from mongo db

router.get('/faculty',function(req,res,next){
    res.send({type:'GET'});
    // user.find({role:'faculty'}).then(function(faculties){
    //     res.send(faculties);
    // }).catch(next);
    });

//get attendance data from mongo db

router.get('/attendance',async (req,res,next) => {
    try{
        const courses=await attendanceData.find({});
        res.status(200).send(courses);
    }catch(err){
        res.status(500).send(err);
    }
});

//get time table data from mongo db

router.get('/timeTable',async (req,res,next) => {
    try{
        const timeTable=await timeTableData.find({});
        res.status(200).send(timeTable);
    }catch(err){
        res.status(500).send(err);
    }
});

// get details of a single student

router.get('/students/:id',async (req,res,next) => {
    try{
        const student=await user.findOne({_id:req.params.id});
        res.status(200).send(student);
    }catch(err){
        res.status(500).send(err);
    }
});


// get details of a single course's attendance

router.get('/attendance/:id',async (req,res,next) => {
    try{
        const course=await attendanceData.find({courseCode:req.params.id});
        res.status(200).send(course);
    }catch(err){
        res.status(500).send(err);
    }
});


// get details of a single student attendance

router.get('/attendance/student/:studentId',async (req,res,next) => {
    try{
        const course=await attendanceData.find({studentCode:req.params.studentId});
        res.status(200).send(course);
    }catch(err){
        res.status(500).send(err);
    }
});


// get deatils of a specific course's attendance of a specific student

router.get('/attendance/:id/:studentId',async (req,res,next) => {
try{
    const course=await attendanceData.findOne({courseCode:req.params.id,studentCode:req.params.studentId});
    res.status(200).send(course);
}catch(err){
    res.status(500).send(err);
}
});


// get the attendance of a student for a specific course along with the student details

router.get('/attendance/stud-details/:id/:studentId',async (req,res,next) => {
    try{
        const presenceData=await attendanceData.findOne({ courseCode: req.params.id, studentCode: req.params.studentId });
        const studentData=await user.findOne({ _id: req.params.studentId });
        res.status(200).send([presenceData,studentData]);
    }catch(err){
        res.status(500).send(err);
    }
});



// put attendance update in mongo db
 
router.put('/attendance/:id/:studentId',async (req,res,next) => {
    try{
        const course=await attendanceData.findOneAndUpdate({_id:req.params.id,studentCode:req.params.studentId},req.body);
        res.status(200).send(course);
    }catch(err){
        res.status(500).send(err);
    }
});



module.exports=router;