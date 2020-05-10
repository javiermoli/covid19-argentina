import axios from 'axios';
import '../components/types';

/**
 * TYPES
 */
export const STORE_COUNTRY_STATS = 'country/storeStats';
export const STORE_PROVINCES_DATA = 'country/storeProvincesData';

/**
 * ACTIONS
 */

/**
 * Store the country data
 * @param {countryStats} countryStats stats of the country
 */
export const storeCountryStats = (countryStats) => ({
  type: STORE_COUNTRY_STATS,
  countryStats,
});

/**
 * Store the provinces data
 * @param {provincesData} provincesData provinces data
 */
export const storeProvincesData = (provincesData) => ({
  type: STORE_PROVINCES_DATA,
  provincesData,
});

/**
 * Fetch the country data from the API
 */
export const fetchData = () =>
  /**
   * @param {Function} dispatch dispatch the redux actions
   */
  (dispatch) => {
    const countryData = axios.get(`${process.env.REACT_APP_BACKEND_URL}chronology`);
    const provincesData = axios.get(
      `${process.env.REACT_APP_BACKEND_URL}country/argentina/provinces`,
    );

    axios
      .all([countryData, provincesData])
      .then(
        axios.spread((...responses) => {
          const countryDataResponse = responses[0];
          const provincesDataResponse = responses[1];
          dispatch(storeCountryStats(countryDataResponse.data));
          dispatch(storeProvincesData(provincesDataResponse.data));
        }),
      )
      .catch((errors) => console.error(errors));
  };
