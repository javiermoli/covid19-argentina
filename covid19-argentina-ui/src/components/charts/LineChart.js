import React, { memo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import S from './styles';

const Chart = memo(({ data }) => (
  <S.Container>
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="bottom" align="center" />
        <Line type="monotone" dataKey="Cases" stroke="#bc1a1d" />
      </LineChart>
    </ResponsiveContainer>
  </S.Container>
));

export default Chart;
