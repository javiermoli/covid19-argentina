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

const VectorMap = ({ hovered, parsedSVGData, handleMouseOver }) => {
  const { layers } = parsedSVGData;
  if (!layers || !layers.length > 0) {
    console.error(
      "[react-vector-maps] No 'layers' prop provided. Did you spread a map object onto the component?",
    );
    return null;
  }

  const maxLayerValue = layers.reduce((prev, current) =>
    prev.cases > (current.cases || 0) ? prev : current,
  );

  const calculateLegendRange = (row) => {
    const casesAverage = maxLayerValue.cases / 10;
    const secondValue = row !== 5 ? Math.round(casesAverage * (row + 1)) : Infinity;
    const firstValue = row ? (casesAverage * row + 1).toFixed() : 1;
    return [firstValue, secondValue.toFixed()];
  };

  const getLegendLayers = () =>
    mapColorsScale.reduce((result, color, i) => {
      const layer = {
        color,
        range: calculateLegendRange(i),
      };
      return result.concat(layer);
    }, []);

  const legendLines = getLegendLayers();

  const confirmedCasesColorScale = (cases) =>
    legendLines.reduce((acc, element) => {
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
        <Legend layers={legendLines} />
      </svg>
    </S.MapContainer>
  );
};

VectorMap.propTypes = {
  handleMouseOver: PropTypes.func.isRequired,
  hovered: PropTypes.string.isRequired,
  parsedSVGData: PropTypes.shape({
    /** Unique ID of each layer. */
    id: PropTypes.string.isRequired,
    /** Name of the layer. */
    name: PropTypes.string.isRequired,
    /** SVG path for the layer. */
    viewBox: PropTypes.string.isRequired,
    /** Layers */
    layers: PropTypes.arrayOf(
      PropTypes.shape({
        /** Unique ID of each layer. */
        id: PropTypes.string.isRequired,
        /** Name of the layer. */
        name: PropTypes.string.isRequired,
        /** SVG path for the layer. */
        d: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default VectorMap;
