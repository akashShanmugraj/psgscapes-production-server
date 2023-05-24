import asyncHandler from "express-async-handler";
import mongoose from "mongoose";

import { timeTableData } from "../schemas/Schema.js";
const getTimetablewithRoomCode = asyncHandler(async (req, res) => {
  const data = await timeTableData.aggregate([
    {
      $match: { classKey: req.params.id },
    },
    {
      $lookup: {
        from: "roomdatas",
        localField: "periods.roomCode",
        foreignField: "_id",
        as: "roomData",
      },
    },
  ]);
  const roomDataMap = data[0].roomData.reduce((acc, room) => {
    acc[room._id] = room.uuid;
    return acc;
  }, {});

  // Update the periods with the corresponding uuid from roomData
  const updatedData = data.map((item) => ({
    ...item,
    periods: item.periods.map((period) => ({
      ...period,
      uuid: roomDataMap[period.roomCode],
    })),
  }));
  const timetable = JSON.stringify(updatedData, null, 2);
  console.log();

  res.status(200).send(timetable);
});

const getTimetableDaywithRoomCode = asyncHandler(async (req, res) => {
  const data = await timeTableData.aggregate([
    {
      $match: { classKey: req.params.id, day: req.params.day },
    },
    {
      $lookup: {
        from: "roomdatas",
        localField: "periods.roomCode",
        foreignField: "_id",
        as: "roomData",
      },
    },
  ]);
  const roomDataMap = data[0].roomData.reduce((acc, room) => {
    acc[room._id] = room.uuid;
    return acc;
  }, {});

  // Update the periods with the corresponding uuid from roomData
  const updatedData = data.map((item) => ({
    ...item,
    periods: item.periods.map((period) => ({
      ...period,
      uuid: roomDataMap[period.roomCode],
    })),
  }));
  const timetable = JSON.stringify(updatedData, null, 2);
  console.log();

  res.status(200).send(timetable);
});

const getTimetableWeek = asyncHandler(async (req, res) => {
  const timetableInfo = timeTableData.find({ classKey: req.params.id });
  res.status(200).send(timetableInfo);
});

const getTimetableDay = asyncHandler(async (req, res) => {
  const timetableInfo = timeTableData.find({
    classKey: req.params.id,
    day: req.params.day,
  });
  res.status(200).send(timetableInfo);
});

export {
  getTimetablewithRoomCode,
  getTimetableDaywithRoomCode,
  getTimetableDay,
  getTimetableWeek,
};
