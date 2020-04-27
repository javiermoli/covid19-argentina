import { LOGIN, LOADING } from '../actions/authActions';
import { getRemainingTimeForTokenExpiration } from '../utils/authUtils';

// const storedData = JSON.parse(localStorage.getItem('userData'));
const initialState = {
  login: getRemainingTimeForTokenExpiration() > 0,
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, login: action.isLogin };
    }
    case LOADING: {
      return { ...state, isLoading: action.loading };
    }
    default:
      return state;
  }
};

export default auth;
