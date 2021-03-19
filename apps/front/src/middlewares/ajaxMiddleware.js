import axios from 'axios';
// // import { APP_INIT } from '../actions';
import data from '../../dataUser';
import { toast } from 'react-toastify';


import {
  OPEN_OR_CLOSE_MENU_BURGER,
  SEND_LOGIN,
  USER_LOGOUT,
  SEND_SIGN_UP,
  loginSucces,
  loginError,
  signUpSucces,
  signUpError,
  handleLogoutSuccess,
  updateMenuBurgerStatus,
} from '../actions/user';

export default (store) => (next) => (action) => {
  switch (action.type) {
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
          console.log(`response ok : ${res}`);

          const token = res.headers.authorization;
          const user = res.data.author;
          const pseudo = res.data.author.username;

          console.log(res.headers);
          toast.success(`Content de vous revoir ${pseudo} !`),
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));

          const actionToDispatch = loginSucces({ user, token });
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} erreur au post login`);
          const actionToDispatch = loginError();
          store.dispatch(actionToDispatch);
        })
        .finally(() => {
          console.log('login done');
        });
    }
      break;
    case SEND_SIGN_UP: {
      const {
        email, password, pseudonym, city,
      } = store.getState().user;
      // push dans le tableau un nouvel obj avec les info entrées dans le input
      const userObj = {
        username: pseudonym,
        email,
        password,
        city,
      };
      console.log(userObj);

      // data.push(userObj);
      console.log(data);

      // TODO requete GET pour verifier que le mail ou le pseudo n'existe pas, puis POST

      // axios({
      //   method: 'get',
      //   url: 'http://localhost:5000/users',
      // })
      //   .then((response) => {
      //     console.log(response);
      //     const result = response.find(((user) => user.mail === userObj.email));

      //     if (!result) {

      // s'il le mail n'existe pas je lance la req post
      axios({
        method: 'post',
        url: `${process.env.API_URL}/signup`,
        data: userObj,
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          toast.success('Inscription réussie !');
          const actionToDispatch = signUpSucces(res.data);
          store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.trace(`${error} erreur au post`);
          const actionToDispatch = signUpError();
          store.dispatch(actionToDispatch);
        })
        .finally(() => {
          console.log(userObj);
        });
      // }
      // })
      // .catch((error) => {
      //   console.trace(error);
      // })
      // .finally(() => {
      //   console.log('finally');
      // });
    } break;
    case USER_LOGOUT: {

      
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      const actionToDispatch = handleLogoutSuccess();
      store.dispatch(actionToDispatch);
      setTimeout(() => {
        // eslint-disable-next-line no-restricted-globals
        location.href = '/';
      }, 1000);
      toast.success(`À bientôt !`);
    } break;
    case OPEN_OR_CLOSE_MENU_BURGER: {
      const { menuIsOpen } = store.getState().user;

      const actionToDispatch = updateMenuBurgerStatus(!menuIsOpen);
      return store.dispatch(actionToDispatch);
    }
    default:
      return next(action);
  }
};
