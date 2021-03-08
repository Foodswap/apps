// action pour changer la valeur des input du login form
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
export const setInputValue = (value, name) => ({
  type: SET_INPUT_VALUE,
  name,
  value,
});

// action pour comparer les values des input email et password a l'API
// (dans un 1er temps à des data en dur)
export const SEND_LOGIN = 'SEND_LOGIN';
export const sendLogin = () => ({
  type: SEND_LOGIN,
});

// action quand le login est réussi
export const LOGIN_SUCCES = 'USER_LOGIN_SUCCESS';
export const loginSucces = (payload) => ({
  type: LOGIN_SUCCES,
  payload,
});

// action quand le login failed
export const LOGIN_ERROR = 'USER_LOGIN_ERROR';
export const loginError = () => ({
  type: LOGIN_ERROR,
});

// action pour se déconnecter
export const USER_LOGOUT = 'USER_LOGOUT';
export const handleLogout = () => ({
  type: USER_LOGOUT,
});

// action pour l'envoi du form SignUp
export const SEND_SIGN_UP = 'SEND_SIGN_UP';
export const sendSignUp = (payload) => ({
  type: SEND_SIGN_UP,
  payload,
});

// action signUp succes
export const SIGNUP_SUCCES = 'SIGNUP_SUCCES';
export const signUpSucces = (payload) => ({
  type: SIGNUP_SUCCES,
  payload,
});

export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const signUpError = (payload) => ({
  type: SIGNUP_ERROR,
  payload,
});
