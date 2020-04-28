import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChartOutlined, LineChartOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import SwitchedCharts from '../commonComponents/switchedCharts/SwitchedCharts';
import S from './styles';
import { maroon, green, blue, red } from '../../colors';

const Chronology = () => {
  const [isBarChart, toggleChart] = useState(true);
  const [isDaily, toggleIsDaily] = useState(true);
  const chronology = useSelector((state) => state.country.stats);

  /**
   * Parse the date property of each day for the charts
   */
  const chronologyParsedDates = chronology.map((day) => {
    const date = new Date(day.date);
    return {
      ...day,
      date: `${date.getDate()}/${date.getMonth() + 1}`,
    };
  });

  /**
   * Obtain the accumulated deaths, cases and recovered stats
   */
  const accumulatedData = chronologyParsedDates.reduce((acc, element, i) => {
    if (!i) {
      acc.push(element);
    } else {
      const newElement = {
        ...element,
        deaths: acc[i - 1].deaths + element.deaths,
        cases: acc[i - 1].cases + element.cases,
        recovered: acc[i - 1].recovered + element.recovered,
      };
      acc.push(newElement);
    }
    return acc;
  }, []);

  return (
    <div>
      <S.Title>Gráficos</S.Title>
      <S.ButtonsContainer>
        <S.Button isActive={!isDaily} onClick={() => toggleIsDaily(false)}>
          Acumulativo
        </S.Button>
        <S.Button isActive={isDaily} onClick={() => toggleIsDaily(true)}>
          Diario
        </S.Button>
      </S.ButtonsContainer>
      <S.Switch
        style={{ backgroundColor: blue }}
        checkedChildren={<LineChartOutlined />}
        unCheckedChildren={<BarChartOutlined />}
        checked={isBarChart}
        onChange={(value) => toggleChart(value)}
        defaultChecked
      />
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <SwitchedCharts
            isBarChart={isBarChart}
            color={maroon}
            dataKey="cases"
            label="Casos"
            data={!isDaily ? accumulatedData : chronologyParsedDates}
          />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <SwitchedCharts
            isBarChart={isBarChart}
            color={green}
            dataKey="recovered"
            label="Recuperados"
            data={!isDaily ? accumulatedData : chronologyParsedDates}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }} md={{ span: 12 }}>
          <SwitchedCharts
            isBarChart={isBarChart}
            color={red}
            dataKey="deaths"
            label="Muertes"
            data={!isDaily ? accumulatedData : chronologyParsedDates}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Chronology;
