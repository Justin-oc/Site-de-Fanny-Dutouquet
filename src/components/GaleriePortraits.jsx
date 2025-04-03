import React, { useState } from 'react';
import '../styles/galeriePortraits.scss'; 

const GaleriePortraits = ({ titre, description, photos }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % photos.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="portrait-page">
      <h1 className="portrait-title">{titre}</h1>
      <div className="portrait-intro">
        <p>{description}</p>
      </div>
      <div className="portrait-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="photo-wrapper" onClick={() => openModal(index)}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal">
          <button className="close-button" onClick={closeModal}>✕</button>
          <button className="nav-button left" onClick={prevImage}>←</button>
          <img src={photos[selectedIndex].src} alt={photos[selectedIndex].alt} />
          <button className="nav-button right" onClick={nextImage}>→</button>
        </div>
      )}
    </div>
  );
};

export default GaleriePortraits;