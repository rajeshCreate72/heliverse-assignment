const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  sId: {
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
  password: {
    type: String,
    require: false,
  },
});

const students = mongoose.model("Students", studentsSchema);

module.exports = students;
