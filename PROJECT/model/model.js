import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  grId: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  course: {
    type: String,
    required: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },

  mobileNumber: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;