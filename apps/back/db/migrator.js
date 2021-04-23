require('dotenv').config();
const { Sequelize } = require('sequelize');
// eslint-disable-next-line import/no-extraneous-dependencies
const { Umzug, SequelizeStorage } = require('umzug');

const sequelize = process.env.NODE_ENV === 'test'
  ? new Sequelize({
    dialect: 'sqlite',
    storage: 'db.test.sqlite',
    define: {
      underscored: true,
      timestamps: false,
    },
    logging: false,
  })
  : new Sequelize(process.env.PG_URL, {
    define: {
      underscored: true,
      timestamps: false,
    },
  });
const umzug = new Umzug({
  migrations: { glob: 'db/migrations/*.js' },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

if (require.main === module) {
  umzug.runAsCLI();
}
