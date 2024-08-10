const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  class: {
    type: String,
    require: true,
  },
});

const students = mongoose.model("Students", teachersSchema);

module.exports = students;
