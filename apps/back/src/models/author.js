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
 * @property {number} latitude - The latitude
 * @property {number} longitude - The longitude
 */

/**
 * An Author without password
 *
 * @typedef {object} AuthorDto
 *
 * @property {number} id - The id
 * @property {string} username - The username
 * @property {string} email - The email
 * @property {string} city - The city
 */

/**
 * An Author with his location
 *
 * @typedef {object} AuthorLocationDto
 *
 * @property {number} id - The id
 * @property {string} username - The username
 * @property {string} email - The email
 * @property {string} city - The city
 * @property {number} latitude - The latitude
 * @property {number} longitude - The longitude
 */

/**
 * An Author without password and city
 *
 * @typedef {object} AuthorSwapDto
 *
 * @property {number} id - The id
 * @property {string} username - The username
 * @property {string} email - The email
 */

/**
 * Author login body
 *
 * @typedef {object} LoginBody
 *
 * @property {string} email.required - The email
 * @property {string} password.required - The password
 */

/**
 * An authenticated Author
 *
 * @typedef {object} AuthenticatedAuthorDto
 *
 * @property {string} accessToken - The access token
 * @property {AuthorDto} author - The Author
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
        latitude: {
          type: DataTypes.INTEGER,
        },
        longitude: {
          type: DataTypes.INTEGER,
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
