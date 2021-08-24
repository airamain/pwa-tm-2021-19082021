const axios = require("axios");
//const URL = 'https://www.breakingbadapi.com/api/characters'


/*async function get(url){
    const Personajes = await axios.get(url);
    console.log(Personajes);
}*/

const get = async (url) => {
    //const personajes = await axios.get(url)
    //console.log(personajes.data)
    try {
        const personajes = await axios.get(url);
        personajes.data.forEach(data => {
            console.log(`"nombre:" ${data.name}, "nickname:" ${data.nickname}`);
            //console.log(personajes.data)
            //let nombreP = personajes.data.results.map(personaje => personaje.name);

            //console.log(nombreP);
            
        });
    }
    catch (error) {
        console.log(error);
    }
}



get("https://www.breakingbadapi.com/api/characters");
//get();

