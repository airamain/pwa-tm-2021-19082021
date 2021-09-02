const express = require('express');
const app = express();

require('dotenv').config({path: './config/variables.env'});
const port = process.env.PORT_SERVER || 4500

const home = require('./routes/home');
const servicios = require('./routes/servicios');
const posteos = require('./routes/posteos');


app.use('/servicios', servicios);
app.use('/', posteos);
app.use('/', home);



app.listen(port, () =>{
    console.log(`server escuchando en port :${port}`);
})
