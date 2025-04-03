import React from 'react';
import data from '../data/mariage.json';
import '../styles/wedding.scss';

const Mariage = () => {
  return (
    <div className="mariage-page">
      <h1 className="mariage-title">Photographe de Mariage</h1>
      <p className="mariage-subtitle"> Votre histoire, Mon regard </p>
      <p className="mariage-description">Chaque mariage est une histoire unique, un partage d'amour, d'émotions et de moments inoubliables. 
      En tant que photographe, je mets mon savoir-faire et mon savoir être au service de votre grand jour pour capturer des images naturelles et authentiques qui reflètent la journée de votre union.
      Ma mission est de sublimer chaque instant, discrète et attentive, je saisis les regards complices, les émotions sincères, les rires et les sourires. Mon approche se veut spontanée et simple mais authentique.
      <p className="mariage-subtitle"> Je serai la témoin de vos émotions sincères et authentiques </p>
      Parce que chaque couple est unique, je vous propose un accompagnement personnalisé afin de comprendre vos attentes et vous offrir un reportage photo qui vous ressemble. Nous échangerons ensemble lors d’un premier rendez vous. 
      <p className="mariage-subtitle">Décrivez moi votre mariage.</p> 
      Que votre mariage soit intime ou grandiose, je serai à vos côtés pour en capturer chaque instant. Contactez-moi pour échanger sur votre projet et écrire ensemble les pages de votre histoire. Cet échange est indispensable pour que je vous donne les conseils afin d’avoir les photos que l’on souhaite. Des préparatifs jusqu’à la réception, je serai là, pour vous. 
      </p>

      {data.map((section, index) => (
        <div className="mariage-section" key={index}>
          <h2 className="section-title">{section.nom}</h2>
          <div className="cover-image">
            <img src={section.cover} alt={`Illustration ${section.nom}`} />
          </div>
          <div className="photo-gallery">
            {section.photos.map((photo, i) => (
              <div key={i} className="photo-wrapper">
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mariage;