const axios = require('axios');
const cheerio = require('cheerio');
const settings = require('../settings');
const HttpError = require('../models/HttpError');

const COUNTRIES_SELECTOR = 'table#main_table_countries_today>tbody>tr';

const makeDataExportable = (data) => {
  return data
    .map((text) => {
      const parsedText = text.replace(/([,+])/g, '').split('|');
      return {
        country: parsedText[0],
        cases: parsedText[1],
        newCases: parsedText[2],
        deaths: parsedText[3],
        newDeaths: parsedText[4],
        recovered: parsedText[5],
        activeCases: parsedText[6],
        seriousCritical: parsedText[7],
        tests: parsedText[10],
      };
    })
    .filter(
      (e) =>
        e['country'].indexOf('Asia') < 0 &&
        e['country'].indexOf('Europe') < 0 &&
        e['country'].indexOf('North America') < 0 &&
        e['country'].indexOf('\n') < 0,
    )
    .sort((a, b) => b['cases'] - a['cases']);
};

const getCountriesData = async (req, res, next) => {
  try {
    const data = await axios.get(settings.COUNTRIES_URL);
    const $ = cheerio.load(data.data);
    const list = [];
    $(COUNTRIES_SELECTOR).each((index, element) => {
      const currentText = $(element).find('td').append('|').text();
      if (currentText.indexOf('Total') < 0) {
        list.push(currentText);
      }
    });
    const exportableData = makeDataExportable(list);
    res.status(200).json(exportableData);
  } catch (err) {
    const error = new HttpError('Could not find the data.', 404);
    return next(error);
  }
};

module.exports = {
  getCountriesData,
};
