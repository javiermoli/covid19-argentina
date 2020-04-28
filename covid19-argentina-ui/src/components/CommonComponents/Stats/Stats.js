import React from 'react';
import PropTypes from 'prop-types';
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

StatItem.propTypes = {
  background: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

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

Stats.propTypes = {
  deaths: PropTypes.number.isRequired,
  recovered: PropTypes.number.isRequired,
  actives: PropTypes.number.isRequired,
  confirmed: PropTypes.number.isRequired,
  showBackground: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

Stats.defaultProps = {
  showBackground: '',
};

export default Stats;
