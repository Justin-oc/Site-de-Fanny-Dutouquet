import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/landingPage.scss';

const LandingPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=landingpage`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        const acf = resData[0]?.acf;

        setData({
          title: acf?.landing_title,
          subtitle: acf?.landing_subtitle,
          image: acf?.landing_image?.url || acf?.landing_image,
          link: acf?.landing_link || '/home',
        });
      });
  }, []);

  if (!data) return <p>Chargement...</p>;

  return (
    <div className="landing">
      <h1 className="landing__title">{data.title}</h1>
      <h2 className="landing__subtitle">{data.subtitle}</h2>
      <div className="landing__image-wrapper">
        <motion.img
          src={data.image}
          alt="Image d'accueil"
          className="landing__image"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1.2, y: 0 }}
          transition={{ duration: 2 }}
        />
        <Link to={data.link} className="landing__link">Entrer sur le site</Link>
      </div>
    </div>
  );
};

export default LandingPage;
