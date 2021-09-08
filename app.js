const express = require('express');
const app = express();
const port = 3000; //app.listen(3000)

app.get("/", (req, res) => {
    // res.send("Hola Clase PWA")
    res.send(
        `
        <html>
            <head></head>
                <body>
                    <p> PAGINA DE INICIO </p>
                </body>
        </html>
        `
    )
});

app.listen(port, () => {
    console.log(`servidor escuchando en url+port: https://localhost:${port}`)
});
