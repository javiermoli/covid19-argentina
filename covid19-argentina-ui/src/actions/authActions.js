import axios from 'axios';

/**
 * TYPES
 */
export const LOGIN = 'auth/login';
export const LOADING = 'auth/loading';

/**
 * ACTIONS
 */

/**
 * Login action
 * @param {Boolean} isLogin flag to know if the user is logged or not
 */
export const login = (isLogin) => ({
  type: LOGIN,
  isLogin,
});

/**
 * Check if the user is in login process
 * @param {Boolean} isLoading flag to know it is loading or not
 */
export const setLoading = (isLoading) => ({
  type: LOADING,
  isLoading,
});

/**
 * Logout the user
 */
export const logout = () =>
  /**
   * @param {Function} dispatch dispatch the redux actions
   */
  (dispatch) => {
    dispatch(login(false));
    localStorage.removeItem('userData');
    axios.defaults.headers.common.Authorization = null;
  };

/**
 * Login the user
 * @param {import('history').History} history react-router-dom history
 * @param {{password: string, email: string}} payload user login information
 */
export const requestLogin = (payload, history) =>
  /**
   * @param {Function} dispatch dispatch the redux actions
   */
  (dispatch) => {
    const { email, password } = payload;
    dispatch(setLoading(true));
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}auth/login`, {
        email,
        password,
      })
      .then((res) => {
        const { token, refreshToken } = res.data.user;
        localStorage.setItem(
          'userData',
          JSON.stringify({
            token,
            refreshToken,
          }),
        );
        dispatch(login(true));
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
