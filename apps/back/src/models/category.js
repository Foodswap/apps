const { Model } = require('sequelize');

class Category extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        type: {
          type: DataTypes.TEXT,
        },

        name: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        tableName: 'category',
        timestamps: false,
      },
    );
  }

  static associate(models) {
    Category.belongsToMany(models.Meal, {
      foreignKey: 'id_category',
      otherKey: 'id_meal',
      through: 'meal_category_associate',
      as: 'meals',
    });
  }
}

module.exports = Category;
