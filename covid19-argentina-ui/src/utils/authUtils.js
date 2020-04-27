import axios from 'axios';

/**
 * Add the token to the header for all request
 */
export const addTokenToHeaders = (token) => {
  const authorization = axios.defaults.headers.common.Authorization;
  if (token && !authorization) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

/**
 * Check the remaining time for token expiration
 */
export const getRemainingTimeForTokenExpiration = () => {
  const storedData = JSON.parse(localStorage.getItem('userData'));
  if (storedData) return new Date(storedData.expiration).getTime() - new Date().getTime();
  return null;
};
