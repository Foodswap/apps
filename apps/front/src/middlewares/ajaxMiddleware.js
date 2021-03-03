// import axios from 'axios';
// // import { APP_INIT } from '../actions';
import data from '../../dataUser';

import {
  SEND_LOGIN, loginSuccess, loginError, SEND_SIGN_UP,
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
        email, password, pseudo, city,
      } = store.getState().user;
      // push dans le tableau un nouvel obj avec les info entrées dans le input
      const userObj = {
        email,
        password,
        pseudo,
        city,
      };
      console.log(userObj);

      data.push(userObj);
      console.log(data);
    }
      break;
    default:
      return next(action);
  }
};
