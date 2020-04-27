import React from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
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

export default ChronologyDay;
