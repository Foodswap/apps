const { Router } = require('express');

const router = Router();

const authorController = require('./controllers/authorController');
const mealController = require('./controllers/mealController');
const swapController = require('./controllers/swapController');
const categoryController = require('./controllers/categoryController');
const ingredientController = require('./controllers/ingredientController');
const cityController = require('./controllers/cityController');

const schemas = require('./middlewares/validation/schemas');

const middlewareValidation = require('./middlewares/validation/validation');
const middlewareHandlingFiles = require('./middlewares/handlingFiles/multer-config');
const middlewareAuthenticateJWT = require('./middlewares/authorization/authentication');

// TODO : use this middleware for logged routes
// const middlewareAuthentication = require('./middlewares/authorization/authentication');

/**
 * USERS ROUTES
 */
/**
 * Routes GET
 */
router.get('/author/:id', authorController.getOneAuthor);

/**
 * Routes POST
 */
router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);
router.post('/login', middlewareValidation(schemas.login), authorController.login);

/**
 * DISHES ROUTES
 */
/**
 * Routes GET
 */
router.get('/dishes/online', middlewareAuthenticateJWT, mealController.userMealsOnline);
router.get('/dishes/:id', mealController.getOneMeal);
router.get('/dishes/:id/picture', mealController.getPicture);
router.get('/dishes/:kitchenId/:dishId/:city', mealController.searchMeal);
router.get('/search', mealController.searchMeal);
router.get('/dishes/author/:author_id', mealController.getMealsByAuthor);
router.get('/lastDishes', mealController.getSixMeals);

/**
 * Routes POST
 */
router.post('/dishes', middlewareHandlingFiles, mealController.createMeal);

/**
 * Routes PUT
 */
router.put('/dishes/:id', middlewareHandlingFiles, mealController.updateMeal);
router.put('/author/update/:id', authorController.updateInformations);

/**
 * Routes DELETE
 */
router.delete('/dishes/:id', middlewareAuthenticateJWT, mealController.deleteDish);
/**
 * CATEGORIES ROUTES
 */
/**
 * Route GET
 */
router.get('/categories/:type', categoryController.getCategories);

/**
 * SWAPS ROUTES
 */
/**
 * Route GET
 */
router.get('/swaps/authorAsker/:id', swapController.getSwapAsker);
router.get('/swaps/authorReceiver/:id', swapController.getSwapReceiver);

/**
 * Route POST
 */
router.post('/swaps', middlewareValidation(schemas.swaps), swapController.swapProposal);

/**
 * Route PUT
 */
router.put('/swaps/:id', swapController.updateSwap);

/**
 * INGREDIENTS ROUTES
 */
/**
 * Route GET
 */
router.get('/ingredient/:id', ingredientController.getIngredients);
router.get('/ingredients', ingredientController.getAllIngredient);

/**
 * CITY ROUTES
 */
/**
 * Routes GET
 */
router.get('/city/:letters', cityController.autoCompleteCity);

module.exports = router;
