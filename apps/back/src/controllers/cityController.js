const { Op } = require('sequelize');
const { City } = require('../models');

const cityController = {

  // GET /city/par

  autoCompleteCity: async (request, response) => {
    const { letters } = request.params;

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
  },
};

module.exports = cityController;
