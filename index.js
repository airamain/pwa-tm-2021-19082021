const express = require('express');
const app = express();
const conectarDB = require('./config/db');

require('dotenv').config({ path: './config/variables.env' });
const port = process.env.PORT_SERVER || 4500

// llamar a la conectar
conectarDB()

// lectura / habilitar express.json 
app.use(express.json({ extend: true }));

//Routes
app.use('/api/usuarios', require('./routes/Usuario'));

app.listen(port, () => {
    console.log(`server escuchando en port :${port}`);
})
