export async function fetchPokemons(){
  let response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
  let data = response.json();
  
  return data
}

export async function fetchPokemonData(url) {
  let response = await fetch(url);
  let dataPokemon = response.json();

  return dataPokemon;
}