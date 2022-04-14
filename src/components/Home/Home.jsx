import React, { useState, useEffect } from 'react';
import { fetchPokemons, fetchPokemonData } from '../../Functions'

import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import PokemonCard from '../PokemonCard/PokemonCard'

import './Home.css'

function Home() {

  const [pokemonsData, setPokemonsData] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPokemonsData()
  }, [])

  const fetchPokemonsData = async () => {
    try {
      setLoading(true);
      let allPokemonsData = await fetchPokemons()
  
      let pokemons = await Promise.all(allPokemonsData.results.map(async pokemon => {
        let pokemonData = await fetchPokemonData(pokemon.url);
        
        return {
          ID: pokemonData.id,
          NAME: pokemonData.name,
          IMAGE: pokemonData.sprites.other.dream_world.front_default,
          WEIGHT: pokemonData.weight,
          HP: pokemonData.stats[0].base_stat,
          ATTACK: pokemonData.stats[1].base_stat,
          DEFENSE: pokemonData.stats[2].base_stat,
          SPECIAL_ATTACK: pokemonData.stats[3].base_stat,
          SPECIAL_DEFENSE: pokemonData.stats[4].base_stat,
          SPEED: pokemonData.stats[5].base_stat
        };
      }))
      
      setPokemonsData(pokemons)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <main className='pokemon_app'>
      <Navbar />
      <section className='pokemons_content'>
        {
          pokemonsData?.length > 0 &&
          pokemonsData.map(pokemon => {
            return (
              <PokemonCard 
                key = {pokemon.ID}
                pokemonData = {pokemon} 
              />
            )
          })
        }
      </section>
    </main>
  )
}

export default Home;