const Ingredient = require('../models/ingredient');

const ingredient = {
    getIngredients: async (request, response) => {
        // const ingredients = request.params.id;
        try {
            const ingredients = await Ingredient.findByPk(Number(request.params.id));
            response.status(200).json(ingredients);
        } catch (error) {
            console.trace(error);
            response.status(404);
            console.log('please fuck my brain');
        }
    }
}

module.exports = ingredient;