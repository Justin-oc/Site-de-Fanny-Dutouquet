import React from 'react';
import GaleriePortraits from '../components/GaleriePortraits';
import photosEnfant from '../data/enfant.json';


const descriptionEnfant= "Les séances photo en extérieur se font du printemps à l’automne, de préférence le matin ou la fin de journée pour profiter des belles lumières du soleil. Au cours d’une balade à pied, je capture vos moments de joies et de rires. Je fais en sorte de rendre le moment unique, agréable et dynamique. Le but est de faire les photos qui vous ressemblent, et que le moment passé ensemble vous laisse aussi un bon souvenir. Je prends beaucoup de photos et une fois la séance terminée, un long moment de tri s’annonce pour moi afin de vous livrer les meilleurs souvenirs. Je vous livre ensuite une galerie de photos retouchées.J’ai réalisé la formation de photo de Enfant avec le photographe Laurent De la conception sur Lyon, ainsi que de nombreuses formations en ligne. Je vous guide pour avoir les photos dites « posées » puis je laisse libre court à votre imagination et occupation pour obtenir un rendu naturel. Pour cela, n’hésitez surtout pas à emporter des accessoires qui reflètent ce que vous aimez et vos passions. C’est en faisant ce que vous aimez, que vous êtes plus à l’aise."

const Enfant = () => (
  <GaleriePortraits
    titre="Portraits d'enfant"
    description={descriptionEnfant}
    photos={photosEnfant}
  />
);

export default Enfant;