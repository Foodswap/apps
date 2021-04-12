const City = require('../models/city');
const { sequelize } = require('../database');

const cityController = {

  autoCompleteCity: async (request, response) => {
    const { letters } = request.params;

    if (letters.length >= 3) {
      try {
        City.findAll({
          where: ['MATCH (text_idx) AGAINST(?)', [letters]],
        });
      } catch (err) {
        response.status({ error: 500, message: err });
      }
    }
  },
};

module.exports = cityController;
