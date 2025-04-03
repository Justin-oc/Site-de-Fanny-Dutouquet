import React from 'react';
import GaleriePortraits from '../components/GaleriePortraits';
import photosNaissance from '../data/naissance.json';
import photosBebe from '../data/bebe.json';

const descriptionNaissance="Un amour qui commence, une histoire à raconter. Infirmière de métier, la sécurité et l’hygiène seront mes priorités. Je suis Photographe à domicile ou en maternité, pour la séance photo de votre nouveau-né. Cela vous permet de ne pas vous déplacer et de vous débarrasser du stress de l’heure.. Je prends le temps nécessaire et travaille toujours avec vous, auprès de votre bébé avec soins et sécurité. Les photographies de naissance se réalisent durant les 15 premiers jours de votre bébé. C’est le moment où votre bébé dormira le plus. Les postures sont simples et les couleurs claires. Les vêtements doivent être confortables pour être à l’aise. Les tenues tricotées ou crochetées seront parfaites. Il est préférable de choisir un body ouvert devant, avec des tenues faciles à mettre, où l’on voit les pieds. Afin de vous garantir un créneau pour les photos de naissance, il est important de me contacter pendant votre grossesse pour me communiquer la date d’accouchement. Un sms suffira pour me prévenir de votre accouchement pour prévoir la date de la séance photo. Je réalise quelques petites retouches légères pour un rendu naturel, sobre et lumineux. Vous pourrez bien entendu, utiliser les photo pour la réalisation de vos faire part."
const descriptionBebe="L’art de l’innocence. Je suis photographe pour bébé, formée pour que votre enfant soit en sécurité et que vous ayez les plus beaux souvenirs. Pour garder les plus beaux souvenirs de votre bébé, je vous propose une séance photos à mon domicile avec fond et accessoires ou une séance photos en extérieur dans un lieu qui vous ressemble. Je vous reçois dans un environnement de confiance et de détente pour que les enfants puissent se sentir confortable. Pour cela, emporter doudou, jouets et goûter. Il est important de pouvoir s’adapter à leur rythme et à leurs humeurs c’est pourquoi je conseille la séance photo le matin ou après la sieste. De même, je ne force aucune pose et conseille d’emporter doudou, livres,… Capturer la personnalité de l’enfance mais aussi ces mimiques, ces gestuelles et ces airs sont mes objectifs."

const Naissance = () => (
    <>
    <GaleriePortraits
      titre="Portraits de naissance"
      description={descriptionNaissance}
      photos={photosNaissance}
    />
    <GaleriePortraits
    titre="Portraits de bébé"
    description={descriptionBebe}
    photos={photosBebe}
    />
    </>
  );
  
  export default Naissance;
