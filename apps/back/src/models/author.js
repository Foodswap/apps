const { Model } = require('sequelize');

class Author extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        username: {
          type: DataTypes.TEXT,
        },
        email: {
          type: DataTypes.TEXT,
        },
        password: {
          type: DataTypes.TEXT,
        },
        city: {
          type: DataTypes.TEXT,
        },
      },
      {
        sequelize,
        tableName: 'author',
      },
    );
  }

  static associate(models) {
    Author.hasMany(models.Meal, {
      foreignKey: 'author_id',
      as: 'meals',
    });
  }
}

module.exports = Author;
