const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    mongoose.connect(process.env.DB_URI, { serverSelectionTimeoutMS: 30000 });
    console.log("Connected to database");
  } catch (error) {
    console.log("Error Connecting Database", error);
  }
};

module.exports = connectDatabase;
