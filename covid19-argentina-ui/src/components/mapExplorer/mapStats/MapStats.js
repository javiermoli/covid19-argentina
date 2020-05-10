import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../../commonComponents/stats/Stats';
import S from './styles';

/**
 * @param {object} props Component props
 * @param {provincesData} props.provincesData
 * @param {string} props.hovered hovered zone
 */
const MapStats = ({ hovered, provincesData }) => {
  const hoveredProvince =
    provincesData.length && provincesData.find((prov) => prov.name.includes(hovered));

  const activeCases = hoveredProvince.cases - hoveredProvince.recov - hoveredProvince.deaths;

  const { deaths, recov, cases } = hoveredProvince;

  return (
    <div>
      <S.HeaderContainer>
        <S.HeaderTitle>Mapa de Argentina</S.HeaderTitle>
        <S.HeaderSubtitle>Desplazar sobre una zona para ver detalles</S.HeaderSubtitle>
      </S.HeaderContainer>
      {hoveredProvince && (
        <div>
          <Stats
            showBackground
            confirmed={cases}
            deaths={deaths}
            recovered={recov}
            actives={activeCases}
          />
          <S.StatsTitle>{hoveredProvince.name}</S.StatsTitle>
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
