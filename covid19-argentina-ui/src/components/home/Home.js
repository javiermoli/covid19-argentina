import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import Summary from '../Summary/Summary';
import ProvincesTabled from '../provincesTable/ProvincesTable';
import Chronology from '../chronology/Chronology';
import MapExplorer from '../mapExplorer/MapExplorer';
import { fetchData } from '../../actions/countryActions';
import Spinner from '../spinner/Spinner';
import S from './styles';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  const countryData = useSelector((state) => state.country.stats);
  return (
    <div>
      {Object.entries(countryData).length ? (
        <>
          <S.TitleContainer>
            <S.Title>COVID-19 ARGENTINA</S.Title>
          </S.TitleContainer>
          <Row gutter={[48, 8]}>
            <Col xl={{ span: 12 }} md={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 12 }}>
              <Summary countryData={countryData} />
              <ProvincesTabled />
            </Col>
            <Col xl={{ span: 12 }} md={{ span: 24 }} xs={{ span: 24 }} lg={{ span: 12 }}>
              <MapExplorer />
              <Chronology />
            </Col>
          </Row>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Home;
