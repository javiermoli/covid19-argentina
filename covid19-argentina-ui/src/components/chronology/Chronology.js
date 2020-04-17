import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'antd';
import { BarChartOutlined, LineChartOutlined } from '@ant-design/icons';
// import PieChart from '../charts/PieChart';
import LineChart from '../charts/LineChart';
import ChartBar from '../charts/ChartBar';
import S from './styles';

const Chronology = () => {
  const [isBarChart, toggleChart] = useState(true);
  const chronology = useSelector((state) => state.country.chronology);
  // const countryData = useSelector((state) => state.country.stats);
  // const { cases, recovered, deaths } = countryData;
  // const active = cases - recovered;
  const chronologyParsedDates = chronology.map((day) => {
    const date = new Date(day.Date);
    return {
      ...day,
      date: `${date.getDate()}/${date.getMonth() + 1}`,
    };
  });

  return (
    <div>
      <S.Title className="chronology__title">Gráficos</S.Title>
      <Switch
        style={{ backgroundColor: '#bc1a1d' }}
        checkedChildren={<LineChartOutlined />}
        unCheckedChildren={<BarChartOutlined />}
        checked={isBarChart}
        onChange={(value) => toggleChart(value)}
        defaultChecked
      />

      <S.Container>
        {isBarChart ? (
          <ChartBar data={chronologyParsedDates} />
        ) : (
          <LineChart data={chronologyParsedDates} />
        )}
      </S.Container>

      {/* <PieChart data={[{ data: recovered }, { data: deaths }, { data: active }]} /> */}
    </div>
  );
};

export default Chronology;
