const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

const get = (url) => {
    const data = axios.get(url)
        .then(res => console.log(res.data.results))
        .catch(e => console.log(e));
    //return data;
    //console.log(data);
}

const getAsync = async (url) => {
    try {
        const data = await axios.get(url);
        return data;
    }
    catch (error) {
        console.log(error)
    }
}

const getPersonajes = async () => {
    try {
        const personajes = await getAsync(URL);
        console.log(personajes.data.info);
    }
    catch (error) {
        console.log(error);
    }
    
}

const getPersonajesNombre = async () => {
    try {
        const personajes = await getAsync(URL);
        let nombreP = personajes.data.results.map(personaje => personaje.name);

        console.log(nombreP);
    }
    catch (error) {
        console.log(error);
    }
}

const getStatus = async (status = "Alive") => {
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

//getPersonajes();
//getPersonajesNombre();
getStatus();