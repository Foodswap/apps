const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class Author extends Model {

}

Author.init(
    {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        city: DataTypes.STRING
    },
    {
        sequelize,
        tableName: 'author'
        
    });

module.exports = Author;