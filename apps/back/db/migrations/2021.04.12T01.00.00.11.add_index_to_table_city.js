const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.addIndex('city', ['name'], {
    type: 'FULLTEXT',
    name: 'text_idx',
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.removeIndex('city', 'text_idx');
}

module.exports = { up, down };
