import { STORE_COUNTRY_STATS, STORE_PROVINCES_DATA } from '../actions/countryActions';

const initialState = {
  provinces: [],
  stats: [],
};

const country = (state = initialState, action) => {
  switch (action.type) {
    case STORE_COUNTRY_STATS: {
      return { ...state, stats: action.countryStats };
    }
    case STORE_PROVINCES_DATA: {
      return { ...state, provinces: action.provincesData };
    }
    default:
      return state;
  }
};

export default country;
