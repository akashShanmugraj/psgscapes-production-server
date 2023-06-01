import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { courseData } from "../schemas/Schema.js";
import infolog from "../logger.js";

const courseInfo = asyncHandler(async (req, res) => {
  infolog(req);
  
  const courseId = req.params.id;
  const course = await courseData.findOne({ _id: courseId }).lean();
  delete course.client;

  res.status(200).json(course);
});

export { courseInfo };
