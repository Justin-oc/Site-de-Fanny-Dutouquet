import React, { useEffect, useState } from 'react';
import '../styles/wedding.scss';

const Mariage = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=wedding`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const acf = data[0]?.acf;

        const subtitles = (acf?.wedding_subtitles || []).map((s) => s.subtitle);

        const sections = (acf?.wedding_sections || []).map((s) => {
          const nom = s.nom?.title || 'Nom non défini';
          const lienUrl = s.nom?.url || null;
          const lienTarget = s.nom?.target || '_blank';

          return {
            nom,
            lienUrl,
            lienTarget,
            cover: s.cover?.url || s.cover,
            photos: (s.photos || []).map((img) => ({
              src: img.url,
              alt: img.alt || '',
            })),
          };
        });

        setContent({
          title: acf?.wedding_title,
          intro: acf?.wedding_intro,
          subtitles,
          sections,
        });
      });
  }, []);

  if (!content) return <p>Chargement...</p>;

  return (
    <div className="mariage-page">
      <h1 className="mariage-title">{content.title}</h1>

      <p
        className="mariage-description"
        dangerouslySetInnerHTML={{ __html: content.intro }}
      />

      {content.sections.map((section, index) => (
        <div className="mariage-section" key={index}>
          <h2 className="section-title">
            {section.lienUrl ? (
              <a
                href={section.lienUrl}
                target={section.lienTarget}
                rel="noopener noreferrer"
              >
                {section.nom}
              </a>
            ) : (
              section.nom
            )}
          </h2>

          <div className="cover-image">
            <img src={section.cover} alt={`Illustration ${section.nom}`} />
          </div>

          <div className="photo-gallery">
            {section.photos.map((photo, i) => (
              <div key={i} className="photo-wrapper">
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mariage;
