import React from 'react';
import PropTypes from 'prop-types';
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

SwitchedCharts.propTypes = {
  data: PropTypes.array.isRequired,
  isBarChart: PropTypes.bool.isRequired,
  dataKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SwitchedCharts;
