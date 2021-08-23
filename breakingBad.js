const axios = require('axios');

const URL = 'https://www.breakingbadapi.com/api/characters'

const get = (URL) => {
    const data = axios.get(URL)
        .then(res => console.log(res.data.results))
        .catch(e => console.log(e));
}

const getAsync = async (URL) => {
    try {
        const data = await axios.get(URL);
        return data;
    }
    catch (error) {
        console.log(error)
    }
}
const getPersonajesNombre = async () => {
    try {
        const personajesA = await getAsync(URL);
        const personajes = personajesA.data;
        let nombre = personajes.map(personaje => personaje.name);
        console.log(nombre);
    }
    catch (error) {
        console.log(error);
    }
}
const getStatus = async (status = "Deceased") => {
    try {
        const personajesA = await getAsync(URL);
        const personajes = personajesA.data;
        const filtrado = personajes.filter(personaje => personaje.status === status);
        console.log(filtrado);
    }
    catch (e) {
        console.log(e);
    }
}

getStatus();
getPersonajesNombre();
