import express from "express";
import {
  getAttendanceforCoursebyClass,
  gettAttendancebyStudent,
} from "../controllers/attendanceController.js";
const router = express.Router();
router.get("/byClass/:id", getAttendanceforCoursebyClass);
router.get("/student/:id", gettAttendancebyStudent);
export default router;
