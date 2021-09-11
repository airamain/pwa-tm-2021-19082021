const express = require("express");
const app = express();
const conectarDB = require("./config/db");

require("dotenv").config({ path: "./config/variables.env" });

const port = process.env.PORT_SERVER;
conectarDB();

app.use(express.json({ extend: true }));

app.use("/user", require("./routes/user"));

app.listen(port, () => console.log("escuchando puerto", port));
