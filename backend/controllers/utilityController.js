import { roomData, timeTableData, courseData, attendanceData, user } from "../schemas/Schema.js";
import infolog from "../logger.js";

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
    infolog(req);
    const attendance = await attendanceData.find().lean();
    res.status(200).json(attendance);
};
const userinfo = async (req, res) => {
    infolog(req);
    const users = await user.find().lean();
    res.status(200).json(users);
};
const utilityhelp = (req, res) => {
    infolog(req);
    res.sendfile("utilityhelp.html");
};
const infologstream = (req, res) => {
    infolog(req);
    res.sendfile("./logs/info.log");
};
export { roominfo, timetableinfo, courseinfo, attendanceinfo, userinfo, utilityhelp, infologstream};