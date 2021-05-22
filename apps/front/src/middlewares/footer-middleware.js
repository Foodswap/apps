/* eslint-disable no-lone-blocks */
import axios from 'axios';

import {
  GET_LAST_DISHES,
  updateLastDishes,
} from '../actions/footer-actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case GET_LAST_DISHES: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/footerLastDishes`,
      })
        .then((res) => {
          const actionToDispatch = updateLastDishes(res.data);
          return store.dispatch(actionToDispatch);
        });
    } break;

    default:
      return next(action);
  }

  return false;
};
