/* eslint-disable no-lone-blocks */
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  DELETE_ONE_DISH,
  ONE_DISH_SELECT,
  GET_LIST_OF_DISHES,
  GET_ALL_DISHES_FROM_A_USER,
  deleteOneDishSuccess,
  deleteOneDishError,
  updateSElectedDish,
  updateListOfDishes,
  updateAllDishesFromAUser,
} from '../actions/dishes-actions';

export default (store) => (next) => (action) => {
  switch (action.type) {
    /**
     * on delete button click, delete the selected dish
     */
    case DELETE_ONE_DISH: {
      const token = localStorage.getItem('token');
      axios({
        method: 'delete',
        url: `${process.env.API_URL}/dishes/${action.payload}`,
        headers: {
          Authorization: token,
        },
      })
        .then(() => {
          toast.success('Votre plat a bien été supprimée !');
          const actionToDispatch = deleteOneDishSuccess(action.payload);
          return store.dispatch(actionToDispatch);
        })
        .catch(() => {
          const actionToDispatch = deleteOneDishError();
          store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * get all data of a dish, using it's ID
     */
    case ONE_DISH_SELECT: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/dishes/${action.payload}`,
      })
        .then((res) => {
          const actionToDispatch = updateSElectedDish(res.data);

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * get list of last online dishes created
     */
    case GET_LIST_OF_DISHES: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/lastDishes`,
      })
        .then((res) => {
          const actionToDispatch = updateListOfDishes(res.data);

          return store.dispatch(actionToDispatch);
        });
    } break;

    /**
     * get all dishes of a user
     */
    case GET_ALL_DISHES_FROM_A_USER: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/dishes/author/${action.payload}`,
      })
        .then((res) => {
          const actionToDispatch = updateAllDishesFromAUser(res.data);

          return store.dispatch(actionToDispatch);
        });
    } break;

    default:
      return next(action);
  }

  return false;
};
