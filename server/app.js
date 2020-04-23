const express = require('express');
const bodyParser = require('body-parser');
const pageNotFound = require('./utils/errorsHelper');
const cors = require('cors');
const mongoose = require('mongoose');

// Routes
const countries = require('./routes/countries-routes');
const country = require('./routes/country-routes');
const chronology = require('./routes/chronology-routes');
const usersRoutes = require('./routes/users-routes');

// Port
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

// Parse the json in JS object
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

//   next();
// });

app.use('/api/countries', countries);
app.use('/api/country', country);
app.use('/api/chronology', chronology);
app.use('/api/users', usersRoutes);
app.get('/*', (req, res) => pageNotFound(res));

// Mongoose connection
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0-w9k14.mongodb.net/${process.env.DB_COLLECTION_NAME}?retryWrites=true&w=majority`,
  )
  .then(() => app.listen(port, () => console.log(`App running on port ${port}`)))
  .catch((err) => console.log(err));
