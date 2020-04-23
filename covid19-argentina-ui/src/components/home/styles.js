import styled from 'styled-components';
import { outerSpace } from '../../colors';

const S = {};

S.Title = styled.h1`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
  color: ${outerSpace};
`;

S.TitleContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

export default S;
