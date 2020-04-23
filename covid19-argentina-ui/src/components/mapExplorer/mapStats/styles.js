import styled from 'styled-components';
import { maroon, gray } from '../../../colors';

const S = {};

S.HeaderContainer = styled.div`
  margin-bottom: 2.5rem;
  align-self: flex-start;
`;

S.HeaderTitle = styled.h2`
  margin: 0;
  padding: 0;
`;

S.HeaderSubtitle = styled.h4`
  padding: 0;
  margin: 0;
  color: ${gray};
`;

S.StatsTitle = styled.h4`
  color: ${maroon};
  font-weight: bold;
  font-size: 16px;
`;

export default S;
