const fetch = require('node-fetch')

module.exports = async function buscarPokemon(id){
    const response = await fetch(`https://pokeapi.co/api/v2/${id}`)
    const json = await response.json()

    return json
}