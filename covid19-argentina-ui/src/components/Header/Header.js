import React from 'react';
import { Layout } from 'antd';
import S from './styles';

const { Header } = Layout;

const Nav = () => (
  <Header xs={{ span: 24 }}>
    <S.NavLink
      exact
      activeStyle={{
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#1890ff',
      }}
      to="/"
    >
      Home
    </S.NavLink>
    <S.NavLink
      exact
      activeStyle={{
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#1890ff',
      }}
      to="/mundo"
    >
      Resto del mundo
    </S.NavLink>
  </Header>
);

export default Nav;
