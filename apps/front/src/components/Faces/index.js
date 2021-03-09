import React from 'react';
import './style.scss';
import image from '../../assets/images/image.png';
import image1 from '../../assets/images/image (1).png';
import image2 from '../../assets/images/image (2).png';
import image3 from '../../assets/images/image (3).png';
import image4 from '../../assets/images/image (4).png';

const Faces = () => (

  <div className="face-page">
    <div className="face-title">Qui sommes-nous ?</div>
    <section className="face-container">
      <figure>
        <img className="face-image" src={image1} alt="Plia" />
        <figcaption className="face-titre-image">Plia Product Owner</figcaption>
      </figure>
      <figure>
        <img className="face-image" src={image} alt="Marie" />
        <figcaption className="face-titre-image">Marie Scrum Master</figcaption>
      </figure>
      <figure>
        <img className="face-image" src={image4} alt="Cyril" />
        <figcaption className="face-titre-image">Cyril Lead Dev Front</figcaption>
      </figure>
      <figure>
        <img className="face-image" src={image3} alt="Edouard" />
        <figcaption className="face-titre-image">Edouard Lead dev back</figcaption>
      </figure>
      <figure>
        <img className="face-image" src={image2} alt="Florian" />
        <figcaption className="face-titre-image">Florian Git Master</figcaption>
      </figure>
    </section>

  </div>
);

export default Faces;
