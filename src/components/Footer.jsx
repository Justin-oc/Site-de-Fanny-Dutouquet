import React from 'react'
import { Link } from "react-router-dom";
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>© {new Date().getFullYear()} Fanny Dutouquet. Tous droits réservés.</p>
        <nav className="footer__nav">
          <ul>
          <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/cgv">CGV</Link></li>
            <li><Link to="/mentions-légales">Mentions légales</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer