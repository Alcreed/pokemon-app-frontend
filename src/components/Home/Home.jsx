import React, { useState, useEffect } from 'react';
import { getAllPokemonsData } from '../../Functions'

import Loader from '../Loader/Loader';
import Navbar from '../Navbar/Navbar';
import SearchBar from '../SearchBar/SearchBar';
import PokemonList from '../PokemonsList/PokemonsList';
import FavoritesList from '../FavoritesList/FavoritesList';

import './Home.css'

function Home() {

  const [pokemonsData, setPokemonsData] = useState([])
  const [loading, setLoading] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState('');
  const [viewSelected, setViewSelected] = useState('home');
  const [favoritesIds, setFavoritesIds] = useState([]);
  const [paginationValues, setPaginationValues] = useState({
    offset: 0,
    limit: 20,
    counter: 20
  })

  useEffect(() => {
    fetchPokemonsData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationValues.offset])

  const fetchPokemonsData = async () => {
    try {
      setLoading(true);

      let allPokemonsData = await getAllPokemonsData(paginationValues.offset, paginationValues.limit)
      
      setPokemonsData(allPokemonsData)
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const favoritePokemonsList = (id) => {
    let newFavorites = [...favoritesIds];

    if (newFavorites.includes(id)) {
      let idIndex = newFavorites.findIndex(item => item === id);
      newFavorites.splice(idIndex, 1)
    } else {
      newFavorites.push(id);
    }
    
    setFavoritesIds(newFavorites);
  }

  const pagination = (type) => {
    if (type === 'next') {
      if (paginationValues.counter === 140) {
        setPaginationValues({ ...paginationValues,
          offset: paginationValues.offset + 20,
          limit: 10
        });
      } else {
        setPaginationValues({ ...paginationValues,
          offset: paginationValues.offset + 20,
          counter: paginationValues.counter + 20
        });
      }
    } else {
      if (paginationValues.offset > 0) {
        setPaginationValues({ ...paginationValues,
          offset: paginationValues.offset - 20,
          counter: paginationValues.counter - 20
        });
      }
      if (paginationValues.limit === 10) {
        setPaginationValues({ ...paginationValues,
          offset: paginationValues.offset - 20,
          limit: 20,
          counter: paginationValues.counter - 20
        });
      }
    }
  }

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <main className='pokemon_app'>
      <Navbar 
        onChangeView = {(view) => setViewSelected(view)}
        viewSelected = {viewSelected}
      />

      <SearchBar
        pokemonName = {searchPokemon}
        searchPokemon = {(value) => setSearchPokemon(value)} 
      />
      
      <section className='pokemons_content'>
        {viewSelected === 'home' &&
          <PokemonList 
            pokemonsData = {pokemonsData}
            searchPokemon = {searchPokemon}
            addToFavorite = {(id) => favoritePokemonsList(id)}
            favoritesIds = {favoritesIds}
          />
        }
        {viewSelected === 'favorites' &&
          <FavoritesList 
            pokemonsData = {pokemonsData}
            searchPokemon = {searchPokemon}
            addToFavorite = {(id) => favoritePokemonsList(id)}
            favoritesIds = {favoritesIds}
          />
        }
      </section>

      <section className='Pagination_buttons'>
        <button 
          className={`Pagination_button ${paginationValues.offset === 0 ? 'disabled' : ''}`}
          onClick={paginationValues.offset !== 0 ? () => pagination('preview') : null}
        >
          Preview
        </button>
        <button 
          className={`Pagination_button ${paginationValues.counter > 140 ? 'disabled' : ''}`}
          onClick={paginationValues.counter <= 140 ? () => pagination('next') : null}
        >
          Next
        </button>
      </section>
    </main>
  )
}

export default Home;