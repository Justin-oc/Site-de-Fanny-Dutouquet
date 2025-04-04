import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Portraits.scss';
import AvisGoogle from '../components/AvisGoogle';

function Portraits() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=portraits`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const acf = data[0]?.acf;
        const rawCategories = acf?.portrait_categories || [];

        const parsed = rawCategories.map((cat) => ({
          src: cat.image?.url || cat.image,
          alt: cat.alt || '',
          label: cat.label,
          path: cat.path
        }));

        setCategories(parsed);
      });
  }, []);

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