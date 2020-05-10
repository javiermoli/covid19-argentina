import axios from 'axios';

/**
 * TYPES
 */
export const STORE_COUNTRIES_STATS = 'countries/storeStats';

/**
 * ACTIONS
 */

/**
 * Store the given countries data
 * @param {Object[]} countriesStats
 */
export const storeCountriesStats = (countriesStats) => ({
  type: STORE_COUNTRIES_STATS,
  countriesStats,
});

/**
 * Fetch the countries data from the API
 */
export const fetchCountriesData = () =>
  /**
   * @param {Function} dispatch dispatch the redux actions
   */
  (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}countries`)
      .then((res) => {
        const countriesStats = res.data;
        dispatch(storeCountriesStats(countriesStats));
      })
      .catch((errors) => console.error(errors));
  };
