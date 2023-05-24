import mongoose from "mongoose";
//user schema
const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  classKey: {
    type: String,
    required: false,
  },
});
//course schema
const cousreSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  faculty: [{ type: String, required: true }],
  classKey: [{ type: String, required: true }],
});
//room schema
const roomSchema = new mongoose.Schema({
  //room number for eg. A402
  _id: {
    type: String,
    required: true,
  },
  idString: {
    type: String,
    required: true,
  },
});
//attendance schema
const attendanceSchema = new mongoose.Schema({
  courseCode: { type: String, required: true },
  courseName: { type: String, required: true },
  facultyCode: { type: String, required: true },
  studentCode: { type: String, required: true },
  totalPresent: { type: Number, required: true },
  totalClasses: { type: Number, required: true },
  exemptClasses: { type: Number, required: true },
  medicalLeave: { type: Number, required: true },
  absent: [
    {
      date: { type: Date, required: true },
      time: { type: String, required: true },
    },
  ],
});
//timetable schema
const timeTableSchema = new mongoose.Schema({
  day: { type: String, required: true },
  classkey: { type: String, required: true },
  periods: [
    {
      period_number: Number,
      coursecode: { type: String, required: true },
      roomcode: { type: String, required: true },
    },
  ],
});

//modelling the schemas
const user = mongoose.model("user", userSchema);
const courseData = mongoose.model("courseData", cousreSchema);
const roomData = mongoose.model("roomData", roomSchema);
const attendanceData = mongoose.model("attendanceData", attendanceSchema);
const timeTableData = mongoose.model("timeTableData", timeTableSchema);

//exporting the models
export { user, courseData, roomData, attendanceData, timeTableData };
