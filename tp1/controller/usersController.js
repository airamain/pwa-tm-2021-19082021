const Users = require("../models/users");
const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/varianles.env" });

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
      res.status(400).json("no-registrado");
    }
    user = new Users(req.body);

    const salt = await bcryptjs.genSalt(10);

    user.password = await bcryptjs.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.SECRET_WORD,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json(token);
      }
    );
  } catch (e) {
    console.log(e);
  }
};
