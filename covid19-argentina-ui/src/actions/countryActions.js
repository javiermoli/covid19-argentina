import axios from 'axios';

// Types
export const STORE_COUNTRY_STATS = 'country/storeStats';
export const STORE_PROVINCES_DATA = 'country/storeProvincesData';
export const STORE_CHRONOLOGY = 'country/chronology';

// Actions
export const storeCountryStats = (countryStats) => ({
  type: STORE_COUNTRY_STATS,
  countryStats,
});

export const storeProvincesData = (provincesData) => ({
  type: STORE_PROVINCES_DATA,
  provincesData,
});

export const storeChronologyData = (chronologyData) => ({
  type: STORE_CHRONOLOGY,
  chronologyData,
});

export const fetchCountryData = () => (dispatch) => {
  axios.get('http://localhost:5000/api/country/argentina').then((res) => {
    const countryData = res.data;
    dispatch(storeCountryStats(countryData));
  });
};

export const fetchProvincesData = () => (dispatch) => {
  axios.get('http://localhost:5000/api/country/argentina/provinces').then((res) => {
    const provincesData = res.data;
    dispatch(storeProvincesData(provincesData));
  });
};

export const fetchChronology = () => (dispatch) => {
  axios.get('http://localhost:5000/api/country/argentina/chronology').then((res) => {
    const chronology = res.data;
    dispatch(storeChronologyData(chronology));
  });
};
