const { Router } = require('express')
const authorController = require('./controllers/authorController');
const mealController = require('./controllers/mealController');

const router = Router();
const schemas = require('./middlewares/validation/schemas'); 
const middlewareValidation = require('./middlewares/validation/validation'); 
const middlewareAuthentication = require('./middlewares/authorization/authentication');
const middlewareHandlingFiles = require('./middlewares/handlingFiles/multer-config');

router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);
router.post('/login', middlewareValidation(schemas.login), authorController.login);

router.post('/meals', middlewareHandlingFiles, mealController.createMeal);

//route de test de connexion
router.get('/author', middlewareAuthentication, (request, response) => {response.json('Je suis connecté et j\'accède à la page author')});

module.exports = router;