import styled from 'styled-components';
import { Row } from 'antd';

const S = {};

const commonStyles = 'font-weight: bold; font-size: 14px;';

S.ColContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  border-radius: 5px;
  background-color: ${(props) => props.background || 'transparent'};
  @media (max-width: 500px) {
    width: 75px;
  }

  @media (max-width: 330px) {
    width: 70px;
  }
`;

S.Text = styled.h5`
  ${commonStyles}
  opacity: 0.7;
  color: ${(props) => props.color};
  @media (max-width: 500px) {
    font-size: 11px;
  }

  @media (max-width: 330px) {
    font-size: 10px;
  }
`;

S.Number = styled.h4`
  ${commonStyles}
  color: ${(props) => props.color};
  font-weight: bold;
  font-size: 22px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

S.Row = styled(Row)`
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
  div.ant-col {
    @media (max-width: 500px) {
      padding: 8px 4px !important;
    }
  }
`;

export default S;
