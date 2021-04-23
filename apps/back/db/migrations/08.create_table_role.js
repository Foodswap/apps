const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('role', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      UNIQUE: true,
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('role');
}

module.exports = { up, down };
