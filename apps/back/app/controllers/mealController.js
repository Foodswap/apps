const { Meal } = require('../models');


const mealController = {

        createMeal: async (request, response) => {

        const data = request.body;
        if (!data.name) {
            return response.status(400).json({
                error: `You must provide a name`
            });
        }

        if (data.portion && isNaN(Number(data.portion))) {
            return response.status(400).json({
                error: `portion must be a number`
            });
        }

        try {
            data.picture_path = `${process.env.PATH_PICTURE}/${request.file.filename}`
            const meal = await Meal.create(data);
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