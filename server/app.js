const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const settings = require('./settings');
const HttpError = require('./models/HttpError');

// Routes
const countries = require('./routes/countries-routes');
const country = require('./routes/country-routes');
const chronology = require('./routes/chronology-routes');
const authRoutes = require('./routes/auth-routes');

// Port
const port = settings.PORT;

const app = express();

app.use(cors());

// Parse the json in JS object
app.use(bodyParser.json());

app.use('/api/countries', countries);
app.use('/api/country', country);
app.use('/api/chronology', chronology);
app.use('/api/auth', authRoutes);

// If the route doesn't exist return error
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

// Catch all the errors
app.use((error, req, res, next) => {
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

// Mongoose connection
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(
    `mongodb+srv://${settings.DB_USER}:${settings.DB_PASSWORD}@cluster0-w9k14.mongodb.net/${settings.DB_NAME}?retryWrites=true&w=majority`,
  )
  .then(() => app.listen(port, () => console.log(`App running on port ${port}`)))
  .catch((err) => {
    console.log(err);
  });
