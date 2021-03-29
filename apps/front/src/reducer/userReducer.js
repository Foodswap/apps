import {
  UPDATE_MENU_BURGER_STATUS,
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
  menuIsOpen: false,
  email: user.email || '',
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
    /**
    * change status open or close of burger menu
    */
    case UPDATE_MENU_BURGER_STATUS: {
      return {
        ...state,
        menuIsOpen: !state.menuIsOpen,
      };
    }

    /**
    * change status open or close of login modale
    */
    case MODAL_LOGIN_TOGGLE:
      return {
        ...state,
        email: '',
        password: '',
        isSignUpOpen: false,
        isLoginOpen: !state.isLoginOpen,
      };

    /**
    * change status open or close of signup modale
    */
    case MODAL_SIGN_UP_TOGGLE:
      return {
        ...state,
        email: '',
        password: '',
        isSignUpOpen: !state.isSignUpOpen,
        isLoginOpen: false,
        signUpIsValid: false,
      };

    /**
    * change controlled inputs values in state of signup and login forms
    */
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };

    /**
    * update user information in state when the signup is a succes
    */
    case SIGNUP_SUCCES:
      return {
        ...state,
        signUpIsValid: true,
        email: action.payload.email,
        password: action.payload.password,
        pseudonym: action.payload.username,
        city: action.payload.city,
      };

    /**
    * update user information in state when the login is a succes
    */
    case LOGIN_SUCCES:
      return {
        ...state,
        email: action.payload.user.email,
        pseudonym: action.payload.user.username,
        city: action.payload.user.city,
        password: '',
        isLogged: true,
        isLoginOpen: false,

        infos: {
          token: action.payload.token,
          id: action.payload.user.id,
        },
      };

    /**
    * update user information in state when the login is a not a succes
    */
    case LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        loggedMessage: 'Veuillez réessayer !',

        infos: {
          accesToken: '',
          id: '',
        },
      };

    /**
    * update user information in state when the signup is a not a succes
    */
    case SIGNUP_ERROR:
      return {
        ...state,
        loggedMessage: 'Un compte existe déjà avec cet email !',
        infos: {
          accesToken: '',
          id: '',
        },
      };

    /**
    * clear all user informations in state when he logs out
    */
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        email: '',
        pseudonym: '',
        city: '',
        isLogged: false,
        loggedMessage: '',
        infos: {
          accesToken: '',
          id: '',
        },
      };

    /**
    * update state whit input value of signup form
    */
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
