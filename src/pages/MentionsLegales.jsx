import React from 'react';
import '../styles/mentionsLegales.scss';

const MentionsLegales = () => {
  return (
    <div className="mentions-legales container">
      <h1>Mentions légales & Politique de confidentialité</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>
          EI Dutouquet Fanny<br />
          14 Impasse de la Hyse<br />
          31810 VENERQUE<br />
          SIRET : 91799372700010<br />
          Code APE : 7420Z<br />
          Email : fannydutouquet@gmail.com
        </p>
      </section>

      <section>
        <h2>Hébergeur</h2>
        <p>OVH, 2 rue Kellermann, 59100 Roubaix, France</p>
      </section>

      <section>
        <h2>Conditions d’utilisation</h2>
        <p>
          L’utilisation du site <a href="http://fannydutouquet.fr">fannydutouquet.fr</a> implique l’acceptation pleine et entière des conditions générales d’utilisation décrites sur cette page.
        </p>
      </section>

      <section>
        <h2>Protection des données personnelles</h2>
        <p>
          Conformément au RGPD, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition concernant vos données personnelles. Pour toute demande : <a href="mailto:fannydutouquet@gmail.com">fannydutouquet@gmail.com</a>
        </p>
      </section>

      <section>
        <h2>Utilisation des données personnelles</h2>
        <ul>
          <li>Formulaires de contact : données utilisées pour répondre à vos demandes.</li>
          <li>Commentaires : IP et agent utilisateur collectés pour lutter contre les spams.</li>
          <li>Cookies : utilisés à des fins de confort et de statistiques.</li>
          <li>Contenu embarqué : vidéos, images ou articles peuvent collecter des données via des services tiers.</li>
        </ul>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Vous pouvez demander une copie de vos données, leur modification ou suppression en écrivant à : <a href="mailto:fannydutouquet@gmail.com">fannydutouquet@gmail.com</a>.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          Le contenu du site est régulièrement mis à jour, mais peut contenir des erreurs. L'utilisateur est invité à signaler toute anomalie.
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Les contenus (textes, images, vidéos...) sont la propriété de Fanny Dutouquet. Toute reproduction est interdite sans autorisation écrite.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies pour des besoins de statistiques et de navigation. En poursuivant, vous acceptez leur usage.
        </p>
      </section>

      <section>
        <h2>Médiation</h2>
        <p>
          En cas de litige non résolu, vous pouvez faire appel gratuitement à un médiateur conformément aux articles L.612-1 et suivants du Code de la consommation.
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;