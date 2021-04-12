const { Op } = require('sequelize');
const City = require('../models');

const cityController = {

  // GET /city/par

  autoCompleteCity: async (request, response) => {
    const { letters } = request.params;
    console.log(letters);

    const cities = await City.findAll({
      where: {
        name: {
          [Op.iLike]: `%${letters.toLowerCase()}%`,
        },
      },
    });

    response.status(200).json(cities);
  },
};

module.exports = cityController;
