import mongodb from "mongodb"
const ObjectID = mongodb.ObjectID

let timetableConnection
let databaseConnection
export default class Attendance {
    static async injectDB(conn) {
        if (databaseConnection) {
            return
        }

        try {
            databaseConnection = conn
            timetableConnection = await databaseConnection.db("c22z2").collection("timetable")
        } catch (e) {
            console.error(`Unable to establish connection, ref: ${e}`)
        }
    }

    static async getAllTimetable(clcode) {
        try {
            const timetableData = await databaseConnection.db(`${clcode}`).collection("timetable").find({})
            return timetableData.toArray()
        } catch (e) {
            console.error("Unable to get Timetable")
            return {error: e}
        }
    }
    static async getDayTimetable(clcode, day) {
        try {
            console.log(day)
            const timetableDay = await databaseConnection.db(`${clcode}`).collection("timetable").find({"day": `${day}`})
            return timetableDay.toArray()
        } catch (e) {
            console.error(e)

        }
    }
    static async getStudentAttendance(clcode, rollNumber, courseCode) {
        try {
            const studentAttendance = await databaseConnection.db(`${clcode}`).collection(`${courseCode}`).find({"rollNumber": `${rollNumber}`})
            return studentAttendance.toArray()
        } catch (e) {
            console.error(e)
        }
    }

    static async getAllAttendance(clcode, crcode) {
        try {
            const studentAttendance = await databaseConnection.db(`${clcode}`).collection(`${crcode}`).find({})
            return studentAttendance.toArray()
        } catch (e) {
            console.error(e)
        }
    }
}