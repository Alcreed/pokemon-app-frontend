import React, { useState } from "react";
import Cookies from "universal-cookie";

import LogoPokemon from '../../assets/images/logo_pokemon.webp'
import UserAvatar from '../../assets/images/user.png'

import './Navbar.css';

function Navbar({ onChangeView, viewSelected }) {
  
  const cookies = new Cookies();
  const [showSignOut, setShowSignOut] = useState(false);

  const signOut = () => {
    cookies.remove('email', {path: '/'});
    cookies.remove('favorites', {path: '/home'});
    window.location.href="./"
  }

  return (
    <header className="Pokemon_navbar">
      <nav className="Pokemon_navbar_content">
        <img className="Pokemon_navbar_logo" src={LogoPokemon} alt="Pokemon logo" />
        <ul className="Pokemon_navbar_options">
          <li 
            className={`Navbar_option ${viewSelected === 'home' ? 'selected' : ''}`}
            onClick={() => onChangeView('home')}
          >
              Home
          </li>
          <li 
            className={`Navbar_option ${viewSelected === 'favorites' ? 'selected' : ''}`}
            onClick={() => onChangeView('favorites')}
          >
            Favorites
          </li>
        </ul>
        <div className="Pokemon_navbar_profile">
          <img 
            className="Navbar_profile_image" 
            src={UserAvatar} 
            alt="Avatar" 
            onClick={() => setShowSignOut(!showSignOut)} 
          />
          {
            showSignOut &&
            <div className="SignOut_option" onClick={() => signOut()}>
              <p className="SignOut_text">Sign out</p>
            </div>
          }
        </div>
      </nav>
    </header>
  )
};

export default Navbar;