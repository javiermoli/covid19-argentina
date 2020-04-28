import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import S from './styles';

const ChronologyDay = ({ date, deaths, recovered, cases, handleEdit, handleDelete }) => (
  <S.Card
    actions={[
      <EditOutlined onClick={handleEdit} key="edit" />,
      <DeleteOutlined onClick={handleDelete} key="delete" />,
    ]}
    title={date}
    bordered
  >
    <p>Cases: {cases}</p>
    <p>Deaths: {deaths}</p>
    <p>Recovered: {recovered}</p>
  </S.Card>
);

ChronologyDay.propTypes = {
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  cases: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ChronologyDay;
