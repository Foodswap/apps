const { Meal, Ingredient } = require('../models');

const ingredientController = {
    
    createIngredient: async (request, response, next) => {
        const data = request.body;

        if (!data.name) {
            return response.status(400).json({
                error: `You must provide a content`
            });
        }

        try {
            const ingredient = await Ingredient.create(data);
            response.json(ingredient);

        } catch (error) {
            next(error);
        }
    },

    addIngredientToMeal: async (request, response, next) => {

        const mealId = request.params.id;

        if (isNaN(mealId)) {
            return response.status(400).json({
                error: `the provided id must be a number`
            });
        }

        const ingredientId = request.body.id_ingredient;

        if (isNaN(ingredientId)) {
            return response.status(400).json({
                error: `the provided id_ingredient must be a number`
            });
        }

        try {

            let meal = await Meal.findByPk(mealId, {
                include: ['ingredients']
            });

            if (!meal) {
                return next();
            }

            let ingredient = await Ingredient.findByPk(ingredientId);
            if (!ingredient) {
                return next();
            }

            await meal.addIngredient(ingredient);
            meal = await Meal.findByPk(mealId, {
                include: ['ingredients']
            });
            response.json(meal);

        } catch (error) {
            next(error);
        }
    },

};

module.exports = ingredientController;
