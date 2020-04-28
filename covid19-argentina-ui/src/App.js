import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from './components/spinner/Spinner';
import S from './styles';
import 'antd/dist/antd.css';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import { logoutAsync } from './actions/authActions';
import { addTokenToHeaders } from './utils/authUtils';

const CountriesTable = React.lazy(() => import('./components/countriesTable/CountriesTable'));
const Nav = React.lazy(() => import('./components/header/Header'));
const Home = React.lazy(() => import('./components/home/Home'));
const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
const Login = React.lazy(() => import('./components/login/Login'));

function App() {
  const dispatch = useDispatch();
  /**
   * Check if the user is logged or not
   */
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData) {
      addTokenToHeaders(storedData.token);
      dispatch(logoutAsync());
    }
  }, [dispatch]);
  return (
    <Suspense fallback={<Spinner />}>
      <Layout className="layout">
        <Nav />
        <S.Content>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/mundo" component={CountriesTable} exact />
            <PrivateRoute path="/dashboard" component={Dashboard} exact />
            <Route path="/login" component={Login} exact />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </S.Content>
      </Layout>
    </Suspense>
  );
}

export default App;
