import axios from 'axios';

// Types
export const STORE_COUNTRIES_STATS = 'countries/storeStats';

// Actions
export const storeCountriesStats = (countriesStats) => ({
  type: STORE_COUNTRIES_STATS,
  countriesStats,
});

export const fetchCountriesData = () => (dispatch) => {
  axios.get(`${process.env.REACT_APP_BACKEND_URL}countries`).then((res) => {
    const countriesStats = res.data;
    dispatch(storeCountriesStats(countriesStats));
  });
};
