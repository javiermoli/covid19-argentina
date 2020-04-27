import React from 'react';
import Stats from '../commonComponents/stats/Stats';

const initialStatsData = {
  deaths: 0,
  cases: 0,
  recovered: 0,
};

const Summary = ({ countryData }) => {
  const stats = countryData.reduce(
    (acc, element) => ({
      deaths: acc.deaths + element.deaths,
      cases: acc.cases + element.cases,
      recovered: acc.recovered + element.recovered,
    }),
    initialStatsData,
  );
  const { cases, deaths, recovered } = stats;
  const actives = cases - deaths - recovered;
  return (
    <div>
      <Stats confirmed={cases} deaths={deaths} recovered={recovered} actives={actives} />
    </div>
  );
};

export default Summary;
