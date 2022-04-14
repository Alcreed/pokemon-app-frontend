import React from 'react';

import Star from '../../assets/images/star.png'
import StarFavorite from '../../assets/images/star_fav.png'

import './PokemonCard.css'

function PokemonCard({ pokemonData, addToFavorite, favorite, openModalDetails }) {
  return (
    <article 
      className='PokemonCard'
      >
      <div className='PokemonCard_top'></div>
      <div className='PokemonCard_mid'>
        <img 
          className='PokemonCard_image' 
          src={pokemonData.IMAGE} 
          alt={pokemonData.NAME} 
          onClick={openModalDetails}
        />
        <div className='PokemonCard_content'>
          <p className='PokemonCard_name'>{pokemonData.NAME}</p>
          <img 
            className='PokemonCard_favorite' 
            src={favorite ? StarFavorite : Star} 
            alt="Favorite"
            onClick={addToFavorite}
          />
        </div>
      </div>
      <div className='PokemonCard_bot'></div>
    </article>
  )
}

export default PokemonCard;