import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

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

  const max = layers.reduce((prev, current) =>
    prev.cases > (current.cases || 0) ? prev : current,
  );

  const getLegendValues = () => {
    const baseValue = (max.cases - 1) / 5;
    const caseTwoValue = Math.round(baseValue * 2);
    const caseThreeValue = Math.round(baseValue * 3);
    const caseFourValue = Math.round(baseValue * 4);
    const caseFiveValue = Math.round(baseValue * 5);

    return {
      case1: [1, baseValue],
      case2: [baseValue + 1, caseTwoValue],
      case3: [caseTwoValue + 1, caseThreeValue],
      case4: [caseThreeValue + 1, caseFourValue],
      case5: [caseFourValue + 1, caseFiveValue],
      case6: [caseFiveValue + 1, Infinity],
    };
  };

  const { case1, case2, case3, case4, case5, case6 } = getLegendValues();

  const confirmedCasesColorScale = (cases) => {
    switch (true) {
      case inRange(cases, case1[0], case1[1]):
        return '#FFF4F0';
      case inRange(cases, case2[0], case2[1]):
        return '#FDD5C3';
      case inRange(cases, case3[0], case3[1]):
        return '#FCA487';
      case inRange(cases, case4[0], case4[1]):
        return '#FA7254';
      case inRange(cases, case5[0], case5[1]):
        return '#E83B2E';
      case inRange(cases, case6[0], case6[1]):
        return '#BC1A1D';
      default:
        return '#FFFFFF';
    }
  };

  return (
    <div className="map" style={{ width: '250px' }}>
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
            <g transform="translate(0,0)">
              <rect style={{ fill: 'rgb(255, 245, 240)' }} width="36" height="10" />
              <text style={{ fontSize: '10px' }} transform="translate( 46, 10)">
                {case1[0]} - {case1[1].toFixed()}
              </text>
            </g>
            <circle
              name="Ciudad Autónoma de Buenos Aires"
              {...layerProps}
              fill="transparent"
              cx="70"
              cy="-380"
              r="20"
            />
            <g transform="translate(0,14)">
              <rect style={{ fill: 'rgb(253, 213, 195)' }} width="36" height="10" />
              <text style={{ fontSize: '10px' }} transform="translate( 46, 10)">
                {case2[0].toFixed()} - {case2[1].toFixed()}
              </text>
            </g>
            <g transform="translate(0,28)">
              <rect style={{ fill: 'rgb(252, 164, 135)' }} width="36" height="10" />
              <text style={{ fontSize: '10px' }} transform="translate( 46, 10)">
                {case3[0].toFixed()} - {case3[1].toFixed()}
              </text>
            </g>
            <g transform="translate(0,42)">
              <rect style={{ fill: 'rgb(250, 112, 82)' }} width="36" height="10" />
              <text style={{ fontSize: '10px' }} transform="translate( 46, 10)">
                {case4[0].toFixed()} - {case4[1].toFixed()}
              </text>
            </g>
            <g transform="translate(0,56)">
              <rect style={{ fill: 'rgb(232, 56, 44)' }} width="36" height="10" />
              <text style={{ fontSize: '10px' }} transform="translate( 46, 10)">
                {case5[0].toFixed()} - {case5[1].toFixed()}
              </text>
            </g>
            <g transform="translate(0,70)">
              <rect style={{ fill: 'rgb(188, 21, 26)' }} width="36" height="10" />
              <text style={{ fontSize: '10px' }} transform="translate( 46, 10)">
                {case6[0].toFixed()} +
              </text>
            </g>
          </g>
          <text style={{ fontSize: '10px' }}>
            <tspan x="0" dy="0em">
              Casos
            </tspan>
            <tspan x="0" dy="1.2em">
              Confirmados
            </tspan>
          </text>
        </g>
      </svg>
    </div>
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
