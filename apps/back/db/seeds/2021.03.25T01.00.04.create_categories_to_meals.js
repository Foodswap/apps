const seedCategoriesToMeals = [
  { id_meal: 1, id_category: 1 },
  { id_meal: 1, id_category: 4 },
  { id_meal: 2, id_category: 1 },
  { id_meal: 2, id_category: 4 },
  { id_meal: 3, id_category: 3 },
  { id_meal: 3, id_category: 6 },
  { id_meal: 4, id_category: 1 },
  { id_meal: 4, id_category: 15 },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('meal_category_associate', seedCategoriesToMeals);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('meal_category_associate', seedCategoriesToMeals);
}

module.exports = { up, down };
