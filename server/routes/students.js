const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Students = require("../models/students");
const Teachers = require("../models/teachers");
const authenticateToken = require("../middleware/auth");
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

// Create students
router.post("/create-student", async (req, res) => {
  const { studentId, studentName, class: studentClass } = req.body;

  try {
    const student = await Teachers.findOne({ sId: studentId });

    if (student) {
      return res.status(200).json({ message: "Student already has account" });
    }
    const data = {
      sId: studentId,
      name: studentName,
      class: studentClass,
    };
    await Teachers.create(data);
    res
      .status(200)
      .json({ message: `${studentName} account has been created` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Network problem" });
  }
});

// Student Login
router.post("/post-id", async (res, req) => {
  const { studentId, password, class: studentClass } = req.body;

  try {
    const student = await Students.findOne({ sId: studentId });
    const teacher = await Teachers.findOne({ class: studentClass });
    if (!student) {
      return res
        .status(401)
        .json({ message: `Ask ${teacher.name} to create account` });
    }
    res.status(200).json({ message: "Student found" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Network error" });
  }
});

router.post("/post-password", async (res, req) => {
  const { studentId, password } = req.body;

  try {
    const student = await Teachers.findOne({ sId: studentId });
    if (!student.password) {
      const hashPassword = await bcrypt.hash(password, 10);
      student.password = hashPassword;

      await student.save();

      const token = jwt.sign(
        { id: student.sId, class: student.class },
        process.env.JWT_SECRECT
      );
      res.status(200).json({ message: "Login successful", token });
    }

    const checkPass = await bcrypt.compare(password, student.password);

    if (!checkPass) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    res.status(200).json({ message: "Password correct" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Network error" });
  }
});

router.put("/update/:sId", async (req, res) => {
  const { studentId } = req.params;
  const updateData = req.body;

  try {
    const updatedStudent = await Students.findByIdAndUpdate(
      studentId,
      updateData,
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student's data updated successfully",
      teacher: updatedStudent,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error updating student's Data" });
  }
});

router.delete("/delete/:sId", async (req, res) => {
  const { studentId } = req.params;

  try {
    const deletedStudent = await Students.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error deleting student" });
  }
});

// Protected route jwt authentication
router.get("/protected-route", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
