import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MyInformation = ({
  username, email, city,
}) => (
  <div className="information">
    <h1 className="information-title">Mes informations</h1>

    <div className="information-container">
      <div className="information-content">
        <div className="information-field">Nom</div>
        <div className="information-value">{username}</div>
      </div>

      <div className="information-content">
        <div className="information-field">Email</div>
        <div className="information-value">{email}</div>
      </div>

      <div className="information-content">
        <div className="information-field">Ville</div>
        <div className="information-value">{city}</div>
      </div>
    </div>
  </div>
);

MyInformation.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default MyInformation;
