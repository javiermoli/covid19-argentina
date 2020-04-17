import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  height: 100px;
  width: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default S;
