const { Model } = require('sequelize');

/**
 * Swap
 *
 * @typedef {object} SwapBody
 *
 * @property {number} offered_meal_id.required - The id of offered swap
 * @property {number} requested_meal_id.required - The id of requested swap
 */

/**
 * Swap update
 *
 * @typedef {object} SwapUpdateBody
 *
 * @property {number} status.required - The new status of swap
 */

/**
 * Asker Swap with id
 *
 * @typedef {object} SwapDto
 *
 * @property {number} id - The id
 * @property {number} status - The swap status
 * @property {string} date - The date of the swap request
 * @property {DishWithAskerDto} mealOffer - The proposed Dish with Asker Author
 * @property {DishWithReceiverDto} mealRequest - The received Dish with Receiver Author
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
