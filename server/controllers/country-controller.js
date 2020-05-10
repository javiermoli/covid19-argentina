const axios = require('axios');
const cheerio = require('cheerio');
const settings = require('../settings');
const HttpError = require('../models/HttpError');

const provincesDataSelector =
  'table.wikitable.sortable.col2der.col3der.col4der.col5der.col6der > tbody > tr';

const getProvincesData = async (req, res, next) => {
  try {
    const data = await axios.get(settings.PROVINCES_URL);
    const text = data.data['parse']['text']['*'];
    const $ = cheerio.load(text);
    const provinces = [];
    $(provincesDataSelector).each((index, element) => {
      const countryData = $(element).text().split(/\n/g);
      const count = {};
      if (index > 0 && index < 26) {
        count.name = countryData[1].trim();
        count.cases = parseInt(countryData[3].trim());
        count.deaths = parseInt(countryData[9].trim());
        count.recov = parseInt(countryData[13].trim());
        provinces.push(count);
      }
    });
    res.status(200).json(provinces);
  } catch (err) {
    const error = new HttpError('Could not find the data.', 404);
    return next(error);
  }
};

module.exports = {
  getProvincesData,
};
