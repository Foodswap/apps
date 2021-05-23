const { Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { sequelize } = require('../database');

const { Meal, Author, City } = require('../models');

const mealController = {
  /**
   * POST /v1/dishes
   *
   * @tags Dish
   *
   * @summary Create new dish
   *
   * @param {DishBody} request.body.required - dish info - application/json
   *
   * @return {DishDto} 201 - success response - application/json
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 201 - a dish returns by api
   * {
   *     "id": 75,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": " paris",
   *     "online": true,
   *     "author_id": 1,
   *     "ingredients": [
   *         {
   *             "id": 3,
   *             "name": "Huile",
   *             "meal_ingredient_associate": {
   *                 "id_ingredient": 3,
   *                 "id_meal": 75
   *             }
   *         }
   *     ],
   *     "categories": [
   *         {
   *             "id": 24,
   *             "type": "kitchen",
   *             "name": "Espagnole",
   *             "meal_category_associate": {
   *                 "id_category": 24,
   *                 "id_meal": 75
   *             }
   *         },
   *         {
   *             "id": 2,
   *             "type": "dish",
   *             "name": "Plat",
   *             "meal_category_associate": {
   *                 "id_category": 2,
   *                 "id_meal": 75
   *             }
   *         }
   *     ],
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * }
   *
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
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
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },

  /**
   * GET /v1/dishes/{dishId}
   *
   * @summary Get one Dish by id
   * @tags Dish
   *
   * @param {string} dishId.path - id of Dish
   *
   * @return {DishDto} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - a dish returned by api
   * {
   *     "id": 75,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": " paris",
   *     "online": true,
   *     "author_id": 1,
   *     "ingredients": [
   *         {
   *             "id": 3,
   *             "name": "Huile",
   *             "meal_ingredient_associate": {
   *                 "id_ingredient": 3,
   *                 "id_meal": 75
   *             }
   *         }
   *     ],
   *     "categories": [
   *         {
   *             "id": 24,
   *             "type": "kitchen",
   *             "name": "Espagnole",
   *             "meal_category_associate": {
   *                 "id_category": 24,
   *                 "id_meal": 75
   *             }
   *         },
   *         {
   *             "id": 2,
   *             "type": "dish",
   *             "name": "Plat",
   *             "meal_category_associate": {
   *                 "id_category": 2,
   *                 "id_meal": 75
   *             }
   *         }
   *     ],
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "password": null,
   *         "city": "Paris"
   *     }
   * }
   *
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "Dish not found"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  getOneMeal: async (request, response) => {
    try {
      const meal = await Meal.findByPk(Number(request.params.id), {
        attributes: {
          exclude: ['picture_path'],
        },
        include: ['ingredients', 'categories', 'city', {
          model: Author,
          as: 'author',
          attributes: {
            exclude: ['password', 'role'],
          },
        }],
      });

      response.status(200).json(meal);
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },
  /**
   * GET /v1/dishes/author/{authorId}
   *
   * @summary Get Dishes by author id
   * @tags Dish
   *
   * @param {string} authorId.path - id of the author of a Dish
   *
   * @return {array<DishDto>} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - dishes of an author returned by api
   * {
   *    "id": 17,
   *    "name": "Spaghetti aux crevettes",
   *    "description": "Crevettes sautées et petits légumes",
   *    "portion": 1,
   *    "city": "Paris",
   *    "online": true,
   *    "picture_path": "1616337669356.jpg",
   *    "author_id": 5
   * }
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "Dishes not found"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  getMealsByAuthor: async (request, response) => {
    try {
      const mealsByAuthor = await Meal.findAll({
        where: {
          author_id: request.params.author_id,
        },
      });
      response.status(200).json(mealsByAuthor);
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },

  /**
   * GET /v1/dishes/{dishId}/picture
   *
   * @summary Get the picture of a Dish
   * @tags Dish
   *
   * @param {string} dishId.path - id of a Dish
   *
   * @return {string} 200 - binary - image/jpeg
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "picture not found"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  getPicture: async (request, response) => {
    try {
      const meal = await Meal.findByPk(Number(request.params.id), {
        attributes: ['picture_path'],
      });
      const picturePath = `${process.env.PATH_PICTURE}/${meal.picture_path}`;
      response.sendFile(picturePath);
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },

  /**
   * GET /v1/lastDishes
   *
   * @summary Get last 9 dishes
   * @tags Dish
   *
   * @return {DishDto} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - last dishes returned by api
   * [{
   *     "id": 37,
   *     "name": "test",
   *     "description": "Saumon cru",
   *     "portion": 2,
   *     "city": "paris",
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 37,
   *     "name": "test",
   *     "description": "Saumon cru",
   *     "portion": 2,
   *     "city": "paris",
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 75,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": " paris",
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 74,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": " paris",
   *     "online": true,
   *     "picture_path": "dish_cover_74.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 73,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": " paris",
   *     "online": true,
   *     "picture_path": "dish_cover_73.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 72,
   *     "name": "Tartare de saumon",
   *     "description": "p",
   *     "portion": 2,
   *     "city": "paris",
   *     "online": true,
   *     "picture_path": "dish_cover_72.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 37,
   *     "name": "test",
   *     "description": "Saumon cru",
   *     "portion": 2,
   *     "city": "paris",
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 36,
   *     "name": "Tartare de saumon2",
   *     "description": "saumon",
   *     "portion": 2,
   *     "city": "paris",
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * }]
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "Last Dishes not found"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  getSixMeals: async (request, response) => {
    try {
      const sixMeals = await Meal.findAll({
        where: {
          online: true,
        },
        include: [{
          model: Author,
          as: 'author',
          attributes: {
            exclude: ['password', 'role'],
          },
        }],
        limit: 9,
        order: [['created_date', 'DESC']],
      });
      response.status(200).json(sixMeals);
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },

  /**
   * GET/v1/footerLastDish
   *
   * @summary Get last 10 dishes for footer
   * @tags Dish
   *
   * @return {DishDto} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - last dishes returned by api
   * [{
   *     "id": 37,
   *     "name": "test",
   *     "description": "Saumon cru",
   *     "portion": 2,
   *     "city": {
   *         "count": 75,
   *         "district": 1,
   *         "id": 30438,
   *         "latitude": 48.86,
   *         "longitude": 2.34445,
   *         "name": "Paris",
   *         "slug": "Paris",
   *     }
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 37,
   *     "name": "test",
   *     "description": "Saumon cru",
   *     "portion": 2,
   *     "city": {
   *         "count": 75,
   *         "district": 1,
   *         "id": 30438,
   *         "latitude": 48.86,
   *         "longitude": 2.34445,
   *         "name": "Paris",
   *         "slug": "Paris",
   *     }
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 75,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": {
   *         "count": 75,
   *         "district": 1,
   *         "id": 30438,
   *         "latitude": 48.86,
   *         "longitude": 2.34445,
   *         "name": "Paris",
   *         "slug": "Paris",
   *     }
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 74,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": {
   *         "count": 75,
   *         "district": 1,
   *         "id": 30438,
   *         "latitude": 48.86,
   *         "longitude": 2.34445,
   *         "name": "Paris",
   *         "slug": "Paris",
   *     }
   *     "online": true,
   *     "picture_path": "dish_cover_74.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 73,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": {
   *         "count": 75,
   *         "district": 1,
   *         "id": 30438,
   *         "latitude": 48.86,
   *         "longitude": 2.34445,
   *         "name": "Paris",
   *         "slug": "Paris",
   *     }
   *     "online": true,
   *     "picture_path": "dish_cover_73.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 72,
   *     "name": "Tartare de saumon",
   *     "description": "p",
   *     "portion": 2,
   *     "city": {
   *         "count": 75,
   *         "district": 1,
   *         "id": 30438,
   *         "latitude": 48.86,
   *         "longitude": 2.34445,
   *         "name": "Paris",
   *         "slug": "Paris",
   *     }
   *     "online": true,
   *     "picture_path": "dish_cover_72.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 37,
   *     "name": "test",
   *     "description": "Saumon cru",
   *     "portion": 2,
   *     "city": {
   *         "count": 75,
   *         "district": 1,
   *         "id": 30438,
   *         "latitude": 48.86,
   *         "longitude": 2.34445,
   *         "name": "Paris",
   *         "slug": "Paris",
   *     }
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * },
   * {
   *     "id": 36,
   *     "name": "Tartare de saumon2",
   *     "description": "saumon",
   *     "portion": 2,
   *     "city": {
   *         "count": 75,
   *         "district": 1,
   *         "id": 30438,
   *         "latitude": 48.86,
   *         "longitude": 2.34445,
   *         "name": "Paris",
   *         "slug": "Paris",
   *     }
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * }]
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  getFooterLastDishes: async (request, response) => {
    try {
      const footerDishes = await Meal.findAll({
        where: {
          online: true,
          city_id: {
            [Op.not]: null,
          },
        },
        include: [{
          model: Author,
          as: 'author',
          attributes: {
            exclude: ['password', 'role'],
          },
        },
        {
          model: City,
          as: 'city',
        }],
        limit: 10,
        order: [['created_date', 'DESC']],
      });
      response.status(200).json(footerDishes);
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },

  /**
   * GET /v1/dishes/{kitchenId}/{dishId}/{city}
   *
   * @summary Get Dishes results by filters
   * @tags Dish
   * @param {string} kitchenId.path - id of the kitchen category of a Dish
   * @param {string} dishId.path - id of the dish category of a Dish
   * @param {string} city.path - city name of a Dish
   *
   * @return {DishDto} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - result of Dishes returned by api
   * {
   *     "id": 75,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": " paris",
   *     "online": true,
   *     "picture_path": "dish_cover_undefined.jpg",
   *     "author_id": 1,
   *     "author": {
   *         "id": 1,
   *         "username": "Marie"
   *     }
   * }
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "results of Dishes not found"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  searchMeal: async (request, response) => {
    const {
      dishId, kitchenId, city, latitude, longitude, around,
    } = request.query;

    const reqFilters = [];

    if (dishId) {
      reqFilters.push(sequelize.literal(
        `(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${dishId}))`,
      ));
    }

    if (kitchenId) {
      reqFilters.push(sequelize.literal(
        `(EXISTS(SELECT 1 FROM meal_category_associate WHERE id_meal = "Meal".id AND id_category = ${kitchenId}))`,
      ));
    }

    const sqlRequest = {};

    if (city) {
      const citiesIds = await City.findAll({
        select: ['id'],
        where: {
          slug: {
            [Op.iLike]: `%${city}%`,
          },
        },
        raw: true,
      });
      reqFilters.push({ city_id: { [Op.in]: citiesIds.map((cityObj) => cityObj.id) } });
    }

    if (latitude && longitude && around) {
      const cityLocation = sequelize.literal('ST_MakePoint(city.latitude, city.longitude)');
      const userLocation = sequelize.literal(`ST_MakePoint(${parseFloat(latitude)}, ${parseFloat(longitude)})`);
      const distance = sequelize.fn('ST_DistanceSphere', userLocation, cityLocation);
      const distanceLimit = around * 100;
      sqlRequest.include = [{
        model: City,
        as: 'city',
      }];
      sqlRequest.attributes = {
        include: [
          [sequelize.literal('city.latitude'), 'latitude'],
          [sequelize.literal('city.longitude'), 'longitude'],
          [distance, 'distance'],
        ],
      };

      reqFilters.push(sequelize.where(distance, '<=', distanceLimit));
      sqlRequest.order = sequelize.literal('distance ASC');
    } else {
      sqlRequest.include = [{
        model: City,
        as: 'city',
      }];
    }

    sqlRequest.where = {
      online: true,
      [Op.and]: reqFilters,
    };

    try {
      const mealSearch = await Meal.findAll(sqlRequest);
      response.status(200).json(mealSearch);
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },

  /**
   * PUT /v1/dishes/{dishId}
   *
   * @tags Dish
   *
   * @param {string} dishId.path - id of Dish
   * @summary Update a Dish
   *
   * @param {DishBody} request.body.required - dish info - application/json
   *
   * @return {DishDto} 201 - success response - application/json
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 201 - a dish edited returns by api
   * {
   *     "id": 75,
   *     "name": " Tartare de saumon",
   *     "description": " Saumon cru",
   *     "portion": 2,
   *     "city": " paris",
   *     "online": true,
   *     "author_id": 1,
   *     "ingredients": [
   *         {
   *             "id": 3,
   *             "name": "Huile",
   *             "meal_ingredient_associate": {
   *                 "id_ingredient": 3,
   *                 "id_meal": 75
   *             }
   *         }
   *     ],
   *     "categories": [
   *         {
   *             "id": 24,
   *             "type": "kitchen",
   *             "name": "Espagnole",
   *             "meal_category_associate": {
   *                 "id_category": 24,
   *                 "id_meal": 75
   *             }
   *         },
   *         {
   *             "id": 2,
   *             "type": "dish",
   *             "name": "Plat",
   *             "meal_category_associate": {
   *                 "id_category": 2,
   *                 "id_meal": 75
   *             }
   *         }
   *     ],
   *     "author": {
   *         "id": 1,
   *         "username": "Marie",
   *         "email": "marie@mail.fr",
   *         "city": "Paris"
   *     }
   * }
   *
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  updateMeal: async (request, response, next) => {
    const id = Number(request.params.id);
    const mealToUpdate = request.body;

    try {
      const meal = await Meal.findByPk(id);

      if (!meal) {
        next();
      }

      meal.author_id = request.author.id;
      meal.online = mealToUpdate.online;
      meal.name = mealToUpdate.name;
      meal.description = mealToUpdate.description;
      meal.portion = mealToUpdate.portion;

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
        include: ['ingredients', 'categories', {
          model: Author,
          as: 'author',
          attributes: {
            exclude: ['password', 'role'],
          },
        }],
      }).then((updatedMeal) => {
        response.status(201).json(updatedMeal);
      });
    } catch (err) {
      response.status({ error: 500, message: err });
    }
  },

  /**
   * GET /v1/dishes/online/{authorId}
   *
   * @summary Get online Dishes by author id
   * @tags Dish
   *
   * @param {string} authorId.path - id of the author of a Dish
   *
   * @return {DishDto} 200 - success response - application/json
   * @return {ErrorDto} 404 - bad request response
   * @return {ErrorDto} 500 - error on server
   *
   * @example response - 200 - online dishes of an author returned by api
   * {
   *    "id": 17,
   *    "name": "Spaghetti aux crevettes",
   *    "description": "Crevettes sautées et petits légumes",
   *    "portion": 1,
   *    "city": "Paris",
   *    "online": true,
   *    "picture_path": "1616337669356.jpg",
   *    "author_id": 5
   * }
   * @example response - 404 - an error of bad request
   * {
   *   "error": 404,
   *   "message": "Dishes not found"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  userMealsOnline: async (request, response) => {
    try {
      const meal = await Meal.findAll({
        where: { online: true, author_id: request.author.id },
      });
      response.status(200).json(meal);
    } catch (err) {
      response.status(500).json({ error: 500, message: err });
    }
  },

  /**
   * DELETE /v1/dishes/{dishId}
   *
   * @summary User delete a dish
   * @tags Dish
   *
   * @param {string} dishId.path - id of Dish
   *
   * @return {DishDto} 200 - success response - application/json
   * @return {ErrorDto} 403 - request response forbidden
   * @return {ErrorDto} 500 - error on server
   *
   *  @example response - 200 - a dish returned by api
   * {
   * "message": "Success"
   * }
   * @example response - 403 - an error of bad request
   * {
   *   "error": 403,
   *   "message": "Forbidden"
   * }
   * @example response - 500 - an error on server
   * {
   *   "error": 500,
   *   "message": "Internal server error"
   * }
   */
  deleteDish: async (request, response) => {
    // recovery of user information by the token
    const { author } = request;

    try {
      // find a dish by the ID by targeting the author_id field
      const dish = await Meal.findByPk(Number(request.params.id), {
        attributes: ['author_id'],
      });

      // condition if the author's id on the dish is equal to the connected user or
      // if the role id is equal to 1 (1 = admin, 2 = user)
      if (dish.author_id === author.id || author.role === 1) {
        // deletion can do this
        await Meal.destroy({
          where: {
            id: request.params.id,
          },
        });

        response.status(200).json({ message: 'Success' });
      }

      // otherwise not allowed, the user cannot delete the dishes because he is not the author
      response.status(403).json({ message: 'Forbidden' });
    } catch (error) {
      response.status({ error: 500, message: error });
    }
  },

};

module.exports = mealController;
