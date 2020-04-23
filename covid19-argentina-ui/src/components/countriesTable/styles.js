import styled from 'styled-components';
import { shadow } from '../../colors';

const S = {};

S.Container = styled.div`
  div.ant-table {
    box-shadow: 0px 0px 4px 0px ${shadow};
    overflow-y: auto;
  }
`;

export default S;
