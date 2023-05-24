import { roomData, timeTableData, courseData, attendanceData, user } from "../schemas/Schema.js";

const roominfo = async (req, res) => {
    const room = await roomData.find().lean();
    res.status(200).json(room);
};
const timetableinfo = async (req, res) => {
    const timetable = await timeTableData.find().lean();
    res.status(200).json(timetable);
};
const courseinfo = async (req, res) => {
    const course = await courseData.find().lean();
    res.status(200).json(course);
};
const attendanceinfo = async (req, res) => {
    const attendance = await attendanceData.find().lean();
    res.status(200).json(attendance);
};
const userinfo = async (req, res) => {
    const users = await user.find().lean();
    res.status(200).json(users);
};
const utilityhelp = (req, res) => {
    res.sendfile("utilityhelp.html");
};
export { roominfo, timetableinfo, courseinfo, attendanceinfo, userinfo, utilityhelp};