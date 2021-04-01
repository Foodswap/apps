const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { sequelize } = require('../database');
const { Meal } = require('../models');

const mealController = {
  createMeal: async (request, response) => {
    const mealToCreate = request.body;

    try {
      if (request.file && request.file.filename) {
        mealToCreate.picture_path = request.file.filename;
      }

      const createdMeal = await Meal.create(mealToCreate);
      await createdMeal.addIngredients(mealToCreate.ingredients.split(','));
      await createdMeal.addCategories(mealToCreate.categories.split(','));

      const newFilename = `dish_cover_${createdMeal.id}${path.extname(createdMeal.picture_path)}`;
      const oldPath = `${process.env.PATH_PICTURE}/${createdMeal.picture_path}`;
      const newPath = `${process.env.PATH_PICTURE}/${newFilename}`;

      fs.renameSync(oldPath, newPath);

      createdMeal.picture_path = newFilename;
      await createdMeal.save();

      Meal.findByPk(Number(createdMeal.id), {
        attributes: {
          exclude: ['picture_path'],
        },
        include: ['ingredients', 'categories', 'author'],
      }).then((meal) => {
        // eslint-disable-next-line no-param-reassign
        delete meal.author.password;
        response.status(201).json(meal);
      });
    } catch (error) {
      response.status(500);
    }
  },

  getOneMeal: async (request, response) => {
    try {
      const meal = await Meal.findByPk(Number(request.params.id), {
        attributes: {
          exclude: ['picture_path'],
        },
        include: ['ingredients', 'categories', 'author'],
      });
      meal.author.password = null;
      response.status(200).json(meal);
    } catch (err) {
      response.status(500);
    }
  },

  getMealsByAuthor: async (request, response) => {
    try {
      const mealsByAuthor = await Meal.findAll({
        where: {
          author_id: request.params.author_id,
        },
      });
      response.status(200).json(mealsByAuthor);
    } catch (error) {
      response.status(500);
    }
  },

  getPicture: async (request, response) => {
    try {
      const meal = await Meal.findByPk(Number(request.params.id), {
        attributes: ['picture_path'],
      });
      const picturePath = `${process.env.PATH_PICTURE}/${meal.picture_path}`;
      response.sendFile(picturePath);
    } catch (err) {
      response.status(500);
    }
  },

  getSixMeals: async (request, response) => {
    try {
      const sixMeals = await Meal.findAll({
        where: {
          online: true,
        },
        include: 'author',
        limit: 9,
        order: [['created_date', 'DESC']],
      });
      response.status(200).json(sixMeals);
    } catch (error) {
      response.status(500);
    }
  },

  searchMeal: async (request, response) => {
    const { dishId } = request.params;
    const { kitchenId } = request.params;
    const cityName = request.params.city;
    const sqlRequest = {
      where: {
        online: true,
        city: {
          [Op.iLike]: `%${cityName}%`,
        },
        [Op.and]: [
          sequelize.literal(
            `(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${dishId}))`,
          ),
          sequelize.literal(
            `(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${kitchenId}))`,
          ),
        ],
      },
      include: [
        'author',
        {
          association: 'author',
          attributes: ['username'],
        },
      ],
    };

    try {
      const mealSearch = await Meal.findAll(sqlRequest);
      response.status(200).json(mealSearch);
    } catch (error) {
      response.status(500);
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

      Object.keys(mealToUpdate).forEach((field) => {
        if (meal[field]) {
          meal[field] = mealToUpdate[field];
        }
      });

      if (request.file) {
        meal.picture_path = request.file.filename;
      }

      if (mealToUpdate.ingredients.split(',').some((value) => value)) {
        await meal.setIngredients([]);
        await meal.setIngredients(mealToUpdate.ingredients.split(','));
      }

      if (mealToUpdate.categories.split(',').some((value) => value)) {
        await meal.setCategories([]);
        await meal.setCategories(mealToUpdate.categories.split(','));
      }

      await meal.save();

      Meal.findByPk(Number(meal.id), {
        attributes: {
          exclude: ['picture_path'],
        },
        include: ['ingredients', 'categories', 'author'],
      }).then((updatedMeal) => {
        // eslint-disable-next-line no-param-reassign
        delete updatedMeal.author.password;

        response.status(201).json(updatedMeal);
      });
    } catch (error) {
      response.status(500);
    }
  },

  userMealsOnline: async (request, response) => {
    try {
      const meal = await Meal.findAll({
        where: { online: true, author_id: request.params.author_id },
      });
      response.status(200).json(meal);
    } catch (error) {
      response.status(500).json("This user doesn't have any meals yet.");
    }
  },
};

module.exports = mealController;
