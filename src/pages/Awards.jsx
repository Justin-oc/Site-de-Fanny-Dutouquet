import React, { useState } from 'react';
import '../styles/awards.scss';
import photos from '../data/awards.json'; 

const Awards = ({ titre, description }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % photos.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="awards-page">
      <h1 className="awards-title">{titre}</h1>
      <p className="awards-description">{description}</p>
      <div className="awards-gallery">
        {photos.map((photo, index) => (
          <div key={index} className="awards-photo-wrapper" onClick={() => openModal(index)}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="awards-modal">
          <button className="close-button" onClick={closeModal}>×</button>
          <button className="nav-button left" onClick={prevImage}>‹</button>
          <img className="modal-image" src={photos[selectedIndex].src} alt={photos[selectedIndex].alt} />
          <button className="nav-button right" onClick={nextImage}>›</button>
        </div>
      )}
    </div>
  );
};

export default Awards;