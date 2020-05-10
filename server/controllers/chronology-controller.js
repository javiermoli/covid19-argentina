const ChronologyDay = require('../models/ChronologyDay');
const HttpError = require('../models/HttpError');

const getChronology = async (req, res, next) => {
  let chronology;
  try {
    chronology = await ChronologyDay.find();
  } catch (err) {
    const error = new HttpError('Could not find the data.', 404);
    return next(error);
  }

  res.status(200).json(chronology);
};

const getChronologyDay = async (req, res, next) => {
  const { _id } = req.params;
  let chronology;
  try {
    chronology = await ChronologyDay.findById(_id);
  } catch (err) {
    const error = new HttpError('Could not find the day.', 404);
    return next(error);
  }

  res.status(200).json({ chronology });
};

const addChronologyDay = async (req, res, next) => {
  const { deaths, cases, recovered, date } = req.body;
  const createdChronology = new ChronologyDay({
    deaths,
    cases,
    recovered,
    date: date || new Date(),
  });

  try {
    await createdChronology.save();
  } catch (err) {
    const error = new HttpError('Could not add the day, please try again.', 404);
    return next(error);
  }

  res.status(201).json({ createdChronology });
};

const updateChronologyDay = async (req, res, next) => {
  const { _id } = req.params;
  let chronologyDay;
  try {
    chronologyDay = await ChronologyDay.findByIdAndUpdate(_id, req.body, { new: true });
  } catch (err) {
    const error = new HttpError('Could not update the day, please try again.', 404);
    return next(error);
  }

  res.status(200).json({ chronologyDay });
};

const deleteChronologyDay = async (req, res, next) => {
  const { _id } = req.params;
  let chronology;
  try {
    chronology = await ChronologyDay.findByIdAndDelete(_id);
  } catch (err) {
    const error = new HttpError('Could not delete the day, please try again.', 404);
    return next(error);
  }

  res.status(200).json({ Deleted: chronology });
};

module.exports = {
  getChronology,
  getChronologyDay,
  addChronologyDay,
  updateChronologyDay,
  deleteChronologyDay,
};
