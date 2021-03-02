import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const LoginForm = ({
  email, password, handleLogin, handleInputChange,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('handleSubmit');
    handleLogin();
  };
  return (

    <div className="login-form">
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
          placeholder="Votre password"
          onChange={(evt) => {
            handleInputChange(evt.target.value, evt.target.name);
          }}
          value={password}
        />
        <button className="login-form-submit" type="submit"> Valider </button>

      </form>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,

};
export default LoginForm;
