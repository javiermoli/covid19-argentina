import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Drawer, Button } from 'antd';
import { logout } from '../../actions/authActions';
import S from './styles';

/**
 * @param {object} props Component props
 * @param {{pathname: string, }} props.location history data
 */
const Nav = ({ location }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.login);
  const [isVisible, toggleVisible] = useState(false);
  const [selected, setSelected] = useState(location.pathname);

  return (
    <S.Header>
      <S.MenuOutlined onClick={() => toggleVisible(true)} />
      <Drawer
        title="Menu"
        placement="left"
        closable
        onClose={() => toggleVisible(false)}
        visible={isVisible}
      >
        <S.Menu onClick={(e) => setSelected(e.key)} selectedKeys={[selected]} mode="inline">
          <S.Item key="/">
            <S.NavLink onClick={() => toggleVisible(false)} exact to="/">
              Home
            </S.NavLink>
          </S.Item>
          <S.Item key="/mundo">
            <S.NavLink onClick={() => toggleVisible(false)} exact to="/mundo">
              Resto del mundo
            </S.NavLink>
          </S.Item>
          {auth && (
            <S.Item key="/dashboard">
              <S.NavLink onClick={() => toggleVisible(false)} exact to="/dashboard">
                Dashboard
              </S.NavLink>
            </S.Item>
          )}
        </S.Menu>
      </Drawer>
      {auth && (
        <Button onClick={() => dispatch(logout())} danger type="primary">
          Logout
        </Button>
      )}
    </S.Header>
  );
};

Nav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Nav);
