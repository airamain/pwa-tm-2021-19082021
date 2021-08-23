const axios = require('axios');

const URL = 'https://www.breakingbadapi.com/api/characters'


const get = (url) => {
  const red = axios.get(url)
      .then(res => console.log(res.data.results))
      .catch(e => console.log(e));
}

// Pido la info a la red lo hago funcion //
const getAsync = async (url) => {
  const red = await axios.get(url);
  return red;
}

const getPersonajes = async () => {
  const personajes = await getAsync(URL);
  console.log("PERSONAJES TOTALES =============================")
  console.log(personajes.data); 
}

const getPersonajesNombre = async () => {
  const personajes = await getAsync(URL);
  let nombrePersonajes = personajes.data.map(personaje => personaje.name);
  console.log("SOLO EL NOMBRE DE LOS PERSONAJES =================")
  console.log(nombrePersonajes);
}


getPersonajes();
getPersonajesNombre();