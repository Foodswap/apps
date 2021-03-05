// export const initialState = {};

import {
  DELETE_ONE_DISH, DELETE_ONE_DISH_SUCCESS, DELETE_ONE_DISH_ERROR,
} from '../actions/dishes';

const initialState = {
  deleteMessage: '',
  userDishes: [
    {
      id: 1,
      picture: 'https://lh3.google.com/u/0/d/1lll7XWtpAM_tWXcCuHgWfncuFULfwg10=w842-h770-iv1',
      name: 'Buddha bowl',
      description: [
        'une basse riz.',
        ' Sur le dessus il y a du saumon, avocat, carotte, choux rouge',
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
      description: [
        'une basse riz.',
        ' Sur le dessus il y a du boeuf haché, épinard, carotte, oeuf',
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
      description: [
        'une basse génoise, fouré d\'une ganache monté chocolat blanc et fraise.',
        ' Sur le dessus il y a de la crème chantilly, macaron, fraise et fleures en sucre',
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
      deleteMessage: 'il y a eu un problème, votre fine n\'a pas pu être supprimé',
    };

    default:
      return state;
  }
};
