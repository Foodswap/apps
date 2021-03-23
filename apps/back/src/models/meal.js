const { Model, DataTypes } = require('sequelize');
const connection = require('../database');

class Meal extends Model {}

Meal.init(
  {
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
    sequelize: connection,
    tableName: 'meal',
  },
);

module.exports = Meal;
