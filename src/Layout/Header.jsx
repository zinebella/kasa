import React from 'react';
import Logo from '../Assets/logo.png';
import '../Styles/Header.css';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="header">
      <NavLink to="/">
        <div>
          <img className="logo" src={Logo} alt="kasa,location d'appartements" />
        </div>
      </NavLink>
      <Navbar/>
    </header>
  )
}

export default Header
