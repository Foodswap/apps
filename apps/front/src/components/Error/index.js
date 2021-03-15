import React from 'react';
import './style.scss';

const Error = () => (

  
    <div className="error-container">
      <div className="error-page">
          <h1 className="error-title">PAGE NOT FOUND</h1>
          <h2 className="error-mention">404</h2>
          <p className="error-paragraph">Oups ... une erreur s'est produite.</p>
          <a className="error-link" href="/" >Retour à l'accueil</a>
      </div>
    </div>
  
);

export default Error;
