import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((state) => state.auth.login);
  return (
    <Route {...rest} render={(props) => (auth ? <Component {...props} /> : <Redirect to="/" />)} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.element]).isRequired,
};

export default PrivateRoute;
