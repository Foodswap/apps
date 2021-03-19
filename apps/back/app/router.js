const { Router } = require('express');
const authorController = require('./controllers/authorController');
const mealController = require('./controllers/mealController');
const swapController = require('./controllers/swapController');
const categoryController = require('./controllers/categoryController');
const ingredientController = require('./controllers/ingredientController');

const router = Router();
const schemas = require('./middlewares/validation/schemas'); 
const middlewareValidation = require('./middlewares/validation/validation'); 
const middlewareAuthentication = require('./middlewares/authorization/authentication');
const middlewareHandlingFiles = require('./middlewares/handlingFiles/multer-config');


// Author
router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);
router.post('/login', middlewareValidation(schemas.login), authorController.login);

// Meal
router.get('/meals/:id', mealController.getOneMeal);
router.get('/meals/online/:author_id', mealController.userMealsOnline);
router.get('/meals/:id/picture', mealController.getPicture);
router.get('/meals/author/:author_id', mealController.getMealsByAuthor);
router.get('/meals', mealController.searchMeal);
router.get('/sixMeals', mealController.getSixMeals);
router.put('/meals/:id', middlewareHandlingFiles, mealController.updateMeal);
router.post('/meals', middlewareHandlingFiles, mealController.createMeal);

// Category
router.get('/categories/:type', categoryController.getCategories);

// Swap
router.post('/swaps', middlewareValidation(schemas.swaps), swapController.swapProposal);
router.get('/swaps/authorAsker/:id', swapController.getSwapAsker);
router.get('/swaps/authorReceiver/:id', swapController.getSwapReceiver);
router.put('/swaps/:id', swapController.updateSwap);


// Ingredient
router.get('/ingredient/:id', ingredientController.getIngredients);
router.get('/ingredients', ingredientController.getAllIngredient);

module.exports = router;