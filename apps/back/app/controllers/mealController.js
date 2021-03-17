const {
    Meal
} = require('../models');
const { Op } = require('sequelize');
const sequelize = require('../database');

const mealService = {
    builRequest: (dishId, kitchenId, city) => {
        let request = { 
            where: {city: city, online: true,
                [Op.and]: [
                    sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${dishId}))`),
                    sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${kitchenId}))`)
                ]
            }
        }

        return request;
        
    }
};


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
            11
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
            const mealsByAuthor = await Meal.findAll({
                where: {
                    author_id: request.params.author_id
                }
            });
            response.status(200).json(mealsByAuthor)
        } catch (error) {
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
            response.status(500)
        }
    },

    getSixMeals: async (request, response) => {
        try {
            const sixMeals = await Meal.findAll({
                include: 'author',
                limit: 6,
                order: [
                    ['created_date', 'DESC']
                ]
            });
            response.status(200).json(sixMeals);
        } catch (error) {
            console.trace(error);
            response.status(500)
        }
    },

    searchMeal: async (request, response) => {
        const dishId = request.params.dishId;
        const kitchenId = request.params.kitchenId;
        const cityName = request.params.city;
        
        try { 
            const mealSearch =  await Meal.findAll({ 
                where: {city: cityName, online: true,
                    [Op.and]: [
                        sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${dishId}))`),
                        sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${kitchenId}))`)
                    ]
                }
            })
           
            response.status(200).json(mealSearch);
        } catch (error) {
            console.trace(error);
            response.status(500)
        }
    },

    updateMeal: async (request, response, next) => {
        const id = Number(request.params.id);
        const mealToUpdate = request.body;
        try {
            const meal = await Meal.findByPk(id);
            if (!meal) {
                next();
            }

        } catch {

        }
    }
};


module.exports = mealController;