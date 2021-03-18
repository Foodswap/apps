import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Description = () => (

  <div className="welcome-container">

    <div className="welcome-blockText">
      <div className="welcome-paragraph">
        <p className="welcome-text">
          FoodSwap vous permet d’échanger des plats faits maison entre particuliers,
          mais aussi de découvrir des cultures culinaires du monde entier.
        </p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Tout le monde peut participer, il suffit de s’inscrire !
          Il y a déjà sûrement votre boulanger, votre voisin ou encore le facteur,
        </p>

        <p className="welcome-text">Pourquoi pas vous ?</p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Votre belle tarte aux pommes contre un risotto à la crevette ?
          Envoyer une demande d’échange !
          Et si elle est acceptée, il ne reste plus qu’à déguster.
        </p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Trouvez dès maintenant des plats juste à côté en renseignant la ville ou vous vous trouvez.
        </p>
      </div>
    </div>

    <div className="welcome-mobile">
      <div className="welcome-paragraph">
        <p className="welcome-text">
          FoodSwap vous permet d’échanger des plats faits maison entre particuliers,
          mais aussi de découvrir des cultures culinaires du monde entier.
        </p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Tout le monde peut participer, il suffit de s’inscrire !
          Il y a déjà sûrement votre boulanger, votre voisin ou encore le facteur,
        </p>

        <p className="welcome-text">Pourquoi pas vous ?</p>
      </div>

      <div className="welcome-paragraph">
        <p className="welcome-text">
          Votre belle tarte aux pommes contre un risotto à la crevette ?
          Envoyer une demande d’échange !
          Et si elle est acceptée, il ne reste plus qu’à déguster.
        </p>
      </div>
    </div>
  </div>
);
Description.propTypes = {};
export default Description;
