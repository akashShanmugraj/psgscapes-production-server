import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import userInfoRoutes from "./routes/userInfoRoutes.js";
import timetableRoutes from "./routes/timetableRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import courseDataRoutes from "./routes/courseDataRoutes.js";
import attendanceUpdateRoutes from "./routes/attendanceUpdateRoutes.js";
import authenticationRoutes from "./routes/authenticationRoutes.js";
import utilityRoutes from "./routes/utilityRoutes.js";
import cors from "cors";
dotenv.config();
mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("dev"));
app.get("/", (req, res) => {});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/userInfo", userInfoRoutes);
app.use("/api/timetable", timetableRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/courseData", courseDataRoutes);
app.use("/api/attendanceUpdate", attendanceUpdateRoutes);
app.use("/api/auth", authenticationRoutes);
app.use("api/utility", utilityRoutes);
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on http://localhost:${process.env.PORT}`);
});
