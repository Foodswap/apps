const { Op } = require('sequelize');
const { City } = require('../models');

const cityController = {

  // GET /city/par

  autoCompleteCity: async (request, response) => {
    const { letters } = request.params;

    if (letters.length >= 3) {
      try {
        const cities = await City.findAll({
          where: {
            [Op.or]: [
              {
                name: {
                  [Op.iLike]: `%${letters.toLowerCase()}%`,
                },
              },
              {
                zip_code: {
                  [Op.iLike]: `%${letters.toLowerCase()}%`,
                },
              },
            ],
          },
          limit: 20,
        });
        response.status(200).json(cities);
      } catch (error) {
        response.status(404).json({ error: 404 });
      }
    }
  },
};

module.exports = cityController;
