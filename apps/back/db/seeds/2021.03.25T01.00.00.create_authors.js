const seedAuthors = [
  {
    id: 1, username: 'marie', email: 'marie@mail.fr', password: '$2b$10$2IJaCTfnrGcx/Uq83L76H.qii8dAHWyGXyQAUxV8LUjfT1nGG5yfu', city: 'Paris',
  },
  {
    id: 2, username: 'coco', email: 'cocom@mail.fr', password: '$2b$10$vPFTYGpha96EeNu/yJ2jrOKKOO/uU4ppFXEvA0j5ji/x6aShV.YJy', city: 'Nice',
  },
  {
    id: 3, username: 'louis', email: 'louis@mail.fr', password: '$2b$10$M6T1Te2syIR6HCcVmODMjOEOhYgQ3t2h9xvQ1Oxgx6nUBQbRqolIa', city: 'Marseille',
  },
  {
    id: 4, username: 'rodolophe', email: 'rodolophe@mail.fr', password: '$2b$10$5qozAXOr/.ahh9Pt9K2FguX2Dp2XWN8nqS/wxb2M9T3q29h/mfFCu', city: 'Grenoble',
  },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('author', seedAuthors);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('author', { id: seedAuthors.map((u) => u.id) });
}

module.exports = { up, down };
