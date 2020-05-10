import axios from 'axios';
import { logout } from '../actions/authActions';

/**
 * Refresh the token when it is expired in order to keep the user logged
 * @return {Promise}
 */
const refreshToken = () => {
  const storedData = JSON.parse(localStorage.getItem('userData'));
  const { refreshToken: refreshedToken } = storedData;
  const refreshingCall = axios
    .post(`${process.env.REACT_APP_BACKEND_URL}auth/refreshToken`, {
      refreshToken: refreshedToken,
    })
    .then((res) => {
      const { token } = res.data.user;
      localStorage.setItem(
        'userData',
        JSON.stringify({
          token,
          refreshToken: refreshedToken,
        }),
      );
      Promise.resolve(true);
    })
    .catch((error) => Promise.reject(error));
  return refreshingCall;
};

/**
 * Check on each request response if the token has expired, if it is expired
 * execute the refreshToken method
 * @param {Error} error
 * @param {Function} dispatch
 * @return {Promise}
 */
export const interceptorResponseError = (error, dispatch) => {
  const originalRequest = error.config;
  const { status } = error.response;
  if (status === 401 && !originalRequest.retry && !originalRequest.url.includes('auth')) {
    originalRequest.retry = true;
    return refreshToken()
      .then(() => {
        originalRequest.baseURL = undefined;
        return axios.request(originalRequest);
      })
      .catch(() => {
        dispatch(logout());
        return Promise.reject(error);
      });
  }
  return Promise.reject(error);
};

/**
 * Add the Authorization header to each request
 * @param {Object} config
 * @return {Promise} request response
 */
export const interceptorRequest = (config) => {
  const request = config;
  const storedData = JSON.parse(localStorage.getItem('userData'));
  if (storedData) {
    const { token } = storedData;
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};
