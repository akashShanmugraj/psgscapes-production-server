import express from "express";
import { presenceVerify } from "../controllers/attendanceUpdateController.js";
const router = express.Router();
router.post("/presenceVerify", presenceVerify);
export default router;
