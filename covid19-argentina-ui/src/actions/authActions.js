import axios from 'axios';
import { addTokenToHeaders, getRemainingTimeForTokenExpiration } from '../utils/authUtils';

// Types
export const LOGIN = 'auth/login';
export const LOADING = 'auth/loading';

// Actions
export const login = (isLogin) => ({
  type: LOGIN,
  isLogin,
});

export const setLoading = (loading) => ({
  type: LOADING,
  loading,
});

/**
 * Login the user if token expiration time is valid.
 * Add setTimeout with the token expiration time stored in the local storage
 */
export const logoutAsync = () => (dispatch) => {
  const remainingTime = getRemainingTimeForTokenExpiration();
  if (remainingTime > 0) {
    dispatch(login(true));
  }
  setTimeout(() => {
    dispatch(login(false));
    localStorage.removeItem('userData');
  }, remainingTime);
};

/**
 * API request, add the token and the remaining
 * for expiration time to the local storage
 */
export const requestLogin = (payload, history) => (dispatch) => {
  const { email, password } = payload;
  dispatch(setLoading(true));
  axios
    .post(`${process.env.REACT_APP_BACKEND_URL}users/login`, {
      email,
      password,
    })
    .then((res) => {
      const { token } = res.data.user;
      const oneHour = 1000 * 60 * 60;
      const tokenExpirationDate = new Date(new Date().getTime() + oneHour);
      localStorage.setItem(
        'userData',
        JSON.stringify({
          token,
          expiration: tokenExpirationDate.toISOString(),
        }),
      );
      addTokenToHeaders(token);
      dispatch(logoutAsync());
    })
    .then(() => {
      dispatch(setLoading(false));
      history.push('/dashboard');
    })
    .catch((errors) => {
      dispatch(setLoading(false));
      console.error(errors);
    });
};
