import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * @param {object} props Component props
 * @param {*} props.rest route properties
 * @param {React.Component} props.component react component
 */
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
