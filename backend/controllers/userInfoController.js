import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { user } from "../schemas/Schema.js";

const getUserInfo = asyncHandler(async (req, res) => {
  const userInfo = await user.findOne({ _id: req.params.id });
  console.log(userInfo);
  res.json(userInfo);
});

export { getUserInfo };
