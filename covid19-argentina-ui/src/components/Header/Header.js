import React, { useState } from 'react';
import { Drawer } from 'antd';
import S from './styles';

const Nav = () => {
  const [isVisible, setVisible] = useState(false);
  const [selected, setSelected] = useState('home');

  return (
    <S.Header style={{ backgroundColor: '#1890ff' }}>
      <S.MenuOutlined onClick={() => setVisible(true)} />
      <Drawer
        title="Menu"
        placement="left"
        closable
        onClose={() => setVisible(!isVisible)}
        visible={isVisible}
      >
        <S.Menu onClick={(e) => setSelected(e.key)} selectedKeys={[selected]} mode="inline">
          <S.Item key="home">
            <S.NavLink exact to="/">
              Home
            </S.NavLink>
          </S.Item>
          <S.Item key="world">
            <S.NavLink exact to="/mundo">
              Resto del mundo
            </S.NavLink>
          </S.Item>
        </S.Menu>
      </Drawer>
    </S.Header>
  );
};

export default Nav;
