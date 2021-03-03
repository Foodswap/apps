const { Router } = require('express')
const authorController = require('./controllers/authorController');

const router = Router();
const schemas = require('./middlewares/validation/schemas'); 
const middlewareValidation = require('./middlewares/validation/validation'); 

router.post('/signup', middlewareValidation(schemas.signup), authorController.signup);

module.exports = router;