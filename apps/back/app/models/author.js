const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class Author extends Model {
    
    toString() {
        return `L'user s'appelle ${this.pseudonym}, son mail est ${this.email} et son password est ${this.password} et il habite à ${this.address}`
    }

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