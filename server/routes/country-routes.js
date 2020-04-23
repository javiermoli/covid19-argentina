const express = require('express');
const countryController = require('../controllers/country-controller');

const router = express.Router();

router.get('/:country/provinces', countryController.getProvincesData);

module.exports = router;
