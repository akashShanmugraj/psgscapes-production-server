import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { user } from "../schemas/Schema.js";
import infolog from "../logger.js";

const getUserInfo = asyncHandler(async (req, res) => {
  infolog(req);
  const userInfo = await user.findOne({ _id: req.params.id });
  console.log(userInfo);
  res.json(userInfo);
});
const studClassInfo = asyncHandler(async (req, res) => {
  infolog(req);
  const classInfo = await user.find({
    classKey: req.params.classKey,
    role: "student",
  });
  res.json(classInfo);
});

const studInfo = asyncHandler(async (req, res) => {
  infolog(req);
  const studInfo = await user.find({ role: "student" });
  res.json(studInfo);
});
export { getUserInfo, studClassInfo, studInfo };
