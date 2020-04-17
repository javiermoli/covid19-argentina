import React from 'react';
import S from './styles';

const DIFFERENCE_BETWEEN_LINES = 14;

const Legend = ({ layers }) => (
  <g transform="translate(200, 635)">
    <g transform="translate(0,24)">
      {layers.map((layer, i) => {
        const firstValue = layer.range[0];
        return (
          <g key={layer.color} transform={`translate(0,${DIFFERENCE_BETWEEN_LINES * i})`}>
            <S.Rect layer={layer} width="36" height="10" />
            <S.Text transform="translate( 46, 10)">
              {i < 5 ? `${firstValue} - ${layer.range[1]}` : `${firstValue} +`}
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

export default Legend;
