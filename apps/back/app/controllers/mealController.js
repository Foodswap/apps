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
    }, 

    getOneMeal: async (request, response) => {
        try {
            const meal = await Meal.findByPk(Number(request.params.id));
            response.status(200).json(meal);
        } catch(err) {
            console.trace(err);
            response.status(404).json("Meal not found.");
        }
    }
};


module.exports = mealController;