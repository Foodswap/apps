const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('swap', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    requested_meal_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'meal',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    offered_meal_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'meal',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('swap');
}

module.exports = { up, down };
