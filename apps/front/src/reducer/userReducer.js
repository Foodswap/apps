import {
  SET_INPUT_VALUE, LOGIN_SUCCESS, LOGIN_ERROR, USER_LOGOUT, SEND_SIGN_UP, SIGNUP_SUCCES,
} from '../actions/user';
import { MODAL_LOGIN_TOGGLE, MODAL_SIGN_UP_TOGGLE } from '../actions/modals';

const initialState = {
  isLoginOpen: false,
  isSignUpOpen: false,
  email: '',
  password: '',
  pseudonym: '',
  city: '',
  isLogged: false,
  signUpIsValid: false,
  loggedMessage: '',
  infos: {
    token: localStorage.getItem('token'),
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MODAL_LOGIN_TOGGLE:
      return {
        ...state,
        isLoginOpen: !state.isLoginOpen,
      };
    case MODAL_SIGN_UP_TOGGLE:
      return {
        ...state,
        isSignUpOpen: !state.isSignUpOpen,
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
        email: '',
        password: '',
        pseudonym: '',
        city: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        isLoginOpen: false,
        loggedMessage: `Bienvenue ${action.payload.pseudonym} ! `,
        infos: {
          pseudonym: action.payload.pseudonym,
          token: action.payload.token,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        loggedMessage: 'Veuillez réessayer !',
        infos: {},
      };
    case USER_LOGOUT:
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
