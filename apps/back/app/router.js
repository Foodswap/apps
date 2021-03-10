const { Router } = require('express')
const authorController = require('./controllers/authorController');
const mealController = require('./controllers/mealController');

const router = Router();
const schemas = require('./middlewares/validation/schemas'); 
const middlewareValidation = require('./middlewares/validation/validation'); 
const middlewareAuthentication = require('./middlewares/authorization/authentication');

router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);
router.post('/login', middlewareValidation(schemas.login), authorController.login);

router.get('/meal/:id', mealController.getOneMeal);

router.get('/author/:id', authorController.getOneAuthor);
router.get('/author', middlewareAuthentication, (request, response) => {response.json('Je suis connecté et j\'accède à la page author')});

module.exports = router;