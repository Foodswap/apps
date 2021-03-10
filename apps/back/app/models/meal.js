const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class Meal extends Model {
    toString() {
        return `le plat ${this.name} à ${this.portion} parts.`
    }
};

Meal.init(
    {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        portion: DataTypes.INTEGER,
        city: DataTypes.STRING,
        online: DataTypes.BOOLEAN,
        picture_path: DataTypes.TEXT,
        created_date: DataTypes.TIME,
    },

    {
        sequelize,
        tableName: 'meal'
    }
);

module.exports = Meal;