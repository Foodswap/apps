import {
  SET_INPUT_VALUE, LOGIN_SUCCESS, LOGIN_ERROR, USER_LOGOUT, SEND_SIGN_UP,
} from '../actions/user';
import { MODAL_LOGIN_TOGGLE } from '../actions/modals';

const initialState = {
  isLoginOpen: false,
  email: '',
  password: '',
  pseudo: '',
  city: '',
  isLogged: false,
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
    case SET_INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        isLogged: true,
        loggedMessage: `Bienvenue ${action.payload.pseudo} ! `,
        infos: {
          pseudo: action.payload.pseudo,
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
