import React from 'react';

import Star from '../../assets/images/star.png'
import StarFavorite from '../../assets/images/star_fav.png'

import './PokemonCard.css'

function PokemonCard({ pokemonData }) {
  return (
    <article className='PokemonCard'>
      <div className='PokemonCard_top'></div>
      <div className='PokemonCard_mid'>
        <img className='PokemonCard_image' src={pokemonData.IMAGE} alt={pokemonData.NAME} />
        <div className='PokemonCard_content'>
          <p className='PokemonCard_name'>{pokemonData.NAME}</p>
          <img className='PokemonCard_favorite' src={Star} alt="Favorite" />
        </div>
      </div>
      <div className='PokemonCard_bot'></div>
    </article>
  )
}

export default PokemonCard;