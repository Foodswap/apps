const { Model } = require('sequelize');

/**
 * An Author
 *
 * @typedef {object} AuthorBody
 *
 * @property {string} username.required - The username
 * @property {string} email.required - The email
 * @property {string} password.required - The password
 * @property {string} city.required - The city
 */

/**
 * An Author without password
 *
 * @typedef {object} AuthorDto
 *
 * @property {number} id - The username
 * @property {string} username - The username
 * @property {string} email - The email
 * @property {string} city - The city
 */
class Author extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
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
        sequelize,
        tableName: 'author',
      },
    );
  }

  static associate(models) {
    Author.hasMany(models.Meal, {
      foreignKey: 'author_id',
      as: 'meals',
    });
  }
}

module.exports = Author;
