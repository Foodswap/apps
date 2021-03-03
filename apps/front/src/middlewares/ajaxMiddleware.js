// import axios from 'axios';
// // import { APP_INIT } from '../actions';
import data from '../../dataUser';

import { SEND_LOGIN, loginSuccess, loginError } from '../actions/user';

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
    default:
      return next(action);
  }
};
