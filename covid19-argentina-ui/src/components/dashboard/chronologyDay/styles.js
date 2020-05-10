import styled from 'styled-components';
import { Card } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { red, outerSpace } from '../../../colors';

const S = {};

S.Card = styled(Card)`
  width: 300px;
  margin: 10px;
`;

S.DeleteOutlined = styled(DeleteOutlined)`
  &.anticon-delete.anticon:hover {
    color: ${red};
  }
`;

S.Stat = styled.span`
  font-weight: bold;
  color: ${outerSpace};
`;

S.StatValue = styled.span`
  font-weight: bold;
  color: ${({ color }) => color};
`;

export default S;
