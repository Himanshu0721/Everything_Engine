const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb://localhost:27017/everythingEngine"
    );
    connect
      ? console.log("Connected to DB ")
      : console.log("could not connected to DB");
  } catch (error) {
    console.error("Error connecting to MONGODB: " + error.message);
  }
};

module.exports = connectDB;
