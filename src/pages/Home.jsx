import React from 'react';
import { motion } from 'framer-motion';
import '../styles/home.scss';

const sections = [
  {
    title: "Photographe de moments précieux",
    content: "Immortalisez les instants les plus forts de votre vie : naissance, famille, couple.",
    img: "/simplicité-1.webp",
  },
  {
    title: "Un regard sensible",
    content: "Chaque cliché est pensé pour révéler l'émotion du moment avec douceur et naturel.",
    img: "/douceur-1.webp",
  },
  {
    title: "Une approche personnalisée",
    content: "Je m'adapte à vos envies pour créer des souvenirs uniques et authentiques.",
    img: "/emotion-1.webp",
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <motion.h1 
        className="home-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Photographe professionnelle spécialisée dans les portraits et les émotions
      </motion.h1>

      <div className="home-sections">
        {sections.map((section, index) => (
          <motion.div
            className={`home-section ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.img 
              src={section.img} 
              alt={section.title} 
              className="home-img"
            />
            <div className="home-text">
              <motion.h2
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {section.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {section.content}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;