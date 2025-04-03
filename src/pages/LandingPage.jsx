import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import splashImage from '/photo_home.webp'; 
import '../styles/landingPage.scss';

const LandingPage = () => {
  return (
    <div className="landing">
      <h1 className="landing__title">FANNY DUTOUQUET</h1>
      <div className="landing__image-wrapper">
      <motion.img
          src={splashImage}
          alt="Petite fille devant le capitole"
          className="landing__image"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1.2, y: 0 }}
          transition={{ duration: 2 }}
        />
        <Link to="/home" className="landing__link">Entrer sur le site</Link>
      </div>
    </div>
  );
};

export default LandingPage;