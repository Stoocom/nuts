const Router = require('express');
const router = new Router();
const bodyParser = require('body-parser').json();
const userController = require('../controllers/userController');

router.post('/sendCode', bodyParser, userController.sendCodeBySMS);
//router.post('/signup', bodyParser, userController.signup);
router.post('/login', bodyParser, userController.login);


module.exports = router