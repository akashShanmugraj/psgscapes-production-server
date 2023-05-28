import express from "express";
import {
  getAttendanceforCoursebyClass,
  gettAttendancebyStudent,
  getAllAttendance,
} from "../controllers/attendanceController.js";
const router = express.Router();
router.get("/byClass/:id", getAttendanceforCoursebyClass);
router.get("/student/:id", gettAttendancebyStudent);
router.get("/students", getAllAttendance);
export default router;
