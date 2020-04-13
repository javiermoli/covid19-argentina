import { combineReducers } from 'redux';
import country from './country';
import countries from './countries';

const rootReducer = combineReducers({
  country,
  countries,
});

export default rootReducer;
