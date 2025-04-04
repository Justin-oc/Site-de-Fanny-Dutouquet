import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import '../styles/footer.scss';

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([]);
  const [copyright, setCopyright] = useState('');

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=footer`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const acf = data[0]?.acf;

        if (acf?.footer_links) {
          setFooterLinks(acf.footer_links); // tableau de { label, url }
        }

        if (acf?.copyright) {
          setCopyright(acf.copyright);
        }
      });
  }, []);

  return (
    <footer className="footer">
      <div className="footer__content">
        <p>
          © {new Date().getFullYear()} {copyright || 'Fanny Dutouquet'}. Tous droits réservés.
        </p>
        <nav className="footer__nav">
          <ul>
            {footerLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p style={{ marginTop: '0.5rem' }}>
          Site conçu et développé par{" "}
          <a 
            href="https://portfolio-justin-self.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Justin Acheaibi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;