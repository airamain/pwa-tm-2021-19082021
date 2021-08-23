const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character';

const getApi = async (url) => {
    try {
        const data = await axios.get(url);
        console.log(data.data.results);
    } catch (error) {
        console.log(error);
    }
};

const getGender = async (gender = "Male") => {
    try {
        const info = await axios.get(URL);
        const characters = info.data.results;
        const filter = characters.filter(character => character.gender === gender);
        console.log(filter)
    } catch (error) {
        console.log(error);
    }
};

const mapGender = async () => {
    try {
        const characters = await axios.get(URL);
        let gender = characters.data.results.map(character => character.gender);
        console.log(gender);

    }
     catch (error) {
        console.log(error);
    }
}

getApi(URL);
getGender();
mapGender();