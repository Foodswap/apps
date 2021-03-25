const { Sequelize } = require('sequelize');

async function up({ context: queryInterface }) {
  await queryInterface.createTable('meal', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    created_date: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      allowNull: false,
    },
    portion: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    online: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    author_id: {
      type: Sequelize.INTEGER,
      references: {
        model: 'author',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.dropTable('meal');
}

module.exports = { up, down };
