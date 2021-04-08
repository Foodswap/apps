const locationAuthors = [
  {
    id: 1, latitude: 5.5985, longitude: 28.855,
  },
  {
    id: 2, latitude: 4.485, longitude: 24.75,
  },
  {
    id: 3, latitude: 42.45, longitude: 2.475,
  },
  {
    id: 4, latitude: 7.245, longitude: 8.75,
  },

];

async function up({ context: queryInterface }) {
  locationAuthors.forEach(async (author) => {
    await queryInterface.bulkUpdate('author', { latitude: author.latitude, longitude: author.longitude }, { id: author.id });
  });
}

async function down({ context: queryInterface }) {
  locationAuthors.forEach(async (author) => {
    await queryInterface.bulkUpdate('author', { latitude: null, longitude: null }, { id: author.id });
  });
}

module.exports = { up, down };
