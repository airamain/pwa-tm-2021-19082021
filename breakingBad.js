const axios = require('axios');

const URL = 'https://www.breakingbadapi.com/api/characters'


const getPersonajesNombre = async () => {
    try {
        const personajes = await getAsync(URL);
        let nombre = personajes.data.results.map(personaje => personaje.name);

        console.log(nombre);
    }
    catch (error) {
        console.log(error);
    }
}
const getGenero = async (status = "Alive") => {
    try {
        const info = await getAsync(URL);
        const personajes = info.data.results;
        const filtrado = personajes.filter(personaje => personaje.status === status);
        console.log(filtrado);
    }
    catch (e) {
        console.log(e);
    }
}

getGenero();
getPersonajesNombre();
