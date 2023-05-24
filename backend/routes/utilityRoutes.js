import express from "express";
import {
  roominfo,
  timetableinfo,
  courseinfo,
  attendanceinfo,
  userinfo,
  utilityhelp,
} from "../controllers/utilityController.js";
const router = express.Router();
router.get("/room/all", roominfo);
router.get("/timetable/all", timetableinfo);
router.get("/course/all", courseinfo);
router.get("/attendance/all", attendanceinfo);
router.get("/user/all", userinfo);
router.get("/help", utilityhelp);
router.get("/", (req, res) => {
    res.send("these are utility routes, kindly go to /utility/help for more information");
});
export default router;
