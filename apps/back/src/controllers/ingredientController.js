const Ingredient = require('../models/ingredient');

const ingredient = {
  /**
   * GET /v1/ingredient/{ingredientId}
   *
   * @summary Get one ingredient by id
   * @tags ingredients
   *
   * @param {number} ingredientId.path - id of ingredient
   *
   * @return {ingredientDto} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   *
   * @example response - 200 - an ingredient returns by api
   * {
   *   "id": 4,
   *   "name": "pomme de terre"
   * }
   *
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "ingredient not found"
   * }
   */
  getIngredients: async (request, response) => {
    // const ingredients = request.params.id;
    try {
      const ingredients = await Ingredient.findByPk(Number(request.params.id));
      response.status(200).json(ingredients);
    } catch (error) {
      response.status(404).json({ error: 404, message: 'Ingredient not found' });
    }
  },

  /**
   * GET /v1/ingredients
   *
   * @summary Get all ingredients
   * @tags ingredients
   *
   * @return {array<IngredientsDto>} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   *
   * @example response - 200 - an ingredients returns by api
   * [{
   *    "id": 1,
   *    "name": "Sel"
   * },
   * {
   *  "id": 2,
   *  "name": "Poivre"
   * },
   * {
   *  "id": 3,
   *  "name": "Huile"
   * },
   * {
   *  "id": 4,
   *  "name": "Pomme de terre"
   * },
   * {
   *  "id": 5,
   *  "name": "Graisse de canard"
   * },
   * {
   *  "id": "etc..."
   * }]
   *
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "ingredients not found"
   * }
   */
  getAllIngredient: async (request, response) => {
    try {
      const allIngredients = await Ingredient.findAll();
      response.status(200).json(allIngredients);
    } catch (error) {
      response.status(404).json({ error: 404, message: 'Ingredients not found' });
    }
  },
};

module.exports = ingredient;
