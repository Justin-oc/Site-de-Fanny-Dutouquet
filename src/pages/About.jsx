import React from 'react';
import '../styles/about.scss';

const sections = [
  {
    title: "Qui suis-je ?",
    content: "Un maximum de trucs à dire"
  },
  {
    title: "Mon parcours",
    content: "Beacoup de trucs détaillés à dire"
  },
  {
    title: "Ma démarche",
    content: "Encore plus de choses à dire"
  }
];

const About = () => {
  return (
    <div className="about-page">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`about-container ${index % 2 === 0 ? 'left' : 'right'}`}
        >
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
};

export default About;