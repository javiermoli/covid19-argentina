import React from 'react';
import Stats from '../../CommonComponents/Stats/Stats';
import S from './styles';

const MapStats = ({ hovered, provincesData }) => {
  const provinceData =
    provincesData.length && provincesData.find((prov) => prov.name.includes(hovered));

  const activeCases = provinceData.cases - provinceData.recov - provinceData.deaths;

  const { deaths, recov, cases } = provinceData;

  return (
    <div>
      <S.HeaderContainer className="map-stats__header">
        <S.HeaderTitle className="map-stats__header--title">Mapa de Argentina</S.HeaderTitle>
        <S.HeaderSubtitle className="map-stats__header--subtitle">
          Desplazar sobre una zona para ver detalles
        </S.HeaderSubtitle>
      </S.HeaderContainer>
      {provinceData && (
        <div>
          <Stats
            showBackground
            confirmed={cases}
            deaths={deaths}
            recovered={recov}
            actives={activeCases}
          />
          <S.StatsTitle className="map-stats__title">{provinceData.name}</S.StatsTitle>
        </div>
      )}
    </div>
  );
};
export default MapStats;
