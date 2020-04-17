import React from 'react';
import { Row, Col } from 'antd';
import S from './styles';

const StatItem = ({ text, number, color, background }) => (
  <Col>
    <S.ColContainer background={background}>
      <Row>
        <S.Text color={color}>{text}</S.Text>
      </Row>
      <Row>
        <S.Number color={color}>{number}</S.Number>
      </Row>
    </S.ColContainer>
  </Col>
);

const Stats = ({ confirmed, actives, recovered, deaths, showBackground }) => (
  <S.Row gutter={[24, 16]}>
    <StatItem
      text="Confirmados"
      number={confirmed}
      color="rgb(188, 26, 29)"
      background={showBackground && 'rgba(255, 7, 58, 0.12549)'}
    />
    <StatItem
      text="Activos"
      number={actives}
      color="#007bff"
      background={showBackground && 'rgba(0, 123, 255, 0.0627451)'}
    />
    <StatItem
      text="Recuperados"
      number={recovered}
      color="#28a745"
      background={showBackground && 'rgba(40, 167, 69, 0.12549)'}
    />
    <StatItem
      text="Muertes"
      number={deaths}
      color="#ff073a"
      background={showBackground && 'rgba(255, 7, 58, 0.12549)'}
    />
  </S.Row>
);

export default Stats;
