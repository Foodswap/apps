const Meal = require('../models/meal');


const mealController = {
        createMeal: async (request, response) => {
        const meal = new Meal(request.body);
        try {
            meal.picture_path = `${process.env.PATH_PICTURE}/${request.file.filename}`
            console.log(meal.picture_path);
            response.status(200).json("bravo")
        } catch(error) {
            console.log(error);

        }
    }

};

module.exports = mealController;