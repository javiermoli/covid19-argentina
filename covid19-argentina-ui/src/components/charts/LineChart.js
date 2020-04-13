import React, { memo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = memo(({ data }) => (
  <LineChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="Date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="Cases" stroke="#82ca9d" />
  </LineChart>
));

export default Chart;
