/**
 * TYPES
 */
export const CLOSE = 'modal/close';
export const OPEN = 'modal/open';
export const LOADING = 'modal/loading';
export const ERROR = 'chronology/error';

/**
 * ACTIONS
 */

/**
 * Close the modal
 */
export const closeModal = () => ({
  type: CLOSE,
});

/**
 * Open the modal and store the data
 *  @param {Object} data modal data
 */
export const openModal = (data) => ({
  type: OPEN,
  data,
});

/**
 * Change the isLoading property in the store base on the given flag
 *  @param {Boolean} isLoading
 */
export const toggleLoading = (isLoading) => ({
  type: LOADING,
  isLoading,
});

/**
 * Add the API response error
 *  @param {String} error
 */
export const setError = (error) => ({
  type: ERROR,
  error,
});
