const { Model } = require('sequelize');

/**
 * Swap
 *
 * @typedef {object} SwapBody
 *
 * @property {number} status.required - The swap status
 * @property {string} date.required - The date swap
 */

/**
 * Asker Swap with id
 *
 * @typedef {object} SwapDto
 *
 * @property {number} id - The id swap
 * @property {number} status - The swap status
 * @property {string} date - The date swap
 * @property {DishWithAskerDto} mealOffer - The proposed
 * @property {DishWithReceiverDto} mealRequest - The received
 */
class Swap extends Model {
  static init(sequelize, DataTypes) {
    return super.init({
      status: {
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: 'swap',
    });
  }

  static associate(models) {
    Swap.belongsTo(models.Meal, {
      foreignKey: 'requested_meal_id',
      as: 'mealRequest',
    });

    Swap.belongsTo(models.Meal, {
      foreignKey: 'offered_meal_id',
      as: 'mealOffer',
    });
  }
}

module.exports = Swap;
