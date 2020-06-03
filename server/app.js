const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const settings = require('./settings');
const routes = require('./routes');

// Port
const port = settings.PORT;

const app = express();

app.use(cors());

// Parse the json in JS object
app.use(bodyParser.json());

// Routes
app.use('/api', routes);

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
