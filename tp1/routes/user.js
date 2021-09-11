const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const usersController = require("../controller/usersController");

router.get("/", (req, res) => {
  res.send("enviado desde usuarios con metod get");
});

router.post(
  "/",
  [
    check("name", "es obligatorio").not().isEmpty(),
    check("email", "debes completar con email").isEmail(),
    check("password", "debes tener mas de 6 caracteres ").isLength({ min: 6 }),
  ],
  usersController.createUsers
);

module.exports = router;
