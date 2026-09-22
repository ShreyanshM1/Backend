let mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: 50,
    required: true,
  },
  branch: {
    type: String,
    maxLength: 30,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const student = mongoose.model("student", studentSchema);
module.exports = student;
