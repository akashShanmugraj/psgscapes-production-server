const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const attendanceData = require("./attendanceData");
const roomData = require("./roomData");

//create time table schema
const timeTableSchema = new Schema({
  day: { type: String, required: true },
  classKey: { type: String, required: true },
  1: [
    {
      classCode: {
        type: Schema.Types.ObjectId,
        ref: "courseData",
        required: true,
      },
      roomCode: {
        type: Schema.Types.ObjectId,
        ref: "roomData",
        required: true,
      },
    },
  ],
  2: [
    {
      classCode: {
        type: Schema.Types.ObjectId,
        ref: "courseData",
        required: true,
      },
      roomCode: {
        type: Schema.Types.ObjectId,
        ref: "roomData",
        required: true,
      },
    },
  ],
  3: [
    {
      classCode: {
        type: Schema.Types.ObjectId,
        ref: "courseData",
        required: true,
      },
      roomCode: {
        type: Schema.Types.ObjectId,
        ref: "roomData",
        required: true,
      },
    },
  ],
  4: [
    {
      classCode: {
        type: Schema.Types.ObjectId,
        ref: "courseData",
        required: true,
      },
      roomCode: {
        type: Schema.Types.ObjectId,
        ref: "roomData",
        required: true,
      },
    },
  ],
  5: [
    {
      classCode: {
        type: Schema.Types.ObjectId,
        ref: "courseData",
        required: true,
      },
      roomCode: {
        type: Schema.Types.ObjectId,
        ref: "roomData",
        required: true,
      },
    },
  ],
  6: [
    {
      classCode: {
        type: Schema.Types.ObjectId,
        ref: "courseData",
        required: true,
      },
      roomCode: {
        type: Schema.Types.ObjectId,
        ref: "roomData",
        required: true,
      },
    },
  ],
  7: [
    {
      classCode: {
        type: Schema.Types.ObjectId,
        ref: "courseData",
        required: true,
      },
      roomCode: {
        type: Schema.Types.ObjectId,
        ref: "roomData",
        required: true,
      },
    },
  ],
  8: [
    {
      classCode: {
        type: Schema.Types.ObjectId,
        ref: "courseData",
        required: false,
      },
      roomCode: {
        type: Schema.Types.ObjectId,
        ref: "roomData",
        required: false,
      },
    },
  ],
});

const timeTableData = mongoose.model("timeTableData", timeTableSchema);
//exports
module.exports = timeTableData;
