import React, { useEffect, useState } from 'react';
import GaleriePortraits from '../components/GaleriePortraits';

const Grossesse = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=grossesse`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.length > 0) {
          const page = resData[0];
          const acf = page.acf || {};

          const photos = (acf.grossesse_photos || []).map((img) => ({
            src: img.url,
            alt: img.alt || '',
          }));

          setData({
            titre: page.title.rendered,
            description: acf.description,
            photos,
          });
        }
      });
  }, []);

  if (!data) return <p>Chargement en cours...</p>;

  return (
    <GaleriePortraits
      titre={data.titre}
      description={data.description}
      photos={data.photos}
    />
  );
};

export default Grossesse;