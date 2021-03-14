/* eslint-disable no-lone-blocks */
import axios from 'axios';

import {
  DELETE_ONE_DISH,
  ONE_DISH_SELECT,
  DISH_EXCHANGE,
  GET_LIST_OF_DISHES,
  GET_ALL_DISHES_FROM_A_USER,
  deleteOneDishSuccess,
  deleteOneDishError,
  updateSElectedDish,
  updateListOfDishes,
  dishExchange,
  updateAllDishesFromAUser,
} from '../actions/dishes';

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
} from '../actions/dishesForm';

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
        url: `${process.env.FAKE_API_URL}/dishes/${action.payload}`,
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
        url: `${process.env.FAKE_API_URL}/dishes`,
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
    }
    case SEND_FORM_RECIPE_UP: {
      const {
        picture,
        name,
        description,
        ingredients,
        portion,
        city,
        author,
        dish,
        kitchen,
        online,
      } = store.getState().dishes;

      const { infos, pseudonym } = store.getState().user;
      console.log('send form middleware');

      console.log(picture,
        name,
        description,
        ingredients,
        portion,
        city,
        author,
        dish,
        kitchen,
        online);

      axios({
        method: 'post',
        // url: 'http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals',
        url: `${process.env.FAKE_API_URL}/dishes`,
        data: {
          file: picture,
          author: {
            id: infos.id,
            username: pseudonym,
          },
          name,
          description,
          ingredients,
          portion,
          city,
          categories: [
            {
              type: 'kitchen',
              name: kitchen,
            },
            {
              type: 'dish',
              name: dish,
            },
          ],
          online,
        },
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      })
        .then((res) => {
          console.log(`response ok : ${res}`);
          const actionToDispatch = sendFormRecipeUpSuccess();
          store.dispatch(actionToDispatch);
          setTimeout(() => {
            // eslint-disable-next-line no-restricted-globals
            location.href = '/v1/mydishes';
          }, 500);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(`${error} erreur au post du formulaire`);
          const actionToDispatch = sendFormRecipeUpError();
          store.dispatch(actionToDispatch);
        })
        .finally(() => {
          console.log('post form done');
        });
    }
      break;
    // eslint-disable-next-line no-lone-blocks
    case FETCH_INGREDIENTS: {
      axios({
        method: 'get',
        url: `${process.env.FAKE_API_URL}/ingredients`,
      })
        .then((res) => {
        // console.log("ok send search ingredients " + res.data);
        // console.dir(res.data);
          const actionToDispatch = fetchIngredientsSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
          const actionToDispatch = fetchIngredientsError();
          return store.dispatch(actionToDispatch);
        });
    } break;
    // eslint-disable-next-line no-lone-blocks
    case FETCH_TYPE_DISH: {
      axios({
        method: 'get',
        url: `${process.env.FAKE_API_URL}/category?type=dish`,
      })
        .then((res) => {
          console.log(res.data);
          const actionToDispatch = fetchTypeDishSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
    } break;
    // eslint-disable-next-line no-lone-blocks
    case FETCH_TYPE_KITCHEN: {
      axios({
        method: 'get',
        url: `${process.env.FAKE_API_URL}/category?type=kitchen`,
      })
        .then((res) => {
          console.log(res.data);
          const actionToDispatch = fetchTypeKitchenSucces(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
    } break;
    case GET_ALL_DISHES_FROM_A_USER: {
      axios({
        method: 'get',
        url: `${process.env.API_URL}/meals/author/${action.payload}`,
      })
        .then((res) => {
          console.log(action.payload);
          console.log(res.data);
          const actionToDispatch = updateAllDishesFromAUser(res.data);
          return store.dispatch(actionToDispatch);
        })
        .catch((error) => {
          console.log(error);
        });
    } break;
    default:
      return next(action);
  }
};
