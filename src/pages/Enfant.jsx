import React, { useEffect, useState } from 'react';
import GaleriePortraits from '../components/GaleriePortraits';

const Enfant = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=enfant`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.length > 0) {
          const acf = resData[0].acf;

          // ⚙️ Construction des paragraphes
          const paragraphes = (acf.blocs_texte_image || []).map((bloc) => ({
            texte: bloc.texte,
            image: bloc.image,
          }));

          // 🖼️ Construction des images de la galerie
          const photos = (acf.enfant_photos || []).map((img) => ({
            src: img.url,
            alt: img.alt || '',
          }));

          setData({
            titre: resData[0].title.rendered,
            paragraphes,
            photos,
          });
        }
      });
  }, []);

  if (!data) return <p>Chargement en cours...</p>;

  return (
    <GaleriePortraits
      titre={data.titre}
      paragraphes={data.paragraphes}
      photos={data.photos}
    />
  );
};

export default Enfant;