const Ingredient = require('../models/ingredient');

const ingredient = {
  getIngredients: async (request, response) => {
    // const ingredients = request.params.id;
    try {
      const ingredients = await Ingredient.findByPk(Number(request.params.id));
      response.status(200).json(ingredients);
    } catch (error) {
      response.status(404);
    }
  },

  getAllIngredient: async (request, response) => {
    try {
      const allIngredients = await Ingredient.findAll();
      response.status(200).json(allIngredients);
    } catch (error) {
      response.status(404);
    }
  },
};

module.exports = ingredient;
