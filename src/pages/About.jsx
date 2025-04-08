import React, { useEffect, useState } from 'react';
import '../styles/about.scss';

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=about`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.length > 0) {
          setData(resData[0]);
        }
      });
  }, []);

  if (!data) return <p>Chargement...</p>;

  return (
    <section className="about-page">
      {data.acf?.blocs_about?.map((bloc, index) => (
        <div
          key={index}
          className={`about-container ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <h2>{bloc.titre}</h2>
          <div dangerouslySetInnerHTML={{ __html: bloc.contenu }} />
        </div>
      ))}
      
    {data.acf?.image_tarifs?.url && (
      <div className="about-tarif-image">
        <img
          src={data.acf.image_tarifs.url}
          alt={data.acf.image_tarifs.alt || 'Tarifs'}
        />
      </div>
    )}
    </section>
  );
};

export default About;