import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { fetchCountriesData } from '../../actions/countriesActions';

const { Column } = Table;

const CountriesTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  const countriesData = useSelector((state) => state.countries).map((el) => ({
    ...el,
    key: el.country,
  }));

  return (
    <div>
      <Table pagination={false} loading={!countriesData.length} dataSource={countriesData}>
        <Column title="País" dataIndex="country" key="country" />
        <Column sorter={(a, b) => a.cases - b.cases} title="Casos" dataIndex="cases" key="cases" />
        <Column
          sorter={(a, b) => a.cases - b.cases}
          title="Nuevos casos"
          dataIndex="newCases"
          key="newCases"
        />
        <Column
          sorter={(a, b) => a.deaths - b.deaths}
          title="Muertes"
          dataIndex="deaths"
          key="deaths"
        />
        <Column
          sorter={(a, b) => a.newDeaths - b.newDeaths}
          title="Nuevas muertes"
          dataIndex="newDeaths"
          key="newDeaths"
        />
        <Column
          sorter={(a, b) => a.recovered - b.recovered}
          title="Recuperaciones"
          dataIndex="recovered"
          key="recovered"
        />
        <Column
          sorter={(a, b) => a.activeCases - b.activeCases}
          title="Casos activos"
          dataIndex="activeCases"
          key="activeCases"
        />
        <Column
          sorter={(a, b) => a.seriousCritical - b.seriousCritical}
          title="Casos criticos"
          dataIndex="seriousCritical"
          key="seriousCritical"
        />
        <Column
          sorter={(a, b) => a.tests - b.tests}
          title="Test realizados"
          dataIndex="tests"
          key="tests"
        />
      </Table>
    </div>
  );
};

export default CountriesTable;
