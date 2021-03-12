const { response, request } = require('express');
const {
    Meal
} = require('../models');


const mealController = {

    createMeal: async (request, response) => {

        const mealToCreate = request.body;


        try {

            mealToCreate.picture_path = request.file.filename
            const createdMeal = await Meal.create(mealToCreate)
            await createdMeal.addIngredients(mealToCreate.ingredients.split(','));
            await createdMeal.addCategories(mealToCreate.categories.split(','));
        
            Meal.findByPk(Number(createdMeal.id), {
                attributes: {
                    exclude: ['picture_path']
                },
                include: ['ingredients', 'categories', 'author']
            }).then((meal) => {
                meal.author.password = null;
                response.status(201).json(meal);
                
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
                include: ['ingredients', 'categories', 'author']
            });
            meal.author.password = null;
            response.status(200).json(meal);
        } catch (err) {
            console.trace(err);
            response.status(500);
        }
    },

    getMealsByAuthor: async (request, response) => {
        try {
            const mealsByAuthor = await Meal.findAll({where:{author_id:request.params.author_id}});
            response.status(200).json(mealsByAuthor)
        } catch(error) {
            console.log(error);
            response.status(500);
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
    }, 

    getSixMeals: async (request, response) => {
        try {
            const sixMeals = await Meal.findAll({orderBy:'created_date' ,limit:6});
            response.status(200).json(sixMeals);
        } catch (error) {
            console.trace(error);
            response.status(404).json("Couldn't find six or less meals.")
        }
    }
};


module.exports = mealController;