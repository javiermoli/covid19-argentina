import React, { memo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ChartBar = memo(({ data }) => (
  <BarChart
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
    <Bar dataKey="Cases" fill="#8884d8" />
  </BarChart>
));

export default ChartBar;
