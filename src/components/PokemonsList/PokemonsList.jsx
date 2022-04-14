import React from 'react';

import PokemonCard from '../PokemonCard/PokemonCard';

import './PokemonsList.css';

function PokemonList({ pokemonsData, searchPokemon }) {

  const filterPokemon = (pokemon) => {
    return pokemon.NAME.toLowerCase().includes(searchPokemon.toLowerCase());
  };

  return (
    <>
      {
        pokemonsData?.length > 0 &&
        pokemonsData.filter(pokemon => filterPokemon(pokemon)).map(pokemon => {
          return (
            <PokemonCard 
              key = {pokemon.ID}
              pokemonData = {pokemon} 
            />
          )
        })
      }
    </>
  )
}

export default PokemonList;