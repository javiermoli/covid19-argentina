import React, { memo } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { red, green, blue } from '../../colors';

const COLORS = [green, blue, red];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Chart = memo(({ data }) => (
  <PieChart isAnimationActive={false} width={400} height={400}>
    <Pie
      isAnimationActive={false}
      data={data}
      cx={200}
      cy={200}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="data"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip payload={data} />
  </PieChart>
));

export default Chart;
