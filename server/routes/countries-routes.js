const express = require('express');
const router = express.Router();
const countriesController = require('../controllers/countries-controllers');

router.get('/', countriesController.getCountriesData);

module.exports = router;
