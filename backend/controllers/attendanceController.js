import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { attendanceData } from "../schemas/Schema.js";
import infolog from "../logger.js";

const getAttendanceforCoursebyClass = asyncHandler(async (req, res) => {
  const userInfo = await attendanceData.find({ courseCode: req.params.id });
  infolog(req, "attendance for course by class")
  //   console.log(userInfo);
  res.json(userInfo);
});

const gettAttendancebyStudent = asyncHandler(async (req, res) => {
  const studInfo = await attendanceData.find({ studentCode: req.params.id });
  infolog(req);
  // console.log(studInfo)
  res.json(studInfo);
});
const getAllAttendance = asyncHandler(async (req, res) => {
  infolog(req);
  const allInfo = await attendanceData.find({});
  // console.log(studInfo)
  res.json(allInfo);
});
const getSingleAttendanceRecord = asyncHandler(async (req, res) => {
  infolog(req);
  const singleInfo = await attendanceData.find({
    studentCode: req.params.studentCode,
    courseCode: req.params.id,
  });
  res.json(singleInfo);
});

export {
  getAttendanceforCoursebyClass,
  gettAttendancebyStudent,
  getAllAttendance,
  getSingleAttendanceRecord,
};
