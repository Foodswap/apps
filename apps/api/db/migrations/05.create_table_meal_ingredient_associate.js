const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('meal_ingredient_associate', {
    id_meal: {
      type: Sequelize.INTEGER,
      references: {
        model: 'meal',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    id_ingredient: {
      type: Sequelize.INTEGER,
      references: {
        model: 'ingredient',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('meal_ingredient_associate');
}

module.exports = { up, down };
