import React from 'react';
import Stats from '../../CommonComponents/Stats/Stats';
import './styles.scss';

const MapStats = ({ hovered, provincesData }) => {
  // const parsedData = provincesData.reduce((acc, element) => {
  //   acc[0] = acc[0] || [];
  //   acc[1] = acc[1] || [];
  //   if (element.name.includes('Buenos Aires')) {
  //     if (acc[0].length) {
  //       acc[0] = [
  //         {
  //           name: 'Buenos Aires',
  //           cases: element.cases + acc[0][0].cases,
  //           deaths: element.deaths + acc[0][0].deaths,
  //           recov: element.recov + acc[0][0].recov,
  //         },
  //       ];
  //     } else {
  //       acc[0].push(element);
  //     }
  //     return acc;
  //   }
  //   acc[1].push(element);
  //   return acc;
  // }, []);

  // const provinceData =
  //   parsedData.length &&
  //   [...parsedData[0], ...parsedData[1]].find((prov) => prov.name.includes(hovered));

  const provinceData =
    provincesData.length && provincesData.find((prov) => prov.name.includes(hovered));

  const activeCases = provinceData && provinceData.cases - provinceData.recov - provinceData.deaths;

  const { deaths, recov, cases } = provinceData || '';

  return (
    <div>
      <div className="map-stats__header">
        <h2 className="map-stats__header--title">Mapa de Argentina</h2>
        <h4 className="map-stats__header--subtitle">Desplazar sobre una zona para ver detalles</h4>
      </div>
      {provinceData && (
        <div>
          <Stats
            showBackground
            confirmed={cases}
            deaths={deaths}
            recovered={recov}
            actives={activeCases}
          />
          <h4 className="map-stats__title">{provinceData.name}</h4>
        </div>
      )}
    </div>
  );
};
export default MapStats;
