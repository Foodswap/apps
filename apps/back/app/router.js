const { Router } = require('express');
const authorController = require('./controllers/authorController');
const mealController = require('./controllers/mealController');

const router = Router();
const schemas = require('./middlewares/validation/schemas'); 
const middlewareValidation = require('./middlewares/validation/validation'); 
const middlewareAuthentication = require('./middlewares/authorization/authentication');
<<<<<<< HEAD
const middlewareHandlingFiles = require('./middlewares/handlingFiles/multer-config');
=======
>>>>>>> b3672a08dacd8cba355339b4628ce2d62a1a804b

router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);
router.post('/login', middlewareValidation(schemas.login), authorController.login);

<<<<<<< HEAD
router.post('/meals', middlewareHandlingFiles, mealController.createMeal);

//route de test de connexion
=======
router.get('/meal/:id', mealController.getOneMeal);

router.get('/author/:id', authorController.getOneAuthor);
>>>>>>> b3672a08dacd8cba355339b4628ce2d62a1a804b
router.get('/author', middlewareAuthentication, (request, response) => {response.json('Je suis connecté et j\'accède à la page author')});

module.exports = router;