import styled from 'styled-components';

const S = {};

S.MapContainer = styled.div`
  width: 250px;
  path {
    cursor: pointer;
    outline: none;
    stroke: #ffe1e0;
    stroke-width: 3;

    &:hover {
      stroke: #ff073a;
    }
  }

  circle {
    cursor: pointer;

    &:hover {
      stroke: #ff073a;
      stroke-width: 3;
    }
  }
`;

export default S;
