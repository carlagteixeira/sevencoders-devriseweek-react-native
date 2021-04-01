import {ThemeContext} from 'styled-components';
import styled from 'styled-components/native';

export const FeatureCardContainer = styled.View`
  width: ${({theme}) => theme.metrics.px(80)}px;
  height: ${({theme}) => theme.metrics.px(80)}px;
  background-color: ${({theme}) => theme.colors.backgroundLight};
  border-radius: ${({theme}) => theme.metrics.px(6)}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
