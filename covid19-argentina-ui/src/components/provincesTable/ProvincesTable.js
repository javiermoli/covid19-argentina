import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import S from './styles';

const { Column } = Table;

const ProvincesTable = () => {
  const provincesData = useSelector((state) => state.country.provinces).map((el) => ({
    ...el,
    key: el.name,
  }));
  return (
    <S.Table
      size="small"
      pagination={false}
      loading={!provincesData.length}
      dataSource={provincesData}
    >
      <Column title="Provincias" dataIndex="name" key="name" />
      <Column sorter={(a, b) => a.cases - b.cases} title="Casos" dataIndex="cases" key="cases" />
      <Column
        sorter={(a, b) => a.deaths - b.deaths}
        title="Muertes"
        dataIndex="deaths"
        key="deaths"
      />
      <Column
        sorter={(a, b) => a.recov - b.recov}
        title="Recuperaciones"
        dataIndex="recov"
        key="recov"
      />
    </S.Table>
  );
};

export default ProvincesTable;
