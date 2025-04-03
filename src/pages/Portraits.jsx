import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Portraits.scss';
import AvisGoogle from '../components/AvisGoogle';

function Portraits() {
  const categories = [
    { src: "portrait/famille/famille-2.webp", alt: "Famille", label: "Famille", path: "famille" },
    { src: "portrait/naissance-bébé/naissance-1.webp", alt: "Naissance - Bébé", label: "Naissance-Bébé", path: "naissance-bébé" },
    { src: "portrait/grossesse/grossesse-1.webp", alt: "Grossesse", label: "Grossesse", path: "grossesse" },
    { src: "portrait/enfant/enfant-3.webp", alt: "Enfant", label: "Enfant", path: "enfant" },
    { src: "portrait/canin/chien-2.webp", alt: "Canin", label: "Canin", path: "canin" },
  ];

  return (
    <>
      <section className="portraits-container">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.label}
            className="category-block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Link to={`/portraits/${cat.path}`} className="category-link">
              <div className="img-wrapper">
                <img src={cat.src} alt={cat.alt} />
                <h2 className="overlay-text">{cat.label}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
      <AvisGoogle />
    </>
  );
}

export default Portraits;