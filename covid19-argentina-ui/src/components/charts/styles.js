import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    height: 250px;
  }
`;
export default S;
