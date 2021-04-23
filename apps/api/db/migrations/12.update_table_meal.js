const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await Promise.all([
    queryInterface.addColumn(
      'meal',
      'city_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'city',
          key: 'id',
        },
      },
    ),
  ]);
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('meal', 'city_id');
}
module.exports = { up, down };
