
import express from "express";

import studentcontroller from "../conrtoller/studentcontroller.js";

const router = express.Router();

router.post("/add", studentcontroller.add);

router.get("/getAllStudents", studentcontroller.getAllStudentData);

router.get("/:id", studentcontroller.getStudentById);

router.delete("/:id", studentcontroller.deleteStudent);

router.patch("/:id",studentcontroller.updateStudent)

export default router;