import React from 'react';
import '../styles/cgv.scss';

const CGV = () => {
  return (
    <div className="cgv container">
      <h1>Conditions Générales de Vente</h1>

      <section>
        <h2>1. Objet</h2>
        <p>
          Les présentes conditions s’appliquent à toutes les commandes conclues entre le client et Dutouquet Fanny, photographe. En réservant une séance, le client accepte sans réserve les CGV.
        </p>
      </section>

      <section>
        <h2>2. Commande</h2>
        <p>
          La réservation se fait par téléphone ou email. Elle est validée après réception d’un acompte de 30% et signature du contrat (Fotostudio ou email).
        </p>
      </section>

      <section>
        <h2>3. Tarifs et paiement</h2>
        <p>
          Les prix sont TTC. Un devis est valable 30 jours. Le solde est dû le jour de la prestation. Le non-paiement annule la livraison des photos.
        </p>
      </section>

      <section>
        <h2>4. Modification / Annulation</h2>
        <p>
          Les modifications doivent être envoyées par SMS 7 jours avant. Rétractation possible sous 14 jours sauf si la prestation a déjà eu lieu. En cas d’annulation, l’acompte n’est pas remboursé (hors force majeure).
        </p>
      </section>

      <section>
        <h2>5. Réalisation</h2>
        <p>
          Les images sont créées selon l’inspiration artistique du photographe. Aucune obligation de résultat n’est garantie.
        </p>
      </section>

      <section>
        <h2>6. Obligations du client</h2>
        <p>
          Le retard de plus de 10 min entraîne l’annulation. Aucune retouche personnelle ne peut être faite. Toute publication doit mentionner le nom de la photographe. Les enfants sont sous la responsabilité des parents.
        </p>
      </section>

      <section>
        <h2>7. Post-traitement</h2>
        <p>
          Seules les photos post-traitées par la photographe sont livrées. Les retouches supplémentaires peuvent être facturées.
        </p>
      </section>

      <section>
        <h2>8. Livraison</h2>
        <p>
          La livraison se fait via lien ou galerie privée dans un délai d’environ 1 mois. La galerie est accessible pendant 2 mois.
        </p>
      </section>

      <section>
        <h2>9. Conservation</h2>
        <p>
          Le client est responsable des fichiers après livraison. Les fichiers peuvent être renvoyés dans un délai d’1 mois.
        </p>
      </section>

      <section>
        <h2>10. Responsabilité</h2>
        <p>
          En cas d’intempéries, la séance sera reportée. En cas de force majeure, maladie ou problème technique, la prestation sera reportée ou remboursée sans indemnité.
        </p>
      </section>

      <section>
        <h2>11. Propriété intellectuelle</h2>
        <p>
          Les photos restent la propriété de la photographe. L’usage personnel est autorisé, mais non commercial sauf accord écrit.
        </p>
      </section>

      <section>
        <h2>12. Droit à l'image</h2>
        <p>
          La photographe peut utiliser les images à des fins promotionnelles sauf refus du client exprimé par écrit.
        </p>
      </section>

      <section>
        <h2>13. Données personnelles</h2>
        <p>
          Les données collectées servent à gérer les prestations. Elles ne sont jamais transmises à des tiers.
        </p>
      </section>

      <section>
        <h2>14. Loi applicable</h2>
        <p>
          Toute relation contractuelle est soumise au droit français. En cas de litige, compétence exclusive des tribunaux de Toulouse.
        </p>
      </section>

      <p className="cgv__accept">
        Le client reconnaît avoir pris connaissance des présentes conditions générales de vente.
      </p>
    </div>
  );
};

export default CGV;