import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../../commonComponents/stats/Stats';
import S from './styles';

const MapStats = ({ hovered, provincesData }) => {
  const provinceData =
    provincesData.length && provincesData.find((prov) => prov.name.includes(hovered));

  const activeCases = provinceData.cases - provinceData.recov - provinceData.deaths;

  const { deaths, recov, cases } = provinceData;

  return (
    <div>
      <S.HeaderContainer>
        <S.HeaderTitle>Mapa de Argentina</S.HeaderTitle>
        <S.HeaderSubtitle>Desplazar sobre una zona para ver detalles</S.HeaderSubtitle>
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
          <S.StatsTitle>{provinceData.name}</S.StatsTitle>
        </div>
      )}
    </div>
  );
};

MapStats.propTypes = {
  hovered: PropTypes.string.isRequired,
  provincesData: PropTypes.arrayOf(
    PropTypes.shape({
      cases: PropTypes.number.isRequired,
      recov: PropTypes.number.isRequired,
      deaths: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MapStats;
