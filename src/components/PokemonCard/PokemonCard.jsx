import React from 'react';

import './PokemonCard.css'

function PokemonCard({ pokemonData }) {
  return (
    <article className='PokemonCard'>
      <div className='PokemonCard_top'></div>
      <div className='PokemonCard_mid'>
        <img className='PokemonCard_image' src={pokemonData.IMAGE} alt={pokemonData.NAME} />
        <p className='PokemonCard_name'>{pokemonData.NAME}</p>
      </div>
      <div className='PokemonCard_bot'></div>
    </article>
  )
}

export default PokemonCard;