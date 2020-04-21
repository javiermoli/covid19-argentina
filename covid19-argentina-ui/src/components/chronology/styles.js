import styled from 'styled-components';
import { Switch } from 'antd';

const S = {};

S.Container = styled.div`
  margin-top: 25px;
  @media (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

S.Title = styled.h3`
  font-weight: bold;
  font-size: 25px;
  margin: 30px 0;
  color: #343a40;
`;

S.Switch = styled(Switch)`
  margin: 10px 0;
`;

S.ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

S.Button = styled.button`
  margin: 0 5px;
  font-weight: bold;
  border: none;
  opacity: ${({ isActive }) => (isActive ? 1 : 0.6)};
  background-color: #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  padding: 6px;
  color: #8c8c8c;
`;

export default S;
