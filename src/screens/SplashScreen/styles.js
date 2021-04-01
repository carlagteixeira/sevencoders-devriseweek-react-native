import styled from 'styled-components/native';

export const SectionView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.backgroundDark};
`;

export const SectionImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export const SectionText = styled.Text`
  font-size: 24px;
`;
