import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

const S = {};

S.Content = styled(Content)`
  padding: 25px 25px;
  background-color: #ffffff;
  @media (max-width: 500px) {
    padding: 25px 10px;
  }
`;

export default S;
