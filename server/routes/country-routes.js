const express = require('express');
const router = express.Router();
const countryController = require('../controllers/country-controller');

router.get('/:country/provinces', countryController.getProvincesData);

router.get('/:country', countryController.getCountryData);

router.get('/:country/chronology', countryController.getChronology);

module.exports = router;
