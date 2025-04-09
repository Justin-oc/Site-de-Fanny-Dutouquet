import React, { useEffect, useState } from 'react';
import GaleriePortraits from '../components/GaleriePortraits';

const Naissance = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=naissance-bebe`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.length > 0) {
          const acf = resData[0].acf || {};

          const naissancePhotos = (acf.naissance_photos || []).map((img) => ({
            src: img.url,
            alt: img.alt || '',
          }));

          const bebePhotos = (acf.bebe_photos || []).map((img) => ({
            src: img.url,
            alt: img.alt || '',
          }));

          const paragraphesNaissance = [{
            texte: acf.texte_naissance,
            image: acf.image_naissance,
          }];

          const paragraphesBebe = [{
            texte: acf.texte_bebe,
            image: acf.image_bebe,
          }];

          setData({
            paragraphesNaissance,
            naissancePhotos,
            paragraphesBebe,
            bebePhotos,
          });
        }
      });
  }, []);

  if (!data) return <p>Chargement en cours...</p>;

  return (
    <>
      <GaleriePortraits
        titre="Portraits de naissance"
        paragraphes={data.paragraphesNaissance}
        photos={data.naissancePhotos}
      />
      <GaleriePortraits
        titre="Portraits de bébé"
        paragraphes={data.paragraphesBebe}
        photos={data.bebePhotos}
      />
    </>
  );
};

export default Naissance;
