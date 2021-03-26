const bcrypt = require('bcryptjs');

const password = bcrypt.hashSync('test', 10);

const seedAuthors = [
  {
    id: 1, username: 'Marie', email: 'marie@mail.fr', password, city: 'Paris',
  },
  {
    id: 2, username: 'Anne', email: 'anne@mail.fr', password, city: 'Nice',
  },
  {
    id: 3, username: 'Julien', email: 'julien@mail.fr', password, city: 'Marseille',
  },
  {
    id: 4, username: 'Salma', email: 'salma@mail.fr', password, city: 'Grenoble',
  },
  {
    id: 5, username: 'Samuel', email: 'samuel@mail.fr', password, city: 'Bordeaux',
  },
  {
    id: 6, username: 'Michel', email: 'michel@mail.fr', password, city: 'Ajaccio',
  },
  {
    id: 7, username: 'Liloo', email: 'liloo@mail.fr', password, city: 'Lille',
  },
  {
    id: 8, username: 'korben', email: 'korben@mail.fr', password, city: 'Nantes',
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('author', seedAuthors);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('author', { id: seedAuthors.map((u) => u.id) });
}

module.exports = { up, down };
