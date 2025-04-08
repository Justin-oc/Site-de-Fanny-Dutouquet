import React, { useEffect, useState } from 'react';
import '../styles/identite.scss';

const Identite = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=photos-identite`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.length > 0) {
          const acf = resData[0].acf;
          setData({
            titre: resData[0].title.rendered,
            texte: acf?.texte_identite || '',
            image: acf?.image_identite || null,
          });
        }
      });
  }, []);

  if (!data) return <p>Chargement...</p>;

  return (
    <section className="identite-page">
      <h1 className="identite-title">Photos d'identité</h1>
      <div className="identite-content">
        <div className="identite-text" dangerouslySetInnerHTML={{ __html: data.texte }} />
        {data.image && (
          <div className="identite-image">
            <img src={data.image.url} alt={data.image.alt || 'Photo identité'} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Identite;