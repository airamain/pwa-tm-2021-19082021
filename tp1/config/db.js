const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.STRING_MONGODB);
    console.log("conectado a DB");
  } catch (err) {
    console.log(err);
    process.exit(1); //detiene la app
  }
};

module.exports = conectarDB;
