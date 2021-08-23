const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

/* const get = (url) => {
    const data = axios.get(url)
        .then(res => console.log(res.data.results))
        .catch(e => console.log(e));
    //return data;
    //console.log(data);
} */

const getAsync = async (URL) => {
    try {
        const data = await axios.get('https://rickandmortyapi.com/api/character');
        return data;
    }
    catch (error) {
        console.log(error)
    }
} 

/* const getPersonajes = async () => {
    try {
        const personajes = await getAsync(URL);
        console.log(personajes.data);
    }
    catch (error) {
        console.log(error);
    }
    
} */
/* 
//map, filter
const getPersonajesNombre = async () => {
    try {
        const personajes = await getAsync(URL);
        /*personajes.data.results.forEach(personaje => {
            nombreP.push(personaje.name);
        });*///esta es la forma menos eficiente

//diferencia entre map y filtrer
// map --> el array crea una nueva array y va haciendo push solo insertando datos dentro
// filtrer --> 

/* let nombreP = personajes.data.results.map(personaje => personaje.name);

    console.log(nombreP);
}
catch (error) {
    console.log(error);
}
}  */

const getGenero = async (species = "Human") => {
    try {
        const info = await getAsync('https://rickandmortyapi.com/api/character');
        const personajes = info.data.results;
        const filtrado = personajes.filter(especies => especies.species === species); 
        console.log(filtrado);
    }
    catch (e) {
        console.log(e);
    }
}

const getStatus = async () => {
    try {
        const info = await getAsync('https://rickandmortyapi.com/api/character')
        let estados = info.data.results.map(estado => estado.status);
        console.log(estados);
    }
    catch (e) {
        console.log(e)
    }
}

/*
const getSingle = async (id) => {
    try {
        const info = await getAsync(`${URL}/${id}`); // URL + '/' + id
        const personaje = info.data;
        //console.log(personaje); 
        const { species, name, status } = personaje;
        console.log(name, species, status);
    }
    catch (e) {
        console.error(e);
    }
}
*/

/* la API de rick y morty:
Hacer un array con todos los personajes con status: "Alive" y species: "Human".
Hacer otro array con todos los personajes con species: "Alien".

En la pokeAPI:
Conectarse a la pokeAPI, y hacer un get de todos los pokemons y hacer un getSingle.*/
/* // const getVivos = async (status = "Alive", species = "Human") => {
//     try {
//         const info = await getAsync(URL);
//         const personajes = info.data.results;
//         const vivos = personajes.filter(personaje => personaje.status === status && personaje.species === species);
//         console.log(vivos);
//     }
//     catch (e) {
//         console.error(e);
//     }
// }
// const getAlien = async (species = "Alien") => {
//     try {
//         const info = await getAsync(URL);
//         const personajes = info.data.results;
//         const aliens = personajes.filter(personaje => personaje.species === species);
//         console.log(aliens);
//     }
//     catch (e) {
//         console.error(e);
//     }
// } */


// const getPokemon = async () => {
//     try {
//         const info = await getAsync('https://pokeapi.co/api/v2/pokemon');
//         const pokemons = info.data.results;
//         console.log(pokemons);
//     }
//     catch (e) {
//         console.error(e);
//     }
// }
// const getPokemonSingle = async (id) => {
//     try {
//         const info = await getAsync(`https://pokeapi.co/api/v2/pokemon/${id}`);
//         const pokemon = info.data;
//         console.log(pokemon);
//     }
//     catch (e) {
//         console.error(e);
//     }
// }                                     ctrl + / comenta el codigo en linea y alt + shift + A envelve el codigo en comentario /* */
//cuando quiero consumir en otra parte del programa un dato de una funcion async await, lo tengo que consumir dentro de otra funcion async await.
// getPersonajes();
// getMundo();
// getSingle(1);
// getVivos();
// getAlien();
// getPokemon();
// getPokemonSingle(1);
getGenero();
getAsync();
getStatus();
// get();
// getPersonajesNombre();

//diferencia entre map y filtrer
// map --> el array crea una nueva array y va haciendo push solo insertando datos dentro
// filtrer --> evalua una condicion 

//para subir el archivo al git
//git add .
//git commit -m ""