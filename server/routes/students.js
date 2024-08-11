const express = require("express");
const Students = require("../models/students");
const router = express.Router();

router.get("/", async (req, res) => {
  const { class: studentClass } = req.query;
  try {
    const getAllStudents = await Students.find({ class: studentClass });
    res.status(200).json({ students: getAllStudents });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Cannot get students" });
  }
});

module.exports = router;
