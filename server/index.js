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

app.options("*", cors());

app.use(
  cors({
    origin: ["https://quadiro-assignment-two.vercel.app"],
    methods: ["POST", "GET", "UPDATE", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-type", "Authorization"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
      <html>
        <title>Heliverse Backend</title>
        <h1>Heliverse Backend</h1>
      </html>
    `);
});

app.use("/api/v1/principal", principalRoutes);
app.use("/api/v1/teacher", teacherRoutes);
app.use("/api/v1/student", studentRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT} `);
});
