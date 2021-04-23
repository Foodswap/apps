const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('city', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    county: {
      type: Sequelize.STRING,
      autoIncrement: false,
    },
    slug: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    zip_code: {
      type: Sequelize.STRING,
    },
    district: {
      type: Sequelize.INTEGER,
    },
    longitude: {
      type: Sequelize.FLOAT,
    },
    latitude: {
      type: Sequelize.FLOAT,
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('city');
}

module.exports = { up, down };
