import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <Link to="/">FANNY DUTOUQUET</Link>
        </div>  
      </div>

      <hr className="header__line" />
        <div className="header__hamburger-wrapper">
          <div
            className={`header__hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      <div className={`header__nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
        <div className="header__social-icons">
          <a href="https://www.facebook.com/fannydutouquetphotographies/?locale=fr_FR" target="_blank" rel="noopener">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/fanny.dutouquet.photographe/" target="_blank" rel="noopener">
            <FaInstagram />
          </a>
        </div>

        <nav className="header__nav">
          <ul onClick={closeMenu}>
            <div className="nav-center">
              <li><Link to="/home">Accueil</Link></li>
              <li><Link to="/portraits">Portraits</Link></li>
              <li><Link to="/mariage">Mariages</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li className="nav-item--right"><Link to="/awards">Photos primées</Link></li>
            </div>
          </ul>
        </nav>
      </div>

      <hr className="header__line" />
    </header>
  );
};

export default Header;