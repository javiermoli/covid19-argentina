const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chronologyDaySchema = new Schema({
  deaths: { type: Number, required: true },
  cases: { type: Number, required: true },
  date: { type: String, required: true },
  recovered: { type: Number, required: true },
  updated: { type: String, required: true, default: new Date() },
});

module.exports = mongoose.model('ChronologyDay', chronologyDaySchema);
