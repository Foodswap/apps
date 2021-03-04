import axios from 'axios';
// // import { APP_INIT } from '../actions';
import data from '../../dataUser';

import {
  SEND_LOGIN, loginSuccess, loginError, SEND_SIGN_UP, signUpSucces,
} from '../actions/user';

// ! Pour le moment je test ici le login avec des données en durs, pas de reqûete axios
export default (store) => (next) => (action) => {
  console.log('ajax middleware');
  switch (action.type) {
    case SEND_LOGIN: {
      const { email, password } = store.getState().user;

      data.map((userObj) => {
        if (email === userObj.email && password === userObj.password) {
          const actionToDispatch = loginSuccess(userObj);
          return store.dispatch(actionToDispatch);
        }

        const actionToDispatch = loginError();
        return store.dispatch(actionToDispatch);
      });
    }
      break;
    case SEND_SIGN_UP: {
      const {
        email, password, pseudonym, city,
      } = store.getState().user;
      // push dans le tableau un nouvel obj avec les info entrées dans le input
      const userObj = {
        email,
        password,
        pseudonym,
        city,
      };
      console.log(userObj);

      data.push(userObj);
      console.log(data);
      const actionToDispatch = signUpSucces();
      store.dispatch(actionToDispatch);
      // axios({
      //   method: 'post',
      //   url: 'http://localhost:5000/v1/signup',
      //   data: userObj,
      // })
      //   .then((response) => {
      //     console.log(`response ok : ${response}`);
      //   })
      //   .catch((error) => {
      //     console.trace(error);
      //   })
      //   .finally(() => {
      //     console.log('finally');
      //   });
    }
      break;
    default:
      return next(action);
  }
};
