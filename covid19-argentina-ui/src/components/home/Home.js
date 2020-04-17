import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import Summary from '../Summary/Summary';
import ProvincesTabled from '../provincesTable/ProvincesTable';
import Chronology from '../chronology/Chronology';
import MapExplorer from '../mapExplorer/MapExplorer';
import { fetchData } from '../../actions/countryActions';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Row gutter={[48, 8]}>
      <Col xl={{ span: 12 }} md={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 12 }}>
        <Summary />
        <ProvincesTabled />
      </Col>
      <Col xl={{ span: 12 }} md={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 12 }}>
        <MapExplorer />
        <Chronology />
      </Col>
    </Row>
  );
};

export default Home;