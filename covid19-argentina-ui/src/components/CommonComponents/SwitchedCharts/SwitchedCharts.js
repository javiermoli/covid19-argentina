import React from 'react';
import ChartBar from '../../charts/ChartBar';
import LineChart from '../../charts/LineChart';

const SwitchedCharts = ({ data, isBarChart, dataKey, label, color }) => (
  <div>
    {isBarChart ? (
      <ChartBar color={color} label={label} dataKey={dataKey} data={data} />
    ) : (
      <LineChart color={color} label={label} dataKey={dataKey} data={data} />
    )}
  </div>
);
export default SwitchedCharts;
