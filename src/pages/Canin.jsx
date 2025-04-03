import React from 'react';
import GaleriePortraits from '../components/GaleriePortraits';
import photosCanin from '../data/canin.json';


const descriptionCanin= "Photographe canin en Haute Garonne, je réalise les photographies de votre chien. Votre compagnon est un membre important de votre famille. Il mérite d’être photographié pour sa personnalité et son caractère unique. Une séance photo canine est l’ occasion de se faire plaisir et de passer un bon moment avec votre chien. Malheureusement votre chien ne sera pas toujours à vos côtés et les photos sont un excellent moyen de garder des souvenirs impérissables de lui. Si vous êtes un éleveur vous pouvez faire appel à moi pour réaliser des photos de vos chiens sur 3 séances. Soit en vue de participer à des concours ou des expositions ou bien pour vos sites internets et réseaux sociaux. Une séance photo canine est un cadeau original et unique que vous pouvez offrir à vos proches ou à vous même ! Comment ça se passe ? En tant que photographe canin en haute Garonne, je vous donne quelques conseils : Tout d’abord je vous recommande d’arriver avant l’heure de notre rendez-vous. Cela, afin que votre chien puisse s’imprégner des lieux. Ensuite, je vous demande de bien prendre des croquettes et une gamelle d’eau, ainsi qu’une longe et un collier fin si on ne peut pas le détacher. La séance photo se réalise dans un endroit calme et sécurisé. Le fait qu’il y est d’autre chien n’est pas gênant en soit mais cela risque de perturber le calme de votre chien. Les photographies en ville se réaliseront uniquement un dimanche matin au calme également. Lors de la séance, nous ferons des pauses, n’hésitez pas à me demander la pause. Vous connaissez mieux votre chien que moi et vous verrez ses signes de fatigue avant moi. Votre chien sera stimulé lors de cette séance photo alors n’ hésitez pas à le récompenser avec des caresses ou des croquettes afin de le féliciter. "


const Canin = () => (
  <GaleriePortraits
    titre="Portraits canin"
    description={descriptionCanin}
    photos={photosCanin}
  />
);

export default Canin;