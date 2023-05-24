import express from "express";
import { courseInfo } from "../controllers/courseDataController.js";
const router = express.Router();
router.get("/:id", courseInfo);
export default router;
