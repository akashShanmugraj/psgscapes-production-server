const express = require("express");
const router = express.Router();
exports.router = router;
const user = require("../models/user.js");
const attendanceData = require("../models/attendanceData.js");
const timeTableData = require("../models/timeTableData.js");
const tokenManager = require("../auth/authentication.js");
const courseData = require("../models/courseData.js");

router.get("/auth", (req, res) => {
  tokenManager.verifyToken(req, res, () => {
    res.send("Verified");
  });
});

router.get("/info", (req, res) => {
  const requestObject = {
    "req.app": req.app,
    "req.baseurl": req.baseUrl,
    "req.body": req.body,
    "req.cookie": req.cookie,
    "req.hostname": req.hostname,
    "req.ipv6": req.ipv6,
    "req.params": req.params,
    "req.path": req.path,
    "req.protocol": req.protocol,
    "req.query": req.query,
    "req.route": req.route,
    "req.tlsInsecure": req.tlsInsecure,
    "req.auth": req.auth,
  };

  res.send(requestObject);
});

router.post("/auth/login", tokenManager.loginToken);

router.post("/auth/renew", tokenManager.renewToken);

router.get("/auth/help", (req, res) => {
  res.sendfile("authhelp.html");
});

//get a list of faculties from mongo db
//NOT YET IMPLEMENTED NO DATA IN DB
router.get("/faculty", function (req, res, next) {
  res.send({ message: "data-to-be-inserted" });
  // user.find({role:'faculty'}).then(function(faculties){
  //     res.send(faculties);
  // }).catch(next);
});

//get attendance data from mongo db

router.get("/timetable", async (req, res, next) => {
  try {
    const classData = await timeTableData.aggregate([
      {
        $lookup: {
          from: "courseData",
          localField: "classCode",
          foreignField: "_id",
          as: "classInfo",
        },
      },
    ]);
    // const roomData = await timeTableData.aggregate([
    //   {
    //     $lookup: {
    //       from: "roomData",
    //       localField: "roomCode",
    //       foreignField: "_id",
    //       as: "roomInfo",
    //     },
    //   },
    // ]);

    res.status(200).json({ classData });
  } catch (err) {
    res.status(500).send(err);
  }
});

//get a single day's time table data for all classes from mongo db

router.get("/timetable/all-classes/:day", async (req, res, next) => {
  try {
    const classData = await timeTableData.aggregate([
      {
        $match: { day: req.params.day },
      },
      {
        $lookup: {
          from: "courseData",
          localField: "classCode",
          foreignField: "_id",
          as: "classInfo",
        },
      },
    ]);
    // const roomData = await timeTableData.aggregate([
    //   {
    //     $match: { day: req.params.day },
    //   },
    //   {
    //     $lookup: {
    //       from: "roomData",
    //       localField: "roomCode",
    //       foreignField: "_id",
    //       as: "roomInfo",
    //     },
    //   },
    // ]);
    res.status(200).json({ classData });
  } catch (err) {
    res.status(500).send(err);
  }
});

//get a single class's timetable for the whole week from mongo db
router.get(
  "/timetable-full-week-single-class/:classKey",
  async (req, res, next) => {
    try {
      const classData = await timeTableData.aggregate([
        {
          $match: { classKey: req.params.classKey },
        },
        {
          $lookup: {
            from: "courseData",
            localField: "classCode",
            foreignField: "_id",
            as: "classInfo",
          },
        },
      ]);

      // const roomData = timeTableData.aggregate([
      //   {
      //     $match: { classKey: req.params.classKey },
      //   },
      //   {
      //     $lookup: {
      //       from: "roomData",
      //       localField: "roomCode",
      //       foreignField: "_id",
      //       as: "roomInfo",
      //     },
      //   },
      // ]);

      res.status(200).json({ classData });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

//get a single day's time table data for a specific class from mongo db
router.get(
  "/timetable-single-day-class/:day/:classKey",
  async (req, res, next) => {
    try {
      const classData = await timeTableData.aggregate([
        {
          $match: { day: req.params.day, classKey: req.params.classKey },
        },
        {
          $lookup: {
            from: "courseData",
            localField: "classCode",
            foreignField: "_id",
            as: "classInfo",
          },
        },
      ]);

      // const roomData = await timeTableData.aggregate([
      //   {
      //     $match: { day: req.params.day, classKey: req.params.classKey },
      //   },
      //   {
      //     $lookup: {
      //       from: "roomData",
      //       localField: "roomCode",
      //       foreignField: "_id",
      //       as: "roomInfo",
      //     },
      //   },
      // ]);

      res.status(200).json({ classData });
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

// get a list of students from mongo db
router.get("/students/all", async (req, res, next) => {
  try {
    const students = await Promise.all([user.find({ role: "student" })]);
    res.status(200).send(students);
  } catch (err) {
    res.status(500).send(err);
  }
});
// get details of a single student

router.get("/students/:id", async (req, res, next) => {
  try {
    const student = await user.findOne({ _id: req.params.id });
    res.status(200).send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get attendance data from mongo db

router.get("/attendance", async (req, res, next) => {
  try {
    const courses = await attendanceData.find({});
    res.status(200).send(courses);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get details of a single course's attendance

router.get("/attendance/course/:id", async (req, res, next) => {
  try {
    const course = await attendanceData.find({ courseCode: req.params.id });
    res.status(200).send(course);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get details of a single student attendance

router.get("/attendance/student/:id", async (req, res, next) => {
  try {
    const course = await attendanceData.find({
      studentCode: req.params.studentId,
    });
    res.status(200).send(course);
  } catch (err) {
    res.status(500).send(err);
  }
});

// get deatils of a specific course's attendance of a specific student

router.get(
  "/attendance/course/:courseId/student/:studentId",
  async (req, res, next) => {
    try {
      const course = await attendanceData.findOne({
        courseCode: req.params.courseId,
        studentCode: req.params.studentId,
      });
      res.status(200).send(course);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

// get the attendance of a student for a specific course along with the student details   NOT YET IMPLEMENTED

// router.get(
//   "/attendance-student-details/:id/:studentId",
//   async (req, res, next) => {
//     try {
//       const presenceData = await attendanceData.findOne({
//         courseCode: req.params.id,
//         studentCode: req.params.studentId,
//       });
//       const studentData = await user.findOne({ _id: req.params.studentId });
//       res.status(200).send([presenceData, studentData]);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   }
// );

// put attendance update in mongo db

router.put(
  "/attendance/update/course/:courseid/student/:studentId",
  async (req, res, next) => {
    try {
      const course = await attendanceData.findOneAndUpdate(
        { _id: req.params.id, studentCode: req.params.studentId },
        req.body
      );
      res.status(200).send(course);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

module.exports = router;
