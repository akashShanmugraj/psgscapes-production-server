import express from "express";
import {
  roominfo,
  timetableinfo,
  courseinfo,
  attendanceinfo,
  userinfo,
  utilityhelp,
  infologstream
} from "../controllers/utilityController.js";
const router = express.Router();
router.get("/room/all", roominfo);
router.get("/timetable/all", timetableinfo);
router.get("/course/all", courseinfo);
router.get("/attendance/all", attendanceinfo);
router.get("/user/all", userinfo);
router.get("/help", utilityhelp);
router.get("/log/info", infologstream);
router.post("/info", (req, res) => {
  const requestObject = {
    "req.app": req.app,
    "req.baseurl": req.baseUrl,
    "req.body": req.body,
    "req.cookie": req.cookie,
    "req.hostname": req.hostname,
    "req.ipv6": req.ipv6,
    "req.params": req.params,
    "req.path": req.path,
    "req.protocol": req.protocol,
    "req.query": req.query,
    "req.route": req.route,
    "req.tlsInsecure": req.tlsInsecure,
    "req.auth": req.auth,
  };

  res.send(requestObject);
})
router.get("/", (req, res) => {
    res.send("these are utility routes, kindly go to /utility/help for more information");
});
export default router;
