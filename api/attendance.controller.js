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
        const helpObject = {"help": {
            "Timetable API":{"route": "{BASE_URL}/:clcode/timetable/:day", "info": ":clcode is a param, replace it with classcode like c22z2;:day is an optional param, replace it like monday", "availability": "Only clcode available is c22z2"},
            "Attendance API":{"route": "{BASE_URL}/:clcode/attendance/:crcode/:rollnum/", "info": ":crcode is a param, replace it like cr19z201 ; :rollnum is an optional param, replace it like 22z240", "availability": "Only crcode available is cr19z201, only rollnums from 22z201 to 22z280 (without 22z230) is available, CUSTOM DATA ONLY"}

        }}
        res.json(helpObject)
    }

    static async apiGetAllRoomUUID(req, res, next) {
        try {
            let UUIDData = await Attendance.getALLRoomUUID()
            res.json(UUIDData)
        } catch (e) {
            console.error(e)
            res.status(500).json({error: e})
        }
    }
}