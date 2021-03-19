const {
    Meal
} = require('../models');
const { Op } = require('sequelize');
const sequelize = require('../database');


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

    searchMeal: async (request, response, next) => {
        const dishId = request.query.dishId;
        const kitchenId = request.query.kitchenId;
        const cityName = request.query.city;
        const sqlRequest = { where: {online: true, city: cityName, [Op.and]: [
            sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${dishId}))`),
            sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${kitchenId}))`)
        ]}
      
        }  

        if(cityName) {
            sqlRequest.where = {online: true, city: cityName}
        } 
        if (kitchenId) {
            sqlRequest.where = {online: true, [Op.and]: [
                sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${kitchenId}))`)]
        }}
        if (dishId) {
            sqlRequest.where = {online: true, [Op.and]: [
                sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${dishId}))`)]
        }}
        if (cityName, kitchenId) {
            sqlRequest.where = {online: true, city: cityName, [Op.and]: [
                sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${kitchenId}))`)
        ]}}
        if (cityName, dishId) {
            sqlRequest.where = {online: true, city: cityName, [Op.and]: [
                sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${dishId}))`)
        ]}}
        if (kitchenId, dishId) {
            sqlRequest.where = {online: true, [Op.and]: [
                sequelize.literal(`(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${dishId}))`)
        ]}}
        

        try { 
            const mealSearch =  await Meal.findAll(sqlRequest)
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
            for (const field in mealToUpdate) {
                if (typeof meal[field] !== 'undefined') {
                
                    meal[field] = mealToUpdate[field];
                }
            };
            meal.picture_path = request.file.filename
            await meal.setIngredients(mealToUpdate.ingredients.split(','));
            await meal.setCategories(mealToUpdate.categories.split(','));
           
            await meal.save();
           Meal.findByPk(Number(meal.id), {
            attributes: {
                exclude: ['picture_path']
            },
            include: ['ingredients', 'categories', 'author']
        }).then((meal) => {
            meal.author.password = null;
            response.status(201).json(meal);

        })

        } catch(error) {
            console.log(error);
            response.status(500);

        }
    }
};


module.exports = mealController;