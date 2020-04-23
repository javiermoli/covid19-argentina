import styled from 'styled-components';

const S = {};

S.MapContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

S.Container = styled.div`
  margin-left: 40px;
  @media (max-width: 980px) {
    margin: 35px 0 0 0;
  }
  @media (max-width: 500px) {
    margin: 25px 0 0 0;
  }
`;

export default S;
