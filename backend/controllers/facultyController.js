import AsyncHandler from "express-async-handler";
import { facultyData } from "../schemas/Schema.js";
const getFacultyInfo = AsyncHandler(async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const facultyInfo = await facultyData.find({ _id: req.params.id });
    console.log(facultyInfo);
    res.json(facultyInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export { getFacultyInfo };
