import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SignUp = ({
  email, password, pseudo, city, handleInputChange, handleSignUp,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handleSubmit');
    handleSignUp();
  };
  return (
    <div className="signup-modale">

      <div className="signup-form">
        <h2 className="signup-title">
          Inscrivez-vous
        </h2>
        <form
          className="signup-form-element"
          onSubmit={handleSubmit}
        >
          <input
            className="signup-form-input"
            type="email"
            name="email"
            placeholder="Votre email"
            onChange={(evt) => {
              handleInputChange(evt.target.value, evt.target.name);
            }}
            value={email}
          />
          <input
            className="signup-form-input"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            onChange={(evt) => {
              handleInputChange(evt.target.value, evt.target.name);
            }}
            value={password}
          />
          <input
            className="signup-form-input"
            type="pseudo"
            name="pseudo"
            placeholder="pseudo"
            onChange={(evt) => {
              handleInputChange(evt.target.value, evt.target.name);
            }}
            value={pseudo}
          />
          <input
            className="signup-form-input"
            type="city"
            name="city"
            placeholder="city"
            onChange={(evt) => {
              handleInputChange(evt.target.value, evt.target.name);
            }}
            value={city}
          />
          <button className="signup-form-submit" type="submit"> Valider </button>
        </form>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  pseudo: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default SignUp;
