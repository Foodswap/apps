/* import DataUserDishes from '../../data-userDishes'; */

import { DELETE_ONE_DISH, deleteOneDishSuccess, deleteOneDishError } from '../actions/dishes';

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

    default:
      return next(action);
  }
};
