const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Teachers = require("../models/teachers");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

// Create Teachers
router.post("/create-teacher", async (req, res) => {
  const { teacherName, email, subject, class: teachersClass } = req.body;

  try {
    const teacher = await Teachers.findOne({ email: email });

    if (!teacher) {
      const data = {
        name: teacherName,
        email: email,
        subject: subject,
        class: teachersClass,
      };
      await Teachers.create(data);
      res
        .status(200)
        .json({ message: `${teacherName} account has been created` });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Network problem" });
  }
});

// Get all teachers list
router.get("/get-teachers", async (res, req) => {
  try {
    const teachersList = await Teachers.find();
    res.status(200).json({ teachersList: teachersList });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Network error" });
  }
});

// Teacher Login
router.post("/post-mail", async (res, req) => {
  const { email } = req.body;

  try {
    const teacher = await Teachers.findOne({ email: email });
    if (!teacher) {
      return res
        .status(401)
        .json({ message: "Ask Pricipal to create account" });
    }
    res.status(200).json({ message: "Teacher found" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Network error" });
  }
});

router.post("/post-password", async (res, req) => {
  const { email, password } = req.body;

  try {
    const teacher = await Teachers.findOne({ email: email });
    if (!teacher.password) {
      const hashPassword = await bcrypt.hash(password, 10);
      teacher.password = hashPassword;

      await teacher.save();

      const token = jwt.sign(
        { id: teacher._id, email: teacher.email },
        process.env.JWT_SECRECT
      );
      res.status(200).json({ message: "Logging sucessful", token });
    }

    const checkPass = await bcrypt.compare(password, teacher.password);

    if (!checkPass) {
      return res.status(400).json({ message: "Incorrect Password" });
    }

    res.status(200).json({ message: "Password correct" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Network error" });
  }
});

router.put("/update/:email", async (req, res) => {
  const { teacherEmail } = req.params;
  const updateData = req.body;

  try {
    const updatedTeacher = await Teachers.findByIdAndUpdate(
      teacherEmail,
      updateData,
      { new: true }
    );

    if (!updatedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({
      message: "Teacher's data updated successfully",
      teacher: updatedTeacher,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error updating teacher's Data" });
  }
});

router.delete("/delete/:email", async (req, res) => {
  const { teacherEmail } = req.params;

  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherEmail);

    if (!deletedTeacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({ message: "Teacher deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error deleting teacher" });
  }
});

// Protected route for jwt auth
router.get("/protected-route", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
