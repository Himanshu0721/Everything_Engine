const mongoose = require("mongoose");

const connectDB = async (MongoUrl) => {
  try {
    const connect = await mongoose.connect(MongoUrl);
    connect
      ? console.log("Connected to DB ")
      : console.log("could not connected to DB");
  } catch (error) {
    console.error("Error connecting to MONGODB: " + error.message);
  }
};

module.exports = connectDB;
