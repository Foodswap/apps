const { Model, DataTypes } = require('sequelize');
const connection = require('../database');

class Ingredient extends Model {}

Ingredient.init(
  {
    name: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize: connection,
    tableName: 'ingredient',
    timestamps: false,
  },
);

module.exports = Ingredient;
