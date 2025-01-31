import React from "react";
import Logo from "../Assets/logo.png";
import "../Styles/Header.css";
import Nav from "./Navbar";

function Header() {
  return (
    <header className="header">
        <figure className="header_figure">
          <img className="logo" src={Logo} alt="kasa,location d'appartements" />
        </figure>
      <Nav className="navbar"/>
    </header>
  )
}

export default Header
