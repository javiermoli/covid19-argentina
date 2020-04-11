const express = require('express');
const bodyParser = require('body-parser');
const pageNotFound = require('./utils/errorsHelper');

// Routes
const countries = require('./routes/countries-routes');
const country = require('./routes/country-routes');

const app = express();

// Parse the json in JS object
app.use(bodyParser.json());

app.use('/api/countries', countries);
app.use('/api/country', country);
app.get('/*', (req, res) => pageNotFound(res));

app.listen(process.env.PORT || 5000);
