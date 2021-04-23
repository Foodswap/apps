const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('meal_category_associate', {
    id_meal: {
      type: Sequelize.INTEGER,
      references: {
        model: 'meal',
        key: 'id',
      },
      onDelete: 'cascade',
    },
    id_category: {
      type: Sequelize.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('meal_category_associate');
}

module.exports = { up, down };
