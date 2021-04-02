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
 * @property {boolean} online.required - The online.required
 * @property {string} ingredients.required - The ingredients id separated by comas
 * @property {string} categories.required - The kitchen category id and dish category id separated by comas
 * @property {string} picture.required - The picture path
 * @property {number} author_id.required - The author id
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
 * @property {boolean} online - The online.required
 * @property {string} ingredients - The ingredients
 * @property {string} categories - The categories
 * @property {string} picture_path.required - The picture path
 */

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
