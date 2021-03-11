import {
  SET_INPUT_VALUE,
  LOGIN_SUCCES,
  LOGIN_ERROR,
  USER_LOGOUT_SUCCESS,
  SEND_SIGN_UP,
  SIGNUP_SUCCES,
  SIGNUP_ERROR,
} from '../actions/user';

import {
  MODAL_LOGIN_TOGGLE,
  MODAL_SIGN_UP_TOGGLE,
} from '../actions/modals';

const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};
const initialState = {
  isLoginOpen: false,
  isSignUpOpen: false,
  email: '',
  password: '',
  pseudonym: user.username || '',
  city: user.city || '',
  isLogged: !!localStorage.getItem('token'),
  signUpIsValid: false,
  loggedMessage: '',
  infos: {
    accesToken: localStorage.getItem('token'),
    id: user.id || '',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MODAL_LOGIN_TOGGLE:
      return {
        ...state,
        isSignUpOpen: false,
        isLoginOpen: !state.isLoginOpen,
      };
    case MODAL_SIGN_UP_TOGGLE:
      return {
        ...state,
        isSignUpOpen: !state.isSignUpOpen,
        isLoginOpen: false,
        signUpIsValid: false,
      };
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SIGNUP_SUCCES:
      return {
        ...state,
        signUpIsValid: true,
        email: action.payload.email,
        password: action.payload.password,
        pseudonym: action.payload.username,
        city: action.payload.city,
      };
    case LOGIN_SUCCES:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        isLoginOpen: false,
        infos: {
          token: action.payload.accessToken,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        loggedMessage: 'Veuillez réessayer !',
        infos: {},
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        loggedMessage: 'Un compte existe déjà avec cet email !',
        infos: {},
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        loggedMessage: '',
        infos: {},
      };
    case SEND_SIGN_UP:
      return {
        ...state,
        [action.name]: action.value,
        loggedMessage: 'inscription ok',
      };
    default:
      return state;
  }
};
