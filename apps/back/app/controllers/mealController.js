const { request } = require('express');
const Meal = require('../models/meal');

const mealController = {

    getOneMeal: async (request, response) => {
        try {
            const meal = await Meal.findByPk(Number(request.params.id));
            response.status(200).json(meal);
        } catch(err) {
            console.trace(err);
            response.status(404).json("Meal not found.");
        }
    }
}

module.exports = mealController;