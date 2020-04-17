import React, { memo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import S from './styles';

const ChartBar = memo(({ data }) => (
  <S.Container>
    <ResponsiveContainer>
      <BarChart
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
        <Tooltip label="casos" />
        <Legend align="center" horizontalAlign="center" verticalAlign="bottom" />
        <Bar dataKey="Cases" fill="#bc1a1d" />
      </BarChart>
    </ResponsiveContainer>
  </S.Container>
));

export default ChartBar;
