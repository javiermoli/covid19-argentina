import styled from 'styled-components';

const S = {};

S.Title = styled.h1`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
  color: #343a40;
`;

S.TitleContainer = styled.div`
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

export default S;
