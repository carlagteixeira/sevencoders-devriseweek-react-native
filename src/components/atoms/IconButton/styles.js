import {ThemeContext} from 'styled-components';
import styled from 'styled-components/native';

export const IconButtonContainer = styled.TouchableOpacity`
  width: ${({theme}) => theme.metrics.px(60)}px;
  height: ${({theme}) => theme.metrics.px(60)}px;
  background-color: ${({theme, transparent}) =>
    transparent
      ? theme.colors.purpleTransparent
      : theme.colors.backgroundLight};

  display: flex;
  align-items: center;
  justify-content: center;

  border-color: ${({theme}) => theme.colors.primary};
  border-width: ${({theme}) => theme.metrics.px(2)}px;
  border-radius: ${({theme}) => theme.metrics.px(12)}px;
`;
