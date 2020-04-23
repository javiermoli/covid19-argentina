import React, { useState } from 'react';
import { Drawer } from 'antd';
import S from './styles';
import { blue } from '../../colors';

const Nav = () => {
  const [isVisible, setVisible] = useState(false);
  const [selected, setSelected] = useState('home');

  return (
    <S.Header style={{ backgroundColor: blue }}>
      <S.MenuOutlined onClick={() => setVisible(true)} />
      <Drawer
        title="Menu"
        placement="left"
        closable
        onClose={() => setVisible(false)}
        visible={isVisible}
      >
        <S.Menu onClick={(e) => setSelected(e.key)} selectedKeys={[selected]} mode="inline">
          <S.Item key="home">
            <S.NavLink onClick={() => setVisible(false)} exact to="/">
              Home
            </S.NavLink>
          </S.Item>
          <S.Item key="world">
            <S.NavLink onClick={() => setVisible(false)} exact to="/mundo">
              Resto del mundo
            </S.NavLink>
          </S.Item>
        </S.Menu>
      </Drawer>
    </S.Header>
  );
};

export default Nav;
