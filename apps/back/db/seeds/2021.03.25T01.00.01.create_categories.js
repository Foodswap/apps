const seedCategories = [
  { id: 1, type: 'dish', name: 'Entrée' },
  { id: 2, type: 'dish', name: 'Plat' },
  { id: 3, type: 'dish', name: 'Dessert' },
  { id: 4, type: 'kitchen', name: 'Européenne' },
  { id: 5, type: 'kitchen', name: 'Asiatique' },
  { id: 6, type: 'kitchen', name: 'Américaine' },
  { id: 7, type: 'kitchen', name: 'Coréenne' },
  { id: 8, type: 'kitchen', name: 'Africaine' },
  { id: 9, type: 'kitchen', name: 'Indienne' },
  { id: 10, type: 'kitchen', name: 'Chinoise' },
  { id: 11, type: 'kitchen', name: 'Indienne' },
  { id: 12, type: 'kitchen', name: 'Antillaise' },
  { id: 13, type: 'kitchen', name: 'Française' },
  { id: 14, type: 'kitchen', name: 'Italienne' },
  { id: 15, type: 'kitchen', name: 'Japonaise' },
  { id: 16, type: 'kitchen', name: 'Marocaine' },
  { id: 17, type: 'kitchen', name: 'Méditerranéenne' },
  { id: 18, type: 'kitchen', name: 'Mexicaine' },
  { id: 19, type: 'kitchen', name: 'Orientale' },
  { id: 20, type: 'kitchen', name: 'Thaïlandaise' },
  { id: 21, type: 'kitchen', name: 'Vietnamienne' },
  { id: 22, type: 'kitchen', name: 'Londonienne' },
  { id: 23, type: 'kitchen', name: 'Portugaise' },
  { id: 24, type: 'kitchen', name: 'Espagnole' },
  { id: 25, type: 'kitchen', name: 'Turques' },
  { id: 26, type: 'kitchen', name: 'Océanienne' },
];

async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('category', seedCategories);
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('author', { id: seedCategories.map((u) => u.id) });
}

module.exports = { up, down };
