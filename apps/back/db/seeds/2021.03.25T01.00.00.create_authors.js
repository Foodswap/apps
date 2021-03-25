const bcrypt = require('bcrypt');

const password = bcrypt.hashSync('test', 10);

const seedAuthors = [
  {
    id: 1, username: 'marie', email: 'marie@mail.fr', password, city: 'Paris',
  },
  {
    id: 2, username: 'anne', email: 'cocom@mail.fr', password, city: 'Nice',
  },
  {
    id: 3, username: 'julien', email: 'louis@mail.fr', password, city: 'Marseille',
  },
  {
    id: 4, username: 'salma', email: 'salma@mail.fr', password, city: 'Grenoble',
  },
  {
    id: 5, username: 'samuel', email: 'samuel@mail.fr', password, city: 'Bordeaux',
  },
  {
    id: 6, username: 'michel', email: 'michel@mail.fr', password, city: 'Ajaccio',
  },
  {
    id: 7, username: 'liloo', email: 'liloo@mail.fr', password, city: 'Lille',
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
