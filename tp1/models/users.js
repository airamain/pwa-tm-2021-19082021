const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    required: true,
    trim: true,
  },
  email: {
    type: "string",
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: "string",
    required: true,
    trim: true,
  },
  register: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Users", userSchema);
