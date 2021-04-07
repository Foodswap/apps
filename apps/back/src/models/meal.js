const { Model } = require('sequelize');

/**
 * A Dish
 *
 * @typedef {object} DishBody
 *
 * @property {string} name.required - The name
 * @property {string} description.required - The description
 * @property {number} portion.required - The portion
 * @property {string} city.required - The city
 * @property {boolean} online.required - If the dish is online
 * @property {string} ingredients.required - Ids of ingredients, separated by coma
 * @property {string} categories.required - Ids of kitchen/dish categories, separated by coma
 * @property {string} picture.required - The picture path
 * @property {number} author_id.required - Id of Author
 */

/**
 * A Dish with id
 *
 * @typedef {object} DishDto
 *
 * @property {number} id - The id
 * @property {string} name - The name
 * @property {string} description - The description
 * @property {number} portion - The portion
 * @property {string} city - The city
 * @property {boolean} online - If the dish is online
 * @property {array<ingredientDto>} ingredients - The ingredients
 * @property {array<CategoryDto>} categories - The categories
 * @property {string} picture_path - The picture path
 */

/**
 * A Dish with asker Author
 *
 * @typedef {object} DishWithAskerDto
 *
 * @property {number} id - The id
 * @property {string} name - The name
 * @property {AuthorSwapDto} asker - The Author model
 */

/**
 * A Dish with receiver Author
 *
 * @typedef {object} DishWithReceiverDto
 *
 * @property {number} id - The id
 * @property {string} name - The name
 * @property {AuthorSwapDto} receiver - The Author model
 *

/**
 * The picture of a dish
 *
 * @typedef {object} PictureDishDto
 *
 * @property {string} picture_path.required - The picture path
 */

class Meal extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      name: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
      portion: {
        type: DataTypes.INTEGER,
      },
      city: {
        type: DataTypes.TEXT,
      },
      online: {
        type: DataTypes.BOOLEAN,
      },
      picture_path: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      tableName: 'meal',
    });
  }

  static associate(models) {
    Meal.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'author',
    });

    Meal.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'receiver',
    });

    Meal.belongsTo(models.Author, {
      foreignKey: 'author_id',
      as: 'asker',
    });

    Meal.hasMany(models.Swap, {
      foreignKey: 'requested_meal_id',
      as: 'swapsRequest',
    });

    Meal.hasMany(models.Swap, {
      foreignKey: 'offered_meal_id',
      as: 'swapsOffer',
    });

    Meal.belongsToMany(models.Category, {
      foreignKey: 'id_meal',
      otherKey: 'id_category',
      through: 'meal_category_associate',
      as: 'categories',
    });

    Meal.belongsToMany(models.Ingredient, {
      foreignKey: 'id_meal',
      otherKey: 'id_ingredient',
      through: 'meal_ingredient_associate',
      as: 'ingredients',
      timestamps: false,
      hooks: true,
    });
  }
}

module.exports = Meal;
