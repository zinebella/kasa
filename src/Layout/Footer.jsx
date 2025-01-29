import React from 'react';
import "../Styles/Footer.css";
import footer from '../Assets/LogoFooter.png';

function Footer () {
  return (
    <footer className="footer">
      <img src={footer} alt="logo-footer" className="footer_logo" />
      <p className="footer_text">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
