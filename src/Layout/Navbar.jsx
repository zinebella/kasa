import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Navbar.css"

function Nav() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar_navLink_home">
        <div>Accueil</div>
      </NavLink>
      <NavLink to="/about" className="navbar_navLink_about">
        <div> A propos</div>
      </NavLink>
    </nav> 
  )
}

export default Nav
