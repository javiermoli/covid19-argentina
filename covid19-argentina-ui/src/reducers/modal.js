import { LOADING, CLOSE, OPEN, ERROR } from '../actions/modalActions';

const initialState = {
  isLoading: false,
  isActive: false,
  data: {},
  error: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case OPEN: {
      return { ...state, isActive: true, data: action.data };
    }
    case CLOSE: {
      return initialState;
    }
    case LOADING: {
      return { ...state, isLoading: action.isLoading };
    }
    case ERROR: {
      return { ...state, error: action.error.message };
    }
    default:
      return state;
  }
};

export default auth;
