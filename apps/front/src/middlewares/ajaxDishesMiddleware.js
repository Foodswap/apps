import axios from 'axios';

import {
  DELETE_ONE_DISH,
  deleteOneDishSuccess,
  deleteOneDishError,
  updateSElectedDish,
  ONE_DISH_SELECT,
  DISH_EXCHANGE,
  dishExchange,
  GET_LIST_OF_DISHES,
  updateListOfDishes,
} from '../actions/dishes';
import { SEND_SEARCH_FORM, FETCH_RESULTS, fetchResultsSucces } from '../actions/search';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_ONE_DISH: {
      const { userDishes } = store.getState().recipes;
      // eslint-disable-next-line no-console
      console.log(userDishes);

      const dishIndexToRemove = userDishes.findIndex((dish) => dish.id === action.payload);

      if (dishIndexToRemove !== -1) {
        userDishes.splice(dishIndexToRemove, 1);
        const actionToDispatch = deleteOneDishSuccess(userDishes);
        // console.log(userDishes);

        return store.dispatch(actionToDispatch);
      }

      const actionToDispatch = deleteOneDishError();
      return store.dispatch(actionToDispatch);
    }
    // eslint-disable-next-line no-lone-blocks
    case ONE_DISH_SELECT: {
      axios({
        method: 'get',
        url: `http://localhost:3000/dishes/${action.payload}`,
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = updateSElectedDish(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on get one dish`);
        })
        .finally(() => {
          console.log('login done');
        });
    } break;
    // eslint-disable-next-line no-lone-blocks
    case GET_LIST_OF_DISHES: {
      axios({
        method: 'get',
        url: 'http://localhost:3000/dishes',
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = updateListOfDishes(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(`${error} error on get one dish`);
        })
        .finally(() => {
          console.log('login done');
        });
    } break;
    case DISH_EXCHANGE: {
      const { userDishes } = store.getState().recipes;
      const actionToDispatch = dishExchange(userDishes);
      return store.dispatch(actionToDispatch);
    };
    case FETCH_RESULTS: {
      console.log(action.payload);
      axios({
        method: 'get',
        url: `http://localhost:3000/dishes?kitchenType.name=${action.payload.kitchenParam.toLowerCase()}&dishType.name=${action.payload.dishParam.toLowerCase()}&city=${action.payload.cityParam.toLowerCase()}`,
      })
      .then((res) => {
        console.log("ok send search " + res.data);
        const actionToDispatch = fetchResultsSucces(res.data);
        return store.dispatch(actionToDispatch);
      })
      .catch((error) => {
        console.log(error)
      });
    }
    default:
      return next(action);
  }
};
