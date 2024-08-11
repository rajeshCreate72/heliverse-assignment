const express = require("express");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");
const jwt = require("jsonwebtoken");
const authenticateToken = require("../middleware/auth");
const router = express.Router();

//Creating client
const client = new MongoClient(process.env.DB_URI, {
  serverSelectionTimeoutMS: 30000,
});

// Principal login
router.post("/", async (req, res) => {
  await client.connect(); // Connect to database
  const database = client.db("heliverse-assignment"); //Getting database with name "heliverse-assignment"
  const collection = database.collection("Principal"); // Getting the collection with "name"
  try {
    const principal = await collection.findOne({
      email: "principal@classroom.com",
    });
    const password = req.body.password;

    const passwordIsValid = await bcrypt.compare(password, principal.password);

    if (!passwordIsValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      { id: principal._id, email: principal.email },
      process.env.JWT_SECRECT
    );
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});

// Protected route principal Authentication
router.get("/protected-route", authenticateToken, (req, res) => {
  res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
});

module.exports = router;
