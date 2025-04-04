import React, { useEffect, useState } from 'react';
import '../styles/mentionsLegales.scss';

const MentionsLegales = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=mentions-legales`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const acf = data[0]?.acf;
        setContent(acf?.mentions_content);
      });
  }, []);

  if (!content) return <p>Chargement...</p>;

  return (
    <div className="mentions-legales">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default MentionsLegales;
