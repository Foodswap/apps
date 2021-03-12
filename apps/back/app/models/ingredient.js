const connection = require('../database');
const { Model, DataTypes } = require('sequelize');

class Ingredient extends Model {}

Ingredient.init({
    name: {
        type: DataTypes.TEXT
    }
}, {
    sequelize: connection,
    tableName: 'ingredient',
    timestamps: false
});

module.exports = Ingredient;