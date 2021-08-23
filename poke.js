const axios = require('axios');

const get = (url) => {
  const data = axios.get(url)
      .then(res => console.log(res.data.results))
      .catch(e => console.log(e));
}

const getAsync = async (url) => {
    const data = await axios.get(url);
    return data;
}

const getPokemon = async () => {
        const info = await getAsync('https://pokeapi.co/api/v2/pokemon');
        const pokemons = info.data.results;
        console.log(pokemons);
}

const getPokemonSingle = async (id) => {
        const info = await getAsync(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = info.data.results;
        console.log(pokemon);
}


getPokemon();
getPokemonSingle();



