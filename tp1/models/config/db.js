const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.STRING_MONGODB);
    console.log("conectado");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
