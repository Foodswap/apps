const Meal = require('../models/meal');


const mealController = {
        createMeal: async (request, response) => {
        const meal = new Meal(request.body);
        try {
            meal.picture_path = `${process.env.PATH_PICTURE}/${request.file.filename}`
            await meal.save();
            meal.picture_path = null;
            response.status(200).json(meal);
        } catch(error) {
            console.log(error);

        }
    }

};

module.exports = mealController;