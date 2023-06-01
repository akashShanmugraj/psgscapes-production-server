import { getFacultyInfo } from "../controllers/facultyController.js";
import express from "express";
import { Router } from "express";
const router = express.Router();
router.get("/:id", getFacultyInfo);
export default router;
