const express=require('express');
const router=express.Router();
exports.router = router;
const user=require('../models/user.js');
const attendanceData=require('../models/attendanceData.js');
const timeTableData=require('../models/timeTableData.js');
const tokenManager = require('../auth/tokens.js')

const sampleTimetableData = {
    "1": {
      "classCode": "19Z304",
      "roomCode": "J102"
    },
    "2": {
      "classCode": "19Z404",
      "roomCode": "J201"
    },
    "3": {
      "classCode": "19Z104",
      "roomCode": "J415"
    },
    "4": {
      "classCode": "19Z204",
      "roomCode": "J415"
    },
    "5": {
      "classCode": "19Z104",
      "roomCode": "J415"
    },
    "6": {
      "classCode": "19Z301",
      "roomCode": "J102"
    },
    "7": {
      "classCode": "19Z104",
      "roomCode": "J413"
    },
    "8": {
      "classCode": "19Z404",
      "roomCode": "J402"
    },
    "_id": {
      "$oid": "643ad9321d68327d901878cc"
    },
    "day": "Monday",
    "classKey": "22Z22"
  }

router.get('/auth', (req, res) => {
    tokenManager.verifyToken(req, res, () => {
        res.send('Verified')
    })
})

router.get('/info', (req, res) => {
    const requestObject = {
        "req.app": req.app,
        "req.baseurl":req.baseUrl,
        "req.body": req.body,
        "req.cookie": req.cookie,
        "req.hostname":req.hostname,
        "req.ipv6":req.ipv6,
        "req.params":req.params,
        "req.path": req.path,
        "req.protocol": req.protocol,
        "req.query":req.query,
        "req.route":req.route,
        "req.tlsInsecure":req.tlsInsecure,
        "req.auth":req.auth
    }

    res.send(requestObject)
})

router.post('/auth/login', tokenManager.loginToken)

router.post('/auth/renew', tokenManager.renewToken)

router.get('/auth/help', (req, res) => {
    res.sendfile('authhelp.html')
})

router.get('/timetable/c22z2/monday', (req, res) => {
    res.json(sampleTimetableData)
})

router.get('/timetable/c22z2/all', (req, res) => {
    res.sendfile('./routes/timetabledatas.json')
})
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

router.get('/attendance/course/:id',async (req,res,next) => {
    try{
        const course=await attendanceData.find({courseCode:req.params.id});
        res.status(200).send(course);
    }catch(err){
        res.status(500).send(err);
    }
});

router.get('/attendance/student/:id',async (req,res,next) => {
    try{
        const course=await attendanceData.find({studentCode:req.params.id});
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