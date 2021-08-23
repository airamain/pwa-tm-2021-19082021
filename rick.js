const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';//const URL = 'https://www.breakingbadapi.com/api/characters'

const get = (url) => {
    const data = axios.get(url)
        .then(res => console.log(res.data.results))
        .catch(e => console.log(e));
    //return data;
    //console.log(data);
}


// Pido la info a la red lo hago funcion //
const getAsync = async (url) => {
        const data = await axios.get(url);
        return data;
}

const getPersonajes = async () => {
        const personajes = await getAsync(URL);
        console.log("PERSONAJES TOTALES =============================")
        console.log(personajes.data); 
}

//map, filter
/*personajes.data.results.forEach(personaje => {
 nombreP.push(personaje.name);
});*/
const getPersonajesNombre = async () => {
        const personajes = await getAsync(URL);
 
        let nombrePersonajes = personajes.data.results.map(personaje => personaje.name);
        console.log("SOLO EL NOMBRE DE LOS PERSONAJES =================")
        console.log(nombrePersonajes);
}

// ejercicio de practica - tarea //
// se cambia el genero de femenino a masculino //////
const getGenero = async (gender) => {
        const red = await getAsync(URL);
        const personajes = red.data.results 
        const filtrado = personajes
          .filter(personaje => personaje.gender === gender)
          .map(personaje => ({name: personaje.name, gender: personaje.gender}));
        console.log(`personajes filtrados por genero: ${gender}`, filtrado )
};


const getSingle = async (id) => {
        const red = await getAsync(`${URL}/${id}`); // URL + '/' + id
        const single = red.characters;
        //console.log(personaje); 
        const { species, name, status } = single;
        console.log("SINGLE =========== SINGLE SINGLE")
        console.log(species, name, status);
    }

/* la API de rick y morty:
Hacer un array con todos los personajes con status: "Alive" y species: "Human".
Hacer otro array con todos los personajes con species: "Alien".
En la pokeAPI:
Conectarse a la pokeAPI, y hacer un get de todos los pokemons y hacer un getSingle.*/
const getVivos = async (status = "Alive", species = "Human") => {
        const red = await getAsync(URL);
        const personajes = red.data.results;
        const vivos = personajes
        .filter(personaje => personaje.status === status && personaje.species === species);
        console.log(vivos);
    }
   

const getAlien = async (species = "Alien") => {
        const red = await getAsync(URL);
        const personajes = red.data.results;
        const aliens = personajes.filter(personaje => personaje.species === species);
        console.log(aliens);
    }


/* OTRA MANERA DE HACERLO EL DE ALIENS 
    const getAlien = async () => {
      const red = await getAsync(URL);
      const personajes = red.data.results;
      const aliens = personajes.filter(personaje => personaje.species === "Alien");
      console.log(aliens);
      console.log("AAAAAAAAAAAALIENSSSS")
  }
*/


/*
const getPokemon = async () => {
    try {
        const info = await getAsync('https://pokeapi.co/api/v2/pokemon');
        const pokemons = info.data.results;
        console.log(pokemons);
    }
    catch (e) {
        console.error(e);
    }
}
const getPokemonSingle = async (id) => {
    try {
        const info = await getAsync(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = info.data;
        console.log(pokemon);
    }
    catch (e) {
        console.error(e);
    }
}
*/
//cuando quiero consumir en otra parte del programa un dato de una funcion async await, lo tengo que consumir dentro de otra funcion async await.


getPersonajes();
getPersonajesNombre();
getGenero("Male");
getSingle(5);
getVivos();
getAlien();
/*
getPokemon();
getPokemonSingle(1);
*/