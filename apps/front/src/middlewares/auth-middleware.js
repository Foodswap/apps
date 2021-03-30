import axios from 'axios';
import { toast } from 'react-toastify';

import {
  SEND_LOGIN,
  USER_LOGOUT,
  SEND_SIGN_UP,
  loginSucces,
  loginError,
  signUpSucces,
  signUpError,
  handleLogoutSuccess,
} from '../actions/auth-actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * Send login form inputs values to check datas on API and get token
     */
    case SEND_LOGIN: {
      const { email, password } = store.getState().user;

      axios({
        method: 'post',
        url: `${process.env.API_URL}/login`,
        data: {
          email, password,
        },
      })
        .then((res) => {
          const token = res.headers.authorization;
          const user = res.data.author;
          const pseudo = res.data.author.username;

          toast.success(`Content de vous revoir ${pseudo} !`);
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));

          const actionToDispatch = loginSucces({ user, token });
          store.dispatch(actionToDispatch);
        })
        .catch(() => {
          const actionToDispatch = loginError();
          store.dispatch(actionToDispatch);
        });
    }
      break;

    /**
     * Send sign up form inputs values to register new user
     */
    case SEND_SIGN_UP: {
      const {
        email, password, pseudonym, city,
      } = store.getState().user;
      const userObj = {
        username: pseudonym,
        email,
        password,
        city,
      };

      axios({
        method: 'post',
        url: `${process.env.API_URL}/signup`,
        data: userObj,
      })
        .then((res) => {
          toast.success('Inscription réussie !');
          const actionToDispatch = signUpSucces(res.data);
          store.dispatch(actionToDispatch);
        })
        .catch(() => {
          const actionToDispatch = signUpError();
          store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * On logout button click, remove user and token from localstorage
     */
    case USER_LOGOUT: {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      const actionToDispatch = handleLogoutSuccess();
      store.dispatch(actionToDispatch);
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/';
      }, 1000);
      toast.success('À bientôt !');
    } break;
    default:
      return next(action);
  }
  return false;
};
