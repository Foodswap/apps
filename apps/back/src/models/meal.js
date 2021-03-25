const { Model } = require('sequelize');

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
