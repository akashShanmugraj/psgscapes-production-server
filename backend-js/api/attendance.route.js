import express from "express"
import AttendanceControl from './attendance.controller.js'

const router = express.Router()

router.route("/:clcode/timetable/").get(AttendanceControl.apiGetAllTimetable)
router.route("/:clcode/timetable/:day").get(AttendanceControl.apiGetOneDayTimetable)
router.route("/:clcode/attendance/:crcode/:rollnum/").get(AttendanceControl.apiGetStudentAttendance)
router.route("/:clcode/attendance/:crcode/").get(AttendanceControl.apiGetAllAttendance)
router.route("/").get((req, res) => res.send("this is psg-scapes api"))

export default router