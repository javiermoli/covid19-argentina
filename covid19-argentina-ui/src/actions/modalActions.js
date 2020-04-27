// Types
export const CLOSE = 'modal/close';
export const OPEN = 'modal/open';
export const LOADING = 'modal/loading';
export const ERROR = 'chronology/error';

// Actions
export const closeModal = () => ({
  type: CLOSE,
});

export const openModal = (data) => ({
  type: OPEN,
  data,
});

export const toggleLoading = (isLoading) => ({
  type: LOADING,
  isLoading,
});

export const setError = (error) => ({
  type: ERROR,
  error,
});
