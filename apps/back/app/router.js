const { Router } = require('express')
const authorController = require('./controllers/authorController');

const router = Router();

router.post('/signup', authorController.signup);

module.exports = router;