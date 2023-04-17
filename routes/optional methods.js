// to find attedance specific to a student 

// router.get('/attendance/student/:studentId',async (req,res,next) => {
// try {
//     const attendance= await attendanceData.find({studentCode:req.params.studentId})
//     .populate('studentCode','name')
//     .exec();
//     res.json(attendance);
// } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
// }
// res.send({type:'GET'});


// put attendance update in mongo db

// router.put('/attendance/:id/:studentId',function(req,res,next){
    //res.send({type:'PUT'});
    // attendanceData.findOneAndUpdate({_id:req.params.id,studentCode:req.params.studentId},req.body).then(function(){
    //     attendanceData.findOne({_id:req.params.id,studentCode:req.params.studentId}).then(function(course){
    //         res.send(course);
    //     });
    // }).catch(next);
    // }); 


// get the attendance of a student for a specific course along with the student details

// router.get('/attendance/stud-details/:id/:studentId', function(req, res, next) {
//   const presenceData = attendanceData.findOne({ courseCode: req.params.id, studentCode: req.params.studentId });
//   const studentData = user.findOne({ _id: req.params.studentId });
//   Promise.all([presenceData, studentData]).then(function(values) {
//     res.send(values);
//   }).catch(function(err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   });
// });


// get deatils of a specific course's attendance of a specific student

// router.get('/attendance/:id/:studentId',function(req,res,next){
//     // res.send({type:'GET'});
//     attendanceData.findOne({courseCode:req.params.id,studentCode:req.params.studentId}).then(function(course){
//         res.send(course);
//     }).catch(next);
//     });


// get details of a single student attendance

//router.get('/attendance/student/:studentId',async (req,res,next) => {
//     attendanceData.find({studentCode:req.params.studentId}).then(function(course){
//         res.send(course);
//     }).catch(next);
// });


// get details of a single course's attendance

// router.get('/attendance/:id',function(req,res,next){
    // res.send({type:'GET'});
    // attendanceData.find({courseCode:req.params.id}).then(function(course){
    //     res.send(course);
    // }).catch(next);
    // });


//get a list of students from mongo db
// router.get('/students',function(req,res,next){
//     //res.send({type:'GET'});
//     user.find({role:'student'}).then(function(students){
//         res.send(students);
//     }).catch(next);
//     });


//get attendance data from mongo db
// router.get('/attendance',function(req,res,next){
//     // res.send({type:'GET'});
//     attendanceData.find({}).then(function(courses){
//         res.send(courses);
//     }).catch(next);
//      });


//get time table data from mongo db
// router.get('/timeTable',function(req,res,next){
    // res.send({type:'GET'});
    // // timeTableData.find({}).then(function(timeTable){
    // //     res.send(timeTable);
    // // }).catch(next);
    // });


    // get details of a single student
// router.get('/students/:id',function(req,res,next){
    // //res.send({type:'GET'});
    // user.findOne({_id:req.params.id}).then(function(student){
    //     res.send(student);
    // }).catch(next);
    // });