import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const LoginForm = ({
  email,
  password,
  handleLogin,
  handleInputChange,
  isLogged,
  loggedMessage,
  userLogout,
  isLoginOpen,
  loginFormToggle,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };
  const classIsOpen = isLoginOpen ? 'login-modale' : 'login-modale-close';
  return (
    <div className={classIsOpen}>
      <button type="button" className="login-form-button-close" onClick={loginFormToggle}> X </button>

      { isLogged && (
        <div className="login-form-message-div">
          <p className="login-form-message">
            {loggedMessage}
          </p>

          <button className="logout-button" type="button" onClick={userLogout}> Se déconnecter </button>
        </div>
      )}
      { !isLogged && (
      <div className="login-form">
        <h2 className="login-title">
          Connectez-vous
        </h2>
        <form
          className="login-form-element"
          onSubmit={handleSubmit}
        >
          <input
            className="login-form-input"
            type="email"
            name="email"
            placeholder="Votre email"
            onChange={(evt) => {
              handleInputChange(evt.target.value, evt.target.name);
            }}
            value={email}
          />
          <input
            className="login-form-input"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            onChange={(evt) => {
              handleInputChange(evt.target.value, evt.target.name);
            }}
            value={password}
          />
          <button className="login-form-submit" type="submit"> Valider </button>

          <p className="login-form-message">
            {loggedMessage}
          </p>

        </form>
      </div>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  loggedMessage: PropTypes.string.isRequired,
  userLogout: PropTypes.func.isRequired,
  isLoginOpen: PropTypes.bool.isRequired,
  loginFormToggle: PropTypes.func.isRequired,
};
export default LoginForm;
