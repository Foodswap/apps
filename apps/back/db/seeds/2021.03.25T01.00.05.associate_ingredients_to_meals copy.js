const seedIngredientsToMeals = [
  { id_meal: 1, id_ingredient: 45 },
  { id_meal: 1, id_ingredient: 156 },
  { id_meal: 1, id_ingredient: 109 },
  { id_meal: 2, id_ingredient: 6 },
  { id_meal: 2, id_ingredient: 168 },
  { id_meal: 2, id_ingredient: 71 },
  { id_meal: 2, id_ingredient: 167 },
  { id_meal: 2, id_ingredient: 29 },
  { id_meal: 2, id_ingredient: 73 },
  { id_meal: 2, id_ingredient: 1 },
  { id_meal: 2, id_ingredient: 2 },
  { id_meal: 3, id_ingredient: 7 },
  { id_meal: 3, id_ingredient: 10 },
  { id_meal: 3, id_ingredient: 6 },
  { id_meal: 3, id_ingredient: 11 },
  { id_meal: 3, id_ingredient: 111 },
  { id_meal: 3, id_ingredient: 166 },
  { id_meal: 3, id_ingredient: 92 },
  { id_meal: 3, id_ingredient: 120 },
  { id_meal: 3, id_ingredient: 113 },
  { id_meal: 3, id_ingredient: 94 },
  { id_meal: 3, id_ingredient: 95 },
  { id_meal: 4, id_ingredient: 1 },
  { id_meal: 4, id_ingredient: 2 },
  { id_meal: 4, id_ingredient: 21 },
  { id_meal: 4, id_ingredient: 46 },
  { id_meal: 4, id_ingredient: 71 },
  { id_meal: 4, id_ingredient: 90 },
  { id_meal: 4, id_ingredient: 149 },
  { id_meal: 4, id_ingredient: 159 },
  { id_meal: 4, id_ingredient: 164 },
  { id_meal: 5, id_ingredient: 45 },
  { id_meal: 5, id_ingredient: 23 },
  { id_meal: 5, id_ingredient: 1 },
  { id_meal: 5, id_ingredient: 2 },
  { id_meal: 6, id_ingredient: 8 },
  { id_meal: 6, id_ingredient: 48 },
  { id_meal: 6, id_ingredient: 50 },
  { id_meal: 6, id_ingredient: 51 },
  { id_meal: 6, id_ingredient: 25 },
  { id_meal: 6, id_ingredient: 29 },
  { id_meal: 6, id_ingredient: 74 },
  { id_meal: 6, id_ingredient: 68 },
  { id_meal: 6, id_ingredient: 21 },
  { id_meal: 6, id_ingredient: 20 },
  { id_meal: 6, id_ingredient: 1 },
  { id_meal: 6, id_ingredient: 2 },
  { id_meal: 6, id_ingredient: 23 },
  { id_meal: 7, id_ingredient: 9 },
  { id_meal: 7, id_ingredient: 6 },
  { id_meal: 7, id_ingredient: 137 },
  { id_meal: 7, id_ingredient: 29 },
  { id_meal: 7, id_ingredient: 69 },
  { id_meal: 7, id_ingredient: 21 },
  { id_meal: 7, id_ingredient: 20 },
  { id_meal: 7, id_ingredient: 1 },
  { id_meal: 7, id_ingredient: 2 },
  { id_meal: 8, id_ingredient: 119 },
  { id_meal: 8, id_ingredient: 65 },
  { id_meal: 8, id_ingredient: 6 },
  { id_meal: 8, id_ingredient: 12 },
  { id_meal: 8, id_ingredient: 17 },
  { id_meal: 8, id_ingredient: 23 },
  { id_meal: 8, id_ingredient: 62 },
  { id_meal: 8, id_ingredient: 1 },
  { id_meal: 8, id_ingredient: 2 },
  { id_meal: 9, id_ingredient: 119 },
  { id_meal: 9, id_ingredient: 25 },
  { id_meal: 9, id_ingredient: 132 },
  { id_meal: 9, id_ingredient: 69 },
  { id_meal: 10, id_ingredient: 45 },
  { id_meal: 10, id_ingredient: 53 },
  { id_meal: 10, id_ingredient: 29 },
  { id_meal: 10, id_ingredient: 17 },
  { id_meal: 10, id_ingredient: 4 },
  { id_meal: 10, id_ingredient: 25 },
  { id_meal: 10, id_ingredient: 55 },
  { id_meal: 10, id_ingredient: 21 },
  { id_meal: 10, id_ingredient: 20 },
  { id_meal: 10, id_ingredient: 1 },
  { id_meal: 10, id_ingredient: 2 },
  { id_meal: 10, id_ingredient: 49 },
  { id_meal: 11, id_ingredient: 45 },
  { id_meal: 11, id_ingredient: 23 },
  { id_meal: 11, id_ingredient: 66 },
  { id_meal: 11, id_ingredient: 71 },
  { id_meal: 11, id_ingredient: 8 },
  { id_meal: 11, id_ingredient: 160 },
  { id_meal: 11, id_ingredient: 10 },
  { id_meal: 11, id_ingredient: 157 },
  { id_meal: 12, id_ingredient: 45 },
  { id_meal: 12, id_ingredient: 1 },
  { id_meal: 12, id_ingredient: 2 },
  { id_meal: 13, id_ingredient: 7 },
  { id_meal: 13, id_ingredient: 1 },
  { id_meal: 13, id_ingredient: 11 },
  { id_meal: 13, id_ingredient: 93 },
  { id_meal: 13, id_ingredient: 10 },
  { id_meal: 14, id_ingredient: 144 },
  { id_meal: 14, id_ingredient: 36 },
  { id_meal: 14, id_ingredient: 42 },
  { id_meal: 14, id_ingredient: 145 },
  { id_meal: 14, id_ingredient: 21 },
  { id_meal: 14, id_ingredient: 1 },
  { id_meal: 14, id_ingredient: 2 },
  { id_meal: 15, id_ingredient: 40 },
  { id_meal: 15, id_ingredient: 92 },
  { id_meal: 15, id_ingredient: 93 },
  { id_meal: 15, id_ingredient: 7 },
  { id_meal: 15, id_ingredient: 27 },
  { id_meal: 15, id_ingredient: 10 },
  { id_meal: 15, id_ingredient: 6 },
  { id_meal: 16, id_ingredient: 25 },
  { id_meal: 16, id_ingredient: 23 },
  { id_meal: 16, id_ingredient: 69 },
  { id_meal: 16, id_ingredient: 16 },
  { id_meal: 16, id_ingredient: 36 },
  { id_meal: 17, id_ingredient: 9 },
  { id_meal: 17, id_ingredient: 48 },
  { id_meal: 17, id_ingredient: 69 },
  { id_meal: 17, id_ingredient: 79 },
  { id_meal: 17, id_ingredient: 23 },
  { id_meal: 18, id_ingredient: 48 },
  { id_meal: 18, id_ingredient: 150 },
  { id_meal: 18, id_ingredient: 21 },
  { id_meal: 18, id_ingredient: 28 },
  { id_meal: 18, id_ingredient: 154 },
  { id_meal: 18, id_ingredient: 43 },
  { id_meal: 18, id_ingredient: 164 },
  { id_meal: 18, id_ingredient: 16 },
  { id_meal: 18, id_ingredient: 46 },
  { id_meal: 18, id_ingredient: 90 },
  { id_meal: 18, id_ingredient: 89 },
  { id_meal: 18, id_ingredient: 159 },
  { id_meal: 19, id_ingredient: 116 },
  { id_meal: 19, id_ingredient: 44 },
  { id_meal: 19, id_ingredient: 56 },
  { id_meal: 19, id_ingredient: 155 },
  { id_meal: 19, id_ingredient: 156 },
  { id_meal: 19, id_ingredient: 159 },
  { id_meal: 19, id_ingredient: 79 },
  { id_meal: 20, id_ingredient: 4 },
  { id_meal: 20, id_ingredient: 56 },
  { id_meal: 20, id_ingredient: 158 },
  { id_meal: 20, id_ingredient: 87 },
  { id_meal: 20, id_ingredient: 91 },
  { id_meal: 20, id_ingredient: 154 },
  { id_meal: 20, id_ingredient: 43 },
  { id_meal: 21, id_ingredient: 164 },
  { id_meal: 21, id_ingredient: 16 },
  { id_meal: 21, id_ingredient: 46 },
  { id_meal: 21, id_ingredient: 71 },
  { id_meal: 21, id_ingredient: 1 },
  { id_meal: 21, id_ingredient: 2 },
  { id_meal: 22, id_ingredient: 44 },
  { id_meal: 22, id_ingredient: 25 },
  { id_meal: 22, id_ingredient: 17 },
  { id_meal: 22, id_ingredient: 71 },
  { id_meal: 22, id_ingredient: 159 },
  { id_meal: 22, id_ingredient: 21 },
  { id_meal: 22, id_ingredient: 1 },
  { id_meal: 22, id_ingredient: 2 },
  { id_meal: 22, id_ingredient: 8 },
  { id_meal: 23, id_ingredient: 142 },
  { id_meal: 23, id_ingredient: 162 },
  { id_meal: 23, id_ingredient: 33 },
  { id_meal: 23, id_ingredient: 82 },
  { id_meal: 23, id_ingredient: 84 },
  { id_meal: 23, id_ingredient: 25 },
  { id_meal: 23, id_ingredient: 17 },
  { id_meal: 23, id_ingredient: 55 },
  { id_meal: 23, id_ingredient: 165 },
  { id_meal: 24, id_ingredient: 145 },
  { id_meal: 24, id_ingredient: 4 },
  { id_meal: 24, id_ingredient: 144 },
  { id_meal: 24, id_ingredient: 36 },
  { id_meal: 24, id_ingredient: 21 },
  { id_meal: 24, id_ingredient: 143 },
  { id_meal: 24, id_ingredient: 69 },
  { id_meal: 24, id_ingredient: 58 },
  { id_meal: 25, id_ingredient: 8 },
  { id_meal: 25, id_ingredient: 16 },
  { id_meal: 25, id_ingredient: 36 },
  { id_meal: 25, id_ingredient: 17 },
  { id_meal: 25, id_ingredient: 18 },
  { id_meal: 25, id_ingredient: 6 },
  { id_meal: 25, id_ingredient: 21 },
  { id_meal: 25, id_ingredient: 20 },
  { id_meal: 25, id_ingredient: 159 },
  { id_meal: 25, id_ingredient: 90 },
  { id_meal: 25, id_ingredient: 91 },
  { id_meal: 25, id_ingredient: 155 },
  { id_meal: 25, id_ingredient: 156 },
  { id_meal: 26, id_ingredient: 40 },
  { id_meal: 26, id_ingredient: 12 },
  { id_meal: 26, id_ingredient: 7 },
  { id_meal: 26, id_ingredient: 10 },
  { id_meal: 26, id_ingredient: 1 },
  { id_meal: 26, id_ingredient: 11 },
  { id_meal: 27, id_ingredient: 117 },
  { id_meal: 27, id_ingredient: 16 },
  { id_meal: 27, id_ingredient: 46 },
  { id_meal: 27, id_ingredient: 149 },
  { id_meal: 27, id_ingredient: 115 },
  { id_meal: 27, id_ingredient: 17 },
  { id_meal: 27, id_ingredient: 81 },
  { id_meal: 27, id_ingredient: 90 },
  { id_meal: 27, id_ingredient: 1 },
  { id_meal: 27, id_ingredient: 2 },
  { id_meal: 27, id_ingredient: 21 },
  { id_meal: 28, id_ingredient: 118 },
  { id_meal: 28, id_ingredient: 94 },
  { id_meal: 28, id_ingredient: 120 },
  { id_meal: 28, id_ingredient: 10 },
  { id_meal: 28, id_ingredient: 12 },
  { id_meal: 29, id_ingredient: 8 },
  { id_meal: 29, id_ingredient: 6 },
  { id_meal: 29, id_ingredient: 67 },
  { id_meal: 29, id_ingredient: 19 },
  { id_meal: 29, id_ingredient: 137 },
  { id_meal: 29, id_ingredient: 159 },
  { id_meal: 29, id_ingredient: 21 },
  { id_meal: 29, id_ingredient: 1 },
  { id_meal: 29, id_ingredient: 2 },
  { id_meal: 29, id_ingredient: 155 },
  { id_meal: 30, id_ingredient: 8 },
  { id_meal: 30, id_ingredient: 66 },
  { id_meal: 30, id_ingredient: 45 },
  { id_meal: 30, id_ingredient: 58 },
  { id_meal: 30, id_ingredient: 17 },
  { id_meal: 30, id_ingredient: 28 },
  { id_meal: 30, id_ingredient: 156 },
  { id_meal: 30, id_ingredient: 168 },
  { id_meal: 30, id_ingredient: 79 },
  { id_meal: 30, id_ingredient: 160 },
  { id_meal: 30, id_ingredient: 10 },
  { id_meal: 30, id_ingredient: 159 },
  { id_meal: 31, id_ingredient: 7 },
  { id_meal: 31, id_ingredient: 12 },
  { id_meal: 31, id_ingredient: 10 },
  { id_meal: 31, id_ingredient: 82 },
  { id_meal: 31, id_ingredient: 6 },
  { id_meal: 31, id_ingredient: 11 },
  { id_meal: 31, id_ingredient: 1 },
  { id_meal: 31, id_ingredient: 123 },
  { id_meal: 32, id_ingredient: 157 },
  { id_meal: 32, id_ingredient: 160 },
  { id_meal: 32, id_ingredient: 1 },
  { id_meal: 32, id_ingredient: 10 },
  { id_meal: 32, id_ingredient: 8 },
  { id_meal: 32, id_ingredient: 45 },
  { id_meal: 32, id_ingredient: 15 },
  { id_meal: 32, id_ingredient: 167 },
  { id_meal: 32, id_ingredient: 66 },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('meal_ingredient_associate', seedIngredientsToMeals);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('meal_ingredient_associate', seedIngredientsToMeals);
}

module.exports = { up, down };
