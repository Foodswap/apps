const connection = require('../database');
const { Model, DataTypes } = require('sequelize');

class Swap extends Model {
}

Swap.init({
    status: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    }
  },
    {
        sequelize: connection,
        tableName: 'swap'
        
    });

module.exports = Swap;