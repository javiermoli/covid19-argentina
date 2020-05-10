import { LOGIN, LOADING } from '../actions/authActions';

const storedData = JSON.parse(localStorage.getItem('userData'));
const initialState = {
  login: !!storedData,
  isLoading: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, login: action.isLogin };
    }
    case LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    default:
      return state;
  }
};

export default auth;
