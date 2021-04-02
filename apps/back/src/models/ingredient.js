const { Model } = require('sequelize');

/**
 * Ingredients
 *
 * @typedef {object} IngredientsBody
 * @property {string} name.required - The ingredients name
 */

/**
 * Ingredient with id
 *
 * @typedef {object} ingredientDto
 *
 * @property {number} id - The ingredient id
 * @property {string} name - The ingredient name
 */
class Ingredient extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      name: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      tableName: 'ingredient',
      timestamps: false,
    });
  }

  static associate(models) {
    Ingredient.belongsToMany(models.Meal, {
      foreignKey: 'id_ingredient',
      otherKey: 'id_meal',
      through: 'meal_ingredient_associate',
      as: 'meals',
      timestamps: false,
      hooks: true,
    });
  }
}

module.exports = Ingredient;
