const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  studentId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  class: {
    type: String,
    require: true,
  },
});

const students = mongoose.model("Students", studentsSchema);

module.exports = students;
