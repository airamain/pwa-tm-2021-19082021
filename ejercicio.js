
const axios = require('axios');
const URL = ' https://rickandmortyapi.com/api/character'


const getStatusAndSpecies = async (species = "Human", status = "Alive") => {
    try{
        const info = await axios.get(URL)
        
        const characters = info.data.results
        
        const human= characters.filter(character =>character.species === species && character.status === status)
        console.log(human)

    }catch(err){
        console.error(err)
    }

}
const getAlien = async (species = "alien") => {
    try{
        const info = await axios.get(URL)
        const characters = info.data.results
        const species = characters.filter(character =>character.species === species)

    }catch(err){
        console.error(err)
    }
}
//getStatusAndSpecies()
getAlien()