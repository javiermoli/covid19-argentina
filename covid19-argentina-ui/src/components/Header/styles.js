import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const S = {};

S.NavLink = styled(NavLink)`
  &:hover: #262626;
`;

S.MenuOutlined = styled(MenuOutlined)`
  font-size: 20px;
  color: #ffffff;
`;

S.Item = styled(Menu.Item)`
  background-color: transparent !important;
  color: #262626;
  font-weight: bold;
`;

S.Header = styled(Layout.Header)`
  background-color: #1890ff;
  padding: 0 25px;
`;

S.Menu = styled(Menu)`
  border-right: none;
`;

export default S;
