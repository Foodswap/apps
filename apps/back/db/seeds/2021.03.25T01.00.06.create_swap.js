const seedSwap = [
  {
    id: 1, status: 0, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 1, offered_meal_id: 5,
  },
  {
    id: 2, status: 0, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 5, offered_meal_id: 2,
  },
  {
    id: 3, status: 0, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 7, offered_meal_id: 15,
  },
  {
    id: 4, status: 0, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 12, offered_meal_id: 3,
  },
  {
    id: 5, status: 1, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 22, offered_meal_id: 5,
  },
  {
    id: 6, status: 1, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 10, offered_meal_id: 32,
  },
  {
    id: 7, status: 1, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 27, offered_meal_id: 14,
  },
  {
    id: 8, status: 1, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 9, offered_meal_id: 18,
  },
  {
    id: 9, status: 2, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 8, offered_meal_id: 14,
  },
  {
    id: 10, status: 2, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 16, offered_meal_id: 25,
  },
  {
    id: 11, status: 2, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 30, offered_meal_id: 4,
  },
  {
    id: 12, status: 2, date: '2021-03-21T15:49:31.39882+00:00', requested_meal_id: 32, offered_meal_id: 3,
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('swap', seedSwap);
  await queryInterface.sequelize.query('ALTER SEQUENCE swap_id_seq RESTART WITH 13');
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('swap', { id: seedSwap.map((u) => u.id) });
}

module.exports = { up, down };
