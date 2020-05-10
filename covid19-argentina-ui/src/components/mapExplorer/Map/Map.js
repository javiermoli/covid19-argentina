import React from 'react';
import PropTypes from 'prop-types';
import Legend from '../legend/Legend';
import S from './styles';
import { red, white, lightPink, mapColorsScale } from '../../../colors';

function inRange(n, nStart, nEnd) {
  if (n >= nStart && n <= nEnd) {
    return true;
  }

  return false;
}

/**
 * @param {object} props Component props
 * @param {string} props.hovered hovered zone
 * @param {mapData} props.parsedSVGData svg properties
 * @param {function} props.handleMouseOver
 */
const VectorMap = ({ hovered, parsedSVGData, handleMouseOver }) => {
  const { layers } = parsedSVGData;
  if (!layers) {
    console.error("No 'layers' prop provided.");
    return null;
  }

  const maxLayerValue = layers.reduce((prev, current) =>
    prev.cases > (current.cases || 0) ? prev : current,
  );

  /**
   * Calculate the legend range of values for the given row
   * @param {Number} row the row of the legend
   * @returns {Number[]}
   */
  const calculateLegendRange = (row) => {
    const casesAverage = maxLayerValue.cases / 10;
    const firstValue = row ? (casesAverage * row + 1).toFixed() : 1;
    const secondValue = row !== 5 ? Math.round(casesAverage * (row + 1)) : Infinity;
    return [firstValue, secondValue];
  };

  /**
   * Calculate the layers of the legend with the color and the range
   * @returns {{color: string, range: number[]}[]} legend layers
   */
  const getLegendLayers = () =>
    mapColorsScale.map((color, i) => ({
      color,
      range: calculateLegendRange(i),
    }));

  const legendLayers = getLegendLayers();

  /**
   * Calculate the color for the given cases
   * @param {Number} cases number of cases
   * @returns {String} the corresponding color for the given cases
   */
  const confirmedCasesColorScale = (cases) =>
    legendLayers.reduce((acc, element) => {
      if (inRange(cases, element.range[0], element.range[1])) return element.color;
      return acc;
    }, white);

  return (
    <S.MapContainer>
      <svg
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        key={parsedSVGData.id}
        aria-label={parsedSVGData.name}
        id={parsedSVGData.id}
        name={parsedSVGData.name}
        viewBox={parsedSVGData.viewBox}
      >
        {layers.map((layer) => (
          <path
            style={{ fill: confirmedCasesColorScale(layer.cases) }}
            key={layer.id}
            stroke={hovered.includes(layer.name) ? red : lightPink}
            id={layer.id}
            name={layer.name}
            d={layer.d}
            onMouseOver={handleMouseOver}
          />
        ))}
        <g transform="translate(200, 635)">
          <g transform="translate(0,24)">
            <circle
              stroke={hovered.includes('Ciudad Autónoma de Buenos Aires') ? red : 'transparent'}
              name="Ciudad Autónoma de Buenos Aires"
              onMouseOver={handleMouseOver}
              fill="transparent"
              cx="60"
              cy="-390"
              r="20"
            />
          </g>
        </g>
        <Legend layers={legendLayers} />
      </svg>
    </S.MapContainer>
  );
};

VectorMap.propTypes = {
  handleMouseOver: PropTypes.func.isRequired,
  hovered: PropTypes.string.isRequired,
  parsedSVGData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    layers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        d: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default VectorMap;
