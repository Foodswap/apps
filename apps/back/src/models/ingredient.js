const { Model } = require('sequelize');

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
