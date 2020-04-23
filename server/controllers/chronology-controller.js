const ChronologyDay = require('../models/ChronologyDay');

const getChronology = async (req, res, next) => {
  let chronology;
  try {
    chronology = await ChronologyDay.find();
  } catch (error) {
    res.status(400).json({ message: ' This day could not be found', error });
    return next(error);
  }

  res.status(200).json(chronology);
};

const getChronologyDay = async (req, res, next) => {
  const { _id } = req.params;
  let chronology;
  try {
    chronology = await ChronologyDay.findById(_id);
  } catch (error) {
    res.status(400).json({ message: ' This day could not be found', error });
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
  } catch (error) {
    res.status(400).json({ message: ' This day could not be created', error });
    return next(error);
  }

  res.status(200).json({ createdChronology });
};

const updateChronologyDay = async (req, res, next) => {
  const { _id } = req.params;
  let chronologyDay;
  try {
    chronologyDay = await ChronologyDay.findByIdAndUpdate(_id, req.body, { new: true });
  } catch (error) {
    res.status(400).json({ message: ' This day could not be found' });
    return next(error);
  }

  res.status(200).json({ chronologyDay });
};

const deleteChronologyDay = async (req, res, next) => {
  const { _id } = req.params;
  let chronology;
  try {
    chronology = await ChronologyDay.findByIdAndDelete(_id);
  } catch (error) {
    res.status(400).json({ message: ' This day could not be created', error });
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
