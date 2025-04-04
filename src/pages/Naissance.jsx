import React, { useEffect, useState } from 'react';
import GaleriePortraits from '../components/GaleriePortraits';

const Naissance = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=naissance`;

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

          setData({
            descriptionNaissance: acf.description_naissance,
            descriptionBebe: acf.description_bebe,
            naissancePhotos,
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
        description={data.descriptionNaissance}
        photos={data.naissancePhotos}
      />
      <GaleriePortraits
        titre="Portraits de bébé"
        description={data.descriptionBebe}
        photos={data.bebePhotos}
      />
    </>
  );
};

export default Naissance;
