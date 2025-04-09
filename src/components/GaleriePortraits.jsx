import React, { useState } from 'react';
import '../styles/galeriePortraits.scss';

const GaleriePortraits = ({ titre, paragraphes = [], photos = [] }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const nextImage = () => setSelectedIndex((prev) => (prev + 1) % photos.length);
  const prevImage = () => setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="galerie-portraits">
      {titre && <h1 className="galerie-title">{titre}</h1>}

      {paragraphes.map((bloc, index) => (
        <div
          key={index}
          className={`bloc-texte-image ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <div
            className="bloc-texte"
            dangerouslySetInnerHTML={{ __html: bloc.texte }}
          />
          <div className="bloc-image">
            <img src={bloc.image?.url} alt={bloc.image?.alt || ''} />
          </div>
        </div>
      ))}

      <div className="galerie-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-wrapper" onClick={() => openModal(index)}>
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="modal" onClick={closeModal}>
          <button className="close-button">✕</button>
          <button className="nav-button left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>←</button>
          <img
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].alt}
          />
          <button className="nav-button right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>→</button>
        </div>
      )}
    </div>
  );
};

export default GaleriePortraits;