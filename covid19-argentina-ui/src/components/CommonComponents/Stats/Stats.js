import React from 'react';
import { Row, Col } from 'antd';
import './styles.scss';

const Stats = ({ confirmed, actives, recovered, deaths, showBackground }) => {
  const activeClass = showBackground ? 'stats__background--active' : '';
  return (
    <div className="stats-container">
      <Row className="" gutter={[24, 16]}>
        <Col>
          <div className={`${activeClass}`}>
            <Row>
              <h5 className="summary__subtitle summary__subtitle--cases">Confirmados</h5>
            </Row>
            <Row justify="center">
              <h4 className="summary__subtitle-number summary__subtitle-number--cases">
                {confirmed}
              </h4>
            </Row>
          </div>
        </Col>
        <Col>
          <div className={`${activeClass}`}>
            <Row>
              <h5 className="summary__subtitle summary__subtitle--actives">Activos</h5>
            </Row>
            <Row justify="center">
              <h4 className="summary__subtitle-number summary__subtitle-number--actives">
                {actives}
              </h4>
            </Row>
          </div>
        </Col>
        <Col>
          <div className={`${activeClass}`}>
            <Row>
              <h5 className="summary__subtitle summary__subtitle--recovered">Recuperados</h5>
            </Row>
            <Row justify="center">
              <h4 className="summary__subtitle-number summary__subtitle-number--recovered">
                {recovered}
              </h4>
            </Row>
          </div>
        </Col>
        <Col>
          <div className={`${activeClass}`}>
            <Row>
              <h5 className="summary__subtitle summary__subtitle-number--deaths">Muertes</h5>
            </Row>
            <Row justify="center">
              <h4 className="summary__subtitle-number summary__subtitle-number--deaths">
                {deaths}
              </h4>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Stats;
