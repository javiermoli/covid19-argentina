import React from 'react';
import Stats from '../CommonComponents/Stats/Stats';

const Summary = ({ countryData }) => {
  const { cases, recovered, deaths, actives } = countryData;
  return (
    <div>
      <div>
        <Stats confirmed={cases} deaths={deaths} recovered={recovered} actives={actives} />
      </div>
    </div>
  );
};

export default Summary;
