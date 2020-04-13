import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'antd';
import { fetchProvincesData } from '../../actions/countryActions';

const { Column } = Table;

const ProvincesTable = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProvincesData());
  }, [dispatch]);
  const provincesData = useSelector((state) => state.country.provinces).map((el) => ({
    ...el,
    key: el.name,
  }));
  return (
    <div>
      <Table
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
      </Table>
    </div>
  );
};

export default ProvincesTable;
