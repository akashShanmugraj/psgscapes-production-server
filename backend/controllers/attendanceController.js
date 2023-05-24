import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { attendanceData } from "../schemas/Schema.js";

const getAttendanceforCoursebyClass = asyncHandler(async (req, res) => {
  const userInfo = await attendanceData.find({ courseCode: req.params.id });
  //   console.log(userInfo);
  res.json(userInfo);
});

const gettAttendancebyStudent = asyncHandler(async (req, res) => {
  const studInfo = await attendanceData.find({ studentCode: req.params.id });
  // console.log(studInfo)
  res.json(studInfo);
});

export { getAttendanceforCoursebyClass, gettAttendancebyStudent };
