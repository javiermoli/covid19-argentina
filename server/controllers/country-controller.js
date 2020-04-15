const axios = require('axios');
const cheerio = require('cheerio');
const pageNotFound = require('../utils/errorsHelper');
const { WIKI_BASE_URL, WORLDOMETERS_BASE_URL, COVID19API_BASE_URL } = require('../constants');

const provincesDataSelector =
  'table.wikitable.sortable.col2der.col3der.col4der.col5der.col6der > tbody > tr';

const countryDataSelector = 'div.container .col-md-8 > .content-inner > div:nth-child(5) > h1';

const provincesURL = `${WIKI_BASE_URL}pandemia_de_enfermedad_por_coronavirus_de_2020_en_Argentina`;

const getCountryData = async (req, res) => {
  try {
    const { country } = req.params;
    const data = await axios.get(`${WORLDOMETERS_BASE_URL}/country/${country}`);
    const $ = cheerio.load(data.data);
    const countryData = {};
    const foundCountry = $(countryDataSelector).text();
    countryData.country = foundCountry.replace(/\n/g, '').trim();
    const countryStats = $('#maincounter-wrap > div').text().replace(',', '').split(/\n/g);
    countryData.cases = parseInt(countryStats[1]);
    countryData.deaths = parseInt(countryStats[3]);
    countryData.recovered = parseInt(countryStats[5]);
    res.status(200).json(countryData);
  } catch (error) {
    pageNotFound(res, error);
  }
};

const getProvincesData = async (req, res) => {
  try {
    const data = await axios.get(provincesURL);
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

const getChronology = async (req, res) => {
  try {
    const { country } = req.params;
    const data = await axios.get(`${COVID19API_BASE_URL}${country}/status/confirmed`);
    res.status(200).json(data.data);
  } catch (error) {
    pageNotFound(res, error);
  }
};

module.exports = {
  getCountryData,
  getProvincesData,
  getChronology,
};
