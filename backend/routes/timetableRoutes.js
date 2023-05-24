import express from "express";
import { getTimetablewithRoomCode } from "../controllers/timetableController.js";
import { getTimetableDaywithRoomCode } from "../controllers/timetableController.js";
import { getTimetableDay } from "../controllers/timetableController.js";
import { getTimetableWeek } from "../controllers/timetableController.js";
const router = express.Router();
router.get("/comparison/week/:id", getTimetablewithRoomCode);
router.get("/comparison/day/:id/:day", getTimetableDaywithRoomCode);
router.get("/schedule/week/:id", getTimetableWeek);
router.get("/schedule/day/:id/:day", getTimetableDay);

export default router;
