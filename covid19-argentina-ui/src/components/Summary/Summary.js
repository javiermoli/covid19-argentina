import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stats from '../CommonComponents/Stats/Stats';
import { fetchCountryData } from '../../actions/countryActions';
import './Summary.scss';

const Summary = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCountryData());
  }, [dispatch]);
  const countryData = useSelector((state) => state.country.stats);
  const { cases, recovered, deaths } = countryData;
  const actives = cases && cases - recovered - deaths;
  return (
    <div>
      {Object.keys(countryData).length ? (
        <div>
          <h1 className="summary__title">COVID-19 ARGENTINA</h1>
          <Stats confirmed={cases} deaths={deaths} recovered={recovered} actives={actives} />
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Summary;
