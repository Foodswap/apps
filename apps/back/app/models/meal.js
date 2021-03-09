const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class Meal extends Model {

}

Meal.init(
    {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        portion: DataTypes.INTEGER,
        city: DataTypes.STRING,
        online: DataTypes.BOOLEAN
    },
    {
        sequelize,
        tableName: 'meal'
        
    });

module.exports = Meal;