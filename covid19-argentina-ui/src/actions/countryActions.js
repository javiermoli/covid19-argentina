import axios from 'axios';

// Types
export const STORE_COUNTRY_STATS = 'country/storeStats';
export const STORE_PROVINCES_DATA = 'country/storeProvincesData';

// Actions
export const storeCountryStats = (countryStats) => ({
  type: STORE_COUNTRY_STATS,
  countryStats,
});

export const storeProvincesData = (provincesData) => ({
  type: STORE_PROVINCES_DATA,
  provincesData,
});

export const fetchData = () => (dispatch) => {
  const countryData = axios.get(`${process.env.REACT_APP_BACKEND_URL}chronology`);
  const provincesData = axios.get(
    `${process.env.REACT_APP_BACKEND_URL}country/argentina/provinces`,
  );
  const chronologyData = axios.get(
    `${process.env.REACT_APP_BACKEND_URL}country/argentina/chronology`,
  );

  axios
    .all([countryData, provincesData, chronologyData])
    .then(
      axios.spread((...responses) => {
        const countryDataResponse = responses[0];
        const provincesDataResponse = responses[1];
        dispatch(storeCountryStats(countryDataResponse.data));
        dispatch(storeProvincesData(provincesDataResponse.data));
      }),
    )
    .catch((errors) => {
      console.error(errors);
    });
};
