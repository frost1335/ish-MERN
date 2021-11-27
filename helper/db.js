require("dotenv").config("../.env");
const mongoose = require("mongoose");

const uri = process.env.MONGO_URI;

module.exports = async () => {
  try {
    await mongoose.connect(uri);
    console.log("👏 MongoDB connected !");
  } catch (error) {
    console.log(error);
  }
};
