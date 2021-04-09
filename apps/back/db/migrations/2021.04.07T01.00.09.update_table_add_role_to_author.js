const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.addColumn('author', 'role', {
    type: Sequelize.INTEGER,
    references: {
      model: 'role',
      key: 'id',
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeColumn('author', 'role');
}

module.exports = { up, down };
