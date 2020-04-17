import styled from 'styled-components';

const S = {};

S.Container = styled.div`
  width: 500px;
  height: 300px;

  @media (max-width: 500px) {
    width: 350px;
    height: 210px;
  }
`;
export default S;
