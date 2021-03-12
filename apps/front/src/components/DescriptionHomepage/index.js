import React from 'react';

import './style.scss';
import video from '../../assets/videos/home.mp4';

const DescriptionHomepage = () => (
  <div className="welcome">
    <video loop autoPlay muted>
      <source src={video} type="video/mp4" />
    </video>

    <div className="welcome-blockText">
      <div className="welcome-paragraph">
        <p className="welcome-text">
          FoodSwap vous permet d’échanger des plats faits maison entre particuliers,
        </p>

        <p className="welcome-text">
          mais aussi de découvrir des cultures culinaires du monde entier.
        </p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Tout le monde peut participer, il suffit de s’inscrire !
        </p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Il y a déjà sûrement votre boulanger, votre voisin ou encore le facteur,
        </p>

        <p className="welcome-text">Pourquoi pas vous ?</p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Votre belle tarte aux pommes contre un risotto à la crevette ?
        </p>

        <p className="welcome-text">
          Envoyer une demande d’échange !
        </p>

        <p className="welcome-text">
          et si elle est acceptée, il ne reste plus qu’à valider et à déguster.
        </p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Trouvez dès maintenant des plats juste à côté en renseignant
        </p>

        <p className="welcome-text">la ville ou vous vous trouvez.</p>
      </div>
    </div>
  </div>
);

export default DescriptionHomepage;
