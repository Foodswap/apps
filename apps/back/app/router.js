const { Router } = require('express');
const authorController = require('./controllers/authorController');
const mealController = require('./controllers/mealController');

const router = Router();
const schemas = require('./middlewares/validation/schemas'); 
const middlewareValidation = require('./middlewares/validation/validation'); 
const middlewareAuthentication = require('./middlewares/authorization/authentication');
const middlewareHandlingFiles = require('./middlewares/handlingFiles/multer-config');

//Author
router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);
router.post('/login', middlewareValidation(schemas.login), authorController.login);

//Meal
router.get('/meals/:id', middlewareAuthentication, mealController.getOneMeal)
router.get('/meals/:id/picture', mealController.getPicture)
router.post('/meals', middlewareAuthentication, middlewareHandlingFiles, mealController.createMeal);

module.exports = router;