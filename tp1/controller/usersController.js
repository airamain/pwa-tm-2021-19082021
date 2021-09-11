const Users = require("../models/users");
const { validationResult } = require("express-validator");
exports.createUsers = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    let user = await Users.findOne({ email });
    if (user) {
      res.status(400).json("registrado");
    }
    user = new Users(req.body);
    await user.save();
    res.send("nuevo user");
  } catch (e) {
    console.log(e);
  }
};
