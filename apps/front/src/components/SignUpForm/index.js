import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const SignUp = ({
  email,
  password,
  pseudonym,
  city,
  handleInputChange,
  handleSignUp,
  isSignUpOpen,
  signUpFormToggle,
  signUpIsValid,
  loginFormToggle,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handleSubmit');
    handleSignUp();
  };
  const classIsOpen = isSignUpOpen ? 'signup-modale' : 'signup-modale-close';

  return (
    <div className={classIsOpen}>
      <button type="button" className="signup-form-button-close" onClick={signUpFormToggle}> X </button>
      { signUpIsValid && (
        <div className="signup-succes-message">
          <p> Bienvenue sur FoodSwap ! </p>
          <p> Vous pouvez maintenant vous
            <a
              className="signup-succes-link"
              href=""
              onClick={(evt) => {
                evt.preventDefault();
                loginFormToggle();
              }}
            > connecter
            </a>
          </p>
        </div>
      )}

      { !signUpIsValid && (
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
              required
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
              required
            />
            <input
              className="signup-form-input"
              type="pseudo"
              name="pseudonym"
              placeholder="pseudo"
              onChange={(evt) => {
                handleInputChange(evt.target.value, evt.target.name);
              }}
              value={pseudonym}
              required
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
              required
            />
            <button className="signup-form-submit" type="submit"> Valider </button>
          </form>
        </div>
      )}
    </div>
  );
};

SignUp.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  pseudonym: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  handleSignUp: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isSignUpOpen: PropTypes.bool.isRequired,
  signUpFormToggle: PropTypes.func.isRequired,
  loginFormToggle: PropTypes.func.isRequired,
  signUpIsValid: PropTypes.bool.isRequired,
};

export default SignUp;
