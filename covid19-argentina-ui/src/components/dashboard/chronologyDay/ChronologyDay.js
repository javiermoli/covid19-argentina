import React, { memo } from 'react';
import { EditOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import S from './styles';
import { maroon, red, green } from '../../../colors';

/**
 * @param {object} props Component props
 * @param {string} props.date the date for the given chronology day
 * @param {number} props.deaths deaths on the given day
 * @param {number} props.recovered recovered on the given day
 * @param {number} props.cases cases on the given day
 * @param {function} props.handleEdit the handle function to edit a day
 * @param {function} props.handleDelete the handle function to delete a day
 */
const ChronologyDay = ({ date, deaths, recovered, cases, handleEdit, handleDelete }) => (
  <S.Card
    actions={[
      <EditOutlined onClick={handleEdit} key="edit" />,
      <S.DeleteOutlined onClick={handleDelete} key="delete" />,
    ]}
    title={date}
    bordered
  >
    <div>
      <S.Stat>Cases: </S.Stat>
      <S.StatValue color={maroon}>{cases}</S.StatValue>
    </div>
    <div>
      <S.Stat>Deaths: </S.Stat>
      <S.StatValue color={red}>{deaths}</S.StatValue>
    </div>
    <div>
      <S.Stat>Recovered: </S.Stat>
      <S.StatValue color={green}>{recovered}</S.StatValue>
    </div>
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

/**
 * @param {object} prevProps Component prevProps
 * @param {string} prevProps.id the id for the given chronology day
 * @param {number} prevProps.deaths deaths on the given day
 * @param {number} prevProps.recovered recovered on the given day
 * @param {number} prevProps.cases cases on the given day
 *
 * @param {object} nextProps Component nextProps
 * @param {string} nextProps.id the id for the given chronology day
 * @param {number} nextProps.deaths deaths on the given day
 * @param {number} nextProps.recovered recovered on the given day
 * @param {number} nextProps.cases cases on the given day
 */
const areEqual = (prevProps, nextProps) => {
  const { deaths, recovered, cases, id } = prevProps;
  const { deaths: nextDeaths, recovered: nextRecovered, cases: nextCases, id: nextId } = nextProps;
  if (
    id === nextId &&
    (deaths !== nextDeaths || recovered !== nextRecovered || cases !== nextCases)
  ) {
    return false;
  }
  return true;
};

export default memo(ChronologyDay, areEqual);
