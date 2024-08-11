const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDatabase = require("./database");

dotenv.config();

connectDatabase();

const principalRoutes = require("./routes/principal");
const teacherRoutes = require("./routes/teachers");
const studentRoutes = require("./routes/students");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/v1/principal", principalRoutes);
app.use("/api/v1/teacher", teacherRoutes);
app.use("/api/v1/student", studentRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT} `);
});
