const fetch = require("node-fetch");
let url = "https://pokeapi.co/api/v2/pokemon?limit=807&offset=0";

async function fetchPokeList() {
  const response = await fetch(url);

  /* Convierto la respuesta en json para que sea mas facil de interpretar */

  return await response.json();
}


async function fetchPokeData(query) {
 
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);

  /* Convierto la respuesta en json para que sea mas facil de interpretar */

  return await response.json();
}


module.exports = {
    fetchPokeList,
    fetchPokeData,
}