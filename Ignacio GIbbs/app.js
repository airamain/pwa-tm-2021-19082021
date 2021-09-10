const express = require("express");
const app = express();
const port = 3000;

// GET
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Levantando Server</title>
    </head>
    <body>
        <h1>Levantando Server</h1>
        <h3>Pagina de inicio</h3>
        <h3>Método HTTP GET</h3>
    </body>
    </html>
  `);
});

// POST
app.post("/", (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Levantando Server</title>
  </head>
  <body>
      <h1>Levantando Server</h1>
      <h3>Pagina de inicio</h3>
      <h3>Método HTTP POST</h3>
  </body>
  </html>
`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en url + port: http://localhost:${port}`);
});
