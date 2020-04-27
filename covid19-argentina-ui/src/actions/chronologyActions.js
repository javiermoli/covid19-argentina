import axios from 'axios';
import { fetchData } from './countryActions';
import { closeModal, toggleLoading, setError } from './modalActions';

// Types
export const UPDATE_DAY = 'chronology/update';
export const CREATE_DAY = 'chronology/create';

// Actions
export const updateDay = (token) => ({
  type: UPDATE_DAY,
  token,
});

export const createDay = (token) => ({
  type: CREATE_DAY,
  token,
});

export const requestUpdateDay = (payload, id) => (dispatch) => {
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

export const requestCreateDay = (payload) => (dispatch) => {
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

export const deleteDay = (id) => (dispatch) => {
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
