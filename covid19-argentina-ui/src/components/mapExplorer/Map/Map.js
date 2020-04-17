import React from 'react';
import PropTypes from 'prop-types';
import Legend from '../legend/Legend';
import S from './styles';

const mapColors = ['#FFF4F0', '#FDD5C3', '#FCA487', '#FA7254', '#E83B2E', '#BC1A1D'];
const DEFAULT_COLOR = '#FFFFFF';

function inRange(n, nStart, nEnd) {
  if (n >= nStart && n <= nEnd) {
    return true;
  }

  return false;
}

const VectorMap = ({
  legendVal,
  id,
  name,
  layers,
  tabIndex,
  layerProps,
  checkedLayers,
  currentLayers,
  ...other
}) => {
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
    const casesAverage = maxLayerValue.cases / 7;
    const secondValue = row !== 5 ? Math.round(casesAverage * (row + 1)) : Infinity;
    const firstValue = row ? (casesAverage * row + 1).toFixed() : 1;
    return [firstValue, secondValue.toFixed()];
  };

  const getLegendLayers = () =>
    mapColors.reduce((result, color, i) => {
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
    }, DEFAULT_COLOR);

  return (
    <S.MapContainer>
      <svg
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        key={id}
        aria-label={name}
        {...other}
      >
        {layers.map((layer) => (
          <path
            style={{ fill: confirmedCasesColorScale(layer.cases) }}
            key={layer.id}
            tabIndex={tabIndex}
            {...layer}
            {...layerProps}
          />
        ))}
        <g transform="translate(200, 635)">
          <g transform="translate(0,24)">
            <circle
              name="Ciudad Autónoma de Buenos Aires"
              {...layerProps}
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
  /** Unique ID of the SVG element. */
  id: PropTypes.string.isRequired,
  /** Name of the map. */
  name: PropTypes.string.isRequired,
  /** View box for the map. */
  viewBox: PropTypes.string.isRequired,
  /** Layers that represent the regions of the map. */
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      /** Unique ID of each layer. */
      id: PropTypes.string.isRequired,
      /** Name of the layer. */
      name: PropTypes.string,
      /** SVG path for the layer. */
      d: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /** Tab index for each layer. Set to '-1' to disable layer focusing. */
  tabIndex: PropTypes.number,
  /** Props to spread onto each layer. */
  layerProps: PropTypes.object,
  /** Layer IDs to 'select' with the 'aria-checked' attribute. */
  checkedLayers: PropTypes.arrayOf(PropTypes.string),
  /** Layer IDs to 'select' with the 'aria-current' attribute. */
  currentLayers: PropTypes.arrayOf(PropTypes.string),
};

VectorMap.defaultProps = {
  tabIndex: 0,
  layerProps: null,
  checkedLayers: null,
  currentLayers: null,
};

export default VectorMap;
