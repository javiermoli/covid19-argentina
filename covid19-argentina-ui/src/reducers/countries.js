import { STORE_COUNTRIES_STATS } from '../actions/countriesActions';

const initialState = [];

const comics = (state = initialState, action) => {
  switch (action.type) {
    case STORE_COUNTRIES_STATS: {
      return action.countriesStats;
    }
    default:
      return state;
  }
};

export default comics;
