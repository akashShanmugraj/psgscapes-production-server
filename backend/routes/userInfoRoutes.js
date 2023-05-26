import express from "express";
import {
  getUserInfo,
  studClassInfo,
  studInfo,
} from "../controllers/userInfoController.js";
const router = express.Router();
router.get("/:id", getUserInfo);
router.get("/studentsofclass/:classKey", studClassInfo);
router.get("/students", studInfo);
export default router;
