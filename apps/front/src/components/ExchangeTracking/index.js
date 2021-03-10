import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ExchangeTracking = ({ isAccept, isRefused, statut, date, picture }) => (
  <div>
    <p>Suivi d'échange</p>

    <div>
      <ul>
        <li>Mes Propositions</li>
        <li>Mes Demandes</li>
      </ul>
    </div>

    <div>
      <div id="mespropositions">
        <div>
          <img src={picture} alt={} />
          <p>En échange de</p>
          <img src={picture} alt={} />
        </div>
      </div>

      <div>
        {!isAccept && !isRefused && (
          <div>
            <button type="button">Accepter</button>
            <button type="button">Refuser</button>
          </div>
        )}
        {isAccept && (
          <div>
            <p>Vous avez accepté cet échange</p>
            <button type="button">Contact</button>
          </div>
        )}
        {isRefused && (
          <div>
            <p>Vous avez refusé cet échange</p>
          </div>
        )}
      </div>
    </div>

    <div>
      <div id="mesdemandes">
        <div>
          <img src={picture} alt={} />
          <p>En échange de</p>
          <img src={picture} alt={} />
        </div>
      </div>

      <div>
        <p>En attente{statut}</p>
        <p>date{date}</p>
      </div>
    </div>

  </div>
);

ExchangeTracking.propTypes = {
  isAccept: PropTypes.bool.isRequired,
  isRefused: PropTypes.bool.isRequired,
  statut: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default ExchangeTracking;
