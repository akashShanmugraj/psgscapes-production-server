import axios from "axios";
import asyncHandler from "express-async-handler";
import { timeTableData, attendanceData } from "../schemas/Schema.js";
var timetable;

function getUUID(periods, periodNumber, courseCode) {
  for (const period of periods) {
    if (period.periodNumber === periodNumber && period.course === courseCode) {
      return period.uuid;
    }
  }
  return null; // Return null if no match is found
}

function verifyUUIDs(userUUIDs, dbUUIDs) {
  for (const userUUID of userUUIDs) {
    if (userUUID === dbUUIDs) {
      return true;
    }
  }
  return false;
}

function incrementTotalPresentandClasses(studentCode, courseCode) {
  attendanceData
    .findOneAndUpdate(
      {
        studentCode: studentCode,
        courseCode: courseCode,
      },
      { $inc: { totalClasses: 1, totalPresent: 1 } },
      { new: true }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function addAbsentDate(studentCode, courseCode, date, time) {
  attendanceData
    .findOneAndUpdate(
      {
        studentCode: studentCode,
        courseCode: courseCode,
      },
      { $push: { absent: { date: date, time: time } } },
      { new: true }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
const presenceVerify = asyncHandler(async (req, res) => {
  const dateTime = new Date(req.body.datetime);
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDate();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  const formattedDate = `${year}-${month}-${day}`;
  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const Day = dateTime.getDay();

  axios
    .get("/api/timetable/comparison/day/${req.body.classKey}/${Day}")
    .then((response) => {
      timetable = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  const uuid = getUUID(
    timetable.periods,
    req.body.periodNumber,
    req.body.courseCode
  );
  if (verifyUUIDs(req.body.uuids, uuid)) {
    incrementTotalPresentandClasses(req.body.studentCode, req.body.courseCode);
  } else {
    addAbsentDate(
      req.body.studentCode,
      req.body.courseCode,
      formattedDate,
      formattedTime
    );
  }
});

export { presenceVerify };
