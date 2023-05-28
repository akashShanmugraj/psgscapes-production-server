import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
import { user } from "../schemas/Schema.js";

const credential = async (req, res) => {
  const userInfo = await user.findOne({ _id: req.params.id });
  console.log(userInfo);
  res.json(userInfo);
};

const verify = asyncHandler(async (req, res) => {
  const userInfo = await user.findOne({ _id: req.body.rollnumber });
  if (userInfo["password"] == req.body.password) {
    console.log(userInfo)
    userInfo.password = undefined
    console.log(userInfo)
    res.status(200).json({userInfo});
  } else {
    res.status(400).json({ status: false });
  }
});

const authenticationHelp = asyncHandler(async (req, res) => {
  res.sendfile("authhelp.html");
});


export {authenticationHelp, credential, verify};