const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await Promise.all([
    queryInterface.addColumn(
      'author',
      'latitude',
      {
        type: Sequelize.FLOAT,
        allowNull: true,
        UNIQUE: false,
      },
    ),
    queryInterface.addColumn(
      'author',
      'longitude',
      {
        type: Sequelize.FLOAT,
        allowNull: true,
        UNIQUE: false,
      },
    ),
  ]);
}
async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('author', 'latitude');
  await queryInterface.removeColumn('author', 'longitude');
}
module.exports = { up, down };
