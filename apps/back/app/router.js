const { Router } = require('express')
const signupController = require('./controllers/signupController');

const router = Router();

router.post('/signup', signupController)

module.exports = router;