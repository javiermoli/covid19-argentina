const { Router } = require('express');
const HttpError = require('../models/HttpError');

// Router
const router = new Router();

// Routes
const countries = require('./countries-routes');
const country = require('./country-routes');
const chronology = require('./chronology-routes');
const authRoutes = require('./auth-routes');

router.use('/countries', countries);
router.use('/country', country);
router.use('/chronology', chronology);
router.use('/auth', authRoutes);

// If the route doesn't exist return error
router.use((req, res, next) => {
	const error = new HttpError('Could not find this route.', 404);
	throw error;
});

// Catch all the errors
router.use((error, req, res, next) => {
	res.status(error.code || 500);
	res.json({ message: error.message || 'An unknown error occurred!' });
});

module.exports = router;