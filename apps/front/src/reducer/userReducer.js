import {
  SET_INPUT_VALUE, LOGIN_SUCCESS, LOGIN_ERROR, USER_LOGOUT,
} from '../actions/user';

const initialState = {
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
    default:
      return state;
  }
};
