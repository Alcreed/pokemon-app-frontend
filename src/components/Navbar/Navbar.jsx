import React from "react";

import LogoPokemon from '../../assets/images/logo_pokemon.webp'
import UserAvatar from '../../assets/images/user.png'

import './Navbar.css';

function Navbar() {
  return (
    <header className="Pokemon_navbar">
      <nav className="Pokemon_navbar_content">
        <img className="Pokemon_navbar_logo" src={LogoPokemon} alt="Pokemon logo" />
        <ul className="Pokemon_navbar_options">
          <li className="Navbar_option">Home</li>
          <li className="Navbar_option">Favorites</li>
        </ul>
        <div className="Pokemon_navbar_profile">
          <img className="Navbar_profile_image" src={UserAvatar} alt="" />
        </div>
      </nav>
    </header>
  )
};

export default Navbar;