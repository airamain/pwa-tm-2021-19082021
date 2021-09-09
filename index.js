const express = require('express');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const conectarDB = require('./config/db');

const port = process.env.PORT_SERVER || 4500

conectarDB()

app.use(express.json({ extend: true }))

app.use('/api/usuarios', require('./routes/usuarios'));


app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});