import { Table } from 'antd';
import styled from 'styled-components';

const S = {};

S.Table = styled(Table)`
  @media (max-width: 500px) {
    div.ant-table.ant-table-small {
      width: 100%;
      overflow-y: scroll;
    }
  }
`;
export default S;
