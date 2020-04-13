import React from 'react';
import { Layout, Row, Col } from 'antd';
import Summary from './components/Summary/Summary';
import ProvincesTabled from './components/provincesTable/ProvincesTable';
import CountriesTable from './components/countriesTable/CountriesTable';
import Chronology from './components/chronology/Chronology';
import MapExplorer from './components/mapExplorer/MapExplorer';
import 'antd/dist/antd.css';
import './App.css';
import Nav from './components/Header/Header';

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Nav />
      <Content style={{ padding: '0 50px' }}>
        <Row gutter={[48, 8]}>
          <Col span={12}>
            <Summary />
            <ProvincesTabled />
          </Col>
          <Col align-items="center" span={12}>
            <MapExplorer />
            <Chronology />
          </Col>
        </Row>
        <CountriesTable />
      </Content>
    </div>
  );
}

export default App;
