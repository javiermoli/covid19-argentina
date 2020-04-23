const axios = require('axios');
const cheerio = require('cheerio');
const pageNotFound = require('../utils/errorsHelper');

const provincesDataSelector =
  'table.wikitable.sortable.col2der.col3der.col4der.col5der.col6der > tbody > tr';

const getProvincesData = async (req, res) => {
  try {
    const data = await axios.get(process.env.PROVINCES_URL);
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
  } catch (error) {
    pageNotFound(res, error);
  }
};

module.exports = {
  getProvincesData,
};
