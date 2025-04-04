import React, { useEffect, useState } from 'react';
import '../styles/awards.scss';

const Awards = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [acf, setAcf] = useState(null);
  

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=awards`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const acfData = data[0]?.acf;
      
        if (acfData?.awards_photos) {
          const images = acfData.awards_photos.map((img) => ({
            src: img.url,
            alt: img.alt || '',
          }));
          setPhotos(images);
        }
      
        setAcf(acfData); // on stocke ici pour l'utiliser plus bas
      })
      .catch(error => {
        console.error("Erreur lors du chargement des awards :", error);
      });
  }, []);

  const openModal = (index) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const next = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % photos.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <section className="awards-page">
      <h2 className="awards-title">Photos primées</h2>
      {acf?.description && (
        <p
          className="awards-description"
          dangerouslySetInnerHTML={{ __html: acf.description }}
        />
      )}

      <div className="awards-gallery">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="awards-photo-wrapper"
            onClick={() => openModal(index)}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="awards-modal" onClick={closeModal}>
          <img
            className="modal-image"
            src={photos[selectedIndex].src}
            alt={photos[selectedIndex].alt}
          />
          <button className="close-button" onClick={closeModal}>
            &times;
          </button>
          <button className="nav-button left" onClick={prev}>
            &lsaquo;
          </button>
          <button className="nav-button right" onClick={next}>
            &rsaquo;
          </button>
        </div>
      )}
    </section>
  );
};

export default Awards;