import React from 'react';
import { Row, Col } from 'antd';
import S from './styles';
import {
  maroon,
  green,
  blue,
  red,
  transparentBlue,
  transparentGreen,
  transparentMaroon,
  transparentRed,
} from '../../../colors';

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
      color={maroon}
      background={showBackground && transparentMaroon}
    />
    <StatItem
      text="Activos"
      number={actives}
      color={blue}
      background={showBackground && transparentBlue}
    />
    <StatItem
      text="Recuperados"
      number={recovered}
      color={green}
      background={showBackground && transparentGreen}
    />
    <StatItem
      text="Muertes"
      number={deaths}
      color={red}
      background={showBackground && transparentRed}
    />
  </S.Row>
);

export default Stats;
