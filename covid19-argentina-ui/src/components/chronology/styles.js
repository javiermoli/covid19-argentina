import styled from 'styled-components';
import { Switch } from 'antd';

const S = {};

S.Container = styled.div`
  margin-top: 25px;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

S.Title = styled.h3`
  font-weight: bold;
  font-size: 25px;
  margin: 30px 0;
  color: #343a40;
`;

S.Switch = styled(Switch)`
  button.ant-switch-checked {
    color: #bc1a1d !important;
    background-color: #bc1a1d !important;
  }
`;

export default S;
