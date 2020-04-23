import styled from 'styled-components';

const S = {};

S.MapContainer = styled.div`
  width: 250px;
  path {
    cursor: pointer;
    outline: none;
    stroke-width: 3;
  }

  circle {
    cursor: pointer;
    stroke-width: 3;
  }
`;

export default S;
