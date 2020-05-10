import axios from 'axios';
import { fetchData } from './countryActions';
import { closeModal, toggleLoading, setError } from './modalActions';

/**
 * ACTIONS
 */

/**
 * Update a chronology day with the given payload
 * @param {Number} id chronology day id in the DB
 * @param {Stats & {date: string}} payload user login information
 */
export const requestUpdateDay = (payload, id) =>
  /**
   * @param {Function} dispatch dispatch the redux actions
   */
  (dispatch) => {
    axios
      .patch(`${process.env.REACT_APP_BACKEND_URL}chronology/${id}`, payload)
      .then(() => {
        dispatch(fetchData());
        dispatch(toggleLoading(false));
        dispatch(closeModal());
      })
      .catch((errors) => {
        dispatch(toggleLoading(false));
        dispatch(setError(errors.response.data));
      });
  };

/**
 * Crate a new chronology day with the given payload
 * @param {Stats & {date: string}} payload user login information
 */
export const requestCreateDay = (payload) =>
  /**
   * @param {Function} dispatch dispatch the redux actions
   */
  (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}chronology`, payload)
      .then(() => {
        dispatch(fetchData());
        dispatch(toggleLoading(false));
        dispatch(closeModal());
      })
      .catch((errors) => {
        dispatch(toggleLoading(false));
        dispatch(setError(errors.response.data));
      });
  };

/**
 * Remove the given chronology day
 * @param {Number} id chronology day id in the DB
 */
export const deleteDay = (id) =>
  /**
   * @param {Function} dispatch dispatch the redux actions
   */
  (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}chronology/${id}`)
      .then(() => {
        dispatch(fetchData());
        dispatch(toggleLoading(false));
      })
      .catch((errors) => {
        dispatch(toggleLoading(false));
        dispatch(setError(errors.response.data));
      });
  };
