import React from 'react';
import GaleriePortraits from '../components/GaleriePortraits';
import photosGrossesse from '../data/grossesse.json';


const descriptionGrossesse= "Manque description catégorie grossesse"

const Grossesse = () => (
  <GaleriePortraits
    titre="Portraits de grossesse"
    description={descriptionGrossesse}
    photos={photosGrossesse}
  />
);

export default Grossesse;