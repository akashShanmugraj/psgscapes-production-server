import express from "express";
import {
  getUserInfo,
  studClassInfo,
} from "../controllers/userInfoController.js";
const router = express.Router();
router.get("/:id", getUserInfo);
router.get("/studentsofclass/:classKey", studClassInfo);
export default router;
