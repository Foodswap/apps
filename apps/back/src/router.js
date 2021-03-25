const { Router } = require('express');

const router = Router();

const authorController = require('./controllers/authorController');
const mealController = require('./controllers/mealController');
const swapController = require('./controllers/swapController');
const categoryController = require('./controllers/categoryController');
const ingredientController = require('./controllers/ingredientController');

const schemas = require('./middlewares/validation/schemas');

const middlewareValidation = require('./middlewares/validation/validation');
const middlewareHandlingFiles = require('./middlewares/handlingFiles/multer-config');

// TODO : use this middleware for logged routes
// const middlewareAuthentication = require('./middlewares/authorization/authentication');

/**
 * Users routes
 */
router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);
router.post('/login', middlewareValidation(schemas.login), authorController.login);

/**
 * Meals routes
 */
router.post('/meals', middlewareHandlingFiles, mealController.createMeal);
router.get('/meals/:id', mealController.getOneMeal);
router.put('/meals/:id', middlewareHandlingFiles, mealController.updateMeal);
router.get('/meals/:id/picture', mealController.getPicture);
router.get('/meals/:kitchenId/:dishId/:city', mealController.searchMeal);
router.get('/meals/online/:author_id', mealController.userMealsOnline);
router.get('/meals/author/:author_id', mealController.getMealsByAuthor);
router.get('/sixMeals', mealController.getSixMeals);

/**
 * Categories routes
 */
router.get('/categories/:type', categoryController.getCategories);

/**
 * Swaps routes
 */
router.post('/swaps', middlewareValidation(schemas.swaps), swapController.swapProposal);
router.get('/swaps/authorAsker/:id', swapController.getSwapAsker);
router.get('/swaps/authorReceiver/:id', swapController.getSwapReceiver);
router.put('/swaps/:id', swapController.updateSwap);

/**
 * Ingredients routes
 */
router.get('/ingredient/:id', ingredientController.getIngredients);
router.get('/ingredients', ingredientController.getAllIngredient);

module.exports = router;
