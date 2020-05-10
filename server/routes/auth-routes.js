const express = require('express');
const usersController = require('../controllers/auth-controllers');
const checkRefreshToken = require('../middlewares/check-refreshToken');

const router = express.Router();

router.post('/signup', usersController.signup);

router.post('/login', usersController.login);

router.use(checkRefreshToken);

router.post('/refreshToken', usersController.refreshToken);

module.exports = router;
