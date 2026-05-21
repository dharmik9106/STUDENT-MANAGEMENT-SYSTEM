import HttpError from "../middleware/HttpError.js";
import Student from "../model/model.js";

// ADD STUDENT
const add = async (req, res, next) => {
  try {
    const { name, grId, email, course, isActive, mobileNumber } = req.body;

    const newStudent = new Student({
      name,
      grId,
      email,
      course,
      isActive,
      mobileNumber,
    });

    await newStudent.save();

    res.status(201).json({
      success: true,
      message: "Student added successfully",
      student: newStudent,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// GET ALL STUDENTS
const getAllStudentData = async (req, res, next) => {
  try {
    const students = await Student.find();

    if (students.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No student data found",
      });
    }

    res.status(200).json({
      success: true,
      total: students.length,
      students,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// GET STUDENT BY ID
const getStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const student = await Student.findById(id);

    if (!student) {
      return next(new HttpError("Student not found", 404));
    }

    res.status(200).json({
      success: true,
      student,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// UPDATE STUDENT
const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedStudent) {
      return next(new HttpError("Student not updated", 400));
    }

    res.status(200).json({
      success: true,
      message: "Student updated successfully",
      student: updatedStudent,
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

// DELETE STUDENT
const deleteStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return next(new HttpError("Student not deleted", 400));
    }

    res.status(200).json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    next(new HttpError(error.message, 500));
  }
};

export default {
  add,
  getAllStudentData,
  getStudentById,
  updateStudent,
  deleteStudent,
};