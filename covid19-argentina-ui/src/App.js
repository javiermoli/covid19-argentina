import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from './components/spinner/Spinner';
import 'antd/dist/antd.css';

const { Content } = Layout;

const CountriesTable = React.lazy(() => import('./components/countriesTable/CountriesTable'));
const Nav = React.lazy(() => import('./components/Header/Header'));
const Home = React.lazy(() => import('./components/home/Home'));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Layout className="layout">
        <Nav />
        <Content style={{ padding: '25px 25px' }}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/mundo" component={CountriesTable} exact />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </Content>
      </Layout>
    </Suspense>
  );
}

export default App;
