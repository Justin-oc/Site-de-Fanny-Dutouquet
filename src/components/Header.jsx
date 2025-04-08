import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [logoText, setLogoText] = useState('FANNY DUTOUQUET');
  const [socialLinks, setSocialLinks] = useState({ facebook: '', instagram: '' });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=header`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const acf = data[0]?.acf;

        if (acf?.menu_items) {
          setMenuItems(acf.menu_items); // tableau de { label, url }
        }

        if (acf?.logo_texte) {
          setLogoText(acf.logo_texte);
        }

        setSocialLinks({
          facebook: acf?.facebook_url || '',
          instagram: acf?.instagram_url || ''
        });
      });
  }, []);

  return (
    <header className="header">
      <div className="header__top">
        <div className="header__logo">
          <Link to="/">{logoText}</Link>
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
          {socialLinks.facebook && (
            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          )}
          {socialLinks.instagram && (
            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          )}
        </div>

        <nav className="header__nav">
          <ul onClick={closeMenu}>
            <div className="nav-center">
                {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={
                    item.label.toLowerCase().includes('photos primées') ? 'nav-item--right' : ''
                  }
                >
                  <Link to={item.url}>{item.label}</Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </div>

      <hr className="header__line" />
    </header>
  );
};

export default Header;