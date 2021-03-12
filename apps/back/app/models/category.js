const { DataTypes, Model } = require('sequelize');
const connection = require('../database');

class Category extends Model {}

Category.init({
    type: {
        type: DataTypes.TEXT
    },

    name: {
        type: DataTypes.TEXT
    }
}, {
    sequelize: connection,
    tableName: 'category',
    timestamps: false
});

module.exports = Category;