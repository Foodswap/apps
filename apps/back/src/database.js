require('dotenv').config();
const { Sequelize } = require('sequelize');
const {
  Author, Category, Ingredient, Meal, Swap,
} = require('./models');

const sequelize = process.env.NODE_ENV === 'test'
  ? new Sequelize({
    dialect: 'sqlite',
    storage: './db.test.sqlite',
    logging: false,
    define: {
      underscored: true,
      timestamps: false,
    },
  })
  : new Sequelize(process.env.PG_URL, {
    define: {
      underscored: true,
      timestamps: false,
    },
  });

const models = {
  Author: Author.init(sequelize, Sequelize),
  Category: Category.init(sequelize, Sequelize),
  Ingredient: Ingredient.init(sequelize, Sequelize),
  Meal: Meal.init(sequelize, Sequelize),
  Swap: Swap.init(sequelize, Sequelize),
};

Object.values(models)
  .filter((model) => typeof model.associate === 'function')
  .forEach((model) => model.associate(models));

const db = {
  ...models,
  sequelize,
  Sequelize,
};

module.exports = db;
