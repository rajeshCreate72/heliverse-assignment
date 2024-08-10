const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./database");

dotenv.config();

connectDatabase();

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT} `);
});
