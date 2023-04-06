import Attendance from "../server/attendance.js";

export default class AttendanceController {
    static async apiGetOneDayTimetable(req, res, next) {
        try {
            let day = req.params.day
            let clcode = req.params.clcode
            let timeTableData = await Attendance.getDayTimetable(clcode, day)
            if (!timeTableData) {
                res.status(404).json({error: "Invalid Parameter"})
                return
            }
            res.json(timeTableData)
        } catch (e) {
            console.error(e)
            res.status(500).json({error: e})
        }
    }
    static async apiGetAllTimetable(req, res, next) {
        try {
            let clcode = req.params.clcode
            let timeTableData = await Attendance.getAllTimetable(clcode)
            if (!timeTableData) {
                res.status(404).json({error: "Unknown error, refer console"})
                return
            }
            res.json(timeTableData)
        } catch (e) {
            console.error(e)
            res.status(500).json({error: e})
        }
    }

    static async apiGetStudentAttendance(req, res, next) {
        try {
            let crcode = req.params.crcode
            let rollnum = req.params.rollnum
            let clcode = req.params.clcode
            let studentAttendance = await Attendance.getStudentAttendance(clcode ,rollnum, crcode)
            if (!studentAttendance) {
                return res.status(404).json({error: "Invalid Parameter"})
            }
            res.json(studentAttendance)
        } catch (e) {
            console.error(e)
            res.status(500).json({error: e})
        }
    }
    static async apiGetAllAttendance(req, res, next) {
        try {
            let clcode = req.params.clcode
            let crcode = req.params.crcode
            let studentAttendance = await Attendance.getAllAttendance(clcode, crcode)
            if (!studentAttendance) {
                return res.status(404).json({error: "Invalid Parameter"})
            }
            res.json(studentAttendance)
        } catch (e) {
            console.error(e)
            res.status(500).json({error: e})
        }

    }
    static async apiHelp(req,res,next) {
        res.json({"help":"Timetable Route /:clcode/timetable/, Attendance Route /:clcode/attendance/:crcode/:rollnum/, all rollnums from 1 to 80 except 30 is available; Available :clcode is only c22z2; Available :crcode is only cr19z201"})
    }
}