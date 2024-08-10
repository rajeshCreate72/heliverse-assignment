const express = require("express");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongoose");
const jwt = require("jsonwebtoken");
const router = express.Router();

const client = new MongoClient(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

router.post("/", async (req, res) => {
  await client.connect();
  const database = client.db("heliverse-assignment");
  const collection = database.collection("Principal");
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
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error.message);
  }
});
