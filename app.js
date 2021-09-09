const express = require('express');
const app = express();
const port = 3000; //app.listen(3000)


// METODO GET

app.get("/", (req, res) => {
    // res.send("Hola Clase PWA")
    res.json(
                {
                    "status": "true",
                    "message": "ok",
                    "data": 
                    [
                        {
                            id: 1,
                            nombre: 'Homero',
                            apellido: 'Simpson',
                            edad: 35,
                        },
                        {
                            id: 2,
                            nombre: 'Bart',
                            apellido: 'Simpson',
                            edad: 8,
                        },
                        {
                            id: 3,
                            nombre: 'Lisa',
                            apellido: 'Simpson',
                            edad: 10,
                        },
                        {
                            id: 4,
                            nombre: 'Magui',
                            apellido: 'Simpson',
                            edad: 2,
                        },
                        {
                            id: 5,
                            nombre: 'Marge',
                            apellido: 'Bouvier',
                            edad: 35,
                        },
                    ]
                }
       
            )
});

// METODO POST

app.post('/', (req, res) =>{
    res.send(
        `
        <html>
            <head></head>
                <body>
                    <p>POST PAGINA DE INICIO PRUEBA</p>
                </body>
        </html>
        `)
});

app.listen(port, () => {
    console.log(`servidor escuchando en url+port: https://localhost:${port}`)
});
