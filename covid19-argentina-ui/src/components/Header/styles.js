import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { blue, white, outerSpace } from '../../colors';

const S = {};

S.NavLink = styled(NavLink)`
  &:hover: ${outerSpace};
`;

S.MenuOutlined = styled(MenuOutlined)`
  font-size: 20px;
  color: ${white};
`;

S.Item = styled(Menu.Item)`
  background-color: transparent !important;
  color: ${outerSpace};
  font-weight: bold;
`;

S.Header = styled(Layout.Header)`
  background-color: ${blue};
  padding: 0 25px;
`;

S.Menu = styled(Menu)`
  border-right: none;
`;

export default S;
