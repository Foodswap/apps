require('dotenv').config();
const { Sequelize } = require('sequelize');
// eslint-disable-next-line import/no-extraneous-dependencies
const { Umzug, SequelizeStorage } = require('umzug');

const sequelize = process.env.production
  ? new Sequelize(process.env.PG_URL, {
    define: {
      underscored: true,
      timestamps: false,
    },
  })
  : new Sequelize({
    dialect: 'sqlite',
    storage: 'db.test.sqlite',
    define: {
      underscored: true,
      timestamps: false,
    },
  });

const umzug = new Umzug({
  migrations: { glob: 'db/seeds/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

if (require.main === module) {
  umzug.runAsCLI();
}
