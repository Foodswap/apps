import React from 'react';

import './style.scss';
import video from '../../assets/videos/home.mp4';
import imageHeader from '../../assets/images/man-cooking-fresh-vegetables-on-pan.jpg';

const DescriptionHomepage = () => (
  <div className="welcome">
    <video className="videoHomePage" loop autoPlay muted>
      <source src={video} type="video/mp4" />
    </video>
    <img className="imgHomePage" src={imageHeader} alt="man cooking fresh vegetables on pan" />
    <h1 className="big-title">Prêts à vous régaler ?</h1>
    {/* <div className="welcome-blockText">
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
            Trouvez dès maintenant des plats juste à côté en renseignant la ville ou vous vous trouvez.</p>
        </div>
      </div> */}
  </div>
);
export default DescriptionHomepage;
