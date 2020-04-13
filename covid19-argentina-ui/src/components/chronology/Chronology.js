import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LineChart from '../charts/LineChart';
import ChartBar from '../charts/ChartBar';
import { fetchChronology } from '../../actions/countryActions';

const Chronology = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchChronology());
  }, [dispatch]);
  const chronology = useSelector((state) => state.country.chronology);

  return (
    <div>
      <ChartBar data={chronology} />
      <LineChart data={chronology} />
    </div>
  );
};

export default Chronology;
