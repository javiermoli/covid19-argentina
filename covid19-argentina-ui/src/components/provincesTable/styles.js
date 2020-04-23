import { Table } from 'antd';
import styled from 'styled-components';
import { shadow } from '../../colors';

const S = {};

S.Table = styled(Table)`
  div.ant-table.ant-table-small {
    box-shadow: 0px 0px 4px 0px ${shadow};
  }
  @media (max-width: 500px) {
    div.ant-table.ant-table-small {
      width: 100%;
      overflow-y: scroll;
    }
  }
`;
export default S;
