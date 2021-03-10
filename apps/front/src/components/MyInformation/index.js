import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const MyInformation = ({
  username, email, city,
}) => (
  <div>
    <div>Nom {username}</div>
    <div>Email {email}</div>
    <div>Ville {city}</div>
  </div>
);

MyInformation.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default MyInformation;
