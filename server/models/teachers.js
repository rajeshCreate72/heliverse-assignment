const mongoose = require("mongoose");

const teachersSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: false,
  },
  subject: {
    type: String,
    require: true,
  },
  class: {
    type: String,
    require: true,
  },
});

const teachers = mongoose.model("Teachers", teachersSchema);

module.exports = teachers;
