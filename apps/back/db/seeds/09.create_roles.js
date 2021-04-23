const seedRoles = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'User' },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('role', seedRoles);

  if (process.env.NODE_ENV !== 'test') {
    await queryInterface.sequelize.query(`ALTER SEQUENCE role_id_seq RESTART WITH ${seedRoles.length + 1}`);
  }
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('role', { id: seedRoles.map((u) => u.id) });
}

module.exports = { up, down };
