import {
  STORE_COUNTRY_STATS,
  STORE_PROVINCES_DATA,
  STORE_CHRONOLOGY,
} from '../actions/countryActions';

const initialState = {
  provinces: [],
  stats: {},
  chronology: [],
};

const comics = (state = initialState, action) => {
  switch (action.type) {
    case STORE_COUNTRY_STATS: {
      return { ...state, stats: action.countryStats };
    }
    case STORE_PROVINCES_DATA: {
      return { ...state, provinces: action.provincesData };
    }
    case STORE_CHRONOLOGY: {
      return { ...state, chronology: action.chronologyData };
    }
    default:
      return state;
  }
};

export default comics;
