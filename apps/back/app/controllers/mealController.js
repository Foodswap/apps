const {
    Meal
} = require('../models');


const mealController = {

    createMeal: async (request, response) => {

        const mealToCreate = request.body;

        try {

            mealToCreate.picture_path = request.file.filename
            Meal.create(mealToCreate).then(createdMeal => {
                meal.addIngredients(JSON.parse(mealToCreate.ingredients)).then(() => {
                    Meal.findByPk(Number(createdMeal.id), {
                        attributes: {
                            exclude: ['picture_path']
                        },
                        include: ['ingredients', 'author']
                    }).then((meal) => {
                        response.status(201).json(meal);
                    })
                })
            })

        } catch (error) {
            console.log(error);
            response.status(500);
        }
    },

    getOneMeal: async (request, response) => {
        try {
            const meal = await Meal.findByPk(Number(request.params.id), {
                attributes: {
                    exclude: ['picture_path']
                },
                include: ['ingredients', 'author']
            });
            response.status(200).json(meal);
        } catch (err) {
            console.trace(err);
            response.status(404).json("Plat non trouvé");
        }
    },

    getPicture: async (request, response) => {
        try {
            const meal = await Meal.findByPk(Number(request.params.id), {
                attributes: ['picture_path']
            });
            const picturePath = process.env.PATH_PICTURE + "/" + meal.picture_path
            response.sendFile(picturePath);
        } catch (err) {
            console.trace(err);
            response.status(404).json("Plat non trouvé");
        }
    }
};


module.exports = mealController;