const Meal = require('../models/meal');
const multer = require('multer');

const mealController = {
        createMeal: async (request, response) => {
        const meal = new Meal(request.body);
        try {
            meal.picture_path 
            response.status(200).json("bravo")
        } catch(error) {
            console.log(error);

        }
    }

};

module.exports = mealController;