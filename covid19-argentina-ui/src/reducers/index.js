import { combineReducers } from 'redux';
import country from './country';
import countries from './countries';
import auth from './auth';
import modal from './modal';

const rootReducer = combineReducers({
  country,
  countries,
  auth,
  modal,
});

export default rootReducer;
