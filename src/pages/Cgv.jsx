import React, { useEffect, useState } from 'react';
import '../styles/cgv.scss';

const CGV = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_WP_API}/pages?slug=cgv`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.length > 0) {
          setContent(resData[0].acf?.content);
        }
      });
  }, []);

  if (!content) return <p>Chargement...</p>;

  return (
    <div className="cgv">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default CGV;