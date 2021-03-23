const { DataTypes, Model } = require('sequelize');
const connection = require('../database');

class Swap extends Model {}

Swap.init(
  {
    status: {
      type: DataTypes.INTEGER,
    },
    date: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize: connection,
    tableName: 'swap',
  },
);

module.exports = Swap;
