import express from "express";
import {
  getAttendanceforCoursebyClass,
  gettAttendancebyStudent,
  getAllAttendance,
  getSingleAttendanceRecord,
} from "../controllers/attendanceController.js";
const router = express.Router();
router.get("/byClass/:id", getAttendanceforCoursebyClass);
router.get("/student/:id", gettAttendancebyStudent);
router.get("/students", getAllAttendance);
router.get("/singleRecord/:id/:studentCode", getSingleAttendanceRecord);
export default router;
