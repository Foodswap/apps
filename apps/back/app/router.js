const { Router } = require('express')
const authorController = require('./controllers/authorController');

const router = Router();
const schemas = require('./middlewares/validation/schemas'); 
const middlewareValidation = require('./middlewares/validation/validation'); 
const middlewareAuthentication = require('./middlewares/authorization/authentication')

router.get('/author/:id', authorController.getOneAuthor);
router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);
router.post('/login', middlewareValidation(schemas.login), authorController.login);

router.get('/author', middlewareAuthentication, (request, response) => {response.json('Je suis connecté et j\'accède à la page author')});

module.exports = router;