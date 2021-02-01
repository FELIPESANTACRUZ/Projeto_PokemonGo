const fetch = require('node-fetch');

module.exports = async function fetchPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const json = await response.json();

  return json;
};
