import styled from 'styled-components';
import { Form } from 'antd';

const S = {};

S.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

S.Form = styled(Form)`
  width: 320px;
`;

export default S;
