import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'antd';
import S from './styles';

const { Column } = Table;
const provincesColumns = [
  {
    title: 'Provincias',
    key: 'name',
    sort: (a, b) => a.name.localeCompare(b.name),
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
    title: 'Recuperaciones',
    sort: (a, b) => a.recov - b.recov,
    key: 'recov',
  },
];

const ProvincesTable = () => {
  /**
   * Add unique key for each element in order to avoid unexpected error from react
   * @type {provincesData}
   */
  const provincesData = useSelector((state) => state.country.provinces)
    .map((el) => ({
      ...el,
      key: el.name,
    }))
    .filter((province) => !province.name.includes('Total'));
  return (
    <S.Table
      size="small"
      pagination={false}
      loading={!provincesData.length}
      dataSource={provincesData}
    >
      {provincesColumns.map((column) => (
        <Column sorter={column.sort} title={column.title} dataIndex={column.key} key={column.key} />
      ))}
    </S.Table>
  );
};

export default ProvincesTable;
