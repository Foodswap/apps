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

import {
  SEND_FORM_RECIPE_UP,
  sendFormRecipeUpSuccess,
  sendFormRecipeUpError,
  fetchIngredientsSucces,
  fetchIngredientsError,
  FETCH_INGREDIENTS
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
    } 
    case SEND_FORM_RECIPE_UP:{
      const { picture,
        name,
        description,
        ingredients,
        portion,
        city,
        author,
        dish,
        kitchen,
        online
      } = store.getState().dishes;
      console.log("send form middleware");

      console.log(picture,
        name,
        description,
        ingredients,
        portion,
        city,
        author,
        dish,
        kitchen,
        online
        );

      axios({
        method: 'post',
        // url: 'http://ec2-54-145-80-6.compute-1.amazonaws.com/v1/meals',
        url: 'http://localhost:3000/dishes',
        data: {
          file: picture,
          name,
          description,
          ingredients: [{
            name: ingredients
          }],
          portion,
          city,
          author: {
            id: 2,
            username: author,
          },
          categories: [
            {
              type: "kitchen",
              name: kitchen,
            }, 
            {
              type: "dish",
              name: dish,
            }
          ],
          online,
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(`response ok : ${res}`);
        const actionToDispatch = sendFormRecipeUpSuccess();
        store.dispatch(actionToDispatch);
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
    case FETCH_INGREDIENTS: {
      axios({
        method: 'get',
        url: `http://localhost:3000/ingredients`,
      })
      .then((res) => {
        console.log("ok send search ingredients " + res.data);
        const actionToDispatch = fetchIngredientsSucces(res.data);
        return store.dispatch(actionToDispatch);
      })
      .catch((error) => {
        console.log(error);
        const actionToDispatch = fetchIngredientsError();
        return store.dispatch(actionToDispatch);
      });
    }
    default:
      return next(action);
  }
};

