const express = require('express');
const bodyParser = require('body-parser');
const pageNotFound = require('./utils/errorsHelper');
const cors = require('cors');
const port = process.env.PORT || 5000;

// Routes
const countries = require('./routes/countries-routes');
const country = require('./routes/country-routes');

const app = express();

app.use(cors());

// Parse the json in JS object
app.use(bodyParser.json());

app.use('/api/countries', countries);
app.use('/api/country', country);
app.get('/*', (req, res) => pageNotFound(res));

app.listen(port, function () {
  console.log(`App runing on port ${port}`);
});
