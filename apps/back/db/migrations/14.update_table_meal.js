const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.removeColumn('meal', 'city');
}

async function down({ context: queryInterface }) {
  await Promise.all([
    queryInterface.addColumn(
      'meal',
      'city',
      {
        type: Sequelize.TEXT,
      },
    ),
  ]);
}

module.exports = { up, down };
