import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { fetchCountriesData } from '../../actions/countriesActions';
import S from './styles';

const { Column } = Table;

const countriesColumns = [
  {
    title: 'País',
    key: 'country',
    sort: (a, b) => a.country.localeCompare(b.country),
  },
  {
    title: 'Nuevos casos',
    key: 'newCases',
    sort: (a, b) => a.newCases - b.newCases,
  },
  {
    title: 'Casos',
    key: 'cases',
    sort: (a, b) => a.cases - b.cases,
  },
  {
    title: 'Muertes',
    key: 'deaths',
    sort: (a, b) => a.deaths - b.deaths,
  },
  {
    title: 'Nuevas Muertes',
    key: 'newDeaths',
    sort: (a, b) => a.newDeaths - b.newDeaths,
  },
  {
    title: 'Recuperaciones',
    key: 'recovered',
    sort: (a, b) => a.deaths - b.deaths,
  },
  {
    title: 'Casos activos',
    key: 'activeCases',
    sort: (a, b) => a.activeCases - b.activeCases,
  },
  {
    title: 'Casos criticos',
    key: 'seriousCritical',
    sort: (a, b) => a.seriousCritical - b.seriousCritical,
  },
  {
    title: 'Test realizados',
    key: 'tests',
    sort: (a, b) => a.tests - b.tests,
  },
];

const CountriesTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  /**
   * Add unique key for each element in order to avoid unexpected error from react
   */
  const countriesData = useSelector((state) => state.countries).map((el) => ({
    ...el,
    key: el.country,
  }));

  return (
    <S.Container>
      <Table pagination={false} loading={!countriesData.length} dataSource={countriesData}>
        {countriesColumns.map((column) => (
          <Column
            sorter={column.sort}
            title={column.title}
            dataIndex={column.key}
            key={column.key}
          />
        ))}
      </Table>
    </S.Container>
  );
};

export default CountriesTable;
