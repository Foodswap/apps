const connection = require('../database');
const { Model, DataTypes } = require('sequelize');

class Author extends Model {

}

Author.init({
    username: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    city: {
      type: DataTypes.TEXT
    }
  },
    {
        sequelize: connection,
        tableName: 'author'
        
    });

module.exports = Author;