import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { interceptorRequest, interceptorResponseError } from './utils/axiosInterceptors';
import './components/types';

/**
 * Axios interceptors
 */
axios.interceptors.request.use(interceptorRequest, (error) => Promise.reject(error));
axios.interceptors.response.use(
  (response) => response,
  (error) => interceptorResponseError(error, store.dispatch),
);

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>{app}</Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
