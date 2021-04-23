const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('author', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      UNIQUE: true,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      UNIQUE: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    city: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('author');
}

module.exports = { up, down };
