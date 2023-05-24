import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import timetableRoutes from "./routes/timetableRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import courseDataRoutes from "./routes/courseDataRoutes.js";
import attendanceUpdateRoutes from "./routes/attendanceUpdateRoutes.js";
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const app = express();
app.use(morgan("dev"));
app.get("/", (req, res) => {});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/userInfo", userInfoRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/courseData", courseDataRoutes);
app.use("/api/attendanceUpdate", attendanceUpdateRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});