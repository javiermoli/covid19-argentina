import React from 'react';
import { useSelector } from 'react-redux';
import Stats from '../CommonComponents/Stats/Stats';
import S from './styles';

const Summary = () => {
  const countryData = useSelector((state) => state.country.stats);
  const { cases, recovered, deaths, actives } = countryData;
  return (
    <div>
      <div>
        <S.Title className="summary__title">COVID-19 ARGENTINA</S.Title>
        <Stats confirmed={cases} deaths={deaths} recovered={recovered} actives={actives} />
      </div>
    </div>
  );
};

export default Summary;
