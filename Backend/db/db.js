const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const ConnectDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;
    await mongoose.connect(MONGO_URI);
    console.log("MONGODB has been connected succesfully.");
  } catch (error) {
    console.log("There is an error while connecting to MONGODB", error.message);
  }
};

module.exports = ConnectDB;
