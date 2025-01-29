import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about">
        <div> A propos</div>
      </NavLink>
    </nav> 
  )
}

export default Navbar
