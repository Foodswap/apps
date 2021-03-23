const { Model, DataTypes } = require('sequelize');
const connection = require('../database');

class Author extends Model {}

Author.init(
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
    sequelize: connection,
    tableName: 'author',
  },
);

module.exports = Author;
