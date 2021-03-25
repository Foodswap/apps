const { Model } = require('sequelize');

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
