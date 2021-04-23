const seedAddRolesToAuthors = [
  {
    id: 1, role: 1,
  },
  {
    id: 2, role: 1,
  },
  {
    id: 3, role: 1,
  },
  {
    id: 4, role: 2,
  },
  {
    id: 5, role: 2,
  },
  {
    id: 6, role: 2,
  },
  {
    id: 7, role: 2,
  },
  {
    id: 8, role: 2,
  },
];

async function up({ context: queryInterface }) {
  seedAddRolesToAuthors.forEach(async (author) => {
    await queryInterface.bulkUpdate('author', { role: author.role }, { id: author.id });
  });
}

async function down({ context: queryInterface }) {
  seedAddRolesToAuthors.forEach(async (author) => {
    await queryInterface.bulkUpdate('author', { role: null }, { id: author.id });
  });
}

module.exports = { up, down };
