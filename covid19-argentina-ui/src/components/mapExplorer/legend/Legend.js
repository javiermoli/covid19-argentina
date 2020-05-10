import React, { memo } from 'react';
import PropTypes from 'prop-types';
import S from './styles';

const SPACE_BETWEEN_LAYER = 14;

/**
 * @param {object} props Component props
 * @param {{color: string, range: number[]}[]} props.layers the layers of the map legend
 */
const Legend = ({ layers }) => (
  <g transform="translate(200, 635)">
    <g transform="translate(0,24)">
      {layers.map((layer, i) => {
        const firstValue = layer.range[0];
        const isLastLayer = i === 5;
        return (
          <g key={layer.color} transform={`translate(0,${SPACE_BETWEEN_LAYER * i})`}>
            <S.Rect layer={layer} width="36" height="10" />
            <S.Text transform="translate( 46, 10)">
              {!isLastLayer ? `${firstValue} - ${layer.range[1]}` : `${firstValue} +`}
            </S.Text>
          </g>
        );
      })}
    </g>
    <S.Text>
      <tspan x="0" dy="0em">
        Casos
      </tspan>
      <tspan x="0" dy="1.2em">
        Confirmados
      </tspan>
    </S.Text>
  </g>
);

Legend.propTypes = {
  layers: PropTypes.arrayOf(
    PropTypes.shape({
      range: PropTypes.array.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

/**
 * Avoid re-renders once the layers are filled
 * @param {object} prevProps Component prev props
 * @param {{color: string, range: number[]}[]} prevProps.layers the layers of the map legend
 */
const areEqual = (prevProps) => {
  const { layers } = prevProps;
  if (Number.isInteger(layers[0].range[1])) return true;
  return false;
};

export default memo(Legend, areEqual);
