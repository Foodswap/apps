const { QueryTypes } = require('sequelize');

async function up({ context: queryInterface }) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  const meals = await queryInterface.sequelize.query(`
          SELECT * FROM MEAL;
      `, {
    raw: true,
    type: QueryTypes.SELECT,
  });

  meals.forEach(async (meal) => {
    const cityId = await queryInterface.sequelize.query(`
          SELECT id FROM CITY WHERE slug = '${meal.city.toLowerCase()}';
      `, {
      type: QueryTypes.SELECT,
    });

    if (cityId[0]) {
      console.log('cityId : ', cityId[0].id);
      queryInterface.sequelize.query(`
              UPDATE MEAL SET city_id = ${cityId[0].id} WHERE id = ${meal.id};
        `);
    }
  });
}

async function down({ context: queryInterface }) {
  if (process.env.NODE_ENV === 'test') {
    return;
  }

  const meals = await queryInterface.sequelize.query(`
        SELECT * FROM MEAL;
    `, {
    raw: true,
    type: QueryTypes.SELECT,
  });

  meals.forEach(async (meal) => {
    await queryInterface.sequelize.query(`
        UPDATE MEAL SET city_id = null WHERE id = ${meal.id};
    `);
  });
}

module.exports = { up, down };
