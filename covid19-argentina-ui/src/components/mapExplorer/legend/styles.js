import styled from 'styled-components';

const S = {};

S.Text = styled.text`
  text-transform: uppercase;
  font-size: 10px;
`;

S.Rect = styled.rect`
  fill: ${({ layer }) => layer.color};
`;

export default S;
