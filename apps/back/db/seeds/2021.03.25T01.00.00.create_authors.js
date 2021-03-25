const bcrypt = require('bcrypt');

const password = bcrypt.hashSync('test', 10);

const seedAuthors = [
  {
    id: 1, username: 'marie', email: 'marie@mail.fr', password, city: 'Paris',
  },
  {
    id: 2, username: 'coco', email: 'cocom@mail.fr', password, city: 'Nice',
  },
  {
    id: 3, username: 'louis', email: 'louis@mail.fr', password, city: 'Marseille',
  },
  {
    id: 4, username: 'rodolophe', email: 'rodolophe@mail.fr', password, city: 'Grenoble',
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('author', seedAuthors);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('author', { id: seedAuthors.map((u) => u.id) });
}

module.exports = { up, down };
