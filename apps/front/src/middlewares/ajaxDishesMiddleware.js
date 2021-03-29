/* eslint-disable no-lone-blocks */
import axios from 'axios';
import { toast } from 'react-toastify';

import {
  DELETE_ONE_DISH,
  ONE_DISH_SELECT,
  // DISH_EXCHANGE,
  GET_LIST_OF_DISHES,
  GET_ALL_DISHES_FROM_A_USER,
  deleteOneDishSuccess,
  deleteOneDishError,
  updateSElectedDish,
  updateListOfDishes,
  // dishExchange,
  updateAllDishesFromAUser,
} from '../actions/dishes';
import {
  FETCH_RESULTS, fetchResultsSucces,
} from '../actions/search';

import {
  SEND_FORM_RECIPE_UP,
  FETCH_INGREDIENTS,
  FETCH_TYPE_KITCHEN,
  FETCH_TYPE_DISH,
  sendFormRecipeUpSuccess,
  sendFormRecipeUpError,
  fetchIngredientsSucces,
  fetchIngredientsError,
  fetchTypeDishSucces,
  fetchTypeKitchenSucces,
  FETCH_MY_DISHES_SWAP,
  fetchMyDishesSwapSucces,
  GET_A_DISH_TO_EDIT,
  updateADishToEdit,
} from '../actions/dishesForm';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case DELETE_ONE_DISH: {
      const { userDishes } = store.getState().recipes;
      const dishIndexToRemove = userDishes.findIndex((dish) => dish.id === action.payload);

      if (dishIndexToRemove !== -1) {
        userDishes.splice(dishIndexToRemove, 1);
        const actionToDispatch = deleteOneDishSuccess(userDishes);

        return store.dispatch(actionToDispatch);
      }

      const actionToDispatch = deleteOneDishError();
      return store.dispatch(actionToDispatch);
    }

    // eslint-disable-next-line no-lone-blocks
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

    // eslint-disable-next-line no-lone-blocks
    // get last 6 dishes
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

    case FETCH_RESULTS: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/dishes/${action.payload.kitchenParam.toLowerCase()}/${action.payload.dishParam.toLowerCase()}/${action.payload.cityParam.toLowerCase()}`,
      })
        .then((res) => {
          res.data.sort((a, b) => b.id - a.id);
          const actionToDispatch = fetchResultsSucces(res.data);
          return store.dispatch(actionToDispatch);
        });
    } break;

    case SEND_FORM_RECIPE_UP: {
      const {
        dishId,
        picture,
        name,
        description,
        ingredients,
        portion,
        city,
        dish,
        kitchen,
        online,
      } = store.getState().dishes;

      const { infos } = store.getState().user;
      const formData = new FormData();
      formData.append('picture', picture);
      formData.append('author_id', infos.id);
      formData.append('name', name);
      formData.append('description', description);
      formData.append('ingredients', ingredients.map((ingredient) => ingredient.value || ingredient.id).join(','));
      formData.append('portion', portion);
      formData.append('city', city);
      formData.append('categories', `${kitchen},${dish}`);
      formData.append('online', online);

      axios({
        method: dishId ? 'put' : 'post',
        url: dishId ? `${process.env.API_URL}/dishes/${dishId}` : `${process.env.API_URL}/dishes`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(() => {
          const actionToDispatch = sendFormRecipeUpSuccess();
          store.dispatch(actionToDispatch);

          setTimeout(() => {
            // eslint-disable-next-line no-restricted-globals
            location.href = '/v1/mydishes';
          }, 200);

          toast.success('Votre plat a bien été créé');
        })
        .catch(() => {
          const actionToDispatch = sendFormRecipeUpError();
          store.dispatch(actionToDispatch);
        });
    }
      break;

    // eslint-disable-next-line no-lone-blocks
    case FETCH_INGREDIENTS: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/ingredients`,
      })
        .then((res) => {
        // console.log("ok send search ingredients " + res.data);
        // console.dir(res.data);
          const actionToDispatch = fetchIngredientsSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch(() => {
          const actionToDispatch = fetchIngredientsError();
          return store.dispatch(actionToDispatch);
        });
    } break;

    // eslint-disable-next-line no-lone-blocks
    case FETCH_TYPE_DISH: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/categories/dish`,
      })
        .then((res) => {
          const actionToDispatch = fetchTypeDishSucces(res.data);
          return store.dispatch(actionToDispatch);
        });
    } break;

    // eslint-disable-next-line no-lone-blocks
    case FETCH_TYPE_KITCHEN: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/categories/kitchen`,
      })
        .then((res) => {
          const actionToDispatch = fetchTypeKitchenSucces(res.data);
          return store.dispatch(actionToDispatch);
        });
    }
      break;

    case FETCH_MY_DISHES_SWAP: {
      const { infos } = store.getState().user;
      axios({
        method: 'get',
        url: `${process.env.API_URL}/dishes/online/${infos.id}`,
      })
        .then((res) => {
          const actionToDispatch = fetchMyDishesSwapSucces(res.data);
          return store.dispatch(actionToDispatch);
        });
    } break;

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

    case GET_A_DISH_TO_EDIT: {
      const dishId = action.payload;

      if (dishId) {
        axios({
          method: 'get',
          url: `${process.env.API_URL}/dishes/${action.payload}`,
        })
          .then((res) => {
            const actionToDispatch = updateADishToEdit(res.data);
            return store.dispatch(actionToDispatch);
          });
      }
    } break;
    default:
      return next(action);
  }

  return false;
};
