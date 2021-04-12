const { Model } = require('sequelize');

/**
 * A City
 *
 * @typedef {object} CityBody
 *
 * @property {string} county.required - The county
 * @property {string} slug.required - The slug
 * @property {string} name.required - The name
 * @property {string} zip_code.required - The zip code
 * @property {integer} district.required - The district
 * @property {float} longitude.required - The longitude
 * @property {float} latitude.required - The latitude
 */

class City extends Model {
  static ini(sequelize, DataTypes) {
    return super.init(
      {
        county: {
          type: DataTypes.STRING,
        },
        slug: {
          type: DataTypes.STRING,
        },
        name: {
          type: DataTypes.STRING,
        },
        zip_code: {
          type: DataTypes.STRING,
        },
        district: {
          type: DataTypes.INTEGER,
        },
        longitude: {
          type: DataTypes.FLOAT,
        },
        latitude: {
          type: DataTypes.FLOAT,
        },
      },
      {
        indexes: [
          { type: 'FULLTEXT', name: 'text_idx', fields: ['name'] },
        ],
      },
      {
        sequelize,
        tableName: 'city',
      },
    );
  }
}

module.exports = City;
