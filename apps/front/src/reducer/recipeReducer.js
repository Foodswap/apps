import {
  DELETE_ONE_DISH,
  DELETE_ONE_DISH_SUCCESS,
  DELETE_ONE_DISH_ERROR,
  UPDATE_SELECTED_DISH,
  UPDATE_LIST_OF_DISHES,
  DISH_EXCHANGE,
  GET_LIST_OF_DISHES,
} from '../actions/dishes';

const initialState = {
  lastDishes: null,
  deleteMessage: '',
  userDishes: [
    {
      id: 1,
      picture: 'https://lh3.google.com/u/0/d/1lll7XWtpAM_tWXcCuHgWfncuFULfwg10=w842-h770-iv1',
      name: 'Buddha bowl',
      description: `une basse riz.
          Sur le dessus il y a du saumon, avocat, carotte, choux rouge`,
      ingredients: [
        {
          id: 1,
          name: 'riz',
        },

        {
          id: 2,
          name: 'saumon',
        },

        {
          id: 3,
          name: 'carotte',
        },

        {
          id: 4,
          name: 'avocat',
        },

        {
          id: 5,
          name: 'graine de sésame',
        },

        {
          id: 6,
          name: 'choux rouge',
        },

        {
          id: 7,
          name: 'citron',
        },
      ],
      created_date: '12.03.2021',
      portion: '1',
      city: 'Paris',
      online: true,
      author: {
        id: 8,
        pseudonym: 'Paulette',
      },
    },
    {
      id: 2,
      picture: 'https://lh3.google.com/u/0/d/1BZu0wwMKsAsSwxuob8idG-RgMOpLUy9d=w275-h786-iv2',
      name: 'Kimbap et bibimbap',
      description: `une basse riz.
        Sur le dessus il y a du boeuf haché, épinard, carotte, oeuf`,
      ingredients: [
        {
          id: 9,
          name: 'riz',
        },

        {
          id: 10,
          name: 'boeuf haché',
        },

        {
          id: 11,
          name: 'carotte',
        },

        {
          id: 12,
          name: 'épinard',
        },

        {
          id: 13,
          name: 'graine de sésame',
        },

        {
          id: 14,
          name: 'oeuf',
        },

        {
          id: 15,
          name: 'oignon',
        },
      ],
      created_date: '12.03.2021',
      portion: '3',
      city: 'Paris',
      online: true,
      author: {
        id: 8,
        pseudonym: 'Paulette',
      },
    },
    {
      id: 3,
      picture: 'https://lh3.google.com/u/0/d/1X167WvnTUO-8g7Yu5OpSY5tJNQrawiLi=w275-h786-iv1',
      name: 'Number cake',
      description: `une basse génoise, fouré d'une ganache monté chocolat blanc et fraise.
        Sur le dessus il y a de la crème chantilly, macaron, fraise et fleures en sucre`,
      ingredients: [
        {
          id: 16,
          name: 'farine',
        },

        {
          id: 17,
          name: 'sucre',
        },

        {
          id: 18,
          name: 'crème liquide',
        },

        {
          id: 19,
          name: 'oeuf',
        },

        {
          id: 20,
          name: 'fix chantilly',
        },

        {
          id: 21,
          name: 'fraise',
        },

        {
          id: 22,
          name: 'maizena',
        },
      ],
      created_date: '09.03.2021',
      portion: '10',
      city: 'Paris',
      online: false,
      author: {
        id: 8,
        pseudonym: 'Paulette',
      },
    },
  ],
  dishSelect: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case DELETE_ONE_DISH: return {
      ...state,
    };
    case DELETE_ONE_DISH_SUCCESS: return {
      ...state,
      userDishes: [...action.payload],
      deleteMessage: 'votre fiche de plat a bien été supprimée',
    };
    case DELETE_ONE_DISH_ERROR: return {
      ...state,
      deleteMessage: 'il y a eu un problème, votre fiche n\'a pas pu être supprimé',
    };
    case UPDATE_SELECTED_DISH: return {
      ...state,
      dishSelect: action.payload,
    };
    case UPDATE_LIST_OF_DISHES: return {
      ...state,
      lastDishes: action.payload,
    };
    case DISH_EXCHANGE: return {
      ...state,
    };
    case GET_LIST_OF_DISHES: return {
      ...state,
      lastDishes: action.payload,
    }

    default:
      return state;
  }
};
