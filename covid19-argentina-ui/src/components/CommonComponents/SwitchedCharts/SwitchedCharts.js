import React from 'react';
import PropTypes from 'prop-types';
import ChartBar from '../../charts/ChartBar';
import LineChart from '../../charts/LineChart';

/**
 * @param {object} props Component props
 * @param {boolean} props.isBarChart check if it is bar chart or not
 * @param {string} props.dataKey unique data key
 * @param {string} props.label title
 * @param {string} props.color the color of the content
 * @param {countryStats} props.data chart data
 */
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      recovered: PropTypes.number.isRequired,
      deaths: PropTypes.number.isRequired,
      cases: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
  isBarChart: PropTypes.bool.isRequired,
  dataKey: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SwitchedCharts;
