export async function fetchPokemons(offset, limit){
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  let data = response.json();
  
  return data
}

export async function fetchPokemonData(url) {
  let response = await fetch(url);
  let dataPokemon = response.json();

  return dataPokemon;
}